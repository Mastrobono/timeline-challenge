'use client';

import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { DndContext, PointerSensor, useSensor, useSensors, DragEndEvent, DragMoveEvent, DragStartEvent, rectIntersection } from '@dnd-kit/core';
import TimelineLayout from '@/components/timeline/TimelineLayout';
import ReservationDrawer from '@/components/timeline/ReservationDrawer';
import Notification from '@/components/ui/Notification';
import Sidebar from '@/components/Sidebar';
import EnhancedToolbar from '@/components/timeline/EnhancedToolbar';
import useTimelineStore from '@/store/useTimelineStore';
import { useAutoInitialize } from '@/hooks/useAutoInitialize';
import { useNotification } from '@/hooks/useNotification';
import { ReservationValidationService } from '@/lib/reservationValidationService';
import AutoSchedulingService from '@/lib/autoSchedulingService';
import { slotToIso, isoToSlotIndex } from '@/lib/timeUtils';
import { format, toZonedTime } from 'date-fns-tz';
import type { TimelineConfig, Table, Reservation, ReservationStatus } from '@/types';


export default function TimelinePage() {
  const router = useRouter();
  const {
    reservationsById,
    restaurantConfig,
    ui,
    setSlotWidth,
    setVisibleDate,
    updateReservation,
    addReservation,
    tablesById,
    sectorsById
  } = useTimelineStore();

  // Hook for auto-initialization
  const { isInitialized, isLoading: isInitializing, error: initError } = useAutoInitialize();

  // Hook to detect screen size
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint is 1024px
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Update sidebar collapsed state based on screen size
  useEffect(() => {
    setSidebarCollapsed(!isLargeScreen);
  }, [isLargeScreen]);

  // Check if store has data, redirect to root if not
  useEffect(() => {
    // Only redirect if we're fully initialized and still don't have data
    if (isInitialized && !isInitializing) {
      const hasData = restaurantConfig && Object.keys(reservationsById).length > 0 && Object.keys(tablesById).length > 0;
      if (!hasData) {
        router.push('/');
      }
    }
  }, [isInitialized, isInitializing, restaurantConfig, reservationsById, tablesById, router]);

  // Listen for create reservation event from sidebar
  useEffect(() => {
    const handleCreateReservation = () => {
      // Find the first available table for today
      const today = new Date();
      const tables = Object.values(tablesById);
      if (tables.length > 0) {
        const firstTable = tables[0];
        const startTime = new Date(today);
        startTime.setHours(19, 0, 0, 0); // Default to 7 PM
        const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000); // 2 hours later
        
        setDrawerState({
          isOpen: true,
          table: firstTable,
          startTime: startTime.toISOString(),
          endTime: endTime.toISOString(),
          reservation: null
        });
      }
    };

    window.addEventListener('createReservation', handleCreateReservation);
    return () => window.removeEventListener('createReservation', handleCreateReservation);
  }, [tablesById]);

  // Notification hook
  const { notification, showNotification, hideNotification } = useNotification();

  // Filter state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<ReservationStatus[]>([]);

  // Helper function to format time in restaurant timezone
  const formatTimeInTimezone = (isoString: string, timezone: string) => {
    return format(toZonedTime(new Date(isoString), timezone), 'HH:mm');
  };

  // Counter for rejected reservations
  const [rejectedCount, setRejectedCount] = useState(0);

  // State for filtered reservations from TimelineLayout
  const [filteredReservations, setFilteredReservations] = useState<Reservation[]>([]);

  // Create timeline config - this will re-create when restaurantConfig changes
  const config: TimelineConfig = useMemo(() => {
    return {
      date: ui.visibleDate,
      startHour: restaurantConfig?.operatingHours.startHour || ui.startHour,
      endHour: restaurantConfig?.operatingHours.endHour || 23,
      slotMinutes: restaurantConfig?.slotConfiguration.slotMinutes || 15,
      slotWidth: ui.slotWidth,
      viewMode: ui.viewMode,
      timezone: restaurantConfig?.timezone || 'UTC',
    };
  }, [ui.visibleDate, ui.startHour, ui.slotWidth, ui.viewMode, restaurantConfig]);

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
    endTime?: string | null;
    reservation: Reservation | null;
    previewReservation?: Reservation | null; // For showing preview after drag
    validationErrors?: string[]; // Validation errors from save
  }>({ isOpen: false, table: null, startTime: null, reservation: null });

  // State for selected slot (for visual feedback)
  const [selectedSlot, setSelectedSlot] = useState<{
    tableId: string | null;
    startTime: string | null;
  }>({ tableId: null, startTime: null });

  // State for editing reservation (for visual feedback)
  const [editingReservation, setEditingReservation] = useState<string | null>(null);

  // Ref for timeline container to enable scrolling
  const timelineRef = useRef<HTMLDivElement>(null);

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

  // Show loading while initializing
  if (!isInitialized) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <h2 className="text-lg font-semibold text-gray-100 mb-2">Initializing application...</h2>
          <p className="text-gray-100">Loading restaurant data</p>
        </div>
      </div>
    );
  }

  // Show error if there's an initialization problem
  if (initError) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900">   
        <div className="text-center max-w-md">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-lg font-semibold text-gray-100 mb-2">Initialization Error</h2>
          <p className="text-gray-100 mb-4">{initError}</p>
          <p className="text-sm text-gray-500">
            Make sure static seeds are generated by running: npm run generate-static-seeds
          </p>
        </div>
      </div>
    );
  }

  // Log removido para limpiar consola

  // Zoom controls
  const zoomLevels = [
    { label: '50%', value: 30 },
    { label: '75%', value: 45 },
    { label: '100%', value: 60 },
    { label: '125%', value: 75 },
    { label: '150%', value: 90 },
  ];

  const handleZoomChange = (slotWidth: number) => {
    setSlotWidth(slotWidth);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVisibleDate(event.target.value);
  };

  // Filter handlers
  const handleSectorToggle = (sectorId: string) => {
    setSelectedSectors(prev =>
      prev.includes(sectorId)
        ? prev.filter(id => id !== sectorId)
        : [...prev, sectorId]
    );
  };

  const handleStatusToggle = (status: ReservationStatus) => {
    setSelectedStatuses(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  const handleClearFilters = () => {
    setSelectedSectors([]);
    setSearchTerm('');
    setSelectedStatuses([]);
  };

  // Drawer handlers
  const handleOpenCreateDrawer = (table: Table, startTime: string) => {
    // Calculate default end time (2 hours after start time)
    const startDate = new Date(startTime);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // Add 2 hours
    const endTime = endDate.toISOString();
    
    setDrawerState({
      isOpen: true,
      table,
      startTime,
      reservation: null,
      endTime
    });

    // Set selected slot for visual feedback
    setSelectedSlot({
      tableId: table.id,
      startTime: startTime
    });
  };

  // Handle drag-to-create reservation
  const handleCreateReservation = (table: Table, startTime: string, endTime: string) => {
    
    // Create a preview reservation for UI feedback
    const previewReservation: Reservation = {
      id: `preview-${Date.now()}`, // Temporary ID
      tableId: table.id,
      startTime,
      endTime,
      customer: {
        name: 'New Reservation',
        phone: '',
        email: '',
        notes: ''
      },
      partySize: table.capacity.min,
      status: 'PENDING',
      priority: 'STANDARD',
      notes: '',
      durationMinutes: Math.round((new Date(endTime).getTime() - new Date(startTime).getTime()) / (1000 * 60)),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setDrawerState({
      isOpen: true,
      table,
      startTime,
      reservation: null,
      endTime,
      previewReservation
    });

    // Clear selected slot since we're creating a new reservation
    setSelectedSlot({
      tableId: null,
      startTime: null
    });
  };

  const handleOpenEditDrawer = (reservation: Reservation, table: Table, startTime: string) => {
    // Get the table from the reservation's tableId
    const reservationTable = tablesById[reservation.tableId];
    if (!reservationTable) {
      console.error('Table not found for reservation:', reservation.tableId);
      return;
    }

    setDrawerState({
      isOpen: true,
      table: reservationTable,
      startTime: reservation.startTime,
      reservation
    });

    // Set editing reservation for visual feedback
    setEditingReservation(reservation.id);
  };

  const handleCloseDrawer = () => {
    setDrawerState({
      isOpen: false,
      table: null,
      startTime: null,
      reservation: null,
      previewReservation: null,
      validationErrors: []
    });

    // Clear selected slot and editing reservation
    setSelectedSlot({
      tableId: null,
      startTime: null
    });
    setEditingReservation(null);
  };

  // Handle duplicate reservation
  const handleDuplicateReservation = (reservation: Reservation) => {
    // Find the closest available slot for the duplicated reservation
    const tables = Object.values(tablesById);
    const sectors = Object.values(sectorsById);
    const existingReservations = Object.values(reservationsById);
    
    // Try to find a slot as close as possible to the original time
    const originalTime = new Date(reservation.startTime);
    const searchWindows = [15, 30, 60, 120, 180]; // Search in 15min increments up to 3 hours
    
    let bestSlot = null;
    let closestTimeDiff = Infinity;
    
    // Search for available slots in time windows around the original time
    for (const windowMinutes of searchWindows) {
      // Search after original time
      const afterTime = new Date(originalTime.getTime() + windowMinutes * 60000);
      const afterSlots = AutoSchedulingService.findNextAvailableSlots(
        reservation.partySize,
        afterTime.toISOString(),
        reservation.durationMinutes,
        tables,
        sectors,
        existingReservations,
        config,
        {
          partySize: reservation.partySize,
          durationMinutes: reservation.durationMinutes,
          preferredTime: reservation.startTime,
          searchWindows: [15], // Small search window
          maxSuggestions: 1
        }
      );
      
      if (afterSlots.length > 0) {
        const timeDiff = Math.abs(new Date(afterSlots[0].startTime).getTime() - originalTime.getTime());
        if (timeDiff < closestTimeDiff) {
          closestTimeDiff = timeDiff;
          bestSlot = afterSlots[0];
        }
      }
      
      // Search before original time
      const beforeTime = new Date(originalTime.getTime() - windowMinutes * 60000);
      const beforeSlots = AutoSchedulingService.findNextAvailableSlots(
        reservation.partySize,
        beforeTime.toISOString(),
        reservation.durationMinutes,
        tables,
        sectors,
        existingReservations,
        config,
        {
          partySize: reservation.partySize,
          durationMinutes: reservation.durationMinutes,
          preferredTime: reservation.startTime,
          searchWindows: [15], // Small search window
          maxSuggestions: 1
        }
      );
      
      if (beforeSlots.length > 0) {
        const timeDiff = Math.abs(new Date(beforeSlots[0].startTime).getTime() - originalTime.getTime());
        if (timeDiff < closestTimeDiff) {
          closestTimeDiff = timeDiff;
          bestSlot = beforeSlots[0];
        }
      }
    }
    
    if (bestSlot) {
      // Create a new reservation with the closest available slot
      const newReservation: Reservation = {
        ...reservation,
        id: `duplicate-${Date.now()}`,
        tableId: bestSlot.tableId,
        startTime: bestSlot.startTime,
        endTime: bestSlot.endTime,
        customer: {
          ...reservation.customer,
          name: `${reservation.customer.name} (Copy)`
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      addReservation(newReservation);
      showNotification('success', 'Success', 'Reservation duplicated successfully!');
    } else {
      showNotification('error', 'Error', 'No available slots found for duplication');
    }
  };

  // Handle delete reservation
  const handleDeleteReservation = (reservation: Reservation) => {
    showNotification(
      'warning',
      'Delete Reservation',
      `Are you sure you want to delete "${reservation.customer.name}" reservation?`,
      {
        isDelete: true,
        onConfirm: () => {
          // Delete the reservation
          const { deleteReservation } = useTimelineStore.getState();
          deleteReservation(reservation.id);
          showNotification('success', 'Success', 'Reservation deleted successfully!');
        }
      }
    );
  };

  // Handle updating preview reservation
  const handleUpdatePreview = (updatedPreview: Reservation) => {
    setDrawerState(prev => ({
      ...prev,
      previewReservation: updatedPreview
    }));
  };

  // Handle clearing validation errors
  const handleClearErrors = () => {
    setDrawerState(prev => ({
      ...prev,
      validationErrors: []
    }));
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
      // Set validation errors in drawer state instead of showing notification
      setDrawerState(prev => ({
        ...prev,
        validationErrors: validation.errors
      }));
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

      // Calculate new start slot based on delta with better rounding
      // Convert delta to slots and round to nearest slot boundary
      const slotDelta = Math.round(deltaX / config.slotWidth);
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

      // No notification for resize operations (silent update)

    } else if (activeId.startsWith('resize-right-')) {
      // RESIZE RIGHT LOGIC - change end time, keep start time
      const originalStartSlot = isoToSlotIndex(reservation.startTime, config);
      const originalEndSlot = isoToSlotIndex(reservation.endTime, config);

      // Calculate new end slot based on delta with better rounding
      // Convert delta to slots and round to nearest slot boundary
      const slotDelta = Math.round(deltaX / config.slotWidth);
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

      // No notification for resize operations (silent update)

    } else {
      // MOVE LOGIC (existing functionality)
      // Get the target table
      const targetTableId = String(over.id);
      if (!targetTableId) return;

      // Calculate new position based on delta with better rounding
      const originalStartSlot = isoToSlotIndex(reservation.startTime, config);
      const slotDelta = Math.round(deltaX / config.slotWidth);
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

      // No notification for move operations (silent update)

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

      <div className="h-full bg-gray-900">
        {/* Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          sectors={Object.values(sectorsById)}
          selectedSectors={selectedSectors}
          onSectorToggle={handleSectorToggle}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedStatuses={selectedStatuses}
          onStatusToggle={handleStatusToggle}
          onClearFilters={handleClearFilters}
        />

        {/* Main content area with sidebar offset */}
        <div className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:pl-6' : 'lg:pl-72'}`}>
          {/* Enhanced Toolbar */}
          <EnhancedToolbar
            onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
            zoomLevel={ui.slotWidth}
            onZoomChange={handleZoomChange}
          />

          {/* Timeline */}
          <div className="h-[calc(100vh-4rem)] p-4 overflow-hidden">
            <TimelineLayout
              config={config}
              dragState={dragState}
              selectedSlot={selectedSlot}
              editingReservation={editingReservation}
              previewReservation={drawerState.previewReservation}
              scrollContainerRef={timelineRef}
              onSlotClick={handleOpenCreateDrawer}
              onEditClick={handleOpenEditDrawer}
              onDuplicateClick={handleDuplicateReservation}
              onDeleteClick={handleDeleteReservation}
              onCreateReservation={handleCreateReservation}
              selectedSectors={selectedSectors}
              searchTerm={searchTerm}
              selectedStatuses={selectedStatuses}
            />
          </div>
        </div>

        {/* Create/Edit Reservation Drawer */}
        <ReservationDrawer
          isOpen={drawerState.isOpen}
          table={drawerState.table}
          startTime={drawerState.startTime}
          endTime={drawerState.endTime}
          config={config}
          reservation={drawerState.reservation}
          previewReservation={drawerState.previewReservation}
          validationErrors={drawerState.validationErrors}
          onClose={handleCloseDrawer}
          onSave={handleSaveReservation}
          onDelete={handleDeleteReservation}
          onUpdatePreview={handleUpdatePreview}
          onClearErrors={handleClearErrors}
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

