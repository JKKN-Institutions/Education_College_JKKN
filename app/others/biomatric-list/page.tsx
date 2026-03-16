import { redirect } from 'next/navigation';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  'Biometric List',
  'Staff biometric attendance records at JKKN College of Education, Kumarapalayam.',
  '/others/biomatric-list'
);

export default function BiomatricList() {
  redirect('/pdf/BIOMATRIC-LIST.pdf');
}
