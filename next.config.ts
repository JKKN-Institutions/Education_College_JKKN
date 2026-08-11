import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ── Course-mismatch removal 2026-08-11 (DEP-45) ───────────────────────
      // JKKN College of Education runs B.Ed only — 14 subject specialisations, read live off
      // this site 2026-08-11. There is no M.Ed programme, department or admissions page.
      // The blog post at this slug was deleted from the CMS the same day. Unlike the other
      // three removals in this batch it carried NO measured GSC demand — M.Ed queries do not
      // appear in the top 100 non-brand rows for this property — so the redirect is about not
      // leaving a dead URL rather than about rescuing traffic. Target is the after-B.Ed page
      // closest in intent, verified HTTP 200 on 2026-08-11.
      { source: '/blog/campus/med-after-bed-when-is-it-worth-it', destination: '/blog/campus/government-teacher-recruitment-after-bed', permanent: true },
      { source: '/blog/campus/med-after-bed-when-is-it-worth-it/', destination: '/blog/campus/government-teacher-recruitment-after-bed', permanent: true },
    ];
  },
};

export default nextConfig;
