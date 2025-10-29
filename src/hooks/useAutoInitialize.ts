import { useEffect, useState } from 'react';
import useTimelineStore from '@/store/useTimelineStore';
import { generateTablesAndSectors, generateValidReservationsInTimezone, generateRestaurantConfig } from '@/lib/seedGenerator';

/**
 * Hook to automatically initialize the store with static seeds
 * Prevents rendering until the store is completely initialized
 */
export function useAutoInitialize() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { 
    restaurantConfig, 
    reservationsById,
    tablesById,
    initializeWithValidation, 
    _hasHydrated 
  } = useTimelineStore();

  useEffect(() => {

    // If store hasn't hydrated yet, wait
    if (!_hasHydrated) {
      return;
    }

    // Check if we already have data (already initialized)
    const hasData = restaurantConfig && Object.keys(reservationsById).length > 0 && Object.keys(tablesById).length > 0;
    if (hasData) {
      setIsInitialized(true);
      setIsLoading(false);
      return;
    }

    // If no data exists, initialize
    const initializeStore = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Generate data dynamically (no need for static-seed.json file)
        const timezone = 'America/Argentina/Buenos_Aires';
        const restaurantConfig = generateRestaurantConfig(timezone);
        const { tables, sectors } = generateTablesAndSectors();
        const reservations = generateValidReservationsInTimezone(
          tables,
          sectors,
          restaurantConfig,
          timezone,
          10, // 10 reservations per day
          90  // 90 days
        );
        
        // Initialize store with generated data
        initializeWithValidation({
          reservations,
          tables,
          sectors,
          restaurantConfig
        });

        setIsInitialized(true);
        console.log('✅ Generated and initialized seed data dynamically');
        
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error('❌ Error initializing store:', err);
        setError(errorMessage);
        // In case of error, still allow rendering to show the error message
        setIsInitialized(true);
      } finally {
        setIsLoading(false);
      }
    };

    initializeStore();
  }, [_hasHydrated, restaurantConfig, reservationsById, tablesById, initializeWithValidation]);

  return {
    isInitialized,
    isLoading,
    error
  };
}
