'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { DndContext, PointerSensor, useSensor, useSensors, DragEndEvent, DragMoveEvent, DragStartEvent, rectIntersection } from '@dnd-kit/core';
import TimelineLayout from '@/components/timeline/TimelineLayout';
import ReservationDrawer from '@/components/timeline/ReservationDrawer';
import Notification from '@/components/ui/Notification';
import useTimelineStore from '@/store/useTimelineStore';
import { useAutoInitialize } from '@/hooks/useAutoInitialize';
import { useNotification } from '@/hooks/useNotification';
import { ReservationValidationService } from '@/lib/reservationValidationService';
import { pxToSlot, slotToIso, isoToSlotIndex } from '@/lib/timeUtils';
import { format, toZonedTime } from 'date-fns-tz';
import type { TimelineConfig, Table, Reservation } from '@/types';


export default function TimelinePage() {
  const { 
    reservationsById, 
    restaurantConfig,
    ui, 
    setSlotWidth, 
    setVisibleDate,
    updateReservation,
    addReservation,
    tablesById
  } = useTimelineStore();
  
  // Hook para auto-inicialización en modo desarrollo
  const { isInitialized, isLoading: isInitializing, error: initError } = useAutoInitialize();
  
  // Notification hook
  const { notification, showNotification, hideNotification } = useNotification();
  
  // Helper function to format time in restaurant timezone
  const formatTimeInTimezone = (isoString: string, timezone: string) => {
    return format(toZonedTime(new Date(isoString), timezone), 'HH:mm');
  };
  
  // Counter for rejected reservations
  const [rejectedCount, setRejectedCount] = useState(0);
  
  // State for filtered reservations from TimelineLayout
  const [filteredReservations, setFilteredReservations] = useState<Reservation[]>([]);

  // Create timeline config - this will re-create when restaurantConfig changes
  const config: TimelineConfig = useMemo(() => ({
    date: ui.visibleDate,
    startHour: restaurantConfig?.operatingHours.startHour || ui.startHour,
    endHour: restaurantConfig?.operatingHours.endHour || 23,
    slotMinutes: restaurantConfig?.slotConfiguration.slotMinutes || 15,
    slotWidth: ui.slotWidth,
    viewMode: ui.viewMode,
    timezone: restaurantConfig?.timezone || 'UTC',
  }), [ui.visibleDate, ui.startHour, ui.slotWidth, ui.viewMode, restaurantConfig]);

  // Get filtered reservations directly from the store instead of using callback
  const getFilteredReservations = useCallback(() => {
    const allReservations = Object.values(reservationsById);
    
    // Filter reservations for current date
    return allReservations.filter(reservation => {
      const reservationDate = reservation.startTime.split('T')[0];
      return reservationDate === config.date;
    });
  }, [reservationsById, config.date]);
  
  // Update filtered reservations when dependencies change
  useEffect(() => {
    const filtered = getFilteredReservations();
    setFilteredReservations(filtered);
  }, [getFilteredReservations]);

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

  // State for create reservation modal
  const [drawerState, setDrawerState] = useState<{
    isOpen: boolean;
    table: Table | null;
    startTime: string | null;
    reservation: Reservation | null;
  }>({ isOpen: false, table: null, startTime: null, reservation: null });

  // DnD sensors
  const sensors = useSensors(useSensor(PointerSensor));
  
  // Drag handlers - moved here to avoid hooks order issues
  const handleDragMove = useCallback((event: DragMoveEvent) => {
    const { active, delta } = event;
    const activeId = String(active.id);
    
    // Only update when we cross slot boundaries
    setDragState(prev => {
      if (prev.activeId === activeId) {
        const prevSlot = Math.floor(prev.delta.x / config.slotWidth);
        const currentSlot = Math.floor(delta.x / config.slotWidth);
        
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
  }, [config.slotWidth]);
  
  // Mostrar loading mientras se inicializa en modo desarrollo
  if (process.env.NODE_ENV === 'development' && !isInitialized) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Inicializando aplicación...</h2>
          <p className="text-gray-600">Cargando datos del restaurante</p>
        </div>
      </div>
    );
  }

  // Mostrar error si hay problema en la inicialización
  if (process.env.NODE_ENV === 'development' && initError) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Error de inicialización</h2>
          <p className="text-gray-600 mb-4">{initError}</p>
          <p className="text-sm text-gray-500">
            Asegúrate de que los static seeds estén generados ejecutando: npm run generate-static-seeds
          </p>
        </div>
      </div>
    );
  }
  
  // Log removido para limpiar consola
  
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

  // Drawer handlers
  const handleOpenCreateDrawer = (table: Table, startTime: string) => {
    setDrawerState({
      isOpen: true,
      table,
      startTime,
      reservation: null
    });
  };

  const handleOpenEditDrawer = (reservation: Reservation, table: Table, startTime: string) => {
    setDrawerState({
      isOpen: true,
      table,
      startTime,
      reservation
    });
  };

  const handleCloseDrawer = () => {
    setDrawerState({
      isOpen: false,
      table: null,
      startTime: null,
      reservation: null
    });
  };

  const handleSaveReservation = (reservation: Reservation): boolean => {
    // Check if this reservation already exists in the store
    const existingReservation = reservationsById[reservation.id];
    
    // Validate before saving
    const allTables = Object.values(tablesById);
    const existingReservations = Object.values(reservationsById);
    
    const validation = ReservationValidationService.validateReservation(
      reservation,
      {
        restaurantConfig,
        tables: allTables,
        existingReservations: existingReservations.filter(r => r.id !== reservation.id),
        timezone: config.timezone
      }
    );

    if (!validation.isValid) {
      // Show error notification
      showNotification(
        'error',
        'Validation failed',
        validation.errors[0] || 'Cannot create/update reservation due to conflicts.'
      );
      return false;
    }
    
    if (existingReservation) {
      // Edit mode - update existing
      updateReservation(reservation.id, reservation);
      showNotification(
        'success',
        'Reservation updated',
        `Reservation for ${reservation.customer.name} has been updated successfully.`
      );
    } else {
      // Create mode - add new
      addReservation(reservation);
      showNotification(
        'success',
        'Reservation created',
        `New reservation for ${reservation.customer.name} has been created successfully.`
      );
    }
    
    return true;
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
      const slotDelta = pxToSlot(deltaX, config);
      const newStartSlot = Math.max(0, originalStartSlot + slotDelta);
      
      // Log removido para limpiar consola
      
      // Calculate total slots available in the timeline
      const totalSlots = (config.endHour - config.startHour) * (60 / config.slotMinutes);
      
      // Ensure new start is before end and duration is valid (at least 2 slots = 30 minutes)
      const newDurationSlots = originalEndSlot - newStartSlot;
      if (newStartSlot >= originalEndSlot || originalEndSlot > totalSlots || newDurationSlots < 2) {
        return;
      }
      
      // Check for conflicts using the full validation service
      const allTables = Object.values(tablesById);
      const updatedReservation = {
        ...reservation,
        startTime: slotToIso(newStartSlot, config),
        endTime: reservation.endTime
      };
      
      // Use filtered reservations if available, otherwise use all reservations
      const reservationsForValidation = filteredReservations.length > 0 
        ? filteredReservations.filter(r => r.id !== reservation.id)
        : Object.values(reservationsById).filter(r => r.id !== reservation.id);
      
      const validation = ReservationValidationService.validateReservation(
        updatedReservation,
        {
          restaurantConfig,
          tables: allTables,
          existingReservations: reservationsForValidation,
          timezone: config.timezone
        }
      );
      
      if (!validation.isValid) {
        console.log('🚫 RESIZE LEFT VALIDATION FAILED:', {
          reservationId: reservation.id,
          customerName: reservation.customer.name,
          originalTime: `${formatTimeInTimezone(reservation.startTime, config.timezone)} - ${formatTimeInTimezone(reservation.endTime, config.timezone)}`,
          newStartSlot,
          originalEndSlot,
          errors: validation.errors
        });
        
        // Show error notification
        showNotification(
          'error',
          'Conflict detected',
          `Cannot resize reservation. ${validation.errors[0]}`
        );
        return;
      }
      
      // Calculate new start time
      const newStartTime = slotToIso(newStartSlot, config);
      
      // Update the reservation
      updateReservation(reservation.id, {
        startTime: newStartTime,
        endTime: reservation.endTime, // Keep original end time
      });
      
      // Show success notification
      showNotification(
        'success',
        'Reservation updated',
        `Reservation successfully resized.`
      );
      
      
    } else if (activeId.startsWith('resize-right-')) {
      // RESIZE RIGHT LOGIC - change end time, keep start time
      const originalStartSlot = isoToSlotIndex(reservation.startTime, config);
      const originalEndSlot = isoToSlotIndex(reservation.endTime, config);
      
      // Calculate new end slot based on delta
      const slotDelta = pxToSlot(deltaX, config);
      const newEndSlot = Math.max(originalStartSlot + 1, originalEndSlot + slotDelta);
      
      // Log simplificado para resize right
      
      // Calculate total slots available in the timeline
      const totalSlots = (config.endHour - config.startHour) * (60 / config.slotMinutes);
      
      // Ensure new end is after start and within timeline bounds (at least 2 slots = 30 minutes)
      const newDurationSlots = newEndSlot - originalStartSlot;
      if (newEndSlot <= originalStartSlot || newEndSlot > totalSlots || newDurationSlots < 2) {
        return;
      }
      
      // Check for conflicts using the full validation service
      const allTables = Object.values(tablesById);
      const updatedReservation = {
        ...reservation,
        startTime: reservation.startTime,
        endTime: slotToIso(newEndSlot, config)
      };
      
      // Use filtered reservations if available, otherwise use all reservations
      const reservationsForValidation = filteredReservations.length > 0 
        ? filteredReservations.filter(r => r.id !== reservation.id)
        : Object.values(reservationsById).filter(r => r.id !== reservation.id);
      
      const validation = ReservationValidationService.validateReservation(
        updatedReservation,
        {
          restaurantConfig,
          tables: allTables,
          existingReservations: reservationsForValidation,
          timezone: config.timezone
        }
      );
      
      if (!validation.isValid) {
        console.log('🚫 RESIZE RIGHT VALIDATION FAILED:', {
          reservationId: reservation.id,
          customerName: reservation.customer.name,
          originalTime: `${formatTimeInTimezone(reservation.startTime, config.timezone)} - ${formatTimeInTimezone(reservation.endTime, config.timezone)}`,
          originalStartSlot,
          newEndSlot,
          errors: validation.errors
        });
        
        // Show error notification
        showNotification(
          'error',
          'Conflict detected',
          `Cannot resize reservation. ${validation.errors[0]}`
        );
        return;
      }
      
      // Calculate new end time
      const newEndTime = slotToIso(newEndSlot, config);
      
      // Update the reservation
      updateReservation(reservation.id, {
        startTime: reservation.startTime, // Keep original start time
        endTime: newEndTime,
      });
      
      // Show success notification
      showNotification(
        'success',
        'Reservation updated',
        `Reservation successfully resized.`
      );
      
      
    } else {
      // MOVE LOGIC (existing functionality)
      // Get the target table
      const targetTableId = String(over.id);
      if (!targetTableId) return;
      
      // Calculate new position based on delta
      const originalStartSlot = isoToSlotIndex(reservation.startTime, config);
      const slotDelta = pxToSlot(deltaX, config);
      const newStartSlot = Math.max(0, originalStartSlot + slotDelta);
      
      // Log simplificado para move
      
      // Calculate new end slot (maintain duration)
      const originalEndSlot = isoToSlotIndex(reservation.endTime, config);
      const duration = originalEndSlot - originalStartSlot;
      const newEndSlot = newStartSlot + duration;
      
      // Calculate total slots available in the timeline
      const totalSlots = (config.endHour - config.startHour) * (60 / config.slotMinutes);
      
      // Prevent dragging outside timeline bounds - be more strict
      if (newStartSlot < 0 || newEndSlot > totalSlots || newStartSlot >= totalSlots) {
        return;
      }
      
      // Check if the new position is valid using the full validation service
      const allTables = Object.values(tablesById);
      const updatedReservation = {
        ...reservation,
        tableId: targetTableId,
        startTime: slotToIso(newStartSlot, config),
        endTime: slotToIso(newEndSlot, config)
      };
      
      // Use filtered reservations if available, otherwise use all reservations
      const reservationsForValidation = filteredReservations.length > 0 
        ? filteredReservations.filter(r => r.id !== reservation.id)
        : Object.values(reservationsById).filter(r => r.id !== reservation.id);
      
      const validation = ReservationValidationService.validateReservation(
        updatedReservation,
        {
          restaurantConfig,
          tables: allTables,
          existingReservations: reservationsForValidation,
          timezone: config.timezone
        }
      );
      
      if (!validation.isValid) {
        console.log('🚫 MOVE VALIDATION FAILED:', {
          reservationId: reservation.id,
          customerName: reservation.customer.name,
          originalTime: `${formatTimeInTimezone(reservation.startTime, config.timezone)} - ${formatTimeInTimezone(reservation.endTime, config.timezone)}`,
          targetTableId,
          newStartSlot,
          newEndSlot,
          errors: validation.errors
        });
        
        // Show error notification
        showNotification(
          'error',
          'Conflict detected',
          `Cannot move reservation. ${validation.errors[0]}`
        );
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
      
      // Show success notification
      showNotification(
        'success',
        'Reservation moved',
        `Reservation successfully moved.`
      );
      
    }
  };
  
    return (
    <DndContext 
      sensors={sensors}
      collisionDetection={rectIntersection}
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
            
            {/* Restaurant Config Info */}
            {restaurantConfig && (
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Restaurant:</span>
                  <span className="text-gray-900">{restaurantConfig.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Timezone:</span>
                  <span className="text-gray-900">{restaurantConfig.timezone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Hours:</span>
                  <span className="text-gray-900">
                    {restaurantConfig.operatingHours.startHour}:00 - {restaurantConfig.operatingHours.endHour}:00
                  </span>
                </div>
              </div>
            )}
            
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
          onSlotClick={handleOpenCreateDrawer}
        />
      </div>
      
      {/* Create/Edit Reservation Drawer */}
      <ReservationDrawer
        isOpen={drawerState.isOpen}
        table={drawerState.table}
        startTime={drawerState.startTime}
        config={config}
        reservation={drawerState.reservation}
        onClose={handleCloseDrawer}
        onSave={handleSaveReservation}
      />
      
      {/* Notification */}
      {notification && (
        <Notification
          notification={notification}
          onClose={hideNotification}
        />
      )}
      </div>
    </DndContext>
  );
}

