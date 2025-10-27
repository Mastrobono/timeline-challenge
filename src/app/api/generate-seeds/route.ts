import { NextRequest, NextResponse } from 'next/server';
import { generateReservationsInTimezone, generateTablesAndSectors, generateRestaurantConfig } from '@/lib/seedGenerator';

export async function POST(request: NextRequest) {
  try {
    const { type, timezone = 'America/Argentina/Buenos_Aires' } = await request.json();
    
    console.log('🔄 API Generate Seeds Request:', { type, timezone });
    
    if (!type || !['small', 'large'].includes(type)) {
      return NextResponse.json({ error: 'Invalid type. Must be "small" or "large"' }, { status: 400 });
    }
    
    // Generate tables and sectors (these don't depend on timezone)
    const { tables, sectors } = generateTablesAndSectors();
    
    // Generate restaurant config with the specified timezone
    const restaurantConfig = generateRestaurantConfig(timezone);
    
    // Generate reservations in the specified timezone
    const reservationCount = type === 'large' ? 200 : 50;
    
    const reservations = generateReservationsInTimezone(
      tables,
      sectors,
      restaurantConfig,
      timezone,
      reservationCount
    );
    
    console.log('✅ API Generate Seeds Response:', {
      reservationsCount: reservations.length,
      restaurantName: restaurantConfig.name,
      restaurantTimezone: restaurantConfig.timezone
    });
    
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
