import { test, expect, type Page } from '@playwright/test';

const STORE_KEY = 'timeline-store';
const TOUR_KEY = 'timeline-tour-seen';

/**
 * Suppress the first-run walkthrough. It is modal by design, so every spec that
 * is not about the tour itself has to arrive with it already dismissed.
 */
async function markTourSeen(page: Page) {
  await page.evaluate((key) => localStorage.setItem(key, 'true'), TOUR_KEY);
}

type PersistedStore = {
  state: {
    ui: { visibleDate: string };
    restaurantConfig: { timezone: string } | null;
    reservationsById: Record<string, { startTime: string; endTime: string }>;
  };
};

async function readStore(page: Page): Promise<PersistedStore['state']> {
  return page.evaluate((key) => {
    const raw = localStorage.getItem(key);
    if (!raw) throw new Error('store not persisted');
    return JSON.parse(raw).state;
  }, STORE_KEY);
}

/** Total reservations rendered across the three sector headers. */
async function visibleReservationCount(page: Page): Promise<number> {
  const headers = await page.getByText(/tables? - \d+ reservations?/).allTextContents();
  return headers.reduce((total, text) => {
    const match = text.match(/- (\d+) reservation/);
    return total + (match ? Number(match[1]) : 0);
  }, 0);
}

async function gotoTimelineFresh(page: Page) {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await markTourSeen(page);
  await page.goto('/timeline');
  await expect(page.getByTestId('timeline-layout')).toBeVisible();
}

/**
 * Load the timeline with a hand-built store containing exactly one booking, so
 * that drag targets are guaranteed free and assertions cannot flake on whatever
 * the random generator produced.
 */
