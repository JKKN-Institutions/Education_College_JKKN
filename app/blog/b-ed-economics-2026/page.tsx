import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { economicsBlogData } from '@/app/blog/_data/courses/economics';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  economicsBlogData.title,
  economicsBlogData.metaDescription,
  `/blog/${economicsBlogData.slug}`,
  { keywords: economicsBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={economicsBlogData} />;
}
