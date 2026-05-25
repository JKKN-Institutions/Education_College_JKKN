import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { politicalScienceBlogData } from '@/app/blog/_data/courses/political-science';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  politicalScienceBlogData.title,
  politicalScienceBlogData.metaDescription,
  `/blog/${politicalScienceBlogData.slug}`,
  { keywords: politicalScienceBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={politicalScienceBlogData} />;
}
