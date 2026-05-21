import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, ImageBand, Section } from "@/components/site/CaseLayout";
import designSystem from "@/assets/design-system.jpg";
import workspace from "@/assets/workspace.jpg";

export const Route = createFileRoute("/projects/design-system")({
  head: () => ({
    meta: [
      { title: "Design System for Operational Products — Roland L. Guerra" },
      {
        name: "description",
        content:
          "Case study: building a reusable design system foundation for dense operational products and internal tools.",
      },
      {
        property: "og:title",
        content: "Design System for Operational Products — Case study",
      },
      {
        property: "og:description",
        content:
          "A reusable interface foundation for dense internal tools, product teams, and engineering delivery.",
      },
      { property: "og:url", content: "/projects/design-system" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: designSystem },
    ],
    links: [{ rel: "canonical", href: "/projects/design-system" }],
  }),
  component: DesignSystemCase,
});

function DesignSystemCase() {
  return (
    <CaseLayout
      eyebrow="Case study · 03 · Systems"
      title="A design system for dense operational products."
      summary="A reusable interface foundation for internal tools, focused on predictable patterns, practical documentation, and component behavior that engineering teams could ship consistently."
      client="Internal product platform"
      role="UX Engineer · Systems Design"
      year="2024"
      heroImage={designSystem}
      heroAlt="Design system components and documentation"
      nextSlug="/projects/workflow-automation"
      nextTitle="Workflow Automation Platform"
      nextMeta="Workflow UX • Automation • Internal Tools"
    >
      <Section number="01 — Context" title="A system built for repeat work.">
        <p>
          Product teams were rebuilding similar tables, filters, forms, and
          status patterns across several operational tools. The work was
          functional, but every product shipped with small inconsistencies that
          made the ecosystem harder to maintain.
        </p>
        <p>
          The goal was to create a practical system that reduced design drift
          without slowing delivery.
        </p>
      </Section>

      <ImageBand
        src={designSystem}
        alt="Component library, tokens, and interface documentation"
      />

      <Section number="02 — Approach" title="Document behavior, not just UI.">
        <p>
          The system focused on interaction rules, empty states, validation,
          density, and responsive behavior. Components were documented around
          the decisions teams needed to make, not only their visual variants.
        </p>
      </Section>

      <ImageBand src={workspace} alt="Design documentation workspace" />

      <Section number="03 — Outcome" title="A foundation teams could extend.">
        <p>
          The result was a clearer component vocabulary for product and
          engineering teams, with reusable patterns for dashboards, forms,
          tables, status surfaces, and admin workflows.
        </p>
      </Section>
    </CaseLayout>
  );
}
