'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { TOUR_STEPS } from '@/lib/tourSteps';

interface GuidedTourProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

const CARD_WIDTH = 340;
const GAP = 14;
const PADDING = 8;

/**
 * First-run walkthrough of the timeline.
 *
 * Steps point at the real UI rather than at screenshots, so the explanation and
 * the thing being explained can never drift apart. The overlay swallows clicks
 * while it is up: the tour is a guided read, not a sandbox, and letting people
 * drag a booking mid-step would leave the spotlight pointing at nothing.
 */
export default function GuidedTour({ isOpen, onClose }: GuidedTourProps) {
  const [index, setIndex] = useState(0);
  const [anchorRect, setAnchorRect] = useState<Rect | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const step = TOUR_STEPS[index];
  const isFirst = index === 0;
  const isLast = index === TOUR_STEPS.length - 1;

  const close = useCallback(() => {
    setIndex(0);
    onClose();
  }, [onClose]);

  const next = useCallback(() => {
    setIndex((i) => (i >= TOUR_STEPS.length - 1 ? i : i + 1));
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? i : i - 1));
  }, []);

  // Restart from the top whenever the tour is reopened.
  useEffect(() => {
    if (isOpen) setIndex(0);
  }, [isOpen]);

  // Measure the current anchor. useLayoutEffect so the card never paints at a
  // stale position for a frame.
  useLayoutEffect(() => {
    if (!isOpen) return;

    const measure = () => {
      if (!step?.anchor) {
        setAnchorRect(null);
        return;
      }

      const element = document.querySelector(step.anchor);
      if (!element) {
        // A step whose anchor is missing (an empty day has no blocks) degrades
        // to a centred card instead of pointing at nothing.
        setAnchorRect(null);
        return;
      }

      // Centre horizontally: a spotlighted booking that lands hard against the
      // right edge of the grid reads as clipped rather than highlighted.
      element.scrollIntoView({ block: 'nearest', inline: 'center' });
      const box = element.getBoundingClientRect();
      setAnchorRect({ top: box.top, left: box.left, width: box.width, height: box.height });
    };

    measure();

    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure, true);
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure, true);
    };
  }, [isOpen, step]);

  // Keyboard: arrows and Enter advance, Escape leaves.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
      } else if (event.key === 'ArrowRight' || event.key === 'Enter') {
        event.preventDefault();
        if (isLast) close();
        else next();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prev();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, isLast, next, prev, close]);

  // Move focus into the card so screen readers announce each step.
  useEffect(() => {
    if (isOpen) cardRef.current?.focus();
  }, [isOpen, index]);

  if (!isOpen || !step) return null;

  const spotlight = anchorRect
    ? {
        top: anchorRect.top - PADDING,
        left: anchorRect.left - PADDING,
        width: anchorRect.width + PADDING * 2,
        height: anchorRect.height + PADDING * 2,
      }
    : null;

  // Place the card beside the anchor, flipping to the opposite side when it
  // would run off screen.
  const cardStyle: React.CSSProperties = (() => {
    if (!spotlight) {
      return { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const placement = step.placement ?? 'bottom';

    let top: number;
    let left: number;

    if (placement === 'right' || placement === 'left') {
      const preferRight = placement === 'right';
      const fitsRight = spotlight.left + spotlight.width + GAP + CARD_WIDTH < viewportWidth;
      const useRight = preferRight ? fitsRight : spotlight.left - GAP - CARD_WIDTH < 0;

      left = useRight ? spotlight.left + spotlight.width + GAP : spotlight.left - GAP - CARD_WIDTH;
      top = spotlight.top;
    } else {
      const preferBottom = placement === 'bottom';
      const fitsBelow = spotlight.top + spotlight.height + GAP + 210 < viewportHeight;
      const useBottom = preferBottom ? fitsBelow : spotlight.top - GAP - 210 < 0;

      top = useBottom ? spotlight.top + spotlight.height + GAP : spotlight.top - GAP - 210;
      left = spotlight.left;
    }

    // Keep the card fully on screen.
    left = Math.max(16, Math.min(left, viewportWidth - CARD_WIDTH - 16));
    top = Math.max(16, Math.min(top, viewportHeight - 226));

    return { top, left };
  })();

  return (
    /* z-[9999] clears everything the timeline stacks, including the z-[999]
       mask that hides the time labels behind the sticky column. */
    <div
      className="fixed inset-0 z-[9999]"
      data-testid="guided-tour"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guided-tour-title"
    >
      {/* Dimmer. A single element with a huge spread cuts the spotlight hole
          without needing an SVG mask. */}
      {spotlight ? (
        <div
          className="pointer-events-auto absolute rounded-md ring-2 ring-indigo-400"
          style={{
            top: spotlight.top,
            left: spotlight.left,
            width: spotlight.width,
            height: spotlight.height,
            boxShadow: '0 0 0 9999px rgba(3, 7, 18, 0.72)',
          }}
          onClick={close}
        />
      ) : (
        <div className="pointer-events-auto absolute inset-0 bg-gray-950/75" onClick={close} />
      )}

      <div
        ref={cardRef}
        tabIndex={-1}
        style={{ ...cardStyle, width: CARD_WIDTH }}
        className="pointer-events-auto absolute rounded-lg border border-white/10 bg-gray-800 p-5 shadow-2xl outline-none"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-indigo-300">
            Step {index + 1} of {TOUR_STEPS.length}
          </span>
          <button
            onClick={close}
            aria-label="Close the tour"
            className="-mr-1 -mt-1 rounded p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        </div>

        <h2 id="guided-tour-title" className="mt-2 text-sm font-semibold text-white">
          {step.title}
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-gray-300">{step.body}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {TOUR_STEPS.map((s, i) => (
              <span
                key={s.id}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-4 bg-indigo-400' : 'w-1.5 bg-gray-600'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            {!isFirst && (
              <button
                onClick={prev}
                className="rounded-md px-2.5 py-1.5 text-xs text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                Back
              </button>
            )}
            <button
              onClick={isLast ? close : next}
              data-testid="guided-tour-next"
              className="rounded-md bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-400"
            >
              {isLast ? 'Start exploring' : 'Next'}
            </button>
          </div>
        </div>

        {isFirst && (
          <button
            onClick={close}
            className="mt-3 text-[11px] text-gray-500 underline underline-offset-2 transition-colors hover:text-gray-300"
          >
            Skip — I&apos;ll find my way
          </button>
        )}
      </div>
    </div>
  );
}
