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

function generateTablesAndSectors() {
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

  const tables = [
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
  ];

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
  const generateCount = Math.ceil(count * 2); // Generate 100% more to account for filtering
  const reservations = [];
  
  // Calculate total available slots across all tables and days
  const totalSlotsPerTablePerDay = totalSlotsPerDay;
  const totalTables = tables.length;
  const totalDays = count > 100 ? 14 : 7; // Use 2 weeks for large datasets
  const totalAvailableSlots = totalSlotsPerTablePerDay * totalTables * totalDays;
  
  // Generate more reservations than needed
  for (let i = 0; i < generateCount; i++) {
    
    const table = tables[Math.floor(Math.random() * tables.length)];
    
    // Extend day range for large datasets
    const maxDays = targetCount > 100 ? 14 : 7; // Use 2 weeks for large datasets
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
    
    const reservation = {
      id: `res-${Date.now()}-${i}`,
      tableId: table.id,
      customer: {
        name: `Customer ${i}`,
        phone: `+54-9-${Math.floor(Math.random() * 90000000) + 10000000}`,
        email: `customer${i}@example.com`,
        notes: Math.random() > 0.7 ? `Special request ${i}` : undefined
      },
      partySize: Math.floor(Math.random() * (table.capacity.max - table.capacity.min + 1)) + table.capacity.min,
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

// Generate small seed
function generateSmallSeed() {
  console.log('🌱 Generating small seed...');
  
  // Pick a random timezone
  const timezone = timezones[Math.floor(Math.random() * timezones.length)];
  console.log(`📍 Selected timezone: ${timezone}`);
  
  // Generate restaurant config
  const restaurantConfig = generateRestaurantConfig(timezone);
  
  // Generate tables and sectors
  const { tables, sectors } = generateTablesAndSectors();
  
  // Generate reservations
  const reservations = generateReservationsInTimezone(tables, sectors, restaurantConfig, timezone, 20);
  
  const seedData = {
    restaurantConfig,
    tables,
    sectors,
    reservations,
    metadata: {
      generatedAt: new Date().toISOString(),
      timezone,
      type: 'small',
      reservationsCount: reservations.length,
      tablesCount: tables.length,
      sectorsCount: sectors.length
    }
  };
  
  // Write to file
  const filePath = path.join(__dirname, '../public/seeds/small.json');
  fs.writeFileSync(filePath, JSON.stringify(seedData, null, 2));
  console.log(`✅ Small seed generated: ${filePath}`);
  
  return seedData;
}

// Generate large seed
function generateLargeSeed() {
  console.log('🌱 Generating large seed...');
  
  // Pick a random timezone
  const timezone = timezones[Math.floor(Math.random() * timezones.length)];
  console.log(`📍 Selected timezone: ${timezone}`);
  
  // Generate restaurant config
  const restaurantConfig = generateRestaurantConfig(timezone);
  
  // Generate tables and sectors
  const { tables, sectors } = generateTablesAndSectors();
  
  // Generate reservations
  const reservations = generateReservationsInTimezone(tables, sectors, restaurantConfig, timezone, 50);
  
  const seedData = {
    restaurantConfig,
    tables,
    sectors,
    reservations,
    metadata: {
      generatedAt: new Date().toISOString(),
      timezone,
      type: 'large',
      reservationsCount: reservations.length,
      tablesCount: tables.length,
      sectorsCount: sectors.length
    }
  };
  
  // Write to file
  const filePath = path.join(__dirname, '../public/seeds/large.json');
  fs.writeFileSync(filePath, JSON.stringify(seedData, null, 2));
  console.log(`✅ Large seed generated: ${filePath}`);
  
  return seedData;
}

// Main function
function main() {
  console.log('🚀 Starting static seed generation...');
  
  try {
    const smallSeed = generateSmallSeed();
    const largeSeed = generateLargeSeed();
    
    console.log('\n📊 Summary:');
    console.log(`Small seed: ${smallSeed.metadata.reservationsCount} reservations in ${smallSeed.metadata.timezone}`);
    console.log(`Large seed: ${largeSeed.metadata.reservationsCount} reservations in ${largeSeed.metadata.timezone}`);
    
    console.log('\n✅ Static seeds generated successfully!');
  } catch (error) {
    console.error('❌ Error generating seeds:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generateSmallSeed, generateLargeSeed };
