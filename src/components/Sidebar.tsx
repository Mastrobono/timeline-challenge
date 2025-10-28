'use client'

import { useState, useMemo } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  CogIcon,
} from '@heroicons/react/24/outline'
import { XMarkIcon as XMarkIconSolid } from '@heroicons/react/20/solid'
import useTimelineStore from '@/store/useTimelineStore'
import { addMonths, startOfWeek, format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns'
import type { Sector, ReservationStatus } from '@/types'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  sidebarCollapsed: boolean
  setSidebarCollapsed: (collapsed: boolean) => void
  sectors?: Sector[]
  selectedSectors: string[]
  onSectorToggle: (sectorId: string) => void
  searchTerm: string
  onSearchChange: (term: string) => void
  selectedStatuses: ReservationStatus[]
  onStatusToggle: (status: ReservationStatus) => void
  onClearFilters: () => void
}

const ALL_STATUSES: ReservationStatus[] = [
  'PENDING',
  'CONFIRMED',
  'SEATED',
  'FINISHED',
  'NO_SHOW',
  'CANCELLED'
]

// Status colors mapping
const STATUS_COLORS: Record<ReservationStatus, string> = {
  'PENDING': '#f59e0b',    // amber-500
  'CONFIRMED': '#10b981',   // emerald-500
  'SEATED': '#3b82f6',      // blue-500
  'FINISHED': '#6b7280',    // gray-500
  'NO_SHOW': '#ef4444',     // red-500
  'CANCELLED': '#8b5cf6',   // violet-500
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  sidebarCollapsed,
  setSidebarCollapsed,
  sectors = [],
  selectedSectors,
  onSectorToggle,
  searchTerm,
  onSearchChange,
  selectedStatuses,
  onStatusToggle,
  onClearFilters,
}: SidebarProps) {
  const [sectorsCollapsed, setSectorsCollapsed] = useState(false);
  const [statusCollapsed, setStatusCollapsed] = useState(false);
  const { restaurantConfig, ui, setVisibleDate } = useTimelineStore()
  const { visibleDate } = ui

  // Calendar state
  const [currentMonth, setCurrentMonth] = useState(new Date(visibleDate))

  // Calculate active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0
    if (selectedSectors.length > 0 && selectedSectors.length < sectors.length) count++
    if (selectedStatuses.length > 0 && selectedStatuses.length < ALL_STATUSES.length) count++
    if (searchTerm.length > 0) count++
    return count
  }, [selectedSectors.length, selectedStatuses.length, searchTerm.length, sectors.length])

  // Generate calendar days
  const generateCalendarDays = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(currentMonth)
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }) // Monday
    const endDate = startOfWeek(monthEnd, { weekStartsOn: 1 })

    return eachDayOfInterval({ start: startDate, end: endDate })
  }

  const calendarDays = generateCalendarDays()
  const selectedDate = new Date(visibleDate)

  const handleDateClick = (date: Date) => {
    // Use local date to avoid timezone issues
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const dateString = `${year}-${month}-${day}`
    setVisibleDate(dateString)
  }

  const handlePrevMonth = () => {
    setCurrentMonth(prev => addMonths(prev, -1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(prev => addMonths(prev, 1))
  }

  return (
    <div className={`bg-gray-900  h-full mt-auto fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col transition-all duration-300 ${sidebarCollapsed ? 'lg:w-0' : 'lg:w-72'}`}>
      {/* Collapse/Expand Button - Positioned absolutely */}
      <button
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        className={`absolute top-1/2 z-90 -translate-y-1/2 text-white  cursor-pointer hover:text-white hover:bg-gray-800 rounded-xl transition-all duration-300 p-1 bg-[#1e2939] ${sidebarCollapsed ? '-right-5' : '-right-[26px]'}`}
        title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {sidebarCollapsed ? (
          <ChevronRightIcon className="size-4" />
        ) : (
          <ChevronLeftIcon className="size-4" />
        )}
      </button>

      <div className={`flex grow flex-col gap-y-5 bg-black/10 scrollbar-container ${sidebarCollapsed ? 'overflow-hidden px-2' : ''} pb-2`}>
        <div className={`scrollbar-content px-6 h-full !overflow-x-hidden ${sidebarCollapsed ? 'overflow-hidden' : 'overflow-y-auto'}`}>

          {/* Restaurant Config Info */}
          {!sidebarCollapsed && restaurantConfig && (
            <>
              <div className="space-y-4 text-sm pt-6 pb-4">
                <div>
                  <p className="text-xs pb-1 font-semibold text-gray-400">Restaurant</p>
                  <p className="text-xs text-white">{restaurantConfig.name}</p>
                </div>
                <div>
                  <p className="text-xs pb-1 font-semibold text-gray-400">Timezone</p>
                  <p className="text-xs text-white">{restaurantConfig.timezone}</p>
                </div>
                <div>
                  <p className="text-xs pb-1 font-semibold text-gray-400">Hours</p>
                  <p className="text-xs text-white">
                    {restaurantConfig.operatingHours.startHour}:00 - {restaurantConfig.operatingHours.endHour}:00
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pb-4" />
            </>
          )}

          {/* Calendar */}
          {!sidebarCollapsed && (
            <div className="space-y-2 pb-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold text-white">
                  {format(currentMonth, 'MMMM yyyy')}
                </h3>
                <div className="flex gap-1">
                  <button
                    onClick={handlePrevMonth}
                    className="p-1 text-gray-400 hover:text-white"
                  >
                    <ChevronLeftIcon className="size-4" />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="p-1 text-gray-400 hover:text-white"
                  >
                    <ChevronRightIcon className="size-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 text-center text-xxs text-gray-400">
                <div className="flex justify-start">
                  <div className="w-4 h-3 flex items-center justify-center">M</div>
                </div>
                <div className="flex justify-start">
                  <div className="w-4 h-3 flex items-center justify-center">T</div>
                </div>
                <div className="flex justify-start">
                  <div className="w-4 h-3 flex items-center justify-center">W</div>
                </div>
                <div className="flex justify-start">
                  <div className="w-4 h-3 flex items-center justify-center">T</div>
                </div>
                <div className="flex justify-start">
                  <div className="w-4 h-3 flex items-center justify-center">F</div>
                </div>
                <div className="flex justify-start">
                  <div className="w-4 h-3 flex items-center justify-center">S</div>
                </div>
                <div className="flex justify-start">
                  <div className="w-4 h-3 flex items-center justify-center">S</div>
                </div>
              </div>

              <div className="grid grid-cols-7 text-xxs">
                {calendarDays.map((day) => (
                  <div
                    key={day.toISOString()}
                    className="flex justify-start"
                  >
                    <button
                      onClick={() => handleDateClick(day)}
                      className={classNames(
                        'flex w-4 h-6 items-center justify-center rounded-full',
                        isSameDay(day, selectedDate) && 'bg-blue-600 text-white font-semibold',
                        !isSameDay(day, selectedDate) && isToday(day) && 'text-blue-400 font-semibold',
                        !isSameDay(day, selectedDate) && !isToday(day) && isSameMonth(day, currentMonth) && 'text-white hover:bg-white/10',
                        !isSameMonth(day, currentMonth) && 'text-gray-500'
                      )}
                    >
                      <time dateTime={format(day, 'yyyy-MM-dd')}>
                        {format(day, 'd')}
                      </time>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Search */}
          {!sidebarCollapsed && (
            <div className="pb-4">
              <label className="text-xs font-semibold text-gray-400">Search</label>
              <div className="relative mt-2">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search by customer name/phone..."
                  className="block w-full bg-gray-800 pl-7 pr-4 py-2 text-xxs text-white outline-none placeholder:text-gray-500 border border-white/10 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-3 text-gray-400" />
              </div>
            </div>
          )}



          {!sidebarCollapsed && (
            <>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <div className="flex items-center justify-between">
                      <div className="text-xs pb-1 font-semibold text-gray-400">Sectors</div>
                      <button
                        onClick={() => setSectorsCollapsed(!sectorsCollapsed)}
                        className="text-gray-400 hover:text-white"
                      >
                        {sectorsCollapsed ? (
                          <ChevronRightIcon className="h-4 w-4" />
                        ) : (
                          <ChevronDownIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {!sectorsCollapsed && (
                      <ul role="list" className="-mx-2 space-y-1">
                        {sectors.map((sector) => (
                          <li key={sector.id}>
                            <button
                              onClick={() => onSectorToggle(sector.id)}
                              className={classNames(
                                selectedSectors.includes(sector.id)
                                  ? 'bg-white/5 text-white'
                                  : 'text-gray-400 hover:bg-white/5 hover:text-white',
                                'group flex items-center w-full gap-x-3 rounded-md p-2 text-xs/6 font-semibold'
                              )}
                            >
                              <span
                                className="flex size-4 shrink-0 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-xs font-medium"
                                style={{
                                  backgroundColor: `${sector.color}33`,
                                  borderColor: sector.color
                                }}
                              >
                                {sector.name.charAt(0)}
                              </span>
                              <span className="truncate">{sector.name}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  {/* Status Filter */}
                  <li>
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-gray-400">Status Filter</div>
                      <button
                        onClick={() => setStatusCollapsed(!statusCollapsed)}
                        className="text-gray-400 hover:text-white"
                      >
                        {statusCollapsed ? (
                          <ChevronRightIcon className="h-4 w-4" />
                        ) : (
                          <ChevronDownIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {!statusCollapsed && (
                      <ul role="list" className="-mx-2 mt-1 space-y-1">
                        {ALL_STATUSES.map((status) => (
                          <li key={status}>
                            <button
                              onClick={() => onStatusToggle(status)}
                              className={classNames(
                                selectedStatuses.includes(status)
                                  ? 'bg-white/5 text-white'
                                  : 'text-gray-400 hover:bg-white/5 hover:text-white',
                                'group flex items-center w-full gap-x-3 rounded-md p-2 text-xs font-semibold'
                              )}
                            >
                              <div
                                className="flex size-3 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5"
                                style={{
                                  backgroundColor: `${STATUS_COLORS[status]}33`,
                                  borderColor: STATUS_COLORS[status]
                                }}
                              >
                                <div
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: STATUS_COLORS[status] }}
                                />
                              </div>
                              <span className="truncate">{status}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              </nav>

              {/* Active Filters Indicator */}
              {activeFiltersCount > 0 && (
                <div className="mt-auto">
                  <div className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">
                    <FunnelIcon className="size-4" />
                    <span>{activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''}</span>
                    <button
                      onClick={onClearFilters}
                      className="ml-1 hover:bg-blue-700 rounded p-0.5"
                    >
                      <XMarkIconSolid className="size-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

