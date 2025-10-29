import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ReservationDrawer from '@/components/timeline/ReservationDrawer';
import type { Table, TimelineConfig } from '@/types';

// Mock the auto-scheduling service
vi.mock('@/lib/autoSchedulingService', () => ({
  AutoSchedulingService: {
    findBestTable: vi.fn(),
    findNextAvailableSlots: vi.fn(),
    analyzeVIPStatus: vi.fn()
  }
}));

// Mock the store
vi.mock('@/store/useTimelineStore', () => ({
  default: vi.fn(() => ({
    tablesById: {
      'table-1': { id: 'table-1', sectorId: 'sector-1', name: 'Table 1', capacity: { min: 2, max: 4 }, sortOrder: 1 },
      'table-2': { id: 'table-2', sectorId: 'sector-1', name: 'Table 2', capacity: { min: 5, max: 6 }, sortOrder: 2 }
    },
    sectorsById: {
      'sector-1': { id: 'sector-1', name: 'Main Dining', color: '#3B82F6', sortOrder: 1 }
    },
    reservationsById: {}
  }))
}));

describe('ReservationDrawer Auto-Scheduling Features', () => {
  let mockTable: Table;
  let mockConfig: TimelineConfig;
  let mockOnClose: ReturnType<typeof vi.fn>;
  let mockOnSave: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockTable = {
      id: 'table-1',
      sectorId: 'sector-1',
      name: 'Table 1',
      capacity: { min: 2, max: 4 },
      sortOrder: 1
    };

    mockConfig = {
      date: '2025-01-15',
      startHour: 7,
      endHour: 22,
      slotMinutes: 15,
      timezone: 'America/New_York',
      slotWidth: 60,
      viewMode: 'day'
    };

    mockOnClose = vi.fn();
    mockOnSave = vi.fn().mockReturnValue(true);

    // Reset mocks
    vi.clearAllMocks();
  });

  const renderReservationDrawer = (props = {}) => {
    return render(
      <ReservationDrawer
        isOpen={true}
        table={mockTable}
        startTime="2025-01-15T19:00:00-05:00"
        config={mockConfig}
        onClose={mockOnClose}
        onSave={mockOnSave}
        {...props}
      />
    );
  };

  describe('Auto-Scheduling Assistant UI', () => {
    it('should render the auto-scheduling assistant section', () => {
      renderReservationDrawer();

      expect(screen.getByText('Auto-Scheduling Assistant')).toBeInTheDocument();
      expect(screen.getByText('Smart Tables')).toBeInTheDocument();
      expect(screen.getByText('Find Available')).toBeInTheDocument();
    });

    it('should show VIP detection when customer is identified as VIP', async () => {
      const { AutoSchedulingService } = await import('@/lib/autoSchedulingService');
      
      vi.mocked(AutoSchedulingService.analyzeVIPStatus).mockReturnValue({
        isVIP: true,
        confidence: 0.8,
        reasons: ['Customer has 3 previous VIP reservations', 'Large party size: 8 people'],
        suggestedPriority: 'VIP'
      });

      renderReservationDrawer();

      // Fill in customer phone to trigger VIP analysis
      const phoneInput = screen.getByLabelText('Phone *');
      fireEvent.change(phoneInput, { target: { value: '555-0001' } });

      await waitFor(() => {
        expect(screen.getByText('VIP Customer Detected')).toBeInTheDocument();
        expect(screen.getByText('Confidence: 80%')).toBeInTheDocument();
        expect(screen.getByText('• Customer has 3 previous VIP reservations')).toBeInTheDocument();
      });
    });

    it('should not show VIP detection for non-VIP customers', async () => {
      const { AutoSchedulingService } = await import('@/lib/autoSchedulingService');
      
      vi.mocked(AutoSchedulingService.analyzeVIPStatus).mockReturnValue({
        isVIP: false,
        confidence: 0.2,
        reasons: ['New customer'],
        suggestedPriority: 'STANDARD'
      });

      renderReservationDrawer();

      const phoneInput = screen.getByLabelText('Phone *');
      fireEvent.change(phoneInput, { target: { value: '555-0002' } });

      await waitFor(() => {
        expect(screen.queryByText('VIP Customer Detected')).not.toBeInTheDocument();
      });
    });
  });

  describe('Smart Table Suggestions', () => {
    it('should generate table suggestions when Smart Tables button is clicked', async () => {
      const { AutoSchedulingService } = await import('@/lib/autoSchedulingService');
      
      const mockSuggestions = [
        {
          table: { id: 'table-2', sectorId: 'sector-1', name: 'Table 2', capacity: { min: 5, max: 6 }, sortOrder: 2 },
          sector: { id: 'sector-1', name: 'Main Dining', color: '#3B82F6', sortOrder: 1 },
          suitabilityScore: 85,
          reasons: ['Available at requested time', 'Perfect capacity fit (5-6 people)'],
          isAvailable: true
        }
      ];

      vi.mocked(AutoSchedulingService.findBestTable).mockReturnValue(mockSuggestions);

      renderReservationDrawer();

      // Fill required fields
      fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText('Phone *'), { target: { value: '555-0001' } });
      fireEvent.change(screen.getByLabelText('Party Size *'), { target: { value: '3' } });

      const smartTablesButton = screen.getByText('Smart Tables');
      fireEvent.click(smartTablesButton);

      await waitFor(() => {
        expect(AutoSchedulingService.findBestTable).toHaveBeenCalledWith(
          3,
          '2025-01-15T19:00:00-05:00',
          120, // default duration
          expect.any(Array),
          expect.any(Array),
          expect.any(Array),
          mockConfig,
          { maxSuggestions: 5 }
        );
      });

      await waitFor(() => {
        expect(screen.getByText('Smart Table Suggestions')).toBeInTheDocument();
        expect(screen.getByText('Table 2 (Main Dining)')).toBeInTheDocument();
        expect(screen.getByText('Score: 85')).toBeInTheDocument();
        expect(screen.getByText('Available')).toBeInTheDocument();
      });
    });

    it('should show loading state while generating suggestions', async () => {
      const { AutoSchedulingService } = await import('@/lib/autoSchedulingService');
      
      // Mock a delayed response
      vi.mocked(AutoSchedulingService.findBestTable).mockImplementation(
        () => new Promise(resolve => setTimeout(() => resolve([]), 100))
      );

      renderReservationDrawer();

      fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText('Phone *'), { target: { value: '555-0001' } });
      fireEvent.change(screen.getByLabelText('Party Size *'), { target: { value: '3' } });

      const smartTablesButton = screen.getByText('Smart Tables');
      fireEvent.click(smartTablesButton);

      expect(screen.getByText('Finding...')).toBeInTheDocument();
      expect(smartTablesButton).toBeDisabled();
    });

    it('should handle errors when generating suggestions', async () => {
      const { AutoSchedulingService } = await import('@/lib/autoSchedulingService');
      
      vi.mocked(AutoSchedulingService.findBestTable).mockImplementation(() => {
        throw new Error('Service error');
      });

      // Mock console.error to avoid test output
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

      renderReservationDrawer();

      fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText('Phone *'), { target: { value: '555-0001' } });
      fireEvent.change(screen.getByLabelText('Party Size *'), { target: { value: '3' } });

      const smartTablesButton = screen.getByText('Smart Tables');
      fireEvent.click(smartTablesButton);

      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalledWith('Error generating table suggestions:', expect.any(Error));
      });

      consoleSpy.mockRestore();
    });
  });

  describe('Find Next Available Slots', () => {
    it('should find available time slots when Find Available button is clicked', async () => {
      const { AutoSchedulingService } = await import('@/lib/autoSchedulingService');
      
      const mockSlots = [
        {
          startTime: '2025-01-15T19:15:00-05:00',
          endTime: '2025-01-15T21:15:00-05:00',
          durationMinutes: 120,
          availabilityScore: 95
        },
        {
          startTime: '2025-01-15T19:30:00-05:00',
          endTime: '2025-01-15T21:30:00-05:00',
          durationMinutes: 120,
          availabilityScore: 90
        }
      ];

      vi.mocked(AutoSchedulingService.findNextAvailableSlots).mockReturnValue(mockSlots);

      renderReservationDrawer();

      // Fill required fields
      fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText('Phone *'), { target: { value: '555-0001' } });
      fireEvent.change(screen.getByLabelText('Party Size *'), { target: { value: '3' } });

      const findAvailableButton = screen.getByText('Find Available');
      fireEvent.click(findAvailableButton);

      await waitFor(() => {
        expect(AutoSchedulingService.findNextAvailableSlots).toHaveBeenCalledWith(
          3,
          '2025-01-15T19:00:00-05:00',
          120,
          expect.any(Array),
          expect.any(Array),
          expect.any(Array),
          mockConfig,
          {
            partySize: 3,
            durationMinutes: 120,
            preferredTime: '2025-01-15T19:00:00-05:00',
            searchWindows: [15, 30, 60],
            maxSuggestions: 8
          }
        );
      });

      await waitFor(() => {
        expect(screen.getByText('Available Time Slots')).toBeInTheDocument();
        expect(screen.getByText('19:15 - 21:15')).toBeInTheDocument();
        expect(screen.getByText('19:30 - 21:30')).toBeInTheDocument();
        expect(screen.getByText('Score: 95')).toBeInTheDocument();
      });
    });

    it('should show loading state while searching for available slots', async () => {
      const { AutoSchedulingService } = await import('@/lib/autoSchedulingService');
      
      vi.mocked(AutoSchedulingService.findNextAvailableSlots).mockImplementation(
        () => new Promise(resolve => setTimeout(() => resolve([]), 100))
      );

      renderReservationDrawer();

      fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText('Phone *'), { target: { value: '555-0001' } });
      fireEvent.change(screen.getByLabelText('Party Size *'), { target: { value: '3' } });

      const findAvailableButton = screen.getByText('Find Available');
      fireEvent.click(findAvailableButton);

      expect(screen.getByText('Searching...')).toBeInTheDocument();
      expect(findAvailableButton).toBeDisabled();
    });
  });

  describe('Suggestion Interactions', () => {
    it('should allow closing table suggestions', async () => {
      const { AutoSchedulingService } = await import('@/lib/autoSchedulingService');
      
      const mockSuggestions = [
        {
          table: { id: 'table-2', sectorId: 'sector-1', name: 'Table 2', capacity: { min: 5, max: 6 }, sortOrder: 2 },
          sector: { id: 'sector-1', name: 'Main Dining', color: '#3B82F6', sortOrder: 1 },
          suitabilityScore: 85,
          reasons: ['Available at requested time'],
          isAvailable: true
        }
      ];

      vi.mocked(AutoSchedulingService.findBestTable).mockReturnValue(mockSuggestions);

      renderReservationDrawer();

      fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText('Phone *'), { target: { value: '555-0001' } });
      fireEvent.change(screen.getByLabelText('Party Size *'), { target: { value: '3' } });

      fireEvent.click(screen.getByText('Smart Tables'));

      await waitFor(() => {
        expect(screen.getByText('Smart Table Suggestions')).toBeInTheDocument();
      });

      const closeButton = screen.getByRole('button', { name: /close/i });
      fireEvent.click(closeButton);

      expect(screen.queryByText('Smart Table Suggestions')).not.toBeInTheDocument();
    });

    it('should allow closing available time slots', async () => {
      const { AutoSchedulingService } = await import('@/lib/autoSchedulingService');
      
      const mockSlots = [
        {
          startTime: '2025-01-15T19:15:00-05:00',
          endTime: '2025-01-15T21:15:00-05:00',
          durationMinutes: 120,
          availabilityScore: 95
        }
      ];

      vi.mocked(AutoSchedulingService.findNextAvailableSlots).mockReturnValue(mockSlots);

      renderReservationDrawer();

      fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText('Phone *'), { target: { value: '555-0001' } });
      fireEvent.change(screen.getByLabelText('Party Size *'), { target: { value: '3' } });

      fireEvent.click(screen.getByText('Find Available'));

      await waitFor(() => {
        expect(screen.getByText('Available Time Slots')).toBeInTheDocument();
      });

      const closeButtons = screen.getAllByRole('button', { name: /close/i });
      fireEvent.click(closeButtons[1]); // Second close button for time slots

      expect(screen.queryByText('Available Time Slots')).not.toBeInTheDocument();
    });
  });

  describe('Form Integration', () => {
    it('should require party size and duration for suggestions', async () => {
      renderReservationDrawer();

      const smartTablesButton = screen.getByText('Smart Tables');
      fireEvent.click(smartTablesButton);

      // Should not call the service without required fields
      const { AutoSchedulingService } = await import('@/lib/autoSchedulingService');
      expect(AutoSchedulingService.findBestTable).not.toHaveBeenCalled();
    });

    it('should update suggestions when form data changes', async () => {
      const { AutoSchedulingService } = await import('@/lib/autoSchedulingService');
      
      vi.mocked(AutoSchedulingService.findBestTable).mockReturnValue([]);

      renderReservationDrawer();

      fireEvent.change(screen.getByLabelText('Name *'), { target: { value: 'John Doe' } });
      fireEvent.change(screen.getByLabelText('Phone *'), { target: { value: '555-0001' } });
      fireEvent.change(screen.getByLabelText('Party Size *'), { target: { value: '3' } });

      fireEvent.click(screen.getByText('Smart Tables'));

      await waitFor(() => {
        expect(AutoSchedulingService.findBestTable).toHaveBeenCalledWith(
          3, // party size
          '2025-01-15T19:00:00-05:00',
          120, // default duration
          expect.any(Array),
          expect.any(Array),
          expect.any(Array),
          mockConfig,
          { maxSuggestions: 5 }
        );
      });

      // Change party size and try again
      fireEvent.change(screen.getByLabelText('Party Size *'), { target: { value: '5' } });
      fireEvent.click(screen.getByText('Smart Tables'));

      await waitFor(() => {
        expect(AutoSchedulingService.findBestTable).toHaveBeenCalledWith(
          5, // updated party size
          '2025-01-15T19:00:00-05:00',
          120,
          expect.any(Array),
          expect.any(Array),
          expect.any(Array),
          mockConfig,
          { maxSuggestions: 5 }
        );
      });
    });
  });
});
