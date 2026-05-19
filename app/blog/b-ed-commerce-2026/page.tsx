import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { commerceBlogData } from '@/app/blog/_data/courses/commerce';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  commerceBlogData.title,
  commerceBlogData.metaDescription,
  `/blog/${commerceBlogData.slug}`,
  { keywords: commerceBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={commerceBlogData} />;
}
