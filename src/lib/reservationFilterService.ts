import type { Reservation, RestaurantConfig } from '@/types';
import { getReservationIsoDate } from './timeUtils';
import { toZonedTime } from 'date-fns-tz';

export interface FilterOptions {
  date: string;
  startHour: number;
  endHour: number;
  slotMinutes: number;
  slotWidth: number;
  timezone: string;
  viewMode: 'day' | '3-day' | 'week' | 'month';
}

/**
 * Centralized service for filtering reservations based on various criteria.
 * This eliminates code duplication and provides a single source of truth for filtering logic.
 */
export class ReservationFilterService {
  /**
   * Validates that a reservation ends before restaurant closing time
   */
  static validateReservationEndTime(
    reservation: Reservation,
    restaurantConfig: RestaurantConfig | null
  ): boolean {
    if (!reservation.endTime) {
      return true; // No end time specified, assume valid
    }

    const endTime = new Date(reservation.endTime);
    const timezone = restaurantConfig?.timezone || 'America/Argentina/Buenos_Aires';
    const zonedEndTime = toZonedTime(endTime, timezone);
    const endHour = zonedEndTime.getHours();
    const restaurantEndHour = restaurantConfig?.operatingHours.endHour || 23;
    
    // Reservation ends after restaurant closes - invalid
    return endHour <= restaurantEndHour;
  }

  /**
   * Filters reservations by restaurant operating hours
   * Validates both start time and end time are within restaurant hours
   */
  static filterByOperatingHours(
    reservation: Reservation,
    restaurantConfig: RestaurantConfig | null,
    fallbackStartHour: number
  ): boolean {
    if (!reservation.startTime) {
      return true;
    }

    const startTime = new Date(reservation.startTime);
    const timezone = restaurantConfig?.timezone || 'America/Argentina/Buenos_Aires';
    const zonedStartTime = toZonedTime(startTime, timezone);
    const startHour = zonedStartTime.getHours();
    const restaurantStartHour = restaurantConfig?.operatingHours.startHour || fallbackStartHour;
    const restaurantEndHour = restaurantConfig?.operatingHours.endHour || 23;
    
    // Check if reservation starts within operating hours
    if (startHour < restaurantStartHour || startHour >= restaurantEndHour) {
      return false;
    }

    // Validate that reservation ends before restaurant closes
    return this.validateReservationEndTime(reservation, restaurantConfig);
  }

  /**
   * Filters reservations by date using the timeUtils logic
   */
  static filterByDate(
    reservation: Reservation,
    targetDate: string,
    options: FilterOptions
  ): boolean {
    const reservationDate = getReservationIsoDate(reservation, targetDate, options);
    return reservationDate === targetDate;
  }

  /**
   * Comprehensive filter that combines date and operating hours filtering
   */
  static filterReservation(
    reservation: Reservation,
    targetDate: string,
    options: FilterOptions,
    restaurantConfig: RestaurantConfig | null
  ): boolean {
    // First check if reservation is on the correct date
    if (!this.filterByDate(reservation, targetDate, options)) {
      return false;
    }

    // Then check if reservation is within operating hours
    return this.filterByOperatingHours(reservation, restaurantConfig, options.startHour);
  }

  /**
   * Filters reservations for a specific sector
   */
  static filterReservationsForSector(
    reservations: Reservation[],
    sectorTableIds: string[],
    targetDate: string,
    options: FilterOptions,
    restaurantConfig: RestaurantConfig | null
  ): Reservation[] {
    return reservations.filter(reservation => {
      // Must be for a table in this sector
      if (!sectorTableIds.includes(reservation.tableId)) {
        return false;
      }

      // Apply comprehensive filtering
      return this.filterReservation(reservation, targetDate, options, restaurantConfig);
    });
  }

  /**
   * Counts valid reservations for a sector (used in store)
   */
  static countValidReservationsForSector(
    reservations: Reservation[],
    sectorTableIds: string[],
    targetDate: string,
    options: FilterOptions,
    restaurantConfig: RestaurantConfig | null
  ): number {
    return this.filterReservationsForSector(
      reservations,
      sectorTableIds,
      targetDate,
      options,
      restaurantConfig
    ).length;
  }

  /**
   * Filters reservations for month view display
   */
  static filterReservationsForMonthView(
    reservations: Reservation[],
    targetDate: string,
    options: FilterOptions,
    restaurantConfig: RestaurantConfig | null
  ): Reservation[] {
    return reservations.filter(reservation => 
      this.filterReservation(reservation, targetDate, options, restaurantConfig)
    );
  }
}
