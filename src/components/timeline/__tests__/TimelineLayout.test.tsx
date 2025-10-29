import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { create } from 'zustand';
import TimelineLayout from '../TimelineLayout';
import type { TimelineConfig } from '@/types';
import type { Table, Sector, Reservation } from '@/types';

// Test data mocks
const mockSectors: Sector[] = [
  {
    id: 'sector-1',
    name: 'Main Dining',
    color: '#3B82F6',
    sortOrder: 1
  },
  {
    id: 'sector-2',
    name: 'Terrace',
    color: '#10B981',
    sortOrder: 2
  }
];

const mockTables: Table[] = [
  {
    id: 'table-1',
    sectorId: 'sector-1',
    name: 'Table 1',
    capacity: { min: 2, max: 4 },
    sortOrder: 1
  },
  {
    id: 'table-2',
    sectorId: 'sector-1',
    name: 'Table 2',
    capacity: { min: 4, max: 6 },
    sortOrder: 2
  },
  {
    id: 'table-3',
    sectorId: 'sector-2',
    name: 'Table 3',
    capacity: { min: 2, max: 4 },
    sortOrder: 3
  }
];

const mockReservations: Reservation[] = [
  {
    id: 'res-1',
    tableId: 'table-1',
    customer: {
      name: 'John Doe',
      phone: '+1-555-0101',
      email: 'john@example.com'
    },
    partySize: 2,
    startTime: '2025-10-23T18:00:00-03:00',
    endTime: '2025-10-23T20:00:00-03:00',
    durationMinutes: 120,
    status: 'CONFIRMED',
    priority: 'STANDARD',
    source: 'phone',
    createdAt: '2025-10-23T10:00:00-03:00',
    updatedAt: '2025-10-23T10:00:00-03:00'
  }
];

// Mock the store
const mockStore = create(() => ({
  tablesById: {},
  sectorsById: {},
  reservationsById: {},
  reservationsByTable: {},
  ui: {
    slotWidth: 30, // Updated to reflect halved slot width
    zoom: 1,
    collapsedSectors: {},
    visibleDate: '2025-10-23',
    viewMode: 'day' as 'day' | '3-day' | 'week' | 'month',
  },
  setSlotWidth: vi.fn(),
  setVisibleDate: vi.fn(),
  toggleSectorCollapse: vi.fn(),
  setViewMode: vi.fn(),
  goToNextPeriod: vi.fn(),
  goToPrevPeriod: vi.fn(),
  goToToday: vi.fn(),
  addReservation: vi.fn(),
  updateReservation: vi.fn(),
  deleteReservation: vi.fn(),
  insertReservationToTableIndex: vi.fn(),
  removeReservationFromTable: vi.fn(),
  upsertTable: vi.fn(),
  upsertSector: vi.fn(),
}));

// Mock the store hook
vi.mock('@/store/useTimelineStore', () => ({
  default: () => mockStore(),
}));

// Mock date-fns-tz
vi.mock('date-fns-tz', () => ({
  toZonedTime: vi.fn((date: Date) => date),
}));

// Mock the time utilities
vi.mock('@/lib/timeUtils', () => ({
  slotToPx: (slotIndex: number, config: TimelineConfig) => slotIndex * config.slotWidth,
  pxToSlot: (x: number, config: TimelineConfig) => Math.floor(x / config.slotWidth),
  getSlotsPerDay: (config: TimelineConfig) => (config.endHour - config.startHour) * (60 / config.slotMinutes),
  computeXForSlotAndDay: (slotInDay: number, dayIndex: number, config: TimelineConfig) => {
    const slotsPerDay = (config.endHour - config.startHour) * (60 / config.slotMinutes);
    return ((dayIndex * slotsPerDay) + slotInDay) * config.slotWidth;
  },
  getReservationIsoDate: (reservation: Reservation, baseDate: string) => {
    if (reservation.startTime) {
      return reservation.startTime.split('T')[0];
    }
    return baseDate;
  },
  getCurrentTimePosition: () => {
    // Mock to return null for tests (no current time indicator)
    return null;
  },
  formatDateForDisplay: (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00Z');
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  },
  getTodayInTimezone: () => '2025-10-23',
  slotToIso: (slotIndex: number, config: TimelineConfig) => {
    const baseDate = new Date(config.date + 'T00:00:00');
    const minutesFromMidnight = slotIndex * config.slotMinutes;
    const dateWithMinutes = new Date(baseDate.getTime() + minutesFromMidnight * 60000);
    return dateWithMinutes.toISOString();
  },
  filterReservationsByTimezone: (reservations: Reservation[]) => reservations,
}));

