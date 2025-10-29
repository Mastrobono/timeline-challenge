import { Reservation, Table, Sector, TimelineConfig, RestaurantConfig } from '@/types';
import { isoToSlotIndex } from '@/lib/timeUtils';
import { canReserveSlot } from '@/lib/conflictService';
import { addMinutes, differenceInMinutes } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export interface TableSuggestion {
  table: Table;
  sector: Sector;
  partySize: number;
  suitabilityScore: number;
  reasons: string[];
  isAvailable: boolean;
  alternativeTimes?: TimeSlot[];
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  durationMinutes: number;
  availabilityScore: number;
  tableId: string;
  tableName: string;
  sectorId: string;
  sectorName: string;
  scoreBreakdown?: {
    timePreference: number;
    capacityFit: number;
    sectorPreference: number;
    operationalEfficiency: number;
  };
  reasons?: string[];
}

export interface AvailabilitySearchOptions {
  partySize: number;
  durationMinutes: number;
  preferredTime?: string;
  preferredSectorId?: string;
  searchWindows: number[]; // minutes to search in each direction
  maxSuggestions?: number;
}

export interface VIPAnalysis {
  isVIP: boolean;
  confidence: number;
  reasons: string[];
  suggestedPriority: 'STANDARD' | 'VIP' | 'LARGE_GROUP';
}

/**
 * Auto-Scheduling Assistant Service
 * Provides intelligent table suggestions, availability search, and VIP detection
 */
export class AutoSchedulingService {
  /**
   * Find the best available table for a party size and time
   */
  static findBestTable(
    partySize: number,
    startTime: string,
    durationMinutes: number,
    tables: Table[],
    sectors: Sector[],
    existingReservations: Reservation[],
    config: TimelineConfig,
    options: {
      preferredSectorId?: string;
      maxSuggestions?: number;
    } = {}
  ): TableSuggestion[] {
    const { preferredSectorId, maxSuggestions = 5 } = options;
    
    const suggestions: TableSuggestion[] = [];
    
    for (const table of tables) {
      const sector = sectors.find(s => s.id === table.sectorId);
      if (!sector) continue;
      
      // Check if table can accommodate party size
      if (partySize < table.capacity.min || partySize > table.capacity.max) {
        continue;
      }
      
      // Check availability at requested time
      const startSlot = isoToSlotIndex(startTime, config);
      const endSlot = startSlot + Math.ceil(durationMinutes / config.slotMinutes);
      const isAvailable = canReserveSlot(existingReservations, table.id, startSlot, endSlot, config);
      
      // Calculate suitability score
      const suitabilityScore = this.calculateSuitabilityScore(
        table,
        sector,
        partySize,
        isAvailable,
        preferredSectorId
      );
      
      // Generate reasons
      const reasons = this.generateSuitabilityReasons(
        table,
        sector,
        partySize,
        isAvailable,
        preferredSectorId
      );
      
      suggestions.push({
        table,
        sector,
        partySize,
        suitabilityScore,
        reasons,
        isAvailable
      });
    }
    
    // Sort by suitability score (highest first)
    suggestions.sort((a, b) => b.suitabilityScore - a.suitabilityScore);
    
    return suggestions.slice(0, maxSuggestions);
  }
  
  /**
   * Find next available time slots when requested time is full
   */
  static findNextAvailableSlots(
    partySize: number,
    preferredTime: string,
    durationMinutes: number,
    tables: Table[],
    sectors: Sector[],
    existingReservations: Reservation[],
    config: TimelineConfig,
    options: AvailabilitySearchOptions
  ): TimeSlot[] {
    const { searchWindows = [15, 30, 60], maxSuggestions = 10 } = options;
    
    const availableSlots: TimeSlot[] = [];
    
    // Search in each time window
    for (const windowMinutes of searchWindows) {
      // Search after preferred time
      const afterSlots = this.searchTimeWindow(
        partySize,
        preferredTime,
        durationMinutes,
        windowMinutes,
        tables,
        sectors,
        existingReservations,
        config,
        options
      );
      
      // Search before preferred time (for more flexibility)
      const beforeSlots = this.searchTimeWindow(
        partySize,
        preferredTime,
        durationMinutes,
        -windowMinutes, // Negative for before
        tables,
        sectors,
        existingReservations,
        config,
        options
      );
      
      availableSlots.push(...afterSlots, ...beforeSlots);
    }
    
    // Remove duplicates and sort by availability score
    const uniqueSlots = this.deduplicateTimeSlots(availableSlots);
    uniqueSlots.sort((a, b) => b.availabilityScore - a.availabilityScore);
    
    return uniqueSlots.slice(0, maxSuggestions);
  }
  
