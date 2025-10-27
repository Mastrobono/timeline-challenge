'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { XMarkIcon, ChevronUpDownIcon, CheckIcon } from '@heroicons/react/24/outline';
import { format, toZonedTime } from 'date-fns-tz';
import type { Table, Reservation, ReservationStatus, Priority, TimelineConfig } from '@/types';
import { STATUS_COLORS } from '@/lib/constants';

interface ReservationDrawerProps {
  isOpen: boolean;
  table: Table | null;
  startTime: string | null;
  config: TimelineConfig;
  reservation?: Reservation | null; // Optional existing reservation for edit mode
  onClose: () => void;
  onSave: (reservation: Reservation) => boolean;
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ReservationDrawer({
  isOpen,
  table,
  startTime,
  config,
  reservation = null,
  onClose,
  onSave
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
    notes: ''
  });

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
          notes: reservation.notes || ''
        });
      } else if (table) {
        // Create mode - reset to defaults
        setFormData({
          customerName: '',
          customerPhone: '',
          customerEmail: '',
          customerNotes: '',
          partySize: table.capacity.min,
          durationMinutes: 120,
          status: statusOptions[1], // CONFIRMED
          priority: priorityOptions[0], // STANDARD
          notes: ''
        });
      }
    }
  }, [isOpen, table, reservation]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!table || !startTime) {
      return;
    }

    // Basic validation for required fields
    if (!formData.customerName.trim()) {
      return;
    }

    if (!formData.customerPhone.trim()) {
      return;
    }

    if (formData.partySize < table.capacity.min || formData.partySize > table.capacity.max) {
      return;
    }

    // Calculate end time
    const startDate = new Date(startTime);
    const endDate = new Date(startDate.getTime() + (formData.durationMinutes * 60000));
    const endTime = endDate.toISOString();

    // Generate or use existing ID
    const id = reservation?.id || crypto.randomUUID();

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
      status: formData.status.id as ReservationStatus,
      priority: formData.priority.id as Priority,
      notes: formData.notes || undefined,
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
              <div className="relative flex h-full flex-col overflow-y-auto bg-gray-800 py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-base font-semibold text-white">
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
                <div className="mt-6 px-4 sm:px-6">
                  <div className="rounded-md bg-white/5 p-4">
                    <div className="text-sm text-gray-300">
                      <div><strong>Table:</strong> {table.name}</div>
                      <div><strong>Start Time:</strong> {format(toZonedTime(new Date(startTime), config.timezone), 'HH:mm')}</div>
                      <div><strong>Capacity:</strong> {table.capacity.min}-{table.capacity.max} people</div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 flex-1 px-4 sm:px-6">
                  <div className="space-y-6">
                    {/* Customer Information */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-white">Customer Information</h3>
                      
                      <div>
                        <label htmlFor="customerName" className="block text-xs font-medium text-gray-200 mb-1">
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
                            className="block w-full bg-transparent text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="customerPhone" className="block text-xs font-medium text-gray-200 mb-1">
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
                            className="block w-full bg-transparent text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="customerEmail" className="block text-xs font-medium text-gray-200 mb-1">
                          Email
                        </label>
                        <div className="rounded-md bg-white/5 px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                          <input
                            type="email"
                            id="customerEmail"
                            name="customerEmail"
                            value={formData.customerEmail}
                            onChange={handleInputChange}
                            className="block w-full bg-transparent text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="customerNotes" className="block text-xs font-medium text-gray-200 mb-1">
                          Customer Notes
                        </label>
                        <textarea
                          id="customerNotes"
                          name="customerNotes"
                          value={formData.customerNotes}
                          onChange={handleInputChange}
                          rows={2}
                          className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                          placeholder="Special requests or notes about the customer..."
                        />
                      </div>
                    </div>

                    {/* Reservation Details */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-white">Reservation Details</h3>
                      
                      <div>
                        <label htmlFor="partySize" className="block text-xs font-medium text-gray-200 mb-1">
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
                            className="block w-full bg-transparent text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
                          />
                        </div>
                        <p className="mt-1 text-xs text-gray-400">
                          Table capacity: {table.capacity.min}-{table.capacity.max} people
                        </p>
                      </div>

                      <div>
                        <label htmlFor="durationMinutes" className="block text-xs font-medium text-gray-200 mb-1">
                          Duration (minutes) *
                        </label>
                        <div className="rounded-md bg-white/5 px-3 pb-1.5 pt-2.5 outline outline-1 -outline-offset-1 outline-white/10 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
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
                            className="block w-full bg-transparent text-white placeholder:text-gray-500 focus:outline focus:outline-0 sm:text-sm/6"
                          />
                        </div>
                        <p className="mt-1 text-xs text-gray-400">
                          Duration: 30 minutes to 6 hours (360 minutes)
                        </p>
                      </div>

                      <div>
                        <div className="relative mt-2">
                          <Listbox value={formData.status} onChange={handleStatusChange}>
                            <label className="block text-xs font-medium text-gray-200 mb-1">
                              Status
                            </label>
                            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white/5 py-1.5 pl-3 pr-2 text-left text-white outline outline-1 -outline-offset-1 outline-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-500 sm:text-sm/6">
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
                              className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-800 py-1 text-base outline outline-1 -outline-offset-1 outline-white/10 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                            >
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
                                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                      {status.name}
                                    </span>
                                  </div>

                                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-[:not([data-selected])]:hidden group-data-[focus]:text-white">
                                    <CheckIcon aria-hidden="true" className="size-5" />
                                  </span>
                                </ListboxOption>
                              ))}
                            </ListboxOptions>
                          </Listbox>
                        </div>
                      </div>

                      <div>
                        <div className="relative mt-2">
                          <Listbox value={formData.priority} onChange={handlePriorityChange}>
                            <label className="block text-xs font-medium text-gray-200 mb-1">
                              Priority
                            </label>
                            <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white/5 py-1.5 pl-3 pr-2 text-left text-white outline outline-1 -outline-offset-1 outline-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-indigo-500 sm:text-sm/6">
                              <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                                <span className="block truncate">{formData.priority.name}</span>
                              </span>
                              <ChevronUpDownIcon
                                aria-hidden="true"
                                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                              />
                            </ListboxButton>

                            <ListboxOptions
                              transition
                              className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-800 py-1 text-base outline outline-1 -outline-offset-1 outline-white/10 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                            >
                              {priorityOptions.map((priority) => (
                                <ListboxOption
                                  key={priority.id}
                                  value={priority}
                                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-white data-[focus]:bg-indigo-500 data-[focus]:outline-none"
                                >
                                  <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                    {priority.name}
                                  </span>

                                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-400 group-[:not([data-selected])]:hidden group-data-[focus]:text-white">
                                    <CheckIcon aria-hidden="true" className="size-5" />
                                  </span>
                                </ListboxOption>
                              ))}
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
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
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
                      className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      {isEditMode ? 'Update' : 'Create'} Reservation
                    </button>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

