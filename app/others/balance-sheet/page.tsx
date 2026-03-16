import { redirect } from 'next/navigation';
import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  'Balance Sheet',
  'Financial balance sheet of JKKN College of Education — transparency in institutional finances.',
  '/others/balance-sheet'
);

export default function BalanceSheet() {
  redirect('/pdf/Balance-Sheed.pdf');
}
