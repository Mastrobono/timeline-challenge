import React, { useState, useRef } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { addDays } from 'date-fns';
import type { Table, Reservation, TimelineConfig, DragState } from '@/types';
import { ROW_HEIGHT } from '@/lib/constants';
import { slotToIso, pxToSlot, isoToSlotIndex, getSlotsPerDay } from '@/lib/timeUtils';
import ReservationBlock from './ReservationBlock';


interface TableRowProps {
  table: Table;
  reservations: Reservation[];
  config: TimelineConfig;
  dragState?: DragState;
  selectedSlot?: {
    tableId: string | null;
    startTime: string | null;
  };
  editingReservation?: string | null;
  viewMode?: 'day' | '3-day' | 'week' | 'month';
  onSlotClick?: (table: Table, startTime: string) => void;
  onEditClick?: (reservation: Reservation, table: Table, startTime: string) => void;
  onCreateReservation?: (table: Table, startTime: string, endTime: string) => void;
}

export default function TableRow({ table, reservations, config, dragState, selectedSlot, editingReservation, viewMode = 'day', onSlotClick, onEditClick, onCreateReservation }: TableRowProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: table.id,
  });

  // Helper function to get the correct date for a slot index
  const getDateForSlot = (slotIndex: number): string => {
    const slotsPerDay = getSlotsPerDay(config);
    const dayIndex = Math.floor(slotIndex / slotsPerDay);
    const targetDate = addDays(new Date(config.date), dayIndex);
    return targetDate.toISOString().split('T')[0]; // Get YYYY-MM-DD format
  };

  // State for drag-to-create functionality
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; slotIndex: number } | null>(null);
  const [dragEnd, setDragEnd] = useState<{ x: number; slotIndex: number } | null>(null);
  const [hasDragged, setHasDragged] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);

  /**
   * Handle clicks on empty slots in the timeline
   * Calculates the exact start time based on the click position
   */
  const handleSlotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('TableRow - handleSlotClick triggered:', {
      tableId: table.id,
      offsetX: e.nativeEvent.offsetX,
      target: e.target,
      currentTarget: e.currentTarget,
      isSameTarget: e.target === e.currentTarget
    });
    
    // Prevent event conflicts - only handle clicks directly on the empty row
    if (e.target !== e.currentTarget) {
      console.log('TableRow - Click ignored: target !== currentTarget');
      return;
    }

    // Prevent click if we just finished dragging
    if (hasDragged) {
      console.log('TableRow - Click ignored: hasDragged = true');
      setHasDragged(false);
      return;
    }

    // Only proceed if onSlotClick handler is provided
    if (!onSlotClick) {
      console.log('TableRow - Click ignored: no onSlotClick handler');
      return;
    }

    // Calculate the slot index based on the horizontal click position
    const clickX = e.nativeEvent.offsetX;
    const slotsPerDay = getSlotsPerDay(config);
    const dayWidth = slotsPerDay * config.slotWidth;
    const dayIndex = Math.floor(clickX / dayWidth);
    const dayClickX = clickX - (dayIndex * dayWidth);
    const slotIndex = pxToSlot(dayClickX, config) + (dayIndex * slotsPerDay);
    
    console.log('TableRow - Slot calculation:', {
      clickX,
      slotsPerDay,
      dayWidth,
      dayIndex,
      dayClickX,
      slotIndex,
      configSlotWidth: config.slotWidth
    });
    
    // Convert slot index to ISO timestamp
    const startTime = slotToIso(slotIndex, config, getDateForSlot(slotIndex));
    
    console.log('TableRow - Final result:', {
      slotIndex,
      startTime,
      targetDate: getDateForSlot(slotIndex)
    });
    
    // Call the onSlotClick handler with table and startTime
    onSlotClick(table, startTime);
  };

  // Handle mouse down to start drag-to-create
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent event conflicts - only handle clicks directly on the empty row
    if (e.target !== e.currentTarget) {
      return;
    }

    // Prevent default to avoid text selection
    e.preventDefault();
    
    const clickX = e.nativeEvent.offsetX;
    const slotsPerDay = getSlotsPerDay(config);
    const dayWidth = slotsPerDay * config.slotWidth;
    const dayIndex = Math.floor(clickX / dayWidth);
    const dayClickX = clickX - (dayIndex * dayWidth);
    const slotIndex = pxToSlot(dayClickX, config) + (dayIndex * slotsPerDay);
    
    // Calculate the exact position of the nearest slot
    const slotPosition = dayClickX;
    
    setDragStart({ x: slotPosition, slotIndex });
    setDragEnd({ x: slotPosition, slotIndex });
    setIsDragging(true);
    setHasDragged(false); // Reset drag flag
  };

  // Handle mouse move during drag
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !dragStart) return;
    
    const currentX = e.nativeEvent.offsetX;
    const slotsPerDay = getSlotsPerDay(config);
    const dayWidth = slotsPerDay * config.slotWidth;
    const dayIndex = Math.floor(currentX / dayWidth);
    const dayClickX = currentX - (dayIndex * dayWidth);
    const slotIndex = pxToSlot(dayClickX, config) + (dayIndex * slotsPerDay);
    
    // Calculate the exact position of the current slot
    const slotPosition = dayClickX;
    
    // Mark that we've dragged if we've moved more than 5 pixels
    if (Math.abs(slotPosition - dragStart.x) > 5) {
      setHasDragged(true);
    }
    
    setDragEnd({ x: slotPosition, slotIndex });
  };

  // Handle mouse up to complete drag-to-create
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !dragStart || !dragEnd) {
      setIsDragging(false);
      setDragStart(null);
      setDragEnd(null);
      return;
    }

    // Only proceed with drag-to-create if we actually dragged
    if (hasDragged && onCreateReservation) {
      // Calculate start and end times
      const startSlotIndex = Math.min(dragStart.slotIndex, dragEnd.slotIndex);
      const endSlotIndex = Math.max(dragStart.slotIndex, dragEnd.slotIndex);
      
      // Ensure minimum duration of 1 slot (15 minutes)
      const finalEndSlotIndex = Math.max(endSlotIndex, startSlotIndex + 1);
      
      const startTime = slotToIso(startSlotIndex, config, getDateForSlot(startSlotIndex));
      const endTime = slotToIso(finalEndSlotIndex, config, getDateForSlot(finalEndSlotIndex));
      
      console.log('TableRow - Creating reservation:', {
        tableId: table.id,
        startSlotIndex,
        endSlotIndex: finalEndSlotIndex,
        startTime,
        endTime,
        startDate: getDateForSlot(startSlotIndex),
        endDate: getDateForSlot(finalEndSlotIndex),
        slotsPerDay: getSlotsPerDay(config),
        dayIndex: Math.floor(startSlotIndex / getSlotsPerDay(config))
      });
      
      // Call the onCreateReservation handler
      onCreateReservation(table, startTime, endTime);
    }
    
    // Reset state
    setIsDragging(false);
    setDragStart(null);
    setDragEnd(null);
    // Keep hasDragged true to prevent click event
  };

  // Handle mouse leave to cancel drag
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragStart(null);
      setDragEnd(null);
      setHasDragged(false);
    }
  };

  // Check if this table row has a selected slot
  const isSlotSelected = selectedSlot?.tableId === table.id && selectedSlot?.startTime;
  
  // Calculate position for selected slot overlay
  const getSelectedSlotPosition = () => {
    if (!isSlotSelected || !selectedSlot?.startTime) return null;
    
    // Convert startTime to slot index using the proper utility function
    const startSlot = isoToSlotIndex(selectedSlot.startTime, config);
    
    return {
      left: startSlot * config.slotWidth,
      width: config.slotWidth
    };
  };

  const selectedSlotPosition = getSelectedSlotPosition();

  return (
    <div 
      ref={setNodeRef}
      data-table-id={table.id}
      className={`relative border-b border-gray-200 z-40 `}
      style={{ height: `${ROW_HEIGHT}px` }}
    >
      <div 
        ref={dragRef}
        className="relative h-full"
        onClick={handleSlotClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ 
          width: `${(config.endHour - config.startHour) * (60 / config.slotMinutes) * config.slotWidth * (viewMode === '3-day' ? 3 : viewMode === 'week' ? 7 : 1)}px`,
          cursor: isDragging ? 'col-resize' : 'pointer'
        }}
      >
        {/* Selected slot overlay */}
        {selectedSlotPosition && (
          <div
            className="absolute top-0 bottom-0 bg-blue-200 bg-opacity-40 border-2 border-blue-500 border-opacity-60 pointer-events-none z-50"
            style={{
              left: `${selectedSlotPosition.left}px`,
              width: `${selectedSlotPosition.width}px`
            }}
          />
        )}

        {/* Drag-to-create overlay */}
        {isDragging && dragStart && dragEnd && (
          <div
            className="absolute top-0 bottom-0 bg-green-200 bg-opacity-50 border-2 border-green-500 border-opacity-70 pointer-events-none z-60"
            style={{
              left: `${Math.min(dragStart.x, dragEnd.x)}px`,
              width: `${Math.abs(dragEnd.x - dragStart.x)}px`
            }}
          />
        )}
        
        {/* Render reservation blocks */}
        {reservations.map((reservation) => (
          <ReservationBlock
            key={reservation.id}
            reservation={reservation}
            config={config}
            dragState={dragState}
            table={table}
            editingReservation={editingReservation}
            onEditClick={onEditClick}
          />
        ))}
      </div>
    </div>
  );
}
