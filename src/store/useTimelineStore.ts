import { create } from 'zustand';
import { addDays, addWeeks, addMonths, startOfWeek, startOfMonth, endOfMonth, format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { getTodayInTimezone, getReservationIsoDate } from '@/lib/timeUtils';
import type { Table, Sector, Reservation, UUID, RestaurantConfig } from '@/types';

export interface TimelineState {
  reservationsById: Record<UUID, Reservation>;
  reservationsByTable: Record<UUID, UUID[]>;
  tablesById: Record<UUID, Table>;
  sectorsById: Record<UUID, Sector>;
  restaurantConfig: RestaurantConfig | null;
  ui: {
    slotWidth: number;
    zoom: number;
    collapsedSectors: Record<UUID, boolean>;
    visibleDate: string;
    viewMode: 'day' | '3-day' | 'week' | 'month';
    startHour: number;
  };
}

export interface TimelineActions {
  addReservation: (reservation: Reservation) => void;
  updateReservation: (resId: UUID, patch: Partial<Reservation>) => void;
  deleteReservation: (resId: UUID) => void;
  insertReservationToTableIndex: (tableId: UUID, resId: UUID) => void;
  removeReservationFromTable: (tableId: UUID, resId: UUID) => void;
  upsertTable: (table: Table) => void;
  upsertSector: (sector: Sector) => void;
  setRestaurantConfig: (config: RestaurantConfig) => void;
  setSlotWidth: (px: number) => void;
  setVisibleDate: (date: string) => void;
  toggleSectorCollapse: (sectorId: UUID) => void;
  setViewMode: (mode: 'day' | '3-day' | 'week' | 'month') => void;
  goToNextPeriod: () => void;
  goToPrevPeriod: () => void;
  goToToday: () => void;
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
  reservationIds: UUID[],
  reservation: Reservation,
  reservationsById: Record<UUID, Reservation>
): number {
  const { startTime } = reservation;
  
  for (let i = 0; i < reservationIds.length; i++) {
    const existingReservation = reservationsById[reservationIds[i]];
    if (existingReservation && existingReservation.startTime > startTime) {
      return i;
    }
  }
  
  return reservationIds.length;
}

const useTimelineStore = create<TimelineStore>((set) => ({
  // Initial state
  reservationsById: {},
  reservationsByTable: {},
  tablesById: {},
  sectorsById: {},
  restaurantConfig: null,
  ui: {
    slotWidth: 60, // Increased back to 60 for better visibility
    zoom: 1,
    collapsedSectors: {},
    visibleDate: '2025-10-21', // October 21, 2025
    viewMode: 'day',
    startHour: 7, // Restaurant opens at 7am
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

  updateReservation: (resId: UUID, patch: Partial<Reservation>) => {
    set((state) => {
      const existingReservation = state.reservationsById[resId];
      if (!existingReservation) return state;

      const updatedReservation = { ...existingReservation, ...patch };
      const { tableId: oldTableId, startTime: oldStartTime } = existingReservation;
      const { tableId: newTableId, startTime: newStartTime } = updatedReservation;

      // Update reservationsById
      const newReservationsById = {
        ...state.reservationsById,
        [resId]: updatedReservation,
      };

      let newReservationsByTable = { ...state.reservationsByTable };

      // If tableId or startTime changed, we need to move the reservation
      if (oldTableId !== newTableId || oldStartTime !== newStartTime) {
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

  deleteReservation: (resId: UUID) => {
    set((state) => {
      const reservation = state.reservationsById[resId];
      if (!reservation) return state;

      const { tableId } = reservation;

      // Remove from reservationsById
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [resId]: _, ...newReservationsById } = state.reservationsById;

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

  insertReservationToTableIndex: (tableId: UUID, resId: UUID) => {
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

  removeReservationFromTable: (tableId: UUID, resId: UUID) => {
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

  toggleSectorCollapse: (sectorId: UUID) => {
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

  setViewMode: (mode: 'day' | '3-day' | 'week' | 'month') => {
    set((state) => ({
      ...state,
      ui: {
        ...state.ui,
        viewMode: mode,
      },
    }));
  },

  goToNextPeriod: () => {
    set((state) => {
      const { visibleDate, viewMode } = state.ui;
      const currentDate = new Date(visibleDate);
      const timezone = 'America/Argentina/Buenos_Aires';
      
      let newDate: Date;
      
      switch (viewMode) {
        case 'day':
          newDate = addDays(currentDate, 1);
          break;
        case '3-day':
          newDate = addDays(currentDate, 3);
          break;
        case 'week':
          newDate = addWeeks(currentDate, 1);
          break;
        case 'month':
          newDate = addMonths(currentDate, 1);
          break;
        default:
          newDate = currentDate;
      }
      
      return {
        ...state,
        ui: {
          ...state.ui,
          visibleDate: newDate.toISOString().split('T')[0],
        },
      };
    });
  },

  goToPrevPeriod: () => {
    set((state) => {
      const { visibleDate, viewMode } = state.ui;
      const currentDate = new Date(visibleDate);
      const timezone = 'America/Argentina/Buenos_Aires';
      
      let newDate: Date;
      
      switch (viewMode) {
        case 'day':
          newDate = addDays(currentDate, -1);
          break;
        case '3-day':
          newDate = addDays(currentDate, -3);
          break;
        case 'week':
          newDate = addWeeks(currentDate, -1);
          break;
        case 'month':
          newDate = addMonths(currentDate, -1);
          break;
        default:
          newDate = currentDate;
      }
      
      return {
        ...state,
        ui: {
          ...state.ui,
          visibleDate: newDate.toISOString().split('T')[0],
        },
      };
    });
  },

  goToToday: () => {
    set((state) => ({
      ...state,
      ui: {
        ...state.ui,
        visibleDate: getTodayInTimezone('America/Argentina/Buenos_Aires'),
      },
    }));
  },

  setRestaurantConfig: (config: RestaurantConfig) => {
    set((state) => ({
      ...state,
      restaurantConfig: config,
      ui: {
        ...state.ui,
        startHour: config.operatingHours.startHour,
        slotWidth: config.slotConfiguration.defaultSlotWidth,
      },
    }));
  },

}));

// Helper function to get valid reservations for a sector
export const getValidReservationsForSector = (
  sectorId: UUID, 
  date: string, 
  state: TimelineState
): number => {
  const { reservationsById, tablesById, restaurantConfig, ui } = state;
  
  // Count valid reservations for this sector on the given date
  const validReservations = Object.values(reservationsById).filter((reservation) => {
    // Type guard to ensure reservation is of type Reservation
    if (!reservation || typeof reservation !== 'object' || !('tableId' in reservation)) return false;
    
    const res = reservation as Reservation;
    
    // Check if reservation is for a table in this sector
    const table = tablesById[res.tableId];
    if (!table || table.sectorId !== sectorId) return false;
    
    // Check if reservation is for the correct date
    const reservationDate = getReservationIsoDate(res, date, {
      date: date,
      startHour: restaurantConfig?.operatingHours.startHour || ui.startHour,
      endHour: restaurantConfig?.operatingHours.endHour || 23,
      slotMinutes: restaurantConfig?.slotConfiguration.slotMinutes || 15,
      slotWidth: 30,
      timezone: restaurantConfig?.timezone || 'America/Argentina/Buenos_Aires'
    });
    
    if (reservationDate !== date) return false;
    
    // Filter out reservations outside restaurant hours
    if (res.startTime) {
      const startTime = new Date(res.startTime);
      const reservationHour = startTime.getHours();
      const restaurantStartHour = restaurantConfig?.operatingHours.startHour || ui.startHour;
      const restaurantEndHour = restaurantConfig?.operatingHours.endHour || 23;
      return reservationHour >= restaurantStartHour && reservationHour < restaurantEndHour;
    }
    
    return true;
  });
  
  return validReservations.length;
};

export default useTimelineStore;
