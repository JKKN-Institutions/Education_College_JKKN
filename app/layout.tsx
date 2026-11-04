import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { ConversionTracking } from "@/components/analytics/ConversionTracking";
import { siteConfig } from "@/lib/site-config";

// ANALYTICS_OFF=1 at build time is for a LOCAL test build only (the 2026-11-04 test of the Call /
// WhatsApp gate runs `next start` on this laptop). Vercel never sets it.
const IS_PRODUCTION_BUILD =
  process.env.NODE_ENV === 'production' && process.env.ANALYTICS_OFF !== '1';

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#006837',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://edu.jkkn.ac.in'),
  // iPhone Safari turns any phone number in plain text into a dial link of its own, which skipped
  // the Call / WhatsApp form gate (2026-11-04, same as the Dental site: those taps must also go
  // form -> dialer). Off here; EnquiryModal's plain-number tap listener takes those taps instead.
  formatDetection: { telephone: false },
  title: {
    default: 'JKKN College of Education — B.Ed College in Namakkal',
    template: '%s | JKKN College of Education',
  },
  description:
    'JKKN College of Education offers NCTE-approved, TNTEU-affiliated 2-year B.Ed programme with 10 teaching subjects in Namakkal, Tamil Nadu.',
  keywords: [
    'B.Ed college Namakkal',
    'B.Ed college Tamil Nadu',
    'JKKN College of Education',
    'NCTE approved B.Ed college',
    'TNTEU affiliated college',
    'Bachelor of Education Tamil Nadu',
    'B.Ed admission 2026',
    'teacher training college Namakkal',
  ],
  icons: {
    icon: siteConfig.logoPath,
  },
  alternates: {
    canonical: 'https://edu.jkkn.ac.in',
    languages: {
      'en-IN': 'https://edu.jkkn.ac.in',
      'x-default': 'https://edu.jkkn.ac.in',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'JKKN College of Education',
    title: 'JKKN College of Education — B.Ed College in Namakkal',
    description:
      'NCTE-approved, TNTEU-affiliated 2-year B.Ed programme with 10 teaching subjects in Namakkal, Tamil Nadu.',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'JKKN College of Education Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jkknedu',
    title: 'JKKN College of Education — B.Ed College in Namakkal',
    description:
      'NCTE-approved, TNTEU-affiliated 2-year B.Ed programme with 10 teaching subjects in Namakkal, Tamil Nadu.',
    images: ['/images/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className} suppressHydrationWarning>
        <ConversionTracking />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
      {/* GA4 loads only in a real production build (2026-11-04): a local test - the Call /
          WhatsApp gate test included - must not write test taps into the live GA4 property.
          Vercel production and preview builds are unaffected. */}
      {IS_PRODUCTION_BUILD && gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
