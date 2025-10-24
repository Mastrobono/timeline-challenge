import React from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isSameDay, addDays } from 'date-fns';
import useTimelineStore from '@/store/useTimelineStore';
import { getReservationIsoDate } from '@/lib/timeUtils';

export default function MonthView() {
  const { ui, setVisibleDate, setViewMode, reservationsById, restaurantConfig } = useTimelineStore();
  const { visibleDate, startHour } = ui;

  const currentDate = new Date(visibleDate);
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  
  // Get all days in the month
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Get the first day of the week for the month start
  const firstDayOfWeek = monthStart.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
  // Create a grid of 7 columns (days of week)
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Calculate how many weeks we need to display
  const totalDays = firstDayOfWeek + daysInMonth.length;
  const weeksNeeded = Math.ceil(totalDays / 7);
  
  // Create calendar grid
  const calendarDays = [];
  
  // Add empty cells for days before the month starts
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(
      <div key={`empty-${i}`} className="h-20 border border-gray-200 bg-gray-50" />
    );
  }
  
  // Add days of the month
  daysInMonth.forEach((day, index) => {
    const isToday = isSameDay(day, new Date());
    const dayString = format(day, 'yyyy-MM-dd');
    
    // Calculate deterministic reservation count from store data
    const reservationCount = Object.values(reservationsById).filter(reservation => {
      const reservationDate = getReservationIsoDate(reservation, visibleDate, {
        date: visibleDate,
        startHour: restaurantConfig?.operatingHours.startHour || startHour,
        endHour: restaurantConfig?.operatingHours.endHour || 23,
        slotMinutes: restaurantConfig?.slotConfiguration.slotMinutes || 15,
        slotWidth: 30,
        timezone: restaurantConfig?.timezone || 'America/Argentina/Buenos_Aires',
        viewMode: 'month',
      });
      
      // Check if reservation is on the correct date
      if (reservationDate !== dayString) {
        return false;
      }
      
      // Filter out reservations outside restaurant hours
      if (reservation.startTime) {
        const startTime = new Date(reservation.startTime);
        const reservationHour = startTime.getHours();
        const restaurantStartHour = restaurantConfig?.operatingHours.startHour || startHour;
        const restaurantEndHour = restaurantConfig?.operatingHours.endHour || 23;
        return reservationHour >= restaurantStartHour && reservationHour < restaurantEndHour;
      }
      
      return true;
    }).length;
    
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
  
  return (
    <div className="p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {format(currentDate, 'MMMM yyyy')}
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
