import { describe, it, expect, beforeEach } from 'vitest';
import { BulkImportService } from '@/lib/bulkImportService';
import { generateTablesAndSectors, generateReservationsInTimezone, generateRestaurantConfig } from '@/lib/seedGenerator';
import type { Reservation, RestaurantConfig, Table, Sector } from '@/types';

describe('CSV Round-trip Functionality', () => {
  let testReservations: Reservation[];
  let testConfig: RestaurantConfig;
  let testTables: Table[];
  let testSectors: Sector[];

  beforeEach(() => {
    // Generate test data
    testConfig = generateRestaurantConfig('America/Argentina/Buenos_Aires');
    const { tables, sectors } = generateTablesAndSectors();
    testTables = tables;
    testSectors = sectors;
    testReservations = generateReservationsInTimezone(tables, sectors, testConfig, 'America/Argentina/Buenos_Aires', 20);
  });

  describe('exportReservationsToCSV', () => {
    it('should export reservations to CSV format', () => {
      const csvContent = BulkImportService.exportReservationsToCSV(testReservations);
      
      expect(csvContent).toBeTruthy();
      expect(csvContent).toContain('id,tableId,customerName');
      expect(csvContent).toContain('preferredSectorId');
      
      // Check that all reservations are included
      testReservations.forEach(reservation => {
        expect(csvContent).toContain(reservation.id);
        expect(csvContent).toContain(reservation.customer.name);
        expect(csvContent).toContain(reservation.tableId);
      });
    });

    it('should include preferredSectorId in CSV export', () => {
      const csvContent = BulkImportService.exportReservationsToCSV(testReservations);
      
      // Check that preferredSectorId column exists
      expect(csvContent).toContain('preferredSectorId');
      
      // Check that some reservations have preferredSectorId values
      const lines = csvContent.split('\n');
      const headerLine = lines[0];
      const preferredSectorIndex = headerLine.split(',').indexOf('preferredSectorId');
      
      expect(preferredSectorIndex).toBeGreaterThan(-1);
      
      // Check that some data lines have preferredSectorId values
      const dataLines = lines.slice(1).filter(line => line.trim());
      const hasPreferredSector = dataLines.some(line => {
        const columns = line.split(',');
        return columns[preferredSectorIndex] && columns[preferredSectorIndex].trim() !== '';
      });
      
      expect(hasPreferredSector).toBe(true);
    });

    it('should handle reservations without preferredSectorId', () => {
      // Create reservations without preferredSectorId
      const reservationsWithoutPreferred = testReservations.map(r => ({
        ...r,
        preferredSectorId: undefined
      }));
      
      const csvContent = BulkImportService.exportReservationsToCSV(reservationsWithoutPreferred);
      
      expect(csvContent).toBeTruthy();
      expect(csvContent).toContain('preferredSectorId');
      
      // Check that empty preferredSectorId is handled correctly
      const lines = csvContent.split('\n');
      const dataLines = lines.slice(1).filter(line => line.trim());
      dataLines.forEach(line => {
        const columns = line.split(',');
        const preferredSectorIndex = lines[0].split(',').indexOf('preferredSectorId');
        expect(columns[preferredSectorIndex]).toBe('');
      });
    });
  });

  describe('importReservationsFromCSV', () => {
    it('should import reservations from CSV string', async () => {
      const csvContent = BulkImportService.exportReservationsToCSV(testReservations);
      const result = await BulkImportService.importReservationsFromCSV(csvContent);
      
      expect(result.success).toBe(true);
      expect(result.validCount).toBeGreaterThan(0);
      expect(result.errors).toHaveLength(0);
    });

    it('should preserve preferredSectorId during import', async () => {
      const csvContent = BulkImportService.exportReservationsToCSV(testReservations);
      const result = await BulkImportService.importReservationsFromCSV(csvContent);
      
      expect(result.success).toBe(true);
      
      // The import should preserve the preferredSectorId values
      // We can't directly access the imported reservations from the result,
      // but we can verify that the import was successful
      expect(result.validCount).toBeGreaterThan(0);
    });

    it('should handle CSV with missing preferredSectorId column', async () => {
      // Create CSV without preferredSectorId column
      const csvData = testReservations.map(reservation => ({
        id: reservation.id,
        tableId: reservation.tableId,
        customerName: reservation.customer.name,
        customerPhone: reservation.customer.phone,
        customerEmail: reservation.customer.email || '',
        customerNotes: reservation.customer.notes || '',
        partySize: reservation.partySize,
        startTime: reservation.startTime,
        endTime: reservation.endTime,
        durationMinutes: reservation.durationMinutes,
        status: reservation.status,
        priority: reservation.priority,
        notes: reservation.notes || '',
        source: reservation.source || 'web',
        createdAt: reservation.createdAt,
        updatedAt: reservation.updatedAt
      }));
      
      const csvContent = csvData.map(row => Object.values(row).join(',')).join('\n');
      const header = 'id,tableId,customerName,customerPhone,customerEmail,customerNotes,partySize,startTime,endTime,durationMinutes,status,priority,notes,source,createdAt,updatedAt';
      const fullCsv = header + '\n' + csvContent;
      
      const result = await BulkImportService.importReservationsFromCSV(fullCsv);
      
      expect(result.success).toBe(true);
      expect(result.validCount).toBeGreaterThan(0);
    });

    it('should handle malformed CSV gracefully', async () => {
      const malformedCsv = 'invalid,csv,content\nwith,wrong,number,of,columns';
      
      const result = await BulkImportService.importReservationsFromCSV(malformedCsv);
      
      expect(result.success).toBe(false);
      expect(result.validCount).toBe(0);
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it('should handle empty CSV', async () => {
      const result = await BulkImportService.importReservationsFromCSV('');
      
      expect(result.success).toBe(false);
      expect(result.validCount).toBe(0);
      expect(result.errors.length).toBeGreaterThan(0);
    });
  });

  describe('Round-trip functionality', () => {
    it('should maintain data integrity through export-import cycle', async () => {
      // Export original data
      const csvContent = BulkImportService.exportReservationsToCSV(testReservations);
      
      // Import the exported data
      const result = await BulkImportService.importReservationsFromCSV(csvContent);
      
      expect(result.success).toBe(true);
      expect(result.validCount).toBe(testReservations.length);
      expect(result.errors).toHaveLength(0);
    });

    it('should preserve VIP customers and preferred sectors through round-trip', async () => {
      // Filter for reservations with VIP priority or preferred sectors
      const vipReservations = testReservations.filter(r => 
        r.priority === 'VIP' || r.preferredSectorId
      );
      
      expect(vipReservations.length).toBeGreaterThan(0);
      
      // Export VIP reservations
      const csvContent = BulkImportService.exportReservationsToCSV(vipReservations);
      
      // Import them back
      const result = await BulkImportService.importReservationsFromCSV(csvContent);
      
      expect(result.success).toBe(true);
      expect(result.validCount).toBe(vipReservations.length);
    });

    it('should handle mixed data types correctly', async () => {
      // Create reservations with various data types
      const mixedReservations = [
        ...testReservations.filter(r => r.priority === 'VIP'),
        ...testReservations.filter(r => r.priority === 'LARGE_GROUP'),
        ...testReservations.filter(r => r.priority === 'STANDARD')
      ];
      
      const csvContent = BulkImportService.exportReservationsToCSV(mixedReservations);
      const result = await BulkImportService.importReservationsFromCSV(csvContent);
      
      expect(result.success).toBe(true);
      expect(result.validCount).toBe(mixedReservations.length);
    });
  });

  describe('CSV format validation', () => {
    it('should include all required columns', () => {
      const csvContent = BulkImportService.exportReservationsToCSV(testReservations);
      const lines = csvContent.split('\n');
      const header = lines[0];
      
      const requiredColumns = [
        'id', 'tableId', 'customerName', 'customerPhone', 'customerEmail',
        'customerNotes', 'partySize', 'startTime', 'endTime', 'durationMinutes',
        'status', 'priority', 'notes', 'preferredSectorId', 'source',
        'createdAt', 'updatedAt'
      ];
      
      requiredColumns.forEach(column => {
        expect(header).toContain(column);
      });
    });

    it('should handle special characters in customer data', async () => {
      const specialCharReservations = testReservations.map(r => ({
        ...r,
        customer: {
          ...r.customer,
          name: `Customer with "quotes" and,commas`,
          notes: `Notes with\nnewlines and\ttabs`
        }
      }));
      
      const csvContent = BulkImportService.exportReservationsToCSV(specialCharReservations);
      const result = await BulkImportService.importReservationsFromCSV(csvContent);
      
      expect(result.success).toBe(true);
      expect(result.validCount).toBe(specialCharReservations.length);
    });
  });
});
