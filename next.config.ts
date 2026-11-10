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
      // ── Broken internal links (Link Guard run 2026-11-09, fixed 2026-11-10) ─────────────
      // Internal links pointed at these dead URLs. Each destination answered HTTP 200 on 2026-11-10
      // (live check). Both slash forms listed; Next's own trailing-slash 308 answers one of them first.
      { source: '/blog/bed-admission-tamil-nadu-full-process', destination: '/blog/campus/bed-admission-tamil-nadu-full-process', permanent: true },
      { source: '/blog/bed-admission-tamil-nadu-full-process/', destination: '/blog/campus/bed-admission-tamil-nadu-full-process', permanent: true },
      { source: '/blog/bed-exam-dates-and-the-academic-calendar', destination: '/blog/campus/bed-exam-dates-and-the-academic-calendar', permanent: true },
      { source: '/blog/bed-exam-dates-and-the-academic-calendar/', destination: '/blog/campus/bed-exam-dates-and-the-academic-calendar', permanent: true },
      { source: '/blog/bed-fees-what-two-years-actually-costs', destination: '/blog/campus/bed-fees-what-two-years-actually-costs', permanent: true },
      { source: '/blog/bed-fees-what-two-years-actually-costs/', destination: '/blog/campus/bed-fees-what-two-years-actually-costs', permanent: true },
      { source: '/blog/bed-for-science-graduates-and-arts-graduates', destination: '/blog/campus/bed-for-science-graduates-and-arts-graduates', permanent: true },
      { source: '/blog/bed-for-science-graduates-and-arts-graduates/', destination: '/blog/campus/bed-for-science-graduates-and-arts-graduates', permanent: true },
      { source: '/blog/bed-hostel-and-daily-life', destination: '/blog/campus/bed-hostel-and-daily-life', permanent: true },
      { source: '/blog/bed-hostel-and-daily-life/', destination: '/blog/campus/bed-hostel-and-daily-life', permanent: true },
      { source: '/blog/bed-record-work-and-reflective-journals', destination: '/blog/campus/bed-record-work-and-reflective-journals', permanent: true },
      { source: '/blog/bed-record-work-and-reflective-journals/', destination: '/blog/campus/bed-record-work-and-reflective-journals', permanent: true },
      { source: '/blog/bed-regular-or-distance', destination: '/blog/campus/bed-regular-or-distance', permanent: true },
      { source: '/blog/bed-regular-or-distance/', destination: '/blog/campus/bed-regular-or-distance', permanent: true },
      { source: '/blog/bed-teaching-practice-what-it-involves', destination: '/blog/campus/bed-teaching-practice-what-it-involves', permanent: true },
      { source: '/blog/bed-teaching-practice-what-it-involves/', destination: '/blog/campus/bed-teaching-practice-what-it-involves', permanent: true },
      { source: '/blog/bed-two-years-what-to-expect', destination: '/blog/campus/bed-two-years-what-to-expect', permanent: true },
      { source: '/blog/bed-two-years-what-to-expect/', destination: '/blog/campus/bed-two-years-what-to-expect', permanent: true },
      { source: '/blog/career-prospects-after-bed', destination: '/blog/top-10-career-options-after-bed-2026', permanent: true },
      { source: '/blog/career-prospects-after-bed/', destination: '/blog/top-10-career-options-after-bed-2026', permanent: true },
      { source: '/blog/choosing-the-school-for-your-teaching-practice', destination: '/blog/campus/choosing-the-school-for-your-teaching-practice', permanent: true },
      { source: '/blog/choosing-the-school-for-your-teaching-practice/', destination: '/blog/campus/choosing-the-school-for-your-teaching-practice', permanent: true },
      { source: '/blog/classroom-management-what-nobody-teaches-you', destination: '/blog/campus/classroom-management-what-nobody-teaches-you', permanent: true },
      { source: '/blog/classroom-management-what-nobody-teaches-you/', destination: '/blog/campus/classroom-management-what-nobody-teaches-you', permanent: true },
      { source: '/blog/government-teacher-recruitment-after-bed', destination: '/blog/campus/government-teacher-recruitment-after-bed', permanent: true },
      { source: '/blog/government-teacher-recruitment-after-bed/', destination: '/blog/campus/government-teacher-recruitment-after-bed', permanent: true },
      { source: '/blog/how-to-become-a-subject-teacher-from-school', destination: '/blog/campus/how-to-become-a-subject-teacher-from-school', permanent: true },
      { source: '/blog/how-to-become-a-subject-teacher-from-school/', destination: '/blog/campus/how-to-become-a-subject-teacher-from-school', permanent: true },
      { source: '/blog/how-to-become-a-teacher-in-tamil-nadu-after-bed', destination: '/blog/campus/how-to-become-a-teacher-in-tamil-nadu-after-bed', permanent: true },
      { source: '/blog/how-to-become-a-teacher-in-tamil-nadu-after-bed/', destination: '/blog/campus/how-to-become-a-teacher-in-tamil-nadu-after-bed', permanent: true },
      { source: '/blog/is-teaching-still-worth-it', destination: '/blog/campus/is-teaching-still-worth-it', permanent: true },
      { source: '/blog/is-teaching-still-worth-it/', destination: '/blog/campus/is-teaching-still-worth-it', permanent: true },
      { source: '/blog/parents-guide-to-bed-admission', destination: '/blog/campus/parents-guide-to-bed-admission', permanent: true },
      { source: '/blog/parents-guide-to-bed-admission/', destination: '/blog/campus/parents-guide-to-bed-admission', permanent: true },
      { source: '/blog/teaching-as-a-second-career', destination: '/blog/campus/teaching-as-a-second-career', permanent: true },
      { source: '/blog/teaching-as-a-second-career/', destination: '/blog/campus/teaching-as-a-second-career', permanent: true },
      { source: '/blog/teaching-in-cbse-and-matriculation-schools-private-route', destination: '/blog/campus/teaching-in-cbse-and-matriculation-schools-private-route', permanent: true },
      { source: '/blog/teaching-in-cbse-and-matriculation-schools-private-route/', destination: '/blog/campus/teaching-in-cbse-and-matriculation-schools-private-route', permanent: true },
      { source: '/blog/the-university-behind-your-bed-degree', destination: '/blog/campus/the-university-behind-your-bed-degree', permanent: true },
      { source: '/blog/the-university-behind-your-bed-degree/', destination: '/blog/campus/the-university-behind-your-bed-degree', permanent: true },
      { source: '/blog/what-ncte-approval-actually-means', destination: '/blog/campus/what-ncte-approval-actually-means', permanent: true },
      { source: '/blog/what-ncte-approval-actually-means/', destination: '/blog/campus/what-ncte-approval-actually-means', permanent: true },
      { source: '/blog/what-schools-actually-look-for-when-hiring', destination: '/blog/campus/what-schools-actually-look-for-when-hiring', permanent: true },
      { source: '/blog/what-schools-actually-look-for-when-hiring/', destination: '/blog/campus/what-schools-actually-look-for-when-hiring', permanent: true },
      { source: '/blog/where-to-find-your-bed-subject-syllabus', destination: '/blog/campus/where-to-find-your-bed-subject-syllabus', permanent: true },
      { source: '/blog/where-to-find-your-bed-subject-syllabus/', destination: '/blog/campus/where-to-find-your-bed-subject-syllabus', permanent: true },
      { source: '/blog/which-bed-subject-to-choose-decision-guide', destination: '/blog/campus/which-bed-subject-to-choose-decision-guide', permanent: true },
      { source: '/blog/which-bed-subject-to-choose-decision-guide/', destination: '/blog/campus/which-bed-subject-to-choose-decision-guide', permanent: true },
      { source: '/blog/your-first-year-of-teaching', destination: '/blog/campus/your-first-year-of-teaching', permanent: true },
      { source: '/blog/your-first-year-of-teaching/', destination: '/blog/campus/your-first-year-of-teaching', permanent: true },
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

      // -- Fabricated-testimonial removal 2026-09-16 -------------------------
      // /testimonials carried three invented alumni: "Priya Sharma", "Rajesh Kumar",
      // "Sunita Devi", with invented schools (Delhi Public School Chennai, Kendriya
      // Vidyalaya Coimbatore, Navodaya Vidyalaya TN). The first card's avatar initial
      // was "A" while the name was "Priya Sharma" - template placeholder content, not
      // people. The same three also fed a Review + aggregateRating 4.8/156 JSON-LD block
      // on the homepage, on a site with no review UI. Page deleted, not rewritten - same
      // call as the dental and pharmacy fabricated-testimonial findings.
      // Measured before removal: absent from the top 25 GSC pages by impressions over
      // 2026-06-18..2026-09-15 (the 25th row has 22 impressions), so there is no traffic
      // to rescue. It WAS in sitemap.ts and llms-full.txt, so AI engines were being
      // pointed straight at it - that is why this is a redirect and not a bare 404.
      // Target /about verified HTTP 200 on 2026-09-16.
      { source: '/testimonials', destination: '/about', permanent: true },
      { source: '/testimonials/', destination: '/about', permanent: true },

      // ── Legacy B.Ed Computer Science URLs 2026-10-02 (GL6-381) ─────────────
      // /b-ed-computer-science is an old course URL that still drew GSC impressions and answered 404
      // (its trailing-slash form 308s into the 404). The blog URL below also 404s. Targets verified
      // HTTP 200 on 2026-10-02.
      { source: '/b-ed-computer-science', destination: '/admissions/computer-science', permanent: true },
      { source: '/b-ed-computer-science/', destination: '/admissions/computer-science', permanent: true },
      { source: '/blog/b-ed-computer-science-colleges-in-india-2026', destination: '/blog/b-ed-computer-science-2026', permanent: true },
    ];
  },
};

export default nextConfig;
