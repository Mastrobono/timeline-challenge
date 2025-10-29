'use client'

import React from 'react'
import useTimelineStore from '@/store/useTimelineStore'
import { formatDateForDisplay } from '@/lib/timeUtils'

interface EnhancedToolbarProps {
  onSidebarToggle: () => void
  zoomLevel: number
  onZoomChange: (level: number) => void
}

const zoomLevels = [
  { label: '50%', value: 30 },
  { label: '75%', value: 45 },
  { label: '100%', value: 60 },
  { label: '125%', value: 75 },
  { label: '150%', value: 90 },
]

export default function EnhancedToolbar({
  zoomLevel,
  onZoomChange,
}: EnhancedToolbarProps) {
  const { ui, restaurantConfig, goToToday, goToPrevPeriod, goToNextPeriod, setViewMode } = useTimelineStore()
  const { visibleDate, viewMode } = ui

  const formattedDate = formatDateForDisplay(visibleDate, restaurantConfig?.timezone || 'UTC')

  // Get current zoom percentage
  const getCurrentZoomPercentage = () => {
    const currentLevel = zoomLevels.find(level => level.value === zoomLevel)
    return currentLevel ? currentLevel.label : '100%'
  }

  // Handle zoom increment
  const handleZoomIn = () => {
    const currentIndex = zoomLevels.findIndex(level => level.value === zoomLevel)
    if (currentIndex < zoomLevels.length - 1) {
      onZoomChange(zoomLevels[currentIndex + 1].value)
    }
  }

  // Handle zoom decrement
  const handleZoomOut = () => {
    const currentIndex = zoomLevels.findIndex(level => level.value === zoomLevel)
    if (currentIndex > 0) {
      onZoomChange(zoomLevels[currentIndex - 1].value)
    }
  }

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  border-white/10 bg-gray-900 px-4 shadow-sm sm:gap-x-6  lg:px-4" data-testid="timeline-toolbar">
      <div aria-hidden="true" className="h-6 w-px bg-white/10 lg:hidden" />

      <div className="flex flex-1 items-center justify-between">
        {/* Left: Navigation controls */}
        <div className="flex items-center gap-4">


          <button
            onClick={goToToday}
            className="px-4 py-2 text-xs text-gray-300 hover:text-white hover:bg-gray-800 rounded-md border border-white/10 transition-colors"
            aria-label="Go to today"
          >
            Today
          </button>

          <button
            onClick={goToPrevPeriod}
            className="px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-gray-800 rounded-md border border-white/10 transition-colors"
            aria-label="Previous period"
          >
            ←
          </button>
          <button
            onClick={goToNextPeriod}
            className="px-3 py-2 text-xs text-gray-300 hover:text-white hover:bg-gray-800 rounded-md border border-white/10 transition-colors"
            aria-label="Next period"
          >
            →
          </button>
        </div>

        {/* Center: Current date */}
        <div className="flex items-center">
          <h1 className="text-md font-semibold text-white">{formattedDate}</h1>
        </div>

        {/* Right: Zoom and View Mode */}
        <div className="flex items-center gap-4">
          {/* Compact Zoom Controls */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-gray-300 hidden lg:block">Zoom:</label>
            <div className="flex items-center bg-gray-800 rounded-md border border-white/10">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevels.findIndex(level => level.value === zoomLevel) === 0}
                className="px-2 py-1 text-sm text-gray-300 hover:text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Zoom out"
              >
                −
              </button>
              <span className="px-3 py-1 text-xs font-medium text-white min-w-[3rem] text-center">
                {getCurrentZoomPercentage()}
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevels.findIndex(level => level.value === zoomLevel) === zoomLevels.length - 1}
                className="px-2 py-1 text-xs text-gray-300 hover:text-white hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Zoom in"
              >
                +
              </button>
            </div>
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-gray-300 hidden lg:block">View:</label>
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value as 'day' | '3-day' | 'week' | 'month')}
              className="px-3 py-2 bg-gray-800 text-white border border-white/10 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-label="Select view mode"
            >
              <option value="day">Day</option>
              <option value="3-day">3-Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