  /**
   * Optimally assign tables for bulk reservations
   */
  static optimizeBulkAssignment(
    reservations: Partial<Reservation>[],
    tables: Table[],
    sectors: Sector[],
    existingReservations: Reservation[],
    config: TimelineConfig,
    restaurantConfig: RestaurantConfig
  ): { reservation: Partial<Reservation>; assignedTable: Table | null; conflicts: string[] }[] {
    const results: { reservation: Partial<Reservation>; assignedTable: Table | null; conflicts: string[] }[] = [];
    
    // Sort reservations by priority and time
    const sortedReservations = [...reservations].sort((a, b) => {
      // VIP reservations first
      if (a.priority === 'VIP' && b.priority !== 'VIP') return -1;
      if (b.priority === 'VIP' && a.priority !== 'VIP') return 1;
      
      // Then by time
      if (a.startTime && b.startTime) {
        return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
      }
      
      return 0;
    });
    
    for (const reservation of sortedReservations) {
      if (!reservation.partySize || !reservation.startTime || !reservation.durationMinutes) {
        results.push({
          reservation,
          assignedTable: null,
          conflicts: ['Missing required fields: partySize, startTime, or durationMinutes']
        });
        continue;
      }
      
      // Find best available table
      const suggestions = this.findBestTable(
        reservation.partySize,
        reservation.startTime,
        reservation.durationMinutes,
        tables,
        sectors,
        existingReservations,
        config,
        { 
          maxSuggestions: 1,
          preferredSectorId: reservation.preferredSectorId
        }
      );
      
      if (suggestions.length > 0 && suggestions[0].isAvailable) {
        const assignedTable = suggestions[0].table;
        results.push({
          reservation: { ...reservation, tableId: assignedTable.id },
          assignedTable,
          conflicts: []
        });
        
        // Add to existing reservations for next iteration
        const newReservation: Reservation = {
          id: reservation.id || crypto.randomUUID(),
          tableId: assignedTable.id,
          customer: reservation.customer || { name: '', phone: '', email: '' },
          partySize: reservation.partySize,
          startTime: reservation.startTime,
          endTime: reservation.endTime || addMinutes(new Date(reservation.startTime), reservation.durationMinutes).toISOString(),
          durationMinutes: reservation.durationMinutes,
          status: reservation.status || 'CONFIRMED',
          priority: reservation.priority || 'STANDARD',
          notes: reservation.notes,
          source: reservation.source || 'IMPORT',
          createdAt: reservation.createdAt || new Date().toISOString(),
          updatedAt: reservation.updatedAt || new Date().toISOString()
        };
        
        existingReservations.push(newReservation);
      } else {
        results.push({
          reservation,
          assignedTable: null,
          conflicts: ['No available tables for the requested time and party size']
        });
      }
    }
    
    return results;
  }
  
  /**
   * Analyze if a reservation might be VIP based on patterns
   */
  static analyzeVIPStatus(
    reservation: Partial<Reservation>,
    customerHistory: Reservation[],
    options: {
      minHistoryReservations?: number;
      vipThreshold?: number;
      largePartyThreshold?: number;
      excludeReservationId?: string;
    } = {}
  ): VIPAnalysis {
    const { minHistoryReservations = 3, vipThreshold = 0.7, largePartyThreshold = 8, excludeReservationId } = options;
    
    const reasons: string[] = [];
    let confidence = 0;
    
    // Check customer history - only match on non-empty phone or email
    const reservationPhone = reservation.customer?.phone?.trim() || '';
    const reservationEmail = reservation.customer?.email?.trim() || '';
    
    // Skip if no identifying information
    if (!reservationPhone && !reservationEmail) {
      return {
        isVIP: false,
        confidence: 0,
        reasons: [],
        suggestedPriority: 'STANDARD'
      };
    }
    
    // Filter history: must match phone (if both non-empty) OR email (if both non-empty)
    // Exclude the current reservation from history
    const customerReservations = customerHistory.filter(r => {
      // Exclude current reservation if ID provided
      if (excludeReservationId && r.id === excludeReservationId) {
        return false;
      }
      
      // Match by phone if both have non-empty phones
      const phoneMatch = reservationPhone && r.customer.phone?.trim() && 
                        r.customer.phone.trim() === reservationPhone;
      
      // Match by email if both have non-empty emails
      const emailMatch = reservationEmail && r.customer.email?.trim() && 
                        r.customer.email.trim() === reservationEmail;
      
      return phoneMatch || emailMatch;
    });
    
    if (customerReservations.length >= minHistoryReservations) {
      confidence += 0.3;
      reasons.push(`Customer has ${customerReservations.length} previous reservations`);
      
      // Check for VIP patterns in history
      const vipReservations = customerReservations.filter(r => r.priority === 'VIP');
      if (vipReservations.length > 0) {
        confidence += 0.4;
        reasons.push(`Customer has ${vipReservations.length} previous VIP reservations`);
      }
      
      // Check for large party patterns
      const largeParties = customerReservations.filter(r => r.partySize >= largePartyThreshold);
      if (largeParties.length > 0) {
        confidence += 0.2;
        reasons.push(`Customer has ${largeParties.length} previous large party reservations`);
      }
    }
    
    // Check current reservation characteristics
    // Large party size only contributes if customer has history (not a first-time visitor)
    if (reservation.partySize && reservation.partySize >= largePartyThreshold) {
      if (customerReservations.length > 0) {
        // Only add confidence if customer has previous reservations
        confidence += 0.2;
        reasons.push(`Large party size: ${reservation.partySize} people (returning customer)`);
      } else {
        // First-time large groups should be LARGE_GROUP, not VIP
        reasons.push(`Large party size: ${reservation.partySize} people (first visit - consider LARGE_GROUP priority)`);
      }
    }
    
    if (reservation.priority === 'VIP') {
      confidence += 0.5;
      reasons.push('Explicitly marked as VIP');
    }
    
    // Check for special requests or notes
    if (reservation.notes && reservation.notes.toLowerCase().includes('vip')) {
      confidence += 0.2;
      reasons.push('VIP mentioned in notes');
    }
    
    const isVIP = confidence >= vipThreshold;
    const suggestedPriority = isVIP ? 'VIP' : 
      (reservation.partySize && reservation.partySize >= largePartyThreshold ? 'LARGE_GROUP' : 'STANDARD');
    
    return {
      isVIP,
      confidence: Math.min(confidence, 1),
      reasons,
      suggestedPriority
    };
  }
  
