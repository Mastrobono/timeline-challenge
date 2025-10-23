import { describe, it, expect, beforeEach } from 'vitest';
import { create } from 'zustand';
import useTimelineStore, { findInsertIndex } from '../useTimelineStore';
import type { Table, Sector, Reservation } from '@/types';

// Test fixtures
const createTestSector = (id: string, name: string, sortOrder: number = 0): Sector => ({
  id,
  name,
  sortOrder,
});

const createTestTable = (id: string, sectorId: string, name: string, capacity = { min: 2, max: 4 }, sortOrder = 0): Table => ({
  id,
  sectorId,
  name,
  capacity,
  sortOrder,
});

const createTestReservation = (
  id: string,
  tableId: string,
  startSlot: number,
  endSlot: number,
  customerName: string,
  partySize: number,
  status: Reservation['status'] = 'CONFIRMED'
): Reservation => ({
  id,
  tableId,
  startSlot,
  endSlot,
  customerName,
  partySize,
  status,
});

// Helper to reset store state between tests
const resetStore = () => {
  useTimelineStore.setState({
    reservationsById: {},
    reservationsByTable: {},
    tablesById: {},
    sectorsById: {},
    ui: {
      slotWidth: 60,
      zoom: 1,
      collapsedSectors: {},
      visibleDate: new Date().toISOString().split('T')[0],
    },
  });
};

describe('useTimelineStore', () => {
  beforeEach(() => {
    resetStore();
  });

  describe('addReservation', () => {
    it('should add reservation to reservationsById and insert into correct table position', () => {
      const table = createTestTable('table1', 'sector1', 'Table 1');
      const reservation = createTestReservation('res1', 'table1', 10, 12, 'John Doe', 2);

      useTimelineStore.getState().upsertTable(table);
      useTimelineStore.getState().addReservation(reservation);

      const state = useTimelineStore.getState();
      expect(state.reservationsById['res1']).toEqual(reservation);
      expect(state.reservationsByTable['table1']).toEqual(['res1']);
    });

    it('should maintain sorted order by startSlot when adding multiple reservations', () => {
      const table = createTestTable('table1', 'sector1', 'Table 1');
      useTimelineStore.getState().upsertTable(table);

      // Add reservations out of order
      const res1 = createTestReservation('res1', 'table1', 20, 22, 'Alice', 2); 
      const res2 = createTestReservation('res2', 'table1', 10, 12, 'Bob', 2);
      const res3 = createTestReservation('res3', 'table1', 15, 17, 'Charlie', 2);

      useTimelineStore.getState().addReservation(res1);
      useTimelineStore.getState().addReservation(res2);
      useTimelineStore.getState().addReservation(res3);

      const state = useTimelineStore.getState();
      expect(state.reservationsByTable['table1']).toEqual(['res2', 'res3', 'res1']); // sorted by startSlot
    });

    it('should initialize table array if it does not exist', () => {
      const reservation = createTestReservation('res1', 'table1', 10, 12, 'John Doe', 2);

      useTimelineStore.getState().addReservation(reservation);

      const state = useTimelineStore.getState();
      expect(state.reservationsByTable['table1']).toEqual(['res1']);
    });
  });

  describe('updateReservation', () => {
    it('should update reservation in reservationsById', () => {
      const table = createTestTable('table1', 'sector1', 'Table 1');
      const reservation = createTestReservation('res1', 'table1', 10, 12, 'John Doe', 2);

      useTimelineStore.getState().upsertTable(table);
      useTimelineStore.getState().addReservation(reservation);
      useTimelineStore.getState().updateReservation('res1', { customerName: 'Jane Doe' });

      const state = useTimelineStore.getState();
      expect(state.reservationsById['res1'].customerName).toBe('Jane Doe');
    });

    it('should move reservation when tableId changes', () => {
      const table1 = createTestTable('table1', 'sector1', 'Table 1');
      const table2 = createTestTable('table2', 'sector1', 'Table 2');
      const reservation = createTestReservation('res1', 'table1', 10, 12, 'John Doe', 2);

      useTimelineStore.getState().upsertTable(table1);
      useTimelineStore.getState().upsertTable(table2);
      useTimelineStore.getState().addReservation(reservation);
      useTimelineStore.getState().updateReservation('res1', { tableId: 'table2' });

      const state = useTimelineStore.getState();
      expect(state.reservationsByTable['table1']).toEqual([]);
      expect(state.reservationsByTable['table2']).toEqual(['res1']);
    });

    it('should re-sort when startSlot changes', () => {
      const table = createTestTable('table1', 'sector1', 'Table 1');
      const res1 = createTestReservation('res1', 'table1', 10, 12, 'Alice', 2);
      const res2 = createTestReservation('res2', 'table1', 20, 22, 'Bob', 2);

      useTimelineStore.getState().upsertTable(table);
      useTimelineStore.getState().addReservation(res1);
      useTimelineStore.getState().addReservation(res2);

      // Change res1 startSlot to be after res2
      useTimelineStore.getState().updateReservation('res1', { startSlot: 25 });

      const state = useTimelineStore.getState();
      expect(state.reservationsByTable['table1']).toEqual(['res2', 'res1']); // res2 first, then res1
    });
  });

  describe('deleteReservation', () => {
    it('should remove reservation from both maps', () => {
      const table = createTestTable('table1', 'sector1', 'Table 1');
      const reservation = createTestReservation('res1', 'table1', 10, 12, 'John Doe', 2);

      useTimelineStore.getState().upsertTable(table);
      useTimelineStore.getState().addReservation(reservation);
      useTimelineStore.getState().deleteReservation('res1');

      const state = useTimelineStore.getState();
      expect(state.reservationsById['res1']).toBeUndefined();
      expect(state.reservationsByTable['table1']).toEqual([]);
    });

    it('should handle deletion of non-existent reservation gracefully', () => {
      expect(() => {
        useTimelineStore.getState().deleteReservation('non-existent');
      }).not.toThrow();
    });
  });

  describe('insertReservationToTableIndex', () => {
    it('should insert reservation at correct sorted position', () => {
      const table = createTestTable('table1', 'sector1', 'Table 1');
      const res1 = createTestReservation('res1', 'table1', 10, 12, 'Alice', 2);
      const res2 = createTestReservation('res2', 'table1', 20, 22, 'Bob', 2);
      const res3 = createTestReservation('res3', 'table1', 15, 17, 'Charlie', 2);

      useTimelineStore.getState().upsertTable(table);
      useTimelineStore.getState().addReservation(res1);
      useTimelineStore.getState().addReservation(res2);
      useTimelineStore.getState().addReservation(res3); // Add res3 to reservationsById first
      
      // Remove res3 from table array and then re-insert it to test insertReservationToTableIndex
      useTimelineStore.getState().removeReservationFromTable('table1', 'res3');
      useTimelineStore.getState().insertReservationToTableIndex('table1', 'res3');

      const state = useTimelineStore.getState();
      expect(state.reservationsByTable['table1']).toEqual(['res1', 'res3', 'res2']);
    });
  });

  describe('removeReservationFromTable', () => {
    it('should remove reservation from table array', () => {
      const table = createTestTable('table1', 'sector1', 'Table 1');
      const reservation = createTestReservation('res1', 'table1', 10, 12, 'John Doe', 2);

      useTimelineStore.getState().upsertTable(table);
      useTimelineStore.getState().addReservation(reservation);
      useTimelineStore.getState().removeReservationFromTable('table1', 'res1');

      const state = useTimelineStore.getState();
      expect(state.reservationsByTable['table1']).toEqual([]);
    });
  });

  describe('upsertTable', () => {
    it('should add new table to tablesById', () => {
      const table = createTestTable('table1', 'sector1', 'Table 1');
      
      useTimelineStore.getState().upsertTable(table);

      const state = useTimelineStore.getState();
      expect(state.tablesById['table1']).toEqual(table);
    });

    it('should update existing table', () => {
      const table = createTestTable('table1', 'sector1', 'Table 1');
      const updatedTable = { ...table, name: 'Updated Table 1' };

      useTimelineStore.getState().upsertTable(table);
      useTimelineStore.getState().upsertTable(updatedTable);

      const state = useTimelineStore.getState();
      expect(state.tablesById['table1'].name).toBe('Updated Table 1');
    });
  });

  describe('upsertSector', () => {
    it('should add new sector to sectorsById', () => {
      const sector = createTestSector('sector1', 'Main Dining');
      
      useTimelineStore.getState().upsertSector(sector);

      const state = useTimelineStore.getState();
      expect(state.sectorsById['sector1']).toEqual(sector);
    });

    it('should update existing sector', () => {
      const sector = createTestSector('sector1', 'Main Dining');
      const updatedSector = { ...sector, name: 'Updated Main Dining' };

      useTimelineStore.getState().upsertSector(sector);
      useTimelineStore.getState().upsertSector(updatedSector);

      const state = useTimelineStore.getState();
      expect(state.sectorsById['sector1'].name).toBe('Updated Main Dining');
    });
  });

  describe('UI state management', () => {
    it('should update slotWidth', () => {
      useTimelineStore.getState().setSlotWidth(80);

      const state = useTimelineStore.getState();
      expect(state.ui.slotWidth).toBe(80);
    });

    it('should update visibleDate', () => {
      const newDate = '2024-01-15';
      useTimelineStore.getState().setVisibleDate(newDate);

      const state = useTimelineStore.getState();
      expect(state.ui.visibleDate).toBe(newDate);
    });

    it('should toggle sector collapse', () => {
      useTimelineStore.getState().toggleSectorCollapse('sector1');

      const state = useTimelineStore.getState();
      expect(state.ui.collapsedSectors['sector1']).toBe(true);

      useTimelineStore.getState().toggleSectorCollapse('sector1');
      const updatedState = useTimelineStore.getState();
      expect(updatedState.ui.collapsedSectors['sector1']).toBe(false);
    });
  });
});

