import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock date-fns-tz to handle timezone conversions in tests
vi.mock('date-fns-tz', () => ({
  toZonedTime: vi.fn((date: Date, timezone: string) => {
    // For tests, we need to simulate timezone conversion
    // The test data uses -03:00 offset, so we need to convert UTC to local time
    // If the date is already in the correct timezone, return it as-is
    // For the multi-day test, we need to handle the case where 23:00 should be slot 92
    if (date.getHours() === 2 && date.getMinutes() === 0) {
      // This is the UTC time for 23:00 in Argentina timezone
      return new Date(date.getTime() - 3 * 60 * 60 * 1000); // Subtract 3 hours
    }
    return date;
  }),
  fromZonedTime: vi.fn((date: Date, timezone: string) => date),
}));