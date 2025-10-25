'use client';

import { useEffect, useState, useCallback } from 'react';
import { DndContext, PointerSensor, useSensor, useSensors, DragEndEvent, DragMoveEvent, DragStartEvent } from '@dnd-kit/core';
import TimelineLayout from '@/components/timeline/TimelineLayout';
import useTimelineStore from '@/store/useTimelineStore';
import { seedSectors, seedTables, seedReservations, seedRestaurantConfig } from '@/data/seed-small';
import { canReserveSlot } from '@/lib/conflictService';
import { pxToSlot, slotToIso, isoToSlotIndex } from '@/lib/timeUtils';
import type { TimelineConfig } from '@/types';

export default function TimelinePage() {
  const { 
    sectorsById, 
    reservationsById, 
    restaurantConfig,
    ui, 
    _hasHydrated,
    setSlotWidth, 
    setVisibleDate,
    upsertSector,
    upsertTable,
    addReservation,
    updateReservation,
    setRestaurantConfig
  } = useTimelineStore();

  // State for real-time drag preview
  const [dragState, setDragState] = useState<{
    activeId: string | null;
    delta: { x: number; y: number };
    dragType: 'move' | 'resize-left' | 'resize-right' | null;
  }>({
    activeId: null,
    delta: { x: 0, y: 0 },
    dragType: null,
  });

  // DnD sensors
  const sensors = useSensors(useSensor(PointerSensor));
  
  // Seed data if store is empty (only after hydration is complete)
  useEffect(() => {
    // Wait for hydration to complete
    if (!_hasHydrated) {
      return;
    }

    const hasData = Object.keys(sectorsById).length > 0;
    const hasRestaurantConfig = restaurantConfig !== null;
    
    
    if (!hasData || !hasRestaurantConfig) {
      
      // Add restaurant configuration
      setRestaurantConfig(seedRestaurantConfig);
      
      // Add sectors
      seedSectors.forEach(sector => upsertSector(sector));
      
      // Add tables
      seedTables.forEach(table => upsertTable(table));
      
      // Add reservations
      seedReservations.forEach(reservation => addReservation(reservation));
      
      // Set visible date to match the reservations (October 2025)
      setVisibleDate('2025-10-24');
    } else {
    }
  }, [_hasHydrated, sectorsById, restaurantConfig, upsertSector, upsertTable, addReservation, setVisibleDate, setRestaurantConfig]);
  
  // Create timeline config
  const config: TimelineConfig = {
    date: ui.visibleDate,
    startHour: restaurantConfig?.operatingHours.startHour || ui.startHour,
    endHour: restaurantConfig?.operatingHours.endHour || 23,
    slotMinutes: restaurantConfig?.slotConfiguration.slotMinutes || 15,
    slotWidth: ui.slotWidth,
    viewMode: ui.viewMode,
    timezone: restaurantConfig?.timezone || 'America/Argentina/Buenos_Aires',
  };
  
  // Zoom controls
  const zoomLevels = [
    { label: '50%', value: 30 },
    { label: '100%', value: 60 },
    { label: '150%', value: 90 },
  ];
  
  const handleZoomChange = (slotWidth: number) => {
    setSlotWidth(slotWidth);
  };
  
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVisibleDate(event.target.value);
  };

  const handleDragStart = (event: DragStartEvent) => {
    const activeId = String(event.active.id);
    let dragType: 'move' | 'resize-left' | 'resize-right' | null = null;
    
    if (activeId.startsWith('resize-left-')) {
      dragType = 'resize-left';
    } else if (activeId.startsWith('resize-right-')) {
      dragType = 'resize-right';
    } else {
      dragType = 'move';
    }
    
    setDragState({
      activeId,
      delta: { x: 0, y: 0 },
      dragType,
    });
  };

  const handleDragMove = useCallback((event: DragMoveEvent) => {
    const { active, delta } = event;
    const activeId = String(active.id);
    
    // Only update when we cross slot boundaries (every 60px = 1 slot)
    setDragState(prev => {
      if (prev.activeId === activeId) {
        const prevSlot = Math.floor(prev.delta.x / 60); // 60px per slot
        const currentSlot = Math.floor(delta.x / 60);
        
        // Only update if we've moved to a different slot
        if (prevSlot === currentSlot) {
          return prev;
        }
      }
      
      return {
        activeId,
        delta: { x: delta.x, y: delta.y },
        dragType: prev.dragType,
      };
    });
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over, delta } = event;
    
    // Clear drag state
    setDragState({
      activeId: null,
      delta: { x: 0, y: 0 },
      dragType: null,
    });
    
    if (!over || !active) return;
    
    // Get the dragged reservation
    const reservation = active.data.current?.reservation;
    if (!reservation) return;
    
    const activeId = String(active.id);
    const deltaX = delta.x || 0;
    
    // Handle resize operations
    if (activeId.startsWith('resize-left-')) {
      // RESIZE LEFT LOGIC - change start time, keep end time
      const originalStartSlot = isoToSlotIndex(reservation.startTime, config);
      const originalEndSlot = isoToSlotIndex(reservation.endTime, config);
      
      // Calculate new start slot based on delta
      const newStartSlot = Math.max(0, originalStartSlot + pxToSlot(deltaX, config));
      
      // Ensure new start is before end and duration is valid (at least 1 slot)
      if (newStartSlot >= originalEndSlot) {
        return;
      }
      
      // Check for conflicts
      const allReservations = Object.values(reservationsById);
      const canResize = canReserveSlot(
        allReservations,
        reservation.tableId,
        newStartSlot,
        originalEndSlot,
        config,
        reservation.id
      );
      
      if (!canResize) {
        return;
      }
      
      // Calculate new start time
      const newStartTime = slotToIso(newStartSlot, config);
      
      // Update the reservation
      updateReservation(reservation.id, {
        startTime: newStartTime,
        endTime: reservation.endTime, // Keep original end time
      });
      
      
    } else if (activeId.startsWith('resize-right-')) {
      // RESIZE RIGHT LOGIC - change end time, keep start time
      const originalStartSlot = isoToSlotIndex(reservation.startTime, config);
      const originalEndSlot = isoToSlotIndex(reservation.endTime, config);
      
      // Calculate new end slot based on delta
      const newEndSlot = Math.max(originalStartSlot + 1, originalEndSlot + pxToSlot(deltaX, config));
      
      // Ensure new end is after start
      if (newEndSlot <= originalStartSlot) {
        return;
      }
      
      // Check for conflicts
      const allReservations = Object.values(reservationsById);
      const canResize = canReserveSlot(
        allReservations,
        reservation.tableId,
        originalStartSlot,
        newEndSlot,
        config,
        reservation.id
      );
      
      if (!canResize) {
        return;
      }
      
      // Calculate new end time
      const newEndTime = slotToIso(newEndSlot, config);
      
      // Update the reservation
      updateReservation(reservation.id, {
        startTime: reservation.startTime, // Keep original start time
        endTime: newEndTime,
      });
      
      
    } else {
      // MOVE LOGIC (existing functionality)
      // Get the target table
      const targetTableId = String(over.id);
      if (!targetTableId) return;
      
      // Calculate new position based on delta
      const originalStartSlot = isoToSlotIndex(reservation.startTime, config);
      const newStartSlot = Math.max(0, originalStartSlot + pxToSlot(deltaX, config));
      
      // Calculate new end slot (maintain duration)
      const originalEndSlot = isoToSlotIndex(reservation.endTime, config);
      const duration = originalEndSlot - originalStartSlot;
      const newEndSlot = newStartSlot + duration;
      
      // Check if the new position is valid (no conflicts)
      const allReservations = Object.values(reservationsById);
      const canMove = canReserveSlot(
        allReservations,
        targetTableId,
        newStartSlot,
        newEndSlot,
        config,
        reservation.id // Ignore the reservation being moved
      );
      
      if (!canMove) {
        return;
      }
      
      // Calculate new start and end times
      const newStartTime = slotToIso(newStartSlot, config);
      const newEndTime = slotToIso(newEndSlot, config);
      
      // Update the reservation
      updateReservation(reservation.id, {
        tableId: targetTableId,
        startTime: newStartTime,
        endTime: newEndTime,
      });
      
    }
  };
  
    return (
    <DndContext 
      sensors={sensors} 
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
    >
      <div className="h-screen flex flex-col bg-gray-100">
      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 h-14">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-semibold text-gray-900">Restaurant Timeline</h1>
            
            {/* Date picker */}
            <div className="flex items-center space-x-2">
              <label htmlFor="date-picker" className="text-sm font-medium text-gray-700">
                Date:
              </label>
              <input
                id="date-picker"
                type="date"
                value={ui.visibleDate}
                onChange={handleDateChange}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {/* Zoom controls */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Zoom:</span>
            <div className="flex space-x-1">
              {zoomLevels.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => handleZoomChange(value)}
                  className={`px-3 py-1 text-sm rounded-md border transition-colors ${
                    ui.slotWidth === value
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="flex-1 overflow-hidden">
        <TimelineLayout 
          config={config} 
          dragState={dragState}
        />
      </div>
      </div>
    </DndContext>
  );
}

