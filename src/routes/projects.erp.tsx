import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, Section, ImageBand } from "@/components/site/CaseLayout";
import { Reveal } from "@/components/site/Reveal";
import projectErp from "@/assets/project-erp.jpg";
import workflowDiagram from "@/assets/workflow-diagram.jpg";
import designSystem from "@/assets/design-system.jpg";

export const Route = createFileRoute("/projects/erp")({
  head: () => ({
    meta: [
      { title: "Enterprise ERP System — Roland L. Guerra" },
      {
        name: "description",
        content:
          "Case study: redesigning the operational ERP surface for a 1,200-operator logistics company.",
      },
      { property: "og:title", content: "Enterprise ERP System — Case study" },
      {
        property: "og:description",
        content:
          "Reimagining fragmented operational tools into one unified, scalable workspace.",
      },
      { property: "og:url", content: "/projects/erp" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: projectErp },
    ],
    links: [{ rel: "canonical", href: "/projects/erp" }],
  }),
  component: ErpCase,
});

function ErpCase() {
  return (
    <CaseLayout
      eyebrow="Case study · 01 · Enterprise"
      title="Rebuilding an operational ERP for 1,200 daily operators."
      summary="A fragmented stack of 7 internal tools was rebuilt as a unified workspace — designed alongside the engineering team and shipped progressively over 14 months."
      client="Logistics, in-house"
      role="UX Engineer · Product UX"
      year="2024 — 2025"
      heroImage={projectErp}
      heroAlt="Enterprise ERP dashboard"
      nextSlug="/projects/mobile-ordering"
      nextTitle="Mobile Ordering & Loyalty App "
    >
      <Section number="01 — Overview" title="The system, in one paragraph.">
        <p>
          The company ran daily operations through seven disconnected tools —
          three internal apps, two spreadsheets, an old Rails admin, and a
          desktop client from 2014. Operators averaged 14 steps to fulfill a
          single order, and onboarding a new hire took six weeks.
        </p>
        <p>
          We rebuilt the surface as one workspace: a unified inbox, a single
          order model, and operational views designed around the actual job —
          not the database schema.
        </p>
      </Section>

      <Section
        number="02 — Problem"
        title="Tools shaped around the database, not the work."
      >
        <p>
          Every existing tool reflected a different team's mental model.
          Operators were the ones translating between them — exporting CSVs,
          re-keying data, and maintaining the truth in their head. The cost
          wasn't just speed; it was a steady leak of accuracy and morale.
        </p>
      </Section>

      <Section number="03 — Goals" title="Three things we committed to.">
        <ul className="space-y-3">
          <li className="grid grid-cols-12 gap-4 border-t hairline pt-3">
            <span className="col-span-12 md:col-span-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Clarity
            </span>
            <span className="col-span-12 md:col-span-10">
              Collapse 14-step flows into 6 or fewer. Surface state, don't hide
              it.
            </span>
          </li>
          <li className="grid grid-cols-12 gap-4 border-t hairline pt-3">
            <span className="col-span-12 md:col-span-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Trust
            </span>
            <span className="col-span-12 md:col-span-10">
              One source of truth per order. No more CSV reconciliations.
            </span>
          </li>
          <li className="grid grid-cols-12 gap-4 border-t hairline pt-3 border-b pb-3">
            <span className="col-span-12 md:col-span-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Scale
            </span>
            <span className="col-span-12 md:col-span-10">
              Build a design system that survives 4 squads shipping in parallel.
            </span>
          </li>
        </ul>
      </Section>

      <ImageBand src={workflowDiagram} alt="Workflow architecture diagram" />

      <Section
        number="04 — Workflow architecture"
        title="Mapping the real job, not the org chart."
      >
        <p>
          We spent four weeks shadowing operators across three warehouses. The
          output wasn't personas — it was a workflow map of every decision,
          handoff, and workaround. From that map, we identified six core
          operator journeys and designed the workspace around them.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border hairline mt-4">
          {[
            ["7 → 1", "Tools consolidated"],
            ["14 → 6", "Steps per order"],
            ["6w → 9d", "Onboarding"],
            ["+34%", "Throughput"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background p-5">
              <p className="font-serif text-2xl tracking-tight">{n}</p>
              <p className="mt-1 text-xs text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        number="05 — UX thinking"
        title="Designing for the operator's attention budget."
      >
        <p>
          Operators don't browse — they execute. Every screen had to answer
          three questions in under two seconds: What needs me? What changed?
          What can I do next? We built a consistent header pattern, a quiet
          status language, and progressive disclosure on every dense table.
        </p>
        <p>
          The biggest unlock wasn't a single screen — it was the unified command
          bar, designed with engineering as a first-class primitive.
        </p>
      </Section>

      <ImageBand src={designSystem} alt="Design system component library" />

      <Section
        number="06 — System & handoff"
        title="A design system that ships with the code."
      >
        <p>
          142 tokens, 38 components, and a documentation site living next to the
          codebase. Components were authored as React + tokens, not Figma
          symbols — meaning the source of truth shipped to production directly.
        </p>
      </Section>

      <Section
        number="07 — Outcome"
        title="Quieter operations, faster shipping."
      >
        <p>
          Within six months of the first rollout, operator throughput rose 34%,
          onboarding dropped from six weeks to nine days, and the support ticket
          queue shrank by half. The design system enabled four squads to ship in
          parallel without visual or behavioral drift.
        </p>
      </Section>

      <Section number="08 — Reflection" title="What I'd carry forward.">
        <p>
          The lesson wasn't about screens; it was about authorship. When
          designers own the component primitives in code, the gap between intent
          and production disappears. I'd start any future enterprise engagement
          the same way: shadow the operators, write the system in code, and ship
          in small, honest increments.
        </p>
      </Section>
    </CaseLayout>
  );
}
