import React from 'react';
import { addDays, format } from 'date-fns';
import type { TimelineConfig } from '@/types';
import { slotToPx, getSlotsPerDay } from '@/lib/timeUtils';
import useTimelineStore from '@/store/useTimelineStore';

interface TimeHeaderProps {
  config: TimelineConfig;
}

export default function TimeHeader({ config }: TimeHeaderProps) {
  const { startHour, endHour, slotMinutes, slotWidth } = config;
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
      const dayStartPosition = dayIndex * slotsPerDay * slotWidth;
      
      dayHeaders.push(
        <div
          key={`day-header-${dayIndex}`}
          className="absolute top-0 h-6 flex items-start text-xs font-semibold text-gray-800 "
          style={{ 
            left: `${dayStartPosition}px`,
            width: 'auto',
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
          className="absolute h-6 flex items-center justify-center text-xs font-medium text-gray-700"
          style={{ 
            left: `${hourPosition}px`, 
            transform: hour === startHour ? 'translateX(0)' : 'translateX(-50%)'
          }}
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
              className="absolute h-6 flex items-center justify-center text-xs text-gray-500"
              style={{ 
                left: `${quarterPosition}px`, 
                transform: (hour === startHour && quarter === 1) ? 'translateX(0)' : 'translateX(-50%)'
              }}
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
        {/* Day headers - top row */}
        <div className="absolute top-0 left-0 w-full h-6">
          {dayHeaders}
        </div>
        
        {/* Time labels - bottom row */}
        <div className="absolute top-6 left-0 w-full h-6">
          {timeLabels}
        </div>
      </div>
    </div>
  );
}
