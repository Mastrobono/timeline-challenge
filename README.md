# Reservation Timeline (WOKI Challenge)

A production-focused timeline interface to manage restaurant reservations in real-time, built with Next.js and TypeScript. This README documents exactly what this implementation delivers, what is partial, and what is intentionally left out, aligned with the challenge requirements.

## What this project is
- An interactive timeline with drag-to-create, move, and resize of reservations
- A clean separation of rendering, DnD logic, and business validation
- A practical UX with an extra Home page to manage data and navigate to the timeline

## Noteworthy callouts
- This README reflects the real code in this repository (no claims beyond what exists)
- We explicitly list missing items and known limitations to set accurate expectations

---

## Stack and Choices
- Framework: Next.js 15 (App Router) + React 19
- Language: TypeScript (strict)
- State: Zustand
- Drag & Drop: @dnd-kit
- Dates: date-fns + date-fns-tz
- Styling: Tailwind CSS
- Tests: Vitest + Testing Library

Why these?
- Next.js + TS: productive DX, good build pipeline, easy deploy on Vercel
- Zustand: minimal boilerplate, type-friendly, fast state updates
- @dnd-kit: flexible, modern drag/resize with good composability
- date-fns + tz: light, immutable, predictable formatting and timezone handling

---

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

Build:
```bash
npm run build
npm start
```

Tests:
```bash
npm run test
# or with UI
npm run test:ui
```

Deployment: Vercel (to be provided by the user)

---

## App overview
- Home (`/`): Enhanced landing for UX
  - Generates demo data programmatically on first load (dynamic seeds)
  - Calendar summary and quick stats
  - CSV export/import helpers for demo data
  - One-click navigation to the Timeline
- Timeline (`/timeline`): Core scheduling UI
  - Time on X-axis (configurable start/end hours, 15-min slots)
  - Tables grouped by sector on Y-axis (collapsible sectors)
  - Reservation blocks with color by status and details tooltip
  - Drag to move and resize; drag on empty space to create (via drawer)

---

## Architecture
- State store: `src/store/useTimelineStore.ts`
  - Normalized entities: `reservationsById`, `reservationsByTable`, `tablesById`, `sectorsById`
  - UI config: `slotWidth`, `viewMode`, `visibleDate`, collapsed sectors
  - Actions: add/update/delete reservation, UI setters, initialization
- Timeline rendering: `src/components/timeline/TimelineLayout.tsx`
  - Computes grid, time header, sector groups, and table rows
  - Applies filtering (date, timezone operating hours, sector, search, status)
  - Renders `TableRow` and `ReservationBlock` with computed dimensions
- DnD + page orchestration: `src/app/timeline/page.tsx`
  - Sets up @dnd-kit sensors and drag handlers
  - Drag-to-create opens `ReservationDrawer` with a live preview reservation
  - Move and resize update reservations after validation
  - Filtering controls via `Sidebar` + `EnhancedToolbar`
- Validation and business logic:
  - `src/lib/reservationValidationService.ts`: capacity, duration, hours, overlap checks
  - `src/lib/conflictService.ts`: occupied-slot mapping helpers (used by services/tests)
  - `src/lib/autoSchedulingService.ts`: suggestions for best tables and next available slots
  - `src/lib/bulkImportService.ts`: CSV import/export helpers
  - `src/lib/timeUtils.ts`: slot ↔ time conversions, timezone helpers
- UI components: `ReservationBlock`, `TimeHeader`, `TableRow`, `ReservationDrawer`, `EnhancedToolbar`, `Sidebar`

---

## Coordinate system (time → pixels)
- Slot granularity: 15 minutes
- Slot width: configurable (`ui.slotWidth`, default 60px)
- X position: startSlot × slotWidth
- Block width: (endSlot − startSlot) × slotWidth
- Current-time indicator: red vertical line (when within operating hours)

---

## Implemented Features (truthful)

### Timeline Grid Rendering
- Time header (15-min ticks, stronger 30-min lines, bold day boundary)
- Current time indicator (red line)
- Sector grouping with collapse/expand
- Sticky left column (tables) and sticky top header
- Horizontal and vertical scrolling (native overflow)

Limitations:
- No virtual scrolling: all visible rows render; acceptable for moderate data sizes but not optimal for 50+ tables

### Reservation Blocks
- Position/size computed from start/end times and slot width
- Color-coded by status (see `STATUS_COLORS` in `src/lib/constants.ts`)
- Content: customer name, party size, priority badge, time tooltip
- Hover actions: edit, duplicate, delete (icon buttons on hover)

Limitations:
- No right-click context menu
- No keyboard shortcuts
- No fast status change menu

### Drag & Drop
- Move reservation horizontally (time) and vertically (between tables)
- Resize from left or right edge
- Drag-to-create on empty space (opens drawer with prefilled time/table and live preview)
- Snaps to 15-minute boundaries

Limitations:
- Conflict validation happens on drop (no live conflict highlight while dragging)
- Ghost preview is visual (opacity/rings) but does not reflect conflict state in real time
- Touch interactions rely on PointerSensor; not tuned for mobile gestures

### Validation & Conflict Detection
- Capacity: party size must fit table capacity
- Duration: min 30 minutes, max enforced by UI logic and timeline bounds
- Operating hours: disallow outside configured hours
- Overlap: prevent time conflicts on the same table

