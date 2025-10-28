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

describe('Resize Operations', () => {
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

  it('resizes reservation from start (left handle)', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    expect(reservationBlock).toBeInTheDocument();

    // Find the left resize handle
    const leftHandle = reservationBlock!.querySelector('[title="Resize from start"]');
    expect(leftHandle).toBeInTheDocument();

    // Simulate resize operation
    fireEvent.mouseDown(leftHandle!, { clientX: 2400 }); // Start at 18:00
    fireEvent.mouseMove(leftHandle!, { clientX: 2100 }); // Resize to 17:15
    fireEvent.mouseUp(leftHandle!, { clientX: 2100 });

    await waitFor(() => {
      expect(mockUpdateReservation).toHaveBeenCalledWith(
        'res-1',
        expect.objectContaining({
          startTime: expect.stringContaining('2025-10-23T17:15:00'), // New start time
          endTime: expect.stringContaining('2025-10-23T20:00:00'), // End time unchanged
          durationMinutes: 165 // New duration (17:15 to 20:00 = 2h 45min)
        })
      );
    });
  });

  it('resizes reservation from end (right handle)', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    expect(reservationBlock).toBeInTheDocument();

    // Find the right resize handle
    const rightHandle = reservationBlock!.querySelector('[title="Resize from end"]');
    expect(rightHandle).toBeInTheDocument();

    // Simulate resize operation
    fireEvent.mouseDown(rightHandle!, { clientX: 3600 }); // Start at 20:00
    fireEvent.mouseMove(rightHandle!, { clientX: 3900 }); // Resize to 20:45
    fireEvent.mouseUp(rightHandle!, { clientX: 3900 });

    await waitFor(() => {
      expect(mockUpdateReservation).toHaveBeenCalledWith(
        'res-1',
        expect.objectContaining({
          startTime: expect.stringContaining('2025-10-23T18:00:00'), // Start time unchanged
          endTime: expect.stringContaining('2025-10-23T20:45:00'), // New end time
          durationMinutes: 165 // New duration (18:00 to 20:45 = 2h 45min)
        })
      );
    });
  });

  it('shows resize handles on hover', () => {
    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    expect(reservationBlock).toBeInTheDocument();

    // Hover over reservation
    fireEvent.mouseEnter(reservationBlock!);

    // Should show resize handles
    const leftHandle = reservationBlock!.querySelector('[title="Resize from start"]');
    const rightHandle = reservationBlock!.querySelector('[title="Resize from end"]');
    
    expect(leftHandle).toBeInTheDocument();
    expect(rightHandle).toBeInTheDocument();
  });

  it('shows resize handles during resize operation', async () => {
    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    const leftHandle = reservationBlock!.querySelector('[title="Resize from start"]');

    // Start resize operation
    fireEvent.mouseDown(leftHandle!, { clientX: 2400 });

    // Handles should be visible during resize
    expect(leftHandle).toBeInTheDocument();
    const rightHandle = reservationBlock!.querySelector('[title="Resize from end"]');
    expect(rightHandle).toBeInTheDocument();
  });

  it('resizes reservation in 3-day view', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ 
      updateReservation: mockUpdateReservation,
      ui: { ...mockStore.getState().ui, viewMode: '3-day' }
    });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    const rightHandle = reservationBlock!.querySelector('[title="Resize from end"]');

    // Resize in 3-day view
    fireEvent.mouseDown(rightHandle!, { clientX: 3600 });
    fireEvent.mouseMove(rightHandle!, { clientX: 3900 });
    fireEvent.mouseUp(rightHandle!, { clientX: 3900 });

    await waitFor(() => {
      expect(mockUpdateReservation).toHaveBeenCalledWith(
        'res-1',
        expect.objectContaining({
          endTime: expect.stringContaining('2025-10-23T20:45:00'),
        })
      );
    });
  });

  it('resizes reservation in week view', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ 
      updateReservation: mockUpdateReservation,
      ui: { ...mockStore.getState().ui, viewMode: 'week' }
    });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    const rightHandle = reservationBlock!.querySelector('[title="Resize from end"]');

    // Resize in week view
    fireEvent.mouseDown(rightHandle!, { clientX: 3600 });
    fireEvent.mouseMove(rightHandle!, { clientX: 3900 });
    fireEvent.mouseUp(rightHandle!, { clientX: 3900 });

    await waitFor(() => {
      expect(mockUpdateReservation).toHaveBeenCalledWith(
        'res-1',
        expect.objectContaining({
          endTime: expect.stringContaining('2025-10-23T20:45:00'),
        })
      );
    });
  });

  it('prevents resizing below minimum duration', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    const leftHandle = reservationBlock!.querySelector('[title="Resize from start"]');

    // Try to resize to very short duration (less than 15 minutes)
    fireEvent.mouseDown(leftHandle!, { clientX: 2400 });
    fireEvent.mouseMove(leftHandle!, { clientX: 2370 }); // Less than 15 minutes
    fireEvent.mouseUp(leftHandle!, { clientX: 2370 });

    // Should not update reservation (minimum duration validation)
    expect(mockUpdateReservation).not.toHaveBeenCalled();
  });

  it('prevents resizing outside operating hours', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    const leftHandle = reservationBlock!.querySelector('[title="Resize from start"]');

    // Try to resize outside operating hours (before 8:00)
    fireEvent.mouseDown(leftHandle!, { clientX: 2400 });
    fireEvent.mouseMove(leftHandle!, { clientX: 0 }); // Before operating hours
    fireEvent.mouseUp(leftHandle!, { clientX: 0 });

    // Should not update reservation
    expect(mockUpdateReservation).not.toHaveBeenCalled();
  });

  it('handles resize cancellation', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    const leftHandle = reservationBlock!.querySelector('[title="Resize from start"]');

    // Start resize but cancel (escape key)
    fireEvent.mouseDown(leftHandle!, { clientX: 2400 });
    fireEvent.mouseMove(leftHandle!, { clientX: 2100 });
    fireEvent.keyDown(leftHandle!, { key: 'Escape' });

    // Should not update reservation
    expect(mockUpdateReservation).not.toHaveBeenCalled();
  });

  it('validates resize constraints', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    const leftHandle = reservationBlock!.querySelector('[title="Resize from start"]');

    // Try to resize past the end time
    fireEvent.mouseDown(leftHandle!, { clientX: 2400 });
    fireEvent.mouseMove(leftHandle!, { clientX: 3900 }); // Past end time
    fireEvent.mouseUp(leftHandle!, { clientX: 3900 });

    // Should not update reservation (start time cannot be after end time)
    expect(mockUpdateReservation).not.toHaveBeenCalled();
  });

  it('handles resize errors gracefully', async () => {
    const mockUpdateReservation = vi.fn().mockRejectedValue(new Error('Resize failed'));
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    const rightHandle = reservationBlock!.querySelector('[title="Resize from end"]');

    // Perform resize operation
    fireEvent.mouseDown(rightHandle!, { clientX: 3600 });
    fireEvent.mouseMove(rightHandle!, { clientX: 3900 });
    fireEvent.mouseUp(rightHandle!, { clientX: 3900 });

    await waitFor(() => {
      expect(mockUpdateReservation).toHaveBeenCalled();
    });

    // Should not crash the application
    expect(screen.getByTestId('timeline-layout')).toBeInTheDocument();
  });

  it('updates duration correctly after resize', async () => {
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ updateReservation: mockUpdateReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    const rightHandle = reservationBlock!.querySelector('[title="Resize from end"]');

    // Resize to extend by 30 minutes
    fireEvent.mouseDown(rightHandle!, { clientX: 3600 }); // 20:00
    fireEvent.mouseMove(rightHandle!, { clientX: 3900 }); // 20:45
    fireEvent.mouseUp(rightHandle!, { clientX: 3900 });

    await waitFor(() => {
      const updatedReservation = mockUpdateReservation.mock.calls[0][1];
      expect(updatedReservation.durationMinutes).toBe(165); // 18:00 to 20:45 = 2h 45min
    });
  });

  it('shows visual feedback during resize', () => {
    render(<TimelineLayout config={defaultConfig} />);

    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    const leftHandle = reservationBlock!.querySelector('[title="Resize from start"]');

    // Start resize
    fireEvent.mouseDown(leftHandle!, { clientX: 2400 });

    // Should show visual feedback (cursor change, etc.)
    expect(leftHandle).toHaveStyle('cursor: col-resize');
  });
});
