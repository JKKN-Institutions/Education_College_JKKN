import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import EventForm from '../EventForm';

export default async function EditEvent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: event } = await supabase
    .from('events')
    .select('id, title, slug, description, event_date, event_time, venue, image_url, is_published')
    .eq('id', id)
    .single();

  if (!event) notFound();

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-3xl">
      <Link
        href="/admin/events"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Events
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Event</h1>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
        <EventForm event={event} />
      </div>
    </div>
  );
}
