import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
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
  }
];

const mockTables: Table[] = [
  {
    id: 'table-1',
    sectorId: 'sector-1',
    name: 'Table 1',
    capacity: { min: 2, max: 4 },
    sortOrder: 1
  }
];

// Mock store
const mockStore = create(() => ({
  tablesById: {},
  sectorsById: {},
  reservationsById: {},
  reservationsByTable: {},
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
  toZonedTime: vi.fn((date: Date) => date),
  fromZonedTime: vi.fn((date: Date) => date),
}));

describe('Timeline Basic Tests', () => {
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
      reservationsById: {},
    });
  });

  it('renders timeline layout', () => {
    render(<TimelineLayout config={defaultConfig} />);
    
    expect(screen.getByTestId('timeline-layout')).toBeInTheDocument();
  });

  // Toolbar is rendered at the page level, not inside TimelineLayout

  it('renders time header', () => {
    render(<TimelineLayout config={defaultConfig} />);
    
    expect(screen.getByTestId('timeline-timeheader')).toBeInTheDocument();
  });

  it('renders table names', () => {
    render(<TimelineLayout config={defaultConfig} />);
    
    expect(screen.getByText('Table 1')).toBeInTheDocument();
  });

  // View mode selector is part of the page toolbar, not TimelineLayout

  // Navigation buttons are part of the page toolbar, not TimelineLayout

  // View mode changes are driven by the toolbar outside TimelineLayout

  // Navigation is handled by the page toolbar, not TimelineLayout

  it('renders month view when viewMode is month', () => {
    mockStore.setState({
      ui: { ...mockStore.getState().ui, viewMode: 'month' }
    });

    render(<TimelineLayout config={defaultConfig} />);
    
    expect(screen.getByText(/October 2025/)).toBeInTheDocument();
  });

  it('handles empty data gracefully', () => {
    mockStore.setState({
      tablesById: {},
      sectorsById: {},
      reservationsById: {},
    });

    render(<TimelineLayout config={defaultConfig} />);
    
    expect(screen.getByTestId('timeline-layout')).toBeInTheDocument();
  });
});
