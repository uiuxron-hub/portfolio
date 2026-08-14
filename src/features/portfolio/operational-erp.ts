export type CasePoint = {
  title: string;
  description: string;
};

export const operationalMetadata = [
  ["Industry", "Industrial Infrastructure"],
  ["Role", "UI/UX Engineer"],
  ["Timeline", "3 Months"],
] as const;

export const joiningHighlights: CasePoint[] = [
  {
    title: "Active MVP onboarding",
    description:
      "Joined an evolving MVP with product direction already in place and another UI/UX designer leading the broader experience.",
  },
  {
    title: "Weld workflow scope",
    description:
      "Focused on weld tracking, blueprint pin mapping, approvals, notes, progress visibility, and import/export handling.",
  },
  {
    title: "Workflow validation",
    description:
      "Tested operational flows, documented friction, and refined interactions around real MVP behavior.",
  },
  {
    title: "Implementation awareness",
    description:
      "Worked within implementation constraints so UX improvements could fit the product being built.",
  },
];

export const auditHighlights: CasePoint[] = [
  {
    title: "Workflow friction mapping",
    description: "Repeated record switching slowed operational tasks.",
  },
  {
    title: "MVP usability audit",
    description:
      "Captured workflow friction through testing and implementation notes.",
  },
  {
    title: "Interaction consistency",
    description:
      "Aligned inconsistent action behavior across operational flows.",
  },
];

export const consistencyHighlights: CasePoint[] = [
  {
    title: "Reusable components",
    description:
      "Organized repeated interface elements into clearer reusable patterns without treating the MVP as a full redesign.",
  },
  {
    title: "Design variables",
    description:
      "Helped establish consistent variables and asset organization for workflows that were still changing.",
  },
  {
    title: "Progressive structure",
    description:
      "Improved maintainability so new weld workflow screens could build from clearer foundations.",
  },
];

export const bulkWorkflowHighlights: CasePoint[] = [
  {
    title: "Bulk multi-selection workflow",
    description:
      "Introduced multi-select behavior so users could act on several weld records without opening each one individually.",
  },
  {
    title: "Contextual action visibility",
    description:
      "Made edit, delete, and allocation actions appear when they were relevant to the selected records.",
  },
  {
    title: "Reduced repetitive navigation",
    description:
      "Moved repeated actions closer to the list workflow, reducing back-and-forth record navigation.",
  },
  {
    title: "Checkbox interaction indicators",
    description:
      "Used clear selection indicators so users could understand which records were included in the action.",
  },
  {
    title: "Operational workflow efficiency",
    description:
      "Improved frequent operational tasks without hiding important record-level context.",
  },
  {
    title: "Preserved user familiarity",
    description:
      "Kept the current workflow model recognizable so the improvement felt like an extension, not a replacement.",
  },
];

export const limitationHighlights: CasePoint[] = [
  {
    title: "Mixed data state handling",
    description:
      "Explored how bulk editing should behave when selected weld records contained different field values.",
  },
  {
    title: "Multi-edit interaction logic",
    description:
      "Defined what users should see, change, or leave untouched when editing multiple records at once.",
  },
  {
    title: "Use case documentation",
    description:
      "Documented scenarios and edge cases so PMs and developers could evaluate behavior before implementation.",
  },
  {
    title: "Workflow iteration exploration",
    description:
      "Created iterations around selection states, action placement, field behavior, and review points.",
  },
  {
    title: "Enterprise pattern validation",
    description:
      "Validated the direction against common enterprise patterns for bulk actions and data-heavy workflows.",
  },
  {
    title: "Cross-functional collaboration",
    description:
      "Reviewed flows with PMs and developers to balance usability, data limitations, testing feedback, and implementation effort.",
  },
];

export const reflectionParagraphs = [
  "This project reinforced that operational UX inside an enterprise MVP is rarely about starting from a blank page. The work is often to understand what is already being built, then refine the workflows that carry the most operational weight.",
  "The most useful decisions came from auditing the weld-management experience, validating behavior during implementation and testing, and improving repeated workflows without asking users to relearn the product.",
];
