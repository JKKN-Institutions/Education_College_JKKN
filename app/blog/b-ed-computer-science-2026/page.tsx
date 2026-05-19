import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { computerScienceBlogData } from '@/app/blog/_data/courses/computer-science';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  computerScienceBlogData.title,
  computerScienceBlogData.metaDescription,
  `/blog/${computerScienceBlogData.slug}`,
  { keywords: computerScienceBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={computerScienceBlogData} />;
}
