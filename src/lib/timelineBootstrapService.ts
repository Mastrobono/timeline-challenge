import { addDays, format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { getTodayInTimezone, parseDateString } from '@/lib/timeUtils';
import type { Reservation } from '@/types';

/**
 * Business rules that decide WHICH DAY the timeline should open on.
 *
 * This lives in the service layer on purpose: it is domain logic ("a visitor must
 * always land on a day that actually has bookings"), not store plumbing and not
 * render logic. The store only stores the resulting date; components only read it.
 */
export class TimelineBootstrapService {
  /**
   * The single source of truth for "which calendar day does this reservation
   * belong to".
   *
   * A reservation is stored as an instant (UTC ISO). The day it belongs to is the
   * day it falls on *in the restaurant's timezone* — that is what a host means by
   * "tonight's bookings". Bucketing by the raw UTC date instead is what made the
   * home calendar and the timeline disagree: a 21:00 booking in Buenos Aires is
   * already 00:00 the next day in UTC.
   */
  static getReservationDateKey(reservation: Reservation, timezone: string): string {
    if (!reservation.startTime) return '';

    const instant = new Date(reservation.startTime);
    if (Number.isNaN(instant.getTime())) return '';

    const zoned = toZonedTime(instant, timezone);
    if (Number.isNaN(zoned.getTime())) return '';

    return format(zoned, 'yyyy-MM-dd');
  }

  /**
   * Count reservations per calendar day, keyed as above.
   */
  static countByDate(reservations: Reservation[], timezone: string): Map<string, number> {
    const counts = new Map<string, number>();
    for (const reservation of reservations) {
      const key = this.getReservationDateKey(reservation, timezone);
      if (!key) continue;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    return counts;
  }

  /**
   * How many reservations fall on a given day.
   */
  static countForDate(reservations: Reservation[], timezone: string, date: string): number {
    return this.countByDate(reservations, timezone).get(date) ?? 0;
  }

  /**
   * Pick the day the timeline should open on.
   *
   * Preference order, so that the view is never empty on arrival:
   *   1. `preferredDate`, if it has bookings (respects a deliberate choice, e.g.
   *      the visitor clicked a day on the home calendar).
   *   2. Today in the restaurant timezone, if it has bookings.
   *   3. The nearest upcoming day that has bookings.
   *   4. The most recent past day that has bookings.
   *   5. `null` when there is no data at all — the caller must seed first.
   */
  static resolveLandingDate(
    reservations: Reservation[],
    timezone: string,
    preferredDate?: string
  ): string | null {
    const counts = this.countByDate(reservations, timezone);
    if (counts.size === 0) return null;

    if (preferredDate && (counts.get(preferredDate) ?? 0) > 0) return preferredDate;

    const today = getTodayInTimezone(timezone);
    if ((counts.get(today) ?? 0) > 0) return today;

    const populated = [...counts.keys()].sort();
    return populated.find(date => date > today) ?? populated[populated.length - 1];
  }

  /**
   * A seed is stale when nothing is booked from today onwards — e.g. a persisted
   * seed from a previous visit whose 90-day window has already elapsed. Such a
   * visitor would land on an empty grid, so the caller regenerates instead.
   */
  static isSeedStale(reservations: Reservation[], timezone: string): boolean {
    const counts = this.countByDate(reservations, timezone);
    if (counts.size === 0) return true;

    const today = getTodayInTimezone(timezone);
    return ![...counts.keys()].some(date => date >= today);
  }

  /**
   * The day the seed generator should treat as day 0, anchored to the restaurant
   * timezone rather than the visitor's machine clock. Keeping these in sync is
   * what makes "Today" reliably land on generated data.
   */
  static getSeedAnchorDate(timezone: string): Date {
    return parseDateString(getTodayInTimezone(timezone));
  }

  /**
   * Inclusive list of the calendar days a seed of `totalDays` starting today
   * is expected to cover. Used by tests and by the README's claims.
   */
  static getExpectedSeedWindow(timezone: string, totalDays: number): string[] {
    const anchor = this.getSeedAnchorDate(timezone);
    return Array.from({ length: totalDays }, (_, i) => format(addDays(anchor, i), 'yyyy-MM-dd'));
  }
}

export default TimelineBootstrapService;
