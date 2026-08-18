import React from 'react';
import { CalendarDaysIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { formatDateForDisplay } from '@/lib/timeUtils';

interface TimelineEmptyStateProps {
  /** The day currently on screen, which has nothing on it. */
  visibleDate: string;
  timezone: string;
  /** Nearest day that does have bookings, if any. */
  suggestedDate: string | null;
  /** True when filters are hiding what would otherwise be visible. */
  isFiltered: boolean;
  onGoToSuggestedDate: (date: string) => void;
  onClearFilters: () => void;
}

/**
 * Shown when the visible day has no reservations to draw.
 *
 * An empty grid on its own is indistinguishable from a broken one, so this
 * states which day is empty and offers the nearest day that is not. It sits
 * above the grid but stays click-through, so creating a reservation by
 * clicking an empty slot still works underneath it.
 */
export default function TimelineEmptyState({
  visibleDate,
  timezone,
  suggestedDate,
  isFiltered,
  onGoToSuggestedDate,
  onClearFilters,
}: TimelineEmptyStateProps) {
  return (
    /* z-[60] keeps the card above the table rows (z-40) and sticky headers
       (z-50); below that it renders behind the grid and cannot be clicked. */
    <div
      className="pointer-events-none absolute inset-0 z-[60] flex items-center justify-center"
      data-testid="timeline-empty-state"
      role="status"
    >
      <div className="pointer-events-auto max-w-sm rounded-lg border border-gray-200 bg-white/95 p-6 text-center shadow-lg">
        <CalendarDaysIcon className="mx-auto h-10 w-10 text-gray-400" aria-hidden="true" />

        <h2 className="mt-3 text-sm font-semibold text-gray-900">
          {isFiltered ? 'No reservations match your filters' : 'No reservations on this day'}
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          {formatDateForDisplay(visibleDate, timezone)}
          {!isFiltered && ' — click any empty slot to create one.'}
        </p>

        {isFiltered && (
          <button
            onClick={onClearFilters}
            className="mt-4 inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-gray-700"
          >
            Clear filters
          </button>
        )}

        {!isFiltered && suggestedDate && (
          <button
            onClick={() => onGoToSuggestedDate(suggestedDate)}
            data-testid="empty-state-jump"
            className="mt-4 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Go to {formatDateForDisplay(suggestedDate, timezone)}
            <ArrowRightIcon className="ml-2 h-3 w-3" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
