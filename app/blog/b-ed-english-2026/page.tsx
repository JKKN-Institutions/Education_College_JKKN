import CourseBlogTemplate from '@/app/blog/_components/CourseBlogTemplate';
import { englishBlogData } from '@/app/blog/_data/courses/english';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  englishBlogData.title,
  englishBlogData.metaDescription,
  `/blog/${englishBlogData.slug}`,
  { keywords: englishBlogData.keywords, absolute: true },
);

export default function Page() {
  return <CourseBlogTemplate data={englishBlogData} />;
}
