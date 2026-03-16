import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { createClient as createStaticClient } from '@/lib/supabase/client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CalendarDays, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'education';

  const { data: event } = await supabase
    .from('events')
    .select('title, description')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!event) return {};

  const title = event.title;
  const description = event.description
    ? event.description.slice(0, 155)
    : `${event.title} — event at JKKN College of Education, Kumarapalayam, Namakkal.`;

  return {
    title,
    description,
    alternates: { canonical: `https://edu.jkkn.ac.in/events/${slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://edu.jkkn.ac.in/events/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const supabase = createStaticClient();
  const { data } = await supabase
    .from('events')
    .select('slug')
    .eq('is_published', true);
  return (data ?? []).map((e) => ({ slug: e.slug }));
}

export default async function EventDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'education';

  const { data: event } = await supabase
    .from('events')
    .select('*')
    .eq('slug', slug)
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .single();

  if (!event) notFound();

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <main className="min-h-screen bg-[#FBFBEE]">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: event.title,
          startDate: event.event_date,
          ...(event.venue && {
            location: {
              '@type': 'Place',
              name: event.venue,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kumarapalayam',
                addressRegion: 'Tamil Nadu',
                addressCountry: 'IN',
              },
            },
          }),
          organizer: {
            '@type': 'EducationalOrganization',
            name: 'JKKN College of Education',
            url: 'https://edu.jkkn.ac.in',
          },
          ...(event.description && { description: event.description.slice(0, 300) }),
          ...(event.image_url && { image: event.image_url }),
        }}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Events', href: '/events' },
        { name: event.title, href: `/events/${slug}` },
      ]} />
      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-sm text-[#006837] hover:text-[#005a2e] font-medium transition"
        >
          <ArrowLeft className="w-4 h-4" />
          All Events
        </Link>
      </div>

      {/* Cover Image */}
      {event.image_url && (
        <div className="max-w-4xl mx-auto px-4 mt-6">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <img
              src={event.image_url}
              alt={event.title}
              className="w-full max-h-[400px] object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          {/* Meta */}
          <div className="flex flex-wrap gap-4 mb-5 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-[#006837]" />
              {formatDate(event.event_date)}
            </span>
            {event.event_time && (
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#006837]" />
                {event.event_time}
              </span>
            )}
            {event.venue && (
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#006837]" />
                {event.venue}
              </span>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#002309] leading-tight mb-6">
            {event.title}
          </h1>

          {event.description && (
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap text-base">
              {event.description}
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
