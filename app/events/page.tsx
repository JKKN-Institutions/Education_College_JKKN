import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { CalendarDays, MapPin, Clock, ArrowRight } from 'lucide-react';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const revalidate = 60;

export const metadata = seoMetadata(
  'Events',
  'Upcoming and past events at JKKN College of Education — seminars, workshops, cultural events, and academic functions.',
  '/events',
  { keywords: ['JKKN events', 'college events Namakkal', 'education events'] }
);

export default async function EventsPage() {
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'education';

  const { data: events } = await supabase
    .from('events')
    .select('id, title, slug, description, event_date, event_time, venue, image_url')
    .eq('college_id', collegeId)
    .eq('is_published', true)
    .order('event_date', { ascending: false });

  const upcoming = events?.filter((e) => new Date(e.event_date) >= new Date()) ?? [];
  const past = events?.filter((e) => new Date(e.event_date) < new Date()) ?? [];

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  const EventCard = ({ ev }: { ev: typeof events extends (infer T)[] | null ? T : never }) => (
    <Link
      href={`/events/${ev.slug}`}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
    >
      {ev.image_url ? (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={ev.image_url}
            alt={ev.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-gradient-to-br from-[#006837]/10 to-[#006837]/5 flex items-center justify-center">
          <CalendarDays className="w-14 h-14 text-[#006837]/30" />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-3 mb-3 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5 text-[#006837]" />
            {formatDate(ev.event_date)}
          </span>
          {ev.event_time && (
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#006837]" />
              {ev.event_time}
            </span>
          )}
          {ev.venue && (
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#006837]" />
              {ev.venue}
            </span>
          )}
        </div>
        <h3 className="font-bold text-gray-900 text-lg leading-snug mb-2 group-hover:text-[#006837] transition-colors">
          {ev.title}
        </h3>
        {ev.description && (
          <p className="text-sm text-gray-500 line-clamp-2 flex-1">{ev.description}</p>
        )}
        <div className="flex items-center gap-1 text-sm font-semibold text-[#006837] mt-4">
          View Details <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );

  return (
    <main className="min-h-screen bg-[#FBFBEE]">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Events', href: '/events' },
      ]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#002309] to-[#006837] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Events</h1>
          <p className="text-white/70 text-lg">
            Stay updated with all upcoming and past events at JKKN College of Education
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {events && events.length > 0 ? (
          <>
            {/* Upcoming */}
            {upcoming.length > 0 && (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-[#002309] mb-6 flex items-center gap-2">
                  <span className="w-2 h-7 bg-[#006837] rounded-full inline-block" />
                  Upcoming Events
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcoming.map((ev) => (
                    <EventCard key={ev.id} ev={ev} />
                  ))}
                </div>
              </section>
            )}

            {/* Past */}
            {past.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-[#002309] mb-6 flex items-center gap-2">
                  <span className="w-2 h-7 bg-gray-300 rounded-full inline-block" />
                  Past Events
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {past.map((ev) => (
                    <EventCard key={ev.id} ev={ev} />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
              <CalendarDays className="w-10 h-10 text-gray-300" />
            </div>
            <p className="text-xl font-semibold text-gray-600 mb-2">No events yet</p>
            <p className="text-gray-400">Check back soon for upcoming events!</p>
          </div>
        )}
      </div>
    </main>
  );
}
