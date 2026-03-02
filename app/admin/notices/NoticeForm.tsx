'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { useAdminCollege } from '../AdminCollegeContext';

interface NoticeFormProps {
  notice?: {
    id: string;
    title: string;
    created_at: string;
  };
}

export default function NoticeForm({ notice }: NoticeFormProps) {
  const isEdit = !!notice;
  const router = useRouter();
  const supabase = createClient();
  const collegeId = useAdminCollege();

  const todayStr = new Date().toISOString().split('T')[0];

  const [noticeText, setNoticeText] = useState(notice?.title ?? '');
  const [noticeDate, setNoticeDate] = useState(
    notice?.created_at ? notice.created_at.split('T')[0] : todayStr
  );
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!noticeText.trim()) return toast.error('Notice text is required.');
    setSaving(true);

    const payload = {
      college_id: collegeId,
      title: noticeText.trim(),
      content: '',
      notice_type: 'general',
      is_active: true,
      expires_at: null,
      attachment_url: '',
      updated_at: new Date().toISOString(),
      created_at: new Date(noticeDate).toISOString(),
    };

    let error;
    if (isEdit) {
      ({ error } = await supabase.from('notices').update(payload).eq('id', notice.id));
    } else {
      ({ error } = await supabase.from('notices').insert(payload));
    }

    setSaving(false);
    if (error) {
      toast.error('Save failed: ' + error.message);
    } else {
      toast.success(isEdit ? 'Notice updated!' : 'Notice created!');
      router.push('/admin/notices');
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Date</label>
        <input
          type="date"
          value={noticeDate}
          onChange={(e) => setNoticeDate(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition"
        />
      </div>

      {/* Notice */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Notice</label>
        <textarea
          value={noticeText}
          onChange={(e) => setNoticeText(e.target.value)}
          rows={4}
          required
          placeholder="Enter notice text..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#006837] transition resize-none"
        />
      </div>

      {/* Submit */}
      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-2 bg-[#006837] text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#004d28] transition disabled:opacity-50"
        >
          {saving && <Loader2 className="w-4 h-4 animate-spin" />}
          {isEdit ? 'Update Notice' : 'Save Notice'}
        </button>
      </div>
    </form>
  );
}
