import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { socialScienceBlogData } from '@/app/blog/_data/courses/social-science';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  socialScienceBlogData.title,
  socialScienceBlogData.metaDescription,
  `/blog/${socialScienceBlogData.slug}`,
  { keywords: socialScienceBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={socialScienceBlogData} />;
}
