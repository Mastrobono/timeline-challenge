import { useCallback, useEffect, useState } from 'react';

/**
 * Its own localStorage key, deliberately separate from `timeline-store`:
 * regenerating the seed should not replay the tour, and finishing the tour
 * should not touch the data.
 */
const SEEN_KEY = 'timeline-tour-seen';

/**
 * Runs the walkthrough once, on a visitor's first arrival at the timeline, and
 * exposes a way to replay it from the toolbar.
 */
export function useGuidedTour(isReady: boolean) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Wait until the grid has data, or the tour would spotlight an empty grid.
    if (!isReady) return;

    try {
      if (window.localStorage.getItem(SEEN_KEY) === 'true') return;
    } catch {
      // Private mode or blocked storage: show the tour rather than crash.
    }

    // One frame's grace so the timeline has laid out and anchors can be measured.
    const timer = window.setTimeout(() => setIsOpen(true), 350);
    return () => window.clearTimeout(timer);
  }, [isReady]);

  const close = useCallback(() => {
    setIsOpen(false);
    try {
      window.localStorage.setItem(SEEN_KEY, 'true');
    } catch {
      // Not being able to remember is not worth surfacing to the visitor.
    }
  }, []);

  const restart = useCallback(() => setIsOpen(true), []);

  return { isOpen, close, restart };
}

export const TOUR_SEEN_KEY = SEEN_KEY;
