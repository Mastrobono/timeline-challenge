import React, { useState, useEffect } from 'react';
import type { Table, Reservation, ReservationStatus, Priority, TimelineConfig } from '@/types';
import { ReservationValidationService } from '@/lib/reservationValidationService';
import { canReserveSlot } from '@/lib/conflictService';
import { slotToIso, isoToSlotIndex } from '@/lib/timeUtils';
import useTimelineStore from '@/store/useTimelineStore';
import { addMinutes } from 'date-fns';
import { format, toZonedTime } from 'date-fns-tz';

interface CreateReservationModalProps {
  isOpen: boolean;
  table: Table | null;
  startTime: string | null;
  config: TimelineConfig;
  onClose: () => void;
}

export default function CreateReservationModal({
  isOpen,
  table,
  startTime,
  config,
  onClose
}: CreateReservationModalProps) {
  const { addReservation, reservationsById, tablesById, restaurantConfig } = useTimelineStore();
  
  // Form state
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    customerNotes: '',
    partySize: table?.capacity.min || 2,
    durationMinutes: 120,
    status: 'CONFIRMED' as ReservationStatus,
    priority: 'STANDARD' as Priority,
    notes: ''
  });

  // Reset form when modal opens with new data
  useEffect(() => {
    if (isOpen && table) {
      setFormData({
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        customerNotes: '',
        partySize: table.capacity.min,
        durationMinutes: 120,
        status: 'CONFIRMED',
        priority: 'STANDARD',
        notes: ''
      });
    }
  }, [isOpen, table]);

  // Don't render if modal is closed
  if (!isOpen) {
    return null;
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!table || !startTime) {
      alert('Missing table or start time information');
      return;
    }

    // Calculate end time
    const startDate = new Date(startTime);
    const endDate = addMinutes(startDate, formData.durationMinutes);
    const endTime = endDate.toISOString();

    // Generate UUID for new reservation
    const id = crypto.randomUUID();

    // Create reservation object
    const newReservation: Reservation = {
      id,
      tableId: table.id,
      customer: {
        name: formData.customerName,
        phone: formData.customerPhone,
        email: formData.customerEmail || '',
        notes: formData.customerNotes || undefined
      },
      partySize: formData.partySize,
      startTime,
      endTime,
      durationMinutes: formData.durationMinutes,
      status: formData.status,
      priority: formData.priority,
      notes: formData.notes || undefined,
      source: 'web',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Get all existing reservations for validation
    const existingReservations = Object.values(reservationsById);
    const allTables = Object.values(tablesById);

    // Validate reservation using the validation service
    const validation = ReservationValidationService.validateReservation(
      newReservation,
      {
        restaurantConfig,
        tables: allTables,
        existingReservations: existingReservations,
        timezone: config.timezone
      }
    );

    if (!validation.isValid) {
      alert(`Validation failed: ${validation.errors.join(', ')}`);
      return;
    }

    // Use the same conflict checking logic as drag & drop
    const startSlot = isoToSlotIndex(startTime, config);
    const endSlot = isoToSlotIndex(endTime, config);
    
    const canReserve = canReserveSlot(
      existingReservations,
      table.id,
      startSlot,
      endSlot,
      config
    );

    if (!canReserve) {
      alert('This time slot is already occupied. Please choose a different time.');
      return;
    }

    // Basic validation for required fields
    if (!formData.customerName.trim()) {
      alert('Customer name is required.');
      return;
    }

    if (!formData.customerPhone.trim()) {
      alert('Customer phone is required.');
      return;
    }

    if (formData.partySize < table.capacity.min || formData.partySize > table.capacity.max) {
      alert(`Party size must be between ${table.capacity.min} and ${table.capacity.max} people.`);
      return;
    }

    // Add the reservation to the store
    addReservation(newReservation);
    
    // Close the modal
    onClose();
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] scrollbar-container">
        <div className="scrollbar-content max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Create Reservation</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Table and Time Info */}
          {table && startTime && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600">
                <div><strong>Table:</strong> {table.name}</div>
                <div><strong>Start Time:</strong> {format(toZonedTime(new Date(startTime), config.timezone), 'HH:mm')}</div>
                <div><strong>Capacity:</strong> {table.capacity.min}-{table.capacity.max} people</div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Customer Information */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">Customer Information</h3>
              
              <div>
                <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="customerPhone"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="customerEmail"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="customerNotes" className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Notes
                </label>
                <textarea
                  id="customerNotes"
                  name="customerNotes"
                  value={formData.customerNotes}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Reservation Details */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">Reservation Details</h3>
              
              <div>
                <label htmlFor="partySize" className="block text-sm font-medium text-gray-700 mb-1">
                  Party Size *
                </label>
                <input
                  type="number"
                  id="partySize"
                  name="partySize"
                  value={formData.partySize}
                  onChange={handleInputChange}
                  min={table?.capacity.min || 1}
                  max={table?.capacity.max || 20}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {table && (
                  <p className="text-xs text-gray-500 mt-1">
                    Table capacity: {table.capacity.min}-{table.capacity.max} people
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="durationMinutes" className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (minutes) *
                </label>
                <input
                  type="number"
                  id="durationMinutes"
                  name="durationMinutes"
                  value={formData.durationMinutes}
                  onChange={handleInputChange}
                  min={30}
                  max={360}
                  step={15}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Duration: 30 minutes to 6 hours (360 minutes)
                </p>
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="PENDING">Pending</option>
                  <option value="CONFIRMED">Confirmed</option>
                  <option value="SEATED">Seated</option>
                </select>
              </div>

              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="STANDARD">Standard</option>
                  <option value="VIP">VIP</option>
                  <option value="LARGE_GROUP">Large Group</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save Reservation
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}
