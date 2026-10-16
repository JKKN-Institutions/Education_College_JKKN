// A button that opens the homepage enquiry modal, or — on any page without the modal — renders
// the original jkkn.ai link unchanged. One component so Header, Hero and CTASection cannot drift.

"use client"

import type { ReactNode } from "react"
import { useEnquiryModal } from "@/components/lead/EnquiryModal"

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
}

export default function EnquiryButton({ sourcePage, className, children, fallbackHref, fallbackLabel, onClick }: Props) {
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
        modal.openEnquiry(sourcePage)
      }}
    >
      {children}
    </button>
  )
}
