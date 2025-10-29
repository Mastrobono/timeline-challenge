import type { Reservation, Table, RestaurantConfig } from '@/types';
import { toZonedTime } from 'date-fns-tz';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface ValidationOptions {
  restaurantConfig: RestaurantConfig | null;
  tables: Table[];
  existingReservations?: Reservation[];
  timezone?: string; // Optional timezone for validation
}

/**
 * Comprehensive validation service for reservations
 * Validates capacity, operating hours, and conflicts before allowing reservations into the system
 */
export class ReservationValidationService {
  /**
   * Validates a single reservation against all business rules
   */
  static validateReservation(
    reservation: Reservation,
    options: ValidationOptions
  ): ValidationResult {
    const errors: string[] = [];
    
    // 1. Validate capacity
    const capacityError = this.validateCapacity(reservation, options.tables);
    if (capacityError) errors.push(capacityError);
    
    // 2. Validate duration
    const durationError = this.validateDuration(reservation);
    if (durationError) errors.push(durationError);
    
    // 3. Validate operating hours
    const hoursError = this.validateOperatingHours(reservation, options.restaurantConfig, options.timezone);
    if (hoursError) errors.push(hoursError);
    
    // 4. Validate conflicts
    const conflictError = this.validateConflicts(reservation, options.existingReservations || []);
    if (conflictError) errors.push(conflictError);
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
  
  /**
   * Validates multiple reservations and returns only valid ones
   */
  static validateReservations(
    reservations: Reservation[],
    options: ValidationOptions
  ): {
    validReservations: Reservation[];
    invalidReservations: { reservation: Reservation; errors: string[] }[];
  } {
    const validReservations: Reservation[] = [];
    const invalidReservations: { reservation: Reservation; errors: string[] }[] = [];
    
    // Track valid reservations to check for conflicts
    const validReservationsByTable: Record<string, Reservation[]> = {};
    
    for (const reservation of reservations) {
      // Check conflicts against already validated reservations
      const existingForTable = validReservationsByTable[reservation.tableId] || [];
      const validation = this.validateReservation(reservation, {
        ...options,
        existingReservations: existingForTable
      });
      
      if (validation.isValid) {
        validReservations.push(reservation);
        if (!validReservationsByTable[reservation.tableId]) {
          validReservationsByTable[reservation.tableId] = [];
        }
        validReservationsByTable[reservation.tableId].push(reservation);
      } else {
        invalidReservations.push({
          reservation,
          errors: validation.errors
        });
      }
    }
    
    return { validReservations, invalidReservations };
  }
  
  /**
   * Validates that reservation party size fits table capacity
   */
  private static validateCapacity(
    reservation: Reservation,
    tables: Table[]
  ): string | null {
    const table = tables.find(t => t.id === reservation.tableId);
    if (!table) {
      return `Table ${reservation.tableId} not found`;
    }
    
    const { partySize } = reservation;
    const { min, max } = table.capacity;
    
    if (partySize < min) {
      return `Party size ${partySize} is below table minimum capacity ${min}`;
    }
    
    if (partySize > max) {
      return `Party size ${partySize} exceeds table maximum capacity ${max}`;
    }
    
    return null;
  }
  
  /**
   * Validates that reservation duration is reasonable (max 6 hours)
   */
  private static validateDuration(
    reservation: Reservation
  ): string | null {
    if (!reservation.startTime || !reservation.endTime) {
      return 'Reservation must have both start and end times';
    }
    
    const startTime = new Date(reservation.startTime);
    const endTime = new Date(reservation.endTime);
    const durationMinutes = (endTime.getTime() - startTime.getTime()) / (1000 * 60);
    const durationHours = durationMinutes / 60;
    
    // Maximum duration is 6 hours
    if (durationHours > 6) {
      return `Reservation duration ${durationHours.toFixed(1)} hours exceeds maximum allowed 6 hours`;
    }
    
    // Minimum duration is 30 minutes
    if (durationMinutes < 30) {
      return `Reservation duration ${durationMinutes} minutes is below minimum allowed 30 minutes`;
    }
    
    return null;
  }
  
  /**
   * Validates that reservation is within restaurant operating hours
   */
  private static validateOperatingHours(
    reservation: Reservation,
    restaurantConfig: RestaurantConfig | null,
    timezone?: string
  ): string | null {
    if (!reservation.startTime || !reservation.endTime) {
      return 'Reservation must have both start and end times';
    }
    
    if (!restaurantConfig) {
      return 'Restaurant configuration not available';
    }
    
    // Use provided timezone or fall back to restaurant timezone
    const validationTimezone = timezone || restaurantConfig.timezone;
    
    if (!validationTimezone) {
      return 'Restaurant timezone not configured';
    }
    
    // Convert UTC times to restaurant timezone for validation
    const startTime = toZonedTime(new Date(reservation.startTime), validationTimezone);
    const endTime = toZonedTime(new Date(reservation.endTime), validationTimezone);
    
    const startHour = startTime.getHours();
    const endHour = endTime.getHours();
    const endMinutes = endTime.getMinutes();
    
    const { startHour: restaurantStart, endHour: restaurantEnd } = restaurantConfig.operatingHours;
    
    // Check if reservation starts within operating hours
    if (startHour < restaurantStart) {
      return `Reservation starts at ${startHour}:00, but restaurant opens at ${restaurantStart}:00`;
    }
    
    // Check if reservation ends after closing time
    if (endHour > restaurantEnd || (endHour === restaurantEnd && endMinutes > 45)) {
      return `Reservation ends at ${endHour}:${endMinutes.toString().padStart(2, '0')}, but restaurant closes at ${restaurantEnd}:45`;
    }
    
    return null;
  }
  
  /**
   * Validates that reservation doesn't conflict with existing reservations
   */
  private static validateConflicts(
    reservation: Reservation,
    existingReservations: Reservation[]
  ): string | null {
    if (!reservation.startTime || !reservation.endTime) {
      return null; // Can't check conflicts without times
    }
    
    const newStart = new Date(reservation.startTime);
    const newEnd = new Date(reservation.endTime);
    
    // Check for overlaps with existing reservations on the same table
      const conflictingReservation = existingReservations.find(existing => {
        if (!existing.startTime || !existing.endTime) return false;
        if (existing.tableId !== reservation.tableId) return false; // Only check same table
        if (existing.id === reservation.id) return false; // Don't conflict with self
        
        const existingStart = new Date(existing.startTime);
        const existingEnd = new Date(existing.endTime);
        
        // Check if reservations overlap (using precise UTC comparison)
        const hasOverlap = (newStart < existingEnd && newEnd > existingStart);
        
        if (hasOverlap) {
        }
        
        return hasOverlap;
      });
    
    if (conflictingReservation) {
      return `Reservation conflicts with existing reservation ${conflictingReservation.id} on table ${reservation.tableId}`;
    }
    
    return null;
  }
  
  /**
   * Logs validation results for debugging
   */
  static logValidationResults(): void {
    // Validation results logging for development
  }
}
