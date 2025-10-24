import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import type { Table, Reservation } from '@/types';
import type { TimelineConfig } from '@/types';
import { ROW_HEIGHT } from '@/lib/constants';
import ReservationBlock from './ReservationBlock';

interface TableRowProps {
  table: Table;
  reservations: Reservation[];
  config: TimelineConfig;
  sectorName: string;
}

export default function TableRow({ table, reservations, config, sectorName }: TableRowProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: table.id,
  });

  return (
    <div 
      ref={setNodeRef}
      data-table-id={table.id}
      className={`relative border-b border-gray-200 z-40 ${
        isOver ? 'bg-blue-50' : '' // TODO: add hover effect
      }`}
      style={{ height: `${ROW_HEIGHT}px` }}
    >
      <div 
        className="relative h-full"
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
          />
        ))}
      </div>
    </div>
  );
}
