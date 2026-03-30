import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import FacultyForm from '../FacultyForm';

export default async function EditFaculty({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: member } = await supabase
    .from('faculty')
    .select(`
      id, name, designation, department, qualification, experience_years,
      photo_url, email, display_order, is_active,
      slug, summary, research_papers_count, phd_scholars_count, awards_won_count,
      google_scholar_url, researchgate_url, orcid_url,
      mentoring_description, pg_dissertations_guided, ug_projects_guided,
      badges, academic_qualifications, areas_of_specialisation,
      experience, research_focus, publications, funded_research,
      certifications, awards, memberships, phd_scholars, faqs
    `)
    .eq('id', id)
    .single();

  if (!member) notFound();

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl">
      <Link
        href="/admin/faculty"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Faculty
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Faculty Member</h1>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
        <FacultyForm member={member} />
      </div>
    </div>
  );
}
