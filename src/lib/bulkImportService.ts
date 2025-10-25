import type { Reservation } from '@/types';
import useTimelineStore from '@/store/useTimelineStore';
import Papa from 'papaparse';

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
      const content = await this.readFileContent(file);
      const reservations = this.parseCSV(content);
      
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
   * Process reservations with validation and import to store
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
      
      this.store.bulkImportReservations(reservations);
      
      const allReservations = Object.values(this.store.reservationsById);
      const validCount = allReservations.length;
      const invalidCount = reservations.length - validCount;
      
      const result: ImportResult = {
        success: true,
        validCount,
        invalidCount,
        errors: []
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
          email: rowData.customeremail || rowData.customer_email || rowData.email || '' 
        };
      }
      if (rowData.partysize || rowData.party_size) reservation.partySize = parseInt(rowData.partysize || rowData.party_size) || 1;
      if (rowData.starttime || rowData.start_time) reservation.startTime = rowData.starttime || rowData.start_time;
      if (rowData.endtime || rowData.end_time) reservation.endTime = rowData.endtime || rowData.end_time;
      if (rowData.durationminutes || rowData.duration_minutes) reservation.durationMinutes = parseInt(rowData.durationminutes || rowData.duration_minutes) || 60;
      if (rowData.status) reservation.status = rowData.status as 'CONFIRMED' | 'PENDING' | 'SEATED' | 'FINISHED' | 'CANCELLED';
      if (rowData.priority) reservation.priority = rowData.priority as 'STANDARD' | 'VIP' | 'LARGE_GROUP';
      if (rowData.source) reservation.source = rowData.source;

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
}

export default BulkImportService;
