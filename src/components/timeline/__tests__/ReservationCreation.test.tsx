import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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
  getSlotsPerDay: () => 60, // 15 hours * 4 slots per hour
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

describe('Reservation Creation', () => {
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

  it('creates reservation on slot click', async () => {
    const mockAddReservation = vi.fn();
    mockStore.setState({ addReservation: mockAddReservation });

    render(<TimelineLayout config={defaultConfig} />);

    // Find a table row and click on it
    const tableRow = screen.getByText('Table 1').closest('[data-testid*="table-row"]');
    expect(tableRow).toBeInTheDocument();

    // Simulate click on empty slot (18:00 slot = slot 40)
    fireEvent.click(tableRow!, { clientX: 2400 }); // 40 slots * 60px = 2400px

    await waitFor(() => {
      expect(mockAddReservation).toHaveBeenCalledWith(
        expect.objectContaining({
          tableId: 'table-1',
          startTime: expect.stringContaining('2025-10-23T18:00:00'),
          customer: expect.objectContaining({
            name: '',
            phone: '',
            email: ''
          }),
          partySize: 2,
          status: 'CONFIRMED',
          priority: 'STANDARD',
          source: 'timeline'
        })
      );
    });
  });

  it('creates reservation with drag operation', async () => {
    const mockAddReservation = vi.fn();
    mockStore.setState({ addReservation: mockAddReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const tableRow = screen.getByText('Table 1').closest('[data-testid*="table-row"]');
    expect(tableRow).toBeInTheDocument();

    // Simulate drag operation (18:00 to 20:00)
    fireEvent.mouseDown(tableRow!, { clientX: 2400 }); // Start at 18:00
    fireEvent.mouseMove(tableRow!, { clientX: 3600 }); // Drag to 20:00
    fireEvent.mouseUp(tableRow!, { clientX: 3600 }); // End at 20:00

    await waitFor(() => {
      expect(mockAddReservation).toHaveBeenCalledWith(
        expect.objectContaining({
          tableId: 'table-1',
          startTime: expect.stringContaining('2025-10-23T18:00:00'),
          endTime: expect.stringContaining('2025-10-23T20:00:00'),
          durationMinutes: 120
        })
      );
    });
  });

  it('creates reservation in 3-day view', async () => {
    const mockAddReservation = vi.fn();
    mockStore.setState({ 
      addReservation: mockAddReservation,
      ui: { ...mockStore.getState().ui, viewMode: '3-day' }
    });

    render(<TimelineLayout config={defaultConfig} />);

    const tableRow = screen.getByText('Table 1').closest('[data-testid*="table-row"]');
    
    // Click on day 2 (second day of 3-day view)
    const day2ClickX = 4320 + 2400; // Day 2 start + 18:00 slot
    fireEvent.click(tableRow!, { clientX: day2ClickX });

    await waitFor(() => {
      expect(mockAddReservation).toHaveBeenCalledWith(
        expect.objectContaining({
          startTime: expect.stringContaining('2025-10-24T18:00:00'), // Next day
        })
      );
    });
  });

  it('creates reservation in week view', async () => {
    const mockAddReservation = vi.fn();
    mockStore.setState({ 
      addReservation: mockAddReservation,
      ui: { ...mockStore.getState().ui, viewMode: 'week' }
    });

    render(<TimelineLayout config={defaultConfig} />);

    const tableRow = screen.getByText('Table 1').closest('[data-testid*="table-row"]');
    
    // Click on day 3 (third day of week view)
    const day3ClickX = 8640 + 2400; // Day 3 start + 18:00 slot
    fireEvent.click(tableRow!, { clientX: day3ClickX });

    await waitFor(() => {
      expect(mockAddReservation).toHaveBeenCalledWith(
        expect.objectContaining({
          startTime: expect.stringContaining('2025-10-25T18:00:00'), // Day 3
        })
      );
    });
  });

  it('validates reservation data before creation', async () => {
    const mockAddReservation = vi.fn();
    mockStore.setState({ addReservation: mockAddReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const tableRow = screen.getByText('Table 1').closest('[data-testid*="table-row"]');
    
    // Click on slot
    fireEvent.click(tableRow!, { clientX: 2400 });

    await waitFor(() => {
      const reservation = mockAddReservation.mock.calls[0][0];
      
      // Validate required fields
      expect(reservation.id).toBeDefined();
      expect(reservation.tableId).toBe('table-1');
      expect(reservation.startTime).toBeDefined();
      expect(reservation.customer).toBeDefined();
      expect(reservation.partySize).toBeGreaterThan(0);
      expect(reservation.status).toBe('CONFIRMED');
      expect(reservation.priority).toBe('STANDARD');
      expect(reservation.source).toBe('timeline');
      expect(reservation.createdAt).toBeDefined();
      expect(reservation.updatedAt).toBeDefined();
    });
  });

  it('handles creation errors gracefully', async () => {
    const mockAddReservation = vi.fn().mockRejectedValue(new Error('Creation failed'));
    mockStore.setState({ addReservation: mockAddReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const tableRow = screen.getByText('Table 1').closest('[data-testid*="table-row"]');
    
    // Click on slot
    fireEvent.click(tableRow!, { clientX: 2400 });

    await waitFor(() => {
      expect(mockAddReservation).toHaveBeenCalled();
    });

    // Should not crash the application
    expect(screen.getByTestId('timeline-layout')).toBeInTheDocument();
  });
});
