# Reservation Timeline (Woki Challenge)

Hey, happy landing!

To make the experience as smooth as possible, I've prepared a live demo and a welcome page that handles everything for you—no need to clone the repo or run seed scripts just to try it out.

**[➡️ Click here to open the Live Demo](https://woki-challenge.vercel.app/)**

Thank you for your time, and enjoy!

---

## Showcase

### Video Demonstration (10 min)<sup> hope it works for you </sup>



**[➡️ Click here to open the Video Walkthrough](https://youtu.be/hSTqLx7B37M)**

### Key Features Screenshots

| Home Dashboard | Interactive Timeline | AI Scheduling Assistant |
| :---: | :---: | :---: |
| <img width="1905" height="909" alt="wokihome" src="https://github.com/user-attachments/assets/3afa5816-c401-4484-b090-fde10b6aa0a2" /> | <img width="1914" height="903" alt="wokitimeline" src="https://github.com/user-attachments/assets/4f2741a4-7571-4d43-9caa-1c1abf50af09" /> | <img width="1905" height="905" alt="wokiSmart" src="https://github.com/user-attachments/assets/cc8f0967-1ceb-4ac5-8d20-6b201a6f1018" /> |
| *Central hub for data management & stats.* | *Drag, drop, and resize reservations in real-time.* | *Smart suggestions for tables and availability.* |



---


## Guiding Principles

- **Production-Focused:** This is an interactive timeline built with a real-world use case in mind.
- **Honest & Transparent:** This README accurately documents what has been implemented, what is partial, and what is intentionally omitted to set clear expectations.
- **Excellent User Experience:** The project includes a helpful Home page to onboard users, manage demo data, and seamlessly navigate to the core application.

## Key Features

- **Interactive Timeline:** Drag-to-create, move, and resize reservations with snapping.
- **Home Dashboard:** A central hub to generate seed data, import/export CSVs, and view calendar stats.
- **Auto-Scheduling Assistant:** Smart suggestions for the best table and next available time slots.
- **Comprehensive Filtering:** Filter by sector, status, and search by customer name/phone.
- **Clean Architecture:** A clear separation of state (Zustand), rendering logic (React), and business rules (services).

---

## Challenge Acceptance Criteria Checklist

This checklist provides a quick, evidence-based summary of how the project meets the challenge requirements.

- ✅ **Timeline Grid:** Implemented (time on X-axis, tables on Y-axis, collapsible sector grouping, sticky headers).
- ✅ **Reservations Display:** Implemented (correct position/size, color-coded status, detailed tooltips).
- ✅ **Create Reservation:** Implemented (drag-to-create on empty space opens a drawer with a live preview).
- ✅ **Move Reservation:** Implemented (snaps to grid, validation occurs on drop).
- ✅ **Resize Reservation:** Implemented (from left/right edges, min duration enforced, validation on drop).
- ✅ **Filtering:** Implemented (sector, status, search) with real-time updates.
- ✅ **Validation:** Implemented (capacity, operating hours, conflicts) via a dedicated service layer.
- 🟡 **Conflict Detection:** Implemented on drop. The system prevents overlaps, but there is no *live* visual warning during the drag operation.
- ❌ **Context Menu:** Not Implemented. Actions (edit, duplicate, delete) are available via hover icons for a cleaner UI.
- ❌ **Status Changes:** Not Implemented as a quick menu. Status is changed via the full edit drawer.
- 🟡 **Performance:** The app is performant for moderate data sizes. However, it has not been benchmarked for 200+ reservations and does not use virtual scrolling.

---

## Bonus Features Implemented

- ✅ **Auto-Scheduling Assistant (COMPLETE)**
  - `AutoSchedulingService.findBestTable` and `findNextAvailableSlots` are fully implemented and integrated.
  - The creation/edit drawer provides **smart table suggestions** to optimize capacity.
  - A **"Find next available"** feature searches for open slots if the desired time is full.
  - Includes experimental **VIP analysis** and smart recommendations.
  - *Note: This is intentionally integrated into the drawer for detailed planning, not the drag-and-drop flow which is designed for quick manual placements.*

- **Not Implemented Bonus Items:**
  - Waitlist Management
  - Mobile-Optimized Experience & Offline Mode
  - Advanced Reporting Suite (Print/Image Export)
  - Full Accessibility Implementation (Keyboard navigation, etc.)

---

## Stack and Choices

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** TypeScript (strict)
- **State:** Zustand
- **Drag & Drop:** @dnd-kit
- **Dates:** date-fns + date-fns-tz
- **Styling:** Tailwind CSS
- **Tests:** Vitest + Testing Library

### Why a Custom Timeline Component?

The decision to build the timeline from scratch instead of using a library like FullCalendar was a deliberate architectural choice to meet the unique requirements of this challenge:

1. **Resource-Based Axis:** Standard calendar libraries are built for `Date`/`Day` grids. This project required a `Resource` (Table) vs. `Time` grid. A custom build allowed us to create this specific data model without fighting against a library's core assumptions.
2. **Total Control Over UX and Logic:** Building from scratch provided complete control over the highly specific drag-and-drop interactions, deep integration of our custom business validation and auto-scheduling services, and pixel-perfect styling with Tailwind CSS.
3. **Avoiding External Constraints:** This approach avoids the limitations and licensing costs of the few premium libraries that offer a similar "Scheduler" view, demonstrating the ability to deliver a tailored solution without third-party dependencies.

---

## Run Locally

### Development:

```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Build:

```bash
npm run build
npm start
```

### Tests:

```bash
npm run test
# or with UI
npm run test:ui
```

---

## App Overview

### Home (`/`): An enhanced landing page for a superior user experience.

- Generates demo data programmatically on first load (dynamic seeds).
- Provides a calendar summary and quick statistics.
- Includes helpers for CSV export/import of demo data.
- Offers one-click navigation to the Timeline.

### Timeline (`/timeline`): The core scheduling UI.

- Time is on the X-axis (configurable start/end hours, 15-min slots).
- Tables are grouped by sector on the Y-axis (with collapsible sectors).
- Reservation blocks are color-coded by status and include a details tooltip.
- Supports drag-to-move and resize, plus drag on empty space to create.

---

## Architecture

### State Store (`src/store/useTimelineStore.ts`)

Zustand store with normalized entities (`reservationsById`, `tablesById`) and UI configuration.

### Timeline Rendering (`src/components/timeline/TimelineLayout.tsx`)

Computes and renders the grid, time header, sector groups, and table rows. Applies all filters.

### DnD Orchestration (`src/app/timeline/page.tsx`)

Sets up @dnd-kit sensors, handles all drag events, and orchestrates validation and state updates.

### Validation & Business Logic:

- `src/lib/reservationValidationService.ts`: Centralizes rules for capacity, duration, hours, and overlap checks.
- `src/lib/autoSchedulingService.ts`: Powers the smart suggestions for best tables and next available slots.
- `src/lib/timeUtils.ts`: Manages all conversions between slots, pixels, and ISO time strings.

### UI Components

A modular library including `ReservationBlock`, `TimeHeader`, `TableRow`, `ReservationDrawer`, `Sidebar`, etc.

---

## Core Features in Detail

### Timeline Grid Rendering

- Time header with 15-minute ticks, stronger 30-minute lines, and bold day boundaries.
- Current time indicator (red line).
- Collapsible sector grouping.
- Sticky left column (tables) and sticky top header for easy navigation.
- Native horizontal and vertical scrolling.

### Reservation Blocks

- Position and size are computed from start/end times and the current zoom level.
- Color-coded by status (see `STATUS_COLORS` in `src/lib/constants.ts`).
- Rich content: customer name, party size, priority badge, and a detailed time tooltip on hover.
- Quick actions: edit, duplicate, and delete buttons appear on hover.

### Drag & Drop

- Move reservations horizontally (time) and vertically (between tables).
- Resize from both the left and right edges.
- Drag-to-create on empty space opens the reservation drawer with pre-filled time/table and a live preview.
- All actions snap to 15-minute boundaries.

### Validation & Conflict Detection

- **Capacity:** Party size must fit within the selected table's capacity.
- **Duration:** A minimum duration of 30 minutes is enforced.
- **Operating Hours:** Reservations cannot be created or moved outside of configured hours.
- **Overlap:** Time conflicts on the same table are prevented.

All validation is handled by `ReservationValidationService` before any state is updated. Invalid operations are cancelled and a user-friendly notification is shown.

---

## Known Limitations

- **No Virtual Scrolling:** Performance may degrade with a very large number of tables (e.g., 50+).
- **Desktop-First UX:** While functional, touch/mobile gestures are not specifically optimized.
- **No Real-Time Conflict Highlighting:** Validation occurs on drop, not continuously during a drag operation.
- **No Context Menu:** Actions are handled by hover icons, not a right-click menu, to simplify the UI.

---

## Testing

### Location

Unit and integration tests are co-located with their respective modules (e.g., `src/components/timeline/__tests__/`).

### Coverage Highlights

Tests cover the rendering pipeline, filtering logic, drag/resize handlers, and the core business logic in the `autoSchedulingService` and `validationService`.

### How to run:

```bash
npm run test
npm run test:ui
```

---

## Future Improvements (Prioritized)

1. **Performance:** Implement virtual scrolling for both rows and columns to support hundreds of tables smoothly.
2. **UX:** Add live conflict highlighting during drag operations for immediate visual feedback.
3. **Efficiency:** Introduce a right-click context menu with quick status changes and keyboard shortcuts.
4. **Accessibility:** Implement full keyboard navigation, ARIA roles, and screen reader support.
5. **Mobile:** Develop a dedicated mobile layout with optimized touch gestures.

---

## Credits

Thank you for the clear and thoughtful challenge specification. I had a lot of fun building this project and was inspired to add extra features to demonstrate a complete, user-centric solution.
