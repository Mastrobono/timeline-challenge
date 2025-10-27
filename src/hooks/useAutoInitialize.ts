import { useEffect, useState } from 'react';
import useTimelineStore from '@/store/useTimelineStore';
import { loadStaticSeed } from '@/lib/staticSeeds';

/**
 * Hook para inicializar automáticamente el store con static seeds en modo desarrollo
 * Previene el renderizado hasta que el store esté completamente inicializado
 */
export function useAutoInitialize() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { 
    restaurantConfig, 
    initializeWithValidation, 
    _hasHydrated 
  } = useTimelineStore();

  useEffect(() => {
    // Solo inicializar en modo desarrollo
    if (process.env.NODE_ENV !== 'development') {
      setIsInitialized(true);
      return;
    }

    // Si ya hay configuración de restaurante, está inicializado
    if (restaurantConfig) {
      setIsInitialized(true);
      return;
    }

    // Si el store no se ha hidratado aún, esperar
    if (!_hasHydrated) {
      return;
    }

    const initializeStore = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log('🚀 Auto-inicializando store con static seed...');
        
        // Cargar el seed estático
        const seedData = await loadStaticSeed();
        
        console.log('📁 Static seed cargado:', {
          timezone: seedData.metadata.timezone,
          reservationsCount: seedData.metadata.reservationsCount,
          tablesCount: seedData.metadata.tablesCount,
          sectorsCount: seedData.metadata.sectorsCount,
          generatedAt: seedData.metadata.generatedAt
        });

        // Inicializar el store con los datos del seed
        initializeWithValidation({
          reservations: seedData.reservations,
          tables: seedData.tables,
          sectors: seedData.sectors,
          restaurantConfig: seedData.restaurantConfig
        });

        setIsInitialized(true);
        console.log('✅ Store inicializado automáticamente con static seed');
        
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
        console.error('❌ Error auto-inicializando store:', err);
        setError(errorMessage);
        // En caso de error, permitir renderizar para mostrar el error
        setIsInitialized(true);
      } finally {
        setIsLoading(false);
      }
    };

    initializeStore();
  }, [_hasHydrated, restaurantConfig, initializeWithValidation]);

  // En modo desarrollo, solo permitir renderizar si está inicializado
  const shouldRender = process.env.NODE_ENV === 'development' ? isInitialized : true;

  return {
    isInitialized: shouldRender,
    isLoading,
    error
  };
}
