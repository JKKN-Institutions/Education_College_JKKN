// Shared FAQ source of truth.
// Imported by BOTH app/faq/page.tsx (to emit FAQPage JSON-LD on the server) and
// app/faq/FAQClient.tsx (to render the accordion), so the schema and the visible
// text can never drift apart.

export interface FaqItem {
  category: string
  question: string
  answer: string
}

export const allFaqs: FaqItem[] = [
  {
    category: 'admission',
    question: 'What is the eligibility criteria for B.Ed admission at JKKN?',
    answer: "Candidates must hold a Bachelor's degree (BA/B.Sc/B.Com/BCA/BBA or equivalent) from a recognized university with a minimum of 50% aggregate marks for General Category and 45% for Reserved Categories (SC/ST/OBC/PWD). Candidates appearing for final year exams may also apply provisionally.",
  },
  {
    category: 'admission',
    question: 'Is there an entrance exam for B.Ed admission?',
    answer: 'For JKKN self-financing seats you apply to the college directly - there is no state merit list to wait for. Government-quota seats are filled through the state counselling process in the Tamil Nadu B.Ed admission notification; follow that notification for its selection rules.',
  },
  {
    category: 'admission',
    question: 'What is the counselling process for B.Ed admission?',
    answer: 'Counselling applies to government-quota seats: candidates apply under the Tamil Nadu B.Ed admission notification, and seats are allotted on merit, category and availability. JKKN self-financing seats have no counselling: you apply to the college, choose your B.Ed subject from 14 specialisations, and confirm admission by paying the fee.',
  },
  {
    category: 'admission',
    question: 'What documents are required for B.Ed admission?',
    answer: 'Required documents include: 10th & 12th mark sheets and certificates, graduation degree certificate and all semester mark sheets, transfer certificate (TC), migration certificate (if applicable), community certificate (for reserved categories), income certificate, Aadhaar card, and 4 passport-size photographs.',
  },
  {
    category: 'program',
    question: 'What is the duration of the B.Ed program?',
    answer: 'The B.Ed program is a 2-year full-time professional degree course spread across 4 semesters, as per NCTE norms. The program includes theoretical coursework, practical training, micro-teaching sessions, and a comprehensive 16-week school internship.',
  },
  {
    category: 'program',
    question: 'Is JKKN College of Education NCTE approved?',
    answer: 'Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. Our B.Ed degree is recognized nationwide and valid for teacher recruitment in all states.',
  },
  {
    category: 'program',
    question: 'How is the school internship program structured?',
    answer: 'The school internship is spread across three phases during the program. Students undergo teaching practice at partner schools, starting with observation and assisted teaching, progressing to independent lesson delivery, and culminating in full classroom responsibility with continuous mentoring and assessment.',
  },
  {
    category: 'program',
    question: 'How many B.Ed specializations are offered?',
    answer: 'JKKN College of Education offers 14 B.Ed specializations: Tamil, English, Mathematics, Physics, Chemistry, Botany, Zoology, Microbiology, Commerce, Economics, History, Political Science, Social Science, and Computer Science.',
  },
  {
    category: 'fees',
    question: 'What is the fee structure for B.Ed at JKKN College of Education?',
    answer: 'The B.Ed tuition fee at JKKN College of Education is ₹35,000 per year under the Management Quota. Various scholarships are available for BC/MBC/SC/ST candidates. Contact the admission office at +91 93458 55001 for detailed fee information.',
  },
  {
    category: 'fees',
    question: 'Are scholarships available for B.Ed students?',
    answer: 'Yes, various scholarships are available including Tamil Nadu government scholarships for BC/MBC/SC/ST students, merit-based scholarships, economically weaker section (EWS) concessions, and special scholarships for differently-abled candidates. Our admission office assists students in applying for all eligible scholarships.',
  },
  {
    category: 'campus',
    question: 'Is hostel facility available for B.Ed students?',
    answer: 'Yes, separate hostel facilities are available for both male and female students within the JKKN campus. The hostels provide comfortable accommodation, nutritious food, Wi-Fi connectivity, 24/7 security, laundry service, and a conducive environment for academic pursuits.',
  },
  {
    category: 'campus',
    question: 'What other campus facilities are available?',
    answer: 'The campus offers a well-equipped library, computer lab, science labs, smart classrooms, auditorium, food court, medical/ambulance services, bank and post office facility, sports grounds, and a dedicated placement cell to support student life and career development.',
  },
  {
    category: 'career',
    question: 'What career opportunities are available after B.Ed?',
    answer: "B.Ed graduates can become teachers in government and private schools (CBSE/ICSE/State Board), pursue higher education (M.Ed, Ph.D), work as curriculum developers, education consultants, content writers, or join educational administration. JKKN provides placement support along with TNTET/TRB guidance.",
  },
  {
    category: 'career',
    question: 'Can I pursue M.Ed after completing B.Ed?',
    answer: 'Yes, after completing B.Ed, you can pursue M.Ed (Master of Education) to become a teacher educator, pursue Ph.D in Education for research careers, or specialize further with MA in your subject area. JKKN provides guidance for higher education pathways.',
  },
  {
    category: 'career',
    question: 'Can B.Ed graduates teach in CBSE or ICSE schools?',
    answer: 'Yes, B.Ed graduates are eligible to teach in all types of schools including CBSE, ICSE, State Board, and International Baccalaureate (IB) schools at secondary (Classes 6–10) and higher secondary (Classes 11–12) levels across India.',
  },
]
