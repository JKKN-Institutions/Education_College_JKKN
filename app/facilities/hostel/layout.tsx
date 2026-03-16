import { seoMetadata } from '@/lib/seo-metadata';

export const metadata = seoMetadata(
  'Hostel',
  'Separate boys and girls hostels at JKKN College of Education — safe, comfortable accommodation near NH-544, Kumarapalayam.',
  '/facilities/hostel',
  { keywords: ['JKKN hostel', 'college hostel Namakkal', 'B.Ed hostel facilities'] }
);

export default function HostelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
