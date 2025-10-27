import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { addDays, addWeeks, addMonths } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { getTodayInTimezone } from '@/lib/timeUtils';
import { ReservationFilterService } from '@/lib/reservationFilterService';
import { ReservationValidationService } from '@/lib/reservationValidationService';
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
  _hasHydrated: boolean;
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
  setHasHydrated: (state: boolean) => void;
  initializeWithValidation: (data: {
    reservations: Reservation[];
    tables: Table[];
    sectors: Sector[];
    restaurantConfig: RestaurantConfig;
  }) => void;
  bulkImportReservations: (reservations: Reservation[]) => void;
  clearAllReservations: () => void;
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
 * // Result: ["res-001", "res-015", "res-003", "res-005"]
 */
function findInsertIndex(
  reservationIds: UUID[], 
  newReservation: Reservation, 
  reservationsById: Record<UUID, Reservation>
): number {
  const newStartSlot = newReservation.startTime ? 
    new Date(newReservation.startTime).getHours() * 4 + 
    Math.floor(new Date(newReservation.startTime).getMinutes() / 15) : 0;
  
  for (let i = 0; i < reservationIds.length; i++) {
    const existingReservation = reservationsById[reservationIds[i]];
    if (existingReservation && existingReservation.startTime) {
      const existingStartSlot = new Date(existingReservation.startTime).getHours() * 4 + 
        Math.floor(new Date(existingReservation.startTime).getMinutes() / 15);
      
      if (newStartSlot < existingStartSlot) {
        return i;
      }
    }
  }
  
  return reservationIds.length;
}

/**
 * Helper function to get the number of valid reservations for a sector
 * Uses the centralized ReservationFilterService for consistent filtering logic
 */
export const getValidReservationsForSector = (
  sectorId: UUID, 
  date: string, 
  state: TimelineState
): number => {
  const { reservationsById, tablesById, restaurantConfig, ui } = state;
  
  // Get all tables in this sector
  const sectorTables = Object.values(tablesById).filter(table => table.sectorId === sectorId);
  const sectorTableIds = sectorTables.map(table => table.id);
  
  // Get all reservations
  const allReservations = Object.values(reservationsById);
  
  // Use the centralized filter service
  return ReservationFilterService.countValidReservationsForSector(
    allReservations,
    sectorTableIds,
    date,
    {
      date,
      startHour: ui.startHour,
      endHour: 23,
      slotMinutes: 15,
      slotWidth: 60,
      timezone: state.restaurantConfig?.timezone || 'UTC',
      viewMode: 'day'
    },
    restaurantConfig
  );
};

