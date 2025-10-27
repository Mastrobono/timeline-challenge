import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import type { Table, Reservation, TimelineConfig, DragState } from '@/types';
import { ROW_HEIGHT } from '@/lib/constants';
import { slotToIso, pxToSlot, isoToSlotIndex } from '@/lib/timeUtils';
import ReservationBlock from './ReservationBlock';


interface TableRowProps {
  table: Table;
  reservations: Reservation[];
  config: TimelineConfig;
  dragState?: DragState;
  selectedSlot?: {
    tableId: string | null;
    startTime: string | null;
  };
  editingReservation?: string | null;
  onSlotClick?: (table: Table, startTime: string) => void;
  onEditClick?: (reservation: Reservation, table: Table, startTime: string) => void;
}

export default function TableRow({ table, reservations, config, dragState, selectedSlot, editingReservation, onSlotClick, onEditClick }: TableRowProps) {
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
    const clickX = e.nativeEvent.offsetX;
    const slotIndex = pxToSlot(clickX, config);
    
    // Convert slot index to ISO timestamp
    const startTime = slotToIso(slotIndex, config);
    
    // Call the onSlotClick handler with table and startTime
    onSlotClick(table, startTime);
  };

  // Check if this table row has a selected slot
  const isSlotSelected = selectedSlot?.tableId === table.id && selectedSlot?.startTime;
  
  // Calculate position for selected slot overlay
  const getSelectedSlotPosition = () => {
    if (!isSlotSelected || !selectedSlot?.startTime) return null;
    
    // Convert startTime to slot index using the proper utility function
    const startSlot = isoToSlotIndex(selectedSlot.startTime, config);
    
    return {
      left: startSlot * config.slotWidth,
      width: config.slotWidth
    };
  };

  const selectedSlotPosition = getSelectedSlotPosition();

  return (
    <div 
      ref={setNodeRef}
      data-table-id={table.id}
      className={`relative border-b border-gray-200 z-40 `}
      style={{ height: `${ROW_HEIGHT}px` }}
    >
      <div 
        className="relative h-full"
        onClick={handleSlotClick}
        style={{ 
          width: `${(config.endHour - config.startHour) * (60 / config.slotMinutes) * config.slotWidth}px` 
        }}
      >
        {/* Selected slot overlay */}
        {selectedSlotPosition && (
          <div
            className="absolute top-0 bottom-0 bg-blue-200 bg-opacity-40 border-2 border-blue-500 border-opacity-60 pointer-events-none z-50"
            style={{
              left: `${selectedSlotPosition.left}px`,
              width: `${selectedSlotPosition.width}px`
            }}
          />
        )}
        
        {/* Render reservation blocks */}
        {reservations.map((reservation) => (
          <ReservationBlock
            key={reservation.id}
            reservation={reservation}
            config={config}
            dragState={dragState}
            table={table}
            editingReservation={editingReservation}
            onEditClick={onEditClick}
          />
        ))}
      </div>
    </div>
  );
}
