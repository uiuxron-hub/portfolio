import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, ImageBand, Section } from "@/components/site/CaseLayout";
import projectErp from "@/assets/project-erp.jpg";
import workflowDiagram from "@/assets/workflow-diagram.jpg";

export const Route = createFileRoute("/projects/workflow-automation")({
  head: () => ({
    meta: [
      { title: "Workflow Automation Platform — Roland L. Guerra" },
      {
        name: "description",
        content:
          "Case study: translating manual handoffs, exceptions, and approvals into guided workflow software.",
      },
      {
        property: "og:title",
        content: "Workflow Automation Platform — Case study",
      },
      {
        property: "og:description",
        content:
          "Mapping complex states and approval paths into a coherent operational workspace.",
      },
      { property: "og:url", content: "/projects/workflow-automation" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: workflowDiagram },
    ],
    links: [{ rel: "canonical", href: "/projects/workflow-automation" }],
  }),
  component: WorkflowAutomationCase,
});

function WorkflowAutomationCase() {
  return (
    <CaseLayout
      eyebrow="Case study · 04 · Workflow"
      title="Turning manual handoffs into guided operational flows."
      summary="A workflow automation platform designed around approvals, exceptions, and operational visibility, replacing scattered handoffs with a clearer path from request to resolution."
      client="Operations platform"
      role="Product Designer · UX Strategy"
      year="2023 — 2024"
      heroImage={workflowDiagram}
      heroAlt="Workflow automation architecture diagram"
      nextSlug="/projects/erp"
      nextTitle="Enterprise ERP System"
      nextMeta="Operational UX • Workflow Systems • Product Infrastructure"
    >
      <Section number="01 — Context" title="The work lived between tools.">
        <p>
          Teams were coordinating approvals through messages, spreadsheets, and
          disconnected admin screens. The main challenge was not creating a new
          queue; it was making ownership, state, and next steps visible.
        </p>
      </Section>

      <ImageBand
        src={workflowDiagram}
        alt="Mapped workflow states, handoffs, and exception paths"
      />

      <Section number="02 — Approach" title="Make every state actionable.">
        <p>
          The design modeled each workflow around clear ownership, pending
          decisions, exception reasons, and audit history. This gave operators a
          shared language for what was blocked, what was ready, and what needed
          escalation.
        </p>
      </Section>

      <ImageBand src={projectErp} alt="Operational workflow dashboard" />

      <Section number="03 — Outcome" title="A calmer path through complexity.">
        <p>
          The platform reduced reliance on manual follow-ups and gave teams a
          more predictable way to move work across approval stages, exceptions,
          and completion states.
        </p>
      </Section>
    </CaseLayout>
  );
}
