"use client";

// Homepage popup — poster AND the 3-box enquiry form in one popup, the pattern the user chose for
// the Dental homepage on 2026-10-16 (DEP-48). The poster used to be a link to jkkn.ai in a new
// tab; now a tap on it moves the cursor into the Name box. The lead is tagged <college>-home-popup.
// Once a visitor has submitted the enquiry form anywhere on this site, the popup stops.
// Mounted only in app/page.tsx, so it still opens on the homepage only, although the modal
// provider wraps every page since 2026-10-22. Without a provider the old poster is the fallback.

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useEnquiryModal } from "@/components/lead/EnquiryModal";
import { ENQUIRY_DONE_KEY, readStore } from "@/lib/enquiry-store";
import { sendGaEvent } from "@/lib/ga-event";

export function HomePopup() {
  const modal = useEnquiryModal();
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    if (readStore(ENQUIRY_DONE_KEY)) return;

    const variant = modal ? "poster_form" : "poster";
    sendGaEvent("popup_view", { popup_variant: variant, page_path: window.location.pathname });

    if (modal) modal.openEnquiry("home-popup", { withPoster: true });
    else setShowPoster(true);
    // Runs once per page load, like the poster did. `modal` is stable for the page's lifetime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!showPoster) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg" style={{ maxHeight: "90vh" }}>
        <button
          onClick={() => setShowPoster(false)}
          className="absolute -top-3 -right-3 z-10 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        <a href="https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=edu.jkkn.ac.in&utm_medium=organic&utm_campaign=components-homepopup" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/education-pop-up-poster.webp"
            alt="JKKN College of Education admission poster"
            width={500}
            height={500}
            className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
