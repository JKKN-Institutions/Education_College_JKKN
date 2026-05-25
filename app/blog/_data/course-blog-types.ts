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
    intro: string;
    list: RecruiterItem[];
  };

  salary: {
    intro: string;
    rows: SalaryRow[];
    note: string;
  };

  whyJkkn: {
    intro: string;
    points: ReasonPoint[];
  };

  faqs: FaqItem[];
  tags: string[];
  relatedCourses: RelatedCourseLink[];
}
