import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { chemistryBlogData } from '@/app/blog/_data/courses/chemistry';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  chemistryBlogData.title,
  chemistryBlogData.metaDescription,
  `/blog/${chemistryBlogData.slug}`,
  { keywords: chemistryBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={chemistryBlogData} />;
}
