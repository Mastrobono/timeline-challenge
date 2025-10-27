import type { RestaurantConfig, Table, Sector, Reservation } from '@/types';

export interface StaticSeedData {
  restaurantConfig: RestaurantConfig;
  tables: Table[];
  sectors: Sector[];
  reservations: Reservation[];
  metadata: {
    generatedAt: string;
    timezone: string;
    type: 'small' | 'large';
    reservationsCount: number;
    tablesCount: number;
    sectorsCount: number;
  };
}

/**
 * Load static seed data from JSON files
 */
export async function loadStaticSeed(type: 'small' | 'large'): Promise<StaticSeedData> {
  try {
    const response = await fetch(`/seeds/${type}.json`);
    
    if (!response.ok) {
      throw new Error(`Failed to load ${type} seed: ${response.statusText}`);
    }
    
    const seedData: StaticSeedData = await response.json();
    
    console.log(`📁 Loaded ${type} seed:`, {
      timezone: seedData.metadata.timezone,
      reservationsCount: seedData.metadata.reservationsCount,
      tablesCount: seedData.metadata.tablesCount,
      sectorsCount: seedData.metadata.sectorsCount,
      generatedAt: seedData.metadata.generatedAt
    });
    
    return seedData;
  } catch (error) {
    console.error(`❌ Error loading ${type} seed:`, error);
    throw error;
  }
}

/**
 * Check if static seeds exist
 */
export async function checkStaticSeedsExist(): Promise<{ small: boolean; large: boolean }> {
  try {
    const [smallResponse, largeResponse] = await Promise.all([
      fetch('/seeds/small.json', { method: 'HEAD' }),
      fetch('/seeds/large.json', { method: 'HEAD' })
    ]);
    
    return {
      small: smallResponse.ok,
      large: largeResponse.ok
    };
  } catch (error) {
    console.error('❌ Error checking static seeds:', error);
    return { small: false, large: false };
  }
}
