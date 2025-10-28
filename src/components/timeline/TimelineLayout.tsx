import React, { forwardRef, useMemo, useEffect } from 'react';
import { addDays, startOfWeek, format } from 'date-fns';
import type { Table, Reservation, Sector, TimelineConfig, DragState } from '@/types';
import { getSlotsPerDay, getCurrentTimePosition, filterReservationsByTimezone } from '@/lib/timeUtils';
import { ROW_HEIGHT } from '@/lib/constants';
import useTimelineStore, { getValidReservationsForSector } from '@/store/useTimelineStore';
import TimeHeader from './TimeHeader';
import TableRow from './TableRow';
import MonthView from './MonthView';

// Helper function to calculate contrast color
const getContrastColor = (hexColor: string, opacity: number = 0.05): string => {
  // Remove # if present
  const hex = hexColor.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate the color with opacity over white background
  const rWithOpacity = Math.round(r * opacity + 255 * (1 - opacity));
  const gWithOpacity = Math.round(g * opacity + 255 * (1 - opacity));
  const bWithOpacity = Math.round(b * opacity + 255 * (1 - opacity));
  
  // Calculate luminance of the resulting color
  const luminance = (0.299 * rWithOpacity + 0.587 * gWithOpacity + 0.114 * bWithOpacity) / 255;
  
  // Return black for light backgrounds, white for dark backgrounds
  return luminance > 0.5 ? '#000000' : '#ffffff';
};


interface TimelineLayoutProps {
  config?: TimelineConfig;
  tables?: Table[];
  reservations?: Reservation[];
  sectors?: Sector[];
  dragState?: DragState;
  selectedSlot?: {
    tableId: string | null;
    startTime: string | null;
  };
  editingReservation?: string | null;
  onSlotClick?: (table: Table, startTime: string) => void;
  onEditClick?: (reservation: Reservation, table: Table, startTime: string) => void;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
  selectedSectors?: string[];
  searchTerm?: string;
  selectedStatuses?: string[];
}

