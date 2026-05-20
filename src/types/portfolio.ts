export interface ProjectSummary {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  role: string;
  year: string;
  image: string;
  span: string;
  aspect: string;
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
}

export type LabelValue = readonly [string, string];
