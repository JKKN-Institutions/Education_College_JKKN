# CLAUDE.md — JKKN College of Education Website

> Project-specific instructions for Claude Code. Auto-loaded every session.

---

## Project Overview

Multi-tenant college website + admin CMS for **JKKN College of Education**. Same Next.js codebase can serve multiple JKKN colleges by switching env vars. Deployed on **Vercel**.

- **URL:** https://edu.jkkn.ac.in/
- **College ID:** `education`
- **Brand Color:** `#006837` (JKKN green)

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.1.5 |
| Language | TypeScript (strict) | 5.7 |
| Styling | Tailwind CSS + tailwindcss-animate | 3.4 |
| UI Components | shadcn/ui (new-york style) + Radix UI | — |
| Icons | Lucide React | — |
| Animations | Framer Motion | 12 |
| Database + Auth | Supabase (PostgreSQL + Supabase Auth via @supabase/ssr) | — |
| Rich Text Editor | TipTap | 3.x |
| State Management | Zustand + React Context | Zustand 5 |
| Toasts | react-hot-toast | — |
| Fonts | Google Fonts — Poppins (300/400/500/600/700) | — |
| Deployment | Vercel | — |

---

## Commands

```bash
npm run dev      # Start dev server (ipv4first DNS fix applied)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint via next lint
```

No test runner configured.

---

## Architecture

### Multi-Tenant Design

- All Supabase queries are scoped by `college_id`
- `NEXT_PUBLIC_COLLEGE_ID` env var sets the active college (default: `'education'`)
- Super admins can switch colleges via `admin_college_id` cookie
- `lib/get-admin-college.ts` → `getAdminCollegeId()` resolves which college to query

### Server vs Client Components

- **Server Components by default** — all pages and layouts are async Server Components
- **Client Components (`'use client'`)** only where interactivity is needed:
  - Forms (`*Form.tsx`), delete buttons (`Delete*Button.tsx`)
  - Header, AdminSidebar, TipTap editor, BottomNav
  - Table/list views that need sorting/filtering (`*Client.tsx`, `*TableClient.tsx`)

### Data Fetching

- Direct Supabase queries in Server Components (no API routes for reads)
- ISR on homepage: `export const revalidate = 60`
- Admin uses Server Component data fetch → passes props to Client Component forms

### Auth & Middleware

- `middleware.ts` — Edge middleware protecting `/admin/*` routes
- Reads Supabase auth cookie directly (no network round-trip)
- Handles base64url decoded chunked cookies from @supabase/ssr v0.5+
- Roles from `staff_profiles` table: `super_admin`, `seo`, regular admin

---

## Directory Structure

