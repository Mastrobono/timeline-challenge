import { slotToIso, isoToSlotIndex, getSlotsPerDay } from '@/lib/timeUtils';
import { ReservationValidationService } from '@/lib/reservationValidationService';
import type { Reservation, Table, RestaurantConfig, TimelineConfig } from '@/types';

export type DragKind = 'move' | 'resize-left' | 'resize-right';

export interface DragIntent {
  /** The reservation being manipulated. */
  reservation: Reservation;
  /** Horizontal distance travelled, in pixels. */
  deltaX: number;
  /** Target table id. Only meaningful for `move`. */
  targetTableId?: string;
}

export interface DragContext {
  config: TimelineConfig;
  tables: Table[];
  restaurantConfig: RestaurantConfig | null;
  /** Every other reservation the result must not collide with. */
  otherReservations: Reservation[];
}

export type DragOutcome =
  /** Nothing changed, or the gesture was a no-op. Do not touch the store. */
  | { status: 'noop'; reason: string }
  /** The gesture would leave the grid or break a minimum. Silently ignore. */
  | { status: 'rejected'; reason: string }
  /** The gesture collides with a business rule. Surface `message` to the user. */
  | { status: 'invalid'; reason: string; message: string }
  /** The gesture is valid. Apply `patch` to `reservation.id`. */
  | { status: 'applied'; patch: Partial<Reservation> };

/** A drag must leave at least 30 minutes on the clock. */
const MIN_DURATION_SLOTS = 2;

/**
 * Pure business rules for drag, resize and drop on the timeline.
 *
 * This used to live inline in `app/timeline/page.tsx` as three near-identical
 * ~70-line branches, which made the rules untestable without a DOM and easy to
 * let drift apart. Keeping them here means the page only translates pointer
 * events into intents and applies the outcome — it decides nothing.
 */
export class DragOrchestrationService {
  /**
   * Classify a dnd-kit draggable id into the gesture it represents.
   */
  static classify(activeId: string): DragKind {
    if (activeId.startsWith('resize-left-')) return 'resize-left';
    if (activeId.startsWith('resize-right-')) return 'resize-right';
    return 'move';
  }

  /**
   * Resolve a gesture into an outcome the caller can apply verbatim.
   */
  static resolve(kind: DragKind, intent: DragIntent, context: DragContext): DragOutcome {
    switch (kind) {
      case 'resize-left':
        return this.resolveResizeLeft(intent, context);
      case 'resize-right':
        return this.resolveResizeRight(intent, context);
      case 'move':
        return this.resolveMove(intent, context);
    }
  }

  private static slotDelta(deltaX: number, config: TimelineConfig): number {
    return Math.round(deltaX / config.slotWidth);
  }

  private static resolveResizeLeft(intent: DragIntent, context: DragContext): DragOutcome {
    const { reservation, deltaX } = intent;
    const { config } = context;

    const originalStart = isoToSlotIndex(reservation.startTime, config);
    const originalEnd = isoToSlotIndex(reservation.endTime, config);
    const newStart = Math.max(0, originalStart + this.slotDelta(deltaX, config));

    if (newStart === originalStart) return { status: 'noop', reason: 'start unchanged' };
    if (newStart >= originalEnd) return { status: 'rejected', reason: 'start would pass end' };
    if (originalEnd > getSlotsPerDay(config)) {
      return { status: 'rejected', reason: 'end is outside the grid' };
    }
    if (originalEnd - newStart < MIN_DURATION_SLOTS) {
      return { status: 'rejected', reason: 'below minimum duration' };
    }

    return this.validated(
      { startTime: slotToIso(newStart, config), endTime: reservation.endTime },
      intent,
      context,
      'resize'
    );
  }

  private static resolveResizeRight(intent: DragIntent, context: DragContext): DragOutcome {
    const { reservation, deltaX } = intent;
    const { config } = context;

    const originalStart = isoToSlotIndex(reservation.startTime, config);
    const originalEnd = isoToSlotIndex(reservation.endTime, config);
    const newEnd = Math.max(originalStart + 1, originalEnd + this.slotDelta(deltaX, config));

    if (newEnd === originalEnd) return { status: 'noop', reason: 'end unchanged' };
    if (newEnd <= originalStart) return { status: 'rejected', reason: 'end would pass start' };
    if (newEnd > getSlotsPerDay(config)) return { status: 'rejected', reason: 'end is outside the grid' };
    if (newEnd - originalStart < MIN_DURATION_SLOTS) {
      return { status: 'rejected', reason: 'below minimum duration' };
    }

    return this.validated(
      { startTime: reservation.startTime, endTime: slotToIso(newEnd, config) },
      intent,
      context,
      'resize'
    );
  }

  private static resolveMove(intent: DragIntent, context: DragContext): DragOutcome {
    const { reservation, deltaX, targetTableId } = intent;
    const { config } = context;

    if (!targetTableId) return { status: 'rejected', reason: 'no drop target' };

    const originalStart = isoToSlotIndex(reservation.startTime, config);
    const originalEnd = isoToSlotIndex(reservation.endTime, config);
    const duration = originalEnd - originalStart;

    const newStart = Math.max(0, originalStart + this.slotDelta(deltaX, config));
    const newEnd = newStart + duration;

    if (newStart === originalStart && targetTableId === reservation.tableId) {
      return { status: 'noop', reason: 'position unchanged' };
    }

    const totalSlots = getSlotsPerDay(config);
    if (newStart >= totalSlots || newEnd > totalSlots) {
      return { status: 'rejected', reason: 'outside the grid' };
    }

    return this.validated(
      {
        tableId: targetTableId,
        startTime: slotToIso(newStart, config),
        endTime: slotToIso(newEnd, config),
      },
      intent,
      context,
      'move'
    );
  }

  /**
   * Run a candidate change through the existing validation service. Keeping the
   * rules in one place means drag, resize and the drawer all agree.
   */
  private static validated(
    patch: Partial<Reservation>,
    intent: DragIntent,
    context: DragContext,
    verb: 'move' | 'resize'
  ): DragOutcome {
    const candidate: Reservation = { ...intent.reservation, ...patch };

    const validation = ReservationValidationService.validateReservation(candidate, {
      restaurantConfig: context.restaurantConfig,
      tables: context.tables,
      existingReservations: context.otherReservations.filter(r => r.id !== intent.reservation.id),
      timezone: context.config.timezone,
    });

    if (!validation.isValid) {
      return {
        status: 'invalid',
        reason: validation.errors[0],
        message: `Cannot ${verb} reservation. ${validation.errors[0]}`,
      };
    }

    return { status: 'applied', patch };
  }

  /**
   * Would this candidate placement be accepted? Used for live feedback while a
   * drag is still in flight, where we only need a yes/no and no message.
   */
  static isPlacementValid(
    kind: DragKind,
    intent: DragIntent,
    context: DragContext
  ): boolean {
    const outcome = this.resolve(kind, intent, context);
    return outcome.status === 'applied' || outcome.status === 'noop';
  }
}

export default DragOrchestrationService;
