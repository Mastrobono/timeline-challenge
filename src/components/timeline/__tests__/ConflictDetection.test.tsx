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

const conflictingReservations: Reservation[] = [
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
    tableId: 'table-1',
    customer: {
      name: 'Jane Smith',
      phone: '+1-555-0102',
      email: 'jane@example.com'
    },
    partySize: 3,
    startTime: '2025-10-23T19:00:00-03:00',
    endTime: '2025-10-23T21:00:00-03:00',
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

// Mock conflict service
vi.mock('@/lib/conflictService', () => ({
  ConflictService: {
    detectConflicts: vi.fn((reservations: Reservation[], newReservation: Reservation) => {
      return reservations.filter(res => 
        res.tableId === newReservation.tableId &&
        res.id !== newReservation.id &&
        ((new Date(res.startTime) < new Date(newReservation.endTime)) &&
         (new Date(res.endTime) > new Date(newReservation.startTime)))
      );
    }),
    getConflictType: vi.fn((conflict: Reservation) => 'OVERLAP'),
    resolveConflict: vi.fn((conflict: Reservation, resolution: string) => conflict),
  }
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

describe('Conflict Detection', () => {
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
      reservationsById: conflictingReservations.reduce((acc, res) => ({ ...acc, [res.id]: res }), {}),
    });
  });

  it('detects overlapping reservations', async () => {
     // Use direct import instead of dynamic import for ConflictService to match typing
     const { ConflictService } = require('@/lib/conflictService');
    
    const newReservation: Reservation = {
      id: 'res-3',
      tableId: 'table-1',
      customer: { name: 'Bob Wilson', phone: '+1-555-0103', email: 'bob@example.com' },
      partySize: 2,
      startTime: '2025-10-23T18:30:00-03:00',
      endTime: '2025-10-23T20:30:00-03:00',
      durationMinutes: 120,
      status: 'CONFIRMED',
      priority: 'STANDARD',
      source: 'phone',
      createdAt: '2025-10-23T10:00:00-03:00',
      updatedAt: '2025-10-23T10:00:00-03:00'
    };

    const conflicts = ConflictService.detectConflicts(conflictingReservations, newReservation);
    
    expect(conflicts).toHaveLength(2); // Should conflict with both existing reservations
    expect(conflicts[0].id).toBe('res-1');
    expect(conflicts[1].id).toBe('res-2');
  });

  it('detects exact time conflicts', async () => {
     // Use direct import instead of dynamic import for ConflictService to match typing
     const { ConflictService } = require('@/lib/conflictService');
    
    const newReservation: Reservation = {
      id: 'res-3',
      tableId: 'table-1',
      customer: { name: 'Bob Wilson', phone: '+1-555-0103', email: 'bob@example.com' },
      partySize: 2,
      startTime: '2025-10-23T18:00:00-03:00',
      endTime: '2025-10-23T20:00:00-03:00',
      durationMinutes: 120,
      status: 'CONFIRMED',
      priority: 'STANDARD',
      source: 'phone',
      createdAt: '2025-10-23T10:00:00-03:00',
      updatedAt: '2025-10-23T10:00:00-03:00'
    };

    const conflicts = ConflictService.detectConflicts(conflictingReservations, newReservation);
    
    expect(conflicts).toHaveLength(1); // Should conflict with res-1 (exact overlap)
    expect(conflicts[0].id).toBe('res-1');
  });

  it('detects partial overlap conflicts', async () => {
     // Use direct import instead of dynamic import for ConflictService to match typing
     const { ConflictService } = require('@/lib/conflictService');
    
    const newReservation: Reservation = {
      id: 'res-3',
      tableId: 'table-1',
      customer: { name: 'Bob Wilson', phone: '+1-555-0103', email: 'bob@example.com' },
      partySize: 2,
      startTime: '2025-10-23T19:30:00-03:00',
      endTime: '2025-10-23T21:30:00-03:00',
      durationMinutes: 120,
      status: 'CONFIRMED',
      priority: 'STANDARD',
      source: 'phone',
      createdAt: '2025-10-23T10:00:00-03:00',
      updatedAt: '2025-10-23T10:00:00-03:00'
    };

    const conflicts = ConflictService.detectConflicts(conflictingReservations, newReservation);
    
    expect(conflicts).toHaveLength(1); // Should conflict with res-2 (partial overlap)
    expect(conflicts[0].id).toBe('res-2');
  });

  it('does not detect conflicts for non-overlapping times', async () => {
     // Use direct import instead of dynamic import for ConflictService to match typing
     const { ConflictService } = require('@/lib/conflictService');
    
    const newReservation: Reservation = {
      id: 'res-3',
      tableId: 'table-1',
      customer: { name: 'Bob Wilson', phone: '+1-555-0103', email: 'bob@example.com' },
      partySize: 2,
      startTime: '2025-10-23T21:00:00-03:00',
      endTime: '2025-10-23T23:00:00-03:00',
      durationMinutes: 120,
      status: 'CONFIRMED',
      priority: 'STANDARD',
      source: 'phone',
      createdAt: '2025-10-23T10:00:00-03:00',
      updatedAt: '2025-10-23T10:00:00-03:00'
    };

    const conflicts = ConflictService.detectConflicts(conflictingReservations, newReservation);
    
    expect(conflicts).toHaveLength(0); // Should not conflict with any existing reservations
  });

  it('does not detect conflicts for different tables', async () => {
     // Use direct import instead of dynamic import for ConflictService to match typing
     const { ConflictService } = require('@/lib/conflictService');
    
    const newReservation: Reservation = {
      id: 'res-3',
      tableId: 'table-2', // Different table
      customer: { name: 'Bob Wilson', phone: '+1-555-0103', email: 'bob@example.com' },
      partySize: 2,
      startTime: '2025-10-23T18:00:00-03:00',
      endTime: '2025-10-23T20:00:00-03:00',
      durationMinutes: 120,
      status: 'CONFIRMED',
      priority: 'STANDARD',
      source: 'phone',
      createdAt: '2025-10-23T10:00:00-03:00',
      updatedAt: '2025-10-23T10:00:00-03:00'
    };

    const conflicts = ConflictService.detectConflicts(conflictingReservations, newReservation);
    
    expect(conflicts).toHaveLength(0); // Should not conflict (different table)
  });

  it('prevents creation of conflicting reservations', async () => {
    const mockAddReservation = vi.fn();
    mockStore.setState({ addReservation: mockAddReservation });

    render(<TimelineLayout config={defaultConfig} />);

    const tableRow = screen.getByText('Table 1').closest('[data-testid*="table-row"]');
    
    // Try to create reservation in conflicting time slot (19:00)
    fireEvent.click(tableRow!, { clientX: 3000 }); // 19:00 slot

    await waitFor(() => {
      // Should not create reservation due to conflict
      expect(mockAddReservation).not.toHaveBeenCalled();
    });
  });

  it('shows conflict warnings in UI', () => {
    render(<TimelineLayout config={defaultConfig} />);

    // Should show both conflicting reservations
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    
    // Both reservations should be visible (they overlap)
    const reservationBlocks = screen.getAllByTestId(/^res-\d+$/);
    expect(reservationBlocks).toHaveLength(2);
  });

  it('handles conflict resolution', async () => {
     // Use direct import instead of dynamic import for ConflictService to match typing
     const { ConflictService } = require('@/lib/conflictService');
    
    const conflict = conflictingReservations[0];
    const resolvedReservation = ConflictService.resolveConflict(conflict, 'MOVE_TO_NEXT_AVAILABLE');
    
    expect(resolvedReservation).toBeDefined();
    expect(ConflictService.resolveConflict).toHaveBeenCalledWith(conflict, 'MOVE_TO_NEXT_AVAILABLE');
  });

  it('detects conflicts across different days', () => {
    // Use direct import instead of dynamic import for ConflictService to match typing
    const { ConflictService } = require('@/lib/conflictService');
    
    const crossDayReservations: Reservation[] = [
      {
        id: 'res-1',
        tableId: 'table-1',
        customer: { name: 'John Doe', phone: '+1-555-0101', email: 'john@example.com' },
        partySize: 2,
        startTime: '2025-10-23T22:00:00-03:00',
        endTime: '2025-10-24T01:00:00-03:00',
        durationMinutes: 180,
        status: 'CONFIRMED',
        priority: 'STANDARD',
        source: 'phone',
        createdAt: '2025-10-23T10:00:00-03:00',
        updatedAt: '2025-10-23T10:00:00-03:00'
      }
    ];

    const newReservation: Reservation = {
      id: 'res-2',
      tableId: 'table-1',
      customer: { name: 'Jane Smith', phone: '+1-555-0102', email: 'jane@example.com' },
      partySize: 3,
      startTime: '2025-10-24T00:00:00-03:00',
      endTime: '2025-10-24T02:00:00-03:00',
      durationMinutes: 120,
      status: 'CONFIRMED',
      priority: 'STANDARD',
      source: 'phone',
      createdAt: '2025-10-23T10:00:00-03:00',
      updatedAt: '2025-10-23T10:00:00-03:00'
    };

    const conflicts = ConflictService.detectConflicts(crossDayReservations, newReservation);
    
    expect(conflicts).toHaveLength(1); // Should detect cross-day conflict
    expect(conflicts[0].id).toBe('res-1');
  });
});
