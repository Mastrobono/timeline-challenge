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
 * Load static seed data from the single JSON file
 */
export async function loadStaticSeed(): Promise<StaticSeedData> {
  try {
    const response = await fetch('/static-seed.json');
    
    if (!response.ok) {
      throw new Error(`Failed to load static seed: ${response.statusText}`);
    }
    
    const seedData: StaticSeedData = await response.json();
    
    return seedData;
  } catch (error) {
    console.error('❌ Error loading static seed:', error);
    throw error;
  }
}

/**
 * Check if static seed exists
 */
export async function checkStaticSeedExists(): Promise<boolean> {
  try {
    const response = await fetch('/static-seed.json', { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('❌ Error checking static seed:', error);
    return false;
  }
}