  /**
   * Calculate suitability score for a table
   */
  private static calculateSuitabilityScore(
    table: Table,
    sector: Sector,
    partySize: number,
    isAvailable: boolean,
    preferredSectorId?: string
  ): number {
    let score = 0;
    
    // Base availability score
    score += isAvailable ? 100 : 0;
    
    // Capacity fit score (closer to party size is better)
    // Formula: 1 - |partySize - midpoint| / maxCapacity
    // Prioritizes tables where party size is close to the midpoint of capacity range
    // This balances efficiency with operational flexibility (room for late arrivals, comfort)
    const capacityFit = 1 - Math.abs(partySize - (table.capacity.min + table.capacity.max) / 2) / table.capacity.max; 
    score += capacityFit * 50;
    
    // Sector preference score
    if (preferredSectorId && sector.id === preferredSectorId) {
      score += 30;
    }
    
    // Table size efficiency (avoid wasting large tables)
    if (partySize <= table.capacity.min + 1) {
      score += 20; // Perfect fit
    } else if (partySize <= table.capacity.max - 1) {
      score += 10; // Good fit
    }
    
    return score;
  }
  
  /**
   * Generate human-readable reasons for table suitability
   */
  private static generateSuitabilityReasons(
    table: Table,
    sector: Sector,
    partySize: number,
    isAvailable: boolean,
    preferredSectorId?: string
  ): string[] {
    const reasons: string[] = [];
    
    if (isAvailable) {
      reasons.push('Available at requested time');
    } else {
      reasons.push('Not available at requested time');
    }
    
    if (partySize >= table.capacity.min && partySize <= table.capacity.max) {
      reasons.push(`Perfect capacity fit (${table.capacity.min}-${table.capacity.max} people)`);
    }
    
    if (preferredSectorId && sector.id === preferredSectorId) {
      reasons.push(`In preferred sector: ${sector.name}`);
    }
    
    if (partySize <= table.capacity.min + 1) {
      reasons.push('Efficient table usage');
    }
    
    return reasons;
  }
  
