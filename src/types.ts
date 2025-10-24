export type UUID = string;
export type ISODateTime = string; // e.g., "2025-10-15T20:00:00-03:00"
export type Minutes = number;
export type SlotIndex = number; // 0-based, each slot = 15min

export type ReservationStatus = 
  | 'PENDING'      // Awaiting confirmation
  | 'CONFIRMED'    // Confirmed, not yet seated
  | 'SEATED'       // Currently at the table
  | 'FINISHED'     // Completed
  | 'NO_SHOW'      // Didn't arrive
  | 'CANCELLED';   // Cancelled

export type Priority = 'STANDARD' | 'VIP' | 'LARGE_GROUP';

export interface Sector {
  id: UUID;
  name: string;
  color: string;
  sortOrder: number;
}

export interface Table {
  id: UUID;
  sectorId: UUID;
  name: string;
  capacity: {
    min: number;
    max: number;
  };
  sortOrder: number; // for Y-axis ordering
}

export interface Customer {
  name: string;
  phone: string;
  email?: string;
  notes?: string;
}

export interface Reservation {
  id: UUID;
  tableId: UUID;
  customer: Customer;
  partySize: number;
  startTime: ISODateTime;
  endTime: ISODateTime;
  durationMinutes: Minutes;
  status: ReservationStatus;
  priority: Priority;
  notes?: string;
  source?: string; // 'phone', 'web', 'walkin', 'app'
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
}

export interface TimelineConfig {
  date: string; // "2025-10-15"
  startHour: number; // 11
  endHour: number; // 24 (or 0 for midnight)
  slotMinutes: Minutes; // 15
  slotWidth: number; // px width of one slot
  viewMode: 'day' | '3-day' | 'week' | 'month';
  timezone: string; // e.g. "America/Argentina/Buenos_Aires"
}

export interface RestaurantConfig {
  id: UUID;
  name: string;
  timezone: string;
  operatingHours: {
    startHour: number;
    endHour: number;
  };
  slotConfiguration: {
    slotMinutes: number;
    defaultSlotWidth: number;
  };
  createdAt: ISODateTime;
  updatedAt: ISODateTime;
}

export type OccupiedSlotsMap = Record<Table['id'], Set<number>>;