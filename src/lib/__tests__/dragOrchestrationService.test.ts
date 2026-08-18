import { describe, it, expect } from 'vitest';
import { DragOrchestrationService } from '@/lib/dragOrchestrationService';
import { isoToSlotIndex, slotToIso } from '@/lib/timeUtils';
import type { Reservation, Table, RestaurantConfig, TimelineConfig } from '@/types';

const TZ = 'America/Argentina/Buenos_Aires';

const config: TimelineConfig = {
  date: '2025-10-23',
  startHour: 8,
  endHour: 23,
  slotMinutes: 15,
  slotWidth: 60,
  timezone: TZ,
  viewMode: 'day',
};

const restaurantConfig: RestaurantConfig = {
  id: 'r1',
  name: 'Test',
  timezone: TZ,
  operatingHours: { startHour: 8, endHour: 23 },
  slotConfiguration: { slotMinutes: 15, defaultSlotWidth: 60 },
  createdAt: '2025-10-01T00:00:00.000Z',
  updatedAt: '2025-10-01T00:00:00.000Z',
};

const tables: Table[] = [
  { id: 'table-1', sectorId: 'sector-1', name: 'Table 1', capacity: { min: 2, max: 4 }, sortOrder: 1 },
  { id: 'table-2', sectorId: 'sector-1', name: 'Table 2', capacity: { min: 2, max: 4 }, sortOrder: 2 },
  { id: 'table-tiny', sectorId: 'sector-1', name: 'Tiny', capacity: { min: 1, max: 1 }, sortOrder: 3 },
];

/** Build a reservation anchored at a slot index on the config date. */
function reservationAt(id: string, tableId: string, startSlot: number, durationSlots: number): Reservation {
  return {
    id,
    tableId,
    customer: { name: `Guest ${id}`, phone: '+54-11-0000-0000', email: 'g@e.com' },
    partySize: 2,
    startTime: slotToIso(startSlot, config),
    endTime: slotToIso(startSlot + durationSlots, config),
    durationMinutes: durationSlots * 15,
    status: 'CONFIRMED',
    priority: 'STANDARD',
    createdAt: '2025-10-01T00:00:00.000Z',
    updatedAt: '2025-10-01T00:00:00.000Z',
  };
}

function ctx(otherReservations: Reservation[] = []) {
  return { config, tables, restaurantConfig, otherReservations };
}

const PX = config.slotWidth;

describe('DragOrchestrationService.classify', () => {
  it('recognises each gesture from the dnd-kit id', () => {
    expect(DragOrchestrationService.classify('resize-left-res-1')).toBe('resize-left');
    expect(DragOrchestrationService.classify('resize-right-res-1')).toBe('resize-right');
    expect(DragOrchestrationService.classify('res-1')).toBe('move');
  });
});

describe('move', () => {
  it('shifts start and end by the dragged slot count, preserving duration', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 6); // 10:00, 90 min
    const outcome = DragOrchestrationService.resolve(
      'move',
      { reservation, deltaX: 2 * PX, targetTableId: 'table-1' },
      ctx()
    );

    expect(outcome.status).toBe('applied');
    if (outcome.status !== 'applied') return;

    expect(isoToSlotIndex(outcome.patch.startTime!, config)).toBe(10);
    expect(isoToSlotIndex(outcome.patch.endTime!, config)).toBe(16);
  });

  it('rounds a sub-slot drag to the nearest slot', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 4);
    const outcome = DragOrchestrationService.resolve(
      'move',
      { reservation, deltaX: PX * 0.6, targetTableId: 'table-1' },
      ctx()
    );

    expect(outcome.status).toBe('applied');
    if (outcome.status !== 'applied') return;
    expect(isoToSlotIndex(outcome.patch.startTime!, config)).toBe(9);
  });

  it('moves the reservation to the drop target table', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 4);
    const outcome = DragOrchestrationService.resolve(
      'move',
      { reservation, deltaX: 0, targetTableId: 'table-2' },
      ctx()
    );

    expect(outcome.status).toBe('applied');
    if (outcome.status !== 'applied') return;
    expect(outcome.patch.tableId).toBe('table-2');
  });

  it('is a noop when dropped back where it started', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 4);
    const outcome = DragOrchestrationService.resolve(
      'move',
      { reservation, deltaX: 0, targetTableId: 'table-1' },
      ctx()
    );

    expect(outcome.status).toBe('noop');
  });

  it('rejects a drop with no target table', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 4);
    const outcome = DragOrchestrationService.resolve('move', { reservation, deltaX: PX }, ctx());
    expect(outcome.status).toBe('rejected');
  });

  it('rejects a drag past the right edge of the grid', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 4);
    const outcome = DragOrchestrationService.resolve(
      'move',
      { reservation, deltaX: 500 * PX, targetTableId: 'table-1' },
      ctx()
    );
    expect(outcome.status).toBe('rejected');
  });

  it('reports a conflict when the target slot is taken on that table', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 4);
    const blocker = reservationAt('res-2', 'table-1', 12, 4);

    const outcome = DragOrchestrationService.resolve(
      'move',
      { reservation, deltaX: 4 * PX, targetTableId: 'table-1' },
      ctx([blocker])
    );

    expect(outcome.status).toBe('invalid');
    if (outcome.status !== 'invalid') return;
    expect(outcome.message).toContain('Cannot move reservation');
  });

  it('does not treat the dragged reservation as its own conflict', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 4);
    const outcome = DragOrchestrationService.resolve(
      'move',
      { reservation, deltaX: PX, targetTableId: 'table-1' },
      ctx([reservation])
    );

    expect(outcome.status).toBe('applied');
  });

  it('reports a capacity violation when dropped on a table that is too small', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 4); // partySize 2
    const outcome = DragOrchestrationService.resolve(
      'move',
      { reservation, deltaX: 0, targetTableId: 'table-tiny' }, // max 1
      ctx()
    );

    expect(outcome.status).toBe('invalid');
  });
});

