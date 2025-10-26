import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { Reservation, TimelineConfig, DragState } from '@/types';


interface ReservationBlockProps {
  reservation: Reservation;
  config: TimelineConfig;
  dragState?: DragState;
}


export default function ReservationBlock({ reservation, config, dragState }: ReservationBlockProps) {
  const { startTime, endTime, customer, partySize, priority } = reservation;
  
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
    const deltaSlots = Math.floor(deltaX / config.slotWidth);

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
  
  // Priority-based colors
  const priorityColors = {
    STANDARD: 'bg-blue-500',
    VIP: 'bg-purple-500',
    LARGE_GROUP: 'bg-orange-500'
  };
  
  return (
    <div
      ref={setNodeRef}
      style={{
        ...style,
        left: `${previewDimensions.left}px`,
        width: `${previewDimensions.width}px`,
        height: '60px', // Full row height
      }}
      {...listeners}
      {...attributes}
      data-reservation-id={reservation.id}
      className={`absolute left-0 rounded px-2 py-1 text-xs font-medium ${priorityColors[priority]} text-white border border-gray-200 shadow-sm cursor-grab active:cursor-grabbing ${
        isDragging ? 'opacity-50' : ''
      } ${
        dragState?.activeId === `resize-left-${reservation.id}` || 
        dragState?.activeId === `resize-right-${reservation.id}` 
          ? 'ring-2 ring-blue-400 ring-opacity-50' 
          : ''
      }`}
      title={`${customer.name} (${partySize} people) - ${timeString}`}
    >
      <div className="truncate font-semibold">{customer.name}</div>
      <div className="text-xs opacity-90">{partySize} people</div>
      
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
