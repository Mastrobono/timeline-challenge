import { describe, it, expect } from 'vitest';
import { format, addDays, subDays } from 'date-fns';
import { TimelineBootstrapService } from '@/lib/timelineBootstrapService';
import { getTodayInTimezone } from '@/lib/timeUtils';
import {
  generateTablesAndSectors,
  generateValidReservationsInTimezone,
  generateRestaurantConfig,
} from '@/lib/seedGenerator';
import type { Reservation } from '@/types';

const TZ = 'America/Argentina/Buenos_Aires';

function makeReservation(id: string, startTime: string, endTime: string): Reservation {
  return {
    id,
    tableId: 'table-1',
    customer: { name: 'Test', phone: '+54-11-0000-0000', email: 't@e.com' },
    partySize: 2,
    startTime,
    endTime,
    durationMinutes: 90,
    status: 'CONFIRMED',
    priority: 'STANDARD',
    createdAt: startTime,
    updatedAt: startTime,
  };
}

describe('TimelineBootstrapService', () => {
  describe('getReservationDateKey', () => {
    it('buckets an evening booking on its local day, not the rolled-over UTC day', () => {
      // 21:00 in Buenos Aires (UTC-3) is already 00:00 the next day in UTC.
      const res = makeReservation('r1', '2026-08-18T00:00:00.000Z', '2026-08-18T01:30:00.000Z');

      expect(res.startTime.split('T')[0]).toBe('2026-08-18'); // the old, wrong key
      expect(TimelineBootstrapService.getReservationDateKey(res, TZ)).toBe('2026-08-17');
    });

    it('is timezone-aware in the other direction too', () => {
      const res = makeReservation('r1', '2026-08-17T12:00:00.000Z', '2026-08-17T13:30:00.000Z');
      expect(TimelineBootstrapService.getReservationDateKey(res, 'Asia/Tokyo')).toBe('2026-08-17');
      expect(TimelineBootstrapService.getReservationDateKey(res, 'Australia/Sydney')).toBe('2026-08-17');
    });
  });

  describe('resolveLandingDate', () => {
    it('returns null when there is nothing to show', () => {
      expect(TimelineBootstrapService.resolveLandingDate([], TZ)).toBeNull();
    });

    it('prefers today when today has bookings', () => {
      const today = getTodayInTimezone(TZ);
      const res = makeReservation('r1', `${today}T15:00:00.000Z`, `${today}T16:30:00.000Z`);
      expect(TimelineBootstrapService.resolveLandingDate([res], TZ)).toBe(today);
    });

    it('falls forward to the nearest upcoming day when today is empty', () => {
      const future = format(addDays(new Date(), 5), 'yyyy-MM-dd');
      const farther = format(addDays(new Date(), 20), 'yyyy-MM-dd');
      const reservations = [
        makeReservation('r2', `${farther}T15:00:00.000Z`, `${farther}T16:30:00.000Z`),
        makeReservation('r1', `${future}T15:00:00.000Z`, `${future}T16:30:00.000Z`),
      ];
      expect(TimelineBootstrapService.resolveLandingDate(reservations, TZ)).toBe(future);
    });

    it('falls back to the most recent past day when everything is behind us', () => {
      const recent = format(subDays(new Date(), 3), 'yyyy-MM-dd');
      const older = format(subDays(new Date(), 30), 'yyyy-MM-dd');
      const reservations = [
        makeReservation('r1', `${older}T15:00:00.000Z`, `${older}T16:30:00.000Z`),
        makeReservation('r2', `${recent}T15:00:00.000Z`, `${recent}T16:30:00.000Z`),
      ];
      expect(TimelineBootstrapService.resolveLandingDate(reservations, TZ)).toBe(recent);
    });

    it('honours an explicit preferred date that has bookings', () => {
      const today = getTodayInTimezone(TZ);
      const future = format(addDays(new Date(), 5), 'yyyy-MM-dd');
      const reservations = [
        makeReservation('r1', `${today}T15:00:00.000Z`, `${today}T16:30:00.000Z`),
        makeReservation('r2', `${future}T15:00:00.000Z`, `${future}T16:30:00.000Z`),
      ];
      expect(TimelineBootstrapService.resolveLandingDate(reservations, TZ, future)).toBe(future);
    });

    it('ignores a preferred date that has no bookings', () => {
      const today = getTodayInTimezone(TZ);
      const res = makeReservation('r1', `${today}T15:00:00.000Z`, `${today}T16:30:00.000Z`);
      expect(TimelineBootstrapService.resolveLandingDate([res], TZ, '2025-10-24')).toBe(today);
    });
  });

  describe('isSeedStale', () => {
    it('treats an empty store as stale', () => {
      expect(TimelineBootstrapService.isSeedStale([], TZ)).toBe(true);
    });

    it('treats a fully-elapsed window as stale', () => {
      const past = format(subDays(new Date(), 10), 'yyyy-MM-dd');
      const res = makeReservation('r1', `${past}T15:00:00.000Z`, `${past}T16:30:00.000Z`);
      expect(TimelineBootstrapService.isSeedStale([res], TZ)).toBe(true);
    });

    it('does not treat a current window as stale', () => {
      const today = getTodayInTimezone(TZ);
      const res = makeReservation('r1', `${today}T15:00:00.000Z`, `${today}T16:30:00.000Z`);
      expect(TimelineBootstrapService.isSeedStale([res], TZ)).toBe(false);
    });
  });
});

describe('seed / landing-date alignment (regression)', () => {
  const TIMEZONES = [
    'America/Argentina/Buenos_Aires',
    'America/New_York',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Australia/Sydney',
    'America/Los_Angeles',
    'America/Chicago',
  ];

  it.each(TIMEZONES)(
    'a fresh seed always yields a landing date with bookings (%s)',
    (timezone) => {
      const config = generateRestaurantConfig(timezone);
      const { tables, sectors } = generateTablesAndSectors();
      const reservations = generateValidReservationsInTimezone(
        tables, sectors, config, config.timezone, 10, 14
      );

      expect(reservations.length).toBeGreaterThan(0);
      expect(TimelineBootstrapService.isSeedStale(reservations, config.timezone)).toBe(false);

      const landing = TimelineBootstrapService.resolveLandingDate(reservations, config.timezone);
      expect(landing).not.toBeNull();
      expect(
        TimelineBootstrapService.countForDate(reservations, config.timezone, landing!)
      ).toBeGreaterThan(0);
    }
  );

  it.each(TIMEZONES)('day 0 of the seed is today in the restaurant timezone (%s)', (timezone) => {
    const config = generateRestaurantConfig(timezone);
    const { tables, sectors } = generateTablesAndSectors();
    const reservations = generateValidReservationsInTimezone(
      tables, sectors, config, config.timezone, 10, 3
    );

    const days = [...TimelineBootstrapService.countByDate(reservations, config.timezone).keys()].sort();
    expect(days[0]).toBe(getTodayInTimezone(config.timezone));
  });

  it('the old hardcoded default date has no bookings in a fresh seed', () => {
    const config = generateRestaurantConfig(TZ);
    const { tables, sectors } = generateTablesAndSectors();
    const reservations = generateValidReservationsInTimezone(
      tables, sectors, config, config.timezone, 10, 30
    );

    expect(TimelineBootstrapService.countForDate(reservations, config.timezone, '2025-10-24')).toBe(0);
    // ...which is exactly why the landing date must be resolved, never hardcoded.
    expect(TimelineBootstrapService.resolveLandingDate(reservations, config.timezone, '2025-10-24'))
      .not.toBe('2025-10-24');
  });
});