async function gotoTimelineWithSingleReservation(page: Page) {
  // Seeded via addInitScript, before any app code runs. Writing it after a
  // page load races the bootstrap's own seed generation, which persists 900
  // reservations over the fixture a moment later.
  await page.addInitScript(() => localStorage.setItem('timeline-tour-seen', 'true'));
  await page.addInitScript((key) => {
    const timezone = 'America/Argentina/Buenos_Aires';
    const today = new Intl.DateTimeFormat('en-CA', {
      timeZone: timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date());

    // 09:00-10:30 Buenos Aires (UTC-3) on today's date. Early in the operating
    // day so the block renders near the left edge and is fully on-screen —
    // a block further right lands outside the viewport and cannot be dragged.
    const startTime = new Date(`${today}T12:00:00.000Z`).toISOString();
    const endTime = new Date(`${today}T13:30:00.000Z`).toISOString();

    const sectors = [
      { id: 'sector-1', name: 'Main Dining', color: '#3B82F6', sortOrder: 1 },
      { id: 'sector-2', name: 'Terrace', color: '#10B981', sortOrder: 2 },
    ];
    const tables = [
      { id: 'table-1', sectorId: 'sector-1', name: 'Table 1', capacity: { min: 2, max: 4 }, sortOrder: 1 },
      { id: 'table-2', sectorId: 'sector-1', name: 'Table 2', capacity: { min: 2, max: 4 }, sortOrder: 2 },
      { id: 'table-6', sectorId: 'sector-2', name: 'Table 6', capacity: { min: 2, max: 4 }, sortOrder: 1 },
    ];

    localStorage.setItem(
      key,
      JSON.stringify({
        version: 0,
        state: {
          reservationsById: {
            'e2e-1': {
              id: 'e2e-1',
              tableId: 'table-1',
              customer: { name: 'E2E Guest', phone: '+54-11-5555-0000', email: 'e2e@example.com' },
              partySize: 2,
              startTime,
              endTime,
              durationMinutes: 90,
              status: 'CONFIRMED',
              priority: 'STANDARD',
              createdAt: startTime,
              updatedAt: startTime,
            },
          },
          tablesById: Object.fromEntries(tables.map((t) => [t.id, t])),
          sectorsById: Object.fromEntries(sectors.map((s) => [s.id, s])),
          restaurantConfig: {
            id: 'e2e-restaurant',
            name: 'E2E Bistro',
            timezone,
            operatingHours: { startHour: 8, endHour: 23 },
            slotConfiguration: { slotMinutes: 15, defaultSlotWidth: 60 },
            createdAt: startTime,
            updatedAt: startTime,
          },
          ui: {
            slotWidth: 60,
            zoom: 1,
            collapsedSectors: {},
            visibleDate: today,
            viewMode: 'day',
            startHour: 8,
          },
        },
      })
    );
  }, STORE_KEY);

  await page.goto('/timeline');
  await expect(page.getByTestId('timeline-layout')).toBeVisible();
  await expect(page.locator('[data-reservation-id="e2e-1"]')).toBeVisible();
}

test.describe('bootstrap: a visitor always lands on a day with data', () => {
  test('first-ever visit to /timeline seeds and shows reservations', async ({ page }) => {
    await gotoTimelineFresh(page);

    const state = await readStore(page);
    expect(Object.keys(state.reservationsById).length).toBeGreaterThan(0);

    // The grid is not empty and the empty state is not showing.
    expect(await visibleReservationCount(page)).toBeGreaterThan(0);
    await expect(page.getByTestId('timeline-empty-state')).toBeHidden();
  });

  test('a persisted date with no bookings is corrected on load', async ({ page }) => {
    await gotoTimelineFresh(page);
    const before = await readStore(page);
    const seedSize = Object.keys(before.reservationsById).length;

    // Force the old hardcoded date that caused the empty grid.
    await page.evaluate((key) => {
      const parsed = JSON.parse(localStorage.getItem(key)!);
      parsed.state.ui.visibleDate = '2025-10-24';
      localStorage.setItem(key, JSON.stringify(parsed));
    }, STORE_KEY);

    await page.goto('/timeline');
    await expect(page.getByTestId('timeline-layout')).toBeVisible();

    const after = await readStore(page);
    expect(after.ui.visibleDate).not.toBe('2025-10-24');
    expect(await visibleReservationCount(page)).toBeGreaterThan(0);

    // The existing seed was reused, not needlessly regenerated.
    expect(Object.keys(after.reservationsById).length).toBe(seedSize);
  });

  test('a fully elapsed seed is regenerated', async ({ page }) => {
    await gotoTimelineFresh(page);
    const before = await readStore(page);
    const oldIds = Object.keys(before.reservationsById);

    // Push every booking two years into the past.
    await page.evaluate((key) => {
      const parsed = JSON.parse(localStorage.getItem(key)!);
      const shift = (iso: string) =>
        new Date(new Date(iso).getTime() - 730 * 24 * 3600 * 1000).toISOString();
      for (const reservation of Object.values<{ startTime: string; endTime: string }>(
        parsed.state.reservationsById
      )) {
        reservation.startTime = shift(reservation.startTime);
        reservation.endTime = shift(reservation.endTime);
      }
      parsed.state.ui.visibleDate = '2024-08-17';
      localStorage.setItem(key, JSON.stringify(parsed));
    }, STORE_KEY);

    await page.goto('/timeline');
    await expect(page.getByTestId('timeline-layout')).toBeVisible();

    const after = await readStore(page);
    const newIds = Object.keys(after.reservationsById);

    expect(newIds).not.toEqual(oldIds);
    expect(await visibleReservationCount(page)).toBeGreaterThan(0);
  });

  test('the "Today" button lands on a populated day', async ({ page }) => {
    await gotoTimelineFresh(page);

    await page.getByRole('button', { name: 'Go to today' }).click();

    await expect
      .poll(() => visibleReservationCount(page), { timeout: 5000 })
      .toBeGreaterThan(0);
  });
});

test.describe('day bucketing agrees between home and timeline', () => {
  test('the calendar count for a day matches what the grid renders', async ({ page }) => {
    await gotoTimelineFresh(page);
    const { ui, restaurantConfig, reservationsById } = await readStore(page);

    // Recompute the expected count using the restaurant-timezone date.
    const expected = Object.values(reservationsById).filter((reservation) => {
      const day = new Intl.DateTimeFormat('en-CA', {
        timeZone: restaurantConfig!.timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(new Date(reservation.startTime));
      return day === ui.visibleDate;
    }).length;

    expect(await visibleReservationCount(page)).toBe(expected);
  });
});

test.describe('empty state', () => {
  test('navigating to an empty day offers a day that has bookings', async ({ page }) => {
    await gotoTimelineFresh(page);

    // Walk far past the 90-day seed window.
    for (let i = 0; i < 3; i++) {
      await page.getByRole('button', { name: 'Next period' }).click();
    }
    await page.evaluate((key) => {
      const parsed = JSON.parse(localStorage.getItem(key)!);
      parsed.state.ui.visibleDate = '2030-01-01';
      localStorage.setItem(key, JSON.stringify(parsed));
    }, STORE_KEY);
    await page.goto('/timeline');

    // Bootstrap corrects an out-of-range date, so drive to an empty day in-session.
    await expect(page.getByTestId('timeline-layout')).toBeVisible();
    for (let i = 0; i < 95; i++) {
      await page.getByRole('button', { name: 'Next period' }).click();
    }

    await expect(page.getByTestId('timeline-empty-state')).toBeVisible();
    await expect(page.getByTestId('empty-state-jump')).toBeVisible();

    await page.getByTestId('empty-state-jump').click();

    await expect(page.getByTestId('timeline-empty-state')).toBeHidden();
    expect(await visibleReservationCount(page)).toBeGreaterThan(0);
  });
});

test.describe('filters', () => {
  test('a search with no matches shows the filtered empty state', async ({ page }) => {
    await gotoTimelineFresh(page);

    await page.getByPlaceholder('Search by customer name/phone...').fill('zzzz-no-such-guest');

    await expect(page.getByTestId('timeline-empty-state')).toBeVisible();
    await expect(page.getByText('No reservations match your filters')).toBeVisible();

    await page.getByRole('button', { name: 'Clear filters' }).click();

    await expect(page.getByTestId('timeline-empty-state')).toBeHidden();
  });
});

test.describe('drag and drop', () => {
  test('dragging a reservation to a free slot moves it', async ({ page }) => {
    await gotoTimelineWithSingleReservation(page);

    const block = page.locator('[data-reservation-id="e2e-1"]');
    const originalStart = (await readStore(page)).reservationsById['e2e-1'].startTime;

    const box = (await block.boundingBox())!;
    // Grab the middle of the block, away from the resize handles on its edges.
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    // Move in steps so dnd-kit registers the gesture.
    await page.mouse.move(box.x + box.width / 2 + 120, box.y + box.height / 2, { steps: 15 });
    await page.mouse.up();

    await expect
      .poll(async () => (await readStore(page)).reservationsById['e2e-1'].startTime, {
        timeout: 5000,
      })
      .not.toBe(originalStart);
  });

  test('reservation blocks are reachable and operable by keyboard', async ({ page }) => {
    await gotoTimelineWithSingleReservation(page);

    const block = page.locator('[data-reservation-id="e2e-1"]');
    await expect(block).toBeVisible();

    // Exposed as a button with a descriptive label for screen readers.
    await expect(block).toHaveAttribute('role', 'button');
    await expect(block).toHaveAttribute('tabindex', '0');
    const label = await block.getAttribute('aria-label');
    expect(label).toBeTruthy();
    expect(label!.length).toBeGreaterThan(10);

    // Enter opens the editing drawer.
    await block.focus();
    await expect(block).toBeFocused();
    await page.keyboard.press('Enter');
    // headlessui's dialog wrappers are zero-size and never report as visible,
    // so assert on real evidence instead: the app marks the reservation as
    // being edited, and the drawer is populated with its customer.
    await expect(block).toHaveClass(/ring-yellow-500/, { timeout: 5000 });

    await expect
      .poll(
        () =>
          page.$$eval('#headlessui-portal-root input', (inputs) =>
            (inputs as HTMLInputElement[]).map((input) => input.value)
          ),
        { timeout: 5000 }
      )
      .toContain('E2E Guest');
  });
});

test.describe('accessibility surface', () => {
  test('the grid, rows and sector toggles are exposed to assistive tech', async ({ page }) => {
    await gotoTimelineFresh(page);

    await expect(page.getByRole('grid')).toBeVisible();
    expect(await page.getByRole('row').count()).toBeGreaterThan(0);

    // Sector headers are real buttons that report their expanded state.
    const sectorToggle = page.getByRole('button', { name: /Main Dining, \d+ tables/ });
    await expect(sectorToggle).toHaveAttribute('aria-expanded', 'true');
    await sectorToggle.click();
    await expect(sectorToggle).toHaveAttribute('aria-expanded', 'false');
  });

  test('reduced-motion preference collapses transitions', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await gotoTimelineFresh(page);

    const seconds = await page.evaluate(() => {
      const el = document.querySelector('[data-testid="timeline-toolbar"] button');
      return el ? parseFloat(getComputedStyle(el).transitionDuration) : null;
    });

    // Collapsed to effectively zero (the rule sets 0.01ms).
    expect(seconds).not.toBeNull();
    expect(seconds!).toBeLessThan(0.001);
  });
});

test.describe('SEO', () => {
  test('metadata, robots and sitemap are served', async ({ page, request }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Reservation Timeline/);

    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /Reservation Timeline/);
    await expect(page.locator('meta[property="og:image"]')).toHaveCount(1);

    expect((await request.get('/robots.txt')).status()).toBe(200);
    expect((await request.get('/sitemap.xml')).status()).toBe(200);

    const og = await request.get('/opengraph-image');
    expect(og.status()).toBe(200);
    expect(og.headers()['content-type']).toContain('image/png');
  });
});

