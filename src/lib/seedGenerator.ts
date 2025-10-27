import { addDays, addMinutes } from 'date-fns';
import { fromZonedTime, toZonedTime } from 'date-fns-tz';
import type { Table, Sector, Reservation, RestaurantConfig } from '@/types';
import { ReservationValidationService } from '@/lib/reservationValidationService';

/**
 * Generate reservations dynamically in the selected timezone
 */
export function generateReservationsInTimezone(
  tables: Table[],
  sectors: Sector[],
  restaurantConfig: RestaurantConfig,
  timezone: string,
  count: number = 50
): Reservation[] {
  const today = new Date();
  
  // Calculate available slots within operating hours
  const { startHour, endHour } = restaurantConfig.operatingHours;
  const slotMinutes = restaurantConfig.slotConfiguration.slotMinutes;
  const slotsPerHour = 60 / slotMinutes;
  const totalSlotsPerDay = (endHour - startHour) * slotsPerHour;
  
  // Track occupied slots per table per day to avoid conflicts
  const occupiedSlots: Record<string, Set<number>> = {};
  
  // Generate more reservations than needed to account for filtering
  const targetCount = count;
  const generateCount = Math.ceil(count * 2); // Generate 100% more to account for filtering
  const reservations: Reservation[] = [];
  
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
    const reservationDate = addDays(today, dayOffset);
    
    // Create a unique key for this table and day
    const tableDayKey = `${table.id}-${dayOffset}`;
    if (!occupiedSlots[tableDayKey]) {
      occupiedSlots[tableDayKey] = new Set();
    }
    
    // Find available time slots for this table and day
    const availableSlots: number[] = [];
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += slotMinutes) {
        const slotIndex = ((hour - startHour) * slotsPerHour) + (minute / slotMinutes);
        if (!occupiedSlots[tableDayKey].has(slotIndex)) {
          availableSlots.push(slotIndex);
        }
      }
    }
    
    // If no available slots, skip this reservation
    if (availableSlots.length === 0) {
      continue;
    }
    
    // Pick a random available slot
    const startSlotIndex = availableSlots[Math.floor(Math.random() * availableSlots.length)];
    const startHourSimple = startHour + Math.floor(startSlotIndex / slotsPerHour);
    const startMinuteSimple = (startSlotIndex % slotsPerHour) * slotMinutes;
    
    // Calculate max duration to ensure reservation ends before closing time
    const maxDurationMinutes = (endHour - startHourSimple) * 60 - startMinuteSimple;
    
    // Adjust duration based on how many reservations we need
    let minDurationMinutes, maxDurationMinutesAdjusted;
    if (targetCount > 100) {
      // For large datasets, use shorter durations to fit more reservations
      minDurationMinutes = 30; // Minimum 30 minutes
      maxDurationMinutesAdjusted = Math.min(90, maxDurationMinutes); // Max 1.5 hours
    } else {
      // For smaller datasets, use normal durations
      minDurationMinutes = 60; // Minimum 1 hour
      maxDurationMinutesAdjusted = Math.min(180, maxDurationMinutes); // Max 3 hours
    }
    
    const durationMinutesSimple = Math.max(
      minDurationMinutes,
      Math.min(
        minDurationMinutes + Math.floor(Math.random() * Math.max(0, maxDurationMinutesAdjusted - minDurationMinutes)),
        maxDurationMinutesAdjusted
      )
    );
    
    // Calculate end slot and mark slots as occupied
    const endSlotIndex = startSlotIndex + Math.ceil(durationMinutesSimple / slotMinutes);
    
    // Ensure endSlotIndex is valid and after startSlotIndex
    if (endSlotIndex <= startSlotIndex) {
      console.log('⚠️ Invalid reservation duration, skipping:', {
        startSlotIndex,
        endSlotIndex,
        durationMinutesSimple,
        slotMinutes
      });
      continue;
    }
    
    for (let slot = startSlotIndex; slot < endSlotIndex; slot++) {
      occupiedSlots[tableDayKey].add(slot);
    }
    
    // Create the reservation time in the target timezone
    const reservationDateTime = new Date(reservationDate);
    reservationDateTime.setHours(startHourSimple, startMinuteSimple, 0, 0);
    
    // Convert FROM the target timezone TO UTC
    const utcStartTime = fromZonedTime(reservationDateTime, timezone);
    const utcEndTime = addMinutes(utcStartTime, durationMinutesSimple);
    
    // Validate that end time is after start time
    if (utcEndTime <= utcStartTime) {
      console.log('⚠️ Invalid reservation times, skipping:', {
        utcStartTime: utcStartTime.toISOString(),
        utcEndTime: utcEndTime.toISOString(),
        durationMinutesSimple
      });
      continue;
    }
    
    console.log('🕐 Reservation Time Generation:', {
      timezone,
      localTime: `${startHourSimple}:${startMinuteSimple.toString().padStart(2, '0')}`,
      utcStartTime: utcStartTime.toISOString(),
      utcEndTime: utcEndTime.toISOString(),
      zonedBack: toZonedTime(utcStartTime, timezone).getHours() + ':' + toZonedTime(utcStartTime, timezone).getMinutes().toString().padStart(2, '0')
    });
    
    const reservation: Reservation = {
      id: `res-${Date.now()}-${i}`,
      tableId: table.id,
      customer: {
        name: `Customer ${i + 1}`,
        phone: `+54-9-${Math.floor(Math.random() * 90000000) + 10000000}`,
        email: `customer${i + 1}@example.com`,
        notes: Math.random() > 0.7 ? `Special request ${i + 1}` : undefined
      },
      partySize: Math.floor(Math.random() * (table.capacity.max - table.capacity.min + 1)) + table.capacity.min,
      startTime: utcStartTime.toISOString(),
      endTime: utcEndTime.toISOString(),
      durationMinutes: durationMinutesSimple,
      status: Math.random() > 0.2 ? 'CONFIRMED' : 'PENDING',
      priority: Math.random() > 0.8 ? 'VIP' : Math.random() > 0.6 ? 'LARGE_GROUP' : 'STANDARD',
      notes: Math.random() > 0.5 ? `Reservation notes ${i + 1}` : undefined,
      source: 'web',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    reservations.push(reservation);
  }
  
  // Now validate using the same logic as the store
  const validation = ReservationValidationService.validateReservations(
    reservations,
    {
      restaurantConfig,
      tables,
      existingReservations: []
    }
  );
  
  // If we don't have enough valid reservations, generate more
  let finalReservations = validation.validReservations;
  if (finalReservations.length < targetCount) {
    // Try to generate more if we're still short
    const shortfall = targetCount - finalReservations.length;
    const additionalCount = Math.min(shortfall * 2, 100); // Generate up to 100 more
    
    if (additionalCount > 0) {
      
      const additionalReservations: Reservation[] = [];
      for (let i = 0; i < additionalCount; i++) {
        const table = tables[Math.floor(Math.random() * tables.length)];
        const maxDays = targetCount > 100 ? 14 : 7; // Use same day range as main generation
        const dayOffset = Math.floor(Math.random() * maxDays);
        const reservationDate = addDays(today, dayOffset);
        
        // Create a simple reservation without conflict checking
        const startHourSimple = startHour + Math.floor(Math.random() * (endHour - startHour - 1));
        const startMinuteSimple = Math.floor(Math.random() * 4) * 15;
        
        // Use shorter durations for additional reservations to fit more
        const durationMinutesSimple = targetCount > 100 
          ? 30 + Math.floor(Math.random() * 60) // 30-90 minutes
          : 60 + Math.floor(Math.random() * 120); // 1-3 hours
        
        const reservationDateTime = new Date(reservationDate);
        reservationDateTime.setHours(startHourSimple, startMinuteSimple, 0, 0);
        
        const utcStartTime = fromZonedTime(reservationDateTime, timezone);
        const utcEndTime = addMinutes(utcStartTime, durationMinutesSimple);
        
        // Validate that end time is after start time
        if (utcEndTime <= utcStartTime) {
          console.log('⚠️ Invalid additional reservation times, skipping:', {
            utcStartTime: utcStartTime.toISOString(),
            utcEndTime: utcEndTime.toISOString(),
            durationMinutesSimple
          });
          continue;
        }
        
        console.log('🕐 Additional Reservation Time Generation:', {
          timezone,
          localTime: `${startHourSimple}:${startMinuteSimple.toString().padStart(2, '0')}`,
          utcStartTime: utcStartTime.toISOString(),
          utcEndTime: utcEndTime.toISOString(),
          zonedBack: toZonedTime(utcStartTime, timezone).getHours() + ':' + toZonedTime(utcStartTime, timezone).getMinutes().toString().padStart(2, '0')
        });
        
        const reservation: Reservation = {
          id: `res-${Date.now()}-${i + generateCount}`,
          tableId: table.id,
          customer: {
            name: `Customer ${i + generateCount + 1}`,
            phone: `+54-9-${Math.floor(Math.random() * 90000000) + 10000000}`,
            email: `customer${i + generateCount + 1}@example.com`,
            notes: Math.random() > 0.7 ? `Special request ${i + generateCount + 1}` : undefined
          },
          partySize: Math.floor(Math.random() * (table.capacity.max - table.capacity.min + 1)) + table.capacity.min,
          startTime: utcStartTime.toISOString(),
          endTime: utcEndTime.toISOString(),
          durationMinutes: durationMinutesSimple,
          status: Math.random() > 0.2 ? 'CONFIRMED' : 'PENDING',
          priority: Math.random() > 0.8 ? 'VIP' : Math.random() > 0.6 ? 'LARGE_GROUP' : 'STANDARD',
          notes: Math.random() > 0.5 ? `Reservation notes ${i + generateCount + 1}` : undefined,
          source: 'web',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        
        additionalReservations.push(reservation);
      }
      
      // Validate additional reservations
      const additionalValidation = ReservationValidationService.validateReservations(
        additionalReservations,
        {
          restaurantConfig,
          tables,
          existingReservations: finalReservations
        }
      );
      
      finalReservations = [...finalReservations, ...additionalValidation.validReservations];
    }
  }
  
  // Limit to target count
  if (finalReservations.length > targetCount) {
    finalReservations = finalReservations.slice(0, targetCount);
  }
  
  return finalReservations;
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
export function generateRestaurantConfig(timezone: string): RestaurantConfig {
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
  
  console.log('🍽️ Generated Restaurant Config:', {
    name: config.name,
    timezone: config.timezone,
    hours: `${config.operatingHours.startHour}:00 - ${config.operatingHours.endHour}:00`,
    inputTimezone: timezone
  });
  
  return config;
}
