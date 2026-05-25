import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { botanyBlogData } from '@/app/blog/_data/courses/botany';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  botanyBlogData.title,
  botanyBlogData.metaDescription,
  `/blog/${botanyBlogData.slug}`,
  { keywords: botanyBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={botanyBlogData} />;
}
