import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { historyBlogData } from '@/app/blog/_data/courses/history';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  historyBlogData.title,
  historyBlogData.metaDescription,
  `/blog/${historyBlogData.slug}`,
  { keywords: historyBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={historyBlogData} />;
}
