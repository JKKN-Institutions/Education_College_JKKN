'use client';

import { useState, useRef } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Loader2, X, ImageIcon } from 'lucide-react';
import { useAdminCollege } from '../AdminCollegeContext';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

interface EventFormProps {
  event?: {
    id: string;
    title: string;
    slug: string;
    description: string;
    event_date: string;
    event_time: string;
    venue: string;
    image_url: string;
    is_published: boolean;
  };
}

export default function EventForm({ event }: EventFormProps) {
  const isEdit = !!event;
  const router = useRouter();
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const collegeId = useAdminCollege();

  const [title, setTitle] = useState(event?.title ?? '');
  const [slug, setSlug] = useState(event?.slug ?? '');
  const [description, setDescription] = useState(event?.description ?? '');
  const [eventDate, setEventDate] = useState(event?.event_date ?? '');
  const [imageUrl, setImageUrl] = useState(event?.image_url ?? '');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(event?.image_url ?? '');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setTitle(val);
    if (!isEdit) setSlug(slugify(val));
  }

  function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  async function uploadImage(): Promise<string | null> {
    if (!imageFile) return imageUrl || null;
    setUploading(true);
    const ext = imageFile.name.split('.').pop();
    const fileName = `education/${new Date().getFullYear()}/${Date.now()}-${slugify(title || 'event')}.${ext}`;
    const { data, error } = await supabase.storage
      .from('event-images')
      .upload(fileName, imageFile, { upsert: true });
    setUploading(false);
    if (error) {
      toast.error('Image upload failed: ' + error.message);
      return null;
    }
    const { data: { publicUrl } } = supabase.storage.from('event-images').getPublicUrl(data.path);
    return publicUrl;
  }

  async function handleSubmit(e: React.FormEvent, publish: boolean) {
    e.preventDefault();
    if (!title.trim()) return toast.error('Title is required.');
    if (!slug.trim()) return toast.error('Slug is required.');
    setSaving(true);

    const uploadedUrl = await uploadImage();
    if (imageFile && !uploadedUrl) { setSaving(false); return; }


    const payload = {
      college_id: collegeId,
      title: title.trim(),
      slug: slug.trim(),
      description: description.trim(),
      event_date: eventDate || null,
      image_url: uploadedUrl ?? '',
      is_published: publish,
      updated_at: new Date().toISOString(),
    };

    let error;
    if (isEdit) {
      ({ error } = await supabase.from('events').update(payload).eq('id', event.id));
    } else {
      ({ error } = await supabase.from('events').insert({ ...payload, created_at: new Date().toISOString() }));
    }

    setSaving(false);
    if (error) {
      toast.error('Save failed: ' + error.message);
    } else {
      toast.success(isEdit ? 'Event updated!' : publish ? 'Event published!' : 'Draft saved!');
      router.push('/admin/events');
      router.refresh();
    }
  }

  return (
    <form className="space-y-6 max-w-2xl">
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Event Title *</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          required
          placeholder="e.g. Annual Day 2025"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">URL Slug *</label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400 bg-gray-50 border border-gray-200 rounded-l-xl px-3 py-3 whitespace-nowrap">
            /events/
          </span>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(slugify(e.target.value))}
            required
            placeholder="annual-day-2025"
            className="flex-1 px-4 py-3 border border-gray-200 rounded-r-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
          />
        </div>
      </div>

      {/* Event Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Event Date</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          placeholder="Describe the event..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition resize-none"
        />
      </div>

      {/* Cover Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Cover Image</label>
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-[#006837] hover:bg-green-50/30 transition"
        >
          {imagePreview ? (
            <div className="relative">
              <img src={imagePreview} alt="Preview" className="h-40 mx-auto rounded-lg object-cover" />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setImagePreview('');
                  setImageFile(null);
                  setImageUrl('');
                }}
                className="absolute top-1 right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <ImageIcon className="w-8 h-8" />
              <p className="text-sm">Click to upload event image</p>
              <p className="text-xs">JPG, PNG, WebP up to 5MB</p>
            </div>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
        />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="button"
          onClick={(e) => handleSubmit(e, false)}
          disabled={saving || uploading}
          className="flex items-center gap-2 border-2 border-gray-200 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-50 transition disabled:opacity-50"
        >
          {(saving || uploading) ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          Save as Draft
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, true)}
          disabled={saving || uploading}
          className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#005a2e] transition disabled:opacity-50"
        >
          {(saving || uploading) ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
          {isEdit ? 'Update & Publish' : 'Publish Event'}
        </button>
      </div>
    </form>
  );
}
