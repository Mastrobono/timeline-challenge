import { describe, it, expect } from 'vitest';
import {
    slotToMinutes,
    slotToIso,
    isoToSlotIndex,
    minutesToSlots,
    slotToPx,
    pxToSlot,
    type TimelineConfig
} from '@/lib/timeUtils';

describe('timeUtils', () => {
    const testConfig: TimelineConfig = {
        date: '2024-01-15',
        startHour: 8,
        endHour: 23,
        slotMinutes: 15,
        slotWidth: 60,
        timezone: 'America/Argentina/Buenos_Aires'
    };

    describe('slotToMinutes', () => {
        it('should convert slot index to minutes correctly', () => {
            expect(slotToMinutes(0, testConfig)).toBe(0);
            expect(slotToMinutes(1, testConfig)).toBe(15);
            expect(slotToMinutes(4, testConfig)).toBe(60);
            expect(slotToMinutes(8, testConfig)).toBe(120);
        });
    });

    describe('slotToIso', () => {
        it('should convert slot index to ISO string', () => {
            const iso = slotToIso(0, testConfig);
            expect(iso).toMatch(/2024-01-15T/); // Should match the date part
            expect(iso).toMatch(/Z$/); // Should end with Z for UTC
        });

        it('should handle different slot indices', () => {
            const iso1 = slotToIso(4, testConfig); // 1 hour
            const iso2 = slotToIso(8, testConfig); // 2 hours

            expect(iso1).toMatch(/2024-01-15T/);
            expect(iso1).toMatch(/Z$/); // Should end with Z for UTC
            expect(iso1).toMatch(/T04:00:00/); // Verify 1 hour (4 slots * 15 min = 60 min = 1h) + timezone offset
            
            expect(iso2).toMatch(/2024-01-15T/);
            expect(iso2).toMatch(/Z$/); // Should end with Z for UTC
            expect(iso2).toMatch(/T05:00:00/); // Verify 2 hours (8 slots * 15 min = 120 min = 2h) + timezone offset
        });
    });

    describe('isoToSlotIndex', () => {
        it('should convert ISO string to slot index', () => {
            // Convert slot 4 to ISO timestamp
            const iso = slotToIso(4, testConfig);
            // Convert ISO back to slot index
            const slotIndex = isoToSlotIndex(iso, testConfig);
            // Should return original slot index
            expect(slotIndex).toBe(4);
        });

        it('should handle edge cases within time range', () => {
            const startIso = slotToIso(0, testConfig);
            const endIso = slotToIso(60, testConfig); // 15 hours = 60 slots

            expect(isoToSlotIndex(startIso, testConfig)).toBe(0);
            expect(isoToSlotIndex(endIso, testConfig)).toBe(60);
        });
    });

    describe('roundtrip tests', () => {
        it('should maintain iso -> slot -> iso roundtrip within same minute', () => {
            const originalIso = slotToIso(8, testConfig); // 8 slots = 2 hours = 120 minutes = 12:00:00 UTC
            const slotIndex = isoToSlotIndex(originalIso, testConfig); // 8 slots
            const roundtripIso = slotToIso(slotIndex, testConfig); // 8 slots = 2 hours = 120 minutes = 12:00:00 UTC

            // Compare the ISO strings directly
            expect(roundtripIso).toBe(originalIso);
        });

        it('should maintain px <-> slot invertibility', () => {
            const testSlots = [0, 1, 4, 8, 16, 32];

            testSlots.forEach(slot => {
                const px = slotToPx(slot, testConfig); // [0, 60, 240, 480, 960, 1920]
                const convertedSlot = pxToSlot(px, testConfig); // [0, 1, 4, 8, 16, 32]
                expect(convertedSlot).toBe(slot);
            });
        });
    });

    describe('minutesToSlots', () => {
        it('should convert minutes to slots correctly', () => {
            expect(minutesToSlots(15, testConfig)).toBe(1);
            expect(minutesToSlots(30, testConfig)).toBe(2);
            expect(minutesToSlots(45, testConfig)).toBe(3);
            expect(minutesToSlots(60, testConfig)).toBe(4);
        });

        it('should handle partial slots with Math.ceil', () => {
            expect(minutesToSlots(20, testConfig)).toBe(2); // 20/15 = 1.33 -> 2 (ceil)
            expect(minutesToSlots(35, testConfig)).toBe(3); // 35/15 = 2.33 -> 3 (ceil)
            expect(minutesToSlots(10, testConfig)).toBe(1); // 10/15 = 0.67 -> 1 (ceil)
        });
    });

    describe('slotToPx and pxToSlot', () => {
        it('should convert slot to pixel position', () => {
            expect(slotToPx(0, testConfig)).toBe(0);
            expect(slotToPx(1, testConfig)).toBe(60);
            expect(slotToPx(4, testConfig)).toBe(240);
        });

        it('should convert pixel position to slot index', () => {
            expect(pxToSlot(0, testConfig)).toBe(0);
            expect(pxToSlot(60, testConfig)).toBe(1);
            expect(pxToSlot(240, testConfig)).toBe(4);
            expect(pxToSlot(90, testConfig)).toBe(1); // 90/60 = 1.5 -> 1
        });
    });

    describe('edge cases', () => {
        it('should handle different slot widths', () => {
            const customConfig = { ...testConfig, slotWidth: 30 };

            expect(slotToPx(2, customConfig)).toBe(60);
            expect(pxToSlot(60, customConfig)).toBe(2);
        });

        it('should handle different slot minutes', () => {
            const customConfig = { ...testConfig, slotMinutes: 30 };

            expect(minutesToSlots(30, customConfig)).toBe(1);
            expect(minutesToSlots(60, customConfig)).toBe(2);
            expect(minutesToSlots(45, customConfig)).toBe(2); // 45/30 = 1.5 -> 2 (ceil)
        });
    });
});