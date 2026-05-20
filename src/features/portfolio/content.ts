import designSystem from "@/assets/design-system.jpg";
import projectErp from "@/assets/project-erp.jpg";
import projectMatcha from "@/assets/project-matcha.jpg";
import type {
  ExperienceEntry,
  LabelValue,
  ProcessStep,
  ProjectSummary,
} from "@/types/portfolio";

export const expertiseAreas = [
  { label: "Figma", icon: "figma" },
  { label: "Adobe XD", icon: "adobexd" },
  { label: "Photoshop", icon: "adobephotoshop" },
  { label: "Framer", icon: "framer" },
  { label: "Visual Studio Code", icon: "visualstudiocode" },
  { label: "Cursor", icon: "cursor" },
  { label: "Notion", icon: "notion" },
  { label: "Canva", icon: "canva" },
  { label: "Claude", icon: "claude" },
  { label: "ChatGPT", icon: "openai" },
] as const;

export const selectedProjects: ProjectSummary[] = [
  {
    slug: "/projects/erp",
    title: "Enterprise ERP System",
    summary:
      "Reimagining an operational workflow for a 1,200-person logistics company. Auditing 40+ screens, designing a unified system, and shipping with engineering.",
    tags: ["Enterprise", "Operational UX", "Design System"],
    role: "UX Engineer · Product UX",
    year: "2024 — 2025",
    image: projectErp,
    span: "lg:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    slug: "/projects/mobile-ordering",
    title: "Matcha — Mobile Ordering & Loyalty",
    summary:
      "Consumer ordering app for a premium matcha brand. Built the delivery/pickup flow, loyalty mechanics, and an e-wallet roadmap for MVP launch.",
    tags: ["Consumer", "Mobile", "Loyalty"],
    role: "Lead Product Designer",
    year: "2024",
    image: projectMatcha,
    span: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
];

export const aboutFacts: LabelValue[] = [
  ["Based", "Philippines · Full Remote"],
  ["Focus", "Healthcare · SaaS · Enterprise"],
  ["Tools", "Figma · VS Code · Notion · AI Tools"],
  ["Front End", "HTML · CSS/SCSS · Tailwind"],
] as const;

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Understand workflows",
    desc: "Sit with the people doing the work. Map the real path — including the workarounds, exports, and Slack messages that hold it together.",
  },
  {
    n: "02",
    title: "Simplify complexity",
    desc: "Reduce steps, collapse states, and find the smallest model that still tells the truth about the system.",
  },
  {
    n: "03",
    title: "Prototype & validate",
    desc: "Build clickable flows fast. Validate with operators, not just stakeholders. Kill assumptions early.",
  },
  {
    n: "04",
    title: "Collaborate with engineers",
    desc: "Design in the same room as the code. Tokens, components, and edge cases live where the team can reach them.",
  },
  {
    n: "05",
    title: "Iterate & scale",
    desc: "Ship, measure, refine. Build systems that hold up after the launch energy fades.",
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    year: "2024 — Now",
    role: "Senior Product Designer",
    org: "Operational SaaS · Remote",
    detail:
      "Leading workflow + system design across a 6-product platform. Built the design system, embedded AI tooling into research, and shipped weekly with engineering.",
  },
  {
    year: "2022 — 2024",
    role: "Product Designer / UX Engineer",
    org: "Enterprise Logistics",
    detail:
      "Redesigned the core ERP surface used by 1,200 operators. Replaced fragmented tooling with one unified workspace.",
  },
  {
    year: "2020 — 2022",
    role: "UI/UX Designer",
    org: "Healthcare Platform",
    detail:
      "Designed clinical workflows and patient-facing modules. Worked closely with compliance and frontend.",
  },
];

export const impactMetrics: LabelValue[] = [
  ["−58%", "fewer steps in core workflows"],
  ["1,200+", "operators on shipped systems"],
  ["38", "design system components, maintained"],
  ["6 yrs", "shipping with engineering teams"],
] as const;

export const contactDetails: LabelValue[] = [
  ["Response time", "Within 24h"],
  ["Timezone", "GMT−5, flexible"],
  ["Engagements", "Full-time · Contract"],
  ["Currently", "Available Q1 2026"],
] as const;

export const portfolioImages = {
  designSystem,
};