const useTimelineStore = create<TimelineStore>()(
  persist(
    (set) => ({
      // Initial state
      reservationsById: {},
      reservationsByTable: {},
      tablesById: {},
      sectorsById: {},
      restaurantConfig: null,
      ui: {
        slotWidth: 60,
        zoom: 1,
        collapsedSectors: {},
        visibleDate: '2025-10-24',
        viewMode: 'day',
        startHour: 7,
      },
      _hasHydrated: false,

      // Hydration state
      setHasHydrated: (state: boolean) => {
        set({ _hasHydrated: state });
      },

      // Actions
      addReservation: (reservation: Reservation) => {
        set((state) => {
          // Validate reservation times before adding
          if (reservation.endTime) {
            const endTime = new Date(reservation.endTime);
            const timezone = state.restaurantConfig?.timezone || 'UTC';
            const zonedEndTime = toZonedTime(endTime, timezone);
            const endHour = zonedEndTime.getHours();
            const endMinutes = zonedEndTime.getMinutes();
            const restaurantEndHour = state.restaurantConfig?.operatingHours.endHour || 22;
            
            // Check if reservation ends after restaurant closes (allow 1 hour buffer)
            if (endHour > restaurantEndHour + 1) {
              return state; // Don't add the reservation
            }
          }
          
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
          
          const newState = {
            ...state,
            reservationsById: newReservationsById,
            reservationsByTable: {
              ...state.reservationsByTable,
              [tableId]: newTableReservations,
            },
          };
          
          return newState;
        });
      },

      updateReservation: (resId: UUID, patch: Partial<Reservation>) => {
        set((state) => {
          const existingReservation = state.reservationsById[resId];
          if (!existingReservation) return state;

          const updatedReservation = { ...existingReservation, ...patch };
          
          // Validate reservation times before updating
          if (updatedReservation.endTime) {
            const endTime = new Date(updatedReservation.endTime);
            const timezone = state.restaurantConfig?.timezone || 'UTC';
            const zonedEndTime = toZonedTime(endTime, timezone);
            const endHour = zonedEndTime.getHours();
            const endMinutes = zonedEndTime.getMinutes();
            const restaurantEndHour = state.restaurantConfig?.operatingHours.endHour || 22;
            
            // Check if reservation ends after restaurant closes
            if (endHour > restaurantEndHour || (endHour === restaurantEndHour && endMinutes > 45)) {
              return state; // Don't update the reservation
            }
          }
          
          
          const { tableId: oldTableId, startTime: oldStartTime } = existingReservation;
          const { tableId: newTableId, startTime: newStartTime } = updatedReservation;

          // Update reservationsById
          const newReservationsById = {
            ...state.reservationsById,
            [resId]: updatedReservation,
          };

          // If table changed, move reservation between tables
          if (oldTableId !== newTableId) {
            // Remove from old table
            const oldTableReservations = state.reservationsByTable[oldTableId] || [];
            const newOldTableReservations = oldTableReservations.filter(id => id !== resId);
            
            // Add to new table with proper sorting
            const newTableReservations = state.reservationsByTable[newTableId] || [];
            const insertIndex = findInsertIndex(newTableReservations, updatedReservation, newReservationsById);
            const updatedNewTableReservations = [...newTableReservations];
            updatedNewTableReservations.splice(insertIndex, 0, resId);

            return {
              ...state,
              reservationsById: newReservationsById,
              reservationsByTable: {
                ...state.reservationsByTable,
                [oldTableId]: newOldTableReservations,
                [newTableId]: updatedNewTableReservations,
              },
            };
          }

          // If start time changed, re-sort within the same table
          if (oldStartTime !== newStartTime) {
            const tableReservations = state.reservationsByTable[newTableId] || [];
            const filteredReservations = tableReservations.filter(id => id !== resId);
            const insertIndex = findInsertIndex(filteredReservations, updatedReservation, newReservationsById);
            const newTableReservations = [...filteredReservations];
            newTableReservations.splice(insertIndex, 0, resId);

            return {
              ...state,
              reservationsById: newReservationsById,
              reservationsByTable: {
                ...state.reservationsByTable,
                [newTableId]: newTableReservations,
              },
            };
          }

          // No structural changes needed
          return {
            ...state,
            reservationsById: newReservationsById,
          };
        });
      },

      deleteReservation: (resId: UUID) => {
        set((state) => {
          const reservation = state.reservationsById[resId];
          if (!reservation) return state;

          const { tableId } = reservation;
          const tableReservations = state.reservationsByTable[tableId] || [];
          const newTableReservations = tableReservations.filter(id => id !== resId);

          const newReservationsById = { ...state.reservationsById };
          delete newReservationsById[resId];

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

      insertReservationToTableIndex: (tableId: UUID, resId: UUID) => {
        set((state) => {
          const tableReservations = state.reservationsByTable[tableId] || [];
          const newTableReservations = [...tableReservations, resId];

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
          const newTableReservations = tableReservations.filter(id => id !== resId);

          return {
            ...state,
            reservationsByTable: {
              ...state.reservationsByTable,
              [tableId]: newTableReservations,
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
            zoom: px / 60, // Calculate zoom based on slot width
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
          const { viewMode, visibleDate } = state.ui;
          let newDate: Date;

          switch (viewMode) {
            case 'day':
              newDate = addDays(new Date(visibleDate), 1);
              break;
            case '3-day':
              newDate = addDays(new Date(visibleDate), 3);
              break;
            case 'week':
              newDate = addWeeks(new Date(visibleDate), 1);
              break;
            case 'month':
              newDate = addMonths(new Date(visibleDate), 1);
              break;
            default:
              newDate = new Date(visibleDate);
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
          const { viewMode, visibleDate } = state.ui;
          let newDate: Date;

          switch (viewMode) {
            case 'day':
              newDate = addDays(new Date(visibleDate), -1);
              break;
            case '3-day':
              newDate = addDays(new Date(visibleDate), -3);
              break;
            case 'week':
              newDate = addWeeks(new Date(visibleDate), -1);
              break;
            case 'month':
              newDate = addMonths(new Date(visibleDate), -1);
              break;
            default:
              newDate = new Date(visibleDate);
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
            visibleDate: getTodayInTimezone(state.restaurantConfig?.timezone || 'UTC'),
          },
        }));
      },

      setRestaurantConfig: (config: RestaurantConfig) => {
        console.log('🏪 Store Setting Restaurant Config:', config);
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

      // Initialize store with validation
      initializeWithValidation: (data: {
        reservations: Reservation[];
        tables: Table[];
        sectors: Sector[];
        restaurantConfig: RestaurantConfig;
      }) => {
        console.log('🔄 Store Initialize With Validation:', {
          restaurantConfig: data.restaurantConfig,
          reservationsCount: data.reservations.length,
          tablesCount: data.tables.length,
          sectorsCount: data.sectors.length
        });
        
        set((state) => {
          const { reservations, tables, sectors, restaurantConfig } = data;
          
          // Validate all reservations before adding them
          const validation = ReservationValidationService.validateReservations(
            reservations,
            {
              restaurantConfig,
              tables,
              existingReservations: []
            }
          );
          
          // Build tables and sectors maps
          const tablesById = tables.reduce((acc, table) => {
            acc[table.id] = table;
            return acc;
          }, {} as Record<UUID, Table>);
          
          const sectorsById = sectors.reduce((acc, sector) => {
            acc[sector.id] = sector;
            return acc;
          }, {} as Record<UUID, Sector>);
          
          // Build reservations maps with only valid reservations
          const reservationsById = validation.validReservations.reduce((acc, reservation) => {
            acc[reservation.id] = reservation;
            return acc;
          }, {} as Record<UUID, Reservation>);
          
          const reservationsByTable = validation.validReservations.reduce((acc, reservation) => {
            if (!acc[reservation.tableId]) {
              acc[reservation.tableId] = [];
            }
            acc[reservation.tableId].push(reservation.id);
            return acc;
          }, {} as Record<UUID, UUID[]>);
          
          return {
            ...state,
            reservationsById,
            reservationsByTable,
            tablesById,
            sectorsById,
            restaurantConfig,
            ui: {
              ...state.ui,
              startHour: restaurantConfig.operatingHours.startHour,
              slotWidth: restaurantConfig.slotConfiguration.defaultSlotWidth,
            },
          };
        });
      },

      // Bulk import with validation
      bulkImportReservations: (reservations: Reservation[]) => {
        set((state) => {
          const tables = Object.values(state.tablesById);
          const existingReservations = Object.values(state.reservationsById);
          
          // Validate new reservations
          const validation = ReservationValidationService.validateReservations(
            reservations,
            {
              restaurantConfig: state.restaurantConfig,
              tables,
              existingReservations
            }
          );
          
          // Log validation results
          ReservationValidationService.logValidationResults();
          
          // Add only valid reservations
          const newReservationsById = { ...state.reservationsById };
          const newReservationsByTable = { ...state.reservationsByTable };
          
          validation.validReservations.forEach(reservation => {
            newReservationsById[reservation.id] = reservation;
            
            if (!newReservationsByTable[reservation.tableId]) {
              newReservationsByTable[reservation.tableId] = [];
            }
            newReservationsByTable[reservation.tableId].push(reservation.id);
          });
          
          return {
            ...state,
            reservationsById: newReservationsById,
            reservationsByTable: newReservationsByTable,
          };
        });
      },

      // Clear all reservations
      clearAllReservations: () => {
        set((state) => ({
          ...state,
          reservationsById: {},
          reservationsByTable: {},
        }));
      },
    }),
    {
      name: 'timeline-store',
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHasHydrated(true);
        }
      },
      partialize: (state) => ({
        reservationsById: state.reservationsById,
        tablesById: state.tablesById,
        sectorsById: state.sectorsById,
        restaurantConfig: state.restaurantConfig,
        ui: state.ui,
      }),
    }
  )
);

export default useTimelineStore;