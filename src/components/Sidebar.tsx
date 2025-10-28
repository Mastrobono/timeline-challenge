'use client'

import { useState, useMemo } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
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
    <>
      {/* Mobile sidebar */}
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>

            {/* Sidebar component */}
            <div className="relative flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10 before:pointer-events-none before:absolute before:inset-0 before:bg-black/10">
              <div className="relative flex h-16 shrink-0 items-center">
                <h2 className="text-xl font-semibold text-white">Restaurant Timeline</h2>
              </div>
              
              {/* Restaurant Config Info */}
              {restaurantConfig && (
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase">Restaurant</p>
                    <p className="text-white">{restaurantConfig.name}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase">Timezone</p>
                    <p className="text-white">{restaurantConfig.timezone}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase">Hours</p>
                    <p className="text-white">
                      {restaurantConfig.operatingHours.startHour}:00 - {restaurantConfig.operatingHours.endHour}:00
                    </p>
                  </div>
                </div>
              )}

              {/* Search */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search by customer name/phone..."
                    className="block w-full bg-gray-800 pl-10 pr-4 py-2 text-sm text-white outline-none placeholder:text-gray-500 border border-white/10 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                </div>
              </div>

              {/* Calendar */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">
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
                
                <div className="grid grid-cols-7 text-center text-xs text-gray-400">
                  <div>M</div>
                  <div>T</div>
                  <div>W</div>
                  <div>T</div>
                  <div>F</div>
                  <div>S</div>
                  <div>S</div>
                </div>
                
                <div className="grid grid-cols-7 text-sm">
                  {calendarDays.map((day) => (
                    <div
                      key={day.toISOString()}
                      className="py-2"
                    >
                      <button
                        onClick={() => handleDateClick(day)}
                        className={classNames(
                          'mx-auto flex size-8 items-center justify-center rounded-full',
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

              
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <div className="text-xs/6 font-semibold text-gray-400">Sectors</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                      {sectors.map((sector) => (
                        <li key={sector.id}>
                          <button
                            onClick={() => onSectorToggle(sector.id)}
                            className={classNames(
                              selectedSectors.includes(sector.id)
                                ? 'bg-white/5 text-white'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white',
                              'group flex w-full gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                            )}
                          >
                            <span 
                              className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs font-medium"
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
                  </li>

                  {/* Status Filter */}
                  <li>
                    <div className="text-xs/6 font-semibold text-gray-400">Status Filter</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                      {ALL_STATUSES.map((status) => (
                        <li key={status}>
                          <button
                            onClick={() => onStatusToggle(status)}
                            className={classNames(
                              selectedStatuses.includes(status)
                                ? 'bg-white/5 text-white'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white',
                              'group flex w-full gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                            )}
                          >
                            <div 
                              className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5"
                              style={{ 
                                backgroundColor: `${STATUS_COLORS[status]}33`,
                                borderColor: STATUS_COLORS[status] 
                              }}
                            >
                              <div 
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: STATUS_COLORS[status] }}
                              />
                            </div>
                            <span className="truncate">{status}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
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
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop sidebar */}
      <div className={`hidden bg-gray-900 ring-1 ring-white/10 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col transition-all duration-300 ${sidebarCollapsed ? 'lg:w-16' : 'lg:w-72'}`}>
        <div className={`flex grow flex-col gap-y-5 bg-black/10 ${sidebarCollapsed ? 'overflow-hidden px-2' : 'overflow-y-auto px-6'} pb-4`}>
          <div className="flex h-16 shrink-0 items-center justify-between">
            {!sidebarCollapsed && <h2 className="text-xl font-semibold text-white">Restaurant Timeline</h2>}
            <div className="flex items-center gap-2">
              {/* Config Icon - Only show when not collapsed */}
              {!sidebarCollapsed && (
                <button
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                  title="Settings"
                >
                  <CogIcon className="size-5" />
                </button>
              )}
              
              {/* Collapse/Expand Button */}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {sidebarCollapsed ? (
                  <ChevronRightIcon className="size-5" />
                ) : (
                  <ChevronLeftIcon className="size-5" />
                )}
              </button>
            </div>
          </div>
          
          {/* Restaurant Config Info */}
          {!sidebarCollapsed && restaurantConfig && (
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Restaurant</p>
                <p className="text-white">{restaurantConfig.name}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Timezone</p>
                <p className="text-white">{restaurantConfig.timezone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase">Hours</p>
                <p className="text-white">
                  {restaurantConfig.operatingHours.startHour}:00 - {restaurantConfig.operatingHours.endHour}:00
                </p>
              </div>
            </div>
          )}

          {/* Search */}
          {!sidebarCollapsed && (
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase">Search</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search by customer name/phone..."
                  className="block w-full bg-gray-800 pl-10 pr-4 py-2 text-sm text-white outline-none placeholder:text-gray-500 border border-white/10 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
              </div>
            </div>
          )}

          {/* Calendar */}
          {!sidebarCollapsed && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">
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
              
              <div className="grid grid-cols-7 text-center text-xs text-gray-400">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
              
              <div className="grid grid-cols-7 text-sm">
                {calendarDays.map((day) => (
                  <div
                    key={day.toISOString()}
                    className="py-2"
                  >
                    <button
                      onClick={() => handleDateClick(day)}
                      className={classNames(
                        'mx-auto flex size-8 items-center justify-center rounded-full',
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

          {!sidebarCollapsed && (
            <>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <div className="text-xs/6 font-semibold text-gray-400">Sectors</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                      {sectors.map((sector) => (
                        <li key={sector.id}>
                          <button
                            onClick={() => onSectorToggle(sector.id)}
                            className={classNames(
                              selectedSectors.includes(sector.id)
                                ? 'bg-white/5 text-white'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white',
                              'group flex w-full gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                            )}
                          >
                            <span 
                              className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs font-medium"
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
                  </li>

                  {/* Status Filter */}
                  <li>
                    <div className="text-xs/6 font-semibold text-gray-400">Status Filter</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                      {ALL_STATUSES.map((status) => (
                        <li key={status}>
                          <button
                            onClick={() => onStatusToggle(status)}
                            className={classNames(
                              selectedStatuses.includes(status)
                                ? 'bg-white/5 text-white'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white',
                              'group flex w-full gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
                            )}
                          >
                            <div 
                              className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5"
                              style={{ 
                                backgroundColor: `${STATUS_COLORS[status]}33`,
                                borderColor: STATUS_COLORS[status] 
                              }}
                            >
                              <div 
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: STATUS_COLORS[status] }}
                              />
                            </div>
                            <span className="truncate">{status}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
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
    </>
  )
}

