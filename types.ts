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
  role: string;
  type?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}