'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { siteConfig } from '@/lib/site-config';
import {
  GraduationCap,
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  Bell,
  LogOut,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  CalendarDays,
  Users,
  Pencil,
  FolderOpen,
  MessageSquare,
  Building2,
  ChevronsUpDown,
  Check,
} from 'lucide-react';

const topNavLinks = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/events', label: 'Events', icon: CalendarDays },
  { href: '/admin/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/admin/notices', label: 'Notices', icon: Bell },
  { href: '/admin/faculty', label: 'Faculty', icon: Users },
];

const blogSubLinksFixed = [
  { href: '/admin/blogs', label: 'All Posts', icon: Pencil },
  { href: '/admin/blogs/categories', label: 'Categories', icon: FolderOpen },
  { href: '/admin/blogs/comments', label: 'Comments', icon: MessageSquare },
];

interface College { id: string; name: string }

interface AdminSidebarProps {
  userEmail: string;
  isSuperAdmin?: boolean;
  canSwitchCollege?: boolean;
  colleges?: College[];
  currentCollegeId?: string;
}

export default function AdminSidebar({
  userEmail,
  isSuperAdmin = false,
  canSwitchCollege = false,
  colleges = [],
  currentCollegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'education',
}: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collegeSwitcherOpen, setCollegeSwitcherOpen] = useState(false);
  const [switching, setSwitching] = useState(false);
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  const isBlogActive = pathname === '/admin/blogs' || pathname.startsWith('/admin/blogs/');
  const [blogOpen, setBlogOpen] = useState(isBlogActive);

  const currentCollege = colleges.find((c) => c.id === currentCollegeId);
  const currentCollegeName = currentCollege?.name ?? currentCollegeId;

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  async function switchCollege(collegeId: string) {
    if (collegeId === currentCollegeId || switching) return;
    setSwitching(true);
    setCollegeSwitcherOpen(false);
    try {
      await fetch('/api/admin/switch-college', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ college_id: collegeId }),
      });
      router.refresh();
    } finally {
      setSwitching(false);
    }
  }

  const initials = userEmail ? userEmail[0].toUpperCase() : 'A';

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm leading-tight">{siteConfig.shortName}</p>
            <p className="text-white/50 text-[11px]">
              {isSuperAdmin ? 'Super Admin' : 'Admin Panel'}
            </p>
          </div>
        </div>
      </div>

      {/* College Switcher — visible to super_admin and seo */}
      {canSwitchCollege && colleges.length > 0 && (
        <div className="px-3 pt-3 pb-2 border-b border-white/10">
          <p className="text-white/40 text-[10px] font-semibold uppercase tracking-wider px-2 mb-1.5">
            Active College
          </p>
          <div className="relative">
            <button
              onClick={() => setCollegeSwitcherOpen((o) => !o)}
              disabled={switching}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition text-left"
            >
              <Building2 size={15} className="text-white/60 flex-shrink-0" />
              <span className="text-white text-xs font-medium truncate flex-1 leading-tight">
                {switching ? 'Switching…' : currentCollegeName}
              </span>
              <ChevronsUpDown size={13} className="text-white/40 flex-shrink-0" />
            </button>

            {collegeSwitcherOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setCollegeSwitcherOpen(false)}
                />
                <div className="absolute left-0 right-0 top-full mt-1 bg-[#001a06] border border-white/10 rounded-xl shadow-xl z-20 overflow-hidden">
                  {colleges.map((col) => (
                    <button
                      key={col.id}
                      onClick={() => switchCollege(col.id)}
                      className="w-full flex items-center gap-2.5 px-3 py-2.5 text-left hover:bg-white/10 transition"
                    >
                      <span className="text-xs text-white/80 flex-1 truncate">{col.name}</span>
                      {col.id === currentCollegeId && (
                        <Check size={13} className="text-green-400 flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {topNavLinks.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/');
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active
                  ? 'bg-white text-[#006837]'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4.5 h-4.5 flex-shrink-0" size={18} />
              <span>{label}</span>
              {active && <ChevronRight className="ml-auto w-3.5 h-3.5 text-[#006837]" />}
            </Link>
          );
        })}

        {/* Blog expandable section */}
        <div>
          <button
            onClick={() => setBlogOpen((o) => !o)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isBlogActive
                ? 'bg-white/10 text-white'
                : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <FileText size={18} className="flex-shrink-0" />
            <span>Blog</span>
            {blogOpen ? (
              <ChevronDown className="ml-auto w-3.5 h-3.5" />
            ) : (
              <ChevronRight className="ml-auto w-3.5 h-3.5" />
            )}
          </button>

          {blogOpen && (
            <div className="mt-1 ml-4 pl-3 border-l border-white/10 space-y-0.5">
              {blogSubLinksFixed.map(({ href, label, icon: Icon }) => {
                const active =
                  href === '/admin/blogs'
                    ? pathname === '/admin/blogs'
                    : pathname === href || pathname.startsWith(href + '/');
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                      active
                        ? 'bg-white text-[#006837]'
                        : 'text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon size={16} className="flex-shrink-0" />
                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Colleges link — super_admin only */}
        {isSuperAdmin && (
          <Link
            href="/admin/colleges"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              pathname === '/admin/colleges' || pathname.startsWith('/admin/colleges/')
                ? 'bg-white text-[#006837]'
                : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Building2 size={18} className="flex-shrink-0" />
            <span>Colleges</span>
            {(pathname === '/admin/colleges' || pathname.startsWith('/admin/colleges/')) && (
              <ChevronRight className="ml-auto w-3.5 h-3.5 text-[#006837]" />
            )}
          </Link>
        )}
      </nav>

      {/* User + Logout */}
      <div className="px-3 pb-4 border-t border-white/10 pt-4">
        <div className="flex items-center gap-3 px-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs">{initials}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white/70 text-xs truncate">{userEmail}</p>
            {isSuperAdmin && (
              <p className="text-green-400/70 text-[10px] font-medium">Super Admin</p>
            )}
          </div>
        </div>
        <button
          onClick={() => setShowSignOutModal(true)}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:bg-red-500/20 hover:text-red-300 transition-all"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-[#006837] rounded-xl flex items-center justify-center shadow-lg"
      >
        {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`lg:hidden fixed left-0 top-0 bottom-0 w-64 bg-[#002309] z-40 transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-64 bg-[#002309] flex-col z-30">
        <SidebarContent />
      </div>

      {/* Sign out confirmation modal */}
      {showSignOutModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm">
            <h2 className="text-base font-semibold text-gray-800 mb-1">Sign out</h2>
            <p className="text-sm text-gray-500 mb-6">Are you sure you want to sign out?</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowSignOutModal(false)}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
              >
                No
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium bg-red-500 hover:bg-red-600 text-white transition"
              >
                Yes, sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
