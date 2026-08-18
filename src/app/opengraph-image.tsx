import { ImageResponse } from 'next/og';

export const alt = 'Reservation Timeline — interactive restaurant scheduling';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Social share card, generated at build time.
 *
 * Drawn rather than shipped as a binary so it stays in version control and can
 * never go stale against the copy in layout.tsx. Satori supports flexbox only,
 * so the layout deliberately avoids grid.
 */
export default function OpengraphImage() {
  // A few reservation blocks, sized and offset to read as a timeline at a glance.
  const rows: { left: number; width: number; color: string }[][] = [
    [
      { left: 0, width: 190, color: '#10b981' },
      { left: 30, width: 130, color: '#3b82f6' },
    ],
    [
      { left: 90, width: 150, color: '#f59e0b' },
      { left: 40, width: 210, color: '#10b981' },
    ],
    [
      { left: 0, width: 120, color: '#6366f1' },
      { left: 60, width: 170, color: '#10b981' },
    ],
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0b1120',
          padding: 72,
          fontFamily: 'monospace',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: 4,
              color: '#818cf8',
              textTransform: 'uppercase',
            }}
          >
            mastrobono.dev
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 76,
              fontWeight: 700,
              color: '#ffffff',
              marginTop: 18,
              lineHeight: 1.05,
            }}
          >
            Reservation Timeline
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 28,
              color: '#94a3b8',
              marginTop: 20,
              maxWidth: 900,
            }}
          >
            Drag, resize and schedule bookings across tables and sectors — with
            conflict detection built in.
          </div>
        </div>

        {/* Timeline motif */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: 'flex',
                alignItems: 'center',
                height: 54,
                marginTop: rowIndex === 0 ? 0 : 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: 128,
                  fontSize: 20,
                  color: '#64748b',
                }}
              >
                Table {rowIndex + 1}
              </div>

              <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                {row.map((block, blockIndex) => (
                  <div
                    key={blockIndex}
                    style={{
                      display: 'flex',
                      marginLeft: block.left,
                      width: block.width,
                      height: 40,
                      borderRadius: 8,
                      backgroundColor: block.color,
                    }}
                  />
                ))}
              </div>
            </div>
          ))}

          <div
            style={{
              display: 'flex',
              fontSize: 22,
              color: '#475569',
              marginTop: 30,
            }}
          >
            Next.js 15 · React 19 · TypeScript · Zustand · dnd-kit
          </div>
        </div>
      </div>
    ),
    size
  );
}
