const fs = require('fs');
const path = require('path');
const { fromZonedTime } = require('date-fns-tz');

// Simple implementations for seed generation (avoiding ES6 import issues)
function generateRestaurantConfig(timezone) {
  const restaurantNames = [
    'Bistro Central',
    'Café del Sol',
    'La Terraza',
    'El Jardín',
    'Marina Restaurant',
    'Downtown Bistro',
    'Garden View',
    'Sunset Café',
    'Urban Kitchen',
    'Riverside Dining'
  ];
  
  // Generate random operating hours (start between 6-12, end between 18-24)
  const startHour = Math.floor(Math.random() * 7) + 6; // 6-12
  const endHour = Math.floor(Math.random() * 7) + 18; // 18-24
  
  // Ensure end hour is after start hour
  const finalEndHour = Math.max(endHour, startHour + 6);
  
  return {
    id: 'restaurant-1',
    name: restaurantNames[Math.floor(Math.random() * restaurantNames.length)],
    timezone: timezone,
    operatingHours: {
      startHour: startHour,
      endHour: finalEndHour
    },
    slotConfiguration: {
      slotMinutes: 15,
      defaultSlotWidth: 60
    }
  };
}

function generateTablesAndSectors(isLarge = false) {
  // Base sectors
  const sectors = [
    {
      id: 'sector-1',
      name: 'Main Dining',
      color: '#3B82F6',
      sortOrder: 1
    },
    {
      id: 'sector-2',
      name: 'Terrace',
      color: '#10B981',
      sortOrder: 2
    },
    {
      id: 'sector-3',
      name: 'Private Room',
      color: '#F59E0B',
      sortOrder: 3
    }
  ];

  // For large, add more sectors
  if (isLarge) {
    sectors.push(
      {
        id: 'sector-4',
        name: 'Bar Area',
        color: '#8B5CF6',
        sortOrder: 4
      },
      {
        id: 'sector-5',
        name: 'Outdoor Patio',
        color: '#EC4899',
        sortOrder: 5
      },
      {
        id: 'sector-6',
        name: 'VIP Lounge',
        color: '#EF4444',
        sortOrder: 6
      }
    );
  }

  const tables = [];
  
  if (isLarge) {
    // Generate 60+ tables for large dataset
    let tableCounter = 1;
    
    // Main Dining - 20 tables
    for (let i = 0; i < 20; i++) {
      tables.push({
        id: `table-${tableCounter}`,
        sectorId: 'sector-1',
        name: `Table ${tableCounter}`,
        capacity: { min: 2, max: 4 + Math.floor(Math.random() * 4) },
        sortOrder: tableCounter++
      });
    }
    
    // Terrace - 15 tables
    for (let i = 0; i < 15; i++) {
      tables.push({
        id: `table-${tableCounter}`,
        sectorId: 'sector-2',
        name: `Table ${tableCounter}`,
        capacity: { min: 2, max: 4 + Math.floor(Math.random() * 3) },
        sortOrder: tableCounter++
      });
    }
    
    // Private Room - 10 tables
    for (let i = 0; i < 10; i++) {
      tables.push({
        id: `table-${tableCounter}`,
        sectorId: 'sector-3',
        name: `Table ${tableCounter}`,
        capacity: { min: 8, max: 12 + Math.floor(Math.random() * 4) },
        sortOrder: tableCounter++
      });
    }
    
    // Bar Area - 12 tables
    for (let i = 0; i < 12; i++) {
      tables.push({
        id: `table-${tableCounter}`,
        sectorId: 'sector-4',
        name: `Table ${tableCounter}`,
        capacity: { min: 2, max: 4 },
        sortOrder: tableCounter++
      });
    }
    
    // Outdoor Patio - 8 tables
    for (let i = 0; i < 8; i++) {
      tables.push({
        id: `table-${tableCounter}`,
        sectorId: 'sector-5',
        name: `Table ${tableCounter}`,
        capacity: { min: 4, max: 6 },
        sortOrder: tableCounter++
      });
    }
    
    // VIP Lounge - 5 tables
    for (let i = 0; i < 5; i++) {
      tables.push({
        id: `table-${tableCounter}`,
        sectorId: 'sector-6',
        name: `Table ${tableCounter}`,
        capacity: { min: 6, max: 10 },
        sortOrder: tableCounter++
      });
    }
    
    // Total: 20 + 15 + 10 + 12 + 8 + 5 = 70 tables
  } else {
    // Small dataset - 10 tables
    tables.push(
      // Main Dining tables
      { id: 'table-1', sectorId: 'sector-1', name: 'Table 1', capacity: { min: 2, max: 4 }, sortOrder: 1 },
      { id: 'table-2', sectorId: 'sector-1', name: 'Table 2', capacity: { min: 5, max: 6 }, sortOrder: 2 },
      { id: 'table-3', sectorId: 'sector-1', name: 'Table 3', capacity: { min: 2, max: 4 }, sortOrder: 3 },
      { id: 'table-4', sectorId: 'sector-1', name: 'Table 4', capacity: { min: 3, max: 5 }, sortOrder: 4 },
      { id: 'table-5', sectorId: 'sector-1', name: 'Table 5', capacity: { min: 2, max: 4 }, sortOrder: 5 },
      
      // Terrace tables
      { id: 'table-6', sectorId: 'sector-2', name: 'Table 6', capacity: { min: 2, max: 4 }, sortOrder: 1 },
      { id: 'table-7', sectorId: 'sector-2', name: 'Table 7', capacity: { min: 4, max: 6 }, sortOrder: 2 },
      { id: 'table-8', sectorId: 'sector-2', name: 'Table 8', capacity: { min: 2, max: 4 }, sortOrder: 3 },
      
      // Private Room tables
      { id: 'table-9', sectorId: 'sector-3', name: 'Table 9', capacity: { min: 8, max: 12 }, sortOrder: 1 },
      { id: 'table-10', sectorId: 'sector-3', name: 'Table 10', capacity: { min: 6, max: 10 }, sortOrder: 2 }
    );
  }

  return { sectors, tables };
}

