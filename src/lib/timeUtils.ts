import { addMinutes, differenceInMinutes, addDays, format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { TimelineConfig } from '@/types';

/**
 * Convert a slot index to minutes from midnight in the configured timezone
 */
export function slotToMinutes(slotIndex: number, config: TimelineConfig): number {
  return slotIndex * config.slotMinutes;
}

/**
 * Convert a slot index to ISO string in the configured timezone
 */
export function slotToIso(slotIndex: number, config: TimelineConfig): string {
  // Create a date at midnight in the restaurant timezone
  const baseDate = new Date(config.date + 'T00:00:00');
  const zonedBaseDate = toZonedTime(baseDate, config.timezone);
  
  // Add the minutes for this slot
  const minutesFromMidnight = slotToMinutes(slotIndex, config);
  const dateWithMinutes = addMinutes(zonedBaseDate, minutesFromMidnight);
  
  // Return ISO string with timezone offset
  return dateWithMinutes.toISOString();
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
  const minutesFromMidnight = differenceInMinutes(zonedDate, zonedConfigDate);
  
  // Convert to slot index
  const slotIndex = Math.floor(minutesFromMidnight / config.slotMinutes);
  
  return slotIndex;
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
 * Compute X position for a slot within a specific day
 */
export function computeXForSlotAndDay(slotInDay: number, dayIndex: number, config: TimelineConfig): number {
  const slotsPerDay = getSlotsPerDay(config);
  const totalSlotIndex = (dayIndex * slotsPerDay) + slotInDay;
  return slotToPx(totalSlotIndex, config);
}

/**
 * Get the ISO date string for a reservation based on its properties
 * Extracts date from startTime (ISO format) or falls back to baseDate
 */
export function getReservationIsoDate(reservation: any, baseDate: string, config: TimelineConfig): string {
  // Extract date from startTime (ISO format)
  if (reservation.startTime) {
    return reservation.startTime.split('T')[0]; // Get YYYY-MM-DD part
  }
  
  // Fallback to baseDate if no startTime
  return baseDate;
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
 * Get today's date in the restaurant timezone
 */
export function getTodayInTimezone(timezone: string): string {
  const now = new Date();
  const zonedNow = toZonedTime(now, timezone);
  return format(zonedNow, 'yyyy-MM-dd');
}

/**
 * Calculate the position for current time indicator
 */
export function getCurrentTimePosition(config: TimelineConfig): number | null {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  
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