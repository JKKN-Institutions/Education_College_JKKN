'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const BottomNavbar = dynamic(() => import('@/components/BottomNav/bottom-navbar').then(m => ({ default: m.BottomNavbar })));
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop').then(m => ({ default: m.ScrollToTop })));

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
