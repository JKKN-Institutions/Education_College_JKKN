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
  title: siteConfig.name,
  description: `${siteConfig.name} Official Website`,
  icons: {
    icon: siteConfig.logoPath,
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
