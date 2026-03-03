import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import NoticeForm from '../NoticeForm';

export default function NewNotice() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-3xl">
      <Link
        href="/admin/notices"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Notices
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">New Notice</h1>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
        <NoticeForm />
      </div>
    </div>
  );
}