describe('resize-right', () => {
  it('extends the end while keeping the start', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 4);
    const outcome = DragOrchestrationService.resolve(
      'resize-right',
      { reservation, deltaX: 2 * PX },
      ctx()
    );

    expect(outcome.status).toBe('applied');
    if (outcome.status !== 'applied') return;
    expect(outcome.patch.startTime).toBe(reservation.startTime);
    expect(isoToSlotIndex(outcome.patch.endTime!, config)).toBe(14);
  });

  it('rejects shrinking below the 30 minute minimum', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 2); // exactly 30 min
    const outcome = DragOrchestrationService.resolve(
      'resize-right',
      { reservation, deltaX: -1 * PX },
      ctx()
    );

    expect(outcome.status).toBe('rejected');
  });

  it('rejects extending past the end of the grid', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 4);
    const outcome = DragOrchestrationService.resolve(
      'resize-right',
      { reservation, deltaX: 500 * PX },
      ctx()
    );

    expect(outcome.status).toBe('rejected');
  });

  it('reports a conflict when the extension overlaps a neighbour', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 4);
    const neighbour = reservationAt('res-2', 'table-1', 13, 4);

    const outcome = DragOrchestrationService.resolve(
      'resize-right',
      { reservation, deltaX: 3 * PX },
      ctx([neighbour])
    );

    expect(outcome.status).toBe('invalid');
    if (outcome.status !== 'invalid') return;
    expect(outcome.message).toContain('Cannot resize reservation');
  });
});

describe('resize-left', () => {
  it('moves the start while keeping the end', () => {
    const reservation = reservationAt('res-1', 'table-1', 12, 4);
    const outcome = DragOrchestrationService.resolve(
      'resize-left',
      { reservation, deltaX: -2 * PX },
      ctx()
    );

    expect(outcome.status).toBe('applied');
    if (outcome.status !== 'applied') return;
    expect(outcome.patch.endTime).toBe(reservation.endTime);
    expect(isoToSlotIndex(outcome.patch.startTime!, config)).toBe(10);
  });

  it('rejects dragging the start past the end', () => {
    const reservation = reservationAt('res-1', 'table-1', 12, 4);
    const outcome = DragOrchestrationService.resolve(
      'resize-left',
      { reservation, deltaX: 10 * PX },
      ctx()
    );

    expect(outcome.status).toBe('rejected');
  });

  it('rejects shrinking below the 30 minute minimum', () => {
    const reservation = reservationAt('res-1', 'table-1', 12, 2);
    const outcome = DragOrchestrationService.resolve(
      'resize-left',
      { reservation, deltaX: 1 * PX },
      ctx()
    );

    expect(outcome.status).toBe('rejected');
  });

  it('is a noop when the start does not actually change', () => {
    const reservation = reservationAt('res-1', 'table-1', 12, 4);
    const outcome = DragOrchestrationService.resolve(
      'resize-left',
      { reservation, deltaX: 0 },
      ctx()
    );

    expect(outcome.status).toBe('noop');
  });
});

describe('isPlacementValid (live drag feedback)', () => {
  it('is true for a free slot and false over a taken one', () => {
    const reservation = reservationAt('res-1', 'table-1', 8, 4);
    const blocker = reservationAt('res-2', 'table-1', 12, 4);

    expect(
      DragOrchestrationService.isPlacementValid(
        'move',
        { reservation, deltaX: 20 * PX, targetTableId: 'table-1' },
        ctx([blocker])
      )
    ).toBe(true);

    expect(
      DragOrchestrationService.isPlacementValid(
        'move',
        { reservation, deltaX: 4 * PX, targetTableId: 'table-1' },
        ctx([blocker])
      )
    ).toBe(false);
  });
});
