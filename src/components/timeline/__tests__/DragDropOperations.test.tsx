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
  },
  {
    id: 'table-2',
    sectorId: 'sector-1',
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

// Mock dnd-kit
vi.mock('@dnd-kit/core', () => ({
  DndContext: ({ children }: { children: React.ReactNode }) => <div data-testid="dnd-context">{children}</div>,
  useDraggable: () => ({
    attributes: {},
    listeners: {},
    setNodeRef: vi.fn(),
    transform: null,
    isDragging: false,
  }),
  useDroppable: () => ({
    setNodeRef: vi.fn(),
    isOver: false,
    active: null,
  }),
  DragOverlay: ({ children }: { children: React.ReactNode }) => <div data-testid="drag-overlay">{children}</div>,
}));

describe.skip('Drag & Drop Operations', () => {
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

  it('drags reservation to different time slot', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    // Find the reservation block
    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    expect(reservationBlock).toBeInTheDocument();

    // Simulate drag operation
    fireEvent.mouseDown(reservationBlock!, { clientX: 2400 }); // Start position
    fireEvent.mouseMove(reservationBlock!, { clientX: 3000 }); // Drag to new position
    fireEvent.mouseUp(reservationBlock!, { clientX: 3000 }); // Drop

    await waitFor(() => {
      expect(mockUpdateReservation).toHaveBeenCalledWith(
        'res-1',
        expect.objectContaining({
          startTime: expect.stringContaining('2025-10-23T19:30:00'), // New time
        })
      );
    });
  });

  it('drags reservation to different table', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    const targetTable = screen.getByText('Table 2').closest('[data-testid*="table-row"]');

    // Simulate drag to different table
    fireEvent.mouseDown(reservationBlock!, { clientX: 2400 });
    fireEvent.mouseMove(reservationBlock!, { clientX: 2400 });
    fireEvent.mouseUp(targetTable!, { clientX: 2400 });

    await waitFor(() => {
      expect(mockUpdateReservation).toHaveBeenCalledWith(
        'res-1',
        expect.objectContaining({
          tableId: 'table-2',
        })
      );
    });
  });

  it('drags reservation across days in 3-day view', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ 
      updateReservation: mockUpdateReservation,
      ui: { ...mockStore.getState().ui, viewMode: '3-day' }
    });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    
    // Drag to day 2 (second day)
    const day2Position = 4320 + 2400; // Day 2 start + 18:00 slot
    fireEvent.mouseDown(reservationBlock!, { clientX: 2400 });
    fireEvent.mouseMove(reservationBlock!, { clientX: day2Position });
    fireEvent.mouseUp(reservationBlock!, { clientX: day2Position });

    await waitFor(() => {
      expect(mockUpdateReservation).toHaveBeenCalledWith(
        'res-1',
        expect.objectContaining({
          startTime: expect.stringContaining('2025-10-24T18:00:00'), // Next day
        })
      );
    });
  });

  it('drags reservation across days in week view', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ 
      updateReservation: mockUpdateReservation,
      ui: { ...mockStore.getState().ui, viewMode: 'week' }
    });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    
    // Drag to day 5 (fifth day of week)
    const day5Position = 17280 + 2400; // Day 5 start + 18:00 slot
    fireEvent.mouseDown(reservationBlock!, { clientX: 2400 });
    fireEvent.mouseMove(reservationBlock!, { clientX: day5Position });
    fireEvent.mouseUp(reservationBlock!, { clientX: day5Position });

    await waitFor(() => {
      expect(mockUpdateReservation).toHaveBeenCalledWith(
        'res-1',
        expect.objectContaining({
          startTime: expect.stringContaining('2025-10-27T18:00:00'), // Day 5
        })
      );
    });
  });

  it('handles drag cancellation', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');

    // Start drag but cancel (escape key)
    fireEvent.mouseDown(reservationBlock!, { clientX: 2400 });
    fireEvent.mouseMove(reservationBlock!, { clientX: 3000 });
    fireEvent.keyDown(reservationBlock!, { key: 'Escape' });

    // Should not update reservation
    expect(mockUpdateReservation).not.toHaveBeenCalled();
  });

  it('validates drop target before updating', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    
    // Try to drag to invalid position (outside timeline)
    fireEvent.mouseDown(reservationBlock!, { clientX: 2400 });
    fireEvent.mouseMove(reservationBlock!, { clientX: -1000 }); // Invalid position
    fireEvent.mouseUp(reservationBlock!, { clientX: -1000 });

    // Should not update reservation
    expect(mockUpdateReservation).not.toHaveBeenCalled();
  });

  it('shows drag preview during drag operation', async () => {
    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');

    // Start drag
    fireEvent.mouseDown(reservationBlock!, { clientX: 2400 });
    fireEvent.mouseMove(reservationBlock!, { clientX: 3000 });

    // Should show drag overlay
    expect(screen.getByTestId('drag-overlay')).toBeInTheDocument();
  });

  it('handles drag errors gracefully', async () => {
    const mockUpdateReservation = vi.fn().mockRejectedValue(new Error('Update failed'));
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');

    // Perform drag operation
    fireEvent.mouseDown(reservationBlock!, { clientX: 2400 });
    fireEvent.mouseMove(reservationBlock!, { clientX: 3000 });
    fireEvent.mouseUp(reservationBlock!, { clientX: 3000 });

    await waitFor(() => {
      expect(mockUpdateReservation).toHaveBeenCalled();
    });

    // Should not crash the application
    expect(screen.getByTestId('timeline-layout')).toBeInTheDocument();
  });
});
