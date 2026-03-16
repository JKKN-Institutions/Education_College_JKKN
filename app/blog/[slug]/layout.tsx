import type { Metadata } from 'next';

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
