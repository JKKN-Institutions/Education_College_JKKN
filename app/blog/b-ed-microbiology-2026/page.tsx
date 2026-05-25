import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { microbiologyBlogData } from '@/app/blog/_data/courses/microbiology';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  microbiologyBlogData.title,
  microbiologyBlogData.metaDescription,
  `/blog/${microbiologyBlogData.slug}`,
  { keywords: microbiologyBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={microbiologyBlogData} />;
}
