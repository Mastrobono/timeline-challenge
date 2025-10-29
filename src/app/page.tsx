'use client';

import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { 
  CalendarIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  BuildingOfficeIcon,
  SparklesIcon,
  DocumentArrowDownIcon,
  DocumentArrowUpIcon
} from '@heroicons/react/24/outline';
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { filterReservationsByTimezone, parseDateString } from '@/lib/timeUtils';
import { generateTablesAndSectors, generateValidReservationsInTimezone, generateRestaurantConfig } from '@/lib/seedGenerator';
import { BulkImportService } from '@/lib/bulkImportService';
import useTimelineStore from '@/store/useTimelineStore';
import { useAutoInitialize } from '@/hooks/useAutoInitialize';
import type { RestaurantConfig } from '@/types';

// Loading skeleton component
function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="h-8 bg-gray-800 rounded w-64 mb-4"></div>
          <div className="h-4 bg-gray-800 rounded w-96"></div>
        </div>
        
        {/* Content skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side skeleton */}
          <div className="space-y-6">
            <div className="h-64 bg-gray-800 rounded-lg"></div>
            <div className="h-32 bg-gray-800 rounded-lg"></div>
          </div>
          
          {/* Right side skeleton */}
          <div className="h-96 bg-gray-800 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

// Restaurant config display component
function RestaurantConfigDisplay({ config }: { config: RestaurantConfig }) {
  const stats = [
    { name: 'Operating Hours', stat: `${config.operatingHours.startHour}:00 - ${config.operatingHours.endHour}:00` },
    { name: 'Timezone', stat: config.timezone.split('/').pop() || config.timezone },
    { name: 'Slot Duration', stat: `${config.slotConfiguration.slotMinutes} minutes` },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gray-800/75 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <BuildingOfficeIcon className="h-6 w-6 text-indigo-400" />
          <h3 className="text-lg font-semibold text-white">{config.name}</h3>
        </div>
        <p className="text-gray-300 text-sm mb-4">Restaurant Configuration</p>
        
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg bg-gray-700/50 px-4 py-3 shadow ring-1 ring-inset ring-white/10"
            >
              <dt className="truncate text-xs font-medium text-gray-400">{item.name}</dt>
              <dd className="mt-1 text-sm font-semibold tracking-tight text-white">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

// Main component
function HomeContent() {
  const router = useRouter();
  const store = useTimelineStore();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [isAdding900, setIsAdding900] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState<string | null>(null);

  // Use auto-initialize hook to check if store is ready
  const { isInitialized, isLoading: isInitializing } = useAutoInitialize();
  
  const { restaurantConfig, reservationsById, setVisibleDate } = store;
  const reservations = Object.values(reservationsById);
  
  // Check if we have data
  const hasData = restaurantConfig && reservations.length > 0;

  // Handle navigation after store update
  useEffect(() => {
    if (pendingNavigation && isInitialized && !isInitializing) {
      router.push(pendingNavigation);
      setPendingNavigation(null);
    }
  }, [pendingNavigation, isInitialized, isInitializing, router]);
  
  // Calendar component
  const Calendar = () => {
    // Initialize with today's date using parseDateString for consistency
    const todayStr = format(new Date(), 'yyyy-MM-dd');
    const [currentMonthState, setCurrentMonthState] = useState(parseDateString(todayStr));
    
    const previousMonth = () => {
      setCurrentMonthState(prev => addDays(prev, -30));
    };
    
    const nextMonth = () => {
      setCurrentMonthState(prev => addDays(prev, 30));
    };
    
    const monthStart = startOfMonth(currentMonthState);
    const monthEnd = endOfMonth(currentMonthState);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
    
    // Group reservations by date using the SAME filtering logic as TimelineLayout
    const reservationsByDate = reservations.reduce((acc, reservation) => {
      // Convert UTC reservation time to restaurant timezone to get the correct date
      const reservationDate = new Date(reservation.startTime);
      const zonedDate = toZonedTime(reservationDate, restaurantConfig?.timezone || 'UTC');
      const dateStr = format(zonedDate, 'yyyy-MM-dd');
      
      // Apply timezone filtering (same as TimelineLayout)
      const config = {
        date: dateStr,
        startHour: restaurantConfig?.operatingHours.startHour || 7,
        endHour: restaurantConfig?.operatingHours.endHour || 19,
        slotMinutes: restaurantConfig?.slotConfiguration.slotMinutes || 15,
        slotWidth: 30,
        timezone: restaurantConfig?.timezone || 'UTC',
        viewMode: 'day' as const,
      };
      
      // Check if this reservation should be counted (within operating hours)
      const timezoneFiltered = filterReservationsByTimezone([reservation], config, restaurantConfig);
      if (timezoneFiltered.length === 0) {
        return acc; // Skip if not within operating hours
      }
      
      // Apply sector filter (same as TimelineLayout)
      // Note: In home calendar, we show ALL sectors, so no sector filtering
      
      // Apply search filter (same as TimelineLayout)
      // Note: In home calendar, we show ALL reservations, so no search filtering
      
      // Apply status filter (same as TimelineLayout)
      // Note: In home calendar, we show ALL statuses, so no status filtering
      
      acc[dateStr] = (acc[dateStr] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return (
      <div className="bg-gray-800/75 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Reservations Calendar</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={previousMonth}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <span className="text-white font-medium min-w-[120px] text-center">
              {format(currentMonthState, 'MMMM yyyy')}
            </span>
            <button
              onClick={nextMonth}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
            <div key={`day-${index}`} className="text-center text-xs font-medium text-gray-400 py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {days.map((day) => {
            // Create date string directly without timezone conversion
            // The day is already in local time, we just need the date part
            const dateStr = format(day, 'yyyy-MM-dd');
            const reservationCount = reservationsByDate[dateStr] || 0;
            
            return (
              <div
                key={day.toISOString()}
                onClick={() => {
                  // Simply use the date string as is
                  setVisibleDate(dateStr);
                  
                  // Set pending navigation to be handled by useEffect
                  setPendingNavigation('/timeline');
                }}
                className={`
                  aspect-square flex flex-col items-center justify-center p-1 rounded-lg
                  ${isSameMonth(day, currentMonthState) ? 'bg-gray-700/50' : 'bg-gray-800/30'}
                  ${isToday(day) ? 'ring-2 ring-indigo-500' : ''}
                  hover:bg-gray-600/50 transition-colors cursor-pointer
                `}
              >
                <span className={`
                  text-sm font-medium
                  ${isSameMonth(day, currentMonthState) ? 'text-white' : 'text-gray-500'}
                  ${isToday(day) ? 'text-indigo-400' : ''}
                `}>
                  {format(day, 'd')}
                </span>
                {reservationCount > 0 && (
                  <div className="mt-1 px-1 py-0.5 bg-indigo-500 text-white text-xs rounded-full min-w-[20px] text-center">
                    {reservationCount}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  // Generate new seed
  const generateNewSeed = useCallback(async () => {
    setIsGenerating(true);
    try {
      const timezone = 'America/Argentina/Buenos_Aires';
      
      // Generate new restaurant config
      const newConfig = generateRestaurantConfig(timezone);
      
      // Generate tables and sectors
      const { tables, sectors } = generateTablesAndSectors();
      
      // Generate reservations with validation
      const reservations = generateValidReservationsInTimezone(
        tables,
        sectors,
        newConfig,
        timezone,
        10, // 10 reservations per day
        90  // 90 days (3 months)
      );
      
      // Update store
      store.initializeWithValidation({
        restaurantConfig: newConfig,
        tables,
        sectors,
        reservations
      });
      
    } catch (error) {
      console.error('Error generating seed:', error);
    } finally {
      setIsGenerating(false);
    }
  }, [store]);
  
  // Export to CSV
  const exportToCSV = async () => {
    setIsExporting(true);
    try {
      const csvContent = BulkImportService.exportReservationsToCSV(reservations);
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `reservations-${format(new Date(), 'yyyy-MM-dd')}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting CSV:', error);
    } finally {
      setIsExporting(false);
    }
  };
  
  // Generate random CSV
  const generateRandomCSV = async () => {
    setIsExporting(true);
    try {
      const timezone = 'America/Argentina/Buenos_Aires';
      const config = generateRestaurantConfig(timezone);
      const { tables, sectors } = generateTablesAndSectors();
      const reservations = generateValidReservationsInTimezone(tables, sectors, config, timezone, 10, 10);
      
      const csvContent = BulkImportService.exportReservationsToCSV(reservations);
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `random-reservations-${format(new Date(), 'yyyy-MM-dd')}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating random CSV:', error);
    } finally {
      setIsExporting(false);
    }
  };
  
  // Handle CSV import
  const handleCSVImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    setIsImporting(true);
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        // Import directly into the store using the file
        await BulkImportService.importFromCSV(file, {
          onProgress: () => {
            // Optional: Could show progress in UI
          },
          onComplete: () => {
            // Import completed successfully
          },
          onError: (error) => {
            console.error('Import error:', error.message);
          }
        });
        
        // Refresh the page to show new data
        window.location.reload();
      } catch (error) {
        console.error('Error importing CSV:', error);
        alert(`Import error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      } finally {
        setIsImporting(false);
      }
    };
    reader.readAsText(file);
  };
  
  // Add 900 more reservations
  const add900Reservations = useCallback(async () => {
    if (!restaurantConfig) return;
    
    setIsAdding900(true);
    try {
      const timezone = restaurantConfig.timezone || 'America/Argentina/Buenos_Aires';
      const tables = Object.values(store.tablesById);
      const sectors = Object.values(store.sectorsById);
      
      // Generate 900 more reservations (10 per day × 90 days)
      const newReservations = generateValidReservationsInTimezone(
        tables,
        sectors,
        restaurantConfig,
        timezone,
        10, // 10 reservations per day
        90  // 90 days
      );
      
      // Add to existing reservations
      store.bulkImportReservations(newReservations);
    } catch (error) {
      console.error('Error adding 900 reservations:', error);
      alert(`Error adding reservations: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsAdding900(false);
    }
  }, [restaurantConfig, store]);
  
  // Auto-generate seed if no data exists (only once when store is ready)
  useEffect(() => {
    if (isInitialized && !hasData && !isGenerating) {
      generateNewSeed();
    }
  }, [isInitialized, hasData, isGenerating, generateNewSeed]);
  
  if (!isInitialized || isInitializing || (!hasData && isGenerating)) {
    return <LoadingSkeleton />;
  }
  
  // Don't render if we don't have restaurantConfig
  if (!restaurantConfig) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-yellow-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-lg font-semibold text-gray-100 mb-2">No Configuration Found</h2>
          <p className="text-gray-400 mb-4">
            Please click &quot;Generate New Seed&quot; to initialize the restaurant data.
          </p>
          <button
            onClick={generateNewSeed}
            disabled={isGenerating}
            className="inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-400 disabled:opacity-50"
          >
            <SparklesIcon className="h-4 w-4 mr-2" />
            {isGenerating ? 'Generating...' : 'Generate New Seed'}
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Restaurant Management</h1>
              <p className="mt-2 text-gray-300">
                Welcome! Here are your generated reservations with {reservations.length} total bookings.
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => router.push('/timeline')}
                className="relative inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <CalendarIcon className="h-4 w-4 mr-2" />
                View Timeline
              </button>
              <button
                onClick={generateNewSeed}
                disabled={isGenerating}
                className="relative inline-flex items-center rounded-md bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 disabled:opacity-50"
              >
                <SparklesIcon className="h-4 w-4 mr-2" />
                {isGenerating ? 'Generating...' : 'Generate New Seed'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Restaurant Config */}
          <div className="space-y-6">
            <RestaurantConfigDisplay config={restaurantConfig!} />
            
            {/* Stats */}
            <div className="bg-gray-800/75 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Reservation Statistics</h3>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-lg bg-gray-700/50 px-4 py-3 shadow ring-1 ring-inset ring-white/10">
                  <dt className="truncate text-xs font-medium text-gray-400">Total Reservations</dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-white">{reservations.length}</dd>
                </div>
                <div className="overflow-hidden rounded-lg bg-gray-700/50 px-4 py-3 shadow ring-1 ring-inset ring-white/10">
                  <dt className="truncate text-xs font-medium text-gray-400">VIP Reservations</dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-white">
                    {reservations.filter(r => r.priority === 'VIP').length}
                  </dd>
                </div>
                <div className="overflow-hidden rounded-lg bg-gray-700/50 px-4 py-3 shadow ring-1 ring-inset ring-white/10">
                  <dt className="truncate text-xs font-medium text-gray-400 flex items-center">
                    Large Groups
                    <div className="ml-1 group relative">
                      <div className="w-3 h-3 rounded-full bg-gray-500 flex items-center justify-center text-xs cursor-help">
                        i
                      </div>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-[9999]">
                        Groups of 6+ people
                      </div>
                    </div>
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-white">
                    {reservations.filter(r => r.priority === 'LARGE_GROUP').length}
                  </dd>
                </div>
                <div className="overflow-hidden rounded-lg bg-gray-700/50 px-4 py-3 shadow ring-1 ring-inset ring-white/10">
                  <dt className="truncate text-xs font-medium text-gray-400">With Preferred Sector</dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-white">
                    {reservations.filter(r => r.preferredSectorId).length}
                  </dd>
                </div>
              </dl>
            </div>
            
            {/* CSV Actions */}
            <div className="bg-gray-800/75 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Data Management</h3>
              <div className="space-y-3">
                <div className="flex space-x-3">
                  <button
                    onClick={exportToCSV}
                    disabled={isExporting}
                    className="flex-1 inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50"
                  >
                    <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
                    {isExporting ? 'Exporting...' : 'Export Current Data'}
                  </button>
                  <button
                    onClick={generateRandomCSV}
                    disabled={isExporting}
                    className="flex-1 inline-flex items-center justify-center rounded-md bg-purple-500 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 disabled:opacity-50"
                  >
                    <SparklesIcon className="h-4 w-4 mr-2" />
                    {isExporting ? 'Generating...' : 'Generate Random CSV'}
                  </button>
                </div>
                
                <div className="relative">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleCSVImport}
                    disabled={isImporting}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                  />
                  <div className="flex items-center justify-center rounded-md border-2 border-dashed border-gray-600 px-4 py-3 text-sm text-gray-300 hover:border-gray-500 hover:text-white transition-colors">
                    <DocumentArrowUpIcon className="h-4 w-4 mr-2" />
                    {isImporting ? 'Importing...' : 'Import CSV File'}
                  </div>
                </div>
                
                <p className="text-xs text-gray-400 text-center">
                  Don&apos;t have a CSV? We&apos;ll generate a random one for you! 😊
                </p>
                
                {/* Stress test button */}
                <div className="pt-3 border-t border-gray-700">
                  <button
                    onClick={add900Reservations}
                    disabled={isAdding900 || !restaurantConfig}
                    className="group w-full text-xxs text-orange-400 text-center cursor-pointer transition-all"
                  >
                    {isAdding900 ? (
                      <span className="flex items-center justify-center">
                        <span className="animate-spin mr-2">⚡</span>
                        Adding 900 reservations...
                      </span>
                    ) : (
                      <>
                        <span className="group-hover:hidden">Would you like to stress my app?</span>
                        <span className="hidden group-hover:inline">please no :D</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Calendar */}
          <div>
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <HomeContent />
    </Suspense>
  );
}