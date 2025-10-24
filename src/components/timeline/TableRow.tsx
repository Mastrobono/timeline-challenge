import React from 'react';
import type { Table, Reservation } from '@/types';
import type { TimelineConfig } from '@/lib/timeUtils';
import { ROW_HEIGHT } from '@/lib/constants';
import ReservationBlock from './ReservationBlock';

interface TableRowProps {
  table: Table;
  reservations: Reservation[];
  config: TimelineConfig;
  sectorName: string;
}

export default function TableRow({ table, reservations, config, sectorName }: TableRowProps) {
  return (
    <div 
      data-table-id={table.id}
      className="relative border-b border-gray-200 z-40"
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