const TimelineLayout = forwardRef<HTMLDivElement, TimelineLayoutProps>(
  ({ config, tables, reservations, sectors, dragState, selectedSlot, editingReservation, onSlotClick, onEditClick, scrollContainerRef, selectedSectors = [], searchTerm = '', selectedStatuses = [] }, ref) => {
    // Use store data if props are not provided
    const store = useTimelineStore();
    const { ui, toggleSectorCollapse } = store;
    const { viewMode, visibleDate, slotWidth, startHour, collapsedSectors } = ui;
    const storeTables = Object.values(store.tablesById);
    const storeReservations = Object.values(store.reservationsById);
    const storeSectors = Object.values(store.sectorsById);
    
    // Use props or fallback to store data
    const finalTables = tables || storeTables;
    const finalReservations = reservations || storeReservations;
    const finalSectors = sectors || storeSectors;
    
    // Create default config if not provided - ALWAYS use restaurantConfig from store
    const defaultConfig: TimelineConfig = {
      date: visibleDate,
      startHour: store.restaurantConfig?.operatingHours.startHour || startHour,
      endHour: store.restaurantConfig?.operatingHours.endHour || 23,
      slotMinutes: store.restaurantConfig?.slotConfiguration.slotMinutes || 15,
      slotWidth: slotWidth,
      timezone: store.restaurantConfig?.timezone || 'UTC',
      viewMode: 'day',
    };
    
    // Log removido para limpiar consola
    
    const finalConfig = config || defaultConfig;
    
    // Filter reservations based on viewMode, visibleDate, timezone, sectors, search, and status
    const filteredReservations = useMemo(() => {
      // First filter by date
      const dateFilteredReservations = finalReservations.filter(reservation => {
        // Extract date from startTime (ISO format)
        const reservationDate = reservation.startTime ? 
          reservation.startTime.split('T')[0] : // Get YYYY-MM-DD part
          visibleDate; // Fallback to visibleDate if no startTime
        
        let isInDateRange = false;
        
        switch (viewMode) {
          case 'day':
            isInDateRange = reservationDate === visibleDate;
            break;
          case '3-day':
            const day1 = visibleDate;
            const day2 = format(addDays(new Date(visibleDate), 1), 'yyyy-MM-dd');
            const day3 = format(addDays(new Date(visibleDate), 2), 'yyyy-MM-dd');
            isInDateRange = reservationDate === day1 || reservationDate === day2 || reservationDate === day3;
            break;
          case 'week':
            const weekStart = startOfWeek(new Date(visibleDate), { weekStartsOn: 1 }); // Monday
            const weekStartStr = format(weekStart, 'yyyy-MM-dd');
            const weekEnd = addDays(weekStart, 6);
            const weekEndStr = format(weekEnd, 'yyyy-MM-dd');
            isInDateRange = reservationDate >= weekStartStr && reservationDate <= weekEndStr;
            break;
          case 'month':
            isInDateRange = true; // Month view shows all reservations
            break;
          default:
            isInDateRange = true;
        }
        
        return isInDateRange;
      });

      // Then apply timezone-based filtering to hide reservations outside operating hours
      const timezoneFilteredReservations = filterReservationsByTimezone(
        dateFilteredReservations,
        finalConfig,
        store.restaurantConfig
      );
      
      // Apply sector filter
      let sectorFiltered = timezoneFilteredReservations;
      if (selectedSectors.length > 0) {
        const allSectorsInStore = Object.values(store.sectorsById);
        // If all sectors are selected, show all
        if (selectedSectors.length < allSectorsInStore.length) {
          // Filter by sectors
          sectorFiltered = timezoneFilteredReservations.filter(reservation => {
            const table = finalTables.find(t => t.id === reservation.tableId);
            return table && selectedSectors.includes(table.sectorId);
          });
        }
      }
      
      // Apply search filter
      let searchFiltered = sectorFiltered;
      if (searchTerm.length > 0) {
        const lowerSearchTerm = searchTerm.toLowerCase();
        searchFiltered = sectorFiltered.filter(reservation => {
          const nameMatch = reservation.customer.name.toLowerCase().includes(lowerSearchTerm);
          const phoneMatch = reservation.customer.phone.includes(lowerSearchTerm);
          return nameMatch || phoneMatch;
        });
      }
      
      // Apply status filter
      let statusFiltered = searchFiltered;
      if (selectedStatuses.length > 0 && selectedStatuses.length < 6) {
        // If all statuses are selected, show all
        if (selectedStatuses.length < 6) {
          statusFiltered = searchFiltered.filter(reservation => 
            selectedStatuses.includes(reservation.status)
          );
        }
      }
      
      return statusFiltered;
    }, [finalReservations, visibleDate, viewMode, finalConfig.timezone, finalConfig, store.restaurantConfig, selectedSectors, searchTerm, selectedStatuses, finalTables, store.sectorsById]);
    
    
    // Calculate timeline dimensions based on view mode
    const slotsPerDay = getSlotsPerDay(finalConfig);
    let totalSlots = slotsPerDay;
    
    switch (viewMode) {
      case 'day':
        totalSlots = slotsPerDay;
        break;
      case '3-day':
        totalSlots = slotsPerDay * 3;
        break;
      case 'week':
        totalSlots = slotsPerDay * 7;
        break;
      case 'month':
        totalSlots = slotsPerDay;
        break;
    }
    
    const timelineWidth = totalSlots * slotWidth;
    
    // Group tables by sector and sort them
    const tablesBySector = finalTables.reduce((acc, table) => {
      if (!acc[table.sectorId]) {
        acc[table.sectorId] = [];
      }
      acc[table.sectorId].push(table);
      return acc;
    }, {} as Record<string, Table[]>);
    
    // Sort tables within each sector
    Object.keys(tablesBySector).forEach(sectorId => {
      tablesBySector[sectorId].sort((a, b) => a.sortOrder - b.sortOrder);
    });
    
    // Sort sectors
    const sortedSectors = finalSectors.sort((a, b) => a.sortOrder - b.sortOrder);
    
    
    // Get reservations for each table
    const getReservationsForTable = (tableId: string) => {
      return filteredReservations.filter(res => res.tableId === tableId);
    };
    
    
    // Render month view if in month mode
    if (viewMode === 'month') {
      return (
        <div 
          ref={ref}
          className="flex flex-col h-full bg-white"
          data-testid="timeline-layout"
        >
          <div className="flex-1 overflow-auto" data-testid="timeline-body">
            <MonthView />
          </div>
        </div>
      );
    }

    return (
      <div 
        ref={ref}
        className="flex flex-col h-full bg-white"
        data-testid="timeline-layout"
      >
        {/* Empty space to align header with position absolute */}
        <div className="min-h-10"></div>
        
        {/* Scrollable timeline container */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-auto" 
          data-testid="timeline-body"
        >
          <div 
            className="flex h-min-content"
            style={{
              width: `${(finalConfig.endHour - finalConfig.startHour) * (60 / finalConfig.slotMinutes) * finalConfig.slotWidth}px`,
              minWidth: `${(finalConfig.endHour - finalConfig.startHour) * (60 / finalConfig.slotMinutes) * finalConfig.slotWidth}px`
            }}
          >
            {/* Left sticky column for table names */}
            <div className="sticky left-0 z-10 bg-white border-r border-gray-200 min-w-[150px] z-70">
              
              {/* Sectors with grouped table rows */}
              {sortedSectors.map(sector => {
                const sectorTables = tablesBySector[sector.id] || [];
                const isCollapsed = collapsedSectors[sector.id] || false;
                
                return (
                  <div key={sector.id} className="border-b border-gray-200">
                    {/* Sector Header - always visible, 30px height */}
                    <div 
                      className="flex items-center px-3 py-2 hover:opacity-80 cursor-pointer relative"
                      style={{ 
                        height: '30px',
                        backgroundColor: `${sector.color}0D`
                      }}
                      onClick={() => toggleSectorCollapse(sector.id)}
                    >
                      <div className="flex-1">
                        <div 
                          className="font-semibold text-sm"
                          style={{ color: getContrastColor(sector.color) }}
                        >
                          {sector.name}
                        </div>
                        <div 
                          className="text-xs"
                          style={{ color: getContrastColor(sector.color), opacity: 0.8 }}
                        >
                          {isCollapsed ? ' (collapsed)' : ''}
                        </div>
                      </div>
                    </div>
                    
                    {/* Sector Tables - only show if not collapsed */}
                    {!isCollapsed && sectorTables.map(table => (
                      <div 
                        key={table.id}
                        className="flex items-center px-3 py-2 border-b border-gray-200 hover:bg-gray-50"
                        style={{ height: `${ROW_HEIGHT}px` }}
                      >
                        <div className="flex-1 ml-4">
                          <div className="font-medium text-gray-900 text-sm">{table.name}</div>
                          <div className="text-xs text-gray-500">
                            {table.capacity.min}-{table.capacity.max} people
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
            
            {/* Right scrollable timeline area */}
            <div className="flex-1 overflow-hidden relative min-h-max">
              {/* Time Header */}
              <TimeHeader config={finalConfig} />
              
              {/* Full-height grid lines container */}
              <div 
                className="absolute inset-y-0 pointer-events-none z-20 h-full"
                style={{ width: `${timelineWidth}px` }}
              >
                {/* Generate vertical grid lines spanning full height */}
                {Array.from({ length: totalSlots + 1 }, (_, slot) => {
                  const position = slot * finalConfig.slotWidth;
                  const isHalfHour = slot % (30 / finalConfig.slotMinutes) === 0;
                  const isHour = slot % (60 / finalConfig.slotMinutes) === 0;
                  const isDayBoundary = slot % slotsPerDay === 0;
                  
                  // Only make 30-minute lines bold, not hour lines
                  const isBold = isHalfHour && !isHour;
                  
                  return (
                    <div
                      key={`grid-${slot}`}
                      className={`absolute top-0 bottom-0 ${isBold ? 'border-gray-300' : 'border-gray-200'} ${isDayBoundary ? 'border-l-2 border-gray-400' : ''}`}
                      style={{ 
                        left: `${position}px`,
                        borderLeft: `1px solid ${isBold ? '#d1d5db' : '#e5e7eb'}`
                      }}
                    />
                  );
                })}
                
                {/* Current time indicator */}
                {(() => {
                  const currentTimePosition = getCurrentTimePosition(finalConfig);
                  if (currentTimePosition === null) return null;
                  
                  return (
                    <div
                      key="current-time"
                      className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-30"
                      style={{ left: `${currentTimePosition}px` }}
                    />
                  );
                })()}
              </div>
              
              
              {/* Timeline grid */}
              <div 
                className="relative"
                style={{ 
                  width: `${timelineWidth}px`,
                  minWidth: `${timelineWidth}px`
                }}
              >
                {/* Render sectors with grouped table rows */}
                {sortedSectors.map(sector => {
                  const sectorTables = tablesBySector[sector.id] || [];
                  const isCollapsed = collapsedSectors[sector.id] || false;
                  
                  return (
                    <div key={sector.id}>
                      {/* Sector Header Row - always visible, 30px height */}
                      <div 
                        className="flex items-center px-3 py-2"
                        style={{ 
                          height: '30px',
                          backgroundColor: `${sector.color}0D`
                        }}
                      >
                        {(() => {
                          const validReservations = getValidReservationsForSector(sector.id, visibleDate, store);
                          
                          return (
                            <div 
                              className="text-xs"
                              style={{ color: getContrastColor(sector.color), opacity: 0.8 }}
                            >
                              {sectorTables.length} table{sectorTables.length !== 1 ? 's' : ''} - {validReservations} reservation{validReservations !== 1 ? 's' : ''}
                            </div>
                          );
                        })()}
                      </div>
                      
                      {/* Sector Tables - only show if not collapsed */}
                      {!isCollapsed && sectorTables.map(table => (
                        <TableRow
                          key={table.id}
                          table={table}
                          reservations={getReservationsForTable(table.id)}
                          config={finalConfig}
                          dragState={dragState}
                          selectedSlot={selectedSlot}
                          editingReservation={editingReservation}
                          onSlotClick={onSlotClick}
                          onEditClick={onEditClick}
                        />
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

TimelineLayout.displayName = 'TimelineLayout';

export default TimelineLayout;