  /**
   * Search for available slots in a specific time window
   */
  private static searchTimeWindow(
    partySize: number,
    preferredTime: string,
    durationMinutes: number,
    windowMinutes: number,
    tables: Table[],
    sectors: Sector[],
    existingReservations: Reservation[],
    config: TimelineConfig,
    options: AvailabilitySearchOptions
  ): TimeSlot[] {
    const slots: TimeSlot[] = [];
    const preferredDate = new Date(preferredTime);
    const searchDate = addMinutes(preferredDate, windowMinutes);
    
    // Check if search time is within operating hours (convert to restaurant timezone)
    const searchHour = toZonedTime(searchDate, config.timezone).getHours();
    if (searchHour < config.startHour || searchHour >= config.endHour) {
      return slots;
    }
    
    const searchTime = searchDate.toISOString();
    
    // Find tables that can accommodate the party
    const suitableTables = tables.filter(table => 
      partySize >= table.capacity.min && partySize <= table.capacity.max
    );
    
    for (const table of suitableTables) {
      const startSlot = isoToSlotIndex(searchTime, config);
      const endSlot = startSlot + Math.ceil(durationMinutes / config.slotMinutes);
      
      if (canReserveSlot(existingReservations, table.id, startSlot, endSlot, config)) {
        const endTime = addMinutes(searchDate, durationMinutes).toISOString();
        const timeDiff = Math.abs(differenceInMinutes(searchDate, preferredDate));
        
        // Calculate score breakdown
        const timePreference = Math.max(0, 100 - (timeDiff / 60) * 10);
        const capacityFit = this.calculateCapacityFit(partySize, table);
        const sectorPreference = this.calculateSectorPreference(table, options.preferredSectorId);
        const operationalEfficiency = this.calculateOperationalEfficiency(searchDate, config);
        
        const availabilityScore = (timePreference * 0.4 + capacityFit * 0.3 + sectorPreference * 0.2 + operationalEfficiency * 0.1);
        
        // Generate reasons
        const reasons = this.generateTimeSlotReasons(timePreference, capacityFit, sectorPreference, operationalEfficiency, timeDiff);
        
        // Find sector name
        const sector = sectors.find(s => s.id === table.sectorId);
        
        slots.push({
          startTime: searchTime,
          endTime,
          durationMinutes,
          availabilityScore,
          tableId: table.id,
          tableName: table.name,
          sectorId: table.sectorId,
          sectorName: sector?.name || 'Unknown',
          scoreBreakdown: {
            timePreference,
            capacityFit,
            sectorPreference,
            operationalEfficiency
          },
          reasons
        });
      } else {
        // Slot not available due to conflicts
      }
    }
    
    return slots;
  }
  
  /**
   * Remove duplicate time slots and keep the best ones
   */
  private static deduplicateTimeSlots(slots: TimeSlot[]): TimeSlot[] {
    const uniqueSlots = new Map<string, TimeSlot>();
    
    for (const slot of slots) {
      const key = `${slot.startTime}-${slot.durationMinutes}`;
      const existing = uniqueSlots.get(key);
      
      if (!existing || slot.availabilityScore > existing.availabilityScore) {
        uniqueSlots.set(key, slot);
      }
    }
    
    return Array.from(uniqueSlots.values());
  }

  /**
   * Calculate capacity fit score for a table
   */
  private static calculateCapacityFit(partySize: number, table: Table): number {
    const capacityFit = 1 - Math.abs(partySize - (table.capacity.min + table.capacity.max) / 2) / table.capacity.max;
    return Math.round(capacityFit * 100);
  }

  /**
   * Calculate sector preference score
   */
  private static calculateSectorPreference(table: Table, preferredSectorId?: string): number {
    if (!preferredSectorId) return 50; // Neutral score if no preference
    return table.sectorId === preferredSectorId ? 100 : 0;
  }

  /**
   * Calculate operational efficiency score based on time
   */
  private static calculateOperationalEfficiency(date: Date, config: TimelineConfig): number {
    const hour = date.getHours();
    const startHour = config.startHour;
    const endHour = config.endHour;
    
    // Peak hours get higher efficiency scores
    const peakHours = [12, 13, 19, 20]; // Lunch and dinner peaks
    if (peakHours.includes(hour)) return 100;
    
    // Regular hours get medium scores
    if (hour >= startHour && hour < endHour) return 70;
    
    return 30; // Off-peak hours
  }

  /**
   * Generate human-readable reasons for the score
   */
  private static generateTimeSlotReasons(
    timePreference: number,
    capacityFit: number,
    sectorPreference: number,
    operationalEfficiency: number,
    timeDiff: number
  ): string[] {
    const reasons: string[] = [];
    
    if (timePreference > 80) {
      reasons.push("Perfect time match");
    } else if (timePreference > 60) {
      reasons.push("Close to preferred time");
    } else if (timeDiff > 0) {
      reasons.push(`${Math.round(timeDiff)} minutes from preferred time`);
    }
    
    if (capacityFit > 80) {
      reasons.push("Optimal table capacity");
    } else if (capacityFit > 60) {
      reasons.push("Good capacity fit");
    }
    
    if (sectorPreference === 100) {
      reasons.push("Preferred sector");
    }
    
    if (operationalEfficiency > 80) {
      reasons.push("Peak dining hours");
    } else if (operationalEfficiency > 60) {
      reasons.push("Regular dining hours");
    }
    
    return reasons;
  }
}

export default AutoSchedulingService;
