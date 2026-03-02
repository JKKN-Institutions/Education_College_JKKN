'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRightLeft, Loader2 } from 'lucide-react';

export default function CollegeSwitchButton({
  collegeId,
  collegeName,
}: {
  collegeId: string;
  collegeName: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSwitch() {
    setLoading(true);
    try {
      await fetch('/api/admin/switch-college', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ college_id: collegeId }),
      });
      router.push('/admin/dashboard');
      router.refresh();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleSwitch}
      disabled={loading}
      className="w-full flex items-center justify-center gap-2 text-sm font-medium text-[#006837] border border-[#006837]/30 rounded-xl py-2 hover:bg-green-50 transition disabled:opacity-50"
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <ArrowRightLeft className="w-4 h-4" />
      )}
      {loading ? 'Switching…' : `Manage ${collegeName.split(' ').slice(-2).join(' ')}`}
    </button>
  );
}
