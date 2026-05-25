import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { physicsBlogData } from '@/app/blog/_data/courses/physics';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  physicsBlogData.title,
  physicsBlogData.metaDescription,
  `/blog/${physicsBlogData.slug}`,
  { keywords: physicsBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={physicsBlogData} />;
}
