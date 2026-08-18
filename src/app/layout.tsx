import type { Metadata, Viewport } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://woki-challenge.vercel.app";
const TITLE = "Reservation Timeline";
const DESCRIPTION =
  "An interactive restaurant reservation timeline: drag, resize and schedule bookings across tables and sectors, with conflict detection and an auto-scheduling assistant.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${TITLE} — mastrobono.dev`,
    template: `%s — ${TITLE}`,
  },
  description: DESCRIPTION,
  applicationName: TITLE,
  authors: [{ name: "Leandro Mastrobono", url: "https://mastrobono.dev" }],
  creator: "Leandro Mastrobono",
  keywords: [
    "restaurant reservations",
    "timeline",
    "scheduling",
    "drag and drop",
    "Next.js",
    "React",
    "TypeScript",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: TITLE,
    title: `${TITLE} — mastrobono.dev`,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Reservation Timeline — interactive restaurant scheduling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} — mastrobono.dev`,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#111827",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
