// DEP-34 — the CRM programme list for JKKN College of Education.
//
// WHY THIS IS ITS OWN FILE AND NOT PART OF THE SERVER ACTION.
// A Next.js `'use server'` module may only export async functions. On the Arts build this array
// sat inside the action file, the build stripped it, and the page died at prerender with
// `TypeError: j.map is not a function` — while `tsc --noEmit` reported zero errors. Measured
// 2026-08-16. Plain data stays out of 'use server' files.
//
// Verified live against GET https://www.jkkn.ai/api/public/forms/jkkn-admission-2026 on
// 2026-08-16. The CRM holds ELEVEN rows for this institution and only TEN are offered here.
//
// THE ONE THAT IS DELIBERATELY EXCLUDED: "B.Ed (Historical Aggregate)", id dabfdd5b-159a-...
// That is a data-migration bucket, not a programme anyone applies to. Putting it in a dropdown
// would invite a parent to pick it and would file a real enquiry into a historical bin. If it
// ever turns out to be a live programme, add it back — but it should be named properly first.

export const EDUCATION_INSTITUTION_ID = "9380358f-7020-4c23-89c3-e9538b47cf33"

export type EducationProgramme = { id: string; label: string }

export const EDUCATION_PROGRAMMES: ReadonlyArray<EducationProgramme> = [
  { id: "de176e31-2fe8-431c-857f-35fcd5f6c40e", label: "B.Ed — Tamil" },
  { id: "dceeea1a-79a1-48bc-885f-351bfd9800aa", label: "B.Ed — English" },
  { id: "e0664e7e-b4c9-4927-a919-74e4bd3cdb74", label: "B.Ed — Mathematics" },
  { id: "c3ac44db-6cfd-4a7d-948e-95977ca2234d", label: "B.Ed — Physical Science" },
  { id: "fe43f2c7-0d3d-4c19-ac2e-ad85d1c4a9a9", label: "B.Ed — Biological Science" },
  { id: "db10bd63-da82-420c-88e6-ae34fcafe1ff", label: "B.Ed — Social Science" },
  { id: "f6709bd9-dc91-4320-83c2-1403c820678e", label: "B.Ed — History" },
  { id: "149ac1a4-c6f0-415f-b343-96e9a1d87023", label: "B.Ed — Economics" },
  { id: "662cb4b4-84f8-4888-8dad-c8902840e832", label: "B.Ed — Commerce and Accountancy" },
  { id: "ce4d19b0-afad-4ac9-acfa-638ed68305cb", label: "B.Ed — Computer Science" },
]

export const VALID_EDUCATION_PROGRAMME_IDS: ReadonlySet<string> = new Set(
  EDUCATION_PROGRAMMES.map((p) => p.id)
)

// Pre-selects the dropdown on a department page. ONLY the eight departments whose name matches a
// CRM pedagogy exactly are listed. The other six — botany, zoology, microbiology, chemistry,
// physics, political-science — are NOT here on purpose. Mapping zoology to "Biological Science"
// or physics to "Physical Science" is the ordinary Indian B.Ed convention and is very probably
// right, but it is an inference about someone else's data, not a reading of it. Those pages open
// on "Select a Programme" and the applicant chooses. Same rule as nursing's five M.Sc rows,
// pharmacy's six M.Pharm rows and dental's five MDS rows: where there is no measured answer,
// do not guess on the applicant's behalf.
export const DEFAULT_PROGRAMME_BY_DEPARTMENT: Readonly<Record<string, string>> = {
  tamil: "de176e31-2fe8-431c-857f-35fcd5f6c40e",
  english: "dceeea1a-79a1-48bc-885f-351bfd9800aa",
  maths: "e0664e7e-b4c9-4927-a919-74e4bd3cdb74",
  history: "f6709bd9-dc91-4320-83c2-1403c820678e",
  economics: "149ac1a4-c6f0-415f-b343-96e9a1d87023",
  commerce: "662cb4b4-84f8-4888-8dad-c8902840e832",
  "computer-science": "ce4d19b0-afad-4ac9-acfa-638ed68305cb",
  "social-science": "db10bd63-da82-420c-88e6-ae34fcafe1ff",
}
