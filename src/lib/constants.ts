// Timeline layout constants
export const ROW_HEIGHT = 60; // Table row height
export const HEADER_HEIGHT = 40; // TimeHeader height
export const TOOLBAR_HEIGHT = 60; // Toolbar height

// Reservation status colors
export const STATUS_COLORS = {
  PENDING: 'bg-yellow-400',
  CONFIRMED: 'bg-blue-500',
  SEATED: 'bg-green-500',
  FINISHED: 'bg-gray-400',
  NO_SHOW: 'bg-red-500',
  // For CANCELLED, we need a striped pattern
  CANCELLED: 'bg-[repeating-linear-gradient(45deg,theme(colors.gray.300),theme(colors.gray.300)_10px,theme(colors.gray.400)_10px,theme(colors.gray.400)_20px)]',
} as const;
