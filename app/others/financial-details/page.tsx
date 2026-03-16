import { redirect } from 'next/navigation';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  'Financial Details',
  'Financial details and fee structure information of JKKN College of Education, Namakkal.',
  '/others/financial-details'
);

export default function FinancialDetails() {
  redirect('/pdf/financial-details.pdf');
}
