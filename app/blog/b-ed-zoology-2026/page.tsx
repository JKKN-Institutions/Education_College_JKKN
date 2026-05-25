import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { zoologyBlogData } from '@/app/blog/_data/courses/zoology';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  zoologyBlogData.title,
  zoologyBlogData.metaDescription,
  `/blog/${zoologyBlogData.slug}`,
  { keywords: zoologyBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={zoologyBlogData} />;
}
