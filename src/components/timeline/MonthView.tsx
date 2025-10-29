import React from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import useTimelineStore from '@/store/useTimelineStore';
import { filterReservationsByTimezone, parseDateString } from '@/lib/timeUtils';

export default function MonthView() {
  const { ui, setVisibleDate, setViewMode, reservationsById, restaurantConfig } = useTimelineStore();
  const { visibleDate } = ui;

  const currentDate = parseDateString(visibleDate);
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  
  // Get all days in the month
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Get the first day of the week for the month start
  const firstDayOfWeek = monthStart.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  // Create a grid of 7 columns (days of week)
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  
  // Create calendar grid
  const calendarDays = [];
  
  // Add empty cells for days before the month starts
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(
      <div key={`empty-${i}`} className="h-20 border border-gray-200 bg-gray-50" />
    );
  }
  
  // Add days of the month
  daysInMonth.forEach((day) => {
    const isToday = isSameDay(day, new Date());
    
    // Create date string directly without timezone conversion
    // The day is already in local time, we just need the date part
    const dayString = format(day, 'yyyy-MM-dd');
    
    // Get all reservations and filter them properly
    const allReservations = Object.values(reservationsById);
    
    // Filter reservations for this specific day
    const dayReservations = allReservations.filter(reservation => {
      if (!reservation.startTime) {
        return false;
      }
      // Convert UTC reservation time to restaurant timezone to get the correct date
      const reservationDate = new Date(reservation.startTime);
      if (Number.isNaN(reservationDate.getTime())) {
        return false;
      }
      const zonedDate = toZonedTime(reservationDate, restaurantConfig?.timezone || 'UTC');
      const reservationDateStr = format(zonedDate, 'yyyy-MM-dd');
      return reservationDateStr === dayString;
    });
    
    // Apply timezone filtering (same as TimelineLayout)
    const config = {
      date: dayString,
      startHour: restaurantConfig?.operatingHours.startHour || 7,
      endHour: restaurantConfig?.operatingHours.endHour || 19,
      slotMinutes: restaurantConfig?.slotConfiguration.slotMinutes || 15,
      slotWidth: 30,
      timezone: restaurantConfig?.timezone || 'UTC',
      viewMode: 'month' as const,
    };
    
    const filteredReservations = filterReservationsByTimezone(dayReservations, config, restaurantConfig);
    const reservationCount = filteredReservations.length;
    
    const handleDayClick = () => {
      setVisibleDate(dayString);
      setViewMode('day');
    };
    
    calendarDays.push(
      <div 
        key={dayString}
        className={`h-20 border border-gray-200 p-2 cursor-pointer hover:bg-gray-50 ${
          isToday ? 'bg-blue-50 border-blue-300' : 'bg-white'
        }`}
        onClick={handleDayClick}
      >
        <div className="flex justify-between items-start">
          <span className={`text-sm font-medium ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
            {format(day, 'd')}
          </span>
          {reservationCount > 0 && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {reservationCount}
            </span>
          )}
        </div>
      </div>
    );
  });
  
  // Calculate total reservations for the month
  const allReservations = Object.values(reservationsById);
  const totalReservations = allReservations.length;
  
  return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {format(currentDate, 'MMMM yyyy')} - {totalReservations} reservations
        </h3>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Week day headers */}
        <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
          {weekDays.map(day => (
            <div key={day} className="p-3 text-center text-sm font-medium text-gray-700 border-r border-gray-200 last:border-r-0">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        <div className="grid grid-cols-7">
          {calendarDays}
        </div>
      </div>
    </div>
  );
}
