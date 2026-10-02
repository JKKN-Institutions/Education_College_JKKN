import type { CourseBlogData } from '../course-blog-types';

// GL6-381, 2026-10-02: unsourced claims removed — salary figures (the salary section is gone), named
// ed-tech companies and private school chains, "50,000+ vacancies", "guaranteed recruitment",
// "fastest-growing", "placement network" and "80+ schools". Claude was quoting this page as
// "promotional, treat with caution". Facts kept are the ones published elsewhere on this site:
// 100 seats across 14 subjects, Rs 35,000 a year (Management Quota), NCTE4593081, TNTEU code 36108,
// the TNTEU count of 650 affiliated B.Ed colleges (read 2026-10-01), and the NCTE Regulations 2014
// Appendix-4 eligibility (50%; B.E./B.Tech 55%).
export const computerScienceBlogData: CourseBlogData = {
  slug: 'b-ed-computer-science-2026',
  subject: 'Computer Science',
  courseFullName: 'Bachelor of Education in Computer Science',
  category: 'B.Ed Specializations',

  title: 'B.Ed Computer Science 2026: Eligibility, Syllabus, Career & Salary Guide',
  h1: 'B.Ed Computer Science 2026: Complete Course Guide — Eligibility, Syllabus, Career & Salary',
  metaDescription:
    'B.Ed Computer Science 2026 — eligibility, TNTEU syllabus, careers as a CS teacher, and how to find B.Ed Computer Science colleges in Tamil Nadu on the NCTE and TNTEU lists. Admission at JKKN College of Education.',
  keywords: [
    'b.ed computer science', 'b.ed cs course', 'b.ed computer science eligibility', 'b.ed cs syllabus',
    'computer science teacher career', 'coding teacher',
    'b.ed computer science colleges', 'b ed computer science colleges in tamilnadu', 'b.ed cs colleges in tamil nadu',
  ],

  heroBadgeText: 'NCTE Approved | TNTEU Affiliated',
  publishedDate: 'Mar 22, 2026',
  publishedDateIso: '2026-03-22',
  readTime: '11 min read',
  wordCount: '1,800 words',

  quickAnswer:
    'B.Ed Computer Science is a 2-year teacher training programme for graduates who want to teach computer science, coding and IT in schools. Eligibility: B.Sc. CS / BCA / B.Sc. IT or an equivalent degree with 50% marks (45% for reserved categories); B.E./B.Tech graduates need 55% under NCTE norms. To find a college, check it on the NCTE and TNTEU lists and confirm that Computer Science is one of its approved B.Ed subjects. <strong>JKKN College of Education, Komarapalayam</strong> offers B.Ed Computer Science as one of 14 subjects, with NCTE recognition and TNTEU affiliation.',

  whatIs: {
    paragraphs: [
      'B.Ed Computer Science is a specialized teacher training program preparing graduates to teach computer science, programming, IT skills, and emerging tech (AI, robotics, web development) at school levels. The course combines computer science content review (programming languages, data structures, web development, basics of AI) with modern pedagogy focused on project-based learning, computational thinking, and hands-on coding instruction.',
      'NEP 2020 recommends introducing coding and computational thinking from the middle stage of school, and CBSE, ICSE and state board syllabi teach computer science at the secondary and higher secondary levels. Schools need teachers who know the subject and also hold the professional teaching qualification, which is what a B.Ed gives you.',
      'The program is regulated by <strong>NCTE</strong> and at JKKN affiliated to <strong>TNTEU</strong>. The CS pedagogy curriculum covers teaching programming (Python, Scratch, Java basics), web development (HTML/CSS), basics of AI/ML for kids, project-based learning, and integrating tools like Code.org, Tinkercad, GitHub Classroom into school CS classes.',
    ],
    highlights: [
      { label: 'Duration:', value: '2 years (4 semesters)' },
      { label: 'Eligibility:', value: 'B.Sc. CS / BCA / B.Sc. IT with 50% (45% for reserved); B.E./B.Tech CSE/IT with 55%' },
      { label: 'Affiliation:', value: 'TNTEU — Tamil Nadu Teachers Education University, Chennai' },
      { label: 'Recognition:', value: 'NCTE — National Council for Teacher Education' },
      { label: 'School Internship:', value: 'Supervised CS classroom and lab teaching, as NCTE norms require' },
      { label: 'Seats at JKKN:', value: '100 B.Ed seats a year, shared across 14 subjects' },
      { label: 'Fee at JKKN:', value: '₹35,000 a year (Management Quota)' },
      { label: 'Target Career:', value: 'Computer Science teacher (State Board / CBSE / ICSE), coding instructor, ed-tech educator' },
    ],
  },

  whyChoose: {
    intro:
      'B.Ed Computer Science suits graduates who enjoy computing and want to teach it. Government and private schools both ask for a B.Ed alongside the subject degree, so the course opens both routes — but government posts are won through recruitment exams, not through the college.',
    reasons: [
      {
        title: 'Coding Is Part of the School Curriculum',
        desc: 'NEP 2020 recommends coding and computational thinking from the middle stage of school, and computer science is taught as a subject at the secondary and higher secondary levels. Teaching it well needs both subject knowledge and pedagogy.',
      },
      {
        title: 'Ed-Tech and Online Teaching',
        desc: 'Online learning platforms and coding programmes for school students hire computer science teachers for live teaching, content and curriculum roles. Hiring and pay vary by company and change often, so check each employer directly.',
      },
      {
        title: 'CBSE, ICSE and State Board Schools',
        desc: 'Private schools of every board hire computer science teachers directly. Each school sets its own pay and its own requirements, such as which programming languages you can teach.',
      },
      {
        title: 'Training and Instructional Design',
        desc: 'B.Ed CS graduates can move into corporate training (Learning & Development), technical content writing and instructional design. These roles usually expect industry skills on top of the B.Ed.',
      },
      {
        title: 'AI, Robotics and Web Development Skills',
        desc: 'Adding AI/ML, robotics or web development skills to your B.Ed CS widens the classes you can teach, including school coding clubs, STEM workshops and higher secondary computer science.',
      },
    ],
  },

  eligibility: {
    intro:
      'To enrol in B.Ed Computer Science at JKKN (or any TNTEU-affiliated college), candidates must meet the following criteria:',
    criteria: [
      { criteria: 'Education', requirement: 'B.Sc. Computer Science / BCA / B.Sc. IT / B.E./B.Tech CSE/IT / equivalent UG with CS as main subject' },
      { criteria: 'Minimum Marks', requirement: '50% aggregate in qualifying degree (45% for SC/ST/OBC/DA per Tamil Nadu Govt. rules)' },
      { criteria: 'Engineering Graduates', requirement: 'B.E./B.Tech graduates need at least 55% marks (NCTE Regulations 2014, Appendix-4)' },
      { criteria: 'Allied Degrees', requirement: 'Other computing degrees (for example Software Engineering or Cyber Security) — confirm with the admission office before you apply' },
      { criteria: 'Entrance Exam', requirement: 'No entrance exam — admission via merit in qualifying degree marks' },
      { criteria: 'Age', requirement: 'No upper age limit for B.Ed admission in Tamil Nadu' },
      { criteria: 'Domicile', requirement: 'Tamil Nadu domicile preferred for state quota; non-Tamil Nadu candidates eligible under management quota' },
    ],
    note:
      'Your B.Ed teaching subject (Computer Science) must match your UG. A B.A. or B.Com graduate cannot opt for B.Ed CS directly. Confirm eligibility for your exact degree with JKKN admissions on +91 9345855001.',
  },

  whereToStudy: {
    intro:
      'There is no single official list of colleges that offer B.Ed Computer Science. TNTEU lists <strong>650</strong> affiliated B.Ed colleges in Tamil Nadu (TNTEU affiliated-college list, read 1 October 2026), but that list does not show which teaching subjects each college runs. Check these points for any college before you apply:',
    points: [
      {
        title: 'Check NCTE recognition',
        desc: 'The college must be on the NCTE Southern Regional Committee list of recognised institutions. Our step-by-step guide: <a href="/ncte-approved-b-ed-colleges-tamil-nadu" class="text-[#006837] font-semibold underline">how to check a B.Ed college on the NCTE and TNTEU lists</a>.',
      },
      {
        title: 'Check TNTEU affiliation',
        desc: 'Search the college on the TNTEU affiliated-colleges list by district. A B.Ed from an unaffiliated institution is not a TNTEU degree.',
      },
      {
        title: 'Ask whether Computer Science is an approved subject this year',
        desc: 'B.Ed seats are shared across teaching subjects, and a college does not run every subject. Ask the college in writing whether Computer Science is offered this year and how many seats it has.',
      },
      {
        title: 'Match your degree and marks',
        desc: 'B.Sc. CS, BCA or B.Sc. IT with 50% (45% reserved); B.E./B.Tech with 55%. Your degree subject decides your B.Ed teaching subject.',
      },
      {
        title: 'Know your admission route',
        desc: 'Government-quota seats are allotted through the state counselling process in the Tamil Nadu B.Ed admission notification. Self-financing seats are applied for at the college directly.',
      },
      {
        title: 'B.Ed Computer Science at JKKN',
        desc: 'JKKN College of Education, Komarapalayam (Namakkal district) offers Computer Science as one of 14 B.Ed subjects within 100 seats a year. Tuition is ₹35,000 a year (Management Quota). NCTE ID NCTE4593081, TNTEU code 36108. See <a href="/admissions/computer-science" class="text-[#006837] font-semibold underline">B.Ed Computer Science admission, fee and eligibility</a> and the <a href="/departments/computer-science" class="text-[#006837] font-semibold underline">Computer Science department</a>. Coming from nearby? <a href="/b-ed-college-near-erode" class="text-[#006837] font-semibold underline">Erode</a>, <a href="/b-ed-college-near-salem" class="text-[#006837] font-semibold underline">Salem</a>, <a href="/b-ed-colleges-in-namakkal-district" class="text-[#006837] font-semibold underline">Namakkal district</a>.',
      },
    ],
  },

  curriculum: {
    intro:
      'The B.Ed Computer Science curriculum across four semesters integrates education theory, CS-specific pedagogy, programming concept review, and extensive practical CS lab teaching:',
    rows: [
      { year: '1st Year', semester: 'Sem 1', subjects: 'Childhood & Growing Up, Contemporary India & Education, Language Across the Curriculum, Understanding the Computer Science Discipline' },
      { year: '1st Year', semester: 'Sem 2', subjects: 'Learning & Teaching, Assessment for Learning, Inclusive School, Pedagogy of Computer Science — Part I (Programming Fundamentals teaching, Scratch, Python basics)' },
      { year: '2nd Year', semester: 'Sem 3', subjects: 'Knowledge & Curriculum, Gender-School-Society, Pedagogy of Computer Science — Part II (Web Development teaching, basics of AI/ML for kids, ICT integration, Code.org, Tinkercad), School Internship Begins' },
      { year: '2nd Year', semester: 'Sem 4', subjects: 'Optional Course (e.g., Robotics in Education / AI Ethics / Cyber Safety), Reading & Reflecting on Texts, Continued Internship, Action Research / Dissertation in CS Pedagogy' },
      { year: 'Internship', semester: 'School Internship', subjects: 'Supervised CS classroom and lab teaching, lesson planning, coding project mentoring and assessment' },
    ],
    practicalNote:
      'At <strong>JKKN College of Education</strong>, B.Ed Computer Science students do their school internship in schools in and around Komarapalayam. Ask the admission office for the current list of internship schools.',
  },

  careerScope: {
    intro:
      'A B.Ed Computer Science opens teaching roles in government and private schools, plus training and ed-tech roles outside schools. Government posts are filled through recruitment exams, so plan for the exam as well as the degree.',
    paragraphs: [
      'The most stable path is a <strong>government school computer science teacher</strong> post. In Tamil Nadu these posts are filled through Teachers Recruitment Board (TRB) notifications; central schools recruit through KVS and NVS notifications. Each notification states the eligibility, the exam and the pay level, so read the current one before you plan.',
      'Private CBSE, ICSE and State Board schools hire computer science teachers directly. Each school sets its own pay and requirements, and many ask for the languages and tools you can teach, such as Python, web development or robotics.',
      'The <strong>ed-tech and online teaching</strong> stream includes live coding classes for school students, content development and curriculum design. Hiring and pay vary widely by company and change often.',
      'Corporate training and instructional design are further options. Companies hire technical trainers for employee upskilling, and these roles usually expect hands-on industry skills in addition to the B.Ed.',
    ],
    careerPaths: [
      { title: 'Government School Computer Science Teacher', desc: 'Tamil Nadu government schools, through TRB recruitment notifications' },
      { title: 'KVS / NVS Computer Science Teacher', desc: 'Central government schools, through KVS and NVS recruitment exams' },
      { title: 'CBSE / ICSE / State Board CS Teacher', desc: 'Private schools, hired directly by each school' },
      { title: 'School ICT Coordinator', desc: 'Runs the school computer lab, digital classrooms and coding clubs' },
      { title: 'Online Coding Instructor', desc: 'Live coding classes for school students on ed-tech platforms' },
      { title: 'Ed-Tech Content and Curriculum Developer', desc: 'Lessons, assessments and course design for computer science' },
      { title: 'Corporate Technical Trainer', desc: 'Employee upskilling in programming and tools; needs industry skills too' },
      { title: 'M.Ed → Teacher Educator', desc: 'Teach in colleges of education after an M.Ed and the eligibility the regulator sets' },
    ],
  },

  recruiters: {
    heading: 'Who Hires B.Ed Computer Science Graduates',
    intro:
      'These are the kinds of employers that hire B.Ed Computer Science graduates. Government schools recruit through exams and notifications, not through a college:',
    list: [
      { name: 'Tamil Nadu Government Schools', type: 'Through Teachers Recruitment Board (TRB) notifications' },
      { name: 'Kendriya Vidyalayas (KVS)', type: 'Central schools, through the KVS recruitment exam' },
      { name: 'Jawahar Navodaya Vidyalayas (NVS)', type: 'Residential CBSE schools, through the NVS recruitment exam' },
      { name: 'CBSE / ICSE / State Board Private Schools', type: 'Direct hiring by each school' },
      { name: 'Ed-Tech and Online Coding Platforms', type: 'Coding instructor, content and curriculum roles' },
      { name: 'Corporate Training Teams', type: 'Technical trainer and instructional design roles' },
    ],
  },

  whyJkkn: {
    intro:
      'JKKN College of Education offers B.Ed Computer Science as a regular, 2-year, face-to-face programme. These are the facts you can check:',
    points: [
      { title: 'NCTE Recognised & TNTEU Affiliated', desc: 'Recognised by NCTE as JKK Nattraja College of Education (NCTE ID NCTE4593081) and affiliated to TNTEU (college code 36108).' },
      { title: '14 Subjects, 100 Seats', desc: 'Computer Science is one of 14 B.Ed subjects, within 100 B.Ed seats a year.' },
      { title: '₹35,000 a Year', desc: 'Tuition is ₹35,000 a year under the Management Quota. Scholarships under Tamil Nadu government schemes apply to eligible students.' },
      { title: 'Apply Directly', desc: 'For self-financing seats you apply to the college directly; there is no state merit list to wait for.' },
      { title: 'Location', desc: 'Natarajapuram, Komarapalayam, in Namakkal district on NH-544, about 18 km from Erode.' },
      { title: 'See It Yourself', desc: 'Visit the campus to see the computer lab and meet the Computer Science faculty before you join. Call +91 9345855001 to arrange a visit.' },
    ],
  },

  faqs: [
    {
      q: 'What is the eligibility for B.Ed Computer Science at JKKN?',
      a: 'You need B.Sc. CS, BCA, B.Sc. IT, or an equivalent degree with Computer Science as the main subject, with 50% marks (45% for SC/ST/OBC/DA). B.E./B.Tech CSE/IT graduates need 55% under NCTE Regulations 2014. Call +91 9345855001 to confirm eligibility for your degree.',
    },
    {
      q: 'Which colleges offer B.Ed Computer Science in Tamil Nadu?',
      a: 'No official list shows it by subject. TNTEU lists 650 affiliated B.Ed colleges, but not their subjects, so check a college on the NCTE and TNTEU lists and ask it in writing whether Computer Science is offered this year. JKKN College of Education, Komarapalayam offers B.Ed Computer Science as one of 14 subjects.',
    },
    {
      q: 'Is B.Ed Computer Science a good career choice in 2026?',
      a: 'It suits graduates who want to teach computing. Government and private schools both ask for a B.Ed, and ed-tech and training roles add options outside schools. Government posts are won through TRB, KVS or NVS recruitment exams, so prepare for the exam as well as the degree.',
    },
    {
      q: 'Can I work in ed-tech or online coding teaching after B.Ed CS?',
      a: 'Yes. Online learning platforms and coding programmes for school students hire computer science teachers for live classes, content and curriculum roles. Hiring and pay vary by company, so check each employer directly.',
    },
    {
      q: 'How much does a B.Ed CS teacher earn in 2026?',
      a: 'It depends on the employer. Government posts follow the pay level printed in each TRB, KVS or NVS recruitment notification. Private schools and ed-tech companies set their own pay. We do not publish salary figures because we have no verified source for them.',
    },
    {
      q: 'Do I need B.E./B.Tech to do B.Ed Computer Science?',
      a: 'No. B.Sc. CS, BCA and B.Sc. IT all qualify, with 50% marks. B.E./B.Tech graduates also qualify, with 55% marks under NCTE norms.',
    },
    {
      q: 'Is there a market for AI/robotics teachers in schools?',
      a: 'Some schools run AI, robotics or coding clubs and STEM workshops alongside computer science classes. Adding AI/ML or robotics skills to your B.Ed CS lets you take on these classes. Demand varies by school.',
    },
    {
      q: 'Can I work in IT industry after B.Ed Computer Science?',
      a: 'B.Ed CS primarily qualifies you for teaching. It can lead to corporate training, technical content and instructional design roles, which usually also expect industry skills. Software development roles depend on your BCA/B.E. and coding skills, not on the B.Ed.',
    },
    {
      q: 'What\'s the difference between B.Ed CS and B.Tech CSE for teaching career?',
      a: 'B.Tech CSE alone does NOT qualify you to teach in schools — you still need B.Ed as the professional teaching qualification. A B.Tech graduate with 55% marks can join B.Ed and take Computer Science as the teaching subject.',
    },
  ],

  tags: ['B.Ed Computer Science', 'CS Teacher', 'Coding Teacher', 'B.Ed Colleges Tamil Nadu', 'NEP 2020 Coding', 'Ed-Tech Career'],

  relatedCourses: [
    { slug: 'b-ed-mathematics-2026', subject: 'Mathematics' },
    { slug: 'b-ed-physics-2026', subject: 'Physics' },
    { slug: 'b-ed-english-2026', subject: 'English' },
    { slug: 'b-ed-commerce-2026', subject: 'Commerce' },
    { slug: 'b-ed-chemistry-2026', subject: 'Chemistry' },
  ],
};
