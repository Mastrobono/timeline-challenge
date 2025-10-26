import React, { useState } from 'react';
import { formatDateForDisplay } from '@/lib/timeUtils';
import useTimelineStore from '@/store/useTimelineStore';
import { BulkImportService } from '@/lib/bulkImportService';
import type { Reservation } from '@/types';

export default function Toolbar() {
  const { ui, setViewMode, setTimezone, goToPrevPeriod, goToNextPeriod, goToToday, initializeWithValidation, clearAllReservations } = useTimelineStore();
  const { visibleDate, viewMode, timezone } = ui;
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const formattedDate = formatDateForDisplay(visibleDate, timezone);

  const handleViewModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setViewMode(event.target.value as 'day' | '3-day' | 'week' | 'month');
  };

  const handleTimezoneChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimezone(event.target.value);
  };


  const handleCSVImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    setIsLoading(true);
    setStatus('Importing CSV...');
    
    try {
      await BulkImportService.importFromCSV(file, {
        onProgress: (current, total) => setStatus(`Processing ${current}/${total}...`),
        onComplete: (valid, invalid) => setStatus(`✅ CSV Import: ${valid} imported, ${invalid} rejected`),
        onError: (error) => setStatus(`❌ CSV Import failed: ${error.message}`)
      });
      
      // Clear the file input to allow re-importing the same file
      event.target.value = '';
    } catch (error) {
      setStatus(`❌ CSV Import error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAPIImport = async () => {
    setIsLoading(true);
    setStatus('Importing from API...');
    
    try {
      await BulkImportService.importFromAPI({
        onProgress: (current, total) => setStatus(`Processing ${current}/${total}...`),
        onComplete: (valid, invalid) => setStatus(`✅ API Import: ${valid} imported, ${invalid} rejected`),
        onError: (error) => setStatus(`❌ API Import failed: ${error.message}`)
      });
    } catch (error) {
      setStatus(`❌ API Import error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Unified function to generate valid reservations in the current timezone
  const generateValidReservations = async (type: 'small' | 'large' = 'small') => {
    const response = await fetch('/api/generate-seeds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        type,
        timezone: timezone // Pass current timezone from UI state
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to generate seeds');
    }
    
    const data = await response.json();
    return data;
  };

  const handleClearState = async (useLarge: boolean = false) => {
    setIsLoading(true);
    setStatus(`Generating ${useLarge ? 'large' : 'small'} seed data...`);
    
    try {
      // Generate valid reservations using unified function
      const data = await generateValidReservations(useLarge ? 'large' : 'small');
      
      // Load the generated data (replaces all reservations)
      initializeWithValidation({
        reservations: data.reservations,
        tables: data.tables,
        sectors: data.sectors,
        restaurantConfig: data.restaurantConfig
      });
      
      // Wait a bit for the store to update, then check final count
      setTimeout(() => {
        const finalCount = Object.keys(useTimelineStore.getState().reservationsById).length;
        const rejectedCount = data.reservations.length - finalCount;
        
        setStatus(`✅ Generated ${data.reservations.length} reservations, ${finalCount} loaded, ${rejectedCount} rejected`);
      }, 100);
      
    } catch (error) {
      setStatus(`❌ Error generating seed data: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateCSV = async () => {
    setIsLoading(true);
    setStatus('Generating CSV export...');
    
    try {
      const data = await generateValidReservations('small');
      const csvContent = generateCSVContent(data.reservations);
      
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `reservations-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      setStatus(`✅ CSV exported with ${data.reservations.length} reservations`);
    } catch (error) {
      setStatus(`❌ Error generating CSV: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearAllReservations = () => {
    setIsLoading(true);
    setStatus('Clearing all reservations...');
    
    try {
      // Clear all reservations from the store
      clearAllReservations();
      setStatus('✅ All reservations cleared');
    } catch (error) {
      setStatus(`❌ Error clearing reservations: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const generateCSVContent = (reservations: Reservation[]) => {
    const headers = [
      'id',
      'tableId', 
      'customerName',
      'customerPhone',
      'customerEmail',
      'partySize',
      'startTime',
      'endTime',
      'durationMinutes',
      'status',
      'priority',
      'source',
      'createdAt',
      'updatedAt'
    ];
    
    const csvRows = reservations.map(reservation => [
      reservation.id,
      reservation.tableId,
      reservation.customer.name,
      reservation.customer.phone,
      reservation.customer.email,
      reservation.partySize,
      reservation.startTime,
      reservation.endTime,
      reservation.durationMinutes,
      reservation.status,
      reservation.priority,
      reservation.source,
      reservation.createdAt,
      reservation.updatedAt
    ]);
    
    return [headers, ...csvRows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');
  };

  return (
    <div 
      className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200"
      data-testid="timeline-toolbar"
    >
      {/* Left: Test buttons */}
      <div className="flex items-center space-x-2">
        
        <div className="flex items-center space-x-1">
          <label className="px-2 py-1 text-xs bg-purple-500 text-white rounded hover:bg-purple-600 cursor-pointer disabled:opacity-50">
            Import CSV
            <input
              type="file"
              accept=".csv"
              onChange={handleCSVImport}
              disabled={isLoading}
              className="hidden"
            />
          </label>
          <button
            onClick={handleAPIImport}
            disabled={isLoading}
            className="px-2 py-1 text-xs bg-orange-500 text-white rounded hover:bg-orange-600 disabled:opacity-50"
          >
            Import API
          </button>
        </div>
        
        <div className="flex items-center space-x-1">
          <button
            onClick={handleClearAllReservations}
            disabled={isLoading}
            className="px-2 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
          >
            Clear All
          </button>
          <button
            onClick={() => handleClearState(false)}
            disabled={isLoading}
            className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
          >
            Reset Small
          </button>
          <button
            onClick={() => handleClearState(true)}
            disabled={isLoading}
            className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
          >
            Reset Large
          </button>
          <button
            onClick={handleGenerateCSV}
            disabled={isLoading}
            className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            Generate CSV
          </button>
        </div>
      </div>

      {/* Center: Current date and status */}
      <div className="flex-1 text-center">
        <h2 className="text-lg font-semibold text-gray-900">{formattedDate}</h2>
        {status && (
          <p className="text-xs text-gray-600 mt-1">{status}</p>
        )}
      </div>

      {/* Right: Navigation and view controls */}
      <div className="flex items-center space-x-2">
        {/* Navigation buttons */}
        <button
          onClick={goToPrevPeriod}
          className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md border border-gray-300"
          aria-label="Previous period"
        >
          Prev
        </button>
        
        <button
          onClick={goToToday}
          className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md border border-gray-300"
          aria-label="Go to today"
        >
          Today
        </button>
        
        <button
          onClick={goToNextPeriod}
          className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md border border-gray-300"
          aria-label="Next period"
        >
          Next
        </button>

        {/* View mode selector */}
        <select
          value={viewMode}
          onChange={handleViewModeChange}
          className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          aria-label="Select view mode"
        >
          <option value="day">Day</option>
          <option value="3-day">3-Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>

        {/* Timezone selector */}
        <select
          value={timezone}
          onChange={handleTimezoneChange}
          className="px-3 py-1 text-sm border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          aria-label="Select timezone"
        >
          <option value="America/Argentina/Buenos_Aires">Buenos Aires</option>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">London</option>
          <option value="UTC">UTC</option>
        </select>
      </div>
    </div>
  );
}
