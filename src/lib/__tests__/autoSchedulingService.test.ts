import { describe, it, expect, beforeEach } from 'vitest';
import { AutoSchedulingService } from '@/lib/autoSchedulingService';
import type { Table, Sector, Reservation, TimelineConfig, RestaurantConfig } from '@/types';

describe('AutoSchedulingService', () => {
  let tables: Table[];
  let sectors: Sector[];
  let config: TimelineConfig;
  let restaurantConfig: RestaurantConfig;
  let existingReservations: Reservation[];

  beforeEach(() => {
    sectors = [
      { id: 'sector-1', name: 'Main Dining', color: '#3B82F6', sortOrder: 1 },
      { id: 'sector-2', name: 'Terrace', color: '#10B981', sortOrder: 2 },
      { id: 'sector-3', name: 'Private Room', color: '#F59E0B', sortOrder: 3 }
    ];

    tables = [
      { id: 'table-1', sectorId: 'sector-1', name: 'Table 1', capacity: { min: 2, max: 4 }, sortOrder: 1 },
      { id: 'table-2', sectorId: 'sector-1', name: 'Table 2', capacity: { min: 5, max: 6 }, sortOrder: 2 },
      { id: 'table-3', sectorId: 'sector-2', name: 'Table 3', capacity: { min: 3, max: 5 }, sortOrder: 3 },
      { id: 'table-4', sectorId: 'sector-3', name: 'Table 4', capacity: { min: 8, max: 12 }, sortOrder: 4 }
    ];

    config = {
      date: '2025-01-15',
      startHour: 7,
      endHour: 22,
      slotMinutes: 15,
      timezone: 'America/New_York',
      slotWidth: 60,
      viewMode: 'day'
    };

    restaurantConfig = {
      id: 'restaurant-1',
      name: 'Test Restaurant',
      timezone: 'America/New_York',
      operatingHours: { startHour: 7, endHour: 22 },
      slotConfiguration: { slotMinutes: 15, defaultSlotWidth: 60 }
    };

    existingReservations = [
      {
        id: 'res-1',
        tableId: 'table-1',
        customer: { name: 'John Doe', phone: '555-0001', email: 'john@example.com' },
        partySize: 3,
        startTime: '2025-01-15T19:00:00-05:00',
        endTime: '2025-01-15T21:00:00-05:00',
        durationMinutes: 120,
        status: 'CONFIRMED',
        priority: 'STANDARD',
        source: 'web',
        createdAt: '2025-01-15T10:00:00-05:00',
        updatedAt: '2025-01-15T10:00:00-05:00'
      }
    ];
  });

  describe('findBestTable', () => {
    it('should find the best available table for a party size', () => {
      const suggestions = AutoSchedulingService.findBestTable(
        3, // party size
        '2025-01-15T18:00:00-05:00', // start time
        120, // duration
        tables,
        sectors,
        existingReservations,
        config
      );

      expect(suggestions.length).toBeGreaterThan(0);
      const ids = suggestions.map(s => s.table.id);
      expect(ids).toEqual(expect.arrayContaining(['table-1', 'table-3']));
      expect(suggestions[0].isAvailable).toBeDefined();
      expect(suggestions[0].suitabilityScore).toBeGreaterThan(0);
    });

    it('should prioritize tables closest to party size', () => {
      const suggestions = AutoSchedulingService.findBestTable(
        4, // party size
        '2025-01-15T18:00:00-05:00',
        120,
        tables,
        sectors,
        existingReservations,
        config
      );

      // Table 1 (2-4 capacity) should be ranked higher than Table 2 (5-6 capacity)
      const table1Suggestion = suggestions.find(s => s.table.id === 'table-1');
      const table2Suggestion = suggestions.find(s => s.table.id === 'table-2');
      
      expect(table1Suggestion?.suitabilityScore).toBeGreaterThan(table2Suggestion?.suitabilityScore || 0);
    });

    it('should consider sector preferences', () => {
      const suggestions = AutoSchedulingService.findBestTable(
        3,
        '2025-01-15T18:00:00-05:00',
        120,
        tables,
        sectors,
        existingReservations,
        config,
        { preferredSectorId: 'sector-2' }
      );

      const terraceSuggestion = suggestions.find(s => s.table.sectorId === 'sector-2');
      expect(terraceSuggestion?.suitabilityScore).toBeGreaterThan(0);
      expect(terraceSuggestion?.reasons).toContain('In preferred sector: Terrace');
    });

    it('should mark unavailable tables correctly', () => {
      const suggestions = AutoSchedulingService.findBestTable(
        2, // party size
        '2025-01-15T19:00:00-05:00', // conflicting time
        120,
        tables,
        sectors,
        existingReservations,
        config
      );

      const table1Suggestion = suggestions.find(s => s.table.id === 'table-1');
      expect(table1Suggestion?.isAvailable).toBe(false);
      expect(table1Suggestion?.reasons).toContain('Not available at requested time');
    });

    it('should limit suggestions to maxSuggestions', () => {
      const suggestions = AutoSchedulingService.findBestTable(
        2,
        '2025-01-15T18:00:00-05:00',
        120,
        tables,
        sectors,
        existingReservations,
        config,
        { maxSuggestions: 2 }
      );

      expect(suggestions).toHaveLength(1); // Only table-1 can accommodate party size 2
    });
  });

  describe('findNextAvailableSlots', () => {
    it('should find available time slots in different windows', () => {
      const slots = AutoSchedulingService.findNextAvailableSlots(
        3,
        '2025-01-15T19:00:00-05:00', // conflicting time
        120,
        tables,
        sectors,
        existingReservations,
        config,
        {
          partySize: 3,
          durationMinutes: 120,
          preferredTime: '2025-01-15T19:00:00-05:00',
          searchWindows: [15, 30],
          maxSuggestions: 5
        }
      );

      expect(slots.length).toBeGreaterThan(0);
      expect(slots[0].durationMinutes).toBe(120);
      expect(slots[0].availabilityScore).toBeGreaterThan(0);
    });

    it('should return slots sorted by availability score', () => {
      const slots = AutoSchedulingService.findNextAvailableSlots(
        3,
        '2025-01-15T19:00:00-05:00',
        120,
        tables,
        sectors,
        existingReservations,
        config,
        {
          partySize: 3,
          durationMinutes: 120,
          preferredTime: '2025-01-15T19:00:00-05:00',
          searchWindows: [15, 30, 60],
          maxSuggestions: 10
        }
      );

      // Should be sorted by availability score (highest first)
      for (let i = 1; i < slots.length; i++) {
        expect(slots[i - 1].availabilityScore).toBeGreaterThanOrEqual(slots[i].availabilityScore);
      }
    });

    it('should respect maxSuggestions limit', () => {
      const slots = AutoSchedulingService.findNextAvailableSlots(
        3,
        '2025-01-15T19:00:00-05:00',
        120,
        tables,
        sectors,
        existingReservations,
        config,
        {
          partySize: 3,
          durationMinutes: 120,
          preferredTime: '2025-01-15T19:00:00-05:00',
          searchWindows: [15, 30, 60],
          maxSuggestions: 3
        }
      );

      expect(slots.length).toBeLessThanOrEqual(3);
    });
  });

  describe('optimizeBulkAssignment', () => {
    it('should optimally assign tables for bulk reservations', () => {
      const reservations = [
        {
          id: 'bulk-1',
          customer: { name: 'Alice', phone: '555-0002', email: 'alice@example.com' },
          partySize: 3,
          startTime: '2025-01-15T18:00:00-05:00',
          durationMinutes: 120,
          status: 'CONFIRMED' as const,
          priority: 'STANDARD' as const
        },
        {
          id: 'bulk-2',
          customer: { name: 'Bob', phone: '555-0003', email: 'bob@example.com' },
          partySize: 5,
          startTime: '2025-01-15T19:30:00-05:00',
          durationMinutes: 90,
          status: 'CONFIRMED' as const,
          priority: 'VIP' as const
        }
      ];

      const results = AutoSchedulingService.optimizeBulkAssignment(
        reservations,
        tables,
        sectors,
        existingReservations,
        config,
        restaurantConfig
      );

      expect(results).toHaveLength(2);
      expect(results[0].assignedTable).toBeTruthy();
      expect(results[0].conflicts).toHaveLength(0);
      expect(results[1].assignedTable).toBeTruthy();
      expect(results[1].conflicts).toHaveLength(0);
    });

    it('should prioritize VIP reservations', () => {
      const reservations = [
        {
          id: 'bulk-1',
          customer: { name: 'Alice', phone: '555-0002', email: 'alice@example.com' },
          partySize: 3,
          startTime: '2025-01-15T19:00:00-05:00',
          durationMinutes: 120,
          status: 'CONFIRMED' as const,
          priority: 'STANDARD' as const
        },
        {
          id: 'bulk-2',
          customer: { name: 'Bob', phone: '555-0003', email: 'bob@example.com' },
          partySize: 3,
          startTime: '2025-01-15T19:00:00-05:00',
          durationMinutes: 120,
          status: 'CONFIRMED' as const,
          priority: 'VIP' as const
        }
      ];

      const results = AutoSchedulingService.optimizeBulkAssignment(
        reservations,
        tables,
        sectors,
        existingReservations,
        config,
        restaurantConfig
      );

      // VIP reservation should be processed first
      expect(results[0].reservation.priority).toBe('VIP');
    });

    it('should handle conflicts gracefully', () => {
      const reservations = [
        {
          id: 'bulk-1',
          customer: { name: 'Alice', phone: '555-0002', email: 'alice@example.com' },
          partySize: 2,
          startTime: '2025-01-15T19:00:00-05:00', // conflicting time
          durationMinutes: 120,
          status: 'CONFIRMED' as const,
          priority: 'STANDARD' as const
        }
      ];

      const results = AutoSchedulingService.optimizeBulkAssignment(
        reservations,
        tables,
        sectors,
        existingReservations,
        config,
        restaurantConfig
      );

      expect(results[0].assignedTable).toBeNull();
      expect(results[0].conflicts.length).toBeGreaterThan(0);
    });
  });

  describe('analyzeVIPStatus', () => {
    it('should detect VIP customers based on history', () => {
      const customerHistory = [
        {
          id: 'res-1',
          tableId: 'table-1',
          customer: { name: 'VIP Customer', phone: '555-0001', email: 'vip@example.com' },
          partySize: 4,
          startTime: '2025-01-10T19:00:00-05:00',
          endTime: '2025-01-10T21:00:00-05:00',
          durationMinutes: 120,
          status: 'CONFIRMED' as const,
          priority: 'VIP' as const,
          source: 'web',
          createdAt: '2025-01-10T10:00:00-05:00',
          updatedAt: '2025-01-10T10:00:00-05:00'
        },
        {
          id: 'res-2',
          tableId: 'table-2',
          customer: { name: 'VIP Customer', phone: '555-0001', email: 'vip@example.com' },
          partySize: 6,
          startTime: '2025-01-12T20:00:00-05:00',
          endTime: '2025-01-12T22:00:00-05:00',
          durationMinutes: 120,
          status: 'CONFIRMED' as const,
          priority: 'VIP' as const,
          source: 'web',
          createdAt: '2025-01-12T10:00:00-05:00',
          updatedAt: '2025-01-12T10:00:00-05:00'
        }
      ];

      const analysis = AutoSchedulingService.analyzeVIPStatus(
        {
          customer: { name: 'VIP Customer', phone: '555-0001', email: 'vip@example.com' },
          partySize: 4,
          priority: 'STANDARD'
        },
        customerHistory,
        { minHistoryReservations: 2, vipThreshold: 0.6 }
      );

      expect(analysis.isVIP).toBe(true);
      expect(analysis.confidence).toBeGreaterThan(0.6);
      expect(analysis.suggestedPriority).toBe('VIP');
      expect(analysis.reasons).toContain('Customer has 2 previous VIP reservations');
    });

    it('should detect large party VIPs', () => {
      const analysis = AutoSchedulingService.analyzeVIPStatus(
        {
          customer: { name: 'Large Party', phone: '555-0002', email: 'large@example.com' },
          partySize: 10,
          priority: 'STANDARD'
        },
        [],
        { largePartyThreshold: 8 }
      );

      expect(analysis.isVIP).toBe(false); // Not VIP but large group
      expect(analysis.suggestedPriority).toBe('LARGE_GROUP');
      expect(analysis.reasons).toContain('Large party size: 10 people');
    });

    it('should detect VIP from notes', () => {
      const analysis = AutoSchedulingService.analyzeVIPStatus(
        {
          customer: { name: 'Special Customer', phone: '555-0003', email: 'special@example.com' },
          partySize: 3,
          priority: 'STANDARD',
          notes: 'VIP customer with special requests'
        },
        [],
        { vipThreshold: 0.2 }
      );

      expect(analysis.isVIP).toBe(true);
      expect(analysis.reasons).toContain('VIP mentioned in notes');
    });

    it('should handle customers with no history', () => {
      const analysis = AutoSchedulingService.analyzeVIPStatus(
        {
          customer: { name: 'New Customer', phone: '555-0004', email: 'new@example.com' },
          partySize: 2,
          priority: 'STANDARD'
        },
        [],
        { minHistoryReservations: 3 }
      );

      expect(analysis.isVIP).toBe(false);
      expect(analysis.confidence).toBeLessThan(0.6);
      expect(analysis.suggestedPriority).toBe('STANDARD');
    });
  });

  describe('edge cases', () => {
    it('should handle empty tables array', () => {
      const suggestions = AutoSchedulingService.findBestTable(
        3,
        '2025-01-15T18:00:00-05:00',
        120,
        [],
        sectors,
        existingReservations,
        config
      );

      expect(suggestions).toHaveLength(0);
    });

    it('should handle empty sectors array', () => {
      const suggestions = AutoSchedulingService.findBestTable(
        3,
        '2025-01-15T18:00:00-05:00',
        120,
        tables,
        [],
        existingReservations,
        config
      );

      expect(suggestions).toHaveLength(0);
    });

    it('should handle party size outside all table capacities', () => {
      const suggestions = AutoSchedulingService.findBestTable(
        20, // Very large party
        '2025-01-15T18:00:00-05:00',
        120,
        tables,
        sectors,
        existingReservations,
        config
      );

      expect(suggestions).toHaveLength(0);
    });

    it('should handle invalid time strings gracefully', () => {
      const call = () => {
        AutoSchedulingService.findBestTable(
          3,
          'invalid-time',
          120,
          tables,
          sectors,
          existingReservations,
          config
        );
      };
      expect(() => call()).not.toThrow();
    });
  });
});
