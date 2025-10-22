import { addMinutes, differenceInMinutes } from 'date-fns';
import { fromZonedTime, toZonedTime } from 'date-fns-tz';

export interface TimelineConfig {
  date: string;            // "YYYY-MM-DD"
  startHour: number;       // e.g. 8
  endHour: number;         // e.g. 23
  slotMinutes: number;     // e.g. 15
  slotWidth: number;       // px width of one slot
  timezone: string;        // e.g. "America/Argentina/Buenos_Aires"
}

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