import { useEffect, useState } from 'react';
import useTimelineStore from '@/store/useTimelineStore';
import { generateTablesAndSectors, generateValidReservationsInTimezone, generateRestaurantConfig } from '@/lib/seedGenerator';
import { TimelineBootstrapService } from '@/lib/timelineBootstrapService';

const RESERVATIONS_PER_DAY = 10;
const SEED_DAYS = 90;

/**
 * Builds a fresh, self-consistent seed.
 *
 * The config is generated first so its (random) timezone can be threaded into
 * the reservation generator. Previously the generator was hardcoded to
 * Buenos Aires while the config picked a timezone at random, so bookings were
 * created in one zone and rendered in another.
 */
function buildSeed() {
  const restaurantConfig = generateRestaurantConfig();
  const { tables, sectors } = generateTablesAndSectors();
  const reservations = generateValidReservationsInTimezone(
    tables,
    sectors,
    restaurantConfig,
    restaurantConfig.timezone,
    RESERVATIONS_PER_DAY,
    SEED_DAYS
  );

  return { reservations, tables, sectors, restaurantConfig };
}

/**
 * Initializes the store and guarantees the timeline opens on a day that has
 * bookings — without the visitor having to click anything.
 *
 * Three cases are handled:
 *  - no data at all           -> generate a fresh random seed
 *  - data, but stale (window  -> regenerate, then land on a populated day
 *    entirely in the past)
 *  - data, but the persisted  -> keep the data, move to a populated day
 *    visible date is empty
 */
export function useAutoInitialize() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Only the hydration flag drives this hook; the data itself is read through
  // getState() inside the effect so that writing to the store cannot re-trigger it.
  const initializeWithValidation = useTimelineStore(s => s.initializeWithValidation);
  const setVisibleDate = useTimelineStore(s => s.setVisibleDate);
  const _hasHydrated = useTimelineStore(s => s._hasHydrated);

  useEffect(() => {
    // If store hasn't hydrated yet, wait
    if (!_hasHydrated) {
      return;
    }

    const bootstrap = () => {
      setIsLoading(true);
      setError(null);

      try {
        const store = useTimelineStore.getState();
        let config = store.restaurantConfig;
        let reservations = Object.values(store.reservationsById);

        const hasData =
          config && reservations.length > 0 && Object.keys(store.tablesById).length > 0;

        // Regenerate when there is nothing to show, or when everything on
        // record is already in the past.
        if (!hasData || TimelineBootstrapService.isSeedStale(reservations, config!.timezone)) {
          const seed = buildSeed();
          initializeWithValidation(seed);

          const next = useTimelineStore.getState();
          config = next.restaurantConfig;
          reservations = Object.values(next.reservationsById);
        }

        // Land on a day that actually has bookings.
        if (config) {
          const landingDate = TimelineBootstrapService.resolveLandingDate(
            reservations,
            config.timezone,
            useTimelineStore.getState().ui.visibleDate
          );

          if (landingDate && landingDate !== useTimelineStore.getState().ui.visibleDate) {
            setVisibleDate(landingDate);
          }
        }

        setIsInitialized(true);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error('Error initializing store:', err);
        setError(errorMessage);
        // In case of error, still allow rendering to show the error message
        setIsInitialized(true);
      } finally {
        setIsLoading(false);
      }
    };

    bootstrap();
    // Runs once per hydration: bootstrap reads the latest state via getState(),
    // so it must not re-run every time the store data it writes changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_hasHydrated]);

  return {
    isInitialized,
    isLoading,
    error,
  };
}
