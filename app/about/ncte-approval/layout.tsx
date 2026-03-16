import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  'NCTE Approval',
  'NCTE approval details for JKKN College of Education — nationally recognized teacher education institution in Namakkal, Tamil Nadu.',
  '/about/ncte-approval',
  { keywords: ['NCTE approved college', 'NCTE approval JKKN', 'teacher education college Tamil Nadu'] }
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
