import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // This is the static blog page (not campus/[slug])
  // The slug here maps to a hard-coded static blog post
  // For now, generate a reasonable title from the slug
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title,
    description: `${title} — read more on the JKKN College of Education blog.`,
    alternates: { canonical: `https://edu.jkkn.ac.in/blog/${slug}` },
    openGraph: {
      title,
      description: `${title} — JKKN College of Education blog.`,
      type: 'article',
      url: `https://edu.jkkn.ac.in/blog/${slug}`,
    },
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          description: `${title} — read more on the JKKN College of Education blog.`,
          author: {
            '@type': 'Person',
            name: 'JKKN Editorial Team',
            url: 'https://edu.jkkn.ac.in/others/faculty-details',
          },
          publisher: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          mainEntityOfPage: `https://edu.jkkn.ac.in/blog/${slug}`,
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: title, href: `/blog/${slug}` },
        ]}
      />
      {children}
    </>
  );
}
