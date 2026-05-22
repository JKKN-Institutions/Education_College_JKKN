import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

const SLUG = 'b-ed-complete-guide-2026';
const TITLE = 'B.Ed Complete Guide 2026 — Eligibility, Curriculum, Fees & Careers';
const DESCRIPTION =
  'Comprehensive B.Ed 2026 guide from JKKN College of Education — eligibility, curriculum, TNTEU counselling, fee structure, career scope, and admission process.';
const URL = `https://edu.jkkn.ac.in/blog/${SLUG}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: URL,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: TITLE,
          datePublished: '2026-02-20',
          dateModified: '2026-04-15',
          image: 'https://edu.jkkn.ac.in/images/og-default.png',
          description: DESCRIPTION,
          author: {
            '@type': 'Person',
            name: 'JKKN Editorial Team',
            url: 'https://edu.jkkn.ac.in/others/faculty-details',
          },
          publisher: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
            logo: { '@type': 'ImageObject', url: 'https://edu.jkkn.ac.in/images/logo.png' },
          },
          mainEntityOfPage: URL,
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: 'B.Ed Complete Guide 2026', href: `/blog/${SLUG}` },
        ]}
      />
      {children}
    </>
  );
}
