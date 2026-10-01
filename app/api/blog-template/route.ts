import { NextResponse } from 'next/server';
import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from 'docx';

function makeTable(headers: string[], rows: string[][]): Table {
  return new Table({
    width: { size: 9000, type: WidthType.DXA },
    rows: [
      new TableRow({
        tableHeader: true,
        children: headers.map(
          (h) =>
            new TableCell({
              children: [
                new Paragraph({
                  children: [new TextRun({ text: h, bold: true })],
                }),
              ],
            })
        ),
      }),
      ...rows.map(
        (row) =>
          new TableRow({
            children: row.map(
              (cell) =>
                new TableCell({
                  children: [new Paragraph({ text: cell })],
                })
            ),
          })
      ),
    ],
  });
}

function p(text: string): Paragraph {
  return new Paragraph({ text });
}

function h2(text: string): Paragraph {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_2 });
}

export async function GET() {
  const doc = new Document({
    sections: [
      {
        children: [
          // ── Title ──
          new Paragraph({
            children: [
              new TextRun({
                text: 'JKKN College of Education — Blog Content Template',
                bold: true,
                size: 28,
              }),
            ],
            heading: HeadingLevel.HEADING_1,
          }),
          p('Instructions: Fill in your content under each heading below. Upload this .docx file in Step 2 of the admin panel to auto-populate the blog editor. You can review and edit each section before publishing.'),
          p('NOTE: Card details (title, category, tags, etc.) are entered directly in Step 1 of the admin form — not in this file.'),
          p(''),

          // ── Section 1 ──
          h2('What is B.Ed? Course Overview'),
          p("B.Ed stands for Bachelor of Education, a 2-year professional undergraduate program that trains candidates to become qualified school teachers. It is mandatory for teaching at the secondary (Classes 9\u201310) and senior secondary (Classes 11\u201312) levels in recognized schools across India."),
          p("The course is regulated by the National Council for Teacher Education (NCTE) and is offered by colleges affiliated to state teacher education universities. In Tamil Nadu, all B.Ed colleges \u2014 including JKKN College of Education \u2014 are affiliated to the Tamil Nadu Teachers Education University (TNTEU), Chennai."),
          p('Key highlights of the B.Ed course:'),
          p('\u2022 Duration: 2 years (4 semesters)'),
          p('\u2022 Degree type: Professional undergraduate'),
          p('\u2022 Regulatory body: NCTE (National Council for Teacher Education)'),
          p('\u2022 Affiliation (Tamil Nadu): TNTEU \u2014 Tamil Nadu Teachers Education University'),
          p('\u2022 Specializations: Mathematics, Science, Tamil, English, Commerce, Social Science, and more'),
          p('\u2022 School Internship: 16 weeks of practice teaching in partner schools'),
          p(''),

          // ── Section 2 ──
          h2('B.Ed Eligibility Criteria'),
          p('To be eligible for B.Ed admission in Tamil Nadu, candidates must meet the following criteria:'),
          makeTable(
            ['Criteria', 'Requirement'],
            [
              ['Education', "Bachelor's degree (B.A. / B.Sc. / B.Com. or equivalent) from a recognized university"],
              ['Minimum Marks', '50% aggregate in qualifying degree (45% for SC/ST/OBC candidates)'],
              ['Entrance Exam', 'No entrance exam \u2014 admission based on merit in qualifying degree'],
              ['Age', 'No upper age limit for B.Ed admission in Tamil Nadu'],
              ['Nationality', 'Indian citizens and NRI candidates'],
              ['Domicile', 'Tamil Nadu domicile preferred for state quota seats'],
            ]
          ),
          p(''),
          p("IMPORTANT NOTE: Your B.Ed specialization must align with the subject you studied in your Bachelor's degree. For example, a B.Sc. Mathematics graduate can choose Mathematics as their B.Ed teaching subject."),
          p(''),

          // ── Section 3 ──
          h2('B.Ed Course Curriculum'),
          p('The B.Ed curriculum is structured across four semesters spanning two academic years. The program combines theoretical foundations of education with extensive practical classroom training.'),
          makeTable(
            ['Year', 'Semester', 'Key Subjects'],
            [
              ['1st Year', 'Sem 1', 'Childhood & Growing Up, Contemporary India & Education, Language Across the Curriculum, Understanding Disciplines & Subjects'],
              ['1st Year', 'Sem 2', 'Learning & Teaching, Assessment for Learning, Creating an Inclusive School, Pedagogy of School Subject I'],
              ['2nd Year', 'Sem 3', 'Knowledge & Curriculum, Gender, School & Society, Pedagogy of School Subject II, School Internship (Practice Teaching)'],
              ['2nd Year', 'Sem 4', 'Optional Courses, Reading & Reflecting on Texts, School Internship (continued), Dissertation / Project Work'],
              ['Internship', '16 Weeks', 'Practice teaching in government and private schools under faculty supervision'],
            ]
          ),
          p(''),
          p('NOTE: At JKKN College of Education, students complete their school internship at partner schools across Komarapalayam, Namakkal, and Erode, gaining real classroom experience with structured mentoring from experienced faculty.'),
          p(''),

          // ── Section 4 ──
          // GL6-378: mirrors app/blog/b-ed-complete-guide-2026 - two routes, no estimated TNTEU timeline,
          // no state-wide fee-range table (both had no source).
          h2('Two B.Ed Admission Routes in Tamil Nadu 2026'),
          p('Tamil Nadu has two separate B.Ed admission routes and they do not share an application form. Applying to both is normal.'),
          p('Route 1 \u2014 Government counselling: for government-quota seats. The process opens on the Tamil Nadu B.Ed admission notification, and seats are allotted on merit and category-wise reservation. Follow the official notification for dates.'),
          p('Route 2 \u2014 Apply to the college directly: for self-financing seats at JKKN College of Education. You apply to the college, online or at the admission office. There is no state merit list to wait for.'),
          p(''),

          // ── Section 5 ──
          h2('B.Ed Fees at JKKN College of Education'),
          p('B.Ed fees differ from college to college and between government and self-financing seats, so check the fee with each college you apply to. At JKKN College of Education the tuition fee is \u20b935,000 a year under the Management Quota. Government Quota fees follow Tamil Nadu Government norms. Hostel and transport are optional and charged separately.'),
          p(''),

          // ── Section 6 ──
          h2('Career Scope After B.Ed'),
          p("A B.Ed degree opens a wide range of career opportunities in teaching, education administration, and beyond. With India's growing emphasis on quality education and the Right to Education Act, certified B.Ed teachers are in steady demand across government and private schools."),
          p("The most common career path after B.Ed is school teaching. Government school teaching positions are filled through state-level examinations \u2014 in Tamil Nadu, candidates must qualify the TNTET (Tamil Nadu Teacher Eligibility Test) and appear for TRB (Teacher Recruitment Board) recruitment. These positions offer job security, pension benefits, and structured pay scales."),
          p('Top career paths after B.Ed:'),
          p('1. Government school teacher \u2014 via TNTET & TRB recruitment \u2014 Classes 6 to 12'),
          p('2. Private school teacher \u2014 CBSE, ICSE, State Board, and international curriculum schools'),
          p('3. M.Ed / Ph.D specialization \u2014 Educational Psychology, Curriculum & Instruction, Special Education'),
          p('4. Education researcher / academician \u2014 teacher education colleges and universities'),
          p('5. Ed-Tech professional \u2014 content development, instructional design, online teaching platforms'),
          p('6. Education administrator \u2014 school principal, headmaster, academic coordinator'),
          p('7. Education entrepreneur \u2014 coaching center owner, curriculum developer, private school founder'),
          p('8. NGO / policy roles \u2014 community education programs, government literacy initiatives'),
          p(''),

          // ── Mid-CTA Banner ──
          h2('MID-CONTENT CTA BANNER'),
          p('Heading: Ready to Start Your Teaching Career?'),
          p('Description: Apply for B.Ed 2026 at JKKN College of Education \u2014 100 sanctioned seats, NCTE approved and TNTEU affiliated.'),
          p('Button 1 Text: Apply Now \u2192'),
          p('Button 2 Text: Contact Admissions'),
          p(''),

          // ── Section 7 ──
          h2('Why Choose JKKN College of Education?'),
          p("Choosing the right B.Ed college shapes your classroom readiness and career prospects. Here are five reasons why JKKN College of Education stands apart for B.Ed aspirants in Tamil Nadu:"),
          p('1. NCTE Approved & TNTEU Affiliated \u2014 JKKN College of Education holds valid NCTE recognition, ensuring your B.Ed degree is legally recognized for teaching in government and private schools across India. Affiliation to TNTEU guarantees a standardized, quality curriculum.'),
          p('2. Extensive School Internship \u2014 Students complete 16 weeks of practice teaching at partner government and private schools across Komarapalayam, Namakkal, and Erode districts. Real classroom exposure under expert mentorship prepares graduates for confident teaching from day one.'),
          p('3. Experienced Faculty \u2014 Our faculty includes experienced teacher-educators with postgraduate and doctoral qualifications in Education, Psychology, and their respective subject specializations. Regular workshops, seminars, and guest lectures enrich student learning.'),
          p('4. Placement Support \u2014 graduates are placed in CBSE, ICSE and Tamil Nadu State Board schools. TNTET coaching and TRB guidance are integrated into the program, ensuring graduates are exam-ready alongside classroom-ready.'),
          p('5. Strategic Location & Residential Campus \u2014 Situated on NH-544 (Salem-Coimbatore Highway) at Natarajapuram, Komarapalayam, about 18 km from Erode and also reached from Salem, Namakkal and Tiruchengode. The residential campus includes hostel, library, and sports facilities.'),
          p(''),

          // ── Section 8 ──
          h2('Admission Process 2026'),
          p('There are two routes (see above). For a JKKN self-financing seat, these are the steps:'),
          p("1. Complete your Bachelor's degree \u2014 with minimum 50% aggregate marks (45% for reserved categories) in a relevant subject from a recognized university."),
          p('2. Apply to the college \u2014 online through the admission portal or at the admission office. Choose your B.Ed subject from the 14 specialisations.'),
          p('3. Submit your documents \u2014 including qualifying degree mark sheets, transfer certificate, community certificate (if applicable), and passport-size photographs.'),
          p('4. Confirm your admission \u2014 by paying the fee (\u20b935,000 a year tuition, Management Quota) and choosing hostel or transport if you need them.'),
          p('5. Begin your B.Ed programme \u2014 when the academic year starts under the TNTEU calendar. For a government-quota seat, follow the state counselling notification instead.'),
          p(''),

          // ── Section 9 - FAQs ──
          h2('Frequently Asked Questions'),
          p("(Format: Each question on its own line starting with 'Q:' and each answer on its own line starting with 'A:'. Add more Q/A pairs as needed.)"),
          p('Q: What is the eligibility for B.Ed admission at JKKN College of Education?'),
          p("A: Candidates must hold a Bachelor's degree with minimum 50% marks (45% for SC/ST/OBC) from a recognized university. The degree should be in the subject you wish to specialize in. Contact our admissions office at +91 9345855001 for detailed eligibility criteria."),
          p('Q: Is hostel facility available at JKKN College of Education?'),
          p('A: Yes, JKKN provides separate hostel facilities for boys and girls within the campus at Natarajapuram, Komarapalayam. The campus is residential with mess, library, and recreational facilities.'),
          p('Q: What is the B.Ed fee structure at JKKN College of Education?'),
          p('A: Fee structure is regulated by the Tamil Nadu government fee committee and varies by admission category (state quota/management). Contact admissions for current fees: +91 9345855001.'),
          p('Q: Is JKKN College of Education NCTE approved?'),
          p('A: Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai \u2014 ensuring your B.Ed degree is recognized for government and private school teaching positions across India.'),
          p('Q: What are the career opportunities after B.Ed from JKKN?'),
          p("A: Graduates of JKKN College of Education secure teaching positions in government and private schools, qualify for TNTET/TRB examinations, and advance to M.Ed or Ph.D programs. Many alumni teach in CBSE, ICSE, and Tamil Nadu State Board schools across the region."),
          p(''),

          // ── Author Box ──
          h2('AUTHOR BOX'),
          p('Author Bio: The content team at JKKN College of Education creates evidence-based educational content about teacher education, career guidance, and academic pathways. Our faculty includes experienced teacher-educators and researchers affiliated to Tamil Nadu Teachers Education University (TNTEU).'),
          p(''),

          // ── Sidebar CTA ──
          h2('SIDEBAR CTA CARD'),
          p('Status: OPEN'),
          p('Heading: B.Ed Admission 2026'),
          p('Description: 100 Seats Available at JKKN College of Education, Komarapalayam'),
          p('Phone: +91 9345855001'),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const uint8 = new Uint8Array(buffer);

  return new NextResponse(uint8, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': 'attachment; filename="JKKN-Blog-Template.docx"',
    },
  });
}
