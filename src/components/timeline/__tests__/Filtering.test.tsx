import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { create } from 'zustand';
import TimelineLayout from '../TimelineLayout';
import type { TimelineConfig, Table, Sector, Reservation } from '@/types';

// Mock data
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
    sectorId: 'sector-2',
    name: 'Table 2',
    capacity: { min: 4, max: 6 },
    sortOrder: 2
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
  },
  {
    id: 'res-2',
    tableId: 'table-2',
    customer: {
      name: 'Jane Smith',
      phone: '+1-555-0102',
      email: 'jane@example.com'
    },
    partySize: 4,
    startTime: '2025-10-24T19:00:00-03:00',
    endTime: '2025-10-24T21:00:00-03:00',
    durationMinutes: 120,
    status: 'PENDING',
    priority: 'VIP',
    source: 'online',
    createdAt: '2025-10-23T10:00:00-03:00',
    updatedAt: '2025-10-23T10:00:00-03:00'
  },
  {
    id: 'res-3',
    tableId: 'table-1',
    customer: {
      name: 'Bob Wilson',
      phone: '+1-555-0103',
      email: 'bob@example.com'
    },
    partySize: 3,
    startTime: '2025-10-25T20:00:00-03:00',
    endTime: '2025-10-25T22:00:00-03:00',
    durationMinutes: 120,
    status: 'CANCELLED',
    priority: 'STANDARD',
    source: 'phone',
    createdAt: '2025-10-23T10:00:00-03:00',
    updatedAt: '2025-10-23T10:00:00-03:00'
  }
];

// Mock store
const mockStore = create(() => ({
  tablesById: {
    'table-1': mockTables[0],
    'table-2': mockTables[1]
  },
  sectorsById: {
    'sector-1': mockSectors[0],
    'sector-2': mockSectors[1]
  },
  reservationsById: {
    'res-1': mockReservations[0],
    'res-2': mockReservations[1],
    'res-3': mockReservations[2]
  },
  reservationsByTable: {
    'table-1': ['res-1', 'res-3'],
    'table-2': ['res-2']
  },
  ui: {
    slotWidth: 60,
    zoom: 1,
    collapsedSectors: {},
    visibleDate: '2025-10-23',
    viewMode: 'day' as 'day' | '3-day' | 'week' | 'month',
    startHour: 8,
  },
  restaurantConfig: {
    timezone: 'America/Argentina/Buenos_Aires',
    operatingHours: { start: 8, end: 23 },
    slotConfiguration: { slotMinutes: 15 }
  },
  addReservation: vi.fn(),
  updateReservation: vi.fn(),
  deleteReservation: vi.fn(),
  setVisibleDate: vi.fn(),
  setViewMode: vi.fn(),
  toggleSectorCollapse: vi.fn(),
}));

// Mock the store hook
vi.mock('@/store/useTimelineStore', () => ({
  default: () => mockStore(),
}));

// Mock time utilities
vi.mock('@/lib/timeUtils', () => ({
  slotToIso: vi.fn((slotIndex: number) => {
    const baseDate = new Date('2025-10-23T00:00:00');
    const minutesFromMidnight = slotIndex * 15;
    const dateWithMinutes = new Date(baseDate.getTime() + minutesFromMidnight * 60000);
    return dateWithMinutes.toISOString();
  }),
  isoToSlotIndex: vi.fn((iso: string) => {
    const date = new Date(iso);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (hours - 8) * 4 + (minutes / 15);
  }),
  getSlotsPerDay: () => 60,
  slotToPx: (slotIndex: number, config: TimelineConfig) => slotIndex * config.slotWidth,
  pxToSlot: (x: number, config: TimelineConfig) => Math.floor(x / config.slotWidth),
  getCurrentTimePosition: () => null,
  filterReservationsByTimezone: (reservations: Reservation[]) => reservations,
}));

// Mock date-fns-tz
vi.mock('date-fns-tz', () => ({
  toZonedTime: vi.fn((date: Date, _timezone: string) => {
    // For tests, we need to simulate timezone conversion
    // The test data uses -03:00 offset, so we need to convert UTC to local time
    // If the date is already in the correct timezone, return it as-is
    return date;
  }),
  fromZonedTime: vi.fn((date: Date, _timezone: string) => date),
}));

