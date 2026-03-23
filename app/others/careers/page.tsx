import { redirect } from 'next/navigation';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  'Careers',
  'Job openings and career opportunities at JKKN College of Education — join our faculty and staff team in Namakkal.',
  '/others/careers',
  { keywords: ['JKKN careers', 'teaching jobs Namakkal', 'college faculty jobs Tamil Nadu'], robots: { index: false, follow: false } }
);

export default function Careers() {
  redirect('https://jobs.cvviz.com/jkkn_institutions');
}
