import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import EventForm from '../EventForm';

export default function NewEvent() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-3xl">
      <Link
        href="/admin/events"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Events
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">New Event</h1>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
        <EventForm />
      </div>
    </div>
  );
}
