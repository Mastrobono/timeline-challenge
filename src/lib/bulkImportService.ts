import type { Reservation, Table, Sector, TimelineConfig, RestaurantConfig } from '@/types';
import useTimelineStore from '@/store/useTimelineStore';
import Papa from 'papaparse';
import { toZonedTime, fromZonedTime } from 'date-fns-tz';

export interface BulkImportOptions {
  onProgress?: (current: number, total: number) => void;
  onComplete?: (validCount: number, invalidCount: number) => void;
  onError?: (error: Error) => void;
}

export interface ImportResult {
  success: boolean;
  validCount: number;
  invalidCount: number;
  errors: string[];
  autoAssignedCount?: number;
  vipDetectedCount?: number;
}

/**
 * Simple bulk import service for CSV and API imports
 * 
 * Usage Examples:
 * 
 * // 1. Import from API
 * const result = await BulkImportService.importFromAPI('/api/reservations');
 * 
 * // 2. Import from CSV file
 * const result = await BulkImportService.importFromCSV(file);
 * 
 * // 3. With progress callbacks
 * const result = await BulkImportService.importFromAPI('/api/reservations', {
 *   onProgress: (current, total) => setStatus(`Processing ${current}/${total}`),
 *   onComplete: (valid, invalid) => setStatus(`✅ Imported: ${valid}, ❌ Rejected: ${invalid}`),
 *   onError: (error) => setStatus(`❌ Import failed: ${error.message}`)
 * });
 * 
 * // 4. React component example
 * const handleFileUpload = async (file: File) => {
 *   const result = await BulkImportService.importFromCSV(file, {
 *     onProgress: (current, total) => setProgress(Math.round((current / total) * 100)),
 *     onComplete: (valid, invalid) => setMessage(`Imported ${valid} reservations`),
 *     onError: (error) => setError(error.message)
 *   });
 * };
 * 
 * CSV Format:
 * id,tableId,customerName,phone,email,partySize,startTime,endTime,status,priority,source
 * res-1,table-1,John Doe,123-456-7890,john@example.com,4,2025-10-24T19:00:00-03:00,2025-10-24T21:00:00-03:00,CONFIRMED,NORMAL,IMPORT
 */
export class BulkImportService {
  private static store = useTimelineStore.getState();

  /**
   * Convert UTC time to restaurant timezone for CSV export
   * For CSV round-trip reliability, we keep dates in UTC format
   * The dates are stored in UTC internally, so we export them as UTC
   */
  private static convertToRestaurantTimezone(utcTime: string, restaurantTimezone: string): string {
    // Keep UTC for CSV export/import round-trip reliability
    // This ensures that export -> import preserves exact dates
    try {
      const date = new Date(utcTime);
      if (isNaN(date.getTime())) {
        return utcTime;
      }
      return date.toISOString();
    } catch (error) {
      console.warn('Failed to format time, using original:', error);
      return utcTime;
    }
  }

  /**
   * Convert restaurant timezone time to UTC for storage
   */
  private static convertFromRestaurantTimezone(restaurantTime: string, restaurantTimezone: string): string {
    try {
      const restaurantDate = new Date(restaurantTime);
      const utcDate = fromZonedTime(restaurantDate, restaurantTimezone);
      return utcDate.toISOString();
    } catch (error) {
      console.warn('Failed to convert timezone, using original time:', error);
      return restaurantTime;
    }
  }

