import { Reservation, TimelineConfig, OccupiedSlotsMap } from '@/types';
import { isoToSlotIndex } from '@/lib/timeUtils';

/**
 * Builds a map of occupied time slots for each table.
 * This is the main data structure for performing fast conflict checks.
 * @param reservations - An array of all reservations.
 * @param config - The timeline configuration.
 * @returns An OccupiedSlotsMap.
 */
export function buildOccupiedSlotsMap(
  reservations: Reservation[],
  config: TimelineConfig
): OccupiedSlotsMap {
  const map: OccupiedSlotsMap = {};

  for (const reservation of reservations) {
    const startSlot = isoToSlotIndex(reservation.startTime, config);
    const endSlot = isoToSlotIndex(reservation.endTime, config);

    // Initialize the set for this table if it doesn't exist
    if (!map[reservation.tableId]) {
      map[reservation.tableId] = new Set<number>();
    }

    // Add each slot from start to end (exclusive)
    for (let i = startSlot; i < endSlot; i++) {
      map[reservation.tableId].add(i);
    }
  }

  return map;
}

/**
 * Checks if a given time range for a table has a conflict.
 * @param tableId - The ID of the table to check.
 * @param startSlot - The starting slot index.
 * @param endSlot - The ending slot index.
 * @param occupiedSlots - The map of all occupied slots.
 * @returns True if there is a conflict, false otherwise.
 */
export function hasConflict(
  tableId: string,
  startSlot: number,
  endSlot: number,
  occupiedSlots: OccupiedSlotsMap
): boolean {
  const tableSlots = occupiedSlots[tableId];
  
  // If no reservations exist for this table, there's no conflict
  if (!tableSlots) {
    return false;
  }

  // Check each slot in the requested range
  for (let i = startSlot; i < endSlot; i++) {
    if (tableSlots.has(i)) {
      return true;
    }
  }

  return false;
}

/**
 * Checks if a reservation can be moved to a new time slot without conflicts.
 * This is a convenience function that combines building the map and checking for conflicts.
 * @param reservations - All existing reservations.
 * @param tableId - The table to check.
 * @param startSlot - The starting slot index.
 * @param endSlot - The ending slot index.
 * @param config - The timeline configuration.
 * @param reservationIdToIgnore - (Optional) A reservation ID to ignore during the check.
 * @returns True if there is a conflict, false otherwise.
 */
export function canReserveSlot(
  reservations: Reservation[],
  tableId: string,
  startSlot: number,
  endSlot: number,
  config: TimelineConfig,
  reservationIdToIgnore?: string
): boolean {
  // Filter out the reservation to ignore if specified
  const filteredReservations = reservationIdToIgnore 
    ? reservations.filter(r => r.id !== reservationIdToIgnore)
    : reservations;
    
  const occupiedSlots = buildOccupiedSlotsMap(filteredReservations, config);
  return !hasConflict(tableId, startSlot, endSlot, occupiedSlots);
}

/**
 * Gets all available time slots for a table within a given range.
 * @param reservations - All existing reservations.
 * @param tableId - The table to check.
 * @param startSlot - The starting slot index to check from.
 * @param endSlot - The ending slot index to check to.
 * @param config - The timeline configuration.
 * @returns An array of available slot ranges as [start, end] pairs.
 */
export function getAvailableSlots(
  reservations: Reservation[],
  tableId: string,
  startSlot: number,
  endSlot: number,
  config: TimelineConfig
): Array<[number, number]> {
  const occupiedSlots = buildOccupiedSlotsMap(reservations, config);
  const tableSlots = occupiedSlots[tableId] || new Set<number>();
  
  const availableSlots: Array<[number, number]> = [];
  let currentStart: number | null = null;

  for (let i = startSlot; i < endSlot; i++) {
    const isOccupied = tableSlots.has(i);
    
    if (!isOccupied && currentStart === null) {
      // Start of a new available range
      currentStart = i;
    } else if (isOccupied && currentStart !== null) {
      // End of an available range
      availableSlots.push([currentStart, i]);
      currentStart = null;
    }
  }

  // Handle case where the range ends while still in an available slot
  if (currentStart !== null) {
    availableSlots.push([currentStart, endSlot]);
  }

  return availableSlots;
}
