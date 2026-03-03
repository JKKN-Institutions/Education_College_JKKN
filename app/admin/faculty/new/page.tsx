import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import FacultyForm from '../FacultyForm';

export default function NewFaculty() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-3xl">
      <Link
        href="/admin/faculty"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Faculty
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Add Faculty Member</h1>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
        <FacultyForm />
      </div>
    </div>
  );
}
