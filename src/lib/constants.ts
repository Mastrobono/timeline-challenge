// Timeline layout constants
export const ROW_HEIGHT = 60; // Table row height
export const HEADER_HEIGHT = 40; // TimeHeader height
export const TOOLBAR_HEIGHT = 60; // Toolbar height

// Reservation status colors (matching sidebar colors)
export const STATUS_COLORS = {
  PENDING: 'bg-amber-500',    // #f59e0b
  CONFIRMED: 'bg-emerald-500', // #10b981
  SEATED: 'bg-blue-500',       // #3b82f6
  FINISHED: 'bg-gray-500',     // #6b7280
  NO_SHOW: 'bg-red-500',        // #ef4444
  CANCELLED: 'bg-violet-500',   // #8b5cf6
} as const;

// Priority badge mapping
export const PRIORITY_BADGES = {
  VIP: 'V',
  LARGE_GROUP: 'LG',
  STANDARD: 'S',
} as const;
