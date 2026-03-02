'use client';

import { useState, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Loader2, X, UserCircle2 } from 'lucide-react';
import { useAdminCollege } from '../AdminCollegeContext';

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
];

interface FacultyFormProps {
  member?: {
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
  };
}

export default function FacultyForm({ member }: FacultyFormProps) {
  const isEdit = !!member;
  const router = useRouter();
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const collegeId = useAdminCollege();

  const [name, setName] = useState(member?.name ?? '');
  const [designation, setDesignation] = useState(member?.designation ?? 'Assistant Professor');
  const [department, setDepartment] = useState(member?.department ?? '');
  const [qualification, setQualification] = useState(member?.qualification ?? '');
  const [experienceYears, setExperienceYears] = useState(member?.experience_years?.toString() ?? '0');
  const [email, setEmail] = useState(member?.email ?? '');
  const [displayOrder, setDisplayOrder] = useState(member?.display_order?.toString() ?? '0');
  const [isActive, setIsActive] = useState(member?.is_active ?? true);
  const [photoUrl, setPhotoUrl] = useState(member?.photo_url ?? '');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState(member?.photo_url ?? '');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

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
    const { data: { publicUrl } } = supabase.storage.from('faculty-photos').getPublicUrl(data.path);
    return publicUrl;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return toast.error('Name is required.');
    setSaving(true);

    const memberId = isEdit ? member.id : crypto.randomUUID();

    const uploadedUrl = await uploadPhoto(memberId);
    if (photoFile && uploadedUrl === null) { setSaving(false); return; }

    const payload = {
      college_id: collegeId,
      name: name.trim(),
      designation: designation.trim(),
      department: department.trim(),
      qualification: qualification.trim(),
      experience_years: parseInt(experienceYears) || 0,
      email: email.trim(),
      display_order: parseInt(displayOrder) || 0,
      is_active: isActive,
      photo_url: uploadedUrl ?? '',
      updated_at: new Date().toISOString(),
    };

    let error;
    if (isEdit) {
      ({ error } = await supabase.from('faculty').update(payload).eq('id', member.id));
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {/* Photo Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Photo</label>
        <div className="flex items-start gap-4">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="relative w-24 h-24 rounded-2xl border-2 border-dashed border-gray-200 overflow-hidden cursor-pointer hover:border-[#006837] transition flex-shrink-0"
          >
            {photoPreview ? (
              <>
                <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
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
            <p className="font-medium text-gray-700 mb-1">Upload faculty photo</p>
            <p>Click the box to select an image.</p>
            <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 5MB. Square photos work best.</p>
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handlePhotoSelect}
          className="hidden"
        />
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Dr. Firstname Lastname"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
        />
      </div>

      {/* Designation & Department */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Designation</label>
          <select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition bg-white"
          >
            {DESIGNATIONS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="e.g. B.Ed Mathematics"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
          />
        </div>
      </div>

      {/* Qualification */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Qualification</label>
        <input
          type="text"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          placeholder="e.g. M.Sc., B.Ed., M.Phil., Ph.D."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
        />
      </div>

      {/* Experience, Email, Display Order */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Experience (years)</label>
          <input
            type="number"
            min="0"
            value={experienceYears}
            onChange={(e) => setExperienceYears(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@jkkn.ac.in"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Display Order</label>
          <input
            type="number"
            min="0"
            value={displayOrder}
            onChange={(e) => setDisplayOrder(e.target.value)}
            placeholder="0"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
          />
          <p className="text-xs text-gray-400 mt-1">Lower = appears first</p>
        </div>
      </div>

      {/* Active Status */}
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
          {isActive ? 'Active (visible on faculty page)' : 'Inactive (hidden from site)'}
        </span>
      </div>

      {/* Submit */}
      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving || uploading}
          className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#005a2e] transition disabled:opacity-50"
        >
          {(saving || uploading) && <Loader2 className="w-4 h-4 animate-spin" />}
          {isEdit ? 'Update Member' : 'Add Faculty Member'}
        </button>
      </div>
    </form>
  );
}
