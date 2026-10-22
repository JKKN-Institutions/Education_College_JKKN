'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { EnquiryModalProvider } from '@/components/lead/EnquiryModal';

const BottomNavbar = dynamic(() => import('@/components/BottomNav/bottom-navbar').then(m => ({ default: m.BottomNavbar })));
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop').then(m => ({ default: m.ScrollToTop })));

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  // The enquiry modal provider wraps every public page (user's choice 2026-10-22, same as Dental),
  // so the header "Enquire Now" and every jkkn.ai apply link open the same 3-box form everywhere,
  // not only on the homepage. Before, every other page fell back to the jkkn.ai link (6 boxes,
  // the college picked again). /admin stays outside it: no header and no enquiry buttons there.
  return (
    <EnquiryModalProvider>
      <div className={cn('pt-20', isMobile && 'pb-16')}>
        {children}
      </div>
      <BottomNavbar />
      <ScrollToTop />
    </EnquiryModalProvider>
  );
}
