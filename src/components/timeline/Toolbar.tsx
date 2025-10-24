import React from 'react';
import { formatDateForDisplay } from '@/lib/timeUtils';
import useTimelineStore from '@/store/useTimelineStore';

export default function Toolbar() {
  const { ui, setViewMode, goToPrevPeriod, goToNextPeriod, goToToday } = useTimelineStore();
  const { visibleDate, viewMode } = ui;

  const formattedDate = formatDateForDisplay(visibleDate, 'America/Argentina/Buenos_Aires');

  const handleViewModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setViewMode(event.target.value as 'day' | '3-day' | 'week' | 'month');
  };

  return (
    <div 
      className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200"
      data-testid="timeline-toolbar"
    >
      {/* Left: Sector toggle (placeholder for now) */}
      <div className="flex items-center">
        <button
          className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
          aria-label="Toggle sector view"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Center: Current date */}
      <div className="flex-1 text-center">
        <h2 className="text-lg font-semibold text-gray-900">{formattedDate}</h2>
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
      </div>
    </div>
  );
}
