import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import type { Table, Reservation, TimelineConfig, DragState } from '@/types';
import { ROW_HEIGHT } from '@/lib/constants';
import { slotToIso, pxToSlot } from '@/lib/timeUtils';
import ReservationBlock from './ReservationBlock';


interface TableRowProps {
  table: Table;
  reservations: Reservation[];
  config: TimelineConfig;
  dragState?: DragState;
  onSlotClick?: (table: Table, startTime: string) => void;
}

export default function TableRow({ table, reservations, config, dragState, onSlotClick }: TableRowProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: table.id,
  });

  /**
   * Handle clicks on empty slots in the timeline
   * Calculates the exact start time based on the click position
   */
  const handleSlotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent event conflicts - only handle clicks directly on the empty row
    if (e.target !== e.currentTarget) {
      return;
    }

    // Only proceed if onSlotClick handler is provided
    if (!onSlotClick) {
      return;
    }

    // Calculate the slot index based on the horizontal click position
    const slotIndex = pxToSlot(e.nativeEvent.offsetX, config);
    
    // Convert slot index to ISO timestamp
    const startTime = slotToIso(slotIndex, config);
    
    // Call the onSlotClick handler with table and startTime
    onSlotClick(table, startTime);
  };

  return (
    <div 
      ref={setNodeRef}
      data-table-id={table.id}
      className={`relative border-b border-gray-200 z-40 `}
      style={{ height: `${ROW_HEIGHT}px` }}
    >
      <div 
        className="relative h-full cursor-pointer"
        onClick={handleSlotClick}
        style={{ 
          width: `${(config.endHour - config.startHour) * (60 / config.slotMinutes) * config.slotWidth}px` 
        }}
      >
        {/* Render reservation blocks */}
        {reservations.map((reservation) => (
          <ReservationBlock
            key={reservation.id}
            reservation={reservation}
            config={config}
            dragState={dragState}
          />
        ))}
      </div>
    </div>
  );
}
