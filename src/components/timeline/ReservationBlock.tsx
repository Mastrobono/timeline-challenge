import React from 'react';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import type { Reservation } from '@/types';
import type { TimelineConfig } from '@/types';
import { slotToPx, computeXForSlotAndDay, getSlotsPerDay, slotToIso } from '@/lib/timeUtils';

interface ReservationBlockProps {
  reservation: Reservation;
  config: TimelineConfig;
}

const statusColors = {
  CONFIRMED: 'bg-blue-500 text-white',
  SEATED: 'bg-green-500 text-white', 
  DONE: 'bg-gray-500 text-white',
  CANCELLED: 'bg-gray-300 text-gray-700',
} as const;

export default function ReservationBlock({ reservation, config }: ReservationBlockProps) {
  const { startTime, endTime, customer, partySize, status, priority } = reservation;
  
  // Convert ISO times to slot positions
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const configDate = new Date(config.date + 'T00:00:00');
  
  // Calculate slot positions based on time
  const startHour = startDate.getHours();
  const startMinute = startDate.getMinutes();
  const endHour = endDate.getHours();
  const endMinute = endDate.getMinutes();
  
  // Don't render if reservation is outside visible hours
  if (startHour < config.startHour || startHour >= config.endHour) {
    return null;
  }
  
  // Don't render if end hour is outside visible hours
  if (endHour < config.startHour || endHour > config.endHour) {
    return null;
  }
  
  const startSlot = ((startHour - config.startHour) * 4) + (startMinute / 15);
  const endSlot = ((endHour - config.startHour) * 4) + (endMinute / 15);
  
  // Calculate position and width
  const left = startSlot * config.slotWidth;
  const width = (endSlot - startSlot) * config.slotWidth;
  
  // Create timezone-aware tooltip
  const startZoned = toZonedTime(startDate, config.timezone);
  const endZoned = toZonedTime(endDate, config.timezone);
  
  const timeString = `${format(startZoned, 'HH:mm')} - ${format(endZoned, 'HH:mm')}`;
  
  // Priority-based colors
  const priorityColors = {
    STANDARD: 'bg-blue-500',
    VIP: 'bg-purple-500',
    LARGE_GROUP: 'bg-orange-500'
  };
  
  return (
    <div
      data-reservation-id={reservation.id}
      className={`absolute left-0 rounded px-2 py-1 text-xs font-medium ${priorityColors[priority]} text-white border border-gray-200 shadow-sm z-10`}
      style={{
        left: `${left}px`,
        width: `${width}px`,
        height: '60px', // Full row height
      }}
      title={`${customer.name} (${partySize} people) - ${timeString}`}
    >
      <div className="truncate font-semibold">{customer.name}</div>
      <div className="text-xs opacity-90">{partySize} people</div>
    </div>
  );
}
