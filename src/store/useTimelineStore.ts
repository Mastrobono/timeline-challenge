import { create } from 'zustand';
import type { Table, Sector, Reservation, TableId, SectorId, ReservationId } from '@/types';

export interface TimelineState {
  reservationsById: Record<ReservationId, Reservation>;
  reservationsByTable: Record<TableId, ReservationId[]>;
  tablesById: Record<TableId, Table>;
  sectorsById: Record<SectorId, Sector>;
  ui: {
    slotWidth: number;
    zoom: number;
    collapsedSectors: Record<SectorId, boolean>;
    visibleDate: string;
  };
}

export interface TimelineActions {
  addReservation: (reservation: Reservation) => void;
  updateReservation: (resId: ReservationId, patch: Partial<Reservation>) => void;
  deleteReservation: (resId: ReservationId) => void;
  insertReservationToTableIndex: (tableId: TableId, resId: ReservationId) => void;
  removeReservationFromTable: (tableId: TableId, resId: ReservationId) => void;
  upsertTable: (table: Table) => void;
  upsertSector: (sector: Sector) => void;
  setSlotWidth: (px: number) => void;
  setVisibleDate: (date: string) => void;
  toggleSectorCollapse: (sectorId: SectorId) => void;
}

export type TimelineStore = TimelineState & TimelineActions;

/**
 * Helper function to find the correct insertion index for a reservation
 * to maintain sorted order by startSlot
 * 
 * @example
 * // reservationIds comes from state.reservationsByTable[tableId]
 * // Example: ["res-001", "res-003", "res-005"] (sorted by startSlot: 10, 20, 30)
 * // New reservation with startSlot: 15 should be inserted at index 1
 * const insertIndex = findInsertIndex(tableReservations, newReservation, reservationsById);
 */
export function findInsertIndex(
  reservationIds: ReservationId[],
  reservation: Reservation,
  reservationsById: Record<ReservationId, Reservation>
): number {
  const { startSlot } = reservation;
  
  for (let i = 0; i < reservationIds.length; i++) {
    const existingReservation = reservationsById[reservationIds[i]];
    if (existingReservation && existingReservation.startSlot > startSlot) {
      return i;
    }
  }
  
  return reservationIds.length;
}

const useTimelineStore = create<TimelineStore>((set, get) => ({
  // Initial state
  reservationsById: {},
  reservationsByTable: {},
  tablesById: {},
  sectorsById: {},
  ui: {
    slotWidth: 60,
    zoom: 1,
    collapsedSectors: {},
    visibleDate: new Date().toISOString().split('T')[0], // "2024-01-15"
  },

  // Actions
  addReservation: (reservation: Reservation) => {
    set((state) => {
      const { id, tableId } = reservation;
      
      // Add to reservationsById
      const newReservationsById = {
        ...state.reservationsById,
        [id]: reservation,
      };
      
      // Add to reservationsByTable with proper sorting
      const tableReservations = state.reservationsByTable[tableId] || [];
      const insertIndex = findInsertIndex(tableReservations, reservation, newReservationsById);
      
      const newTableReservations = [...tableReservations];
      newTableReservations.splice(insertIndex, 0, id);
      
      return {
        ...state,
        reservationsById: newReservationsById,
        reservationsByTable: {
          ...state.reservationsByTable,
          [tableId]: newTableReservations,
        },
      };
    });
  },

  updateReservation: (resId: ReservationId, patch: Partial<Reservation>) => {
    set((state) => {
      const existingReservation = state.reservationsById[resId];
      if (!existingReservation) return state;

      const updatedReservation = { ...existingReservation, ...patch };
      const { tableId: oldTableId, startSlot: oldStartSlot } = existingReservation;
      const { tableId: newTableId, startSlot: newStartSlot } = updatedReservation;

      // Update reservationsById
      const newReservationsById = {
        ...state.reservationsById,
        [resId]: updatedReservation,
      };

      let newReservationsByTable = { ...state.reservationsByTable };

      // If tableId or startSlot changed, we need to move the reservation
      if (oldTableId !== newTableId || oldStartSlot !== newStartSlot) {
        // Remove from old table
        newReservationsByTable = {
          ...newReservationsByTable,
          [oldTableId]: (newReservationsByTable[oldTableId] || []).filter(id => id !== resId),
        };

        // Add to new table with proper sorting
        const targetTableReservations = newReservationsByTable[newTableId] || [];
        const insertIndex = findInsertIndex(targetTableReservations, updatedReservation, newReservationsById);
        
        const newTargetTableReservations = [...targetTableReservations];
        newTargetTableReservations.splice(insertIndex, 0, resId);

        newReservationsByTable = {
          ...newReservationsByTable,
          [newTableId]: newTargetTableReservations,
        };
      }

      return {
        ...state,
        reservationsById: newReservationsById,
        reservationsByTable: newReservationsByTable,
      };
    });
  },

  deleteReservation: (resId: ReservationId) => {
    set((state) => {
      const reservation = state.reservationsById[resId];
      if (!reservation) return state;

      const { tableId } = reservation;

      // Remove from reservationsById
      const { [resId]: deleted, ...newReservationsById } = state.reservationsById;

      // Remove from reservationsByTable
      const newReservationsByTable = {
        ...state.reservationsByTable,
        [tableId]: (state.reservationsByTable[tableId] || []).filter(id => id !== resId),
      };

      return {
        ...state,
        reservationsById: newReservationsById,
        reservationsByTable: newReservationsByTable,
      };
    });
  },

  insertReservationToTableIndex: (tableId: TableId, resId: ReservationId) => {
    set((state) => {
      const reservation = state.reservationsById[resId];
      if (!reservation) return state;

      const tableReservations = state.reservationsByTable[tableId] || [];
      const insertIndex = findInsertIndex(tableReservations, reservation, state.reservationsById);
      
      const newTableReservations = [...tableReservations];
      newTableReservations.splice(insertIndex, 0, resId);

      return {
        ...state,
        reservationsByTable: {
          ...state.reservationsByTable,
          [tableId]: newTableReservations,
        },
      };
    });
  },

  removeReservationFromTable: (tableId: TableId, resId: ReservationId) => {
    set((state) => {
      const tableReservations = state.reservationsByTable[tableId] || [];
      const filteredReservations = tableReservations.filter(id => id !== resId);

      return {
        ...state,
        reservationsByTable: {
          ...state.reservationsByTable,
          [tableId]: filteredReservations,
        },
      };
    });
  },

  upsertTable: (table: Table) => {
    set((state) => ({
      ...state,
      tablesById: {
        ...state.tablesById,
        [table.id]: table,
      },
    }));
  },

  upsertSector: (sector: Sector) => {
    set((state) => ({
      ...state,
      sectorsById: {
        ...state.sectorsById,
        [sector.id]: sector,
      },
    }));
  },

  setSlotWidth: (px: number) => {
    set((state) => ({
      ...state,
      ui: {
        ...state.ui,
        slotWidth: px,
      },
    }));
  },

  setVisibleDate: (date: string) => {
    set((state) => ({
      ...state,
      ui: {
        ...state.ui,
        visibleDate: date,
      },
    }));
  },

  toggleSectorCollapse: (sectorId: SectorId) => {
    set((state) => ({
      ...state,
      ui: {
        ...state.ui,
        collapsedSectors: {
          ...state.ui.collapsedSectors,
          [sectorId]: !state.ui.collapsedSectors[sectorId],
        },
      },
    }));
  },
}));

export default useTimelineStore;
