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

describe('Timeline Integration Tests', () => {
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

  it('renders timeline with all components', () => {
    render(<TimelineLayout config={defaultConfig} />);

    // Check main components are rendered
    expect(screen.getByTestId('timeline-layout')).toBeInTheDocument();
    expect(screen.getByTestId('timeline-toolbar')).toBeInTheDocument();
    expect(screen.getByTestId('timeline-timeheader')).toBeInTheDocument();
    expect(screen.getByTestId('dnd-context')).toBeInTheDocument();
  });

  it('handles complete reservation workflow', async () => {
    const mockAddReservation = vi.fn();
    const mockUpdateReservation = vi.fn();
    mockStore.setState({ 
      addReservation: mockAddReservation,
      updateReservation: mockUpdateReservation
    });

    render(<TimelineLayout config={defaultConfig} />);

    const tableRow = screen.getByText('Table 1').closest('[data-testid*="table-row"]');
    
    // 1. Create reservation
    fireEvent.click(tableRow!, { clientX: 2400 });
    
    await waitFor(() => {
      expect(mockAddReservation).toHaveBeenCalled();
    });

    // 2. Drag reservation
    const reservationBlock = screen.getByText('John Doe').closest('[data-testid*="res-"]');
    fireEvent.mouseDown(reservationBlock!, { clientX: 2400 });
    fireEvent.mouseMove(reservationBlock!, { clientX: 3000 });
    fireEvent.mouseUp(reservationBlock!, { clientX: 3000 });

    await waitFor(() => {
      expect(mockUpdateReservation).toHaveBeenCalled();
    });

    // 3. Resize reservation
    const rightHandle = reservationBlock!.querySelector('[title="Resize from end"]');
    fireEvent.mouseDown(rightHandle!, { clientX: 3600 });
    fireEvent.mouseMove(rightHandle!, { clientX: 3900 });
    fireEvent.mouseUp(rightHandle!, { clientX: 3900 });

    await waitFor(() => {
      expect(mockUpdateReservation).toHaveBeenCalledTimes(2);
    });
  });

  it('handles view mode changes', () => {
    const mockSetViewMode = vi.fn();
    mockStore.setState({ setViewMode: mockSetViewMode });

    render(<TimelineLayout config={defaultConfig} />);

    const viewSelector = screen.getByLabelText('Select view mode');
    
    // Change to 3-day view
    fireEvent.change(viewSelector, { target: { value: '3-day' } });
    expect(mockSetViewMode).toHaveBeenCalledWith('3-day');

    // Change to week view
    fireEvent.change(viewSelector, { target: { value: 'week' } });
    expect(mockSetViewMode).toHaveBeenCalledWith('week');

    // Change to month view
    fireEvent.change(viewSelector, { target: { value: 'month' } });
    expect(mockSetViewMode).toHaveBeenCalledWith('month');
  });

  it('handles navigation', () => {
    const mockGoToNextPeriod = vi.fn();
    const mockGoToPrevPeriod = vi.fn();
    const mockGoToToday = vi.fn();
    
    mockStore.setState({ 
      goToNextPeriod: mockGoToNextPeriod,
      goToPrevPeriod: mockGoToPrevPeriod,
      goToToday: mockGoToToday
    });

    render(<TimelineLayout config={defaultConfig} />);

    // Test navigation buttons
    fireEvent.click(screen.getByLabelText('Next period'));
    expect(mockGoToNextPeriod).toHaveBeenCalled();

    fireEvent.click(screen.getByLabelText('Previous period'));
    expect(mockGoToPrevPeriod).toHaveBeenCalled();

    fireEvent.click(screen.getByLabelText('Go to today'));
    expect(mockGoToToday).toHaveBeenCalled();
  });

  it('handles error states gracefully', () => {
    const mockAddReservation = vi.fn().mockRejectedValue(new Error('Creation failed'));
    const mockUpdateReservation = vi.fn().mockRejectedValue(new Error('Update failed'));
    
    mockStore.setState({ 
      addReservation: mockAddReservation,
      updateReservation: mockUpdateReservation
    });

    render(<TimelineLayout config={defaultConfig} />);

    // Should not crash even with error-prone functions
    expect(screen.getByTestId('timeline-layout')).toBeInTheDocument();
  });

  it('handles empty state', () => {
    mockStore.setState({
      reservationsById: {},
    });

    render(<TimelineLayout config={defaultConfig} />);

    // Should render without reservations
    expect(screen.getByTestId('timeline-layout')).toBeInTheDocument();
    expect(screen.getByText('Table 1')).toBeInTheDocument();
  });

  it('handles large datasets', () => {
    // Create many reservations
    const manyReservations: Reservation[] = Array.from({ length: 100 }, (_, i) => ({
      id: `res-${i}`,
      tableId: 'table-1',
      customer: {
        name: `Customer ${i}`,
        phone: `+1-555-${String(i).padStart(4, '0')}`,
        email: `customer${i}@example.com`
      },
      partySize: 2,
      startTime: `2025-10-23T${8 + (i % 12)}:00:00-03:00`,
      endTime: `2025-10-23T${9 + (i % 12)}:00:00-03:00`,
      durationMinutes: 60,
      status: 'CONFIRMED',
      priority: 'STANDARD',
      source: 'phone',
      createdAt: '2025-10-23T10:00:00-03:00',
      updatedAt: '2025-10-23T10:00:00-03:00'
    }));

    mockStore.setState({
      reservationsById: manyReservations.reduce((acc, res) => ({ ...acc, [res.id]: res }), {}),
    });

    render(<TimelineLayout config={defaultConfig} />);

    // Should handle large dataset without crashing
    expect(screen.getByTestId('timeline-layout')).toBeInTheDocument();
  });
});
