import type { MetadataRoute } from 'next';
import { createClient } from '@/lib/supabase/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://edu.jkkn.ac.in';
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'education';

  // ── Static pages ──
  const staticPages: MetadataRoute.Sitemap = [
    // Homepage
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },

    // About
    { url: `${baseUrl}/about/vision-mission`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about/trust`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about/principal-message`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about/management`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about/institutions`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about/ncte-approval`, changeFrequency: 'yearly', priority: 0.7 },

    // Departments
    { url: `${baseUrl}/departments/tamil`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/english`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/maths`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/physics`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/chemistry`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/botany`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/zoology`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/history`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/economics`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/commerce`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/computer-science`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/political-science`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/social-science`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/departments/microbiology`, changeFrequency: 'monthly', priority: 0.8 },

    // Facilities
    { url: `${baseUrl}/facilities/library`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/hostel`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/transport`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/food-court`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/auditorium`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/hospital`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/class-room`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/seminar-hall`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/wifi`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/facilities/bank-post-office`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/facilities/ambulance-services`, changeFrequency: 'monthly', priority: 0.5 },

    // Listing pages
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog/top-10-career-options-after-bed-2026`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/events`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/gallery`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/notices`, changeFrequency: 'weekly', priority: 0.6 },

    // Others
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/others/alumni`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/others/careers`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/others/faculty-details`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/others/digital-campus`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/others/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/others/balance-sheet`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/others/financial-details`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/others/biomatric-list`, changeFrequency: 'monthly', priority: 0.3 },
  ];

  // ── Dynamic pages (graceful degradation) ──
  const supabase = createClient();

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