test.describe('guided tour', () => {
  /** Arrive as a brand new visitor, with the tour NOT suppressed. */
  async function gotoAsNewcomer(page: Page) {
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.goto('/timeline');
    await expect(page.getByTestId('timeline-layout')).toBeVisible();
  }

  test('runs automatically on a first visit and walks every step', async ({ page }) => {
    await gotoAsNewcomer(page);

    const tour = page.getByTestId('guided-tour');
    await expect(tour).toBeVisible({ timeout: 10_000 });
    await expect(page.getByText('This is a reservation timeline')).toBeVisible();
    await expect(page.getByText('Step 1 of 7')).toBeVisible();

    // Walk to the end.
    for (let step = 1; step < 7; step++) {
      await page.getByTestId('guided-tour-next').click();
      await expect(page.getByText(`Step ${step + 1} of 7`)).toBeVisible();
    }

    await expect(page.getByText('What was built, and what was not')).toBeVisible();
    await page.getByTestId('guided-tour-next').click();
    await expect(tour).toBeHidden();
  });

  test('does not come back on the next visit', async ({ page }) => {
    await gotoAsNewcomer(page);
    await expect(page.getByTestId('guided-tour')).toBeVisible({ timeout: 10_000 });

    await page.getByRole('button', { name: 'Close the tour' }).click();
    await expect(page.getByTestId('guided-tour')).toBeHidden();

    await page.goto('/timeline');
    await expect(page.getByTestId('timeline-layout')).toBeVisible();
    await page.waitForTimeout(1200); // past the tour's own opening delay
    await expect(page.getByTestId('guided-tour')).toBeHidden();
  });

  test('can be replayed from the toolbar, and starts over', async ({ page }) => {
    await gotoTimelineFresh(page); // tour already dismissed
    await expect(page.getByTestId('guided-tour')).toBeHidden();

    await page.getByTestId('restart-tour').click();
    await expect(page.getByTestId('guided-tour')).toBeVisible();
    await expect(page.getByText('Step 1 of 7')).toBeVisible();

    await page.getByTestId('guided-tour-next').click();
    await expect(page.getByText('Step 2 of 7')).toBeVisible();

    // Reopening rewinds rather than resuming.
    await page.keyboard.press('Escape');
    await expect(page.getByTestId('guided-tour')).toBeHidden();
    await page.getByTestId('restart-tour').click();
    await expect(page.getByText('Step 1 of 7')).toBeVisible();
  });

  test('is driveable from the keyboard', async ({ page }) => {
    await gotoTimelineFresh(page);
    await page.getByTestId('restart-tour').click();
    await expect(page.getByText('Step 1 of 7')).toBeVisible();

    await page.keyboard.press('ArrowRight');
    await expect(page.getByText('Step 2 of 7')).toBeVisible();

    await page.keyboard.press('ArrowRight');
    await expect(page.getByText('Step 3 of 7')).toBeVisible();

    await page.keyboard.press('ArrowLeft');
    await expect(page.getByText('Step 2 of 7')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.getByTestId('guided-tour')).toBeHidden();
  });

  test('the timeline is usable again once the tour is closed', async ({ page }) => {
    await gotoAsNewcomer(page);
    await expect(page.getByTestId('guided-tour')).toBeVisible({ timeout: 10_000 });

    await page.getByRole('button', { name: 'Close the tour' }).click();
    await expect(page.getByTestId('guided-tour')).toBeHidden();

    // The overlay is gone, so the toolbar responds again.
    await page.getByRole('button', { name: 'Next period' }).click();
    await expect(page.getByTestId('timeline-toolbar')).toBeVisible();
  });
});
