const fs = require('fs');
const path = require('path');

// Simple validation functions for Node.js
function validateReservation(reservation, restaurantConfig, existingReservations = []) {
  const errors = [];
  
  // Validate operating hours
  const startTime = new Date(reservation.startTime);
  const endTime = new Date(reservation.endTime);
  
  // Check if reservation starts before restaurant opens
  if (startTime.getHours() < restaurantConfig.operatingHours.startHour) {
    errors.push(`Reservation starts at ${startTime.getHours()}:${startTime.getMinutes().toString().padStart(2, '0')}, but restaurant opens at ${restaurantConfig.operatingHours.startHour}:00`);
  }
  
  // Check if reservation ends after restaurant closes
  const endHour = restaurantConfig.operatingHours.endHour;
  const endMinute = 0; // Restaurant closes at XX:00 (uses config)
  if (endTime.getHours() > endHour || (endTime.getHours() === endHour && endTime.getMinutes() > endMinute)) {
    errors.push(`Reservation ends at ${endTime.getHours()}:${endTime.getMinutes().toString().padStart(2, '0')}, but restaurant closes at ${endHour}:${endMinute.toString().padStart(2, '0')}`);
  }
  
  // Check if reservation is at least 1 hour long
  const durationHours = (endTime - startTime) / (1000 * 60 * 60);
  if (durationHours < 1) {
    errors.push(`Reservation duration is too short: ${durationHours.toFixed(2)} hours`);
  }
  
  // Check if reservation is not longer than 4 hours
  if (durationHours > 4) {
    errors.push(`Reservation duration is too long: ${durationHours.toFixed(2)} hours`);
  }
  
  // Check for conflicts with existing reservations
  for (const existing of existingReservations) {
    if (existing.tableId === reservation.tableId) {
      const existingStart = new Date(existing.startTime);
      const existingEnd = new Date(existing.endTime);
      
      // Check if reservations overlap
      if (startTime < existingEnd && endTime > existingStart) {
        errors.push(`Reservation conflicts with existing reservation ${existing.id} on table ${reservation.tableId}`);
        break; // Only report one conflict per reservation
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Datos realistas para generar seeds
const customerNames = [
  'Ana García', 'Carlos López', 'María Rodríguez', 'José Martínez', 'Laura Sánchez',
  'Miguel González', 'Carmen Pérez', 'Antonio Ruiz', 'Isabel Díaz', 'Francisco Martín',
  'Elena Moreno', 'David Jiménez', 'Cristina Romero', 'Javier Torres', 'Patricia Navarro',
  'Roberto Herrera', 'Sandra Vega', 'Alejandro Castro', 'Natalia Ortega', 'Fernando Ramos',
  'Lucía Morales', 'Pablo Delgado', 'Beatriz Guerrero', 'Sergio Peña', 'Mónica Flores',
  'Daniel Campos', 'Raquel Vargas', 'Álvaro Serrano', 'Teresa Molina', 'Rubén Herrera',
  'Sofia Reyes', 'Adrián Cabrera', 'Claudia Medina', 'Hugo Aguilar', 'Valeria Silva',
  'Gabriel Rojas', 'Andrea Mendoza', 'Nicolás Fuentes', 'Camila Espinoza', 'Sebastián Vega'
];

const lastNames = [
  'García', 'López', 'Rodríguez', 'Martínez', 'Sánchez', 'González', 'Pérez', 'Ruiz',
  'Díaz', 'Martín', 'Moreno', 'Jiménez', 'Romero', 'Torres', 'Navarro', 'Herrera',
  'Vega', 'Castro', 'Ortega', 'Ramos', 'Morales', 'Delgado', 'Guerrero', 'Peña',
  'Flores', 'Campos', 'Vargas', 'Serrano', 'Molina', 'Reyes', 'Cabrera', 'Medina',
  'Aguilar', 'Silva', 'Rojas', 'Mendoza', 'Fuentes', 'Espinoza', 'Vega', 'Herrera'
];

const phoneNumbers = [
  '+54-11-1234-5678', '+54-11-2345-6789', '+54-11-3456-7890', '+54-11-4567-8901',
  '+54-11-5678-9012', '+54-11-6789-0123', '+54-11-7890-1234', '+54-11-8901-2345',
  '+54-11-9012-3456', '+54-11-0123-4567', '+54-11-1111-2222', '+54-11-3333-4444',
  '+54-11-5555-6666', '+54-11-7777-8888', '+54-11-9999-0000', '+54-11-1212-3434',
  '+54-11-5656-7878', '+54-11-9090-1212', '+54-11-1313-4545', '+54-11-6767-8989'
];

const emailDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com', 'live.com'];

const statuses = ['PENDING', 'CONFIRMED', 'SEATED', 'FINISHED', 'NO_SHOW', 'CANCELLED'];
const priorities = ['STANDARD', 'VIP', 'LARGE_GROUP'];
const sources = ['phone', 'web', 'walkin', 'app'];

const tableNames = [
  'Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5', 'Table 6', 'Table 7', 'Table 8',
  'Table 9', 'Table 10', 'Table 11', 'Table 12', 'Table 13', 'Table 14', 'Table 15', 'Table 16',
  'Table 17', 'Table 18', 'Table 19', 'Table 20', 'Table 21', 'Table 22', 'Table 23', 'Table 24',
  'Table 25', 'Table 26', 'Table 27', 'Table 28', 'Table 29', 'Table 30'
];

const sectorNames = [
  'Main Dining', 'Terrace', 'Private Room', 'Bar', 'Patio',
  'VIP Section', 'Family Dining', 'Upper Terrace', 'Event Hall'
];

const sectorColors = [
  '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
  '#06B6D4', '#84CC16', '#F97316', '#EC4899'
];

// Función para generar un nombre aleatorio
function generateRandomName() {
  const firstName = customerNames[Math.floor(Math.random() * customerNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

// Función para generar un email aleatorio
function generateRandomEmail(name) {
  const domain = emailDomains[Math.floor(Math.random() * emailDomains.length)];
  const namePart = name.toLowerCase().replace(/\s+/g, '');
  return `${namePart}@${domain}`;
}

// Función para generar un teléfono aleatorio
function generateRandomPhone() {
  return phoneNumbers[Math.floor(Math.random() * phoneNumbers.length)];
}

// Función para generar una fecha aleatoria en el rango especificado
function generateRandomDate(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
}

// Generate realistic reservation time
function generateReservationTime(date) {
  // Restaurant hours: 7:00 AM - 10:45 PM (7-22.75)
  // Generate start time between 7:00 and 19:00 (to allow max 3:45 hours duration)
  const hour = Math.floor(Math.random() * 12) + 7; // Between 7:00 and 18:00
  const minute = Math.random() < 0.5 ? 0 : 30; // 0 or 30 minutes
  
  const startTime = new Date(date);
  startTime.setHours(hour, minute, 0, 0);
  
  // Duration between 1-3 hours max, calculating to end before 22:45
  const maxHoursUntilClose = 22.75 - hour; // 22:45 = 22.75 hours
  const maxDuration = Math.min(3, maxHoursUntilClose - 0.25); // -0.25 for margin
  const duration = Math.random() * maxDuration + 1; // Between 1 and maxDuration hours
  
  const endTime = new Date(startTime);
  endTime.setHours(startTime.getHours() + Math.floor(duration));
  endTime.setMinutes(startTime.getMinutes() + Math.round((duration % 1) * 60));
  
  // Final validation: if for any reason it ends after 22:45, adjust
  if (endTime.getHours() > 22 || (endTime.getHours() === 22 && endTime.getMinutes() > 45)) {
    endTime.setHours(22, 45, 0, 0);
  }
  
  return {
    startTime: startTime.toISOString().replace('Z', '-03:00'),
    endTime: endTime.toISOString().replace('Z', '-03:00'),
    durationMinutes: Math.round(duration * 60)
  };
}

// Check if a reservation conflicts with existing reservations
function hasConflict(newReservation, existingReservations) {
  if (!newReservation || !newReservation.startTime || !newReservation.endTime) {
    return true; // Consider invalid reservations as conflicts
  }
  
  const newStart = new Date(newReservation.startTime);
  const newEnd = new Date(newReservation.endTime);
  
  return existingReservations.some(existing => {
    const existingStart = new Date(existing.startTime);
    const existingEnd = new Date(existing.endTime);
    
    // Check if reservations overlap
    return (newStart < existingEnd && newEnd > existingStart);
  });
}

// Generate a reservation with simplified validation
function generateReservation(id, tableId, date, existingReservations = [], tables) {
  const name = generateRandomName();
  const email = generateRandomEmail(name);
  const phone = generateRandomPhone();
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const priority = priorities[Math.floor(Math.random() * priorities.length)];
  const source = sources[Math.floor(Math.random() * sources.length)];
  
  // Find the table to get its capacity
  const table = tables.find(t => t.id === tableId);
  if (!table) {
    return null; // Table doesn't exist
  }
  
  // Generate party size within table capacity
  const minCapacity = table.capacity.min;
  const maxCapacity = table.capacity.max;
  const partySize = Math.floor(Math.random() * (maxCapacity - minCapacity + 1)) + minCapacity;
  
  // Generate time with simple approach
  const { startTime, endTime, durationMinutes } = generateReservationTime(date);
  
  // Check if reservation ends before restaurant closes (22:00)
  const endTimeDate = new Date(endTime);
  if (endTimeDate.getHours() > 22 || (endTimeDate.getHours() === 22 && endTimeDate.getMinutes() > 0)) {
    return null; // Invalid time
  }
  
  const reservation = {
    id: `res-${id}`,
    tableId,
    customer: {
      name,
      phone,
      email
    },
    partySize,
    startTime,
    endTime,
    durationMinutes,
    status,
    priority,
    source,
    createdAt: new Date(date).toISOString().replace('Z', '-03:00'),
    updatedAt: new Date(date).toISOString().replace('Z', '-03:00')
  };
  
  // Check for conflicts
  if (hasConflict(reservation, existingReservations)) {
    return null; // Has conflict
  }
  
  return reservation;
}

// Generate a reservation with shorter duration to avoid conflicts
function generateShortReservation(id, tableId, date, existingReservations = [], tables) {
  const name = generateRandomName();
  const email = generateRandomEmail(name);
  const phone = generateRandomPhone();
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const priority = priorities[Math.floor(Math.random() * priorities.length)];
  const source = sources[Math.floor(Math.random() * sources.length)];
  
  // Find the table to get its capacity
  const table = tables.find(t => t.id === tableId);
  if (!table) {
    return null; // Table doesn't exist
  }
  
  // Generate party size within table capacity
  const minCapacity = table.capacity.min;
  const maxCapacity = table.capacity.max;
  const partySize = Math.floor(Math.random() * (maxCapacity - minCapacity + 1)) + minCapacity;
  
  // Try to generate a valid reservation with shorter duration (max 20 attempts)
  let reservation;
  let attempts = 0;
  const maxAttempts = 20;
  
  do {
    // Generate shorter duration (1-1.5 hours)
    const hour = Math.floor(Math.random() * 13) + 7; // Between 7:00 and 19:00
    const minute = Math.random() < 0.5 ? 0 : 30; // 0 or 30 minutes
    
    const startTime = new Date(date);
    startTime.setHours(hour, minute, 0, 0);
    
    // Shorter duration: 1-1.5 hours
    const duration = Math.random() * 0.5 + 1; // Between 1 and 1.5 hours
    
    const endTime = new Date(startTime);
    endTime.setHours(startTime.getHours() + Math.floor(duration));
    endTime.setMinutes(startTime.getMinutes() + Math.round((duration % 1) * 60));
    
    // Check if reservation ends before restaurant closes (22:45)
    if (endTime.getHours() > 22 || (endTime.getHours() === 22 && endTime.getMinutes() > 45)) {
      attempts++;
      continue; // Try again with different time
    }
    
    // Additional validation: ensure start time is within restaurant hours (7:00-22:45)
    if (startTime.getHours() < 7 || startTime.getHours() > 22 || (startTime.getHours() === 22 && startTime.getMinutes() > 45)) {
      attempts++;
      continue; // Try again with different time
    }
    
    reservation = {
      id: `res-${id}`,
      tableId,
      customer: {
        name,
        phone,
        email
      },
      partySize,
      startTime: startTime.toISOString().replace('Z', '-03:00'),
      endTime: endTime.toISOString().replace('Z', '-03:00'),
      durationMinutes: durationSlots * 15,
      status,
      priority,
      source,
      createdAt: new Date(date).toISOString().replace('Z', '-03:00'),
      updatedAt: new Date(date).toISOString().replace('Z', '-03:00')
    };
    
    attempts++;
  } while (hasConflict(reservation, existingReservations) && attempts < maxAttempts);
  
  // If we couldn't find a valid reservation, return null
  if (attempts >= maxAttempts) {
    return null;
  }
  
  return reservation;
}

// Function to generate sectors
function generateSectors() {
  return sectorNames.map((name, index) => ({
    id: `sector-${index + 1}`,
    name,
    color: sectorColors[index % sectorColors.length],
    sortOrder: index + 1
  }));
}

// Function to generate tables
function generateTables(sectorCount, tableCount) {
  const tables = [];
  let tableId = 1;
  
  for (let sectorIndex = 0; sectorIndex < sectorCount; sectorIndex++) {
    const sectorId = `sector-${sectorIndex + 1}`;
    const tablesInSector = Math.floor(tableCount / sectorCount) + (sectorIndex < tableCount % sectorCount ? 1 : 0);
    
    for (let i = 0; i < tablesInSector; i++) {
      const capacity = Math.floor(Math.random() * 4) + 2; // 2-6 personas
      tables.push({
        id: `table-${tableId}`,
        sectorId,
        name: tableNames[tableId - 1] || `Table ${tableId}`,
        capacity: {
          min: capacity,
          max: capacity + Math.floor(Math.random() * 3) + 1
        },
        sortOrder: tableId
      });
      tableId++;
    }
  }
  
  return tables;
}

// Unified function to generate reservations for a date range - WITH VALIDATION
function generateReservationsForDateRange(startDate, endDate, tableCount, reservationCount, tables, restaurantConfig = null) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const daysDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  
  // Use provided restaurant config or defaults
  const config = restaurantConfig || {
    operatingHours: {
      startHour: 7,
      endHour: 22
    },
    timezone: 'America/Argentina/Buenos_Aires'
  };
  
  const validReservations = [];
  let attempts = 0;
  const maxAttempts = reservationCount * 200; // Allow many more attempts
  
  console.log(`🎯 Target: Generate exactly ${reservationCount} VALID reservations`);
  
  // Keep generating until we have exactly the number requested
  while (validReservations.length < reservationCount) {
    attempts++;
    
    if (attempts > maxAttempts) {
      console.log(`⚠️  Reached max attempts (${maxAttempts}), generated ${validReservations.length} out of ${reservationCount} requested`);
      break;
    }
    
    // Select random day
    const randomDay = Math.floor(Math.random() * daysDiff);
    const date = new Date(start);
    date.setDate(start.getDate() + randomDay);
    
    // Select random table
    const tableId = `table-${Math.floor(Math.random() * tableCount) + 1}`;
    
    // Generate reservation
    const name = generateRandomName();
    const email = generateRandomEmail(name);
    const phone = generateRandomPhone();
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const priority = priorities[Math.floor(Math.random() * priorities.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];
    
    // Find the table to get its capacity
    const table = tables.find(t => t.id === tableId);
    if (!table) continue;
    
    // Generate party size within table capacity
    const minCapacity = table.capacity.min;
    const maxCapacity = table.capacity.max;
    const partySize = Math.floor(Math.random() * (maxCapacity - minCapacity + 1)) + minCapacity;
    
    // Generate time with strict slot-based approach (15-minute slots)
    const startHour = config.operatingHours.startHour;
    const endHour = config.operatingHours.endHour;
    const endMinute = 0; // Restaurant closes at XX:00 (uses config)
    
    // Calculate available slots (15-minute intervals)
    const totalMinutes = (endHour - startHour) * 60; // Total minutes in operating hours
    const availableSlots = Math.floor(totalMinutes / 15); // Number of 15-minute slots
    
    // Generate start slot (leave room for at least 4 slots = 1 hour)
    const maxStartSlot = availableSlots - 4; // At least 4 slots (1 hour) before closing
    const startSlot = Math.floor(Math.random() * maxStartSlot);
    
    // Convert slot to actual time
    const startMinutes = startSlot * 15;
    const startHourActual = startHour + Math.floor(startMinutes / 60);
    const startMinuteActual = startMinutes % 60;
    
    const startTime = new Date(date);
    startTime.setHours(startHourActual, startMinuteActual, 0, 0);
    
    // Generate duration in slots (4-16 slots = 1-4 hours)
    const maxDurationSlots = Math.min(16, availableSlots - startSlot); // Max 4 hours or until closing
    const minDurationSlots = 4; // Minimum 1 hour
    const durationSlots = Math.floor(Math.random() * (maxDurationSlots - minDurationSlots + 1)) + minDurationSlots;
    
    // Calculate end time in slots
    const endSlot = startSlot + durationSlots;
    const endMinutes = endSlot * 15;
    const endHourActual = startHour + Math.floor(endMinutes / 60);
    const endMinuteActual = endMinutes % 60;
    
    const endTime = new Date(date);
    endTime.setHours(endHourActual, endMinuteActual, 0, 0);
    
    // STRICT VALIDATION: Check if reservation ends before or at restaurant closing
    if (endHourActual > endHour || (endHourActual === endHour && endMinuteActual > endMinute)) {
      continue; // Skip this attempt, try again
    }
    
    // Additional validation: ensure we don't exceed the restaurant's closing time
    const closingTime = new Date(date);
    closingTime.setHours(endHour, endMinute, 0, 0);
    if (endTime.getTime() > closingTime.getTime()) {
      continue; // Skip this attempt, try again
    }
    
    const reservation = {
      id: `res-${Date.now()}-${attempts}`,
      tableId,
      customer: {
        name,
        phone,
        email
      },
      partySize,
      startTime: startTime.toISOString().replace('Z', '-03:00'),
      endTime: endTime.toISOString().replace('Z', '-03:00'),
      durationMinutes: durationSlots * 15,
      status,
      priority,
      source,
      createdAt: new Date(date).toISOString().replace('Z', '-03:00'),
      updatedAt: new Date(date).toISOString().replace('Z', '-03:00')
    };
    
    // Validate the reservation (including conflicts with existing ones)
    const validation = validateReservation(reservation, config, validReservations);
    if (validation.isValid) {
      validReservations.push(reservation);
      console.log(`✅ Generated valid reservation ${validReservations.length}/${reservationCount}: ${reservation.customer.name} at ${reservation.startTime}`);
    } else {
      // Don't log every invalid reservation to avoid spam, only every 10th
      if (attempts % 10 === 0) {
        console.log(`❌ Invalid reservation rejected (attempt ${attempts}): ${validation.errors.join(', ')}`);
      }
    }
  }
  
  console.log(`Generated ${validReservations.length} valid reservations out of ${reservationCount} requested (${attempts} attempts)`);
  
  return validReservations;
}

// Function to generate CSV from reservations
function generateCSVReservations(reservations, timezone = 'America/Argentina/Buenos_Aires') {
  const headers = [
    'id',
    'tableId', 
    'customerName',
    'customerPhone',
    'customerEmail',
    'partySize',
    'startTime',
    'endTime',
    'durationMinutes',
    'status',
    'priority',
    'source',
    'createdAt',
    'updatedAt'
  ];
  
  const csvRows = reservations.map(reservation => [
    reservation.id,
    reservation.tableId,
    reservation.customer.name,
    reservation.customer.phone,
    reservation.customer.email,
    reservation.partySize,
    reservation.startTime,
    reservation.endTime,
    reservation.durationMinutes,
    reservation.status,
    reservation.priority,
    reservation.source,
    reservation.createdAt,
    reservation.updatedAt
  ]);
  
  const csvContent = [headers, ...csvRows]
    .map(row => row.map(field => `"${field}"`).join(','))
    .join('\n');
    
  return csvContent;
}

// Unified function to generate seed data with restaurant config
function generateSeedData(reservationCount, tableCount, sectorCount, restaurantConfig = null) {
  console.log(`Generating seed data with ${reservationCount} reservations`);
  
  // Use restaurant config if provided, otherwise use defaults
  const config = restaurantConfig || {
    operatingHours: {
      startHour: 7,
      endHour: 22
    },
    timezone: 'America/Argentina/Buenos_Aires'
  };
  
  console.log(`Using restaurant config: ${config.operatingHours.startHour}:00 - ${config.operatingHours.endHour}:00 (${config.timezone})`);
  
  // Use current week for realistic data
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay()); // Start of week (Sunday)
  startOfWeek.setHours(0, 0, 0, 0);
  
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // End of week (Saturday)
  endOfWeek.setHours(23, 59, 59, 999);
  
  console.log(`Date range: ${startOfWeek.toISOString().split('T')[0]} to ${endOfWeek.toISOString().split('T')[0]}`);
  console.log(`Restaurant hours: ${config.operatingHours.startHour}:00 - ${config.operatingHours.endHour}:00`);
  console.log(`Timezone: ${config.timezone}`);
  console.log(`Current date: ${new Date().toISOString()}`);
  console.log(`Current timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`);
  console.log(`Slot system: 15-minute intervals, ${Math.floor((config.operatingHours.endHour - config.operatingHours.startHour) * 60 / 15)} total slots`);
  console.log(`Config source: ${restaurantConfig ? 'Provided restaurant config' : 'Default config'}`);
  
  const sectors = generateSectors().slice(0, sectorCount);
  const tables = generateTables(sectorCount, tableCount);
  const reservations = generateReservationsForDateRange(
    startOfWeek.toISOString().split('T')[0],
    endOfWeek.toISOString().split('T')[0],
    tableCount,
    reservationCount,
    tables,
    config
  );
  
  return {
    sectors,
    tables,
    reservations,
    csvContent: generateCSVReservations(reservations, config.timezone)
  };
}

// Main function to generate seed-small
function generateSeedSmall(restaurantConfig = null) {
  return generateSeedData(50, 8, 3, restaurantConfig);
}

// Main function to generate seed-large
function generateSeedLarge(restaurantConfig = null) {
  return generateSeedData(200, 30, 9, restaurantConfig);
}

// Función para escribir el archivo de seed
function writeSeedFile(data, filename) {
  const content = `import type { Table, Sector, Reservation, RestaurantConfig } from '@/types';

// Generated seed data for ${filename.includes('small') ? 'small' : 'large'} dataset
export const seedSectors: Sector[] = ${JSON.stringify(data.sectors, null, 2)};

export const seedTables: Table[] = ${JSON.stringify(data.tables, null, 2)};

export const seedReservations: Reservation[] = ${JSON.stringify(data.reservations, null, 2)};

// Restaurant configuration
export const seedRestaurantConfig: RestaurantConfig = {
  "id": "restaurant-1",
  "name": "Woki Restaurant",
  "timezone": "America/Argentina/Buenos_Aires",
  "operatingHours": {
    "startHour": 7,
    "endHour": 22
  },
  "slotConfiguration": {
    "slotMinutes": 15,
    "defaultSlotWidth": 60
  },
  "createdAt": "2025-10-24T00:00:00.000-03:00",
  "updatedAt": "2025-10-24T00:00:00.000-03:00"
};
`;

  const filePath = path.join(__dirname, '..', 'src', 'data', filename);
  fs.writeFileSync(filePath, content);
  console.log(`✅ Generated ${filename} with ${data.sectors.length} sectors, ${data.tables.length} tables, and ${data.reservations.length} reservations`);
}

// Ejecutar generación
console.log('🚀 Generating seed data...');

// Generar seed-small
const seedSmallData = generateSeedSmall();
writeSeedFile(seedSmallData, 'seed-small.ts');

// Generar seed-large
const seedLargeData = generateSeedLarge();
writeSeedFile(seedLargeData, 'seed-large.ts');

// CSV generation is only done when Generate CSV button is clicked

console.log('✨ Seed generation completed!');
