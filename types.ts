export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  url?: string;
  links?: { title: string; url: string; }[];
  highlights: HighlightSection[];
}

export interface HighlightSection {
  title?: string;
  items: string[];
}

export interface ProjectEntry {
  name: string;
  year?: string;
  description: string;
  url?: string;
  badges?: string[];
}

export interface ProjectGroup {
  category: string;
  projects: ProjectEntry[];
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
  url?: string;
}

export interface CourseEntry {
  title: string;
  institution: string;
  duration?: string;
  description?: string;
  url?: string;
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
  url?: string;
}

export interface ProductionCategory {
  category: string;
  items: ProductionItem[];
}