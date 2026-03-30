'use client';

import { useState, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Loader2, X, UserCircle2, Plus, Trash2 } from 'lucide-react';
import { useAdminCollege } from '../AdminCollegeContext';

// ─── Constants ──────────────────────────────────────────────────────────────

const DESIGNATIONS = [
  'Principal',
  'Vice Principal',
  'Professor',
  'Associate Professor',
  'Assistant Professor',
  'Lecturer',
  'Senior Lecturer',
  'Guest Faculty',
  'Physical Director',
  'Librarian',
  'Other',
];

const TABS = [
  'Basic Info',
  'Academic',
  'Experience',
  'Research',
  'Achievements',
  'Mentoring',
  'FAQs',
];

const I =
  'w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition bg-white';
const IE =
  'w-full px-3 py-2.5 border border-red-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition bg-white';

// ─── Types ───────────────────────────────────────────────────────────────────

type AcademicQualification = {
  degree: string;
  specialisation: string;
  university: string;
  year: string;
};

type ExperienceEntry = {
  type: string;
  period_start: string;
  period_end: string;
  role: string;
  institution: string;
  description: string;
};

type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi_url: string;
  pubmed_url: string;
};

type FundedResearch = {
  project: string;
  agency: string;
  amount: string;
  period: string;
  status: string;
};

type Certification = { name: string; organisation: string; year: string };
type Award = { award: string; body: string; year: string };
type Membership = { organisation: string; type: string; since: string };
type PhdScholar = { scholar: string; research_topic: string; status: string };
type FAQ = { question: string; answer: string };

interface FacultyMemberData {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience_years: number;
  photo_url: string;
  email: string;
  display_order: number;
  is_active: boolean;
  // Scalar extended fields
  slug?: string | null;
  summary?: string | null;
  research_papers_count?: number;
  phd_scholars_count?: number;
  awards_won_count?: number;
  google_scholar_url?: string | null;
  researchgate_url?: string | null;
  orcid_url?: string | null;
  mentoring_description?: string | null;
  pg_dissertations_guided?: number;
  ug_projects_guided?: number;
  // JSONB array fields
  badges?: string[];
  academic_qualifications?: AcademicQualification[];
  areas_of_specialisation?: string[];
  experience?: ExperienceEntry[];
  research_focus?: string[];
  publications?: Publication[];
  funded_research?: FundedResearch[];
  certifications?: Certification[];
  awards?: Award[];
  memberships?: Membership[];
  phd_scholars?: PhdScholar[];
  faqs?: FAQ[];
}

interface FacultyFormProps {
  member?: FacultyMemberData;
}

// ─── Small UI helpers (defined outside to keep stable references) ─────────────

function RowCard({
  children,
  onRemove,
}: {
  children: React.ReactNode;
  onRemove: () => void;
}) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 relative border border-gray-100">
      <button
        type="button"
        onClick={onRemove}
        className="absolute top-3 right-3 text-red-400 hover:text-red-600 transition"
        title="Remove"
      >
        <Trash2 className="w-4 h-4" />
      </button>
      <div className="pr-8">{children}</div>
    </div>
  );
}

function AddBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1.5 text-xs font-medium text-[#006837] hover:text-[#005a2e] border border-[#006837] hover:bg-green-50 rounded-lg px-3 py-1.5 transition mt-2"
    >
      <Plus className="w-3.5 h-3.5" />
      {label}
    </button>
  );
}

function TagInputField({
  tags,
  input,
  onInputChange,
  onAdd,
  onRemove,
  placeholder,
}: {
  tags: string[];
  input: string;
  onInputChange: (v: string) => void;
  onAdd: (v: string) => void;
  onRemove: (i: number) => void;
  placeholder?: string;
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-3 bg-white">
      <div className="flex flex-wrap gap-2 mb-2 min-h-[1.5rem]">
        {tags.length === 0 && (
          <span className="text-xs text-gray-400 italic">No items yet</span>
        )}
        {tags.map((tag, i) => (
          <span
            key={i}
            className="flex items-center gap-1 bg-green-50 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200"
          >
            {tag}
            <button
              type="button"
              onClick={() => onRemove(i)}
              className="text-green-600 hover:text-red-500 transition ml-0.5"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const val = input.trim().replace(/,$/, '');
            if (val) onAdd(val);
          }
        }}
        placeholder={placeholder ?? 'Type and press Enter to add'}
        className="w-full text-sm px-1 py-1 outline-none text-gray-700 placeholder-gray-400 border-t border-gray-100 mt-1 pt-2"
      />
    </div>
  );
}

// ─── Main Form Component ──────────────────────────────────────────────────────

