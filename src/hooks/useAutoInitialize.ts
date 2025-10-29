import { useEffect, useState } from 'react';
import useTimelineStore from '@/store/useTimelineStore';
import { loadStaticSeed } from '@/lib/staticSeeds';

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
        // Load static seed
        const seedData = await loadStaticSeed();
        
        // Initialize store with seed data
        initializeWithValidation({
          reservations: seedData.reservations,
          tables: seedData.tables,
          sectors: seedData.sectors,
          restaurantConfig: seedData.restaurantConfig
        });

        setIsInitialized(true);
        
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error('Error initializing store:', err);
        setError(errorMessage);
        // In case of error, allow rendering to show the error
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
