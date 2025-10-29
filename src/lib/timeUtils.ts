import { format } from 'date-fns';
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
export function slotToIso(slotIndex: number, config: TimelineConfig, baseDate?: string): string {
  const slotsPerDay = getSlotsPerDay(config);
  const daySlotIndex = slotIndex % slotsPerDay;
  
  // Use baseDate if provided, otherwise use config.date
  const targetDate = baseDate || config.date;
  
  // Calculate the actual hour and minute for this slot
  // daySlotIndex is relative to startHour, so we need to add startHour to get the actual hour
  const minutesFromMidnight = slotToMinutes(daySlotIndex, config);
  const totalMinutesFromMidnight = (config.startHour * 60) + minutesFromMidnight;
  const actualHour = Math.floor(totalMinutesFromMidnight / 60);
  const actualMinute = totalMinutesFromMidnight % 60;
  
  // Create a date string that represents the time in the target timezone
  const timeString = `${actualHour.toString().padStart(2, '0')}:${actualMinute.toString().padStart(2, '0')}:00`;
  const dateTimeString = `${targetDate}T${timeString}`;
  
  // Create a date object - this will be interpreted as local time
  const localDate = new Date(dateTimeString);
  
  // Convert FROM the target timezone TO UTC
  // This treats the localDate as if it were in the target timezone
  const utcDate = fromZonedTime(localDate, config.timezone);
  
  return utcDate.toISOString();
}

/**
 * Convert an ISO string to slot index in the configured timezone
 * This version handles multi-day views by calculating the absolute slot index
 */
export function isoToSlotIndex(iso: string, config: TimelineConfig): number {
  const utcDate = new Date(iso);
  const zonedDate = toZonedTime(utcDate, config.timezone);
  
  // Get the date part in the restaurant timezone - parse as UTC to avoid timezone issues
  const configDate = new Date(config.date + 'T00:00:00Z');
  const zonedConfigDate = toZonedTime(configDate, config.timezone);
  
  // Calculate the day difference
  const dayDiff = Math.floor((zonedDate.getTime() - zonedConfigDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // Calculate slot positions based on timezone-aware time
  const startHour = zonedDate.getHours();
  const startMinute = zonedDate.getMinutes();
  
  // Calculate slot index within the day
  const daySlotIndex = ((startHour - config.startHour) * 4) + (startMinute / 15);
  
  // Calculate absolute slot index including day offset
  const slotsPerDay = getSlotsPerDay(config);
  const absoluteSlotIndex = daySlotIndex + (dayDiff * slotsPerDay);
  
  return Math.max(0, absoluteSlotIndex);
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
 * Parse a date string (YYYY-MM-DD) to a Date object in local time
 * This ensures consistent date parsing across all calendar components
 * by always creating the date in local timezone, not UTC
 */
export function parseDateString(dateString: string): Date {
  // Parse the date components
  const [year, month, day] = dateString.split('-').map(Number);
  // Create date in local time (month is 0-indexed in Date constructor)
  return new Date(year, month - 1, day);
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
 * Format a date string for display
 * Uses parseDateString to ensure consistent date parsing with calendars
 * Shows the same date that calendars use, without timezone conversion
 */
export function formatDateForDisplay(dateString: string, timezone: string): string {
  // Use parseDateString to create date in local time, same as calendars
  const date = parseDateString(dateString);
  // Format directly without timezone conversion to match calendar display
  return format(date, 'EEE, MMM d yyyy');
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

