export interface KeyValuePair {
  label: string;
  value: string;
}

export interface ReasonPoint {
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CareerPath {
  title: string;
  desc: string;
}

export interface RecruiterItem {
  name: string;
  type: string;
}

export interface SalaryRow {
  role: string;
  experience: string;
  salary: string;
}

export interface CurriculumSemester {
  year: string;
  semester: string;
  subjects: string;
}

export interface RelatedCourseLink {
  slug: string;
  subject: string;
}

export interface CourseBlogData {
  slug: string;
  subject: string;
  subjectTamil?: string;
  courseFullName: string;

  // SEO
  title: string;
  h1: string;
  metaDescription: string;
  keywords: string[];

  // Hero
  heroBadgeText: string;
  publishedDate: string;
  publishedDateIso: string;
  readTime: string;
  wordCount: string;
  category: string;

  // Body sections
  quickAnswer: string;

  whatIs: {
    paragraphs: string[];
    highlights: KeyValuePair[];
  };

  whyChoose: {
    intro: string;
    reasons: ReasonPoint[];
  };

  eligibility: {
    intro: string;
    criteria: { criteria: string; requirement: string }[];
    note: string;
  };

  curriculum: {
    intro: string;
    rows: CurriculumSemester[];
    practicalNote: string;
  };

  careerScope: {
    intro: string;
    paragraphs: string[];
    careerPaths: CareerPath[];
  };

  recruiters: {
    // Optional heading override; the template default is "Top Recruiters for B.Ed <subject> Graduates".
    heading?: string;
    intro: string;
    list: RecruiterItem[];
  };

  // Optional since GL6-381 (2026-10-02): a blog with no sourced salary figures leaves it out, and the
  // template then drops the section and its table-of-contents entry.
  salary?: {
    intro: string;
    rows: SalaryRow[];
    note: string;
  };

  // Optional "Where to Study B.Ed <subject> in Tamil Nadu" section, rendered after eligibility.
  whereToStudy?: {
    intro: string;
    points: ReasonPoint[];
  };

  whyJkkn: {
    intro: string;
    points: ReasonPoint[];
  };

  faqs: FaqItem[];
  tags: string[];
  relatedCourses: RelatedCourseLink[];
}
