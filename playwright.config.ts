import { defineConfig, devices } from '@playwright/test';

/**
 * E2E configuration.
 *
 * These specs exercise the behaviours that unit tests cannot reach: the
 * bootstrap paths that decide which day the timeline opens on, real pointer
 * drags through dnd-kit, and keyboard navigation.
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: process.env.CI ? 'list' : [['list'], ['html', { open: 'never' }]],

  use: {
    // Dedicated port: :3000 is the default for every Next app on this machine,
    // and reusing whatever already listens there silently runs the suite
    // against a different project.
    baseURL: 'http://localhost:3100',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
    },
  ],

  webServer: {
    command: 'npm run dev -- --port 3100',
    url: 'http://localhost:3100',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});
