// A button that opens the enquiry modal (on every page since 2026-10-22), or — on a page rendered
// without the modal provider — renders the original jkkn.ai link unchanged. One component so Header, Hero and CTASection cannot drift.

"use client"

import type { ReactNode } from "react"
import { useEnquiryModal } from "@/components/lead/EnquiryModal"
import { ENQUIRY_DONE_KEY, readStore } from "@/lib/enquiry-store"
import { sendGaEvent } from "@/lib/ga-event"
import { telGateUrl, type GateIntent } from "@/lib/call-gate"

type Props = {
  /** Tags the lead in the CRM as utm_campaign dental-<sourcePage>. */
  sourcePage: string
  className: string
  /** Label when the modal is available (homepage). */
  children: ReactNode
  /** The link and label this button had before — used everywhere else. */
  fallbackHref: string
  fallbackLabel: ReactNode
  /** Extra work on click, e.g. closing the mobile menu. */
  onClick?: () => void
  /** "call" = the Call / WhatsApp gate (lib/call-gate.ts): the form's button reads "Call Counsellor"
   *  and one tap sends the lead and opens the dialer. Used by the homepage buttons that read "Get a
   *  Call Back" (2026-11-04, same change as the Dental site after a live test there). */
  intent?: GateIntent
}

export default function EnquiryButton({ sourcePage, className, children, fallbackHref, fallbackLabel, onClick, intent }: Props) {
  const modal = useEnquiryModal()

  if (!modal) {
    return (
      <a href={fallbackHref} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {fallbackLabel}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.()
        // Same rule as a gated tel: link: a visitor the CRM already accepted on this browser is a
        // lead already, so the tap dials straight away (inside the tap, so the phone allows it).
        if (intent === "call" && readStore(ENQUIRY_DONE_KEY)) {
          sendGaEvent("gate_call_bypass", { reason: "already_enquired", page_path: window.location.pathname })
          window.location.assign(telGateUrl)
          return
        }
        modal.openEnquiry(sourcePage, { intent })
      }}
    >
      {children}
    </button>
  )
}
