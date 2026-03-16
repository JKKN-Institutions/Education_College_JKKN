import { redirect } from 'next/navigation';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  'Alumni',
  'JKKN College of Education alumni network — connecting graduates making an impact in teaching and education across Tamil Nadu.',
  '/others/alumni'
);

export default function Alumni() {
  redirect('https://alumni.jkkn.ac.in/login');
}