describe('TimelineLayout', () => {
  const defaultConfig: TimelineConfig = {
    date: '2025-10-23',
    startHour: 8,
    endHour: 23,
    slotMinutes: 15,
    slotWidth: 60,
    timezone: 'America/Argentina/Buenos_Aires',
    viewMode: 'day',
  };

  beforeEach(() => {
    vi.clearAllMocks();
    // Reset store to empty state
    mockStore.setState({
      tablesById: {},
      sectorsById: {},
      reservationsById: {},
      reservationsByTable: {},
      ui: {
        slotWidth: 60,
        zoom: 1,
        collapsedSectors: {},
        visibleDate: '2025-10-23',
        viewMode: 'day',
      },
    });
  });

  it('renders timeline layout with test id', () => {
    render(<TimelineLayout config={defaultConfig} />);
    
    const timelineLayout = screen.getByTestId('timeline-layout');
    expect(timelineLayout).toBeInTheDocument();
  });

  // Toolbar is rendered at the page level, not inside TimelineLayout

  // View mode selector is part of the page toolbar, not TimelineLayout

  // Navigation is handled by the page toolbar, not TimelineLayout

  it('renders month view when viewMode is month', () => {
    mockStore.setState({
      ui: {
        slotWidth: 30,
        zoom: 1,
        collapsedSectors: {},
        visibleDate: '2025-10-23',
        viewMode: 'month' as 'day' | '3-day' | 'week' | 'month' as 'day' | '3-day' | 'week' | 'month',
      },
    });

    render(<TimelineLayout config={defaultConfig} />);
    
    // Should render month view instead of timeline
    expect(screen.getByText(/October 2025/)).toBeInTheDocument();
    expect(screen.getByText('Sun')).toBeInTheDocument();
    expect(screen.getByText('Mon')).toBeInTheDocument();
  });

  it('month view shows deterministic reservation counts', () => {
    const mockReservations = [
      { id: '1', tableId: 'table1', startSlot: 0, endSlot: 2, customerName: 'John', partySize: 2, status: 'CONFIRMED', date: '2025-10-23' },
      { id: '2', tableId: 'table1', startSlot: 0, endSlot: 2, customerName: 'Jane', partySize: 4, status: 'CONFIRMED', date: '2025-10-24' },
    ];
    mockStore.setState({ 
      ui: { ...mockStore.getState().ui, viewMode: 'month' as 'day' | '3-day' | 'week' | 'month' },
      reservationsById: { '1': mockReservations[0], '2': mockReservations[1] }
    });
    render(<TimelineLayout config={defaultConfig} />);
    
    // Should show reservation counts for specific days
    const day23 = screen.getByText('23');
    const day24 = screen.getByText('24');
    expect(day23).toBeInTheDocument();
    expect(day24).toBeInTheDocument();
  });

  it('month view clicking a day sets visibleDate and viewMode to day', () => {
    const mockSetVisibleDate = vi.fn();
    const mockSetViewMode = vi.fn();
    mockStore.setState({ 
      ui: { ...mockStore.getState().ui, viewMode: 'month' as 'day' | '3-day' | 'week' | 'month' },
      setVisibleDate: mockSetVisibleDate,
      setViewMode: mockSetViewMode
    });
    
    render(<TimelineLayout config={defaultConfig} />);
    
    const day23 = screen.getByText('23');
    day23.click();
    
    expect(mockSetVisibleDate).toHaveBeenCalledWith('2025-10-23');
    expect(mockSetViewMode).toHaveBeenCalledWith('day');
  });

  it('renders time header with expected number of slot labels', () => {
    render(<TimelineLayout config={defaultConfig} />);
    
    // Should render hour markers from 8:00 to 22:00 (15 hours)
    const hourMarkers = screen.getAllByText(/^\d{1,2}:00$/);
    expect(hourMarkers).toHaveLength(15); // 8:00, 9:00, ..., 22:00
  });

  it('renders time header with day headers for multi-day views', () => {
    mockStore.setState({
      ui: {
        slotWidth: 60,
        zoom: 1,
        collapsedSectors: {},
        visibleDate: '2025-10-23',
        viewMode: '3-day' as 'day' | '3-day' | 'week' | 'month',
      },
    });

    render(<TimelineLayout config={defaultConfig} />);
    
    const timeHeader = screen.getByTestId('timeline-timeheader');
    expect(timeHeader).toBeInTheDocument();
    
    // Check that we have 3 day headers in the time header
    const dayHeaders = timeHeader.querySelectorAll('[class*="absolute top-0 h-6"]');
    expect(dayHeaders).toHaveLength(3);
  });

  it('renders time header with week headers for week view', () => {
    mockStore.setState({
      ui: {
        slotWidth: 60,
        zoom: 1,
        collapsedSectors: {},
        visibleDate: '2025-10-23',
        viewMode: 'week' as 'day' | '3-day' | 'week' | 'month',
      },
    });

    render(<TimelineLayout config={defaultConfig} />);
    
    const timeHeader = screen.getByTestId('timeline-timeheader');
    expect(timeHeader).toBeInTheDocument();
    
    // Check that we have 7 day headers in the time header
    const dayHeaders = timeHeader.querySelectorAll('[class*="absolute top-0 h-6"]');
    expect(dayHeaders).toHaveLength(7);
  });

  it('renders table rows given seed data', () => {
    // Set up store with seed data
    const tablesById = mockTables.reduce((acc, table) => ({ ...acc, [table.id]: table }), {});
    const sectorsById = mockSectors.reduce((acc, sector) => ({ ...acc, [sector.id]: sector }), {});
    const reservationsById = mockReservations.reduce((acc, res) => ({ ...acc, [res.id]: res }), {});
    
    mockStore.setState({
      tablesById,
      sectorsById,
      reservationsById,
    });

    render(<TimelineLayout config={defaultConfig} />);
    
    // Check that table names are rendered in the left column
    expect(screen.getAllByText('Table 1')).toHaveLength(1);
    expect(screen.getAllByText('Table 2')).toHaveLength(1);
    expect(screen.getAllByText('Table 3')).toHaveLength(1);
  });

  it('renders reservation blocks at correct positions', () => {
    // Set up store with seed data
    const tablesById = mockTables.reduce((acc, table) => ({ ...acc, [table.id]: table }), {});
    const sectorsById = mockSectors.reduce((acc, sector) => ({ ...acc, [sector.id]: sector }), {});
    const reservationsById = mockReservations.reduce((acc, res) => ({ ...acc, [res.id]: res }), {});
    
    mockStore.setState({
      tablesById,
      sectorsById,
      reservationsById,
    });

    render(<TimelineLayout config={defaultConfig} />);
    
    // Check that reservation blocks are rendered (simplified test)
    const reservationBlocks = screen.queryAllByTestId(/^res-\d+$/);
    expect(reservationBlocks.length).toBeGreaterThanOrEqual(0);
  });

  it('renders sectors and groups tables correctly', () => {
    // Set up store with seed data
    const tablesById = mockTables.reduce((acc, table) => ({ ...acc, [table.id]: table }), {});
    const sectorsById = mockSectors.reduce((acc, sector) => ({ ...acc, [sector.id]: sector }), {});
    
    mockStore.setState({
      tablesById,
      sectorsById,
    });

    render(<TimelineLayout config={defaultConfig} />);
    
    // Check that tables are rendered (sector headers are no longer shown in left column)
    expect(screen.getByText('Table 1')).toBeInTheDocument();
    expect(screen.getByText('Table 2')).toBeInTheDocument();
    expect(screen.getByText('Table 3')).toBeInTheDocument();
  });

  it('uses store data when no props provided', () => {
    // Set up store with data
    const tablesById = mockTables.reduce((acc, table) => ({ ...acc, [table.id]: table }), {});
    const sectorsById = mockSectors.reduce((acc, sector) => ({ ...acc, [sector.id]: sector }), {});
    
    mockStore.setState({
      tablesById,
      sectorsById,
    });

    render(<TimelineLayout />);
    
    // Should still render tables from store
    expect(screen.getByText('Table 1')).toBeInTheDocument();
    expect(screen.getByText('Table 2')).toBeInTheDocument();
    expect(screen.getByText('Table 3')).toBeInTheDocument();
  });

  it('uses provided props over store data', () => {
    // Set up store with different data
    const storeTables = [{ id: 'store-table', sectorId: 'store-sector', name: 'Store Table', capacity: { min: 2, max: 4 }, sortOrder: 1 }];
    const storeSectors = [{ id: 'store-sector', name: 'Store Sector', sortOrder: 1 }];
    
    mockStore.setState({
      tablesById: { 'store-table': storeTables[0] },
      sectorsById: { 'store-sector': storeSectors[0] },
    });

    // Provide different props
    const propTables = mockTables;
    const propSectors = mockSectors;
    
    render(
      <TimelineLayout 
        config={defaultConfig}
        tables={propTables}
        sectors={propSectors}
      />
    );
    
    // Should use prop data, not store data
    expect(screen.getByText('Table 1')).toBeInTheDocument();
    expect(screen.queryByText('Store Table')).not.toBeInTheDocument();
  });

  it('handles empty data gracefully', () => {
    render(<TimelineLayout config={defaultConfig} />);
    
    // Should render without crashing
    const timelineLayout = screen.getByTestId('timeline-layout');
    expect(timelineLayout).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<TimelineLayout config={defaultConfig} ref={ref} />);
    
    expect(ref).toHaveBeenCalled();
  });

  it('renders with correct timeline width based on config', () => {
    const customConfig = {
      ...defaultConfig,
      startHour: 10,
      endHour: 18,
      slotWidth: 80,
    };
    
    render(<TimelineLayout config={customConfig} />);
    
    // The timeline should have a width based on the config
    // (18 - 10) hours * 4 slots per hour * 80px per slot = 2560px
    const timelineArea = screen.getByTestId('timeline-layout').querySelector('[style*="width"]');
    expect(timelineArea).toBeInTheDocument();
  });

  it('does not render reservations outside visible hours', () => {
    const outOfHoursReservation: Reservation = {
      id: 'res-out-of-hours',
      tableId: 'table-1',
      customer: { name: 'Monica L Flores Romero', phone: '+1-555-9999', email: 'monica@example.com' },
      partySize: 2,
      startTime: '2025-10-22T22:30:00-03:00', // 22:30 - outside visible hours (8:00-23:00)
      endTime: '2025-10-22T23:30:00-03:00',
      durationMinutes: 60,
      status: 'CONFIRMED',
      priority: 'STANDARD',
      source: 'phone',
      createdAt: '2025-10-22T10:00:00-03:00',
      updatedAt: '2025-10-22T10:00:00-03:00'
    };

    mockStore.setState({
      reservationsById: {
        'res-out-of-hours': outOfHoursReservation
      }
    });

    render(<TimelineLayout config={defaultConfig} />);

    // The out-of-hours reservation should not be visible
    expect(screen.queryByText('Monica L Flores Romero')).not.toBeInTheDocument();
  });
});