export default function FacultyForm({ member }: FacultyFormProps) {
  const isEdit = !!member;
  const router = useRouter();
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const collegeId = useAdminCollege();
  const [activeTab, setActiveTab] = useState(0);

  // Basic Info
  const [name, setName] = useState(member?.name ?? '');
  const [designation, setDesignation] = useState(member?.designation ?? 'Assistant Professor');
  const [department, setDepartment] = useState(member?.department ?? '');
  const [qualification, setQualification] = useState(member?.qualification ?? '');
  const [slug, setSlug] = useState(member?.slug ?? '');
  const [experienceYears, setExperienceYears] = useState(
    member?.experience_years?.toString() ?? '0'
  );
  const [email, setEmail] = useState(member?.email ?? '');
  const [displayOrder, setDisplayOrder] = useState(
    member?.display_order?.toString() ?? '0'
  );
  const [isActive, setIsActive] = useState(member?.is_active ?? true);
  const [photoUrl, setPhotoUrl] = useState(member?.photo_url ?? '');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState(member?.photo_url ?? '');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  // Stats
  const [researchPapersCount, setResearchPapersCount] = useState(
    member?.research_papers_count?.toString() ?? '0'
  );
  const [phdScholarsCount, setPhdScholarsCount] = useState(
    member?.phd_scholars_count?.toString() ?? '0'
  );
  const [awardsWonCount, setAwardsWonCount] = useState(
    member?.awards_won_count?.toString() ?? '0'
  );
  // Badges
  const [badges, setBadges] = useState<string[]>(member?.badges ?? []);
  const [badgeInput, setBadgeInput] = useState('');

  // Academic
  const [summary, setSummary] = useState(member?.summary ?? '');
  const [academicQualifications, setAcademicQualifications] = useState<
    AcademicQualification[]
  >(member?.academic_qualifications ?? []);
  const [areasOfSpecialisation, setAreasOfSpecialisation] = useState<string[]>(
    member?.areas_of_specialisation ?? []
  );
  const [specialisationInput, setSpecialisationInput] = useState('');

  // Experience
  const [experienceEntries, setExperienceEntries] = useState<ExperienceEntry[]>(
    member?.experience ?? []
  );

  // Research
  const [researchFocus, setResearchFocus] = useState<string[]>(
    member?.research_focus ?? []
  );
  const [researchFocusInput, setResearchFocusInput] = useState('');
  const [publications, setPublications] = useState<Publication[]>(
    member?.publications ?? []
  );
  const [fundedResearch, setFundedResearch] = useState<FundedResearch[]>(
    member?.funded_research ?? []
  );
  const [googleScholarUrl, setGoogleScholarUrl] = useState(
    member?.google_scholar_url ?? ''
  );
  const [researchgateUrl, setResearchgateUrl] = useState(
    member?.researchgate_url ?? ''
  );
  const [orcidUrl, setOrcidUrl] = useState(member?.orcid_url ?? '');

  // Achievements
  const [certifications, setCertifications] = useState<Certification[]>(
    member?.certifications ?? []
  );
  const [awards, setAwards] = useState<Award[]>(member?.awards ?? []);
  const [memberships, setMemberships] = useState<Membership[]>(
    member?.memberships ?? []
  );

  // Mentoring
  const [mentoringDescription, setMentoringDescription] = useState(
    member?.mentoring_description ?? ''
  );
  const [phdScholars, setPhdScholars] = useState<PhdScholar[]>(
    member?.phd_scholars ?? []
  );
  const [pgDissertationsGuided, setPgDissertationsGuided] = useState(
    member?.pg_dissertations_guided?.toString() ?? '0'
  );
  const [ugProjectsGuided, setUgProjectsGuided] = useState(
    member?.ug_projects_guided?.toString() ?? '0'
  );

  // FAQs
  const [faqs, setFaqs] = useState<FAQ[]>(member?.faqs ?? []);

  // Field-level validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  function clearError(field: string) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  // ── Handlers ────────────────────────────────────────────────────────────────

  function handlePhotoSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhotoFile(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  async function uploadPhoto(facultyId: string): Promise<string | null> {
    if (!photoFile) return photoUrl || null;
    setUploading(true);
    const ext = photoFile.name.split('.').pop();
    const fileName = `education/${facultyId}.${ext}`;
    const { data, error } = await supabase.storage
      .from('faculty-photos')
      .upload(fileName, photoFile, { upsert: true });
    setUploading(false);
    if (error) {
      toast.error('Photo upload failed: ' + error.message);
      return null;
    }
    const {
      data: { publicUrl },
    } = supabase.storage.from('faculty-photos').getPublicUrl(data.path);
    return publicUrl;
  }

  function addTag(
    value: string,
    list: string[],
    setList: (v: string[]) => void,
    setInput: (v: string) => void
  ) {
    const t = value.trim();
    if (t && !list.includes(t)) setList([...list, t]);
    setInput('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!photoPreview && !photoFile) newErrors.photo = 'Photo is required.';
    if (!designation.trim()) newErrors.designation = 'Designation is required.';
    if (!department.trim()) newErrors.department = 'Department is required.';
    if (!qualification.trim()) newErrors.qualification = 'Qualification is required.';
    if (!email.trim()) newErrors.email = 'Email is required.';
    if (!summary.trim()) newErrors.summary = 'Professional Summary is required.';
    if (academicQualifications.length === 0) newErrors.academicQualifications = 'At least one Academic Qualification is required.';
    if (areasOfSpecialisation.length === 0) newErrors.areasOfSpecialisation = 'At least one Area of Specialisation is required.';
    if (experienceEntries.length === 0) newErrors.experienceEntries = 'At least one Experience Entry is required.';
    if (researchFocus.length === 0) newErrors.researchFocus = 'At least one Research Focus Area is required.';
    if (publications.length === 0) newErrors.publications = 'At least one Selected Publication is required.';
    if (!googleScholarUrl.trim()) newErrors.googleScholarUrl = 'Google Scholar URL is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please fill in all required fields.');
      // Switch to the tab of the first error
      const tab0Fields = ['name', 'photo', 'designation', 'department', 'qualification', 'email'];
      const tab1Fields = ['summary', 'academicQualifications', 'areasOfSpecialisation'];
      const tab2Fields = ['experienceEntries'];
      if (tab0Fields.some((f) => newErrors[f])) setActiveTab(0);
      else if (tab1Fields.some((f) => newErrors[f])) setActiveTab(1);
      else if (tab2Fields.some((f) => newErrors[f])) setActiveTab(2);
      else setActiveTab(3);
      return;
    }

    setSaving(true);

    const memberId = isEdit ? member!.id : crypto.randomUUID();
    const uploadedUrl = await uploadPhoto(memberId);
    if (photoFile && uploadedUrl === null) {
      setSaving(false);
      return;
    }

    const payload = {
      college_id: collegeId,
      name: name.trim(),
      designation: designation.trim(),
      department: department.trim(),
      qualification: qualification.trim(),
      slug: slug.trim() || null,
      experience_years: parseInt(experienceYears) || 0,
      email: email.trim(),
      display_order: parseInt(displayOrder) || 0,
      is_active: isActive,
      photo_url: uploadedUrl ?? '',
      summary: summary.trim() || null,
      research_papers_count: parseInt(researchPapersCount) || 0,
      phd_scholars_count: parseInt(phdScholarsCount) || 0,
      awards_won_count: parseInt(awardsWonCount) || 0,
      google_scholar_url: googleScholarUrl.trim() || null,
      researchgate_url: researchgateUrl.trim() || null,
      orcid_url: orcidUrl.trim() || null,
      mentoring_description: mentoringDescription.trim() || null,
      pg_dissertations_guided: parseInt(pgDissertationsGuided) || 0,
      ug_projects_guided: parseInt(ugProjectsGuided) || 0,
      badges,
      academic_qualifications: academicQualifications,
      areas_of_specialisation: areasOfSpecialisation,
      experience: experienceEntries,
      research_focus: researchFocus,
      publications,
      funded_research: fundedResearch,
      certifications,
      awards,
      memberships,
      phd_scholars: phdScholars,
      faqs,
      updated_at: new Date().toISOString(),
    };

    let error;
    if (isEdit) {
      ({ error } = await supabase.from('faculty').update(payload).eq('id', member!.id));
    } else {
      ({ error } = await supabase.from('faculty').insert({
        id: memberId,
        ...payload,
        created_at: new Date().toISOString(),
      }));
    }

    setSaving(false);
    if (error) {
      toast.error('Save failed: ' + error.message);
    } else {
      toast.success(isEdit ? 'Faculty member updated!' : 'Faculty member added!');
      router.push('/admin/faculty');
      router.refresh();
    }
  }

  // ── Tab Renderers ────────────────────────────────────────────────────────────

  function renderBasicInfo() {
    return (
      <>
        {/* Photo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Photo
          </label>
          <div className="flex items-start gap-4">
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`relative w-24 h-24 rounded-2xl border-2 border-dashed overflow-hidden cursor-pointer transition flex-shrink-0 ${errors.photo ? 'border-red-500 hover:border-red-600' : 'border-gray-200 hover:border-[#006837]'}`}
            >
              {photoPreview ? (
                <>
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPhotoPreview('');
                      setPhotoFile(null);
                      setPhotoUrl('');
                    }}
                    className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <UserCircle2 className="w-10 h-10 text-gray-300" />
                </div>
              )}
            </div>
            <div className="text-sm text-gray-500 pt-2">
              <p className="font-medium text-gray-700 mb-1">Upload faculty photo *</p>
              <p>Click the box to select an image.</p>
              <p className="text-xs text-gray-400 mt-1">
                JPG, PNG up to 5MB. Square photos work best.
              </p>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => { handlePhotoSelect(e); clearError('photo'); }}
            className="hidden"
          />
          {errors.photo && <p className="text-xs text-red-500 mt-1">{errors.photo}</p>}
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); clearError('name'); }}
            required
            placeholder="Dr. Firstname Lastname"
            className={errors.name ? IE : I}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Designation & Department */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Designation *
            </label>
            <select
              value={designation}
              onChange={(e) => { setDesignation(e.target.value); clearError('designation'); }}
              className={errors.designation ? IE : I}
            >
              {DESIGNATIONS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            {errors.designation && <p className="text-xs text-red-500 mt-1">{errors.designation}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Department *
            </label>
            <input
              type="text"
              value={department}
              onChange={(e) => { setDepartment(e.target.value); clearError('department'); }}
              placeholder="e.g. Department of Orthodontics"
              className={errors.department ? IE : I}
            />
            {errors.department && <p className="text-xs text-red-500 mt-1">{errors.department}</p>}
          </div>
        </div>

        {/* Qualification & Slug */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Qualification *
            </label>
            <input
              type="text"
              value={qualification}
              onChange={(e) => { setQualification(e.target.value); clearError('qualification'); }}
              placeholder="e.g. M.D.S., Ph.D."
              className={errors.qualification ? IE : I}
            />
            {errors.qualification && <p className="text-xs text-red-500 mt-1">{errors.qualification}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              URL Slug
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="e.g. dr-ramesh-kumar"
              className={I}
            />
            <p className="text-xs text-gray-400 mt-1">
              Used for /faculty/[slug] profile page
            </p>
          </div>
        </div>

        {/* Stats */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Statistics{' '}
            <span className="font-normal text-gray-400">
              (shown as hero stat cards on profile page)
            </span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Experience (years)
              </label>
              <input
                type="number"
                min="0"
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                className={I}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Research Papers
              </label>
              <input
                type="number"
                min="0"
                value={researchPapersCount}
                onChange={(e) => setResearchPapersCount(e.target.value)}
                className={I}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">PhD Scholars</label>
              <input
                type="number"
                min="0"
                value={phdScholarsCount}
                onChange={(e) => setPhdScholarsCount(e.target.value)}
                className={I}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Awards Won</label>
              <input
                type="number"
                min="0"
                value={awardsWonCount}
                onChange={(e) => setAwardsWonCount(e.target.value)}
                className={I}
              />
            </div>
          </div>
        </div>

        {/* Email & Display Order */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); clearError('email'); }}
              placeholder="name@jkkn.ac.in"
              className={errors.email ? IE : I}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Display Order
            </label>
            <input
              type="number"
              min="0"
              value={displayOrder}
              onChange={(e) => setDisplayOrder(e.target.value)}
              className={I}
            />
            <p className="text-xs text-gray-400 mt-1">Lower = appears first</p>
          </div>
        </div>

        {/* Badges */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Badges / Chips{' '}
            <span className="font-normal text-gray-400">
              (shown in the hero section of the profile page)
            </span>
          </label>
          <TagInputField
            tags={badges}
            input={badgeInput}
            onInputChange={setBadgeInput}
            onAdd={(v) => addTag(v, badges, setBadges, setBadgeInput)}
            onRemove={(i) => setBadges(badges.filter((_, j) => j !== i))}
            placeholder="e.g. Ph.D. in Orthodontics — press Enter to add"
          />
        </div>

        {/* Active toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsActive(!isActive)}
            className={`relative w-11 h-6 rounded-full transition-colors ${
              isActive ? 'bg-green-500' : 'bg-gray-200'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                isActive ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
          <span className="text-sm font-medium text-gray-700">
            {isActive
              ? 'Active (visible on faculty page)'
              : 'Inactive (hidden from site)'}
          </span>
        </div>
      </>
    );
  }

  function renderAcademic() {
    return (
      <>
        {/* Professional Summary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Professional Summary *
          </label>
          <textarea
            value={summary}
            onChange={(e) => { setSummary(e.target.value); clearError('summary'); }}
            rows={5}
            placeholder="Write a professional summary paragraph about this faculty member..."
            className={(errors.summary ? IE : I) + ' resize-none'}
          />
          {errors.summary && <p className="text-xs text-red-500 mt-1">{errors.summary}</p>}
        </div>

        {/* Academic Qualifications */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Academic Qualifications *
          </label>
          <div className="space-y-2">
            {academicQualifications.map((q, i) => (
              <RowCard
                key={i}
                onRemove={() =>
                  setAcademicQualifications(
                    academicQualifications.filter((_, j) => j !== i)
                  )
                }
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <input
                    type="text"
                    value={q.degree}
                    onChange={(e) =>
                      setAcademicQualifications(
                        academicQualifications.map((r, j) =>
                          j === i ? { ...r, degree: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Degree (e.g. Ph.D.)"
                    className={I}
                  />
                  <input
                    type="text"
                    value={q.specialisation}
                    onChange={(e) =>
                      setAcademicQualifications(
                        academicQualifications.map((r, j) =>
                          j === i ? { ...r, specialisation: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Specialisation"
                    className={I}
                  />
                  <input
                    type="text"
                    value={q.university}
                    onChange={(e) =>
                      setAcademicQualifications(
                        academicQualifications.map((r, j) =>
                          j === i ? { ...r, university: e.target.value } : r
                        )
                      )
                    }
                    placeholder="University"
                    className={I}
                  />
                  <input
                    type="text"
                    value={q.year}
                    onChange={(e) =>
                      setAcademicQualifications(
                        academicQualifications.map((r, j) =>
                          j === i ? { ...r, year: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Year"
                    className={I}
                  />
                </div>
              </RowCard>
            ))}
          </div>
          <AddBtn
            label="Add Qualification"
            onClick={() => {
              setAcademicQualifications([
                ...academicQualifications,
                { degree: '', specialisation: '', university: '', year: '' },
              ]);
              clearError('academicQualifications');
            }}
          />
          {errors.academicQualifications && <p className="text-xs text-red-500 mt-1">{errors.academicQualifications}</p>}
        </div>

        {/* Areas of Specialisation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Areas of Specialisation *
          </label>
          <div className={errors.areasOfSpecialisation ? 'rounded-lg ring-1 ring-red-500' : ''}>
            <TagInputField
              tags={areasOfSpecialisation}
              input={specialisationInput}
              onInputChange={setSpecialisationInput}
              onAdd={(v) => {
                addTag(v, areasOfSpecialisation, setAreasOfSpecialisation, setSpecialisationInput);
                clearError('areasOfSpecialisation');
              }}
              onRemove={(i) =>
                setAreasOfSpecialisation(areasOfSpecialisation.filter((_, j) => j !== i))
              }
              placeholder="e.g. Orthodontic biomechanics — press Enter to add"
            />
          </div>
          {errors.areasOfSpecialisation && <p className="text-xs text-red-500 mt-1">{errors.areasOfSpecialisation}</p>}
        </div>
      </>
    );
  }

  function renderExperience() {
    return (
      <>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Experience Entries *
          </label>
          <p className="text-xs text-gray-400 mb-3">
            Add teaching and clinical experience. These appear as a timeline on the
            profile page.
          </p>
          <div className="space-y-2">
            {experienceEntries.map((entry, i) => (
              <RowCard
                key={i}
                onRemove={() =>
                  setExperienceEntries(experienceEntries.filter((_, j) => j !== i))
                }
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Type</label>
                    <select
                      value={entry.type}
                      onChange={(e) =>
                        setExperienceEntries(
                          experienceEntries.map((r, j) =>
                            j === i ? { ...r, type: e.target.value } : r
                          )
                        )
                      }
                      className={I}
                    >
                      <option value="Teaching">Teaching</option>
                      <option value="Clinical">Clinical</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">
                      Start Year
                    </label>
                    <input
                      type="text"
                      value={entry.period_start}
                      onChange={(e) =>
                        setExperienceEntries(
                          experienceEntries.map((r, j) =>
                            j === i ? { ...r, period_start: e.target.value } : r
                          )
                        )
                      }
                      placeholder="e.g. 2018"
                      className={I}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">End Year</label>
                    <input
                      type="text"
                      value={entry.period_end}
                      onChange={(e) =>
                        setExperienceEntries(
                          experienceEntries.map((r, j) =>
                            j === i ? { ...r, period_end: e.target.value } : r
                          )
                        )
                      }
                      placeholder="e.g. 2023 or Present"
                      className={I}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-3">
                    <label className="text-xs text-gray-500 mb-1 block">
                      Role / Title
                    </label>
                    <input
                      type="text"
                      value={entry.role}
                      onChange={(e) =>
                        setExperienceEntries(
                          experienceEntries.map((r, j) =>
                            j === i ? { ...r, role: e.target.value } : r
                          )
                        )
                      }
                      placeholder="e.g. Professor & HOD — Department of Orthodontics"
                      className={I}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-3">
                    <label className="text-xs text-gray-500 mb-1 block">
                      Institution
                    </label>
                    <input
                      type="text"
                      value={entry.institution}
                      onChange={(e) =>
                        setExperienceEntries(
                          experienceEntries.map((r, j) =>
                            j === i ? { ...r, institution: e.target.value } : r
                          )
                        )
                      }
                      placeholder="e.g. JKKN Dental College & Hospital, Komarapalayam"
                      className={I}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-3">
                    <label className="text-xs text-gray-500 mb-1 block">
                      Description{' '}
                      <span className="text-gray-300">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={entry.description}
                      onChange={(e) =>
                        setExperienceEntries(
                          experienceEntries.map((r, j) =>
                            j === i ? { ...r, description: e.target.value } : r
                          )
                        )
                      }
                      placeholder="e.g. General dental practice, oral surgery, emergency care"
                      className={I}
                    />
                  </div>
                </div>
              </RowCard>
            ))}
          </div>
          <AddBtn
            label="Add Experience"
            onClick={() => {
              setExperienceEntries([
                ...experienceEntries,
                {
                  type: 'Teaching',
                  period_start: '',
                  period_end: '',
                  role: '',
                  institution: '',
                  description: '',
                },
              ]);
              clearError('experienceEntries');
            }}
          />
          {errors.experienceEntries && <p className="text-xs text-red-500 mt-1">{errors.experienceEntries}</p>}
        </div>
      </>
    );
  }

  function renderResearch() {
    return (
      <>
        {/* Research Focus */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Research Focus Areas *
          </label>
          <div className={errors.researchFocus ? 'rounded-lg ring-1 ring-red-500' : ''}>
            <TagInputField
              tags={researchFocus}
              input={researchFocusInput}
              onInputChange={setResearchFocusInput}
              onAdd={(v) => {
                addTag(v, researchFocus, setResearchFocus, setResearchFocusInput);
                clearError('researchFocus');
              }}
              onRemove={(i) => setResearchFocus(researchFocus.filter((_, j) => j !== i))}
              placeholder="e.g. Orthodontic biomechanics — press Enter to add"
            />
          </div>
          {errors.researchFocus && <p className="text-xs text-red-500 mt-1">{errors.researchFocus}</p>}
        </div>

        {/* Publications */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Selected Publications *
          </label>
          <div className="space-y-2">
            {publications.map((pub, i) => (
              <RowCard
                key={i}
                onRemove={() =>
                  setPublications(publications.filter((_, j) => j !== i))
                }
              >
                <div className="space-y-2">
                  <input
                    type="text"
                    value={pub.title}
                    onChange={(e) =>
                      setPublications(
                        publications.map((r, j) =>
                          j === i ? { ...r, title: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Publication title"
                    className={I}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={pub.authors}
                      onChange={(e) =>
                        setPublications(
                          publications.map((r, j) =>
                            j === i ? { ...r, authors: e.target.value } : r
                          )
                        )
                      }
                      placeholder="Authors (e.g. Kumar R, Selvam P)"
                      className={I}
                    />
                    <input
                      type="text"
                      value={pub.journal}
                      onChange={(e) =>
                        setPublications(
                          publications.map((r, j) =>
                            j === i ? { ...r, journal: e.target.value } : r
                          )
                        )
                      }
                      placeholder="Journal · Vol(Issue), pp. X–Y"
                      className={I}
                    />
                    <input
                      type="text"
                      value={pub.year}
                      onChange={(e) =>
                        setPublications(
                          publications.map((r, j) =>
                            j === i ? { ...r, year: e.target.value } : r
                          )
                        )
                      }
                      placeholder="Year"
                      className={I}
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="url"
                        value={pub.doi_url}
                        onChange={(e) =>
                          setPublications(
                            publications.map((r, j) =>
                              j === i ? { ...r, doi_url: e.target.value } : r
                            )
                          )
                        }
                        placeholder="DOI URL"
                        className={I}
                      />
                      <input
                        type="url"
                        value={pub.pubmed_url}
                        onChange={(e) =>
                          setPublications(
                            publications.map((r, j) =>
                              j === i ? { ...r, pubmed_url: e.target.value } : r
                            )
                          )
                        }
                        placeholder="PubMed URL"
                        className={I}
                      />
                    </div>
                  </div>
                </div>
              </RowCard>
            ))}
          </div>
          <AddBtn
            label="Add Publication"
            onClick={() => {
              setPublications([
                ...publications,
                { title: '', authors: '', journal: '', year: '', doi_url: '', pubmed_url: '' },
              ]);
              clearError('publications');
            }}
          />
          {errors.publications && <p className="text-xs text-red-500 mt-1">{errors.publications}</p>}
        </div>

        {/* Funded Research */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Funded Research Projects
          </label>
          <div className="space-y-2">
            {fundedResearch.map((fr, i) => (
              <RowCard
                key={i}
                onRemove={() =>
                  setFundedResearch(fundedResearch.filter((_, j) => j !== i))
                }
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="col-span-2 sm:col-span-4">
                    <input
                      type="text"
                      value={fr.project}
                      onChange={(e) =>
                        setFundedResearch(
                          fundedResearch.map((r, j) =>
                            j === i ? { ...r, project: e.target.value } : r
                          )
                        )
                      }
                      placeholder="Project title"
                      className={I}
                    />
                  </div>
                  <input
                    type="text"
                    value={fr.agency}
                    onChange={(e) =>
                      setFundedResearch(
                        fundedResearch.map((r, j) =>
                          j === i ? { ...r, agency: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Agency (e.g. ICMR)"
                    className={I}
                  />
                  <input
                    type="text"
                    value={fr.amount}
                    onChange={(e) =>
                      setFundedResearch(
                        fundedResearch.map((r, j) =>
                          j === i ? { ...r, amount: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Amount (e.g. ₹5,00,000)"
                    className={I}
                  />
                  <input
                    type="text"
                    value={fr.period}
                    onChange={(e) =>
                      setFundedResearch(
                        fundedResearch.map((r, j) =>
                          j === i ? { ...r, period: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Period (e.g. 2019–21)"
                    className={I}
                  />
                  <select
                    value={fr.status}
                    onChange={(e) =>
                      setFundedResearch(
                        fundedResearch.map((r, j) =>
                          j === i ? { ...r, status: e.target.value } : r
                        )
                      )
                    }
                    className={I}
                  >
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </RowCard>
            ))}
          </div>
          <AddBtn
            label="Add Funded Research"
            onClick={() =>
              setFundedResearch([
                ...fundedResearch,
                { project: '', agency: '', amount: '', period: '', status: 'Ongoing' },
              ])
            }
          />
        </div>

        {/* Academic Profile URLs */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Academic Profile URLs
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Google Scholar *</label>
              <input
                type="url"
                value={googleScholarUrl}
                onChange={(e) => { setGoogleScholarUrl(e.target.value); clearError('googleScholarUrl'); }}
                placeholder="https://scholar.google.com/..."
                className={errors.googleScholarUrl ? IE : I}
              />
              {errors.googleScholarUrl && <p className="text-xs text-red-500 mt-1">{errors.googleScholarUrl}</p>}
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">ResearchGate</label>
              <input
                type="url"
                value={researchgateUrl}
                onChange={(e) => setResearchgateUrl(e.target.value)}
                placeholder="https://www.researchgate.net/..."
                className={I}
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">ORCID</label>
              <input
                type="url"
                value={orcidUrl}
                onChange={(e) => setOrcidUrl(e.target.value)}
                placeholder="https://orcid.org/..."
                className={I}
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  function renderAchievements() {
    return (
      <>
        {/* Certifications */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Certifications & Training
          </label>
          <div className="space-y-2">
            {certifications.map((cert, i) => (
              <RowCard
                key={i}
                onRemove={() =>
                  setCertifications(certifications.filter((_, j) => j !== i))
                }
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={cert.name}
                    onChange={(e) =>
                      setCertifications(
                        certifications.map((r, j) =>
                          j === i ? { ...r, name: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Certification name"
                    className={I}
                  />
                  <input
                    type="text"
                    value={cert.organisation}
                    onChange={(e) =>
                      setCertifications(
                        certifications.map((r, j) =>
                          j === i ? { ...r, organisation: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Issuing organisation"
                    className={I}
                  />
                  <input
                    type="text"
                    value={cert.year}
                    onChange={(e) =>
                      setCertifications(
                        certifications.map((r, j) =>
                          j === i ? { ...r, year: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Year"
                    className={I}
                  />
                </div>
              </RowCard>
            ))}
          </div>
          <AddBtn
            label="Add Certification"
            onClick={() =>
              setCertifications([...certifications, { name: '', organisation: '', year: '' }])
            }
          />
        </div>

        {/* Awards */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Awards & Recognitions
          </label>
          <div className="space-y-2">
            {awards.map((award, i) => (
              <RowCard
                key={i}
                onRemove={() => setAwards(awards.filter((_, j) => j !== i))}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={award.award}
                    onChange={(e) =>
                      setAwards(
                        awards.map((r, j) =>
                          j === i ? { ...r, award: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Award name"
                    className={I}
                  />
                  <input
                    type="text"
                    value={award.body}
                    onChange={(e) =>
                      setAwards(
                        awards.map((r, j) =>
                          j === i ? { ...r, body: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Awarding body / organisation"
                    className={I}
                  />
                  <input
                    type="text"
                    value={award.year}
                    onChange={(e) =>
                      setAwards(
                        awards.map((r, j) =>
                          j === i ? { ...r, year: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Year"
                    className={I}
                  />
                </div>
              </RowCard>
            ))}
          </div>
          <AddBtn
            label="Add Award"
            onClick={() => setAwards([...awards, { award: '', body: '', year: '' }])}
          />
        </div>

        {/* Memberships */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Professional Memberships
          </label>
          <div className="space-y-2">
            {memberships.map((mem, i) => (
              <RowCard
                key={i}
                onRemove={() => setMemberships(memberships.filter((_, j) => j !== i))}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={mem.organisation}
                    onChange={(e) =>
                      setMemberships(
                        memberships.map((r, j) =>
                          j === i ? { ...r, organisation: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Organisation name"
                    className={I}
                  />
                  <input
                    type="text"
                    value={mem.type}
                    onChange={(e) =>
                      setMemberships(
                        memberships.map((r, j) =>
                          j === i ? { ...r, type: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Type (e.g. Life Member, Fellow)"
                    className={I}
                  />
                  <input
                    type="text"
                    value={mem.since}
                    onChange={(e) =>
                      setMemberships(
                        memberships.map((r, j) =>
                          j === i ? { ...r, since: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Since (year)"
                    className={I}
                  />
                </div>
              </RowCard>
            ))}
          </div>
          <AddBtn
            label="Add Membership"
            onClick={() =>
              setMemberships([...memberships, { organisation: '', type: '', since: '' }])
            }
          />
        </div>
      </>
    );
  }

  function renderMentoring() {
    return (
      <>
        {/* Mentoring Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Mentoring Description
          </label>
          <textarea
            value={mentoringDescription}
            onChange={(e) => setMentoringDescription(e.target.value)}
            rows={3}
            placeholder="e.g. Recognised PhD guide under The Tamil Nadu Dr. M.G.R. Medical University. Mentored research scholars at doctoral and post-graduate levels."
            className={I + ' resize-none'}
          />
        </div>

        {/* PhD Scholars */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            PhD Scholars
          </label>
          <div className="space-y-2">
            {phdScholars.map((scholar, i) => (
              <RowCard
                key={i}
                onRemove={() =>
                  setPhdScholars(phdScholars.filter((_, j) => j !== i))
                }
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={scholar.scholar}
                    onChange={(e) =>
                      setPhdScholars(
                        phdScholars.map((r, j) =>
                          j === i ? { ...r, scholar: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Scholar name"
                    className={I}
                  />
                  <input
                    type="text"
                    value={scholar.research_topic}
                    onChange={(e) =>
                      setPhdScholars(
                        phdScholars.map((r, j) =>
                          j === i ? { ...r, research_topic: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Research topic"
                    className={I}
                  />
                  <input
                    type="text"
                    value={scholar.status}
                    onChange={(e) =>
                      setPhdScholars(
                        phdScholars.map((r, j) =>
                          j === i ? { ...r, status: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Status (e.g. 2023 or Ongoing)"
                    className={I}
                  />
                </div>
              </RowCard>
            ))}
          </div>
          <AddBtn
            label="Add PhD Scholar"
            onClick={() =>
              setPhdScholars([
                ...phdScholars,
                { scholar: '', research_topic: '', status: '' },
              ])
            }
          />
        </div>

        {/* Guidance Summary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Guidance Summary
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                PG Dissertations Guided
              </label>
              <input
                type="number"
                min="0"
                value={pgDissertationsGuided}
                onChange={(e) => setPgDissertationsGuided(e.target.value)}
                className={I}
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                UG Projects Guided
              </label>
              <input
                type="number"
                min="0"
                value={ugProjectsGuided}
                onChange={(e) => setUgProjectsGuided(e.target.value)}
                className={I}
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  function renderFAQs() {
    return (
      <>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Frequently Asked Questions
          </label>
          <p className="text-xs text-gray-400 mb-3">
            These appear as an accordion section at the bottom of the faculty profile
            page.
          </p>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <RowCard
                key={i}
                onRemove={() => setFaqs(faqs.filter((_, j) => j !== i))}
              >
                <div className="space-y-2">
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) =>
                      setFaqs(
                        faqs.map((r, j) =>
                          j === i ? { ...r, question: e.target.value } : r
                        )
                      )
                    }
                    placeholder="Question"
                    className={I}
                  />
                  <textarea
                    value={faq.answer}
                    onChange={(e) =>
                      setFaqs(
                        faqs.map((r, j) =>
                          j === i ? { ...r, answer: e.target.value } : r
                        )
                      )
                    }
                    rows={2}
                    placeholder="Answer"
                    className={I + ' resize-none'}
                  />
                </div>
              </RowCard>
            ))}
          </div>
          <AddBtn
            label="Add FAQ"
            onClick={() => setFaqs([...faqs, { question: '', answer: '' }])}
          />
        </div>
      </>
    );
  }

  function renderTab() {
    switch (activeTab) {
      case 0: return renderBasicInfo();
      case 1: return renderAcademic();
      case 2: return renderExperience();
      case 3: return renderResearch();
      case 4: return renderAchievements();
      case 5: return renderMentoring();
      case 6: return renderFAQs();
      default: return null;
    }
  }

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit}>
      {/* Tab Navigation */}
      <div className="flex gap-1 border-b border-gray-100 mb-6 overflow-x-auto">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap rounded-t-lg transition ${
              activeTab === i
                ? 'bg-[#006837] text-white'
                : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="space-y-6">{renderTab()}</div>

      {/* Footer Buttons */}
      <div className="flex items-center gap-3 pt-6 border-t border-gray-100 mt-8">
        {activeTab < TABS.length - 1 ? (
          <button
            type="button"
            onClick={() => {
              const tabErrors: Record<string, string> = {};
              if (activeTab === 0) {
                if (!name.trim()) tabErrors.name = 'Name is required.';
                if (!photoPreview && !photoFile) tabErrors.photo = 'Photo is required.';
                if (!designation.trim()) tabErrors.designation = 'Designation is required.';
                if (!department.trim()) tabErrors.department = 'Department is required.';
                if (!qualification.trim()) tabErrors.qualification = 'Qualification is required.';
                if (!email.trim()) tabErrors.email = 'Email is required.';
              } else if (activeTab === 1) {
                if (!summary.trim()) tabErrors.summary = 'Professional Summary is required.';
                if (academicQualifications.length === 0) tabErrors.academicQualifications = 'At least one Academic Qualification is required.';
                if (areasOfSpecialisation.length === 0) tabErrors.areasOfSpecialisation = 'At least one Area of Specialisation is required.';
              } else if (activeTab === 2) {
                if (experienceEntries.length === 0) tabErrors.experienceEntries = 'At least one Experience Entry is required.';
              } else if (activeTab === 3) {
                if (researchFocus.length === 0) tabErrors.researchFocus = 'At least one Research Focus Area is required.';
                if (publications.length === 0) tabErrors.publications = 'At least one Selected Publication is required.';
                if (!googleScholarUrl.trim()) tabErrors.googleScholarUrl = 'Google Scholar URL is required.';
              }
              if (Object.keys(tabErrors).length > 0) {
                setErrors((prev) => ({ ...prev, ...tabErrors }));
                toast.error('Please fill in all required fields.');
                return;
              }
              setActiveTab(activeTab + 1);
            }}
            className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#005a2e] transition"
          >
            Save &amp; Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={saving || uploading}
            className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#005a2e] transition disabled:opacity-50"
          >
            {(saving || uploading) && <Loader2 className="w-4 h-4 animate-spin" />}
            {isEdit ? 'Update Member' : 'Add Faculty Member'}
          </button>
        )}
      </div>
    </form>
  );
}
