import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { seoMetadata } from '@/lib/seo-metadata';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { CalendarDays, MapPin, Clock } from 'lucide-react';

export const revalidate = 60;

export const metadata = seoMetadata(
  'Events',
  'Latest events, seminars, workshops, and activities at JKKN College of Education, Namakkal. Stay updated with campus happenings.',
  '/events',
  { keywords: ['JKKN events', 'college events Namakkal', 'B.Ed college events'] }
);

export default async function EventsPage() {
  const supabase = await createClient();
  const collegeId = process.env.NEXT_PUBLIC_COLLEGE_ID ?? 'education';

  const { data: events } = await supabase
    .from('events')
    .select('id, title, slug, event_date, event_time, venue, image_url, description')
    .eq('is_published', true)
    .eq('college_id', collegeId)
    .order('event_date', { ascending: false })
    .limit(20);

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <div className="min-h-screen bg-[#FBFBEE]">
      <BreadcrumbJsonLd items={[
        { name: 'Home', href: '/' },
        { name: 'Events', href: '/events' },
      ]} />
      <Header />

      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#002309] mb-2">
            Events
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Seminars, workshops, and campus activities at JKKN College of Education
          </p>

          {events && events.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
                >
                  {event.image_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={event.image_url}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="font-bold text-gray-900 text-base leading-snug mb-3 line-clamp-2">
                      {event.title}
                    </h2>
                    <div className="space-y-1.5 mt-auto">
                      {event.event_date && (
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <CalendarDays className="w-4 h-4 flex-shrink-0" />
                          <span>{formatDate(event.event_date)}</span>
                        </div>
                      )}
                      {event.event_time && (
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          <span>{event.event_time}</span>
                        </div>
                      )}
                      {event.venue && (
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="line-clamp-1">{event.venue}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No events found. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
