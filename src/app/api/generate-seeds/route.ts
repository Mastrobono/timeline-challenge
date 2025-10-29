import { NextRequest, NextResponse } from 'next/server';
import { generateValidReservationsInTimezone, generateTablesAndSectors, generateRestaurantConfig } from '@/lib/seedGenerator';

export async function POST(request: NextRequest) {
  try {
    const { type, timezone = 'America/Argentina/Buenos_Aires' } = await request.json();
    
    // Generate seed data
    
    if (!type || !['small', 'large'].includes(type)) {
      return NextResponse.json({ error: 'Invalid type. Must be "small" or "large"' }, { status: 400 });
    }
    
    // Generate tables and sectors (these don't depend on timezone)
    const { tables, sectors } = generateTablesAndSectors();
    
    // Generate restaurant config with the specified timezone
    const restaurantConfig = generateRestaurantConfig(timezone);
    
    // Generate reservations with validation
    const reservationsPerDay = type === 'large' ? 15 : 8;
    const totalDays = type === 'large' ? 30 : 20;
    
    const reservations = generateValidReservationsInTimezone(
      tables,
      sectors,
      restaurantConfig,
      timezone,
      reservationsPerDay,
      totalDays
    );
    
    return NextResponse.json({
      reservations,
      tables,
      sectors,
      restaurantConfig
    });
    
  } catch (error) {
    console.error('❌ API Generate Seeds Error:', error);
    return NextResponse.json({ error: 'Failed to generate seeds' }, { status: 500 });
  }
}
