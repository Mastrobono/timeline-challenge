'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogPanel, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { XMarkIcon, ChevronUpDownIcon, CheckIcon, SparklesIcon, ClockIcon, TableCellsIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import type { Table, Reservation, ReservationStatus, Priority, TimelineConfig, Sector } from '@/types';
import { STATUS_COLORS } from '@/lib/constants';
import { AutoSchedulingService, type TableSuggestion, type TimeSlot, type VIPAnalysis } from '@/lib/autoSchedulingService';
import useTimelineStore from '@/store/useTimelineStore';

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

interface ReservationDrawerProps {
  isOpen: boolean;
  table: Table | null;
  startTime: string | null;
  endTime?: string | null;
  config: TimelineConfig;
  reservation?: Reservation | null; // Optional existing reservation for edit mode
  previewReservation?: Reservation | null; // Preview reservation for real-time updates
  onClose: () => void;
  onSave: (reservation: Reservation) => boolean;
  onDelete?: (reservation: Reservation) => void;
  onUpdatePreview?: (reservation: Reservation) => void; // Callback to update preview
  validationErrors?: string[]; // External validation errors
  onClearErrors?: () => void; // Callback to clear errors
}

const statusOptions = [
  { id: 'PENDING', name: 'Pending', color: STATUS_COLORS.PENDING },
  { id: 'CONFIRMED', name: 'Confirmed', color: STATUS_COLORS.CONFIRMED },
  { id: 'SEATED', name: 'Seated', color: STATUS_COLORS.SEATED },
  { id: 'FINISHED', name: 'Finished', color: STATUS_COLORS.FINISHED },
  { id: 'NO_SHOW', name: 'No Show', color: STATUS_COLORS.NO_SHOW },
  { id: 'CANCELLED', name: 'Cancelled', color: STATUS_COLORS.CANCELLED },
];

const priorityOptions = [
  { id: 'STANDARD', name: 'Standard' },
  { id: 'VIP', name: 'VIP' },
  { id: 'LARGE_GROUP', name: 'Large Group' },
];

