import { NextRequest, NextResponse } from 'next/server';

// Import seed data statically
import { seedReservations, seedTables, seedSectors, seedRestaurantConfig } from '@/data/seed-small';
import { seedReservations as seedReservationsLarge, seedTables as seedTablesLarge, seedSectors as seedSectorsLarge, seedRestaurantConfig as seedRestaurantConfigLarge } from '@/data/seed-large';

export async function POST(request: NextRequest) {
  try {
    const { type } = await request.json();
    
    if (!type || !['small', 'large'].includes(type)) {
      return NextResponse.json({ error: 'Invalid type. Must be "small" or "large"' }, { status: 400 });
    }
    
    if (type === 'large') {
      return NextResponse.json({
        reservations: seedReservationsLarge,
        tables: seedTablesLarge,
        sectors: seedSectorsLarge,
        restaurantConfig: seedRestaurantConfigLarge
      });
    } else {
      return NextResponse.json({
        reservations: seedReservations,
        tables: seedTables,
        sectors: seedSectors,
        restaurantConfig: seedRestaurantConfig
      });
    }
    
  } catch {
    return NextResponse.json({ error: 'Failed to generate seeds' }, { status: 500 });
  }
}