Where it lives:
- Page-level handlers call `ReservationValidationService.validateReservation(...)` before committing updates. On invalid, operation is cancelled and a notification is shown.

Limitations:
- No auto-suggest alternatives on conflict in the UI (suggestions exist in services but are not surfaced contextually during drag/drop)
- No persistent visual conflict badges on blocks

### Filtering & Controls
- Sector multi-select filter
- Search by customer name/phone
- Status filter
- Zoom control (slot width)
- Collapse/expand sectors

Limitations:
- No active filter chips summary bar

### Home Page (extra UX)
- Calendar summary (monthly), quick stats, CSV export/import, and one-click navigation
- Dynamic seed generation for demo data (no separate scripts required)

---

## Bonus Features Implemented
- Auto-Scheduling Assistant (COMPLETE)
  - `AutoSchedulingService.findBestTable` and `findNextAvailableSlots` fully implemented
  - Integrated into the creation/edit drawer UI with interactive suggestions
  - Provides smart table suggestions based on party size and capacity optimization
  - "Find next available" search functionality when requested time is full
  - VIP analysis and smart recommendations
  - Note: Not integrated into drag-and-drop flow (by design - drag is for quick placement, drawer is for detailed configuration)

Not implemented bonus items:
- Waitlist management
- Mobile-optimized touch gestures and offline mode
- Advanced animations/transitions set
- Export as image/print layout/reporting suite
- Accessibility extras (keyboard navigation, screen reader flows)

---

## Acceptance Criteria – Evidence-based status
- Timeline Grid: implemented (time X, tables Y, sector grouping, sticky headers)
- Reservations Display: implemented (position/size/color/content, tooltips)
- Create (drag-to-create + modal): implemented (drawer with prefilled fields and live preview)
- Move: implemented (snap to grid, validate on drop)
- Resize: implemented (left/right, min duration enforced, validate on drop)
- Conflict Detection: implemented (overlaps prevented on drop; no live visual warning during drag)
- Context Menu: NOT implemented (hover icons only)
- Status Changes: NOT implemented as quick menu; changes via edit drawer
- Filtering: implemented (sector/status/search), updates in real time
- Performance: not benchmarked for 200+ concurrent reservations; no virtual scroll
- Validation: implemented (capacity, hours, conflicts) via service layer

---

## Known Limitations (explicit)
- No virtual scrolling → potential performance degradation with 50+ tables
- No right-click context menu or keyboard shortcuts
- No real-time conflict badges while dragging (validation occurs on drop)
- No quick status change actions on blocks
- Touch/mobile gestures not optimized; desktop-first UX
- No formal 60fps benchmark; bundle size not audited for <400KB target

---

## Important Modules and Responsibilities
- `src/app/page.tsx` (Home): demo data generation, calendar, CSV import/export, navigation
- `src/app/timeline/page.tsx` (Timeline page): DnD setup, drag handlers, validation on drop, opening drawer, filters, notifications
- `src/components/timeline/TimelineLayout.tsx`: core grid render, filtering pipeline, sector/table composition
- `src/components/timeline/ReservationBlock.tsx`: block DnD bindings, resize handles, hover actions, tooltip
- `src/components/timeline/ReservationDrawer.tsx`: create/edit with validation errors display, preview updates, and auto-scheduling UI (table suggestions, availability search, VIP analysis)
- `src/components/timeline/EnhancedToolbar.tsx`: zoom and layout controls
- `src/components/Sidebar.tsx`: filters (sector, status, search) and layout controls
- `src/store/useTimelineStore.ts`: normalized state, UI config, actions
- `src/lib/reservationValidationService.ts`: capacity/duration/hours/conflict rules
- `src/lib/autoSchedulingService.ts`: best-table and next-available-slot finder (integrated in drawer and duplication flow)
- `src/lib/bulkImportService.ts`: CSV import/export helpers
- `src/lib/timeUtils.ts`: slot/time conversions, timezone helpers
- `src/lib/conflictService.ts`: occupied slots map helpers

---

## Testing
Location:
- `src/components/timeline/__tests__/` (layout/basic/integration/drag/filtering/etc.)
- `src/lib/__tests__/` (auto-scheduling, conflict, bulk import, time utils)
- `src/store/__tests__/` (store)

Coverage highlights:
- Rendering of timeline/time header and month view
- Filtering pipeline behavior
- Drag/resize handlers and validation calls
- Auto-scheduling service behavior (unit tests)
- CSV round-trip and bulk import validations

How to run:
```bash
npm run test
npm run test:ui
```

---

## Data and Seeding
- Demo data is generated in-app using `seedGenerator` logic referenced from Home
- CSV export/import supported from Home for demo/testing
- No external seed scripts are required

---

## Deployment
- Target platform: Vercel
- No server-side persistence included; data is client-side (demo scope)

---

## Future Improvements (prioritized)
1) Virtual scrolling for table rows and horizontal cells
2) Live conflict highlighting during drag (visual collision warnings)
3) Context menu + keyboard shortcuts + quick status changes
4) Touch-optimized gestures and mobile layout
5) Performance budget and automated bundle size checks
6) Accessibility: full keyboard navigation, ARIA/live regions, reduced motion
7) Mobile app and improved touch gesture support

---

## Credits
- React, Next.js, Zustand, @dnd-kit, date-fns/date-fns-tz, TailwindCSS
- Thanks to the challenge spec for clear acceptance criteria that shaped this build