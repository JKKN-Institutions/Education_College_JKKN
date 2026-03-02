'use client';

import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { BottomNavbar } from '@/components/BottomNav';
import { ScrollToTop } from '@/components/ScrollToTop';
import { cn } from '@/lib/utils';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <div className={cn('pt-20', isMobile && 'pb-16')}>
        {children}
      </div>
      <BottomNavbar />
      <ScrollToTop />
    </>
  );
}