```
app/
├── layout.tsx              # Root layout (Poppins font, CSS vars)
├── page.tsx                # Homepage (ISR revalidate=60)
├── globals.css             # Tailwind directives + global styles
├── about/                  # vision-mission, trust, management, etc.
├── blog/                   # [slug]/ dynamic + static blog routes
├── departments/            # 14 B.Ed subject pages
├── events/                 # [slug]/
├── facilities/             # 11 facility pages
├── gallery/                # [albumId]/
├── notices/                # Notices listing
├── contact/                # Contact page
├── others/                 # biometric-list, balance-sheet, alumni, careers
├── admin/                  # Full CMS (protected by middleware)
│   ├── layout.tsx          # Admin layout (reads Supabase session)
│   ├── AdminSidebar.tsx    # Client — sidebar with college switcher
│   ├── AdminCollegeContext.tsx  # React Context for active college
│   ├── dashboard/          # Stats overview
│   ├── blogs/              # CRUD + TipTap editor + categories
│   ├── events/             # CRUD
│   ├── gallery/            # Albums + photo upload
│   ├── notices/            # CRUD (exam/academic/holiday/general)
│   ├── faculty/            # CRUD with photo upload
│   ├── colleges/           # Super admin only
│   └── login/              # Auth login page
└── api/
    ├── admin/switch-college/   # POST: set college cookie
    └── auth/login/             # Auth route

components/
├── Header.tsx              # Desktop nav + dropdowns (Client)
├── Footer.tsx              # Institution links + map (Server)
├── LayoutWrapper.tsx       # Header padding + BottomNav wrapper (Client)
├── AnnouncementBar.tsx     # Scrolling notice ticker (Client)
├── BottomNav/              # Mobile bottom navigation
├── ScrollToTop.tsx         # Floating scroll button
└── ui/                     # shadcn/ui: accordion, scroll-area, sheet

lib/
├── site-config.ts          # Central config (all env-var driven)
├── get-admin-college.ts    # Resolve active college ID
├── sidebarMenuLink.ts      # Navigation menu structure
├── utils.ts                # cn() helper (clsx + tailwind-merge)
├── supabase/
│   ├── client.ts           # createBrowserClient (client-side)
│   └── server.ts           # createServerClient (server-side, cookies)
└── auth/
    └── auth-service.ts     # Placeholder AuthService (not used)

hooks/
├── use-mobile.tsx          # isMobile detection
└── use-bottom-nav.ts       # BottomNav visibility

types/
└── auth.ts                 # CustomRole, UserProfile interfaces
```

---

## Database Tables (Supabase)

| Table | Key Fields | Notes |
|-------|-----------|-------|
| `blogs` | id, title, slug, category, author_name, is_published, college_id | Rich text via TipTap |
| `blog_categories` | id, name, slug, is_active, college_id | Per-college categories |
| `events` | id, title, event_date, event_time, venue, is_published, college_id | — |
| `gallery_albums` | id, name, description, cover_image_url, college_id | — |
| `gallery_images` | id, album_id, college_id | — |
| `notices` | id, title, notice_type, is_active, expires_at, college_id | Types: exam/academic/holiday/general |
| `faculty` | id, name, designation, department, qualification, experience_years, photo_url, college_id | — |
| `staff_profiles` | id, role | Auth roles |
| `colleges` | id, name, is_active | Multi-tenant registry |

**All content tables use `college_id` for multi-tenant isolation.**

---

## Key Configuration

### `lib/site-config.ts`

Central config — every value reads from `NEXT_PUBLIC_*` env vars with defaults for Education college. Change env vars to deploy as a different JKKN college.

