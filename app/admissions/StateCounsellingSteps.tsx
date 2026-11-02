// HOW TAMIL NADU B.Ed COUNSELLING WORKS - the state route, step by step.
//
// Added 2026-11-02, Step 2 of the 10,300-lead plan. Searchers arriving here since the CAS 308
// ask "b.ed counselling 2026 tamilnadu", "tn bed admission 2026", "b.ed application form 2026"
// - this page answered WHICH route applies (AdmissionRoutes) but never HOW the state route runs.
//
// Every step is read from an official document, opened 2026-11-02:
//   - "Procedure for applying Tamil Nadu Government and Government-aided Colleges of Education
//     B.Ed. Admissions - 2026 (TNGASAEDU - 2026)", static.tneaonline.org (text layer, 16 pages)
//   - G.O.(D) No.144, Higher Education (G1) Department, 18.06.2026 - fee (VI), original
//     certificates (VII.5), downloaded application (VII.3), physical fitness (VII.8),
//     rank list per subject (V.1(vi)). Scanned PDF: pages 9-11 checked as images.
// NO DATE is printed: the 2026 schedule was found only in news reports, never in an official
// copy, and no 2027-28 notice existed on 2026-11-02. When the 2027-28 G.O. / notification is
// out, re-read it - the portal, fee or steps may change.

const GO_144_URL = 'https://cms.tn.gov.in/cms_migrated/document/GO/hedu_e_%20144_D_2026.pdf'
const PROCEDURE_URL = 'https://static.tneaonline.org/docs/arts/english_instruction_bed_2026.pdf'

export default function StateCounsellingSteps() {
  const steps = [
    {
      title: 'Register on the state portal',
      body: 'Create an account with your mobile number and email and verify the OTP. In 2026-27 the portal was www.tngasa.in. No internet? Apply at an Admission Facilitation Centre (AFC) in a Government or Government-aided college of education.',
    },
    {
      title: 'Fill your details',
      body: 'Personal details (Aadhaar, UMIS and EMIS numbers are asked), special reservation (sports, ex-servicemen, differently abled, NCC, NSS), academic details and your degree marks.',
    },
    {
      title: 'Upload certificates',
      body: 'The U.G. consolidated mark statement is mandatory. Upload your community certificate and any special reservation certificate. P.G., M.Phil. and Ph.D. certificates are optional and earn weightage.',
    },
    {
      title: 'Pay the application fee online',
      body: 'Rs.500, or Rs.250 for SC/SCA/ST candidates - one application covers all Government and Government-aided colleges (G.O.(D) No.144).',
    },
    {
      title: 'Download your application',
      body: 'Keep the downloaded application. You must produce it at counselling or admission.',
    },
    {
      title: 'Rank list',
      body: 'The rank list is published on the official website - a common and a community-wise list for each subject.',
    },
    {
      title: 'Choice filling',
      body: 'Enter the colleges and subjects you want, in your order of preference.',
    },
    {
      title: 'Allotment order',
      body: 'Seats are allotted on your preferences, community reservation and merit rank. Download the allotment order with your login.',
    },
    {
      title: 'Report to the allotted college',
      body: 'Go in person with all original certificates. Submit a physical fitness certificate from a Government Civil Surgeon or Civil Assistant Surgeon by the date in your allotment order.',
    },
  ]

  return (
    <section id="state-counselling-steps" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            ROUTE 1 - STEP BY STEP
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
            How Tamil Nadu B.Ed Counselling Works
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-2">
            For Government and Government-aided colleges of education only. JKKN College of
            Education is self-financing: for our seats you apply to the college directly and skip
            these steps.
          </p>
        </div>

        <ol className="space-y-3 sm:space-y-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-3 sm:gap-4 rounded-xl border border-[#7cb983]/30 bg-[#FBFBEE] p-4 sm:p-5">
              <span className="flex-none flex h-8 w-8 items-center justify-center rounded-full bg-[#006837] text-sm font-bold text-white">
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-[#002309] mb-1">{s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-xs sm:text-sm text-gray-500 leading-relaxed">
          Source: the 2026-27 rules -{' '}
          <a href={GO_144_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#006837] underline underline-offset-2">
            G.O.(D) No.144, Higher Education Department, 18.06.2026
          </a>{' '}
          and the{' '}
          <a href={PROCEDURE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#006837] underline underline-offset-2">
            TNGASAEDU-2026 application procedure
          </a>
          . The 2027-28 notification is not out yet (as of 2 November 2026) and may change the
          portal, the fee or the steps.
        </p>
      </div>
    </section>
  )
}