describe('findInsertIndex helper', () => {
  it('should return 0 for empty array', () => {
    const reservation = createTestReservation('res1', 'table1', 10, 12, 'John', 2);
    const index = findInsertIndex([], reservation, {});
    expect(index).toBe(0);
  });

  it('should return correct index for insertion at beginning', () => {
    const reservationsById = {
      'res1': createTestReservation('res1', 'table1', 20, 22, 'Alice', 2),
    };
    const newReservation = createTestReservation('res2', 'table1', 10, 12, 'Bob', 2);
    const index = findInsertIndex(['res1'], newReservation, reservationsById);
    expect(index).toBe(0);
  });

  it('should return correct index for insertion at end', () => {
    const reservationsById = {
      'res1': createTestReservation('res1', 'table1', 10, 12, 'Alice', 2),
    };
    const newReservation = createTestReservation('res2', 'table1', 20, 22, 'Bob', 2);
    const index = findInsertIndex(['res1'], newReservation, reservationsById);
    expect(index).toBe(1);
  });

  it('should return correct index for insertion in middle', () => {
    const reservationsById = {
      'res1': createTestReservation('res1', 'table1', 10, 12, 'Alice', 2),
      'res2': createTestReservation('res2', 'table1', 30, 32, 'Charlie', 2),
    };
    const newReservation = createTestReservation('res3', 'table1', 20, 22, 'Bob', 2);
    const index = findInsertIndex(['res1', 'res2'], newReservation, reservationsById);
    expect(index).toBe(1);
  });
});
