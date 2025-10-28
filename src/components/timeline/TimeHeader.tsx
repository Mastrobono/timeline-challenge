import React from 'react';
import { addDays, format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import type { TimelineConfig } from '@/types';
import { slotToPx, getSlotsPerDay } from '@/lib/timeUtils';
import useTimelineStore from '@/store/useTimelineStore';

interface TimeHeaderProps {
  config: TimelineConfig;
}

export default function TimeHeader({ config }: TimeHeaderProps) {
  const { startHour, endHour, slotMinutes, slotWidth, timezone } = config;
  const { ui } = useTimelineStore();
  const { viewMode, visibleDate } = ui;
  
  // Log removido para limpiar consola
  
  // Calculate slots per day and total slots based on view mode
  const slotsPerDay = getSlotsPerDay(config);
  let daysInView = 1;
  
  switch (viewMode) {
    case 'day':
      daysInView = 1;
      break;
    case '3-day':
      daysInView = 3;
      break;
    case 'week':
      daysInView = 7;
      break;
    case 'month':
      daysInView = 1; // Month view will be handled separately
      break;
  }
  
  const totalSlots = slotsPerDay * daysInView;
  const totalWidth = totalSlots * slotWidth;
  
  // Generate time labels for multi-day view
  const timeLabels = [];
  const dayHeaders = [];
  
  // Generate day headers for multi-day views
  if (daysInView > 1) {
    for (let dayIndex = 0; dayIndex < daysInView; dayIndex++) {
      const dayDate = addDays(new Date(visibleDate), dayIndex);
      const dayStartSlot = dayIndex * slotsPerDay;
      const dayStartPosition = slotToPx(dayStartSlot, config);
      const dayWidth = slotsPerDay * slotWidth;
      
      dayHeaders.push(
        <div
          key={`day-header-${dayIndex}`}
          className="absolute top-0 h-6 flex items-center justify-center text-sm font-semibold text-gray-800 bg-gray-50 border-gray-200"
          style={{ 
            left: `${dayStartPosition}px`,
            width: `${dayWidth}px`
          }}
        >
          {format(dayDate, 'EEE, MMM d')}
        </div>
      );
    }
  }
  
  // Generate time labels for each day
  for (let dayIndex = 0; dayIndex < daysInView; dayIndex++) {
    for (let hour = startHour; hour < endHour; hour++) {
      // Add hour markers - use the hour directly without timezone conversion
      const hourSlot = (dayIndex * slotsPerDay) + (hour - startHour) * (60 / slotMinutes);
      const hourPosition = slotToPx(hourSlot, config);
      
      timeLabels.push(
        <div
          key={`hour-${dayIndex}-${hour}`}
          className="absolute top-2 h-6 flex items-center justify-center text-sm font-medium text-gray-700"
          style={{ left: `${hourPosition}px`, transform: 'translateX(-50%)' }}
          aria-label={`${hour}:00`}
        >
          {hour}:00
        </div>
      );
      
      // Add 15-minute markers for each hour (if slotMinutes <= 15)
      if (slotMinutes <= 15) {
        for (let quarter = 1; quarter < 4; quarter++) {
          const quarterSlot = hourSlot + quarter * (15 / slotMinutes);
          const quarterPosition = slotToPx(quarterSlot, config);
          
          timeLabels.push(
            <div
              key={`quarter-${dayIndex}-${hour}-${quarter}`}
              className="absolute top-2 h-6 flex items-center justify-center text-xs text-gray-500"
              style={{ left: `${quarterPosition}px`, transform: 'translateX(-50%)' }}
              aria-label={`${hour}:${(quarter * 15).toString().padStart(2, '0')}`}
            >
              {hour}:{(quarter * 15).toString().padStart(2, '0')}
            </div>
          );
        }
      }
    }
  }
  
  // Grid lines will be rendered in TimelineLayout to span full height
  
  return (
    <div 
      className="relative bg-white overflow-visible h-full"
      data-testid="timeline-timeheader"
      aria-label="Timeline header"
    >
      <div 
        className="relative h-full"
        style={{ width: `${totalWidth}px` }}
      >
        {/* Day headers */}
        {dayHeaders}
        
        {/* Time labels */}
        {timeLabels}
      </div>
    </div>
  );
}
