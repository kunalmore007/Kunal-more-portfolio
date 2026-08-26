export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  organizationType: 'academic' | 'corporate' | 'institute' | 'mentorship';
  location: string;
  period: string;
  duration: string;
  category: 'industry' | 'teaching';
  current?: boolean;
  summary: string;
  bullets: string[];
  skills: string[];
  badge?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  experienceYears: string;
  highlight?: boolean;
  contexts: string[]; // references to where this was applied (e.g., 'HSBC', 'St. John', 'Compufield')
  category: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  highlight: string;
  description: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: 'programming' | 'database' | 'pedagogy' | 'problem-solving';
  skillsCovered: string[];
  description: string;
}

export interface InteractiveDemo {
  id: string;
  title: string;
  category: string;
  description: string;
  curriculumRef: string;
}
