export interface NavigationItem {
  label: string;
  href: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  incomplete?: boolean;
}
