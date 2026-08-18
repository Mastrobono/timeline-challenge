import type { Metadata } from 'next';

// page.tsx is a client component and cannot export metadata itself.
export const metadata: Metadata = {
  title: 'Timeline',
  description:
    'Interactive reservation grid: tables by sector on the Y axis, 15-minute slots on the X axis. Drag to move, drag the edges to resize, click an empty slot to book.',
};

export default function TimelineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
