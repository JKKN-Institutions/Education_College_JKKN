import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { mathematicsBlogData } from '@/app/blog/_data/courses/mathematics';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  mathematicsBlogData.title,
  mathematicsBlogData.metaDescription,
  `/blog/${mathematicsBlogData.slug}`,
  { keywords: mathematicsBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={mathematicsBlogData} />;
}