  /**
   * Import reservations from an external API
   */
  static async importFromAPI(
    options: BulkImportOptions = {}
  ): Promise<ImportResult> {
    try {
      const response = await fetch('/api/generate-seeds', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'small' })
      });
      
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      this.store = useTimelineStore.getState();
      this.store.initializeWithValidation({
        reservations: data.reservations,
        tables: data.tables,
        sectors: data.sectors,
        restaurantConfig: data.restaurantConfig
      });
      
      const result: ImportResult = {
        success: true,
        validCount: data.reservations.length,
        invalidCount: 0,
        errors: []
      };
      
      options.onComplete?.(data.reservations.length, 0);
      return result;
    } catch (error) {
      const errorMessage = `Failed to import from API: ${error instanceof Error ? error.message : 'Unknown error'}`;
      options.onError?.(new Error(errorMessage));
      return {
        success: false,
        validCount: 0,
        invalidCount: 0,
        errors: [errorMessage]
      };
    }
  }

  /**
   * Import reservations from a CSV file
   */
  static async importFromCSV(
    file: File,
    options: BulkImportOptions = {}
  ): Promise<ImportResult> {
    try {
      // Check file size to prevent crashes
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        throw new Error('File too large. Maximum size is 10MB.');
      }
      
      const content = await this.readFileContent(file);
      const reservations = this.parseCSV(content);
      
      // Limit number of reservations to prevent crashes
      if (reservations.length > 1000) {
        throw new Error('Too many reservations. Maximum is 1000 per import.');
      }
      
      return this.processReservations(reservations, options);
    } catch (error) {
      const errorMessage = `Failed to import from CSV: ${error instanceof Error ? error.message : 'Unknown error'}`;
      options.onError?.(new Error(errorMessage));
      return {
        success: false,
        validCount: 0,
        invalidCount: 0,
        errors: [errorMessage]
      };
    }
  }

  /**
   * Process reservations with validation, auto-scheduling, and import to store
   */
  private static processReservations(
    reservations: Reservation[],
    options: BulkImportOptions
  ): ImportResult {
    try {
      this.store = useTimelineStore.getState();
      
      const hasTables = Object.keys(this.store.tablesById).length > 0;
      const hasConfig = !!this.store.restaurantConfig;
      
      if (!hasTables || !hasConfig) {
        throw new Error('Store is empty. Please use Reset Small or Reset Large first to initialize tables and configuration.');
      }
      
      // Get current data for auto-scheduling
      const tables = Object.values(this.store.tablesById);
      const sectors = Object.values(this.store.sectorsById);
      const existingReservations = Object.values(this.store.reservationsById);
      const config: TimelineConfig = {
        date: this.store.ui.visibleDate,
        startHour: this.store.ui.startHour,
        endHour: this.store.restaurantConfig!.operatingHours.endHour,
        slotMinutes: this.store.restaurantConfig!.slotConfiguration.slotMinutes,
        timezone: this.store.restaurantConfig!.timezone,
        slotWidth: this.store.ui.slotWidth,
        viewMode: this.store.ui.viewMode
      };
      
      // Process reservations with auto-scheduling
      const processedReservations = this.processWithAutoScheduling(
        reservations,
        tables,
        sectors,
        existingReservations,
        config,
        this.store.restaurantConfig!
      );
      
      // Replace all reservations with imported ones (CSV import should replace)
      this.store.replaceAllReservations(processedReservations);
      
      const allReservations = Object.values(this.store.reservationsById);
      const validCount = allReservations.length;
      const invalidCount = reservations.length - validCount;
      const autoAssignedCount = processedReservations.filter(r => r.tableId).length;
      const vipDetectedCount = processedReservations.filter(r => r.priority === 'VIP').length;
      
      const result: ImportResult = {
        success: true,
        validCount,
        invalidCount,
        errors: [],
        autoAssignedCount,
        vipDetectedCount
      };
      
      options.onComplete?.(validCount, invalidCount);
      return result;
    } catch (error) {
      const errorMessage = `Failed to process reservations: ${error instanceof Error ? error.message : 'Unknown error'}`;
      options.onError?.(new Error(errorMessage));
      return {
        success: false,
        validCount: 0,
        invalidCount: 0,
        errors: [errorMessage]
      };
    }
  }
  
  /**
   * Process reservations with auto-scheduling and VIP detection
   */
  private static processWithAutoScheduling(
    reservations: Reservation[],
    tables: Table[],
    _sectors: Sector[],
    _existingReservations: Reservation[],
    _config: TimelineConfig,
    _restaurantConfig: RestaurantConfig
  ): Reservation[] {
    const processedReservations: Reservation[] = [];
    
    // Process in batches to prevent memory issues
    const batchSize = 50;
    for (let i = 0; i < reservations.length; i += batchSize) {
      const batch = reservations.slice(i, i + batchSize);
      
      // Simplified VIP detection for bulk processing
      const reservationsWithVIP = batch.map(reservation => {
        const isVIP = reservation.priority === 'VIP' || 
                     (reservation.customer.email && reservation.customer.email.includes('vip')) ||
                     (reservation.notes && reservation.notes.toLowerCase().includes('vip'));
        
        return {
          ...reservation,
          priority: isVIP ? 'VIP' as const : reservation.priority,
          notes: isVIP ? 
            `${reservation.notes || ''}\n[AI] VIP detected in bulk import`.trim() :
            reservation.notes
        };
      });
      
      // Simplified table assignment for bulk processing
      const reservationsWithTables = reservationsWithVIP.map(reservation => {
        if (reservation.tableId) {
          return reservation; // Already has table assigned
        }
        
        try {
          // Find a suitable table without complex optimization
          const suitableTable = tables.find(table => 
            reservation.partySize >= table.capacity.min && 
            reservation.partySize <= table.capacity.max &&
            (!reservation.preferredSectorId || table.sectorId === reservation.preferredSectorId)
          );
          
          if (suitableTable) {
            return {
              ...reservation,
              tableId: suitableTable.id
            };
          }
        } catch {
          // If assignment fails, keep original reservation
        }
        
        return reservation;
      });
      
      processedReservations.push(...reservationsWithTables);
    }
    
    return processedReservations;
  }

  /**
   * Read file content
   */
  private static async readFileContent(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  }


  /**
   * Parse CSV content to reservations
   */
  private static parseCSV(content: string): Reservation[] {
    const result = Papa.parse(content, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase().replace(/"/g, '')
    });

    if (result.errors.length > 0) {
      throw new Error(`CSV parsing errors: ${result.errors.map(e => e.message).join(', ')}`);
    }

    return result.data.map((row: unknown, index: number) => {
      const rowData = row as Record<string, string>;
      const reservation: Partial<Reservation> = {};

      // Map CSV columns to reservation fields
      if (rowData.id) reservation.id = rowData.id;
      if (rowData.tableid || rowData.table_id) reservation.tableId = rowData.tableid || rowData.table_id;
      if (rowData.customername || rowData.customer_name) {
        reservation.customer = { 
          name: rowData.customername || rowData.customer_name || '', 
          phone: reservation.customer?.phone || '', 
          email: reservation.customer?.email || '' 
        };
      }
      if (rowData.customerphone || rowData.customer_phone || rowData.phone) {
        reservation.customer = { 
          name: reservation.customer?.name || '', 
          phone: rowData.customerphone || rowData.customer_phone || rowData.phone || '', 
          email: reservation.customer?.email || '' 
        };
      }
      if (rowData.customeremail || rowData.customer_email || rowData.email) {
        reservation.customer = { 
          name: reservation.customer?.name || '', 
          phone: reservation.customer?.phone || '', 
          email: rowData.customeremail || rowData.customer_email || rowData.email || '',
          notes: reservation.customer?.notes || ''
        };
      }
      if (rowData.customernotes || rowData.customer_notes || rowData.notes) {
        reservation.customer = { 
          name: reservation.customer?.name || '', 
          phone: reservation.customer?.phone || '', 
          email: reservation.customer?.email || '',
          notes: rowData.customernotes || rowData.customer_notes || rowData.notes || ''
        };
      }
      if (rowData.partysize || rowData.party_size) reservation.partySize = parseInt(rowData.partysize || rowData.party_size) || 1;
      if (rowData.starttime || rowData.start_time) {
        const startTimeValue = rowData.starttime || rowData.start_time;
        // CSV dates are exported in UTC, so we keep them as UTC
        // Just ensure it's a valid ISO string
        const date = new Date(startTimeValue);
        if (!isNaN(date.getTime())) {
          reservation.startTime = date.toISOString();
        } else {
          reservation.startTime = startTimeValue;
        }
      }
      if (rowData.endtime || rowData.end_time) {
        const endTimeValue = rowData.endtime || rowData.end_time;
        // CSV dates are exported in UTC, so we keep them as UTC
        // Just ensure it's a valid ISO string
        const date = new Date(endTimeValue);
        if (!isNaN(date.getTime())) {
          reservation.endTime = date.toISOString();
        } else {
          reservation.endTime = endTimeValue;
        }
      }
      if (rowData.durationminutes || rowData.duration_minutes) reservation.durationMinutes = parseInt(rowData.durationminutes || rowData.duration_minutes) || 60;
      if (rowData.status) reservation.status = rowData.status as 'CONFIRMED' | 'PENDING' | 'SEATED' | 'FINISHED' | 'CANCELLED';
      if (rowData.priority) reservation.priority = rowData.priority as 'STANDARD' | 'VIP' | 'LARGE_GROUP';
      if (rowData.source) reservation.source = rowData.source;
      if (rowData.preferredsectorid || rowData.preferred_sector_id) reservation.preferredSectorId = rowData.preferredsectorid || rowData.preferred_sector_id;
      if (rowData.notes) reservation.notes = rowData.notes;

      // Set defaults
      reservation.id = reservation.id || `csv-${Date.now()}-${index}`;
      reservation.customer = reservation.customer || { name: '', phone: '', email: '' };
      reservation.status = reservation.status || 'CONFIRMED';
      reservation.priority = reservation.priority || 'STANDARD';
      reservation.source = reservation.source || 'IMPORT';
      reservation.durationMinutes = reservation.durationMinutes || 60;
      
      // Ensure customer has required fields
      if (!reservation.customer.phone) reservation.customer.phone = '';
      if (!reservation.customer.email) reservation.customer.email = '';
      
      // Set timestamps
      const now = new Date().toISOString();
      reservation.createdAt = reservation.createdAt || now;
      reservation.updatedAt = reservation.updatedAt || now;

      
      return reservation as Reservation;
    });
  }
  
  /**
   * Export reservations to CSV format
   */
  static exportReservationsToCSV(reservations: Reservation[]): string {
    // Get restaurant timezone from store
    const store = useTimelineStore.getState();
    const restaurantTimezone = store.restaurantConfig?.timezone || 'UTC';

    const csvData = reservations.map(reservation => {
      // Convert UTC times to restaurant timezone for CSV export
      const startTimeInRestaurantTz = this.convertToRestaurantTimezone(reservation.startTime, restaurantTimezone);
      const endTimeInRestaurantTz = this.convertToRestaurantTimezone(reservation.endTime, restaurantTimezone);
      
      return {
        id: reservation.id,
        tableId: reservation.tableId,
        customerName: reservation.customer.name,
        customerPhone: reservation.customer.phone,
        customerEmail: reservation.customer.email || '',
        customerNotes: reservation.customer.notes || '',
        partySize: reservation.partySize,
        startTime: startTimeInRestaurantTz,
        endTime: endTimeInRestaurantTz,
        durationMinutes: reservation.durationMinutes,
        status: reservation.status,
        priority: reservation.priority,
        notes: reservation.notes || '',
        preferredSectorId: reservation.preferredSectorId || '',
        source: reservation.source || 'web',
        createdAt: reservation.createdAt,
        updatedAt: reservation.updatedAt
      };
    });
    
    return Papa.unparse(csvData);
  }
  
  /**
   * Import reservations from CSV string (standalone version that doesn't require store)
   */
  static async importReservationsFromCSV(csvContent: string): Promise<ImportResult> {
    try {
      const parseResult = Papa.parse(csvContent, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (header) => header.trim()
      });
      
      if (parseResult.errors.length > 0) {
        return {
          success: false,
          validCount: 0,
          invalidCount: 0,
          errors: parseResult.errors.map(error => `Parse error: ${error.message}`)
        };
      }
      
      const rawReservations = parseResult.data as Record<string, unknown>[];
      const reservations: Reservation[] = rawReservations.map(row => {
        // CSV dates are in UTC (matching how we export them)
        // Just ensure they're valid ISO strings
        const startTimeRaw = (row.startTime as string) || '';
        const endTimeRaw = (row.endTime as string) || '';
        
        let startTime = startTimeRaw;
        let endTime = endTimeRaw;
        
        // Validate and normalize dates to ISO format
        if (startTimeRaw) {
          const date = new Date(startTimeRaw);
          if (!isNaN(date.getTime())) {
            startTime = date.toISOString();
          }
        }
        if (endTimeRaw) {
          const date = new Date(endTimeRaw);
          if (!isNaN(date.getTime())) {
            endTime = date.toISOString();
          }
        }
        
        return {
          id: (row.id as string) || crypto.randomUUID(),
          tableId: (row.tableId as string),
          customer: {
            name: (row.customerName as string) || '',
            phone: (row.customerPhone as string) || '',
            email: (row.customerEmail as string) || undefined,
            notes: (row.customerNotes as string) || undefined
          },
          partySize: parseInt(String(row.partySize || '2')) || 2,
          startTime: startTime,
          endTime: endTime,
          durationMinutes: parseInt(String(row.durationMinutes || '120')) || 120,
          status: (row.status as Reservation['status']) || 'CONFIRMED',
          priority: (row.priority as Reservation['priority']) || 'STANDARD',
          notes: (row.notes as string) || undefined,
          preferredSectorId: (row.preferredSectorId as string) || undefined,
          source: (row.source as string) || 'IMPORT',
          createdAt: (row.createdAt as string) || new Date().toISOString(),
          updatedAt: (row.updatedAt as string) || new Date().toISOString()
        };
      });
      
      // Basic validation without store dependency
      const validReservations: Reservation[] = [];
      const errors: string[] = [];
      
      reservations.forEach((reservation, index) => {
        try {
          // Basic validation
          if (!reservation.id || !reservation.tableId || !reservation.customer.name) {
            errors.push(`Row ${index + 1}: Missing required fields (id, tableId, customerName)`);
            return;
          }
          
          if (!reservation.startTime || !reservation.endTime) {
            errors.push(`Row ${index + 1}: Missing required time fields`);
            return;
          }
          
          if (reservation.partySize < 1 || reservation.partySize > 20) {
            errors.push(`Row ${index + 1}: Invalid party size`);
            return;
          }
          
          // Validate dates
          const startDate = new Date(reservation.startTime);
          const endDate = new Date(reservation.endTime);
          
          if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            errors.push(`Row ${index + 1}: Invalid date format`);
            return;
          }
          
          if (endDate <= startDate) {
            errors.push(`Row ${index + 1}: End time must be after start time`);
            return;
          }
          
          validReservations.push(reservation);
        } catch (error) {
          errors.push(`Row ${index + 1}: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      });
      
      return {
        success: validReservations.length > 0,
        validCount: validReservations.length,
        invalidCount: reservations.length - validReservations.length,
        errors,
        autoAssignedCount: 0,
        vipDetectedCount: validReservations.filter(r => r.priority === 'VIP').length
      };
      
    } catch (error) {
      return {
        success: false,
        validCount: 0,
        invalidCount: 0,
        errors: [`Import error: ${error instanceof Error ? error.message : 'Unknown error'}`]
      };
    }
  }
}

export default BulkImportService;
