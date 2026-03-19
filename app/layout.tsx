import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { siteConfig } from "@/lib/site-config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://edu.jkkn.ac.in'),
  title: {
    default: 'JKKN College of Education — B.Ed College in Namakkal',
    template: '%s | JKKN College of Education',
  },
  description:
    'JKKN College of Education offers NCTE-approved, TNTEU-affiliated 2-year B.Ed programme with 14 specializations in Namakkal, Tamil Nadu.',
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
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'JKKN College of Education',
    title: 'JKKN College of Education — B.Ed College in Namakkal',
    description:
      'NCTE-approved, TNTEU-affiliated 2-year B.Ed programme with 14 specializations in Namakkal, Tamil Nadu. NAAC Accredited.',
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
    title: 'JKKN College of Education — B.Ed College in Namakkal',
    description:
      'NCTE-approved, TNTEU-affiliated 2-year B.Ed programme with 14 specializations in Namakkal, Tamil Nadu.',
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
  // Inject college brand colors as CSS custom properties so every component
  // that uses var(--color-primary) etc. picks up the right values at runtime.
  const brandStyles = `
    :root {
      --color-primary:       ${siteConfig.primaryColor};
      --color-primary-dark:  ${siteConfig.primaryDark};
      --color-primary-mid:   ${siteConfig.primaryMid};
      --color-primary-hover: ${siteConfig.primaryHover};
    }
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: brandStyles }} />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
