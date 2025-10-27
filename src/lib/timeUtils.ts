import { addMinutes, differenceInMinutes, format } from 'date-fns';
import { toZonedTime, fromZonedTime } from 'date-fns-tz';
import { TimelineConfig, Reservation } from '@/types';

/**
 * Convert a slot index to minutes from midnight in the configured timezone
 */
export function slotToMinutes(slotIndex: number, config: TimelineConfig): number {
  return slotIndex * config.slotMinutes;
}

/**
 * Convert a slot index to ISO string in the configured timezone
 * This function creates a time that represents the slot in the target timezone
 */
export function slotToIso(slotIndex: number, config: TimelineConfig): string {
  // Calculate the actual hour and minute for this slot
  // slotIndex is relative to startHour, so we need to add startHour to get the actual hour
  const minutesFromMidnight = slotToMinutes(slotIndex, config);
  const totalMinutesFromMidnight = (config.startHour * 60) + minutesFromMidnight;
  const actualHour = Math.floor(totalMinutesFromMidnight / 60);
  const actualMinute = totalMinutesFromMidnight % 60;
  
  // Create a date string that represents the time in the target timezone
  const timeString = `${actualHour.toString().padStart(2, '0')}:${actualMinute.toString().padStart(2, '0')}:00`;
  const dateTimeString = `${config.date}T${timeString}`;
  
  // Create a date object - this will be interpreted as local time
  const localDate = new Date(dateTimeString);
  
  // Convert FROM the target timezone TO UTC
  // This treats the localDate as if it were in the target timezone
  const utcDate = fromZonedTime(localDate, config.timezone);
  
  // Log removido para limpiar consola
  
  return utcDate.toISOString();
}

/**
 * Convert an ISO string to slot index in the configured timezone
 */
export function isoToSlotIndex(iso: string, config: TimelineConfig): number {
  const utcDate = new Date(iso);
  const zonedDate = toZonedTime(utcDate, config.timezone);
  
  // Get the date part in the restaurant timezone
  const configDate = new Date(config.date + 'T00:00:00');
  const zonedConfigDate = toZonedTime(configDate, config.timezone);
  
  // Calculate minutes from midnight in the restaurant timezone
  // Use direct calculation instead of differenceInMinutes to avoid DST issues
  const minutesFromMidnight = (zonedDate.getHours() * 60) + zonedDate.getMinutes();
  
  // Convert to slot index relative to startHour
  // slotIndex should be relative to startHour, not from midnight
  const minutesFromStartHour = minutesFromMidnight - (config.startHour * 60);
  const slotIndex = Math.floor(minutesFromStartHour / config.slotMinutes);
  
  // Log removido para limpiar consola
  
  return Math.max(0, slotIndex); // Ensure non-negative slot index
}

/**
 * Convert minutes to number of slots (for durations - use Math.ceil)
 */
export function minutesToSlots(minutes: number, config: TimelineConfig): number {
  return Math.ceil(minutes / config.slotMinutes);
}

/**
 * Convert slot index to pixel position
 */
export function slotToPx(slotIndex: number, config: TimelineConfig): number {
  return slotIndex * config.slotWidth;
}

/**
 * Convert pixel position to slot index
 * For click operations, we need to select the exact slot clicked
 */
export function pxToSlot(x: number, config: TimelineConfig): number {
  return Math.floor(x / config.slotWidth);
}

/**
 * Get the number of slots per day based on configuration
 */
export function getSlotsPerDay(config: TimelineConfig): number {
  return (config.endHour - config.startHour) * (60 / config.slotMinutes);
}

/**
 * Get today's date in the restaurant timezone
 */
export function getTodayInTimezone(timezone: string): string {
  const now = new Date();
  const zonedNow = toZonedTime(now, timezone);
  return format(zonedNow, 'yyyy-MM-dd');
}

/**
 * Filter reservations based on timezone and operating hours
 * This function hides reservations that fall outside operating hours in the selected timezone
 */
export function filterReservationsByTimezone(
  reservations: Reservation[],
  config: TimelineConfig,
  restaurantConfig: { operatingHours: { startHour: number; endHour: number } } | null
): Reservation[] {
  if (!restaurantConfig) {
    return reservations; // No filtering if no restaurant config
  }

  const filtered = reservations.filter(reservation => {
    // Convert reservation times to the selected timezone
    const startDate = new Date(reservation.startTime);
    const endDate = new Date(reservation.endTime);
    
    const startZoned = toZonedTime(startDate, config.timezone);
    const endZoned = toZonedTime(endDate, config.timezone);
    
    const startHour = startZoned.getHours();
    const endHour = endZoned.getHours();
    
    // Check if reservation falls within operating hours in the selected timezone
    const isWithinOperatingHours = 
      startHour >= restaurantConfig.operatingHours.startHour && 
      endHour <= restaurantConfig.operatingHours.endHour;
    
    return isWithinOperatingHours;
  });

  return filtered;
}

/**
 * Calculate the position for current time indicator
 */
export function getCurrentTimePosition(config: TimelineConfig): number | null {
  const now = new Date();
  
  // Convert current time to the selected timezone
  const zonedNow = toZonedTime(now, config.timezone);
  const currentHour = zonedNow.getHours();
  const currentMinute = zonedNow.getMinutes();
  
  // Check if current time is within visible range
  if (currentHour < config.startHour || currentHour >= config.endHour) {
    return null;
  }
  
  // Calculate position in pixels
  const hoursFromStart = currentHour - config.startHour;
  const minutesFromStart = hoursFromStart * 60 + currentMinute;
  const slotsFromStart = minutesFromStart / config.slotMinutes;
  
  return slotsFromStart * config.slotWidth;
}

/**
 * Format a date string for display in the restaurant timezone
 */
export function formatDateForDisplay(dateString: string, timezone: string): string {
  const date = new Date(dateString + 'T00:00:00Z');
  const zonedDate = toZonedTime(date, timezone);
  return format(zonedDate, 'EEE, MMM d yyyy');
}

/**
 * Get the ISO date string for a reservation based on its properties
 * Extracts date from startTime (ISO format) or falls back to baseDate
 */
export function getReservationIsoDate(reservation: Reservation, baseDate: string): string {
  // Extract date from startTime (ISO format)
  if (reservation.startTime) {
    return reservation.startTime.split('T')[0]; // Get YYYY-MM-DD part
  }
  
  // Fallback to baseDate if no startTime
  return baseDate;
}

