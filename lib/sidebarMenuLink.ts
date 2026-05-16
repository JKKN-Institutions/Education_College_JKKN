import {
  Home,
  Info,
  GraduationCap,
  Image,
  Building,
  MoreHorizontal,
  Phone,
  ClipboardCheck,
  Rss,
  LucideIcon
} from 'lucide-react';

interface MenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  submenus: Array<{ href: string; label: string; active: boolean }>;
}

interface MenuGroup {
  groupLabel: string;
  menus: MenuItem[];
}

export function GetRoleBasedPages(
  pathname: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  userRole?: unknown
): MenuGroup[] {
  return [
    {
      groupLabel: 'Home',
      menus: [
        {
          href: '/',
          label: 'Home',
          icon: Home,
          active: pathname === '/',
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'About',
      menus: [
        {
          href: '/about',
          label: 'About',
          icon: Info,
          active: pathname.startsWith('/about'),
          submenus: [
            { href: '/about/vision-mission', label: 'Our Vision And Mission', active: pathname === '/about/vision-mission' },
            { href: '/about/trust', label: 'Our Trust', active: pathname === '/about/trust' },
            { href: '/about/management', label: 'Our Management', active: pathname === '/about/management' },
            { href: '/about/institutions', label: 'Our Institutions', active: pathname === '/about/institutions' },
            { href: '/about/principal-message', label: "Principal's Message", active: pathname === '/about/principal-message' },
            { href: '/about/ncte-approval', label: 'NCTE Approval', active: pathname === '/about/ncte-approval' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Departments',
      menus: [
        {
          href: '/departments',
          label: 'Departments',
          icon: GraduationCap,
          active: pathname.startsWith('/departments'),
          submenus: [
            { href: '/departments/tamil', label: 'B.Ed Tamil', active: pathname === '/departments/tamil' },
            { href: '/departments/english', label: 'B.Ed English', active: pathname === '/departments/english' },
            { href: '/departments/zoology', label: 'B.Ed Zoology', active: pathname === '/departments/zoology' },
            { href: '/departments/maths', label: 'B.Ed Maths', active: pathname === '/departments/maths' },
            { href: '/departments/chemistry', label: 'B.Ed Chemistry', active: pathname === '/departments/chemistry' },
            { href: '/departments/computer-science', label: 'B.Ed Computer Science', active: pathname === '/departments/computer-science' },
            { href: '/departments/commerce', label: 'B.Ed Commerce', active: pathname === '/departments/commerce' },
            { href: '/departments/physics', label: 'B.Ed Physics', active: pathname === '/departments/physics' },
            { href: '/departments/botany', label: 'B.Ed Botany', active: pathname === '/departments/botany' },
            { href: '/departments/history', label: 'B.Ed History', active: pathname === '/departments/history' },
            { href: '/departments/economics', label: 'B.Ed Economics', active: pathname === '/departments/economics' },
            { href: '/departments/political-science', label: 'B.Ed Political Science', active: pathname === '/departments/political-science' },
            { href: '/departments/social-science', label: 'B.Ed Social Science', active: pathname === '/departments/social-science' },
            { href: '/departments/microbiology', label: 'B.Ed Microbiology', active: pathname === '/departments/microbiology' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Admissions',
      menus: [
        {
          href: '/admissions',
          label: 'Admissions',
          icon: ClipboardCheck,
          active: pathname === '/admissions',
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Gallery',
      menus: [
        {
          href: '/gallery',
          label: 'Gallery',
          icon: Image,
          active: pathname === '/gallery',
          submenus: []
        }
      ]
    },
    {
      groupLabel: 'Facilities',
      menus: [
        {
          href: '/facilities',
          label: 'Facilities',
          icon: Building,
          active: pathname.startsWith('/facilities'),
          submenus: [
            { href: '/facilities/library', label: 'Library', active: pathname === '/facilities/library' },
            { href: '/facilities/hostel', label: 'Hostel', active: pathname === '/facilities/hostel' },
            { href: '/facilities/class-room', label: 'Class Room', active: pathname === '/facilities/class-room' },
            { href: '/facilities/auditorium', label: 'Auditorium', active: pathname === '/facilities/auditorium' },
            { href: '/facilities/transport', label: 'Transport', active: pathname === '/facilities/transport' },
            { href: '/facilities/wifi', label: 'WIFI', active: pathname === '/facilities/wifi' },
            { href: '/facilities/ambulance-services', label: 'Ambulance Services', active: pathname === '/facilities/ambulance-services' },
            { href: '/facilities/food-court', label: 'Food Court', active: pathname === '/facilities/food-court' },
            { href: '/facilities/bank-post-office', label: 'Bank & Post Office', active: pathname === '/facilities/bank-post-office' },
            { href: '/facilities/hospital', label: 'Hospital', active: pathname === '/facilities/hospital' },
            { href: '/facilities/seminar-hall', label: 'Seminar Hall', active: pathname === '/facilities/seminar-hall' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Others',
      menus: [
        {
          href: '/others',
          label: 'Others',
          icon: MoreHorizontal,
          active: pathname.startsWith('/others'),
          submenus: [
            { href: '/others/biomatric-list', label: 'BIOMATRIC LIST', active: pathname === '/others/biomatric-list' },
            { href: '/others/balance-sheet', label: 'Balance Sheet', active: pathname === '/others/balance-sheet' },
            { href: '/others/financial-details', label: 'Financial details', active: pathname === '/others/financial-details' },
            { href: '/others/careers', label: 'Careers', active: pathname === '/others/careers' },
            { href: '/others/alumni', label: 'Alumni', active: pathname === '/others/alumni' },
            { href: '/others/privacy-policy', label: 'Privacy policy', active: pathname === '/others/privacy-policy' }
          ]
        }
      ]
    },
    {
      groupLabel: 'Contact',
      menus: [
        {
          href: '/contact',
          label: 'Contact',
          icon: Phone,
          active: pathname === '/contact',
          submenus: []
        }
      ]
    }
  ];
}
