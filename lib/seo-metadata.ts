import type { Metadata } from 'next';

const SITE_URL = 'https://edu.jkkn.ac.in';
const SITE_NAME = 'JKKN College of Education';
const OG_IMAGE = '/images/og-default.png';

/**
 * Generate consistent metadata for a page.
 *
 * @param title   — Page title (will be appended with " | JKKN College of Education" via template)
 * @param description — Meta description (max 155 chars recommended)
 * @param path    — URL path (e.g. '/about/vision-mission')
 * @param options — Optional overrides
 */
export function seoMetadata(
  title: string,
  description: string,
  path: string,
  options?: {
    /** Use absolute title (skip the template suffix) */
    absolute?: boolean;
    /** Additional keywords */
    keywords?: string[];
    /** Custom OG image path */
    ogImage?: string;
  },
): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = options?.absolute ? title : `${title} | ${SITE_NAME}`;

  return {
    title: options?.absolute ? { absolute: title } : title,
    description,
    keywords: options?.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: options?.ogImage ?? OG_IMAGE,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}
