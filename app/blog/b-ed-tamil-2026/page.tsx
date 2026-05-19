import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { tamilBlogData } from '@/app/blog/_data/courses/tamil';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  tamilBlogData.title,
  tamilBlogData.metaDescription,
  `/blog/${tamilBlogData.slug}`,
  { keywords: tamilBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={tamilBlogData} />;
}
