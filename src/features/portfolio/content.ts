import projectErp from "@/assets/project-erp.jpg";
import projectMobileOrdering from "@/assets/home-page.png";
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
    title: "Rebuilding an operational ERP for 1,200 daily operators.",
    summary:
      "Reimagining an operational workflow for a 1,200-person logistics company. Auditing 40+ screens, designing a unified system, and shipping with engineering.",
    industry: "Logistics",
    tags: ["Enterprise", "Operational UX", "Design System"],
    role: "UX Engineer · Product UX",
    year: "2024 — 2025",
    image: projectErp,
  },
  {
    slug: "/projects/mobile-ordering",
    title: "Mobile Ordering & Loyalty App",
    summary:
      "Consumer ordering app for a premium matcha brand. Built the delivery/pickup flow, loyalty mechanics, and an e-wallet roadmap for MVP launch.",
    industry: "Food & Beverage",
    tags: ["Consumer", "Mobile", "Loyalty"],
    role: "Lead Designer",
    year: "2025",
    image: projectMobileOrdering,
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
    year: "2021 — 2026",
    role: "UI/UX Engineer → Mid UI/UX Engineer",
    org: "You_Source Inc. · Philippines · Hybrid",
    detail:
      "Worked across enterprise systems, operational platforms, internal tools, and consumer-facing products while growing from UI/UX Intern to Mid UI/UX Engineer over 5 years. Focused on workflow optimization, scalable interface systems, developer collaboration, and iterative product improvement across fast-paced product environments.",
    tags: [
      "Operational UX",
      "Workflow Systems",
      "Design Systems",
      "Product Collaboration",
      "UI Engineering",
    ],
    progression: [
      "UI/UX Engineer Intern",
      "Associate UI/UX Engineer",
      "Associate UI/UX Engineer 2",
      "Associate UI/UX Engineer 3",
      "Associate UI/UX Engineer 4",
      "Associate UI/UX Engineer 5",
      "Mid UI/UX Engineer",
    ],
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
