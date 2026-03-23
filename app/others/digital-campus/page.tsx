import { redirect } from 'next/navigation';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  'Digital Campus',
  'JKKN College of Education digital campus — technology-enabled learning environment for B.Ed students.',
  '/others/digital-campus',
  { robots: { index: false, follow: false } }
);

export default function DigitalCampus() {
  redirect('https://jkkn.ac.in/digital-campus');
}
