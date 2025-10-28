import React, { useMemo, useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { PencilIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import type { Reservation, TimelineConfig, DragState, Table } from '@/types';
import { STATUS_COLORS, PRIORITY_BADGES } from '@/lib/constants';


interface ReservationBlockProps {
  reservation: Reservation;
  config: TimelineConfig;
  dragState?: DragState;
  table: Table;
  editingReservation?: string | null;
  onEditClick?: (reservation: Reservation, table: Table, startTime: string) => void;
}


export default function ReservationBlock({ reservation, config, dragState, table, editingReservation, onEditClick }: ReservationBlockProps) {
  const { startTime, endTime, customer, partySize, priority } = reservation;
  const [showTooltip, setShowTooltip] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState<'top' | 'bottom'>('top');
  
  // Calculate tooltip position based on block's position in viewport
  const calculateTooltipPosition = () => {
    if (blockRef.current) {
      const rect = blockRef.current.getBoundingClientRect();
      const blockTop = rect.top;
      const tooltipHeight = 250; // Approximate tooltip height in pixels
      
      // If there's space above, show on top; otherwise show below
      if (blockTop > tooltipHeight + 20) {
        setTooltipPosition('top');
      } else {
        setTooltipPosition('bottom');
      }
    }
  };
  
  // Calculate position when tooltip is shown
  useEffect(() => {
    if (showTooltip) {
      calculateTooltipPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showTooltip]);
  
  // Log removido para limpiar consola
  
  // DnD setup for main block (move)
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: reservation.id,
    data: {
      reservation,
      type: 'move'
    },
  });

  // DnD setup for left resize handle
  const { 
    attributes: leftAttributes, 
    listeners: leftListeners, 
    setNodeRef: setLeftHandleRef 
  } = useDraggable({
    id: `resize-left-${reservation.id}`,
    data: { 
      reservation, 
      type: 'resize-left' 
    },
  });

  // DnD setup for right resize handle
  const { 
    attributes: rightAttributes, 
    listeners: rightListeners, 
    setNodeRef: setRightHandleRef 
  } = useDraggable({
    id: `resize-right-${reservation.id}`,
    data: { 
      reservation, 
      type: 'resize-right' 
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    zIndex: isDragging ? 1000 : 10,
    // Add visual feedback when dragging outside bounds
    opacity: isDragging ? 0.8 : 1,
  };
  
  // Convert ISO times to slot positions using timezone-aware calculation
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  
  // Convert to the selected timezone for positioning calculation
  const startZoned = toZonedTime(startDate, config.timezone);
  const endZoned = toZonedTime(endDate, config.timezone);
  
  // Calculate slot positions based on timezone-aware time
  const startHour = startZoned.getHours();
  const startMinute = startZoned.getMinutes();
  const endHour = endZoned.getHours();
  const endMinute = endZoned.getMinutes();
  
  const startSlot = ((startHour - config.startHour) * 4) + (startMinute / 15);
  const endSlot = ((endHour - config.startHour) * 4) + (endMinute / 15);
  
  // Calculate position and width
  const left = startSlot * config.slotWidth;
  const width = (endSlot - startSlot) * config.slotWidth;

  // Calculate preview dimensions
  const previewDimensions = useMemo(() => {
    if (!dragState || (dragState.activeId !== `resize-left-${reservation.id}` && 
        dragState.activeId !== `resize-right-${reservation.id}`)) {
      return { left, width };
    }

    // Use timezone-aware times for preview calculations
    const originalStartSlot = ((startHour - config.startHour) * 4) + (startMinute / 15);
    const originalEndSlot = ((endHour - config.startHour) * 4) + (endMinute / 15);
    const deltaX = dragState.delta.x;
    // Use Math.round for better preview behavior - snap to slot boundaries
    const deltaSlots = Math.round(deltaX / config.slotWidth);

    if (dragState.activeId === `resize-left-${reservation.id}`) {
      // Left resize: change start time, keep end time
      const maxStartSlot = originalEndSlot - 1;
      const newStartSlot = Math.max(0, Math.min(maxStartSlot, originalStartSlot + deltaSlots));
      const newLeft = newStartSlot * config.slotWidth;
      const newWidth = (originalEndSlot - newStartSlot) * config.slotWidth;
      return { 
        left: newLeft, 
        width: Math.max(config.slotWidth, newWidth)
      };
    } else if (dragState.activeId === `resize-right-${reservation.id}`) {
      // Right resize: change end time, keep start time
      const minEndSlot = originalStartSlot + 1;
      const newEndSlot = Math.max(minEndSlot, originalEndSlot + deltaSlots);
      const newWidth = (newEndSlot - originalStartSlot) * config.slotWidth;
      return { 
        left, 
        width: Math.max(config.slotWidth, newWidth)
      };
    }

    return { left, width };
  }, [
    dragState,
    left,
    width,
    startHour,
    endHour,
    startMinute,
    endMinute,
    config.startHour,
    config.slotWidth,
    reservation.id
  ]);

  // Don't render if reservation is outside visible hours
  if (startHour < config.startHour || startHour >= config.endHour) {
    return null;
  }
  
  // Don't render if end hour is outside visible hours
  if (endHour < config.startHour || endHour > config.endHour) {
    return null;
  }
  
  // Create timezone-aware tooltip (reuse already calculated zoned times)
  const timeString = `${format(startZoned, 'HH:mm')} - ${format(endZoned, 'HH:mm')}`;
  
  // Handle edit icon click
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEditClick) {
      onEditClick(reservation, table, reservation.startTime);
    }
  };
  
  // Handle double click on reservation block to edit
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Don't trigger if dragging or resizing
    if (isDragging || dragState?.activeId?.includes(reservation.id)) {
      return;
    }
    if (onEditClick) {
      onEditClick(reservation, table, reservation.startTime);
    }
  };
  
  // Handle info icon hover
  const handleInfoMouseEnter = () => {
    setShowTooltip(true);
  };
  
  const handleInfoMouseLeave = () => {
    setShowTooltip(false);
  };
  
  // Check if this reservation is being edited
  const isBeingEdited = editingReservation === reservation.id;
  
  return (
    <div
      ref={(node) => {
        setNodeRef(node);
        // @ts-expect-error - We're storing this for calculating tooltip position
        if (node) blockRef.current = node.parentElement;
      }}
      style={{
        ...style,
        left: `${previewDimensions.left}px`,
        width: `${previewDimensions.width}px`,
        height: '60px', // Full row height
      }}
      {...listeners}
      {...attributes}
      onDoubleClick={handleDoubleClick}
      data-reservation-id={reservation.id}
      className={`group absolute left-0 rounded px-2 py-1 text-xs font-medium ${STATUS_COLORS[reservation.status]} text-white border border-gray-200 shadow-sm cursor-grab active:cursor-grabbing ${
        isDragging ? 'opacity-50' : ''
      } ${
        dragState?.activeId === `resize-left-${reservation.id}` || 
        dragState?.activeId === `resize-right-${reservation.id}` 
          ? 'ring-2 ring-blue-400 ring-opacity-50' 
          : ''
      } ${
        isBeingEdited 
          ? 'ring-4 ring-orange-500 ring-opacity-80 border-orange-400 border-2' 
          : ''
      }`}
    >
      <div className="flex items-center gap-1 h-full relative">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <div className="truncate font-semibold">{customer.name}</div>
            {/* Priority Badge */}
            <div className="flex-shrink-0">
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30">
                {PRIORITY_BADGES[priority]}
              </span>
            </div>
          </div>
          <div className="text-xs opacity-90">{partySize} people</div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {/* Hide buttons during resize */}
          {!(dragState?.activeId === `resize-left-${reservation.id}` || 
             dragState?.activeId === `resize-right-${reservation.id}`) && (
            <>
              {onEditClick && (
                <button
                  onClick={handleEditClick}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/20 rounded"
                  title="Edit reservation"
                  onMouseDown={(e) => e.stopPropagation()}
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <PencilIcon className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onMouseEnter={handleInfoMouseEnter}
                onMouseLeave={handleInfoMouseLeave}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-white/20 rounded"
                title="Show details"
                onMouseDown={(e) => e.stopPropagation()}
                onPointerDown={(e) => e.stopPropagation()}
              >
                <InformationCircleIcon className="w-3.5 h-3.5" />
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Styled Tooltip */}
      {showTooltip && (
        <div 
          className={`absolute z-30 p-3 bg-gray-800 text-white rounded-md shadow-lg min-w-[200px] left-1/2 transform -translate-x-1/2 transition-opacity duration-200 ${
            tooltipPosition === 'top' 
              ? 'bottom-full mb-2' 
              : 'top-full mt-2'
          }`}
          onMouseEnter={handleInfoMouseEnter}
          onMouseLeave={handleInfoMouseLeave}
        >
          <div className="text-sm font-semibold mb-2">{customer.name}</div>
          <div className="space-y-1 text-xs">
            <div><span className="font-medium">Time:</span> {timeString}</div>
            <div><span className="font-medium">Party Size:</span> {partySize} people</div>
            <div><span className="font-medium">Status:</span> {reservation.status}</div>
            <div><span className="font-medium">Priority:</span> {reservation.priority}</div>
            <div><span className="font-medium">Phone:</span> {customer.phone}</div>
            {customer.notes && (
              <div><span className="font-medium">Notes:</span> {customer.notes}</div>
            )}
          </div>
          {/* Tooltip arrow */}
          <div 
            className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 ${
              tooltipPosition === 'top'
                ? 'top-full -mt-1 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800'
                : 'bottom-full mb-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800'
            }`}
          />
        </div>
      )}
      
      {/* Left Resize Handle */}
      <div 
        ref={setLeftHandleRef}
        {...leftListeners}
        {...leftAttributes}
        className="absolute left-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-white hover:bg-opacity-30 transition-colors"
        title="Resize from start"
      />
      
      {/* Right Resize Handle */}
      <div 
        ref={setRightHandleRef}
        {...rightListeners}
        {...rightAttributes}
        className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-white hover:bg-opacity-30 transition-colors"
        title="Resize from end"
      />
    </div>
  );
}
