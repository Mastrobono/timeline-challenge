const fs = require('fs');
const path = require('path');

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
  // Generate start time between 7:00 and 20:00 (to allow max 2:45 hours duration)
  const hour = Math.floor(Math.random() * 13) + 7; // Between 7:00 and 19:00
  const minute = Math.random() < 0.5 ? 0 : 30; // 0 or 30 minutes
  
  const startTime = new Date(date);
  startTime.setHours(hour, minute, 0, 0);
  
  // Duration between 1-2.5 hours max, calculating to end before 22:45
  const maxHoursUntilClose = 22.75 - hour; // 22:45 = 22.75 hours
  const maxDuration = Math.min(2.5, maxHoursUntilClose - 0.25); // -0.25 for margin
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

// Generate a reservation
function generateReservation(id, tableId, date) {
  const name = generateRandomName();
  const email = generateRandomEmail(name);
  const phone = generateRandomPhone();
  const partySize = Math.floor(Math.random() * 6) + 1; // 1-6 people
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const priority = priorities[Math.floor(Math.random() * priorities.length)];
  const source = sources[Math.floor(Math.random() * sources.length)];
  
  const { startTime, endTime, durationMinutes } = generateReservationTime(date);
  
  const createdAt = new Date(date);
  createdAt.setHours(Math.floor(Math.random() * 12) + 8); // Entre 8:00 y 19:00
  createdAt.setMinutes(Math.floor(Math.random() * 60));
  
  const updatedAt = new Date(createdAt);
  if (status === 'SEATED' || status === 'FINISHED') {
    updatedAt.setHours(updatedAt.getHours() + Math.floor(Math.random() * 4) + 1);
  }
  
  return {
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
    createdAt: createdAt.toISOString().replace('Z', '-03:00'),
    updatedAt: updatedAt.toISOString().replace('Z', '-03:00')
  };
}

// Función para generar sectores
function generateSectors() {
  return sectorNames.map((name, index) => ({
    id: `sector-${index + 1}`,
    name,
    color: sectorColors[index % sectorColors.length],
    sortOrder: index + 1
  }));
}

// Función para generar mesas
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

// Función para generar reservaciones para un rango de fechas
function generateReservationsForDateRange(startDate, endDate, tableCount, reservationCount) {
  const reservations = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  const daysDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  
  // Crear un array de días con pesos para distribución más realista
  const dayWeights = [];
  for (let i = 0; i < daysDiff; i++) {
    const dayOfWeek = (start.getDay() + i) % 7;
    // Viernes y sábados tienen más peso (más reservaciones)
    // Lunes y martes tienen menos peso
    let weight = 1;
    if (dayOfWeek === 5 || dayOfWeek === 6) weight = 3; // Viernes y sábado
    else if (dayOfWeek === 0) weight = 2; // Domingo
    else if (dayOfWeek === 1 || dayOfWeek === 2) weight = 0.5; // Lunes y martes
    else weight = 1.5; // Miércoles y jueves
    
    dayWeights.push(weight);
  }
  
  // Normalizar pesos
  const totalWeight = dayWeights.reduce((sum, weight) => sum + weight, 0);
  const normalizedWeights = dayWeights.map(weight => weight / totalWeight);
  
  // Generar reservaciones distribuidas
  for (let i = 0; i < reservationCount; i++) {
    // Seleccionar día basado en pesos
    let randomValue = Math.random();
    let selectedDay = 0;
    for (let j = 0; j < normalizedWeights.length; j++) {
      randomValue -= normalizedWeights[j];
      if (randomValue <= 0) {
        selectedDay = j;
        break;
      }
    }
    
    const date = new Date(start);
    date.setDate(start.getDate() + selectedDay);
    
    const tableId = `table-${Math.floor(Math.random() * tableCount) + 1}`;
    const reservation = generateReservation(i + 1, tableId, date);
    reservations.push(reservation);
  }
  
  return reservations;
}

// Función principal para generar seed-small
function generateSeedSmall() {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Lunes de esta semana
  
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // Domingo de esta semana
  
  const sectors = generateSectors().slice(0, 3); // 3 sectores
  const tables = generateTables(3, 8); // 8 mesas distribuidas en 3 sectores
  const reservations = generateReservationsForDateRange(
    startOfWeek.toISOString().split('T')[0],
    endOfWeek.toISOString().split('T')[0],
    8,
    35 // 35 reservaciones para la semana (5 por día en promedio)
  );
  
  return {
    sectors,
    tables,
    reservations
  };
}

// Función principal para generar seed-large
function generateSeedLarge() {
  const today = new Date();
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  
  const sectors = generateSectors(); // Todos los sectores
  const tables = generateTables(sectors.length, 30); // 30 mesas
  const reservations = generateReservationsForDateRange(
    startOfMonth.toISOString().split('T')[0],
    endOfMonth.toISOString().split('T')[0],
    30,
    300 // 300 reservaciones para el mes (10 por día en promedio)
  );
  
  return {
    sectors,
    tables,
    reservations
  };
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

console.log('✨ Seed generation completed!');
