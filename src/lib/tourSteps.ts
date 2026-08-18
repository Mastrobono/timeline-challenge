/**
 * Content for the first-run guided tour.
 *
 * Kept out of the component so the copy can be reviewed and translated on its
 * own, and so the tour component stays purely about positioning and behaviour.
 */
export interface TourStep {
  id: string;
  /**
   * CSS selector for the element to spotlight. `null` centres the card with no
   * spotlight, for steps that frame rather than point.
   */
  anchor: string | null;
  title: string;
  body: string;
  /** Preferred side of the anchor. The tour flips it when it would overflow. */
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export const TOUR_STEPS: TourStep[] = [
  {
    id: 'intro',
    anchor: null,
    title: 'This is a reservation timeline',
    body:
      'Tables run down the left, time runs across the top in 15-minute slots. ' +
      'The data you are looking at was generated for you — there is nothing to set up. ' +
      'This takes about 30 seconds.',
  },
  {
    id: 'grid',
    anchor: '[data-tour="tables"]',
    title: 'Tables, grouped by sector',
    body:
      'Each row is a table with its seating range. Sectors — Main Dining, Terrace, ' +
      'Private Room — group them, and each header shows how many bookings it holds ' +
      'today. Click a sector header to collapse it.',
    placement: 'right',
  },
  {
    id: 'block',
    anchor: '[data-reservation-id]',
    title: 'Each block is a booking',
    body:
      'Colour is the status, and the badge is the guest priority. Drag a block to move ' +
      'it to another time or table, drag its edges to change the duration, and ' +
      'double-click to open it. If a move would collide with another booking, the block ' +
      'turns red before you let go.',
    placement: 'bottom',
  },
  {
    id: 'create',
    anchor: '[data-tour="empty-slot"]',
    title: 'Click any empty slot to book',
    body:
      'Click once to open the form at that time, or drag across empty space to set the ' +
      'duration as you go. The assistant suggests the best table for the party size and ' +
      'can find the next free slot when your first choice is taken.',
    placement: 'bottom',
  },
  {
    id: 'toolbar',
    anchor: '[data-testid="timeline-toolbar"]',
    title: 'Move around the calendar',
    body:
      'Jump to today, step one period at a time, or switch between day, 3-day, week and ' +
      'month. Zoom widens the slots when the day gets busy.',
    placement: 'bottom',
  },
  {
    id: 'filters',
    anchor: '[data-tour="filters"]',
    title: 'Narrow it down',
    body:
      'Filter by sector or status, or search a guest by name or phone. If a filter leaves ' +
      'nothing on screen, the grid says so rather than just going blank.',
    placement: 'right',
  },
  {
    id: 'scope',
    anchor: null,
    title: 'What was built, and what was not',
    body:
      'Done: the grid, drag/resize with live conflict detection, filtering, validation in ' +
      'a separate service layer, and keyboard access. Deliberately left out: a right-click ' +
      'menu, and virtual scrolling — with ten tables it does not pay for itself, and the ' +
      'README says so rather than pretending otherwise.',
  },
];