Key env vars:
- `NEXT_PUBLIC_COLLEGE_ID` — `'education'`
- `NEXT_PUBLIC_COLLEGE_NAME` — `'JKKN College of Education'`
- `NEXT_PUBLIC_PRIMARY_COLOR` — `#006837`
- `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### `tailwind.config.ts`

- Brand colors via CSS variables (`var(--color-primary)`, etc.)
- Responsive font sizes using `clamp()` (8 sizes: responsive-xs to responsive-4xl)
- Custom breakpoints: `xs: 375px`, `3xl: 1920px`, `4xl: 2560px`
- shadcn/ui HSL color system

### Path Alias

`@/*` maps to project root (`./`) — use `@/components/...`, `@/lib/...`, etc.

---

## Coding Conventions

### Component Patterns

- **Admin forms:** Separate `*Form.tsx` Client Components, co-located with route
- **Delete actions:** Separate `Delete*Button.tsx` Client Components
- **List views:** Server Component fetches data → passes to `*Client.tsx` or `*TableClient.tsx`
- **New shadcn/ui components:** Use `npx shadcn@latest add <component>`

### Naming

- Files: kebab-case for routes, PascalCase for components
- Admin routes: `/admin/{resource}/` (list), `/admin/{resource}/new/` (create), `/admin/{resource}/[id]/edit/` (edit)

### Styling

- Tailwind utility classes — no CSS modules
- Brand colors: use `text-primary`, `bg-primary`, or CSS vars from `site-config.ts`
- `cn()` from `@/lib/utils` for conditional classes
- Responsive: mobile-first, use `sm:`, `md:`, `lg:`, `xl:` breakpoints

### Supabase Queries

- Server Components: use `createServerClient()` from `@/lib/supabase/server`
- Client Components: use `createBrowserClient()` from `@/lib/supabase/client`
- Always filter by `college_id` — use `getAdminCollegeId()` in admin routes
- Handle errors: check `error` from Supabase response before using `data`

### Imports

- Use `@/` path alias for all imports
- Prefer named exports for utilities, default exports for page components

---

## High-Risk Files (Do Not Edit Casually)

| File | Risk | Why |
|------|------|-----|
| `middleware.ts` | HIGH | Breaks ALL admin auth if changed incorrectly |
| `app/layout.tsx` | HIGH | Root layout — affects every page |
| `globals.css` | HIGH | Global styles — affects entire site |
| `tailwind.config.ts` | HIGH | Changes affect all Tailwind classes |
| `lib/site-config.ts` | HIGH | Central config — all pages read from this |
| `lib/supabase/server.ts` | HIGH | All server-side DB access depends on this |
| `components/Header.tsx` | MEDIUM | Used on every public page |
| `components/Footer.tsx` | MEDIUM | Used on every public page |
| `components/LayoutWrapper.tsx` | MEDIUM | Wraps all public pages |

**Before editing any of these:** grep for all usages, understand blast radius, test all affected pages.

---

## Bug Fix Rules (MANDATORY)

1. **Surgical fixes only** — Change the minimum lines needed to fix the issue. No refactoring, no "improvements", no cleanup of surrounding code
2. **No shared class/component modifications** — If a CSS class or component is used in 3+ places, NEVER modify it directly. Create a new variant or override instead
3. **Before editing any file, grep for all usages** — Run `Grep` to check where the component/class/function is used BEFORE changing it. Understand the blast radius first
4. **No layout changes during bug fixes** — padding, margin, flex, grid changes are HIGH RISK. After any layout edit, verify all breakpoints: mobile (320px), tablet (768px), desktop (1024px+)
5. **One fix = one commit** — Never bundle multiple fixes in a single commit. If fix A breaks something, it must be easy to revert without losing fix B
6. **Test adjacent pages** — After fixing page X, check pages Y and Z that share the same component or layout
7. **No global file edits during fixes** — `globals.css`, `tailwind.config.ts`, `layout.tsx` changes are FORBIDDEN during bug fixes unless the bug is specifically in those files
8. **Show impact before editing** — Before making any change, list: (a) files to be modified, (b) components affected, (c) pages that use those components
9. **Preserve responsive behavior** — Never remove or modify responsive classes (`sm:`, `md:`, `lg:`, `xl:`) without checking all breakpoints
10. **No dependency changes during fixes** — Do not add, remove, or update packages while fixing a bug

### High-Risk Danger Zones

| Risk Area | Why Dangerous | Rule |
|-----------|--------------|------|
| Shared components (Header, Footer, Layout) | Used on EVERY page | Grep all usages first, test all pages after |
| `globals.css` | Affects entire site | Never edit during bug fix |
| `tailwind.config.ts` | Affects all Tailwind classes | Never edit during bug fix |
| `layout.tsx` files | Affects all child routes | Full child page verification required |
| Responsive classes | Breaking one breakpoint breaks mobile/tablet | Check 320px, 640px, 768px, 1024px, 1280px |
| Framer Motion animations | Complex state interactions | Test enter/exit/hover states after changes |
| z-index changes | Can hide/overlap other elements | Check all overlapping sections |

---

## Git Workflow

- **Main branch:** `main`
- **Remote:** `origin` (Vercel auto-deploys from `main`)
- **Commit style:** Descriptive, lowercase (e.g., "fix TipTap editor content type error")
- **No test suite** — verify changes with `npm run build` before committing
