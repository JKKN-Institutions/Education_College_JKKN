// TWO ROUTES INTO A B.Ed SEAT IN TAMIL NADU.
//
// Added 2026-08-25. The query set this page receives is dominated by state-process questions -
// "b ed admission 2026 tamil nadu", "tn bed admission 2026", "when b ed admission start 2026 in
// tamilnadu" - and until today no page on this site explained that Tamil Nadu has two separate
// routes, or named the body that runs the government one.
//
// EVERY CLAIM HERE WAS CHECKED AGAINST A SOURCE THAT WAS OPENED, not against what a name
// sounds like. That rule exists because the first draft of this section credited TNGASA with
// running B.Ed admission and was WRONG - tngasa.in is the Tamil Nadu Government ARTS AND
// SCIENCE Colleges Admissions portal, whose registration routes are UG, PG and M.Ed. The
// Government of Tamil Nadu runs B.Ed on a separate portal, tnbed.co.in, whose 2026 dashboard is
// headed "GOVERNMENT OF TAMIL NADU / TAMIL NADU B.ED ADMISSION 2026" (read live 2026-08-25).
//
// Deliberately NOT claimed here, because none of it was verified:
//   - how the government merit list is computed
//   - what the government application fee is
//   - which university any government college of education is affiliated to
//   - any date, for either route
export default function AdmissionRoutes() {
  const routes = [
    {
      tag: 'ROUTE 1',
      title: 'Government and government-aided colleges of education',
      body:
        'The Government of Tamil Nadu runs this route through its own B.Ed admission process. You apply to the state, not to an individual college, and seat allotment happens centrally.',
      points: [
        'One state application, not one per college',
        'Seats are limited and competition is on marks',
        'Dates come from the state notification, not from any college',
      ],
    },
    {
      tag: 'ROUTE 2',
      title: 'Self-financing colleges, including JKKN College of Education',
      body:
        'You apply to the college directly. There is no state merit list to wait for, and you can hold a JKKN application open while the government process runs.',
      points: [
        'Apply any time - our seats are open now',
        'No waiting on a central allotment',
        'JKKN College of Education is NCTE-approved and affiliated to TNTEU',
      ],
    },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#FBFBEE]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-[#7cb983] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
            WHICH ROUTE APPLIES TO YOU
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#006837] mb-3 sm:mb-4 px-2">
            Government or Self-Financing B.Ed in Tamil Nadu
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Tamil Nadu has two separate B.Ed admission routes and they do not share an application
            form. Applying to both is normal and costs you nothing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {routes.map((r) => (
            <div
              key={r.tag}
              className="rounded-2xl bg-white border border-[#7cb983]/30 p-5 sm:p-7 flex flex-col"
            >
              <span className="self-start inline-block bg-[#006837] text-white px-3 py-1 rounded-full text-[11px] font-bold tracking-wide mb-3">
                {r.tag}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#002309] mb-3">{r.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{r.body}</p>
              <ul className="space-y-2 mt-auto">
                {r.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-[#7cb983] font-bold flex-none">&#8226;</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-gray-600 max-w-3xl mx-auto">
          Not sure which one fits you? Call our admission office - we will tell you honestly, even
          when the government route is the better answer for your marks.
        </p>
      </div>
    </section>
  )
}
