import { addDays, addMinutes } from 'date-fns';
import { fromZonedTime } from 'date-fns-tz';
import type { Table, Sector, Reservation, RestaurantConfig, ReservationStatus } from '@/types';
import { ReservationValidationService } from '@/lib/reservationValidationService';

/**
 * Generate reservations dynamically in the selected timezone
 * Now generates exactly 10 reservations per day for 3 months (90 days)
 */
export function generateReservationsInTimezone(
  tables: Table[],
  sectors: Sector[],
  restaurantConfig: RestaurantConfig,
  timezone: string,
  count = 900 // 10 reservations per day × 90 days
): Reservation[] {
  const today = new Date();
  
  // Calculate available slots within operating hours
  const { startHour, endHour } = restaurantConfig.operatingHours;
  const slotMinutes = restaurantConfig.slotConfiguration.slotMinutes;
  const slotsPerHour = 60 / slotMinutes;
  
  // Generate exactly 10 reservations per day for 90 days (3 months)
  const reservationsPerDay = 10;
  const totalDays = 90;
  const reservations: Reservation[] = [];
  
  // Track occupied slots per table per day to avoid conflicts
  const occupiedSlots: Record<string, Set<number>> = {};
  
  // Create realistic customer data with some VIP customers and preferred sectors
  const customerData = generateRealisticCustomerData();
  
  // Generate reservations day by day
  for (let dayOffset = 0; dayOffset < totalDays; dayOffset++) {
    const reservationDate = addDays(today, dayOffset);
    
    // Generate exactly 10 reservations for this day
    for (let reservationIndex = 0; reservationIndex < reservationsPerDay; reservationIndex++) {
      // Select a random table
    const table = tables[Math.floor(Math.random() * tables.length)];
    
    // Create a unique key for this table and day
    const tableDayKey = `${table.id}-${dayOffset}`;
    if (!occupiedSlots[tableDayKey]) {
      occupiedSlots[tableDayKey] = new Set();
    }
    
    // Find available time slots for this table and day
    const availableSlots: number[] = [];
      for (let hour = startHour; hour < endHour - 1; hour++) { // -1 to ensure we have room for duration
      for (let minute = 0; minute < 60; minute += slotMinutes) {
        const slotIndex = ((hour - startHour) * slotsPerHour) + (minute / slotMinutes);
        if (!occupiedSlots[tableDayKey].has(slotIndex)) {
          availableSlots.push(slotIndex);
        }
      }
    }
    
      // If no available slots, try a different table
    if (availableSlots.length === 0) {
        // Try other tables for this day
        let foundSlot = false;
        for (const otherTable of tables) {
          const otherTableDayKey = `${otherTable.id}-${dayOffset}`;
          if (!occupiedSlots[otherTableDayKey]) {
            occupiedSlots[otherTableDayKey] = new Set();
          }
          
          const otherAvailableSlots: number[] = [];
          for (let hour = startHour; hour < endHour - 1; hour++) {
            for (let minute = 0; minute < 60; minute += slotMinutes) {
              const slotIndex = ((hour - startHour) * slotsPerHour) + (minute / slotMinutes);
              if (!occupiedSlots[otherTableDayKey].has(slotIndex)) {
                otherAvailableSlots.push(slotIndex);
              }
            }
          }
          
          if (otherAvailableSlots.length > 0) {
            const startSlotIndex = otherAvailableSlots[Math.floor(Math.random() * otherAvailableSlots.length)];
            const durationSlots = Math.ceil(90 / slotMinutes); // 90 minutes duration
            const endSlotIndex = startSlotIndex + durationSlots;
            
            // Mark slots as occupied
            for (let slot = startSlotIndex; slot < endSlotIndex; slot++) {
              occupiedSlots[otherTableDayKey].add(slot);
            }
            
            // Create reservation
    const startHourSimple = startHour + Math.floor(startSlotIndex / slotsPerHour);
    const startMinuteSimple = (startSlotIndex % slotsPerHour) * slotMinutes;
            const durationMinutesSimple = durationSlots * slotMinutes;
            
    const reservationDateTime = new Date(reservationDate);
    reservationDateTime.setHours(startHourSimple, startMinuteSimple, 0, 0);
    
    const utcStartTime = fromZonedTime(reservationDateTime, timezone);
    const utcEndTime = addMinutes(utcStartTime, durationMinutesSimple);
    
            const customer = customerData[Math.floor(Math.random() * customerData.length)];
    
    const reservation: Reservation = {
              id: `res-${dayOffset}-${reservationIndex}`,
              tableId: otherTable.id,
              customer: customer.customer,
              partySize: Math.floor(Math.random() * (otherTable.capacity.max - otherTable.capacity.min + 1)) + otherTable.capacity.min,
      startTime: utcStartTime.toISOString(),
      endTime: utcEndTime.toISOString(),
      durationMinutes: durationMinutesSimple,
      // Generate varied statuses
      status: (() => {
        const statusOptions: ReservationStatus[] = ['CONFIRMED', 'PENDING', 'SEATED', 'FINISHED', 'CANCELLED'];
        const statusWeights = [0.6, 0.15, 0.1, 0.1, 0.05]; // CONFIRMED most common, CANCELLED least common
        const random = Math.random();
        let cumulative = 0;
        for (let i = 0; i < statusOptions.length; i++) {
          cumulative += statusWeights[i];
          if (random <= cumulative) {
            return statusOptions[i];
          }
        }
        return 'CONFIRMED' as ReservationStatus; // fallback
      })(),
              priority: customer.priority,
              notes: customer.notes,
              preferredSectorId: customer.preferredSectorId,
      source: 'web',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    reservations.push(reservation);
            foundSlot = true;
            break;
          }
        }
        
        if (!foundSlot) {
      continue;
    }
      } else {
        // Use the original table
        const startSlotIndex = availableSlots[Math.floor(Math.random() * availableSlots.length)];
        const durationSlots = Math.ceil(90 / slotMinutes); // 90 minutes duration
        const endSlotIndex = startSlotIndex + durationSlots;
    
        // Mark slots as occupied
    for (let slot = startSlotIndex; slot < endSlotIndex; slot++) {
      occupiedSlots[tableDayKey].add(slot);
    }
    
        // Create reservation
        const startHourSimple = startHour + Math.floor(startSlotIndex / slotsPerHour);
        const startMinuteSimple = (startSlotIndex % slotsPerHour) * slotMinutes;
        const durationMinutesSimple = durationSlots * slotMinutes;
        
    const reservationDateTime = new Date(reservationDate);
    reservationDateTime.setHours(startHourSimple, startMinuteSimple, 0, 0);
    
    const utcStartTime = fromZonedTime(reservationDateTime, timezone);
    const utcEndTime = addMinutes(utcStartTime, durationMinutesSimple);
    
        const customer = customerData[Math.floor(Math.random() * customerData.length)];
    
    const reservation: Reservation = {
          id: `res-${dayOffset}-${reservationIndex}`,
      tableId: table.id,
          customer: customer.customer,
      partySize: Math.floor(Math.random() * (table.capacity.max - table.capacity.min + 1)) + table.capacity.min,
      startTime: utcStartTime.toISOString(),
      endTime: utcEndTime.toISOString(),
      durationMinutes: durationMinutesSimple,
          // Generate varied statuses
          status: (() => {
            const statusOptions: ReservationStatus[] = ['CONFIRMED', 'PENDING', 'SEATED', 'FINISHED', 'CANCELLED'];
            const statusWeights = [0.6, 0.15, 0.1, 0.1, 0.05]; // CONFIRMED most common, CANCELLED least common
            const random = Math.random();
            let cumulative = 0;
            for (let i = 0; i < statusOptions.length; i++) {
              cumulative += statusWeights[i];
              if (random <= cumulative) {
                return statusOptions[i];
              }
            }
            return 'CONFIRMED' as ReservationStatus; // fallback
          })(),
          priority: customer.priority,
          notes: customer.notes,
          preferredSectorId: customer.preferredSectorId,
      source: 'web',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    reservations.push(reservation);
      }
    }
  }
  
  return reservations;
}

/**
 * Generate VALID reservations with proper validation
 * This function ensures all generated reservations pass validation
 */
export function generateValidReservationsInTimezone(
  tables: Table[],
  sectors: Sector[],
  restaurantConfig: RestaurantConfig,
  timezone: string,
  targetReservationsPerDay: number = 10,
  totalDays: number = 90
): Reservation[] {
  const today = new Date();
  const reservations: Reservation[] = [];
  
  // Calculate available slots within operating hours
  const { startHour, endHour } = restaurantConfig.operatingHours;
  const slotMinutes = restaurantConfig.slotConfiguration.slotMinutes;
  const slotsPerHour = 60 / slotMinutes;
  
  // Create realistic customer data
  const customerData = generateRealisticCustomerData();
  
  // Generate reservations day by day with validation
  for (let dayOffset = 0; dayOffset < totalDays; dayOffset++) {
    const reservationDate = addDays(today, dayOffset);
    let validReservationsForDay = 0;
    let attemptsForDay = 0;
    const maxAttemptsPerDay = targetReservationsPerDay * 5; // Allow 5x attempts to find valid slots
    
    // Track occupied slots for this day
    const occupiedSlots: Record<string, Set<number>> = {};
    
    // Try to generate exactly targetReservationsPerDay valid reservations for this day
    while (validReservationsForDay < targetReservationsPerDay && attemptsForDay < maxAttemptsPerDay) {
      attemptsForDay++;
      
      // Select a random table
        const table = tables[Math.floor(Math.random() * tables.length)];
      
      // Create a unique key for this table and day
      const tableDayKey = `${table.id}-${dayOffset}`;
      if (!occupiedSlots[tableDayKey]) {
        occupiedSlots[tableDayKey] = new Set();
      }
      
      // Find available time slots for this table and day
      const availableSlots: number[] = [];
      for (let hour = startHour; hour < endHour - 1; hour++) { // -1 to ensure we have room for duration
        for (let minute = 0; minute < 60; minute += slotMinutes) {
          const slotIndex = ((hour - startHour) * slotsPerHour) + (minute / slotMinutes);
          if (!occupiedSlots[tableDayKey].has(slotIndex)) {
            availableSlots.push(slotIndex);
          }
        }
      }
      
      // If no available slots, try next attempt
      if (availableSlots.length === 0) {
        continue;
      }
      
      // Select a random available slot
      const startSlotIndex = availableSlots[Math.floor(Math.random() * availableSlots.length)];
      const durationSlots = Math.ceil(90 / slotMinutes); // 90 minutes duration
      const endSlotIndex = startSlotIndex + durationSlots;
      
      // Check if we have enough consecutive slots
      let hasConsecutiveSlots = true;
      for (let slot = startSlotIndex; slot < endSlotIndex; slot++) {
        if (occupiedSlots[tableDayKey].has(slot)) {
          hasConsecutiveSlots = false;
          break;
        }
      }
      
      if (!hasConsecutiveSlots) {
        continue; // Try next attempt
      }
      
      // Mark slots as occupied
      for (let slot = startSlotIndex; slot < endSlotIndex; slot++) {
        occupiedSlots[tableDayKey].add(slot);
      }
      
      // Create reservation with proper timezone handling
      const startHourSimple = startHour + Math.floor(startSlotIndex / slotsPerHour);
      const startMinuteSimple = (startSlotIndex % slotsPerHour) * slotMinutes;
      const durationMinutesSimple = durationSlots * slotMinutes;
      
      // Create date in the restaurant timezone
        const reservationDateTime = new Date(reservationDate);
        reservationDateTime.setHours(startHourSimple, startMinuteSimple, 0, 0);
        
      // Convert to UTC using the restaurant timezone
        const utcStartTime = fromZonedTime(reservationDateTime, timezone);
        const utcEndTime = addMinutes(utcStartTime, durationMinutesSimple);
        
      // Select customer data
      const customer = customerData[Math.floor(Math.random() * customerData.length)];
      
      // Generate party size within table capacity
      const partySize = Math.max(
        table.capacity.min, 
        Math.min(
          table.capacity.max, 
          Math.floor(Math.random() * (table.capacity.max - table.capacity.min + 1)) + table.capacity.min
        )
      );
        
        // Generate random status with weighted distribution
        const generateRandomStatus = (): ReservationStatus => {
          const statusOptions: ReservationStatus[] = ['CONFIRMED', 'PENDING', 'SEATED', 'FINISHED', 'CANCELLED'];
          const statusWeights = [0.6, 0.15, 0.1, 0.1, 0.05]; // CONFIRMED most common, CANCELLED least common
          const random = Math.random();
          let cumulative = 0;
          for (let i = 0; i < statusOptions.length; i++) {
            cumulative += statusWeights[i];
            if (random <= cumulative) {
              return statusOptions[i];
            }
          }
          return 'CONFIRMED' as ReservationStatus; // fallback
        };
        
        const reservation: Reservation = {
        id: `res-${dayOffset}-${validReservationsForDay}-${Date.now()}`,
          tableId: table.id,
        customer: customer.customer,
        partySize: partySize,
          startTime: utcStartTime.toISOString(),
          endTime: utcEndTime.toISOString(),
          durationMinutes: durationMinutesSimple,
        status: generateRandomStatus(),
        priority: customer.priority,
        notes: customer.notes,
        preferredSectorId: customer.preferredSectorId,
        source: 'SEED',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        
      // Validate the reservation
      try {
        const validationResult = ReservationValidationService.validateReservation(
          reservation,
        {
          restaurantConfig,
          tables,
            existingReservations: [] // No existing reservations for seed generation
          }
        );
        
        if (validationResult.isValid) {
          reservations.push(reservation);
          validReservationsForDay++;
        } else {
          // If validation fails, unmark the slots
          for (let slot = startSlotIndex; slot < endSlotIndex; slot++) {
            occupiedSlots[tableDayKey].delete(slot);
          }
        }
      } catch {
        // If validation throws an error, unmark the slots
        for (let slot = startSlotIndex; slot < endSlotIndex; slot++) {
          occupiedSlots[tableDayKey].delete(slot);
        }
      }
    }
    
    // Log if we couldn't generate enough reservations for this day
    if (validReservationsForDay < targetReservationsPerDay) {
      console.warn(`Day ${dayOffset}: Only generated ${validReservationsForDay}/${targetReservationsPerDay} valid reservations`);
    }
  }
  
  return reservations;
}

/**
 * Generate realistic customer data with VIP customers and preferred sectors
 */
function generateRealisticCustomerData() {
  const customers = [
    // VIP Customers (rare, ~5%)
    {
      customer: {
        name: 'Maria Rodriguez',
        phone: '+54-9-11-1234-5678',
        email: 'maria.rodriguez@email.com',
        notes: 'VIP customer - prefers window tables'
      },
      priority: 'VIP' as const,
      notes: 'VIP customer with special preferences',
      preferredSectorId: 'sector-1' // Main Dining
    },
    {
      customer: {
        name: 'John Smith',
        phone: '+1-555-123-4567',
        email: 'john.smith@email.com',
        notes: 'Regular VIP customer'
      },
      priority: 'VIP' as const,
      notes: 'VIP customer - anniversary dinner',
      preferredSectorId: 'sector-3' // Private Room
    },
    {
      customer: {
        name: 'Anna Kowalski',
        phone: '+48-123-456-789',
        email: 'anna.kowalski@email.com',
        notes: 'VIP customer - dietary restrictions'
      },
      priority: 'VIP' as const,
      notes: 'VIP customer with dietary requirements',
      preferredSectorId: 'sector-2' // Terrace
    },
    
    // Large Group Customers (~15%)
    {
      customer: {
        name: 'Corporate Event Team',
        phone: '+54-9-11-9876-5432',
        email: 'events@company.com',
        notes: 'Corporate events coordinator'
      },
      priority: 'LARGE_GROUP' as const,
      notes: 'Corporate event - needs private space',
      preferredSectorId: 'sector-3' // Private Room
    },
    {
      customer: {
        name: 'Family Reunion',
        phone: '+54-9-11-5555-1234',
        email: 'family@email.com',
        notes: 'Large family gathering'
      },
      priority: 'LARGE_GROUP' as const,
      notes: 'Family reunion - outdoor seating preferred',
      preferredSectorId: 'sector-2' // Terrace
    },
    
    // Standard Customers with Preferred Sectors (~20%)
    {
      customer: {
        name: 'Carlos Mendez',
        phone: '+54-9-11-4444-5678',
        email: 'carlos.mendez@email.com',
        notes: 'Prefers quiet dining'
      },
      priority: 'STANDARD' as const,
      notes: 'Regular customer - prefers main dining',
      preferredSectorId: 'sector-1' // Main Dining
    },
    {
      customer: {
        name: 'Sarah Johnson',
        phone: '+1-555-987-6543',
        email: 'sarah.johnson@email.com',
        notes: 'Loves outdoor dining'
      },
      priority: 'STANDARD' as const,
      notes: 'Regular customer - terrace lover',
      preferredSectorId: 'sector-2' // Terrace
    },
    {
      customer: {
        name: 'David Chen',
        phone: '+86-138-0013-8000',
        email: 'david.chen@email.com',
        notes: 'Business meetings'
      },
      priority: 'STANDARD' as const,
      notes: 'Business customer - needs privacy',
      preferredSectorId: 'sector-3' // Private Room
    },
    
    // Standard Customers without Preferred Sectors (~60%)
    {
      customer: {
        name: 'Lisa Brown',
        phone: '+44-20-7946-0958',
        email: 'lisa.brown@email.com',
        notes: 'First time visitor'
      },
      priority: 'STANDARD' as const,
      notes: undefined,
      preferredSectorId: undefined
    },
    {
      customer: {
        name: 'Michael Davis',
        phone: '+61-2-9374-4000',
        email: 'michael.davis@email.com',
        notes: 'Tourist from Australia'
      },
      priority: 'STANDARD' as const,
      notes: undefined,
      preferredSectorId: undefined
    },
    {
      customer: {
        name: 'Elena Petrov',
        phone: '+7-495-123-4567',
        email: 'elena.petrov@email.com',
        notes: 'Visiting from Russia'
      },
      priority: 'STANDARD' as const,
      notes: undefined,
      preferredSectorId: undefined
    },
    {
      customer: {
        name: 'Ahmed Hassan',
        phone: '+971-4-123-4567',
        email: 'ahmed.hassan@email.com',
        notes: 'Business traveler'
      },
      priority: 'STANDARD' as const,
      notes: undefined,
      preferredSectorId: undefined
    },
    {
      customer: {
        name: 'Sophie Martin',
        phone: '+33-1-42-86-83-26',
        email: 'sophie.martin@email.com',
        notes: 'Food blogger'
      },
      priority: 'STANDARD' as const,
      notes: undefined,
      preferredSectorId: undefined
    },
    {
      customer: {
        name: 'Roberto Silva',
        phone: '+55-11-9876-5432',
        email: 'roberto.silva@email.com',
        notes: 'Regular customer'
      },
      priority: 'STANDARD' as const,
      notes: undefined,
      preferredSectorId: undefined
    },
    {
      customer: {
        name: 'Jennifer Lee',
        phone: '+82-2-1234-5678',
        email: 'jennifer.lee@email.com',
        notes: 'Korean tourist'
      },
      priority: 'STANDARD' as const,
      notes: undefined,
      preferredSectorId: undefined
    },
    {
      customer: {
        name: 'Giuseppe Rossi',
        phone: '+39-06-1234-5678',
        email: 'giuseppe.rossi@email.com',
        notes: 'Italian food enthusiast'
      },
      priority: 'STANDARD' as const,
      notes: undefined,
      preferredSectorId: undefined
    },
    {
      customer: {
        name: 'Emma Wilson',
        phone: '+44-161-234-5678',
        email: 'emma.wilson@email.com',
        notes: 'Student group'
      },
      priority: 'STANDARD' as const,
      notes: undefined,
      preferredSectorId: undefined
    },
    {
      customer: {
        name: 'James Taylor',
        phone: '+1-416-123-4567',
        email: 'james.taylor@email.com',
        notes: 'Canadian visitor'
      },
      priority: 'STANDARD' as const,
      notes: undefined,
      preferredSectorId: undefined
    }
  ];
  
  return customers;
}

/**
 * Generate static tables and sectors (these don't depend on timezone)
 */
export function generateTablesAndSectors() {
  const sectors: Sector[] = [
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

  const tables: Table[] = [
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

/**
 * Generate restaurant config with random hours and restaurant name
 */
export function generateRestaurantConfig(_timezone: string): RestaurantConfig {
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
  
  // Generate random operating hours (start between 6-12, end between 18-24)
  const startHour = Math.floor(Math.random() * 7) + 6; // 6-12
  const endHour = Math.floor(Math.random() * 7) + 18; // 18-24
  
  // Ensure end hour is after start hour
  const finalEndHour = endHour > startHour ? endHour : startHour + 8;
  
  // Always generate random timezone for variety
  const selectedTimezone = timezones[Math.floor(Math.random() * timezones.length)];
  
  const config = {
    id: `restaurant-${Date.now()}`,
    name: restaurantNames[Math.floor(Math.random() * restaurantNames.length)],
    timezone: selectedTimezone,
    operatingHours: {
      startHour,
      endHour: finalEndHour
    },
    slotConfiguration: {
      slotMinutes: 15,
      defaultSlotWidth: 60
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  return config;
}
