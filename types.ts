export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  highlights: HighlightSection[];
}

export interface HighlightSection {
  title?: string;
  items: string[];
}

export interface Project {
  name: string;
  year: string;
  description: string;
  url?: string;
}

export interface FilmEntry {
  title: string;
  year: string;
  role?: string;
  type?: string;
  url?: string;
  description?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
}

export interface CourseEntry {
  title: string;
  institution: string;
  duration?: string;
  description?: string;
}

export interface Skill {
  name: string;
  level?: number;
  tooltip?: string;
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: Skill[];
}

export interface ProductionItem {
  name: string;
  description: string;
  role: string;
  occurrences?: string | number;
}

export interface ProductionCategory {
  category: string;
  items: ProductionItem[];
}