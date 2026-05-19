import type { MetadataRoute } from 'next';
import { createClient } from '@/lib/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://edu.jkkn.ac.in';
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'education';

  // ── Static pages ──
  const staticPages: MetadataRoute.Sitemap = [
    // Homepage
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },

    // About
    { url: `${baseUrl}/about/vision-mission`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about/trust`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about/principal-message`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about/management`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about/institutions`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about/ncte-approval`, lastModified: new Date('2026-01-01'), changeFrequency: 'yearly', priority: 0.7 },

    // Admissions (course-wise)
    { url: `${baseUrl}/admissions`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/admissions/tamil`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/english`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/maths`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/physics`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/chemistry`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/botany`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/zoology`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/history`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/economics`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/commerce`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/computer-science`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/political-science`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/social-science`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/admissions/microbiology`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    // Departments
    { url: `${baseUrl}/departments/tamil`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/english`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/maths`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/physics`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/chemistry`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/botany`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/zoology`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/history`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/economics`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/commerce`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/computer-science`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/political-science`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/social-science`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/microbiology`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.8 },

    // Facilities (only existing routes)
    { url: `${baseUrl}/facilities/library`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/hostel`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/transport`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/food-court`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/auditorium`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/hospital`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/class-room`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/seminar-hall`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/wifi`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/bank-post-office`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/ambulance-services`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.5 },

    // Course-wise blog posts (B.Ed specializations — long-form SEO)
    { url: `${baseUrl}/blog/b-ed-tamil-2026`, lastModified: new Date('2026-03-12'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-english-2026`, lastModified: new Date('2026-03-14'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-mathematics-2026`, lastModified: new Date('2026-03-16'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-physics-2026`, lastModified: new Date('2026-03-18'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-chemistry-2026`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-computer-science-2026`, lastModified: new Date('2026-03-22'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-botany-2026`, lastModified: new Date('2026-03-24'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-zoology-2026`, lastModified: new Date('2026-03-26'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-microbiology-2026`, lastModified: new Date('2026-03-28'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-commerce-2026`, lastModified: new Date('2026-03-30'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-economics-2026`, lastModified: new Date('2026-04-02'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-history-2026`, lastModified: new Date('2026-04-04'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-social-science-2026`, lastModified: new Date('2026-04-06'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/blog/b-ed-political-science-2026`, lastModified: new Date('2026-04-09'), changeFrequency: 'monthly', priority: 0.85 },

    // Listing pages
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/notices`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },

    // Others (non-redirect pages only)
    { url: `${baseUrl}/contact`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/others/faculty-details`, lastModified: new Date('2026-01-01'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/others/privacy-policy`, lastModified: new Date('2026-01-01'), changeFrequency: 'yearly', priority: 0.3 },
  ];

  // ── Dynamic pages (graceful degradation) ──
  const supabase = await createClient();

  const [blogsRes, eventsRes, albumsRes] = await Promise.all([
    supabase
      .from('blogs')
      .select('slug, updated_at, created_at')
      .eq('college_id', collegeId)
      .eq('is_published', true),
    supabase
      .from('events')
      .select('slug, updated_at, created_at')
      .eq('is_published', true),
    supabase
      .from('gallery_albums')
      .select('id, updated_at, created_at')
      .eq('college_id', collegeId),
  ]);

  const blogPages: MetadataRoute.Sitemap = (blogsRes.data ?? []).map((b) => ({
    url: `${baseUrl}/blog/campus/${b.slug}`,
    lastModified: new Date(b.updated_at ?? b.created_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const eventPages: MetadataRoute.Sitemap = (eventsRes.data ?? []).map((e) => ({
    url: `${baseUrl}/events/${e.slug}`,
    lastModified: new Date(e.updated_at ?? e.created_at),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const albumPages: MetadataRoute.Sitemap = (albumsRes.data ?? []).map((a) => ({
    url: `${baseUrl}/gallery/${a.id}`,
    lastModified: new Date(a.updated_at ?? a.created_at),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...blogPages, ...eventPages, ...albumPages];
}
