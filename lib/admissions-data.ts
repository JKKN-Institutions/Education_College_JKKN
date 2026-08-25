/**
 * Static admission data for all 14 B.Ed specialization courses
 * offered at JKKN College of Education.
 *
 * Used by /admission/[course]/page.tsx (course-wise admission pages).
 *
 * Common admission fields (timeline, documents, scholarships, application steps)
 * are kept as shared constants to avoid duplication; course-specific fields
 * (eligibility nuances, career outcomes, USPs, FAQs) live per course.
 */

export interface FeeBreakdown {
  label: string;
  amount: string;
  note?: string;
}

export interface TimelineEvent {
  phase: string;
  date: string;
  status: 'upcoming' | 'active' | 'closed';
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CourseAdmission {
  slug: string;
  name: string;            // Short subject name e.g. "Tamil"
  fullName: string;        // "B.Ed Tamil"
  longName: string;        // "Bachelor of Education in Tamil"
  tagline: string;
  heroDescription: string;
  iconLetter: string;
  bgImage?: string;

  // Core stats
  duration: string;
  durationDetail: string;
  totalSeats: number;
  semesters: number;
  mode: string;
  affiliation: string;
  approval: string;
  medium: string;

  // Eligibility
  eligibilityHeadline: string;
  eligibilityCriteria: {
    title: string;
    detail: string;
  }[];
  subjectRequirement: string;

  // Career
  careerRoles: string[];
  averageSalary: string;
  placementRate: string;
  topRecruiters: string[];

  // USPs
  whyChooseThis: {
    title: string;
    description: string;
  }[];

  // FAQs course-specific
  faqs: FAQItem[];
}

// ─────────── Shared admission constants ───────────

export const FEE_STRUCTURE: FeeBreakdown[] = [
  { label: 'Tuition Fee (per year)', amount: '₹35,000', note: 'Management Quota, as published in the JKKN fee structure' },
  { label: 'University Registration Fee', amount: '₹2,500', note: 'One-time, payable to TNTEU' },
  { label: 'Examination Fee', amount: '₹3,000', note: 'Per semester' },
  { label: 'Caution Deposit (Refundable)', amount: '₹5,000', note: 'Returned after course completion' },
  { label: 'Hostel Fee (Optional)', amount: '₹45,000 / year', note: 'AC & non-AC options available' },
  { label: 'Transport Fee (Optional)', amount: '₹15,000 – ₹25,000', note: 'Based on distance & route' },
];

// ADMISSION SEQUENCE - deliberately carries NO calendar date.
//
// Until 2026-08-25 this array published six invented dates across 15 live URLs, including
// "Application Deadline: June 30, 2026" still flagged upcoming almost two months after that
// date had passed, and "Application Opens: March 2026" flagged `active`, which renders a
// green LIVE badge. Tamil Nadu B.Ed dates are set by the state, not by this college, and no
// verified 2026-27 date exists in our own records - config/admission-windows.json in the SEO
// project carries "verified": false and states that no such date may be published, quoted to
// a parent, or written into a page.
//
// The `date` field therefore names WHO announces that step, never WHEN. If a verified date
// ever arrives from the admission office or an official notification, it goes here with its
// source recorded in the same commit - never as a guess, never as a "typical year".
//
// CORRECTION 2026-08-25, same day, hours after the first version shipped. The first version
// of this array credited TNGASA with announcing B.Ed dates. THAT WAS WRONG and it was live on
// 15 URLs for about an hour. tngasa.in was read directly and it is the Tamil Nadu Government
// ARTS AND SCIENCE Colleges Admissions portal - "a unified portal ... for one or more colleges
// among the 181 Government Arts and Science Colleges in Tamil Nadu". Its three registration
// links are UG, PG and M.Ed. There is no B.Ed route on it. The Government of Tamil Nadu runs
// B.Ed admission on a SEPARATE portal, tnbed.co.in, whose 2026 dashboard is headed "GOVERNMENT
// OF TAMIL NADU / TAMIL NADU B.ED ADMISSION 2026". Never name an authority on a page without
// opening its own site first.
export const ADMISSION_TIMELINE: TimelineEvent[] = [
  {
    phase: 'Application Opens',
    date: 'Announced by the state',
    status: 'upcoming',
    description:
      'Government and government-aided colleges of education open through the Tamil Nadu B.Ed admission portal. JKKN self-financing seats are open now - apply below.',
  },
  {
    phase: 'Application Deadline',
    date: 'Announced by the state',
    status: 'upcoming',
    description:
      'The state notification carries the last date. Call our admission office for the current cut-off on self-financing seats.',
  },
  {
    phase: 'Document Verification',
    date: 'After you apply',
    status: 'upcoming',
    description:
      'Original certificates are verified at the college admission office once your application is submitted.',
  },
  {
    phase: 'Counselling & Seat Allotment',
    date: 'Announced by the state',
    status: 'upcoming',
    description:
      'Merit-based counselling for the state route. Specialization preference is confirmed at this stage.',
  },
  {
    phase: 'Admission Confirmation',
    date: 'After seat allotment',
    status: 'upcoming',
    description: 'Fee payment and seat confirmation, followed by the welcome induction programme.',
  },
  {
    phase: 'Classes Commence',
    date: 'Per the TNTEU academic calendar',
    status: 'upcoming',
    description:
      'The academic year begins on the calendar published by Tamil Nadu Teachers Education University.',
  },
];

// Where the real dates are published. Every entry was opened and read on 2026-08-25, not
// assumed from its name - see the CORRECTION note above for why that rule now exists here.
export const ADMISSION_DATE_SOURCES = [
  {
    label: 'Tamil Nadu B.Ed Admission 2026 - the state portal',
    href: 'https://bed26status.tnbed.co.in/',
    note: 'Government of Tamil Nadu. Application status, counselling and grievance for the state route.',
  },
  {
    label: 'TNTEU - the university that awards the degree',
    href: 'https://tnteu.ac.in/',
    note: 'Tamil Nadu Teachers Education University. Academic calendar and examination schedule.',
  },
];

export const DOCUMENTS_REQUIRED = [
  '10th Standard mark sheet & certificate',
  '12th Standard / HSC mark sheet & certificate',
  'Graduation degree certificate (Provisional / Original)',
  'All semester/year mark sheets of Bachelor’s degree',
  'Transfer Certificate (TC) from last institution attended',
  'Conduct Certificate from previous college',
  'Community / Caste Certificate (for reserved categories)',
  'Income Certificate (for scholarship applicants)',
  'Aadhaar Card (mandatory) & PAN Card (optional)',
  'Migration Certificate (if from another university)',
  '4 recent passport-size colour photographs',
  'Medical Fitness Certificate from registered practitioner',
];

export const APPLICATION_STEPS = [
  {
    step: 1,
    title: 'Online Application',
    description: 'Visit our admission portal and complete the online application form with personal, academic, and contact details.',
  },
  {
    step: 2,
    title: 'Upload Documents',
    description: 'Scan and upload your 10th, 12th, and graduation mark sheets, photograph, signature, and ID proof.',
  },
  {
    step: 3,
    title: 'Pay Application Fee',
    description: 'Pay the non-refundable application fee online (UPI, Net Banking, Debit/Credit Card).',
  },
  {
    step: 4,
    title: 'Counselling Call',
    description: 'Shortlisted candidates receive a counselling call. Choose your B.Ed specialization based on merit & availability.',
  },
  {
    step: 5,
    title: 'Document Verification',
    description: 'Visit campus with originals on the scheduled date for verification by the admission committee.',
  },
  {
    step: 6,
    title: 'Fee Payment & Joining',
    description: 'Pay the first semester fee, collect ID card, and join the academic year induction programme.',
  },
];

export const SCHOLARSHIPS = [
  {
    name: 'Tamil Nadu Govt. Scholarship',
    eligibility: 'SC / ST / MBC / BC students',
    benefit: 'Full tuition fee reimbursement (subject to income criteria)',
  },
  {
    name: 'Merit Scholarship',
    eligibility: 'Top 10% of admitted candidates by graduation marks',
    benefit: 'Up to 25% tuition fee waiver',
  },
  {
    name: 'EWS Concession',
    eligibility: 'Economically Weaker Section candidates',
    benefit: '10% fee concession with valid EWS certificate',
  },
  {
    name: 'JKKN Sports & Arts Scholarship',
    eligibility: 'State/National level sports & cultural achievers',
    benefit: '₹10,000 – ₹50,000 annual support',
  },
  {
    name: 'Differently-Abled Scholarship',
    eligibility: 'PWD candidates with 40%+ disability',
    benefit: 'Full tuition fee waiver + special learning support',
  },
];

export const SELECTION_CRITERIA = [
  'Bachelor’s degree marks (50% weightage)',
  '12th Standard marks (20% weightage)',
  '10th Standard marks (10% weightage)',
  'Counselling interaction & subject aptitude (20% weightage)',
  'Category & community-based reservation as per TN Govt. norms',
];

export const TRUST_SIGNALS = [
  { metric: '36+', label: 'Years of Educational Excellence' },
  { metric: '98%', label: 'Placement Rate' },
  { metric: '700+', label: 'B.Ed Seats per Year' },
  { metric: '14', label: 'NCTE-Approved Specializations' },
  { metric: '50+', label: 'Experienced Faculty' },
  { metric: '5000+', label: 'Successful Alumni Educators' },
];

// ─────────── Per-course admission data ───────────

export const ADMISSIONS_DATA: Record<string, CourseAdmission> = {
  tamil: {
    slug: 'tamil',
    name: 'Tamil',
    fullName: 'B.Ed Tamil',
    longName: 'Bachelor of Education in Tamil',
    tagline: 'Preserve Tamil heritage — shape the next generation of language educators',
    heroDescription: 'Become a passionate Tamil language teacher with deep classical literature knowledge and modern pedagogical skills. Our 2-year NCTE-approved programme combines Sangam-era classics, contemporary Tamil literature, and innovative teaching methodologies.',
    iconLetter: 'த',
    duration: '2 Years',
    durationDetail: '4 semesters of integrated theory, practicum & internship',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'Tamil & English',
    eligibilityHeadline: 'Bachelor’s degree with Tamil as one of the subjects',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'BA Tamil / B.Litt Tamil / any Bachelor’s degree with Tamil as a Part-I or major subject from a recognized university.' },
      { title: 'Minimum Marks', detail: '50% aggregate for General category; 45% for SC/ST/OBC/PWD candidates.' },
      { title: 'Age Limit', detail: 'No upper age limit; candidates must be at least 19 years old by admission date.' },
      { title: 'Language Proficiency', detail: 'Fluency in Tamil (reading, writing, speaking) is mandatory. English working knowledge preferred.' },
      { title: 'Reservation', detail: 'Reservation as per Tamil Nadu Government norms — BC/MBC/SC/ST/PWD/EWS categories.' },
    ],
    subjectRequirement: 'Tamil as Part-I, major, or special subject in UG degree',
    careerRoles: [
      'Tamil Language Teacher (State Board / Matric / CBSE)',
      'Higher Secondary Tamil Lecturer',
      'Tamil Content Writer & Editor',
      'Translator (Tamil ⇄ English)',
      'TET / TRB Government School Teacher',
      'Tamil Curriculum Developer',
      'Tamil Educational Content Creator (Digital)',
    ],
    averageSalary: '₹3.5 – 6.5 LPA',
    placementRate: '96%',
    topRecruiters: ['Velammal Schools', 'SRM Schools', 'Chinmaya Vidyalaya', 'Govt. of Tamil Nadu', 'Sri Chaitanya Schools', 'Vidyaa Vikas Schools'],
    whyChooseThis: [
      { title: 'Sangam to Modern Tamil', description: 'Comprehensive coverage from Tholkappiyam to contemporary Tamil literature.' },
      { title: 'Native Tamil Faculty', description: 'Learn from PhD-qualified Tamil scholars with 15+ years of teaching experience.' },
      { title: 'Cultural Immersion', description: 'Visits to Tamil heritage sites — Madurai, Thanjavur, Mahabalipuram included in curriculum.' },
      { title: 'Digital Tamil Pedagogy', description: 'Modern tools — Tamil typing, e-learning content creation, digital classroom strategies.' },
      { title: 'Govt. Teacher Coaching', description: 'Free TET / TRB coaching included as part of placement support.' },
    ],
    faqs: [
      { question: 'Can I apply for B.Ed Tamil if I have BA English with Tamil as second language?', answer: 'Yes, provided Tamil was studied as Part-I subject during your UG. Submit your transcript for verification.' },
      { question: 'Is the Tamil B.Ed recognized for TET / TRB exams?', answer: 'Absolutely. Our B.Ed Tamil is NCTE-approved and TNTEU-affiliated, fully eligible for TET, TRB-PG, and TRB-TGT examinations.' },
      { question: 'Do I need to know Sangam Tamil to apply?', answer: 'No prior expertise required. The curriculum builds up from Sangam classics to modern Tamil systematically with expert guidance.' },
      { question: 'Are there opportunities to teach Tamil abroad after B.Ed?', answer: 'Yes — Singapore, Malaysia, Sri Lanka, and Gulf countries actively recruit Tamil-medium teachers. Alumni placed in international Tamil schools.' },
    ],
  },

  english: {
    slug: 'english',
    name: 'English',
    fullName: 'B.Ed English',
    longName: 'Bachelor of Education in English',
    tagline: 'Master English Language Teaching with global pedagogical standards',
    heroDescription: 'Train as an English language educator equipped with Communicative Language Teaching (CLT), Task-Based Learning, and digital pedagogy. Our programme blends literary analysis with practical ELT methodologies aligned to NEP 2020.',
    iconLetter: 'E',
    duration: '2 Years',
    durationDetail: '4 semesters with intensive ELT methodology training',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English',
    eligibilityHeadline: 'Bachelor’s degree with English as one of the major subjects',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'BA English Literature / BA English Language / any Bachelor’s degree with English as a major or Part-II subject.' },
      { title: 'Minimum Marks', detail: '50% aggregate for General; 45% for SC/ST/OBC/PWD candidates.' },
      { title: 'Age Limit', detail: 'Minimum 19 years; no upper age limit.' },
      { title: 'Language Proficiency', detail: 'Demonstrated proficiency in written and spoken English. IELTS/TOEFL scores accepted as additional credential (optional).' },
      { title: 'Reservation', detail: 'As per Tamil Nadu Government reservation policy.' },
    ],
    subjectRequirement: 'English as major / Part-II subject in UG degree',
    careerRoles: [
      'English Teacher (CBSE/ICSE/State Board)',
      'IELTS / TOEFL Instructor',
      'Spoken English Trainer',
      'Content Developer (EdTech)',
      'Corporate Soft Skills Trainer',
      'English Language Examiner',
      'Educational Editor / Proofreader',
    ],
    averageSalary: '₹4 – 8 LPA',
    placementRate: '98%',
    topRecruiters: ['Cambridge Assessment', 'British Council', 'Velammal Schools', 'DAV Group', 'Delhi Public School', 'Orchids International', 'BYJU\'S', 'Vedantu'],
    whyChooseThis: [
      { title: 'Cambridge-Aligned Curriculum', description: 'Methodology mapped to Cambridge CELTA principles & British Council ELT standards.' },
      { title: 'Phonetics & Pronunciation Lab', description: 'State-of-the-art language lab with audio-visual phonetics training.' },
      { title: 'Literature & Linguistics Balance', description: 'Equal focus on literary appreciation and linguistic theory for well-rounded teaching.' },
      { title: 'International Placement', description: 'Tie-ups with international schools in Middle East and South-East Asia.' },
      { title: 'Communication Skills Coaching', description: 'Personality development, public speaking, and interview prep included.' },
    ],
    faqs: [
      { question: 'Is English literature background mandatory for B.Ed English?', answer: 'You need English as a major or Part-II subject in your UG. Pure literature is not required — language stream also qualifies.' },
      { question: 'Will I get IELTS/TOEFL training as part of the course?', answer: 'Yes, free IELTS preparation modules are included in the placement training programme during the final semester.' },
      { question: 'Can I teach in international schools after B.Ed English?', answer: 'Definitely. Our English B.Ed graduates are placed in CBSE, ICSE, IB schools in India and abroad.' },
      { question: 'What is the medium of instruction for B.Ed English?', answer: 'Entirely English. All theory papers, discussions, and submissions are in English to ensure native fluency.' },
    ],
  },

  maths: {
    slug: 'maths',
    name: 'Mathematics',
    fullName: 'B.Ed Mathematics',
    longName: 'Bachelor of Education in Mathematics',
    tagline: 'Transform numbers into life skills — become a problem-solving mentor',
    heroDescription: 'Equip yourself to teach mathematics with activity-based learning, problem-solving pedagogy, and conceptual clarity. Curriculum aligned to NCERT, NCF 2023, and NEP 2020 with focus on demystifying math for school students.',
    iconLetter: '∑',
    duration: '2 Years',
    durationDetail: '4 semesters with mathematical pedagogy, lab work & internship',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English & Tamil',
    eligibilityHeadline: 'Bachelor’s degree with Mathematics as one of the major subjects',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'B.Sc Mathematics / B.Sc with Mathematics as major / B.A. Mathematics / BCA / B.E. with Mathematics in UG.' },
      { title: 'Minimum Marks', detail: '50% aggregate for General; 45% for SC/ST/OBC/PWD candidates.' },
      { title: 'Subject Requirement', detail: 'Mathematics as a Part-III or major subject during Bachelor’s degree (minimum 4 papers).' },
      { title: 'Age Limit', detail: 'Minimum 19 years; no upper age limit.' },
      { title: 'Reservation', detail: 'Tamil Nadu Government reservation policy applies.' },
    ],
    subjectRequirement: 'Mathematics as major in UG (B.Sc/B.E./BCA accepted)',
    careerRoles: [
      'Mathematics Teacher (CBSE/ICSE/State Board)',
      'Higher Secondary Maths Lecturer',
      'Math Olympiad Coach',
      'JEE / NEET Foundation Trainer',
      'EdTech Math Content Creator',
      'Quantitative Aptitude Trainer',
      'Curriculum Designer (STEM)',
    ],
    averageSalary: '₹4.5 – 9 LPA',
    placementRate: '99%',
    topRecruiters: ['BYJU\'S', 'Vedantu', 'Cuemath', 'Allen Career Institute', 'Velammal Schools', 'Sri Chaitanya', 'NPS International', 'Aakash Educational Services'],
    whyChooseThis: [
      { title: 'Math Pedagogy Lab', description: 'Dedicated lab with manipulatives, GeoGebra, and digital math teaching tools.' },
      { title: 'Olympiad-Level Mentoring', description: 'Faculty includes RMO/INMO trainers — learn to teach beyond textbooks.' },
      { title: 'STEM Integration', description: 'Cross-disciplinary modules linking math with science, coding, and real-world problems.' },
      { title: 'High Demand & Salary', description: 'Math teachers command 20-30% higher salaries than average school teaching roles.' },
      { title: 'EdTech-Ready Skills', description: 'Training in video lesson creation, interactive whiteboards, and online math platforms.' },
    ],
    faqs: [
      { question: 'I have a B.Tech / B.E. — am I eligible for B.Ed Mathematics?', answer: 'Yes, if your engineering degree had Mathematics as a substantial subject in at least 3-4 semesters, you qualify.' },
      { question: 'Will this help me become an IIT-JEE coach?', answer: 'Yes. Our placement cell connects graduates with leading coaching institutes like Allen, Aakash, and Vedantu.' },
      { question: 'Is BCA accepted as eligibility for B.Ed Maths?', answer: 'Yes, BCA with sufficient mathematics papers is accepted. Submit your mark sheets for evaluation.' },
      { question: 'Do you cover digital math teaching tools like GeoGebra?', answer: 'Absolutely. GeoGebra, Desmos, and other digital math platforms are integrated throughout the curriculum.' },
    ],
  },

  physics: {
    slug: 'physics',
    name: 'Physics',
    fullName: 'B.Ed Physics',
    longName: 'Bachelor of Education in Physics',
    tagline: 'Spark curiosity, ignite scientific minds through experimental teaching',
    heroDescription: 'Train as a Physics educator with hands-on lab pedagogy, demonstration-based teaching, and inquiry-driven learning. Curriculum includes mechanics, optics, electromagnetism, modern physics — all linked to school-level teaching strategies.',
    iconLetter: 'Φ',
    duration: '2 Years',
    durationDetail: '4 semesters with extensive lab experiments & teaching practice',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English & Tamil',
    eligibilityHeadline: 'Bachelor’s degree with Physics as one of the major subjects',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'B.Sc Physics / B.Sc with Physics as major / B.E. or B.Tech with Physics-heavy curriculum.' },
      { title: 'Minimum Marks', detail: '50% aggregate for General; 45% for reserved categories.' },
      { title: 'Subject Requirement', detail: 'Physics as a Part-III subject in UG (minimum 4 theory + lab papers).' },
      { title: 'Age Limit', detail: 'No upper age limit; minimum 19 years.' },
      { title: 'Reservation', detail: 'As per Tamil Nadu Government policy.' },
    ],
    subjectRequirement: 'Physics as major in UG (B.Sc/B.E./B.Tech accepted)',
    careerRoles: [
      'Physics Teacher (CBSE/ICSE/State)',
      'Higher Secondary Physics Lecturer',
      'JEE / NEET Physics Coach',
      'STEM Lab Coordinator',
      'EdTech Physics Content Creator',
      'Science Curriculum Developer',
      'Physics Demonstrator (Research Labs)',
    ],
    averageSalary: '₹4.5 – 8.5 LPA',
    placementRate: '98%',
    topRecruiters: ['Allen', 'Aakash', 'Vedantu', 'BYJU\'S', 'Velammal', 'NPS International', 'Chinmaya Vidyalaya', 'Sri Chaitanya'],
    whyChooseThis: [
      { title: 'Modern Physics Lab', description: 'Well-equipped lab with optics, mechanics, electronics & spectroscopy setups.' },
      { title: 'Demonstration Pedagogy', description: 'Train in 100+ low-cost physics demonstrations using household materials.' },
      { title: 'Inquiry-Based Learning', description: 'NEP 2020 aligned methods — moving beyond rote to discovery learning.' },
      { title: 'Entrance Exam Coaching Path', description: 'Strong pipeline to JEE / NEET coaching institutes nationwide.' },
      { title: 'Research-Linked Teaching', description: 'Optional research projects with collaborating engineering colleges.' },
    ],
    faqs: [
      { question: 'I have a B.Sc Computer Science with Physics ancillary — am I eligible?', answer: 'Yes, if Physics was studied for at least 2 years as ancillary subject with sufficient credits.' },
      { question: 'Do you have a well-equipped physics lab?', answer: 'Yes — our lab has equipment for mechanics, optics, electricity, magnetism, modern physics, and electronics demonstrations.' },
      { question: 'Can I become a NEET/JEE physics coach after this?', answer: 'Absolutely. Many alumni are placed in Allen, Aakash, and other top coaching institutes.' },
      { question: 'Are research opportunities available during the course?', answer: 'Yes, students can opt for mini-research projects with our partner engineering institutions in Year 2.' },
    ],
  },

  chemistry: {
    slug: 'chemistry',
    name: 'Chemistry',
    fullName: 'B.Ed Chemistry',
    longName: 'Bachelor of Education in Chemistry',
    tagline: 'From molecules to medicines — teach chemistry that matters',
    heroDescription: 'Become a Chemistry educator skilled in lab-based learning, real-world applications, and inquiry pedagogy. Curriculum covers organic, inorganic, physical chemistry with strong emphasis on safe, engaging classroom experiments.',
    iconLetter: '⚗',
    duration: '2 Years',
    durationDetail: '4 semesters with extensive practical chemistry training',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English & Tamil',
    eligibilityHeadline: 'Bachelor’s degree with Chemistry as one of the major subjects',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'B.Sc Chemistry / B.Sc with Chemistry as major / B.Pharm / B.Tech Chemical Engineering accepted.' },
      { title: 'Minimum Marks', detail: '50% aggregate for General; 45% for reserved categories.' },
      { title: 'Subject Requirement', detail: 'Chemistry as a Part-III subject in UG with minimum 4 theory + lab papers.' },
      { title: 'Age Limit', detail: 'Minimum 19 years; no upper age limit.' },
      { title: 'Reservation', detail: 'As per Tamil Nadu Government norms.' },
    ],
    subjectRequirement: 'Chemistry as major in UG (B.Sc/B.Pharm/B.Tech accepted)',
    careerRoles: [
      'Chemistry Teacher (CBSE/ICSE/State)',
      'Higher Secondary Chemistry Lecturer',
      'NEET / JEE Chemistry Coach',
      'Pharmaceutical Trainer',
      'Lab Technician Supervisor',
      'Science Content Developer',
      'Industrial Trainer (FMCG/Pharma)',
    ],
    averageSalary: '₹4 – 8 LPA',
    placementRate: '97%',
    topRecruiters: ['Allen', 'Aakash', 'Vedantu', 'BYJU\'S', 'Velammal', 'NPS', 'Cipla (Training)', 'Sri Chaitanya'],
    whyChooseThis: [
      { title: 'Safe Lab Practices', description: 'Modern, well-ventilated lab with strict safety SOPs — essential for school teaching.' },
      { title: 'Real-World Chemistry', description: 'Curriculum bridges textbook chemistry with food, cosmetics, pharma applications.' },
      { title: 'NEET-Ready Skills', description: 'Strong NEET-aligned pedagogy makes you industry-ready for medical coaching.' },
      { title: 'Demonstration Toolkit', description: 'Learn 80+ classroom demonstrations using safe, low-cost materials.' },
      { title: 'Green Chemistry Module', description: 'Emerging sustainable chemistry pedagogy — first such course in the region.' },
    ],
    faqs: [
      { question: 'Is B.Pharm accepted for B.Ed Chemistry admission?', answer: 'Yes. B.Pharm graduates with chemistry coursework are eligible. We have several B.Pharm alumni in our programme.' },
      { question: 'Do you cover NEET-pattern chemistry pedagogy?', answer: 'Yes. Our placement coaching includes NEET-aligned teaching techniques for those targeting medical entrance coaching roles.' },
      { question: 'Are lab chemicals safe for school demonstration training?', answer: 'Absolutely — we train you on safe, age-appropriate experiments approved for school chemistry labs.' },
      { question: 'Can I work in pharmaceutical training after this course?', answer: 'Yes, several alumni work in training divisions of Cipla, Dr. Reddy\'s, and other pharma companies.' },
    ],
  },

  botany: {
    slug: 'botany',
    name: 'Botany',
    fullName: 'B.Ed Botany',
    longName: 'Bachelor of Education in Botany',
    tagline: 'Teach the science of life — from cells to ecosystems',
    heroDescription: 'Train as a Biological Science teacher specializing in Botany, with strong field study orientation, environmental awareness, and modern biology pedagogy. Aligned with NEP 2020 and NCERT Class 9-12 biology curriculum.',
    iconLetter: '🌿',
    duration: '2 Years',
    durationDetail: '4 semesters with field trips, herbarium work & internship',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English & Tamil',
    eligibilityHeadline: 'Bachelor’s degree with Botany / Biological Sciences as major',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'B.Sc Botany / B.Sc Biology / B.Sc Plant Science / B.Sc Microbiology with Botany.' },
      { title: 'Minimum Marks', detail: '50% aggregate for General; 45% for reserved categories.' },
      { title: 'Subject Requirement', detail: 'Botany or equivalent biological science as a Part-III subject in UG.' },
      { title: 'Age Limit', detail: 'Minimum 19 years; no upper age limit.' },
      { title: 'Reservation', detail: 'Tamil Nadu Government norms apply.' },
    ],
    subjectRequirement: 'Botany / Biology / Plant Science as major in UG',
    careerRoles: [
      'Biology Teacher (CBSE/ICSE/State Board)',
      'Higher Secondary Botany Lecturer',
      'NEET Biology Coach',
      'Environmental Educator',
      'Herbarium Curator',
      'Biology Content Developer',
      'Field Researcher / Naturalist',
    ],
    averageSalary: '₹3.5 – 7 LPA',
    placementRate: '96%',
    topRecruiters: ['Allen', 'Aakash', 'BYJU\'S', 'Velammal', 'Sri Chaitanya', 'Vidya Mandir', 'Govt. of TN', 'Tropical Forest Research Institute'],
    whyChooseThis: [
      { title: 'Live Field Studies', description: 'Mandatory field trips to Western Ghats, mangroves, and botanical gardens.' },
      { title: 'Herbarium & Lab', description: 'Maintain your own herbarium collection — practical asset for school teaching.' },
      { title: 'NEET-Aligned Biology', description: 'Biology pedagogy mapped to NEET syllabus for medical coaching career path.' },
      { title: 'Environmental Education', description: 'NEP 2020 emphasizes environmental literacy — be ready for the new curriculum.' },
      { title: 'Research Linkages', description: 'Internships with Salim Ali Centre and Tamil Nadu Forest Department.' },
    ],
    faqs: [
      { question: 'Can I teach Zoology too after B.Ed Botany?', answer: 'In schools, biology is often taught as a single subject. Your B.Ed Botany qualifies you to teach combined biology up to Class 10; for Classes 11-12, specialization matters.' },
      { question: 'Are field trips compulsory?', answer: 'Yes, field studies are an integral part of botany pedagogy and assessment. Costs are included in the course fee.' },
      { question: 'Can I become a NEET biology coach?', answer: 'Yes — Botany B.Ed gives strong foundation for NEET coaching. Most coaching institutes recruit our graduates.' },
      { question: 'Will I learn modern tools like DNA isolation or microscopy?', answer: 'Yes, basic molecular biology and advanced microscopy training are part of the curriculum.' },
    ],
  },

  zoology: {
    slug: 'zoology',
    name: 'Zoology',
    fullName: 'B.Ed Zoology',
    longName: 'Bachelor of Education in Zoology',
    tagline: 'Bring the animal kingdom to life in every classroom',
    heroDescription: 'Become a Zoology educator with strong dissection alternatives, comparative anatomy understanding, and ecological perspective. Curriculum integrates animal behaviour, evolution, human physiology, and modern biology pedagogy.',
    iconLetter: '🐅',
    duration: '2 Years',
    durationDetail: '4 semesters with specimen studies, field work & internship',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English & Tamil',
    eligibilityHeadline: 'Bachelor’s degree with Zoology / Biological Sciences as major',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'B.Sc Zoology / B.Sc Biology / B.Sc Biotechnology / B.Sc Fisheries / B.V.Sc accepted.' },
      { title: 'Minimum Marks', detail: '50% for General; 45% for reserved categories.' },
      { title: 'Subject Requirement', detail: 'Zoology or equivalent biological science as Part-III subject in UG.' },
      { title: 'Age Limit', detail: 'Minimum 19 years; no upper age limit.' },
      { title: 'Reservation', detail: 'As per Tamil Nadu Government norms.' },
    ],
    subjectRequirement: 'Zoology / Biology / Biotech as major in UG',
    careerRoles: [
      'Biology / Zoology Teacher',
      'Higher Secondary Zoology Lecturer',
      'NEET Biology Coach',
      'Wildlife Educator',
      'Museum Educator / Curator',
      'Science Content Developer',
      'Environmental Consultant (Education)',
    ],
    averageSalary: '₹3.5 – 7 LPA',
    placementRate: '96%',
    topRecruiters: ['Allen', 'Aakash', 'Velammal', 'Sri Chaitanya', 'Chinmaya Vidyalaya', 'WWF (Education)', 'BYJU\'S', 'Government Schools'],
    whyChooseThis: [
      { title: 'Modern Specimen Lab', description: 'Preserved specimens, 3D models, virtual dissection software — humane and effective.' },
      { title: 'Wildlife Field Trips', description: 'Visits to Mudumalai, Anamalai Tiger Reserves and BNHS bird-watching programmes.' },
      { title: 'NEET Biology Edge', description: 'Strong human physiology and reproduction pedagogy — high-value NEET teaching.' },
      { title: 'Digital Biology Tools', description: 'BioDigital Human, Visible Body, and animation tools for classroom teaching.' },
      { title: 'Conservation Awareness', description: 'NEP-aligned ecological consciousness embedded throughout curriculum.' },
    ],
    faqs: [
      { question: 'Do you still do animal dissection?', answer: 'No — we use modern humane alternatives: preserved specimens, 3D models, and virtual dissection software, aligned with UGC guidelines.' },
      { question: 'Can I teach both Botany and Zoology after this?', answer: 'For Class 10 and below — yes (taught as combined Biology). For Class 11-12, specialized hiring usually applies.' },
      { question: 'Are field trips part of the course?', answer: 'Yes — wildlife sanctuary visits, marine biology trips, and birdwatching programmes are mandatory.' },
      { question: 'Will this help me for NEET coaching jobs?', answer: 'Absolutely. Zoology graduates are in high demand at top NEET coaching institutes.' },
    ],
  },

  history: {
    slug: 'history',
    name: 'History',
    fullName: 'B.Ed History',
    longName: 'Bachelor of Education in History',
    tagline: 'Make the past come alive — inspire critical thinkers',
    heroDescription: 'Train as a History educator with source-based learning, critical analysis methods, and engaging storytelling pedagogy. Covers Indian history, world history, historiography, and modern history teaching tools including digital archives.',
    iconLetter: '📜',
    duration: '2 Years',
    durationDetail: '4 semesters with heritage site visits, archival work & internship',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English & Tamil',
    eligibilityHeadline: 'Bachelor’s degree with History as one of the major subjects',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'BA History / BA with History as major / BA Tamil Literature with History modules accepted.' },
      { title: 'Minimum Marks', detail: '50% for General; 45% for reserved categories.' },
      { title: 'Subject Requirement', detail: 'History as a major or Part-III subject in UG.' },
      { title: 'Age Limit', detail: 'Minimum 19 years; no upper age limit.' },
      { title: 'Reservation', detail: 'Tamil Nadu Government norms apply.' },
    ],
    subjectRequirement: 'History as major / Part-III in UG degree',
    careerRoles: [
      'History Teacher (CBSE/ICSE/State Board)',
      'Higher Secondary History Lecturer',
      'UPSC / TNPSC Coach (History)',
      'Heritage Educator',
      'Museum Curator / Educator',
      'Documentary Researcher',
      'Cultural Content Writer',
    ],
    averageSalary: '₹3 – 6.5 LPA',
    placementRate: '94%',
    topRecruiters: ['Velammal Schools', 'DAV', 'NPS', 'Govt. of TN', 'Shankar IAS Academy', 'Tamil Nadu Archives', 'Documentary Channels'],
    whyChooseThis: [
      { title: 'Heritage Site Learning', description: 'Curriculum includes site visits to Mahabalipuram, Hampi, Thanjavur, and Madurai temples.' },
      { title: 'Source-Based Pedagogy', description: 'Learn to teach with primary sources — inscriptions, manuscripts, archaeological evidence.' },
      { title: 'UPSC / TNPSC Edge', description: 'Strong base for History optional in civil services coaching career.' },
      { title: 'Digital History Tools', description: 'Training in virtual museums, Google Arts & Culture, and interactive timelines.' },
      { title: 'Storytelling Methods', description: 'Master narrative techniques that make history captivating for young learners.' },
    ],
    faqs: [
      { question: 'Will I learn world history along with Indian history?', answer: 'Yes — the curriculum covers Ancient, Medieval, Modern Indian history plus selected World history topics relevant to school syllabus.' },
      { question: 'Can I take UPSC History optional coaching after this?', answer: 'Many alumni work as History faculty in IAS coaching institutes after gaining 2-3 years of school teaching experience.' },
      { question: 'Are heritage site visits compulsory?', answer: 'Yes, at least 2 major heritage tours are mandatory and form part of internal assessment.' },
      { question: 'Do you cover Tamil Nadu regional history?', answer: 'Yes — Chola, Pandya, Pallava, Vijayanagara empires and Tamil Nadu freedom movement are covered in depth.' },
    ],
  },

  economics: {
    slug: 'economics',
    name: 'Economics',
    fullName: 'B.Ed Economics',
    longName: 'Bachelor of Education in Economics',
    tagline: 'Decode the economy — empower future decision-makers',
    heroDescription: 'Become an Economics educator with strong data analysis skills, real-world case study pedagogy, and contemporary economic theory understanding. Curriculum covers microeconomics, macroeconomics, Indian economy, and statistical analysis.',
    iconLetter: '📊',
    duration: '2 Years',
    durationDetail: '4 semesters with statistical labs, case studies & internship',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English',
    eligibilityHeadline: 'Bachelor’s degree with Economics as a major / Part-III subject',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'BA Economics / B.Com / BBA / B.Sc Economics / B.A. with Economics as major or Part-III.' },
      { title: 'Minimum Marks', detail: '50% for General; 45% for reserved categories.' },
      { title: 'Subject Requirement', detail: 'Economics as a major / Part-III subject (minimum 4 papers) during UG.' },
      { title: 'Age Limit', detail: 'Minimum 19 years; no upper age limit.' },
      { title: 'Reservation', detail: 'As per Tamil Nadu Government norms.' },
    ],
    subjectRequirement: 'Economics as major / Part-III in UG (BA/B.Com/BBA accepted)',
    careerRoles: [
      'Economics Teacher (CBSE/ICSE/State Board)',
      'Higher Secondary Economics Lecturer',
      'UPSC / TNPSC Economics Coach',
      'EdTech Content Developer',
      'Financial Literacy Trainer',
      'Bank Exam Coach (Economics)',
      'Research Associate (Education)',
    ],
    averageSalary: '₹4 – 7.5 LPA',
    placementRate: '95%',
    topRecruiters: ['Velammal', 'DAV', 'Chinmaya Vidyalaya', 'Shankar IAS Academy', 'Plutus IAS', 'BYJU\'S', 'Unacademy', 'NPS'],
    whyChooseThis: [
      { title: 'Data-Driven Pedagogy', description: 'Statistical analysis with Excel, SPSS for teaching modern economics.' },
      { title: 'Real Case Studies', description: 'GST, demonetization, budget analysis — current affairs woven into pedagogy.' },
      { title: 'UPSC Career Path', description: 'Strong base for Economics optional in IAS / IES coaching careers.' },
      { title: 'Financial Literacy Edge', description: 'Train as financial literacy educator — high-demand emerging field.' },
      { title: 'Bilingual Teaching', description: 'Comfortable teaching in both English and Tamil mediums.' },
    ],
    faqs: [
      { question: 'Can I apply with a B.Com degree?', answer: 'Yes — B.Com with Economics as a Part-III subject (typically 4-6 papers across semesters) qualifies you.' },
      { question: 'Will I learn modern tools like SPSS or Excel?', answer: 'Yes, statistical analysis using Excel and basic SPSS is integrated into the methodology papers.' },
      { question: 'Is Economics in demand as a teaching subject?', answer: 'Yes, especially in CBSE/ICSE schools where Economics is a separate Class 11-12 subject — high paying.' },
      { question: 'Can I move to UPSC coaching after teaching?', answer: 'Many alumni transition to civil services coaching after 2-3 years of school teaching experience.' },
    ],
  },

  commerce: {
    slug: 'commerce',
    name: 'Commerce',
    fullName: 'B.Ed Commerce',
    longName: 'Bachelor of Education in Commerce',
    tagline: 'Shape future entrepreneurs — teach commerce with practical edge',
    heroDescription: 'Train as a Commerce educator covering Accountancy, Business Studies, Economics, and Entrepreneurship. Curriculum blends financial literacy, GST, modern business case studies, and digital commerce pedagogy.',
    iconLetter: '₹',
    duration: '2 Years',
    durationDetail: '4 semesters with accounting practicals, case studies & internship',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English',
    eligibilityHeadline: 'B.Com / BBA / BBM / BA Economics with Commerce subjects',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'B.Com / B.Com (CA) / BBA / BBM / BBS / B.Com (Banking) / B.Sc (Finance) — all commerce-related UG accepted.' },
      { title: 'Minimum Marks', detail: '50% for General; 45% for reserved categories.' },
      { title: 'Subject Requirement', detail: 'Commerce, Accountancy, or Business Studies as major in UG.' },
      { title: 'Age Limit', detail: 'Minimum 19 years; no upper age limit.' },
      { title: 'Reservation', detail: 'Tamil Nadu Government reservation policy applies.' },
    ],
    subjectRequirement: 'B.Com / BBA / BBM / Commerce-related UG',
    careerRoles: [
      'Commerce Teacher (CBSE/ICSE/State)',
      'Higher Secondary Accountancy/Business Studies Lecturer',
      'CA Foundation Coach',
      'Banking Exam Trainer',
      'EdTech Commerce Content Creator',
      'Corporate Trainer (Finance)',
      'GST / Tally Trainer',
    ],
    averageSalary: '₹4 – 8 LPA',
    placementRate: '97%',
    topRecruiters: ['Velammal', 'DAV', 'NPS', 'Sri Chaitanya', 'Vedantu', 'BYJU\'S', 'Tally Training Centers', 'Banking Coaching Institutes'],
    whyChooseThis: [
      { title: 'GST & Tally Training', description: 'Industry-relevant tools — Tally Prime, GST returns, taxation basics included.' },
      { title: 'Triple-Subject Mastery', description: 'Teach Accountancy, Business Studies, and Economics — high-value 3-in-1 skill.' },
      { title: 'CA Foundation Pipeline', description: 'Many graduates become CA Foundation coaches — premium salaries.' },
      { title: 'Entrepreneurship Module', description: 'Business plan, startup pedagogy — modern Commerce teaching essential.' },
      { title: 'Digital Commerce Edge', description: 'E-commerce, digital marketing, fintech basics for contemporary teaching.' },
    ],
    faqs: [
      { question: 'Can I apply with BBA / BBM?', answer: 'Yes — BBA, BBM, BBS are fully accepted as they cover Commerce, Management, and Business subjects.' },
      { question: 'Will I learn Tally and GST?', answer: 'Yes, Tally Prime training and GST basics are included as practical modules.' },
      { question: 'Are CA Foundation teaching opportunities good?', answer: 'Excellent — coaching institutes pay ₹50,000-1,50,000 per month for experienced Commerce B.Ed teachers.' },
      { question: 'Can I teach all three: Accounts, Business Studies, Economics?', answer: 'Yes, B.Ed Commerce qualifies you to teach all three commerce-stream subjects at higher secondary level.' },
    ],
  },

  'computer-science': {
    slug: 'computer-science',
    name: 'Computer Science',
    fullName: 'B.Ed Computer Science',
    longName: 'Bachelor of Education in Computer Science',
    tagline: 'Code the future — teach the next generation of digital innovators',
    heroDescription: 'Train as a Computer Science educator with hands-on programming pedagogy, AI literacy, and digital classroom expertise. Curriculum covers Python, Web Dev basics, Computational Thinking, and AI-aware teaching methodologies aligned to NEP 2020.',
    iconLetter: '⌘',
    duration: '2 Years',
    durationDetail: '4 semesters with coding labs, project work & internship',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English',
    eligibilityHeadline: 'Bachelor’s degree in Computer Science / IT / related field',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'B.Sc Computer Science / BCA / B.E. CSE / B.Tech IT / B.Sc IT / B.Sc Information Systems.' },
      { title: 'Minimum Marks', detail: '50% for General; 45% for reserved categories.' },
      { title: 'Subject Requirement', detail: 'Computer Science / IT as major subject in UG.' },
      { title: 'Age Limit', detail: 'Minimum 19 years; no upper age limit.' },
      { title: 'Reservation', detail: 'Tamil Nadu Government norms apply.' },
    ],
    subjectRequirement: 'B.Sc CS / BCA / B.E. CSE / B.Tech IT accepted',
    careerRoles: [
      'Computer Science Teacher (CBSE/ICSE/State)',
      'Higher Secondary CS Lecturer',
      'Coding Bootcamp Instructor',
      'EdTech Content Creator',
      'AI Literacy Educator',
      'School ICT Coordinator',
      'Online Programming Tutor',
    ],
    averageSalary: '₹5 – 12 LPA',
    placementRate: '99%',
    topRecruiters: ['BYJU\'S', 'Vedantu', 'WhiteHat Jr', 'Coding Ninjas', 'Cuemath', 'Velammal', 'DAV', 'Apple Distinguished Schools', 'Microsoft Educators Programme'],
    whyChooseThis: [
      { title: 'Python-First Curriculum', description: 'Industry-relevant Python, basics of JavaScript, SQL, and Git training.' },
      { title: 'AI Literacy Pedagogy', description: 'Teach AI/ML basics — NEP 2020 mandates AI education from Class 6.' },
      { title: 'Highest Demand Subject', description: 'CS teachers command 30-50% premium salaries — fastest growing teaching role.' },
      { title: 'EdTech Career Path', description: 'Strong placement at BYJU\'S, WhiteHat Jr, Coding Ninjas, Vedantu.' },
      { title: 'Global Opportunities', description: 'International schools in Gulf, SE Asia actively recruit CS B.Ed graduates.' },
    ],
    faqs: [
      { question: 'I have a B.Tech CSE — is this course worth it?', answer: 'Absolutely. B.Tech CSE + B.Ed makes you the most sought-after CS teacher with both technical and pedagogical credentials.' },
      { question: 'Which programming languages will I learn to teach?', answer: 'Python (primary), C++, JavaScript basics, SQL, and HTML/CSS — all CBSE/ICSE syllabus-aligned languages.' },
      { question: 'Will I learn to teach AI and Machine Learning?', answer: 'Yes — AI literacy pedagogy is a dedicated module, preparing you for the new NEP 2020 curriculum.' },
      { question: 'What is the salary range for CS teachers?', answer: 'CS teachers in top schools earn ₹6-12 LPA; EdTech roles offer ₹8-20 LPA for experienced educators.' },
    ],
  },

  'political-science': {
    slug: 'political-science',
    name: 'Political Science',
    fullName: 'B.Ed Political Science',
    longName: 'Bachelor of Education in Political Science',
    tagline: 'Cultivate informed citizens — teach democracy in action',
    heroDescription: 'Train as a Political Science educator with strong constitutional understanding, civic awareness, and contemporary governance perspective. Covers Indian polity, international relations, political theory, and current affairs pedagogy.',
    iconLetter: '⚖',
    duration: '2 Years',
    durationDetail: '4 semesters with debates, mock parliaments & internship',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English & Tamil',
    eligibilityHeadline: 'Bachelor’s degree with Political Science as a major subject',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'BA Political Science / BA Public Administration / BA with Political Science as major.' },
      { title: 'Minimum Marks', detail: '50% for General; 45% for reserved categories.' },
      { title: 'Subject Requirement', detail: 'Political Science as major / Part-III subject in UG.' },
      { title: 'Age Limit', detail: 'Minimum 19 years; no upper age limit.' },
      { title: 'Reservation', detail: 'As per Tamil Nadu Government norms.' },
    ],
    subjectRequirement: 'Political Science / Public Administration as major in UG',
    careerRoles: [
      'Political Science Teacher (CBSE/ICSE/State)',
      'Higher Secondary Pol. Science Lecturer',
      'UPSC / TNPSC Coach (Polity)',
      'Current Affairs Trainer',
      'Civic Educator',
      'Editorial Researcher',
      'Education Policy Analyst',
    ],
    averageSalary: '₹3 – 6.5 LPA',
    placementRate: '93%',
    topRecruiters: ['Velammal', 'DAV', 'NPS', 'Shankar IAS', 'Plutus IAS', 'Vajiram & Ravi', 'Govt. of TN', 'News Channels (Education Wing)'],
    whyChooseThis: [
      { title: 'Constitutional Expertise', description: 'In-depth study of Indian Constitution, polity, federalism — high demand for civics teaching.' },
      { title: 'UPSC Coaching Path', description: 'Strongest pipeline to civil services coaching among all B.Ed specializations.' },
      { title: 'Model UN Experience', description: 'Active mock parliaments and Model UN training make teaching engaging.' },
      { title: 'Current Affairs Edge', description: 'Daily news analysis embedded in pedagogy — essential for modern teaching.' },
      { title: 'International Relations Module', description: 'Coverage of geopolitics — rare and valuable for CBSE/ICSE schools.' },
    ],
    faqs: [
      { question: 'Can I apply with BA Public Administration?', answer: 'Yes — Public Administration is treated as equivalent to Political Science for B.Ed admission.' },
      { question: 'Is this useful for UPSC coaching career?', answer: 'Highly useful. Polity is among the highest-scoring UPSC subjects and coaching pay is excellent.' },
      { question: 'Will current affairs be part of the course?', answer: 'Yes — daily current affairs analysis is integrated into methodology papers and assessments.' },
      { question: 'Are mock parliaments part of the training?', answer: 'Yes — Model UN, mock parliament, and debate competitions are regular features.' },
    ],
  },

  'social-science': {
    slug: 'social-science',
    name: 'Social Science',
    fullName: 'B.Ed Social Science',
    longName: 'Bachelor of Education in Social Science',
    tagline: 'Integrate History, Geography, Civics & Economics — the foundation of citizenship',
    heroDescription: 'Train as an integrated Social Science teacher equipped to teach History, Geography, Civics, and Economics — the most common school teaching combination. Curriculum emphasizes interdisciplinary thinking, current affairs, and project-based learning.',
    iconLetter: '🌍',
    duration: '2 Years',
    durationDetail: '4 semesters with interdisciplinary projects, field trips & internship',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English & Tamil',
    eligibilityHeadline: 'Bachelor’s degree with any two Social Science subjects',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'BA with any combination of History, Geography, Political Science, Economics, Sociology, Public Administration.' },
      { title: 'Minimum Marks', detail: '50% for General; 45% for reserved categories.' },
      { title: 'Subject Requirement', detail: 'At least two Social Science subjects studied in UG.' },
      { title: 'Age Limit', detail: 'Minimum 19 years; no upper age limit.' },
      { title: 'Reservation', detail: 'Tamil Nadu Government policy applies.' },
    ],
    subjectRequirement: 'BA with 2+ Social Science subjects',
    careerRoles: [
      'Social Science Teacher (Classes 6-10) — highest demand',
      'Higher Secondary Subject-specific Lecturer',
      'Curriculum Developer (NCERT-aligned)',
      'Education NGO Trainer',
      'EdTech Content Creator (SST)',
      'TET Teacher (Government Schools)',
      'School Coordinator (Middle School)',
    ],
    averageSalary: '₹3.5 – 7 LPA',
    placementRate: '98%',
    topRecruiters: ['Govt. of TN (TRB)', 'Velammal', 'DAV', 'NPS', 'Sri Chaitanya', 'Chinmaya Vidyalaya', 'BYJU\'S', 'Vedantu', 'Pratham Education Foundation'],
    whyChooseThis: [
      { title: 'Highest School Demand', description: 'Social Science teachers needed in every school — strongest job security.' },
      { title: '4-in-1 Subject Mastery', description: 'Teach History, Geography, Civics, Economics — unmatched versatility.' },
      { title: 'Govt. Teacher Pipeline', description: 'Most TET / TRB government school posts are Social Science — high success rate.' },
      { title: 'Interdisciplinary Skills', description: 'NEP 2020 emphasizes integrated learning — perfectly aligned course.' },
      { title: 'Field Studies Included', description: 'Heritage trips, urban planning visits, market studies enrich pedagogy.' },
    ],
    faqs: [
      { question: 'Which UG combinations are eligible?', answer: 'Any BA with at least 2 Social Science subjects — History+Geography, Pol.Science+Economics, Sociology+History, etc., all qualify.' },
      { question: 'Can I teach all four — History, Geography, Civics, Economics?', answer: 'Yes — for Classes 6-10, Social Science is taught as an integrated subject. You\'re qualified to teach all four.' },
      { question: 'Is government teaching post easy after this?', answer: 'Most state TET / TRB recruitments are for Social Science teachers. We provide dedicated TET coaching as placement support.' },
      { question: 'Will I get specialized higher secondary teaching opportunities?', answer: 'Yes — but for Class 11-12, specialization in one subject (your stronger UG subject) is preferred.' },
    ],
  },

  microbiology: {
    slug: 'microbiology',
    name: 'Microbiology',
    fullName: 'B.Ed Microbiology',
    longName: 'Bachelor of Education in Microbiology',
    tagline: 'Teach the invisible world — from microbes to immunity',
    heroDescription: 'Become a specialized Microbiology educator with strong laboratory skills, research methodology training, and modern biotech pedagogy. Unique offering for science teaching at higher secondary level — rare and high-value specialization.',
    iconLetter: '🦠',
    duration: '2 Years',
    durationDetail: '4 semesters with advanced microbiology labs & internship',
    totalSeats: 50,
    semesters: 4,
    mode: 'Full-Time, On-Campus',
    affiliation: 'TNTEU, Chennai',
    approval: 'NCTE Approved',
    medium: 'English',
    eligibilityHeadline: 'Bachelor’s degree in Microbiology / Biotechnology / Biology',
    eligibilityCriteria: [
      { title: 'Academic Qualification', detail: 'B.Sc Microbiology / B.Sc Biotechnology / B.Sc Biochemistry / B.Sc Life Sciences / B.Pharm.' },
      { title: 'Minimum Marks', detail: '50% for General; 45% for reserved categories.' },
      { title: 'Subject Requirement', detail: 'Microbiology / Biotech / Biology as major subject in UG.' },
      { title: 'Age Limit', detail: 'Minimum 19 years; no upper age limit.' },
      { title: 'Reservation', detail: 'Tamil Nadu Government norms apply.' },
    ],
    subjectRequirement: 'B.Sc Microbiology / Biotech / Life Sciences / B.Pharm',
    careerRoles: [
      'Microbiology Teacher (Higher Secondary)',
      'Biology Teacher (Class 9-12)',
      'NEET Biology Coach',
      'Lab Coordinator (Schools/Colleges)',
      'Biotech Trainer',
      'Science Content Developer',
      'Research Assistant (Education)',
    ],
    averageSalary: '₹4 – 8 LPA',
    placementRate: '95%',
    topRecruiters: ['Allen', 'Aakash', 'Velammal', 'Sri Chaitanya', 'NPS', 'Biotech Companies (Training Wing)', 'Diagnostic Lab Education Divisions', 'Pharma Companies'],
    whyChooseThis: [
      { title: 'Rare Specialization', description: 'Unique B.Ed offering in Tamil Nadu — very low competition, high demand.' },
      { title: 'Advanced Bio Lab', description: 'Microscopy, sterile techniques, microbial culturing — research-grade lab access.' },
      { title: 'NEET / Biotech Edge', description: 'Strong pedagogy for NEET coaching and biotech entrance exam tutoring.' },
      { title: 'Post-Pandemic Demand', description: 'Microbiology awareness in schools rising — public health education growing.' },
      { title: 'Research Pathway', description: 'Optional research mini-projects with diagnostic labs and biotech firms.' },
    ],
    faqs: [
      { question: 'Is B.Ed Microbiology a recognized qualification?', answer: 'Yes — NCTE-approved and TNTEU-affiliated, fully eligible for TET / TRB and school teaching jobs.' },
      { question: 'Can I teach Biology in general after B.Ed Microbiology?', answer: 'Yes — for Class 9-12 Biology and specialized Microbiology streams at higher secondary level.' },
      { question: 'Are research opportunities available?', answer: 'Yes — internships with partner diagnostic labs and biotech firms during the second year.' },
      { question: 'Is there demand for Microbiology teachers?', answer: 'Rapidly growing demand post-pandemic; CBSE schools increasingly offering Microbiology as Class 11-12 elective.' },
    ],
  },
};

export const COURSE_SLUGS = Object.keys(ADMISSIONS_DATA);

export function getCourseAdmission(slug: string): CourseAdmission | undefined {
  return ADMISSIONS_DATA[slug];
}
