import { createClient } from '@/lib/supabase/server';
import { getAdminCollegeId } from '@/lib/get-admin-college';
import Link from 'next/link';
import { Plus, Pencil, CalendarDays } from 'lucide-react';
import DeleteEventButton from './DeleteEventButton';

export default async function AdminEvents() {
  const supabase = await createClient();
  const collegeId = await getAdminCollegeId();
  const { data: events } = await supabase
    .from('events')
    .select('id, title, event_date, event_time, venue, is_published, created_at')
    .eq('college_id', collegeId)
    .order('event_date', { ascending: false });

  function formatDate(d: string) {
    return new Date(d).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-500 text-sm mt-0.5">{events?.length ?? 0} total events</p>
        </div>
        <Link
          href="/admin/events/new"
          className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#005a2e] transition"
        >
          <Plus className="w-4 h-4" />
          New Event
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {events && events.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-5 py-3.5 font-semibold text-gray-600">Title</th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 hidden sm:table-cell">Date</th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600 hidden md:table-cell">Venue</th>
                  <th className="text-left px-4 py-3.5 font-semibold text-gray-600">Status</th>
                  <th className="text-right px-5 py-3.5 font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {events.map((ev) => (
                  <tr key={ev.id} className="hover:bg-gray-50/50 transition">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                          <CalendarDays className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 line-clamp-1">{ev.title}</p>
                          {ev.event_time && (
                            <p className="text-xs text-gray-400 mt-0.5">{ev.event_time}</p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-500 hidden sm:table-cell">
                      {formatDate(ev.event_date)}
                    </td>
                    <td className="px-4 py-4 text-gray-500 hidden md:table-cell">
                      {ev.venue || '—'}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                          ev.is_published
                            ? 'bg-green-50 text-green-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {ev.is_published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/events/${ev.id}`}
                          className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-[#006837] px-3 py-1.5 rounded-lg hover:bg-gray-100 transition"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                          Edit
                        </Link>
                        <DeleteEventButton id={ev.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-16 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-4">
              <CalendarDays className="w-7 h-7 text-green-400" />
            </div>
            <p className="font-semibold text-gray-700 mb-1">No events yet</p>
            <p className="text-sm text-gray-400 mb-5">Create your first event to display on the site.</p>
            <Link
              href="/admin/events/new"
              className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#005a2e] transition"
            >
              <Plus className="w-4 h-4" />
              New Event
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
