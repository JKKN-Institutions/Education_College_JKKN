import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: { absolute: "Top 10 Career Options After B.Ed 2026 | JKKN" },
  description: "Ten routes a B.Ed opens beyond the classroom — government teaching, ed-tech, curriculum design, M.Ed and school leadership.",
  alternates: { canonical: 'https://edu.jkkn.ac.in/blog/top-10-career-options-after-bed-2026' },
  openGraph: {
    title: 'Top 10 Career Options After B.Ed 2026 | JKKN College of Education',
    description: 'Complete guide to B.Ed career paths — government and private school teaching, ed-tech, counselling, and more.',
    type: 'article',
    url: 'https://edu.jkkn.ac.in/blog/top-10-career-options-after-bed-2026',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Top 10 Career Options After B.Ed in 2026',
          description: 'A comprehensive guide to career paths available after completing B.Ed in 2026 including government teaching, ed-tech, curriculum design, and more.',
          image: 'https://edu.jkkn.ac.in/images/og-default.png',
          datePublished: '2026-02-15',
          dateModified: '2026-03-19',
          author: {
            '@type': 'Organization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          publisher: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            '@id': 'https://edu.jkkn.ac.in/#organization',
            logo: { '@type': 'ImageObject', url: 'https://edu.jkkn.ac.in/images/logo.png' },
          },
          mainEntityOfPage: 'https://edu.jkkn.ac.in/blog/top-10-career-options-after-bed-2026',
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: 'Top 10 Career Options After B.Ed 2026', href: '/blog/top-10-career-options-after-bed-2026' },
        ]}
      />
      {children}
    </>
  );
}