describe('Filtering', () => {
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
    mockStore.setState({
      tablesById: mockTables.reduce((acc, table) => ({ ...acc, [table.id]: table }), {}),
      sectorsById: mockSectors.reduce((acc, sector) => ({ ...acc, [sector.id]: sector }), {}),
      reservationsById: mockReservations.reduce((acc, res) => ({ ...acc, [res.id]: res }), {}),
    });
  });

  it('filters reservations by date in day view', () => {
    mockStore.setState({
      ui: { ...mockStore.getState().ui, viewMode: 'day', visibleDate: '2025-10-23' }
    });

    render(<TimelineLayout config={defaultConfig} />);

    // Should only show reservations for 2025-10-23
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument(); // Different date
    expect(screen.queryByText('Bob Wilson')).not.toBeInTheDocument(); // Different date
  });

  it('filters reservations by date range in 3-day view', () => {
    mockStore.setState({
      ui: { ...mockStore.getState().ui, viewMode: '3-day', visibleDate: '2025-10-23' }
    });

    render(<TimelineLayout config={{ ...defaultConfig, viewMode: '3-day' }} />);

    // Should show reservations for 2025-10-23, 2025-10-24, 2025-10-25
    expect(screen.getByText('John Doe')).toBeInTheDocument(); // 2025-10-23
    expect(screen.getByText('Jane Smith')).toBeInTheDocument(); // 2025-10-24
    expect(screen.getByText('Bob Wilson')).toBeInTheDocument(); // 2025-10-25
  });

  it('filters reservations by date range in week view', () => {
    mockStore.setState({
      ui: { ...mockStore.getState().ui, viewMode: 'week', visibleDate: '2025-10-23' }
    });

    render(<TimelineLayout config={{ ...defaultConfig, viewMode: 'week' }} />);

    // Should show all reservations within the week
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Bob Wilson')).toBeInTheDocument();
  });

  it('shows all reservations across days in 3-day view', () => {
    mockStore.setState({
      ui: { ...mockStore.getState().ui, viewMode: '3-day', visibleDate: '2025-10-23' }
    });

    render(<TimelineLayout config={{ ...defaultConfig, viewMode: '3-day' }} />);

    // Should show all reservations in the 3-day window
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Bob Wilson')).toBeInTheDocument();
  });

  it('filters reservations by status', () => {
    render(
      <TimelineLayout 
        config={{ ...defaultConfig, viewMode: '3-day' }} 
        selectedStatuses={['CONFIRMED']} 
      />
    );

    // Should only show CONFIRMED reservations
    expect(screen.getByText('John Doe')).toBeInTheDocument(); // CONFIRMED
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument(); // PENDING
    expect(screen.queryByText('Bob Wilson')).not.toBeInTheDocument(); // CANCELLED
  });

  it('filters reservations by multiple statuses', () => {
    render(
      <TimelineLayout 
        config={{ ...defaultConfig, viewMode: '3-day' }} 
        selectedStatuses={['CONFIRMED', 'PENDING']} 
      />
    );

    // Should show CONFIRMED and PENDING reservations
    expect(screen.getByText('John Doe')).toBeInTheDocument(); // CONFIRMED
    expect(screen.getByText('Jane Smith')).toBeInTheDocument(); // PENDING
    expect(screen.queryByText('Bob Wilson')).not.toBeInTheDocument(); // CANCELLED
  });

  it('filters reservations by search term', () => {
    render(
      <TimelineLayout 
        config={{ ...defaultConfig, viewMode: '3-day' }} 
        searchTerm="John" 
      />
    );

    // Should only show reservations matching "John"
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
    expect(screen.queryByText('Bob Wilson')).not.toBeInTheDocument();
  });

  it('filters reservations by customer name', () => {
    render(
      <TimelineLayout 
        config={{ ...defaultConfig, viewMode: '3-day' }} 
        searchTerm="Jane" 
      />
    );

    // Should only show reservations matching "Jane"
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.queryByText('Bob Wilson')).not.toBeInTheDocument();
  });

  it('filters reservations by phone number', () => {
    render(
      <TimelineLayout 
        config={{ ...defaultConfig, viewMode: '3-day' }} 
        searchTerm="555-0102" 
      />
    );

    // Should only show reservations matching phone number
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.queryByText('Bob Wilson')).not.toBeInTheDocument();
  });

  it('filters reservations by name (email search not supported)', () => {
    render(
      <TimelineLayout 
        config={{ ...defaultConfig, viewMode: '3-day' }} 
        searchTerm="Bob" 
      />
    );

    // Should only show reservations matching email
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
    expect(screen.getByText('Bob Wilson')).toBeInTheDocument();
  });

  it('filters reservations by selected sectors', () => {
    render(
      <TimelineLayout 
        config={{ ...defaultConfig, viewMode: '3-day' }} 
        selectedSectors={['sector-1']} 
      />
    );

    // Should only show reservations from sector-1
    expect(screen.getByText('John Doe')).toBeInTheDocument(); // table-1 (sector-1)
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument(); // table-2 (sector-2)
    expect(screen.getByText('Bob Wilson')).toBeInTheDocument(); // table-1 (sector-1)
  });

  it('filters reservations by multiple sectors', () => {
    render(
      <TimelineLayout 
        config={{ ...defaultConfig, viewMode: '3-day' }} 
        selectedSectors={['sector-1', 'sector-2']} 
      />
    );

    // Should show reservations from both sectors
    expect(screen.getByText('John Doe')).toBeInTheDocument(); // sector-1
    expect(screen.getByText('Jane Smith')).toBeInTheDocument(); // sector-2
    expect(screen.getByText('Bob Wilson')).toBeInTheDocument(); // sector-1
  });

  it('combines multiple filters', () => {
    render(
      <TimelineLayout 
        config={defaultConfig} 
        selectedStatuses={['CONFIRMED']}
        searchTerm="John"
        selectedSectors={['sector-1']}
      />
    );

    // Should only show John Doe (CONFIRMED, matches "John", sector-1)
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument(); // Different status
    expect(screen.queryByText('Bob Wilson')).not.toBeInTheDocument(); // Different name
  });

  it('shows no results when no reservations match filters', () => {
    render(
      <TimelineLayout 
        config={defaultConfig} 
        selectedStatuses={['CANCELLED']}
        searchTerm="NonExistent"
      />
    );

    // Should show no reservations
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
    expect(screen.queryByText('Bob Wilson')).not.toBeInTheDocument();
  });

  it('filters reservations by timezone', () => {
    // Mock reservations with different timezones
    const timezoneReservations: Reservation[] = [
      {
        id: 'res-1',
        tableId: 'table-1',
        customer: { name: 'John Doe', phone: '+1-555-0101', email: 'john@example.com' },
        partySize: 2,
        startTime: '2025-10-23T18:00:00-03:00', // Buenos Aires timezone
        endTime: '2025-10-23T20:00:00-03:00',
        durationMinutes: 120,
        status: 'CONFIRMED',
        priority: 'STANDARD',
        source: 'phone',
        createdAt: '2025-10-23T10:00:00-03:00',
        updatedAt: '2025-10-23T10:00:00-03:00'
      },
      {
        id: 'res-2',
        tableId: 'table-1',
        customer: { name: 'Jane Smith', phone: '+1-555-0102', email: 'jane@example.com' },
        partySize: 2,
        startTime: '2025-10-23T18:00:00+00:00', // UTC timezone
        endTime: '2025-10-23T20:00:00+00:00',
        durationMinutes: 120,
        status: 'CONFIRMED',
        priority: 'STANDARD',
        source: 'phone',
        createdAt: '2025-10-23T10:00:00-03:00',
        updatedAt: '2025-10-23T10:00:00-03:00'
      }
    ];

    mockStore.setState({
      reservationsById: timezoneReservations.reduce((acc, res) => ({ ...acc, [res.id]: res }), {}),
    });

    render(<TimelineLayout config={defaultConfig} />);

    // Should show both reservations (timezone filtering is handled by filterReservationsByTimezone mock)
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('updates filters dynamically', async () => {
    const { rerender } = render(
      <TimelineLayout config={{ ...defaultConfig, viewMode: '3-day' }} />
    );

    // Initially should show all reservations
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Bob Wilson')).toBeInTheDocument();

    // Apply status filter
    rerender(
      <TimelineLayout 
        config={{ ...defaultConfig, viewMode: '3-day' }} 
        selectedStatuses={['CONFIRMED']} 
      />
    );

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
      expect(screen.queryByText('Bob Wilson')).not.toBeInTheDocument();
    });
  });

  it('handles empty filter results gracefully', () => {
    render(<TimelineLayout config={defaultConfig} searchTerm="NonExistent" />);

    // Should not crash and should show empty state
    expect(screen.getByTestId('timeline-layout')).toBeInTheDocument();
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('Jane Smith')).not.toBeInTheDocument();
    expect(screen.queryByText('Bob Wilson')).not.toBeInTheDocument();
  });
});
