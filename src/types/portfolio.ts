export interface ProjectSummary {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  tags: string[];
  role: string;
  year: string;
  image: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export interface ExperienceEntry {
  year: string;
  role: string;
  org: string;
  detail: string;
  tags?: string[];
  progression?: string[];
}

export type LabelValue = readonly [string, string];
