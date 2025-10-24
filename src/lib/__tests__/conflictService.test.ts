import { describe, it, expect, beforeEach } from 'vitest';
import { buildOccupiedSlotsMap, hasConflict, canReserveSlot, getAvailableSlots } from '../conflictService';
import { Reservation, TimelineConfig, OccupiedSlotsMap } from '@/types';

describe('conflictService', () => {
  let config: TimelineConfig;
  let reservations: Reservation[];

  beforeEach(() => {
    config = {
      date: '2025-01-15',
      startHour: 8,
      endHour: 24,
      slotMinutes: 15,
      slotWidth: 60,
      viewMode: 'day',
      timezone: 'America/Argentina/Buenos_Aires'
    };

    reservations = [
      {
        id: 'res-1',
        tableId: 'table-1',
        customer: { name: 'John Doe', phone: '+1234567890' },
        partySize: 2,
        startTime: '2025-01-15T10:00:00-03:00',
        endTime: '2025-01-15T11:00:00-03:00',
        durationMinutes: 60,
        status: 'CONFIRMED',
        priority: 'STANDARD',
        createdAt: '2025-01-15T09:00:00-03:00',
        updatedAt: '2025-01-15T09:00:00-03:00'
      },
      {
        id: 'res-2',
        tableId: 'table-1',
        customer: { name: 'Jane Smith', phone: '+1234567891' },
        partySize: 4,
        startTime: '2025-01-15T12:00:00-03:00',
        endTime: '2025-01-15T13:30:00-03:00',
        durationMinutes: 90,
        status: 'CONFIRMED',
        priority: 'STANDARD',
        createdAt: '2025-01-15T09:00:00-03:00',
        updatedAt: '2025-01-15T09:00:00-03:00'
      },
      {
        id: 'res-3',
        tableId: 'table-2',
        customer: { name: 'Bob Wilson', phone: '+1234567892' },
        partySize: 6,
        startTime: '2025-01-15T11:00:00-03:00',
        endTime: '2025-01-15T12:00:00-03:00',
        durationMinutes: 60,
        status: 'CONFIRMED',
        priority: 'VIP',
        createdAt: '2025-01-15T09:00:00-03:00',
        updatedAt: '2025-01-15T09:00:00-03:00'
      }
    ];
  });

  describe('buildOccupiedSlotsMap', () => {
    it('should build an empty map when no reservations exist', () => {
      const result = buildOccupiedSlotsMap([], config);
      expect(result).toEqual({});
    });


    it('should correctly map occupied slots for a single reservation', () => {
      const singleReservation = [reservations[0]]; // 10:00-11:00 (slots 40-44)
      const result = buildOccupiedSlotsMap(singleReservation, config);
      
      expect(result['table-1']).toBeDefined();
      expect(result['table-1'].has(40)).toBe(true);  // 10:00
      expect(result['table-1'].has(41)).toBe(true);  // 10:15
      expect(result['table-1'].has(42)).toBe(true); // 10:30
      expect(result['table-1'].has(43)).toBe(true); // 10:45
      expect(result['table-1'].has(44)).toBe(false); // 11:00 (exclusive)
    });

    it('should handle multiple reservations on the same table', () => {
      const result = buildOccupiedSlotsMap(reservations, config);
      
      // Table 1 should have slots 40-44 (10:00-11:00) and 48-54 (12:00-13:30)
      expect(result['table-1'].has(40)).toBe(true);   // 10:00
      expect(result['table-1'].has(43)).toBe(true);  // 10:45
      expect(result['table-1'].has(44)).toBe(false); // 11:00 (gap)
      expect(result['table-1'].has(48)).toBe(true);  // 12:00
      expect(result['table-1'].has(53)).toBe(true);  // 13:15
      expect(result['table-1'].has(54)).toBe(false); // 13:30 (exclusive)
    });

    it('should handle reservations on different tables', () => {
      const result = buildOccupiedSlotsMap(reservations, config);
      
      expect(result['table-1']).toBeDefined();
      expect(result['table-2']).toBeDefined();
      expect(result['table-1']).not.toBe(result['table-2']);
    });
  });

  describe('hasConflict', () => {
    let occupiedSlots: OccupiedSlotsMap;

    beforeEach(() => {
      occupiedSlots = buildOccupiedSlotsMap(reservations, config);
    });

    it('should return false for a completely free time slot', () => {
      // Check 9:00-9:30 (slots 36-38) - should be free
      const hasConf = hasConflict('table-1', 36, 38, occupiedSlots);
      expect(hasConf).toBe(false);
    });

    it('should return true for a fully overlapping time slot', () => {
      // Check 10:15-10:45 (slots 41-43) - overlaps with res-1
      const hasConf = hasConflict('table-1', 41, 43, occupiedSlots);
      expect(hasConf).toBe(true);
    });

    it('should return true for partial overlap at the start', () => {
      // Check 9:45-10:15 (slots 39-41) - overlaps with res-1 start
      const hasConf = hasConflict('table-1', 39, 41, occupiedSlots);
      expect(hasConf).toBe(true);
    });

    it('should return true for partial overlap at the end', () => {
      // Check 10:45-11:15 (slots 43-45) - overlaps with res-1 end
      const hasConf = hasConflict('table-1', 43, 45, occupiedSlots);
      expect(hasConf).toBe(true);
    });

    it('should return true for contained overlap (new reservation inside existing)', () => {
      // Check 10:15-10:30 (slots 41-42) - completely inside res-1
      const hasConf = hasConflict('table-1', 41, 42, occupiedSlots);
      expect(hasConf).toBe(true);
    });

    it('should return true for containing overlap (new reservation contains existing)', () => {
      // Check 9:30-11:30 (slots 38-46) - contains res-1
      const hasConf = hasConflict('table-1', 38, 46, occupiedSlots);
      expect(hasConf).toBe(true);
    });

    it('should return false for no conflict on a different table', () => {
      // Check table-2 during table-1's occupied time
      const hasConf = hasConflict('table-2', 8, 12, occupiedSlots);
      expect(hasConf).toBe(false);
    });

    it('should return false when checking a table with no reservations', () => {
      const hasConf = hasConflict('table-3', 8, 12, occupiedSlots);
      expect(hasConf).toBe(false);
    });

    it('should handle edge case of checking empty slot range', () => {
      const hasConf = hasConflict('table-1', 8, 8, occupiedSlots);
      expect(hasConf).toBe(false);
    });
  });

  describe('canReserveSlot', () => {
    it('should return true for a free slot', () => {
      const canReserve = canReserveSlot(reservations, 'table-1', 36, 38, config);
      expect(canReserve).toBe(true);
    });

    it('should return false for a conflicting slot', () => {
      const canReserve = canReserveSlot(reservations, 'table-1', 40, 44, config);
      expect(canReserve).toBe(false);
    });

    it('should return true when ignoring a specific reservation', () => {
      // This would normally conflict, but we're ignoring res-1
      const canReserve = canReserveSlot(reservations, 'table-1', 40, 44, config, 'res-1');
      expect(canReserve).toBe(true);
    });

    it('should return false when ignoring wrong reservation', () => {
      // Ignoring res-2 but checking against res-1
      const canReserve = canReserveSlot(reservations, 'table-1', 40, 44, config, 'res-2');
      expect(canReserve).toBe(false);
    });
  });

  describe('getAvailableSlots', () => {
    it('should return all slots when no reservations exist', () => {
      const available = getAvailableSlots([], 'table-1', 0, 10, config);
      expect(available).toEqual([[0, 10]]);
    });

    it('should return available slots around existing reservations', () => {
      const available = getAvailableSlots(reservations, 'table-1', 0, 20, config);
      
      // Should have slots before 10:00, between 11:00-12:00, and after 13:30
      expect(available.length).toBeGreaterThan(0);
      
      // Check that no available slot overlaps with occupied slots
      const occupiedSlots = buildOccupiedSlotsMap(reservations, config);
      const tableSlots = occupiedSlots['table-1'] || new Set();
      
      for (const [start, end] of available) {
        for (let i = start; i < end; i++) {
          expect(tableSlots.has(i)).toBe(false);
        }
      }
    });

    it('should return empty array when all slots are occupied', () => {
      // Create a reservation that covers the entire range
      const fullDayReservation: Reservation = {
        id: 'full-day',
        tableId: 'table-3',
        customer: { name: 'Full Day', phone: '+1234567899' },
        partySize: 2,
        startTime: '2025-01-15T08:00:00-03:00',
        endTime: '2025-01-15T20:00:00-03:00',
        durationMinutes: 720,
        status: 'CONFIRMED',
        priority: 'STANDARD',
        createdAt: '2025-01-15T09:00:00-03:00',
        updatedAt: '2025-01-15T09:00:00-03:00'
      };

      const available = getAvailableSlots([fullDayReservation], 'table-3', 32, 80, config);
      expect(available).toEqual([]);
    });

    it('should handle single available slot', () => {
      // Create reservations that leave only one slot free
      const beforeReservation: Reservation = {
        id: 'before',
        tableId: 'table-4',
        customer: { name: 'Before', phone: '+1234567898' },
        partySize: 2,
        startTime: '2025-01-15T10:00:00-03:00',
        endTime: '2025-01-15T10:15:00-03:00',
        durationMinutes: 15,
        status: 'CONFIRMED',
        priority: 'STANDARD',
        createdAt: '2025-01-15T09:00:00-03:00',
        updatedAt: '2025-01-15T09:00:00-03:00'
      };

      const afterReservation: Reservation = {
        id: 'after',
        tableId: 'table-4',
        customer: { name: 'After', phone: '+1234567897' },
        partySize: 2,
        startTime: '2025-01-15T10:30:00-03:00',
        endTime: '2025-01-15T10:45:00-03:00',
        durationMinutes: 15,
        status: 'CONFIRMED',
        priority: 'STANDARD',
        createdAt: '2025-01-15T09:00:00-03:00',
        updatedAt: '2025-01-15T09:00:00-03:00'
      };

      const available = getAvailableSlots([beforeReservation, afterReservation], 'table-4', 32, 80, config);
      
      // Should have one available slot at 10:15-10:30 (slot 41-42)
      expect(available).toContainEqual([41, 42]);
    });
  });

  describe('edge cases', () => {
    it('should handle reservations with zero duration', () => {
      const zeroDurationReservation: Reservation = {
        id: 'zero-duration',
        tableId: 'table-5',
        customer: { name: 'Zero Duration', phone: '+1234567896' },
        partySize: 2,
        startTime: '2025-01-15T10:00:00-03:00',
        endTime: '2025-01-15T10:00:00-03:00',
        durationMinutes: 0,
        status: 'CONFIRMED',
        priority: 'STANDARD',
        createdAt: '2025-01-15T09:00:00-03:00',
        updatedAt: '2025-01-15T09:00:00-03:00'
      };

      const result = buildOccupiedSlotsMap([zeroDurationReservation], config);
      expect(result['table-5']).toBeDefined();
      expect(result['table-5'].size).toBe(0);
    });

    it('should handle reservations that span multiple days', () => {
      const multiDayReservation: Reservation = {
        id: 'multi-day',
        tableId: 'table-6',
        customer: { name: 'Multi Day', phone: '+1234567895' },
        partySize: 2,
        startTime: '2025-01-15T23:00:00-03:00',
        endTime: '2025-01-16T01:00:00-03:00',
        durationMinutes: 120,
        status: 'CONFIRMED',
        priority: 'STANDARD',
        createdAt: '2025-01-15T09:00:00-03:00',
        updatedAt: '2025-01-15T09:00:00-03:00'
      };

      const result = buildOccupiedSlotsMap([multiDayReservation], config);
      expect(result['table-6']).toBeDefined();
      // Should only include slots within the configured day (8-24 hours)
      expect(result['table-6'].has(92)).toBe(true); // 23:00 slot
      expect(result['table-6'].has(93)).toBe(true); // 23:15 slot
      expect(result['table-6'].has(94)).toBe(true); // 23:30 slot
      expect(result['table-6'].has(95)).toBe(true); // 23:45 slot
    });
  });
});