export default function ReservationDrawer({
  isOpen,
  table,
  startTime,
  endTime,
  config,
  reservation = null,
  previewReservation = null,
  onClose,
  onSave,
  onDelete,
  onUpdatePreview,
  validationErrors: externalErrors = [],
  onClearErrors
}: ReservationDrawerProps) {
  
  const isEditMode = !!reservation;
  
  // Form state
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    customerNotes: '',
    partySize: table?.capacity.min || 2,
    durationMinutes: 120,
    status: statusOptions[1], // CONFIRMED
    priority: priorityOptions[0], // STANDARD
    notes: '',
    preferredSectorId: '',
    selectedTableId: table?.id || '',
    selectedSectorId: table?.sectorId || ''
  });

  // Error state for validation messages
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const drawerRef = useRef<HTMLDivElement>(null);
  
  // Auto-scheduling state
  const [tableSuggestions, setTableSuggestions] = useState<TableSuggestion[]>([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [vipAnalysis, setVipAnalysis] = useState<VIPAnalysis | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showAvailabilitySearch, setShowAvailabilitySearch] = useState(false);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  
  // Combine internal and external validation errors
  const allErrors = [...validationErrors, ...externalErrors];

  // Clear smart table menus when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setShowSuggestions(false);
      setShowAvailabilitySearch(false);
      setTableSuggestions([]);
      setAvailableTimeSlots([]);
      setVipAnalysis(null);
    }
  }, [isOpen]);

  // Auto-scroll to top when errors occur
  useEffect(() => {
    if (allErrors.length > 0 && drawerRef.current) {
      drawerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [allErrors.length]);
  
  // Get store data for auto-scheduling
  const store = useTimelineStore();
  const { tablesById, sectorsById, reservationsById } = store;
  
  // Convert to arrays for easier use
  const tables = Object.values(tablesById);
  const sectors = Object.values(sectorsById);
  
  // Auto-scheduling functions
  const generateTableSuggestions = async () => {
    if (!startTime || !formData.partySize || !formData.durationMinutes) return;
    
    setIsLoadingSuggestions(true);
    try {
      const tables = Object.values(tablesById);
      const sectors = Object.values(sectorsById);
      const existingReservations = Object.values(reservationsById);
      
      const suggestions = AutoSchedulingService.findBestTable(
        formData.partySize,
        startTime,
        formData.durationMinutes,
        tables,
        sectors,
        existingReservations,
        config,
        { 
          maxSuggestions: 8,
          preferredSectorId: formData.preferredSectorId || undefined
        }
      );
      
      setTableSuggestions(suggestions);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error generating table suggestions:', error);
    } finally {
      setIsLoadingSuggestions(false);
    }
  };
  
  const findNextAvailableSlots = async () => {
    if (!startTime || !formData.partySize || !formData.durationMinutes) return;
    
    setIsLoadingSuggestions(true);
    try {
      const tables = Object.values(tablesById);
      const sectors = Object.values(sectorsById);
      const existingReservations = Object.values(reservationsById);
      
      const slots = AutoSchedulingService.findNextAvailableSlots(
        formData.partySize,
        startTime,
        formData.durationMinutes,
        tables,
        sectors,
        existingReservations,
        config,
        {
          partySize: formData.partySize,
          durationMinutes: formData.durationMinutes,
          preferredTime: startTime,
          searchWindows: [15, 30, 60],
          maxSuggestions: 8
        }
      );
      
      setAvailableTimeSlots(slots);
      setShowAvailabilitySearch(true);
    } catch (error) {
      console.error('Error finding available slots:', error);
    } finally {
      setIsLoadingSuggestions(false);
    }
  };
  
  const analyzeVIPStatus = () => {
    if (!formData.customerPhone && !formData.customerEmail) return;
    
    const existingReservations = Object.values(reservationsById);
    const customerHistory = existingReservations.filter(r => 
      r.customer.phone === formData.customerPhone ||
      r.customer.email === formData.customerEmail
    );
    
    const analysis = AutoSchedulingService.analyzeVIPStatus(
      {
        customer: {
          name: formData.customerName,
          phone: formData.customerPhone,
          email: formData.customerEmail
        },
        partySize: formData.partySize,
        priority: formData.priority.id as Priority
      },
      customerHistory,
      { minHistoryReservations: 2, vipThreshold: 0.6 }
    );
    
    setVipAnalysis(analysis);
    
    // Auto-update priority if VIP detected
    if (analysis.isVIP && analysis.suggestedPriority !== formData.priority.id) {
      const newPriority = priorityOptions.find(p => p.id === analysis.suggestedPriority);
      if (newPriority) {
        setFormData(prev => ({ ...prev, priority: newPriority }));
      }
    }
  };
  
  const selectTableSuggestion = (suggestion: TableSuggestion) => {
    // Auto-fill form with table suggestion data
    setFormData(prev => ({
      ...prev,
      selectedTableId: suggestion.table.id,
      selectedSectorId: suggestion.table.sectorId,
      partySize: suggestion.partySize,
      preferredSectorId: suggestion.table.sectorId
    }));
    
    // Close suggestions menu
    setShowSuggestions(false);
    
    // Clear any existing errors
    setValidationErrors([]);
    onClearErrors?.();
  };
  
  const selectTimeSlot = (slot: TimeSlot) => {
    // Auto-fill form with time slot data
    setFormData(prev => ({
      ...prev,
      durationMinutes: slot.durationMinutes,
      selectedTableId: slot.tableId,
      selectedSectorId: slot.sectorId
    }));
    
    // Close availability search menu
    setShowAvailabilitySearch(false);
    
    // Clear any existing errors
    setValidationErrors([]);
    onClearErrors?.();
  };
  
  // Auto-analyze VIP status when customer info changes
  useEffect(() => {
    if (formData.customerPhone || formData.customerEmail) {
      analyzeVIPStatus();
    }
  }, [formData.customerPhone, formData.customerEmail, formData.partySize]);

  // Update preview reservation in real-time when form data changes
  useEffect(() => {
    if (previewReservation && onUpdatePreview && table && startTime) {
      const updatedPreview: Reservation = {
        ...previewReservation,
        customer: {
          ...previewReservation.customer,
          name: formData.customerName || 'New Reservation',
          phone: formData.customerPhone,
          email: formData.customerEmail,
          notes: formData.customerNotes
        },
        partySize: formData.partySize,
        durationMinutes: formData.durationMinutes,
        status: formData.status.id as ReservationStatus,
        priority: formData.priority.id as Priority,
        notes: formData.notes,
        // Recalculate endTime based on new duration
        endTime: new Date(new Date(startTime).getTime() + formData.durationMinutes * 60000).toISOString()
      };
      
      // Only update if there are actual changes to avoid infinite loop
      const hasChanges = 
        updatedPreview.customer.name !== previewReservation.customer.name ||
        updatedPreview.customer.phone !== previewReservation.customer.phone ||
        updatedPreview.customer.email !== previewReservation.customer.email ||
        updatedPreview.customer.notes !== previewReservation.customer.notes ||
        updatedPreview.partySize !== previewReservation.partySize ||
        updatedPreview.durationMinutes !== previewReservation.durationMinutes ||
        updatedPreview.status !== previewReservation.status ||
        updatedPreview.priority !== previewReservation.priority ||
        updatedPreview.notes !== previewReservation.notes ||
        updatedPreview.endTime !== previewReservation.endTime;
      
      if (hasChanges) {
        onUpdatePreview(updatedPreview);
      }
    }
  }, [formData, onUpdatePreview, table, startTime]); // Removed previewReservation from dependencies

  // Reset form when modal opens with new data
  useEffect(() => {
    if (isOpen) {
      if (reservation) {
        // Edit mode - populate with existing data
        const statusOption = statusOptions.find(s => s.id === reservation.status) || statusOptions[1];
        const priorityOption = priorityOptions.find(p => p.id === reservation.priority) || priorityOptions[0];
        
        // Calculate actual duration from start and end times
        const startTime = new Date(reservation.startTime);
        const endTime = new Date(reservation.endTime);
        const actualDurationMinutes = Math.round((endTime.getTime() - startTime.getTime()) / (1000 * 60));
        
        setFormData({
          customerName: reservation.customer.name,
          customerPhone: reservation.customer.phone,
          customerEmail: reservation.customer.email || '',
          customerNotes: reservation.customer.notes || '',
          partySize: reservation.partySize,
          durationMinutes: actualDurationMinutes,
          status: statusOption,
          priority: priorityOption,
          notes: reservation.notes || '',
          preferredSectorId: reservation.preferredSectorId || '',
          selectedTableId: reservation.tableId,
          selectedSectorId: table?.sectorId || ''
        });
      } else if (table) {
        // Create mode - reset to defaults
        const initialDuration = 120; // Default duration
        
        setFormData({
          customerName: '',
          customerPhone: '',
          customerEmail: '',
          customerNotes: '',
          partySize: table.capacity.min,
          durationMinutes: initialDuration,
          status: statusOptions[1], // CONFIRMED
          priority: priorityOptions[0], // STANDARD
          notes: '',
          preferredSectorId: '',
          selectedTableId: table.id,
          selectedSectorId: table.sectorId
        });
      }
    }
  }, [isOpen, table, reservation]);


  // Calculate duration from start and end times
  const calculateDuration = (startTimeStr: string, endTimeStr: string) => {
    if (!startTimeStr || !endTimeStr) return 120;
    
    const [startHour, startMinute] = startTimeStr.split(':').map(Number);
    const [endHour, endMinute] = endTimeStr.split(':').map(Number);
    
    const startMinutes = startHour * 60 + startMinute;
    let endMinutes = endHour * 60 + endMinute;
    
    // Handle overnight (if end time is earlier than start time, assume next day)
    if (endMinutes < startMinutes) {
      endMinutes += 24 * 60; // Add 24 hours
    }
    
    const duration = endMinutes - startMinutes;
    return Math.max(30, duration); // Minimum 30 minutes
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous validation errors
    setValidationErrors([]);
    
    if (!table || !startTime) {
      setValidationErrors(['Missing table or start time information']);
      return;
    }

    // Basic validation for required fields
    if (!formData.customerName.trim()) {
      setValidationErrors(['Customer name is required']);
      return;
    }

    if (!formData.customerPhone.trim()) {
      setValidationErrors(['Customer phone is required']);
      return;
    }

    // Find selected table for validation
    const selectedTable = tables.find(t => t.id === formData.selectedTableId);
    if (!selectedTable) {
      setValidationErrors(['Please select a valid table']);
      return;
    }

    if (formData.partySize < selectedTable.capacity.min || formData.partySize > selectedTable.capacity.max) {
      setValidationErrors([`Party size must be between ${selectedTable.capacity.min} and ${selectedTable.capacity.max}`]);
      return;
    }

    if (!formData.durationMinutes) {
      setValidationErrors(['Duration is required']);
      return;
    }
    
    if (formData.durationMinutes < 30) {
      setValidationErrors(['Duration must be at least 30 minutes']);
      return;
    }

    // SIMPLE: Use startTime from slot + durationMinutes
    const startDateTime = new Date(startTime);
    const endDateTime = new Date(startDateTime.getTime() + (formData.durationMinutes * 60000));
    const endTime = endDateTime.toISOString();

    // Generate or use existing ID
    const id = reservation?.id || crypto.randomUUID();

    // Create reservation object
    const newReservation: Reservation = {
      id,
      tableId: formData.selectedTableId,
      customer: {
        name: formData.customerName,
        phone: formData.customerPhone,
        email: formData.customerEmail || '',
        notes: formData.customerNotes || undefined
      },
      partySize: formData.partySize,
      startTime: startDateTime.toISOString(),
      endTime,
      durationMinutes: formData.durationMinutes,
      status: formData.status.id as ReservationStatus,
      priority: formData.priority.id as Priority,
      notes: formData.notes || undefined,
      preferredSectorId: formData.preferredSectorId || undefined,
      source: 'web',
      createdAt: reservation?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Call the onSave callback (validation will be handled in parent)
    // We pass a flag to check if save was successful
    const success = onSave(newReservation);
    
    // Only close if save was successful
    if (success) {
      onClose();
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'selectedTableId') {
      // When table changes, automatically update the sector
      const selectedTable = tables.find(t => t.id === value);
      setFormData(prev => ({ 
        ...prev, 
        selectedTableId: value,
        selectedSectorId: selectedTable?.sectorId || ''
      }));
    } else {
      setFormData(prev => ({ 
        ...prev, 
        [name]: name === 'durationMinutes' ? (parseInt(value) || 120) : value 
      }));
    }
  };

  // Handle select changes
  const handleStatusChange = (status: typeof statusOptions[0]) => {
    setFormData(prev => ({ ...prev, status }));
  };

  const handlePriorityChange = (priority: typeof priorityOptions[0]) => {
    setFormData(prev => ({ ...prev, priority }));
  };

  if (!table || !startTime) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="relative flex h-full flex-col scrollbar-container bg-gray-800 py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10">
                <div ref={drawerRef} className="scrollbar-content h-full overflow-y-auto">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-md font-semibold text-white">
                      {isEditMode ? 'Edit Reservation' : 'Create Reservation'}
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={onClose}
                        className="relative rounded-md text-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Table and Time Info */}
                <div className="mt-4 px-4 sm:px-6">
                  <div className="rounded-md bg-white/5 p-4">
                    <div className="text-xs text-gray-300 space-y-1">
                      <div><strong>Table:</strong> {table.name}</div>
                      <div><strong>Start Time:</strong> {format(toZonedTime(new Date(startTime), config.timezone), 'HH:mm')}</div>
                      <div><strong>End Time:</strong> {format(toZonedTime(new Date(new Date(startTime).getTime() + formData.durationMinutes * 60000), config.timezone), 'HH:mm')}</div>
                      <div><strong>Capacity:</strong> {table.capacity.min}-{table.capacity.max} people</div>
                    </div>
                  </div>
                </div>

                {/* Auto-Scheduling Assistant */}
                <div className="mt-4 px-4 sm:px-6">
                  <div className="rounded-md bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 border border-indigo-500/20">
                    <div className="flex items-center gap-2 mb-3">
                      <SparklesIcon className="h-4 w-4 text-indigo-400" />
                      <h3 className="text-sm font-medium text-white">Auto-Scheduling Assistant</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {/* VIP Analysis */}
                      {vipAnalysis && vipAnalysis.isVIP && (
                        <div className="rounded-md bg-yellow-500/10 p-3 border border-yellow-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <SparklesIcon className="h-4 w-4 text-yellow-400" />
                            <span className="text-sm font-medium text-yellow-200">VIP Customer Detected</span>
                          </div>
                          <div className="text-xs text-yellow-300">
                            <div className="mb-1">Confidence: {Math.round(vipAnalysis.confidence * 100)}%</div>
                            <div className="space-y-1">
                              {vipAnalysis.reasons.map((reason, index) => (
                                <div key={index} className="text-yellow-400">• {reason}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Smart Suggestions */}
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={generateTableSuggestions}
                          disabled={isLoadingSuggestions}
                          className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-white bg-indigo-500/20 hover:bg-indigo-500/30 rounded-md border border-indigo-500/30 disabled:opacity-50"
                        >
                          {isLoadingSuggestions ? (
                            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                          ) : (
                            <TableCellsIcon className="h-3 w-3" />
                          )}
                          {isLoadingSuggestions ? 'Finding...' : 'Smart Tables'}
                        </button>
                        
                        <button
                          type="button"
                          onClick={findNextAvailableSlots}
                          disabled={isLoadingSuggestions}
                          className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-white bg-purple-500/20 hover:bg-purple-500/30 rounded-md border border-purple-500/30 disabled:opacity-50"
                        >
                          {isLoadingSuggestions ? (
                            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                          ) : (
                            <ClockIcon className="h-3 w-3 text-white" />
                          )}
                          {isLoadingSuggestions ? 'Searching...' : 'Find Available'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table Suggestions */}
                {showSuggestions && tableSuggestions.length > 0 && (
                  <div className="mt-4 px-4 sm:px-6">
                    <div className="rounded-md bg-green-500/10 p-4 border border-green-500/20">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-medium text-green-200">Smart Table Suggestions</h4>
                        <button
                          type="button"
                          onClick={() => setShowSuggestions(false)}
                          className="text-green-400 hover:text-green-300"
                          aria-label="close suggestions"
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="space-y-2">
                        {tableSuggestions.map((suggestion, index) => (
                          <div
                            key={suggestion.table.id}
                            className={`p-3 rounded-md cursor-pointer transition-colors ${
                              suggestion.isAvailable 
                                ? 'bg-green-500/10 hover:bg-green-500/20 border border-green-500/30' 
                                : 'bg-red-500/10 border border-red-500/30'
                            }`}
                            onClick={() => suggestion.isAvailable && selectTableSuggestion(suggestion)}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {suggestion.table.name} ({suggestion.sector.name})
                                </div>
                                <div className="text-xs text-gray-300">
                                  Capacity: {suggestion.table.capacity.min}-{suggestion.table.capacity.max} people
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-white">
                                  Score: {Math.round(suggestion.suitabilityScore)}
                                </div>
                                <div className={`text-xs ${suggestion.isAvailable ? 'text-green-400' : 'text-red-400'}`}>
                                  {suggestion.isAvailable ? 'Available' : 'Unavailable'}
                                </div>
                              </div>
                            </div>
                            <div className="mt-2 text-xs text-gray-400">
                              {suggestion.reasons.map((reason, reasonIndex) => (
                                <span key={reasonIndex}>
                                  {reason}
                                  {reasonIndex < suggestion.reasons.length - 1 && ' • '}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Available Time Slots */}
                {showAvailabilitySearch && (
                  <div className="mt-4 px-4 sm:px-6">
                    <div className="rounded-md bg-blue-500/10 p-4 border border-blue-500/20">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-medium text-blue-200">Available Time Slots</h4>
                        <button
                          type="button"
                          onClick={() => setShowAvailabilitySearch(false)}
                          className="text-blue-400 hover:text-blue-300"
                          aria-label="close available time slots"
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </button>
                      </div>
                      {availableTimeSlots.length > 0 ? (
                        <div className="space-y-2">
                          {availableTimeSlots.map((slot, index) => (
                          <div
                            key={index}
                            className="p-3 rounded-md cursor-pointer bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 transition-colors"
                            onClick={() => selectTimeSlot(slot)}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="text-sm font-medium text-white">
                                  {format(toZonedTime(new Date(slot.startTime), config.timezone), 'HH:mm')} - 
                                  {format(toZonedTime(new Date(slot.endTime), config.timezone), 'HH:mm')}
                                </div>
                                <div className="text-xs text-gray-300">
                                  Duration: {slot.durationMinutes} minutes
                                </div>
                                <div className="text-xs text-blue-300 mt-1">
                                  📍 {slot.tableName} • {slot.sectorName}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-white">
                                  Score: {Math.round(slot.availabilityScore)}
                                </div>
                                <div className="text-xs text-blue-400">
                                  Available
                                </div>
                              </div>
                            </div>
                            
                            {/* Score breakdown */}
                            {slot.scoreBreakdown && (
                              <div className="mt-2 pt-2 border-t border-blue-500/20">
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Time:</span>
                                    <span className="text-white">{Math.round(slot.scoreBreakdown.timePreference)}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Capacity:</span>
                                    <span className="text-white">{Math.round(slot.scoreBreakdown.capacityFit)}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Sector:</span>
                                    <span className="text-white">{Math.round(slot.scoreBreakdown.sectorPreference)}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-400">Efficiency:</span>
                                    <span className="text-white">{Math.round(slot.scoreBreakdown.operationalEfficiency)}</span>
                                  </div>
                                </div>
                                
                                {/* Reasons */}
                                {slot.reasons && slot.reasons.length > 0 && (
                                  <div className="mt-2">
                                    <div className="text-xs text-gray-400 mb-1">Why this time:</div>
                                    <div className="flex flex-wrap gap-1">
                                      {slot.reasons.map((reason, reasonIndex) => (
                                        <span
                                          key={reasonIndex}
                                          className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded text-xs"
                                        >
                                          {reason}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <div className="text-blue-200 text-sm mb-2">No Available Slots Found</div>
                          <div className="text-blue-300 text-xs">
                            Try adjusting your party size or duration, or check other tables
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 flex-1 px-4 sm:px-6">
                  {/* Validation Errors */}
                  {allErrors.length > 0 && (
                    <div className="mb-4 rounded-md bg-red-50 p-4">
                      <div className="flex">
                        <div className="ml-3 flex-1">
                          <h3 className="text-sm font-medium text-red-800">
                            Please correct the following errors:
                          </h3>
                          <div className="mt-2 text-sm text-red-700">
                            <ul className="list-disc pl-5 space-y-1">
                              {allErrors.map((error: string, index: number) => (
                                <li key={index}>{error}</li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Auto-scheduling buttons for conflicts */}
                          {allErrors.some(error => 
                            error.toLowerCase().includes('conflict') || 
                            error.toLowerCase().includes('overlap') ||
                            error.toLowerCase().includes('unavailable')
                          ) && (
                            <div className="mt-4 pt-3 border-t border-red-200">
                              <p className="text-sm text-red-700 mb-3">
                                Need help finding available options?
                              </p>
                              <div className="flex gap-2">
                                <button
                                  type="button"
                                  onClick={generateTableSuggestions}
                                  disabled={isLoadingSuggestions}
                                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-white bg-purple-500/20 hover:bg-purple-500/30 rounded-md border border-purple-500/30 disabled:opacity-50"
                                >
                                  {isLoadingSuggestions ? (
                                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                                  ) : (
                                    <TableCellsIcon className="h-3 w-3 text-white" />
                                  )}
                                  Smart Tables
                                </button>
                                <button
                                  type="button"
                                  onClick={findNextAvailableSlots}
                                  disabled={isLoadingSuggestions}
                                  className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-white bg-blue-500/20 hover:bg-blue-500/30 rounded-md border border-blue-500/30 disabled:opacity-50"
                                >
                                  {isLoadingSuggestions ? (
                                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                                  ) : (
                                    <ClockIcon className="h-3 w-3 text-white" />
                                  )}
                                  Find Available
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    {/* Customer Information */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-white">Customer Information</h3>
                      
                      <div>
                        <label htmlFor="customerName" className="block text-xs font-medium text-gray-200 mb-2">
                          Name *
                        </label>
                        <div className="rounded-md bg-white/5 px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                            type="text"
                            id="customerName"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleInputChange}
                            required
                            className="block w-full bg-transparent text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-xs"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="customerPhone" className="block text-xs font-medium text-gray-200 mb-2">
                          Phone *
                        </label>
                        <div className="rounded-md bg-white/5 px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                            type="tel"
                            id="customerPhone"
                            name="customerPhone"
                            value={formData.customerPhone}
                            onChange={handleInputChange}
                            required
                            className="block w-full bg-transparent text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-xs"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="customerEmail" className="block text-xs font-medium text-gray-200 mb-2">
                          Email
                        </label>
                        <div className="rounded-md bg-white/5 px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                            type="email"
                            id="customerEmail"
                            name="customerEmail"
                            value={formData.customerEmail}
                            onChange={handleInputChange}
                            className="block w-full bg-transparent text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-xs"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="customerNotes" className="block text-xs font-medium text-gray-200 mb-2">
                          Customer Notes
                        </label>
                        <textarea
                          id="customerNotes"
                          name="customerNotes"
                          value={formData.customerNotes}
                          onChange={handleInputChange}
                          rows={2}
                          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-xs"
                          placeholder="Special requests or notes about the customer..."
                        />
                      </div>
                    </div>

                    {/* Reservation Details */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-white">Reservation Details</h3>
                      
                      <div>
                        <label htmlFor="partySize" className="block text-xs font-medium text-gray-200 mb-2">
                          Party Size *
                        </label>
                        <div className="rounded-md bg-white/5 px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                            type="number"
                            id="partySize"
                            name="partySize"
                            value={formData.partySize}
                            onChange={handleInputChange}
                            min={table.capacity.min}
                            max={table.capacity.max}
                            required
                            className="block w-full bg-transparent text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-xs"
                          />
                        </div>
                        <p className="mt-1.5 text-xs text-gray-400">
                          Table capacity: {table.capacity.min}-{table.capacity.max} people
                        </p>
                      </div>

                      {/* Table Selection */}
                      <div>
                        <label htmlFor="selectedTableId" className="block text-xs font-medium text-gray-200 mb-2">
                          Table *
                        </label>
                        <div className="rounded-md bg-white/5 px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <select
                            id="selectedTableId"
                            name="selectedTableId"
                            value={formData.selectedTableId}
                            onChange={handleSelectChange}
                            required
                            className="block w-full bg-transparent text-white focus:outline focus:outline-0 sm:text-xs"
                          >
                            {tables.map((t) => {
                              const sector = sectors.find(s => s.id === t.sectorId);
                              return (
                                <option key={t.id} value={t.id} className="bg-gray-800 text-white">
                                  {t.name} • {sector?.name || 'Unknown'} ({t.capacity.min}-{t.capacity.max} people)
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="durationMinutes" className="block text-xs font-medium text-gray-200 mb-2">
                          Duration (minutes) *
                        </label>
                        <div className="rounded-md bg-white/5 px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <select
                            id="durationMinutes"
                            name="durationMinutes"
                            value={formData.durationMinutes}
                            onChange={handleSelectChange}
                            required
                            className="block w-full bg-transparent text-white focus:outline focus:outline-0 sm:text-xs"
                          >
                            <option value="">Select duration</option>
                            <option value="30" className="bg-gray-800 text-white">30 minutes</option>
                            <option value="60" className="bg-gray-800 text-white">1 hour</option>
                            <option value="90" className="bg-gray-800 text-white">1.5 hours</option>
                            <option value="120" className="bg-gray-800 text-white">2 hours</option>
                            <option value="150" className="bg-gray-800 text-white">2.5 hours</option>
                            <option value="180" className="bg-gray-800 text-white">3 hours</option>
                            <option value="240" className="bg-gray-800 text-white">4 hours</option>
                          </select>
                        </div>
                        <p className="mt-1.5 text-xs text-gray-400">
                          How long will the reservation last?
                        </p>
                      </div>


                      <div>
                        <div className="relative mt-2">
                          <Listbox value={formData.status} onChange={handleStatusChange}>
                            <label className="block text-xs font-medium text-gray-200 mb-2">
                              Status
                            </label>
                            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white/5 py-1.5 pl-3 pr-2 text-left text-white outline outline-1 -outline-offset-1 outline-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-500 text-xs ">
                              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                <span
                                  aria-label={formData.status.name}
                                  className={classNames(
                                    formData.status.color,
                                    'inline-block size-2 shrink-0 rounded-full border border-transparent',
                                  )}
                                />
                                <span className="block truncate">{formData.status.name}</span>
                              </span>
                              <ChevronUpDownIcon
                                aria-hidden="true"
                                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                              />
                            </ListboxButton>

                            <ListboxOptions
                              transition
                              className="absolute z-10 mt-1 max-h-60 w-full scrollbar-container rounded-md bg-gray-800 py-1 text-base outline outline-1 -outline-offset-1 outline-white/10 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in text-xs  "
                            >
                              <div className="scrollbar-content max-h-60 overflow-auto">
                              {statusOptions.map((status) => (
                                <ListboxOption
                                  key={status.id}
                                  value={status}
                                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-white data-[focus]:bg-indigo-500 data-[focus]:outline-none"
                                >
                                  <div className="flex items-center">
                                    <span
                                      aria-hidden="true"
                                      className={classNames(
                                        status.color,
                                        'inline-block size-2 shrink-0 rounded-full border border-transparent',
                                      )}
                                    />
                                    <span className="ml-3 block truncate text-xs group-data-[selected]:font-semibold">
                                      {status.name}
                                    </span>
                                  </div>

                                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-[:not([data-selected])]:hidden group-data-[focus]:text-white">
                                    <CheckIcon aria-hidden="true" className="size-5" />
                                  </span>
                                </ListboxOption>
                              ))}
                              </div>
                            </ListboxOptions>
                          </Listbox>
                        </div>
                      </div>

                      <div>
                        <div className="relative mt-2">
                          <Listbox value={formData.priority} onChange={handlePriorityChange}>
                            <label className="block text-xs font-medium text-gray-200 mb-2">
                              Priority
                            </label>
                            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white/5 py-1.5 pl-3 pr-2 text-left text-white outline outline-1 -outline-offset-1 outline-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-500 sm:text-sm/6">
                              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                <span className="block truncate text-xs">{formData.priority.name}</span>
                              </span>
                              <ChevronUpDownIcon
                                aria-hidden="true"
                                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                              />
                            </ListboxButton>

                            <ListboxOptions
                              transition
                              className="absolute z-10 mt-1 max-h-60 w-full scrollbar-container rounded-md bg-gray-800 py-1 text-xs outline outline-1 -outline-offset-1 outline-white/10 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in"
                            >
                              <div className="scrollbar-content max-h-60 overflow-auto">
                              {priorityOptions.map((priority) => (
                                <ListboxOption
                                  key={priority.id}
                                  value={priority}
                                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-white data-[focus]:bg-indigo-500 data-[focus]:outline-none"
                                >
                                  <span className="ml-3 block truncate text-xs  group-data-[selected]:font-semibold">
                                    {priority.name}
                                  </span>

                                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-[:not([data-selected])]:hidden group-data-[focus]:text-white">
                                    <CheckIcon aria-hidden="true" className="size-5" />
                                  </span>
                                </ListboxOption>
                              ))}
                              </div>
                            </ListboxOptions>
                          </Listbox>
                        </div>
                      </div>

                      <div>
                        <div className="relative mt-2">
                          <Listbox value={formData.preferredSectorId} onChange={(value) => setFormData(prev => ({ ...prev, preferredSectorId: value }))}>
                            <label className="block text-xs font-medium text-gray-200 mb-2">
                              Preferred Sector
                            </label>
                            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white/5 py-1.5 pl-3 pr-2 text-left text-white outline outline-1 -outline-offset-1 outline-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-500 sm:text-sm/6">
                              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                <span className="block truncate text-xs">
                                  {formData.preferredSectorId ? 
                                    Object.values(sectorsById).find(s => s.id === formData.preferredSectorId)?.name || 'No preference' :
                                    'No preference'
                                  }
                                </span>
                              </span>
                              <ChevronUpDownIcon
                                aria-hidden="true"
                                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                              />
                            </ListboxButton>

                            <ListboxOptions
                              transition
                              className="absolute z-10 mt-1 max-h-60 w-full scrollbar-container rounded-md bg-gray-800 py-1 text-xs outline outline-1 -outline-offset-1 outline-white/10 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in"
                            >
                              <div className="scrollbar-content max-h-60 overflow-auto">
                                <ListboxOption
                                  value=""
                                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-300 hover:bg-gray-700 hover:text-white data-[focus]:bg-gray-700 data-[focus]:text-white"
                                >
                                  <div className="flex items-center">
                                    <span className="block truncate">No preference</span>
                                  </div>
                                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-[:not([data-selected])]:hidden group-data-[focus]:text-white">
                                    <CheckIcon aria-hidden="true" className="size-5" />
                                  </span>
                                </ListboxOption>
                                {Object.values(sectorsById).map((sector) => (
                                  <ListboxOption
                                    key={sector.id}
                                    value={sector.id}
                                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-300 hover:bg-gray-700 hover:text-white data-[focus]:bg-gray-700 data-[focus]:text-white"
                                  >
                                    <div className="flex items-center">
                                      <span
                                        className={classNames(
                                          sector.color,
                                          'inline-block size-2 shrink-0 rounded-full border border-transparent mr-3',
                                        )}
                                      />
                                      <span className="block truncate">{sector.name}</span>
                                    </div>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-[:not([data-selected])]:hidden group-data-[focus]:text-white">
                                      <CheckIcon aria-hidden="true" className="size-5" />
                                    </span>
                                  </ListboxOption>
                                ))}
                              </div>
                            </ListboxOptions>
                          </Listbox>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="notes" className="block text-xs font-medium text-gray-200 mb-1">
                          Notes
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            rows={3}
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-xs placeholder:text-xs text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            placeholder="Reservation notes..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-md bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20"
                    >
                      Cancel
                    </button>
                    {isEditMode && onDelete && reservation && (
                      <button
                        type="button"
                        onClick={() => {
                          onDelete(reservation);
                          onClose();
                        }}
                        className="rounded-md bg-red-600 px-3 py-2 text-xs font-semibold text-white hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                      >
                        Delete
                      </button>
                    )}
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-500 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      {isEditMode ? 'Update' : 'Create'} Reservation
                    </button>
                  </div>
                </form>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