function generateReservationsInTimezone(tables, sectors, restaurantConfig, timezone, count) {
  const today = new Date();
  
  // Calculate available slots within operating hours
  const { startHour, endHour } = restaurantConfig.operatingHours;
  const slotMinutes = restaurantConfig.slotConfiguration.slotMinutes;
  const slotsPerHour = 60 / slotMinutes;
  const totalSlotsPerDay = (endHour - startHour) * slotsPerHour;
  
  // Track occupied slots per table per day to avoid conflicts
  const occupiedSlots = {};
  
  // Generate more reservations than needed to account for filtering
  const targetCount = count;
  const generateCount = Math.ceil(count * 1.5); // Generate 50% more to account for filtering
  const reservations = [];
  
  // Calculate total available slots across all tables and days
  const totalSlotsPerTablePerDay = totalSlotsPerDay;
  const totalTables = tables.length;
  const totalDays = count >= 400 ? 30 : count >= 50 ? 14 : 7; // Use 30 days for 400+, 14 for 50+, 7 for small
  const totalAvailableSlots = totalSlotsPerTablePerDay * totalTables * totalDays;
  
  // Generate more reservations than needed
  for (let i = 0; i < generateCount; i++) {
    
    const table = tables[Math.floor(Math.random() * tables.length)];
    
    // Extend day range for large datasets
    const maxDays = totalDays;
    const dayOffset = Math.floor(Math.random() * maxDays); // 0 to maxDays-1 days from today
    const reservationDate = new Date(today.getTime() + (dayOffset * 24 * 60 * 60 * 1000));
    
    // Create a unique key for this table and day
    const tableDayKey = `${table.id}-${dayOffset}`;
    if (!occupiedSlots[tableDayKey]) {
      occupiedSlots[tableDayKey] = new Set();
    }
    
    // Find available slots for this table and day
    const availableSlots = [];
    for (let slot = 0; slot < totalSlotsPerDay; slot++) {
      if (!occupiedSlots[tableDayKey].has(slot)) {
        availableSlots.push(slot);
      }
    }
    
    if (availableSlots.length === 0) {
      continue; // No available slots for this table/day
    }
    
    // Pick a random available slot
    const startSlot = availableSlots[Math.floor(Math.random() * availableSlots.length)];
    
    // Generate duration (1-4 hours, in slots)
    const minDurationSlots = Math.ceil(60 / slotMinutes); // 1 hour minimum
    const maxDurationSlots = Math.ceil(240 / slotMinutes); // 4 hours maximum
    const durationSlots = minDurationSlots + Math.floor(Math.random() * (maxDurationSlots - minDurationSlots + 1));
    
    // Check if the duration fits within the day
    if (startSlot + durationSlots > totalSlotsPerDay) {
      continue; // Duration doesn't fit
    }
    
    // Mark slots as occupied
    for (let slot = startSlot; slot < startSlot + durationSlots; slot++) {
      occupiedSlots[tableDayKey].add(slot);
    }
    
    // Convert slot to actual time
    const startHourActual = startHour + Math.floor(startSlot / slotsPerHour);
    const startMinuteActual = (startSlot % slotsPerHour) * slotMinutes;
    
    // Create reservation time in the target timezone
    const reservationDateTime = new Date(reservationDate);
    reservationDateTime.setHours(startHourActual, startMinuteActual, 0, 0);
    
    // Convert to UTC using date-fns-tz
    const utcStartTime = fromZonedTime(reservationDateTime, timezone);
    const utcEndTime = new Date(utcStartTime.getTime() + (durationSlots * slotMinutes * 60000));
    
    // Generate realistic party size based on table capacity
    // Small tables (max 4-6): prefer smaller groups (1-4)
    // Medium tables (max 6-10): mixed groups (2-8) 
    // Large tables (max 10+): prefer larger groups (4-max)
    let partySize;
    if (table.capacity.max <= 6) {
      // Small tables: 1 to max, weighted toward smaller numbers
      const random = Math.random();
      if (random < 0.4) partySize = 1;
      else if (random < 0.7) partySize = 2;
      else if (random < 0.9) partySize = 3;
      else partySize = Math.floor(Math.random() * (table.capacity.max - 3)) + 4;
    } else if (table.capacity.max <= 10) {
      // Medium tables: 2 to max, more balanced
      partySize = Math.floor(Math.random() * (table.capacity.max - 1)) + 2;
    } else {
      // Large tables: prefer larger groups, minimum 4 people
      const minParty = Math.max(4, Math.floor(table.capacity.max * 0.3));
      partySize = Math.floor(Math.random() * (table.capacity.max - minParty + 1)) + minParty;
    }
    
    // Ensure party size doesn't exceed table capacity
    partySize = Math.min(partySize, table.capacity.max);

    const reservation = {
      id: `res-${Date.now()}-${i}`,
      tableId: table.id,
      customer: {
        name: `Customer ${i}`,
        phone: `+54-9-${Math.floor(Math.random() * 90000000) + 10000000}`,
        email: `customer${i}@example.com`,
        notes: Math.random() > 0.7 ? `Special request ${i}` : undefined
      },
      partySize: partySize,
      startTime: utcStartTime.toISOString(),
      endTime: utcEndTime.toISOString(),
      durationMinutes: durationSlots * slotMinutes,
      status: Math.random() > 0.2 ? 'CONFIRMED' : 'PENDING',
      priority: Math.random() > 0.8 ? 'VIP' : Math.random() > 0.6 ? 'LARGE_GROUP' : 'STANDARD',
      notes: Math.random() > 0.8 ? `Reservation notes ${i}` : undefined,
      source: 'seed',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    reservations.push(reservation);
  }
  
  // Return exactly the requested count
  return reservations.slice(0, targetCount);
}

// Timezones to choose from
const timezones = [
  'America/Argentina/Buenos_Aires',
  'America/New_York',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Australia/Sydney',
  'America/Los_Angeles',
  'America/Chicago'
];

// Generate seed based on type
function generateSeed(seedType) {
  console.log(`🌱 Generating ${seedType} seed...`);
  
  // Pick a random timezone
  const timezone = timezones[Math.floor(Math.random() * timezones.length)];
  console.log(`📍 Selected timezone: ${timezone}`);
  
  // Generate restaurant config
  const restaurantConfig = generateRestaurantConfig(timezone);
  
  // Generate tables and sectors
  const isLarge = seedType === 'large';
  const { tables, sectors } = generateTablesAndSectors(isLarge);
  
  // Determine reservation count
  const reservationCount = isLarge ? 450 : 50; // Large: 450, Small: 50
  console.log(`🎯 Generating ${reservationCount} reservations for ${tables.length} tables...`);
  
  // Generate reservations
  const reservations = generateReservationsInTimezone(tables, sectors, restaurantConfig, timezone, reservationCount);
  
  const seedData = {
    restaurantConfig,
    tables,
    sectors,
    reservations,
    metadata: {
      generatedAt: new Date().toISOString(),
      timezone,
      type: seedType,
      reservationsCount: reservations.length,
      tablesCount: tables.length,
      sectorsCount: sectors.length
    }
  };
  
  // Ensure public directory exists
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Write to single file
  const filePath = path.join(publicDir, 'static-seed.json');
  fs.writeFileSync(filePath, JSON.stringify(seedData, null, 2));
  console.log(`✅ Seed generated: ${filePath}`);
  
  return seedData;
}

// Main function
function main() {
  console.log('🚀 Starting static seed generation...');
  
  // Read command-line argument
  const seedTypeArg = process.argv[2] || 'small';
  
  // Validate argument
  if (seedTypeArg !== 'small' && seedTypeArg !== 'large') {
    console.error('❌ Error: Invalid seed type. Must be "small" or "large"');
    console.log('Usage: node generate-static-seeds.js [small|large]');
    console.log('Default: small');
    process.exit(1);
  }
  
  try {
    const seedData = generateSeed(seedTypeArg);
    
    console.log('\n📊 Summary:');
    console.log(`Seed type: ${seedData.metadata.type}`);
    console.log(`Reservations: ${seedData.metadata.reservationsCount}`);
    console.log(`Tables: ${seedData.metadata.tablesCount}`);
    console.log(`Sectors: ${seedData.metadata.sectorsCount}`);
    console.log(`Timezone: ${seedData.metadata.timezone}`);
    console.log(`Output file: public/static-seed.json`);
    
    console.log('\n✅ Static seed generated successfully!');
  } catch (error) {
    console.error('❌ Error generating seed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateSeed };
