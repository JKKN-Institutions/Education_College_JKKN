// Homepage enquiry modal — the same pattern that went live on the Dental homepage on 2026-10-16
// (DEP-48). Every Apply button on the homepage used to open jkkn.ai in a new tab with 6 boxes and
// a 7-college list. This modal shows the site's own 3-box enquiry form, which posts into the SAME
// jkkn.ai form (jkkn-admission-2026) — so the lead lands in the same CRM list without the trip.
//
// WHY NOT AN IFRAME OF THE jkkn.ai PAGE. jkkn.ai answers with X-Frame-Options: SAMEORIGIN
// (checked 2026-10-16), so the browser refuses to show it inside this site.
//
// SCOPE. Since 2026-10-22 the provider wraps every public page (components/LayoutWrapper.tsx),
// user's choice, same as Dental: the header "Enquire Now" opens this form on all pages, and so does
// every jkkn.ai/apply link (the click listener below). The homepage popup still opens only on the
// homepage (HomePopup is mounted in app/page.tsx). Outside a provider (/admin) useEnquiryModal()
// still returns null and EnquiryButton falls back to its jkkn.ai link, so a page rendered without
// the wrapper degrades to the old behaviour instead of breaking.

"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import EducationEnquiryForm from "@/components/lead/EducationEnquiryForm"
import { sendGaEvent } from "@/lib/ga-event"
import { campaignTagsSnapshot, parseCampaignTags, tagApplyHref } from "@/lib/campaign-tags"

const APPLY_HREF = "https://www.jkkn.ai/apply/jkkn-admission-2026?utm_source=edu.jkkn.ac.in"
const SITE_HOST = "edu.jkkn.ac.in"

type OpenOptions = { withPoster?: boolean }
type EnquiryModalApi = { openEnquiry: (sourcePage: string, options?: OpenOptions) => void }
type OpenState = { sourcePage: string; withPoster: boolean }

const EnquiryModalContext = createContext<EnquiryModalApi | null>(null)

/** null outside the provider — callers must fall back to their ordinary link. */
export function useEnquiryModal() {
  return useContext(EnquiryModalContext)
}

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<OpenState | null>(null)

  const openEnquiry = useCallback((source: string, options?: OpenOptions) => {
    // Only where the modal was opened from — no name, no phone.
    sendGaEvent("enquiry_open", { source_page: source, page_path: window.location.pathname })
    setOpen({ sourcePage: source, withPoster: !!options?.withPoster })
  }, [])

  const close = useCallback(() => setOpen(null), [])
  const api = useMemo(() => ({ openEnquiry }), [openEnquiry])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open, close])

  // Every jkkn.ai/apply link on the site opens this form instead (user's choice 2026-10-22: the
  // in-page "Apply Now" buttons open the 3-box form; the full application stays one tap away inside
  // the dialog). One listener here rather than dozens of edited links: the links stay real
  // <a href>s, so without JavaScript, or on a Ctrl / Shift / middle click, they still open jkkn.ai
  // as before. A link marked data-full-application (the small one in the dialog) is never caught.
  // The link's own onClick still runs, so the old apply_click GA event now counts dialog opens
  // (here apply_click is derived by a GA4 rule from the jkkn.ai/apply link click - see
  // components/analytics/ConversionTracking.tsx).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element | null)?.closest?.('a[href*="jkkn.ai/apply"]')
      if (!link || link.hasAttribute("data-full-application")) return
      e.preventDefault()
      const path = window.location.pathname.replace(/\/+$/, "").replace(/\//g, "-") || "-home"
      openEnquiry(`apply-link${path}`.slice(0, 60))
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [openEnquiry])

  // Campaign tags (lib/campaign-tags.ts, 2026-10-31). Store the ones this visit arrived with, and put
  // them on a jkkn.ai/apply link just before it is followed - new-tab click, long-press, right-click,
  // keyboard - so the CRM sees the ad / QR / WhatsApp source instead of the site's own name. The
  // dialog's full-application link is included. A visit with no tags changes nothing but "organic".
  useEffect(() => {
    campaignTagsSnapshot()
    const tag = (e: Event) => {
      const link = (e.target as Element | null)?.closest?.('a[href*="jkkn.ai/apply"]') as HTMLAnchorElement | null
      if (!link) return
      const path = window.location.pathname.replace(/\/+$/, "").replace(/\//g, "-") || "-home"
      const next = tagApplyHref(link.href, parseCampaignTags(campaignTagsSnapshot()), {
        utmSource: SITE_HOST,
        utmCampaign: `education-apply-link${path}`,
      })
      if (next !== link.href) link.href = next
    }
    const events = ["pointerdown", "contextmenu", "focusin"] as const
    for (const type of events) document.addEventListener(type, tag, true)
    return () => {
      for (const type of events) document.removeEventListener(type, tag, true)
    }
  }, [])

  return (
    <EnquiryModalContext.Provider value={api}>
      {children}
      {open && <EnquiryDialog sourcePage={open.sourcePage} withPoster={open.withPoster} onClose={close} />}
    </EnquiryModalContext.Provider>
  )
}

// The backdrop does NOT close the dialog: on a phone a thumb near the edge would throw away a
// half-typed form. Close = the 44 px X button or Escape.
//
// withPoster (the homepage popup, user's choice 2026-10-16: "poster + form rendume ore popup la"):
// phone = small poster beside the heading, form below, so the Get a Call Back button still sits
// inside one screen; md and up = poster on the left, form on the right. The poster is no longer a
// link to jkkn.ai — a tap on it moves the cursor into the Name box instead, so the tap that used to
// open another site now starts this form.
function EnquiryDialog({
  sourcePage,
  withPoster,
  onClose,
}: {
  sourcePage: string
  withPoster: boolean
  onClose: () => void
}) {
  const focusForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    const box = e.currentTarget.closest("[role=dialog]")?.querySelector<HTMLInputElement>("input[name=name]")
    box?.focus()
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-dialog-title"
        className={`relative w-full max-h-[90vh] overflow-y-auto rounded-[20px] bg-white p-5 sm:p-6 shadow-2xl ${
          withPoster ? "max-w-sm md:max-w-3xl" : "max-w-sm lg:max-w-md"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f7f3] shadow-lg hover:bg-[#e3ece6] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <div
          className={
            withPoster
              ? "grid grid-cols-[124px_minmax(0,1fr)] gap-x-4 gap-y-4 md:grid-cols-[300px_minmax(0,1fr)] md:gap-x-6 md:items-center"
              : ""
          }
        >
          {withPoster && (
            <button
              type="button"
              onClick={focusForm}
              aria-label="Fill the enquiry form"
              className="col-start-1 row-start-1 md:row-span-2 self-start md:self-center block rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src="/images/education-pop-up-poster.webp"
                alt="JKKN College of Education admission poster"
                width={500}
                height={500}
                className="w-full h-auto"
                sizes="(max-width: 768px) 124px, 300px"
              />
            </button>
          )}

          <div className={withPoster ? "col-start-2 row-start-1 self-center md:self-end" : ""}>
            {/* The panel itself is the white card of mockup #7 (2026-10-22), so the form renders
                bare and its 3-step strip replaces the old "Fill 3 details..." sub-line. */}
            <p id="enquiry-dialog-title" className={`font-bold leading-snug text-[#032816] ${withPoster ? "text-base sm:text-lg pr-10 md:pr-12" : "text-lg pr-12 mb-4"}`}>
              Get B.Ed fee and admission details
            </p>
          </div>

          <div className={withPoster ? "col-span-2 md:col-span-1 md:col-start-2 md:row-start-2 md:self-start" : ""}>
            <EducationEnquiryForm sourcePage={sourcePage} compact bare />
            {/* The full jkkn.ai application stays one tap away for people ready to apply now
                (user's choice 2026-10-22: apply links open this form, jkkn.ai becomes a small link).
                data-full-application keeps the apply-link listener above from catching it. */}
            <p className="mt-3 text-center text-xs text-[#4b5563]">
              Ready to apply now?{" "}
              <a
                href={`${APPLY_HREF}&utm_campaign=education-${sourcePage}`}
                target="_blank"
                rel="noopener noreferrer"
                data-full-application
                className="text-[#0b6d41] font-semibold underline"
              >
                Fill the full application form
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
