export type TableId = string;
export type SectorId = string;
export type ReservationId = string;

export interface Table {
  id: TableId;
  sectorId: SectorId;
  name: string;
  capacity: { min: number; max: number };
  sortOrder: number;
}

export interface Sector {
  id: SectorId;
  name: string;
  sortOrder: number;
}

export interface Reservation {
  id: ReservationId;
  tableId: TableId;
  startSlot: number;
  endSlot: number;
  customerName: string;
  partySize: number;
  status: "CONFIRMED" | "SEATED" | "DONE" | "CANCELLED";
}
