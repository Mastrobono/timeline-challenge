'use client';

import { useEffect } from 'react';
import TimelineLayout from '@/components/timeline/TimelineLayout';
import useTimelineStore from '@/store/useTimelineStore';
import { seedSectors, seedTables, seedReservations, seedRestaurantConfig } from '@/data/seed-small';
import type { TimelineConfig } from '@/lib/timeUtils';

export default function TimelinePage() {
  const { 
    sectorsById, 
    tablesById, 
    reservationsById, 
    restaurantConfig,
    ui, 
    setSlotWidth, 
    setVisibleDate,
    upsertSector,
    upsertTable,
    addReservation,
    setRestaurantConfig
  } = useTimelineStore();
  
  // Seed data if store is empty
  useEffect(() => {
    const hasData = Object.keys(sectorsById).length > 0;
    if (!hasData) {
      // Add restaurant configuration
      setRestaurantConfig(seedRestaurantConfig);
      
      // Add sectors
      seedSectors.forEach(sector => upsertSector(sector));
      
      // Add tables
      seedTables.forEach(table => upsertTable(table));
      
      // Add reservations
      seedReservations.forEach(reservation => addReservation(reservation));
      
      // Set visible date to match the reservations (October 2025)
      setVisibleDate('2025-10-24');
    }
  }, [sectorsById, tablesById, reservationsById, upsertSector, upsertTable, addReservation, setVisibleDate, setRestaurantConfig]);
  
  // Create timeline config
  const config: TimelineConfig = {
    date: ui.visibleDate,
    startHour: restaurantConfig?.operatingHours.startHour || ui.startHour,
    endHour: restaurantConfig?.operatingHours.endHour || 23,
    slotMinutes: restaurantConfig?.slotConfiguration.slotMinutes || 15,
    slotWidth: ui.slotWidth,
    timezone: restaurantConfig?.timezone || 'America/Argentina/Buenos_Aires',
  };
  
  // Zoom controls
  const zoomLevels = [
    { label: '75%', value: 45 },
    { label: '100%', value: 60 },
    { label: '125%', value: 75 },
  ];
  
  const handleZoomChange = (slotWidth: number) => {
    setSlotWidth(slotWidth);
  };
  
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVisibleDate(event.target.value);
  };
  
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 h-14">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-semibold text-gray-900">Restaurant Timeline</h1>
            
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
        <TimelineLayout config={config} />
      </div>
    </div>
  );
}

