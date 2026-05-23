import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import {
  CaseImagePlaceholder,
  CaseLayout,
  Section,
} from "@/components/site/CaseLayout";
import { EditorialReflection } from "@/components/site/EnterpriseCaseBlocks";
import bulkEdit from "@/assets/bulk-edit.png";
import projectErp from "@/assets/weld-list.png";
import {
  auditHighlights,
  bulkWorkflowHighlights,
  consistencyHighlights,
  joiningHighlights,
  limitationHighlights,
  operationalMetadata,
  reflectionParagraphs,
  type CasePoint,
} from "@/features/portfolio/operational-erp";

export const Route = createFileRoute("/projects/operational-erp")({
  head: () => ({
    meta: [
      {
        title:
          "Rebuilding operational weld workflows for industrial teams. · Case study",
      },
      {
        name: "description",
        content:
          "Operational ERP UX case study focused on weld management MVP workflows, blueprint visibility, approvals, bulk edit/delete/allocation interactions, and implementation-aware usability refinement.",
      },
      {
        property: "og:title",
        content: "Rebuilding operational weld workflows for industrial teams.",
      },
      {
        property: "og:description",
        content:
          "Operational ERP UX case study focused on weld management MVP workflows, blueprint visibility, approvals, bulk edit/delete/allocation interactions, and implementation-aware usability refinement.",
      },
      { property: "og:url", content: "/projects/operational-erp" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: projectErp },
    ],
    links: [{ rel: "canonical", href: "/projects/operational-erp" }],
  }),
  component: OperationalErpCase,
});

function OperationalErpCase() {
  return (
    <CaseLayout
      eyebrow="CASE STUDY — 01"
      title="Rebuilding operational weld workflows for industrial teams."
      summary="Contributed to an evolving industrial ERP MVP focused on weld tracking, blueprint visibility, operational approvals, and workflow refinement. Worked closely across UX, implementation, and testing to improve usability inside active production constraints."
      client="Industrial infrastructure ERP"
      role="UI/UX Engineer"
      year="2025 - 2026"
      metadata={[...operationalMetadata]}
      heroImage={projectErp}
      heroAlt="Existing operational ERP MVP dashboard with workflow-heavy interface"
      heroImageClassName="aspect-[16/10] lg:aspect-[16/8.8]"
      nextSlug="/projects/mobile-ordering"
      nextTitle="Mobile Ordering & Loyalty App"
      nextMeta="Food & Beverage • Consumer UX • Loyalty Systems"
    >
      <Section
        number="01 — Joining an active MVP"
        title="Understanding an evolving operational product."
      >
        <p>
          I joined after the MVP prototype was already moving. Product direction
          was in place, another UI/UX designer was leading the broader
          experience, and weld-management modules were being implemented
          progressively.
        </p>
        <p>
          The MVP scope centered on operational weld workflows: tracking,
          import/export handling, approvals, notes, progress visibility, and
          blueprint pin mapping.
        </p>
        <InlineNotes items={joiningHighlights.slice(0, 3)} />
      </Section>

      <AuditStory
        number="02 — Auditing the experience"
        title="Documenting operational friction."
        items={auditHighlights}
        image={bulkEdit}
      />

      <ConsistencyStory
        number="03 — Building design consistency"
        title="Creating structure inside a growing product."
        items={consistencyHighlights}
      />

      <BulkWorkflowStory
        number="04 — Solving bulk workflows"
        title="Improving bulk operational actions without breaking familiarity."
        items={bulkWorkflowHighlights}
      />

      <ProductThinkingMoment />

      <ConstraintsStory
        number="05 — Designing around limitations"
        title="Balancing operational flexibility with system constraints."
        items={limitationHighlights}
      />

      <EditorialReflection
        number="06 — Reflection"
        title="Designing inside real operational constraints."
      >
        {reflectionParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </EditorialReflection>
    </CaseLayout>
  );
}

function InlineNotes({ items }: { items: CasePoint[] }) {
  return (
    <div className="mt-8 grid gap-3 md:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border hairline bg-background p-5 transition-[background-color,border-color,transform] duration-500 ease-[var(--ease-editorial)] hover:-translate-y-0.5 hover:border-primary/20 hover:bg-secondary/40"
        >
          <div className="flex items-center gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full border hairline bg-secondary/50 text-primary">
              <Check className="size-4" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium">{item.title}</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}

function AuditStory({
  number,
  title,
  items,
  image,
}: {
  number: string;
  title: string;
  items: CasePoint[];
  image: string;
}) {
  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-6 pt-32 lg:px-10 lg:pt-44">
        <div className="grid grid-cols-12 items-start gap-y-12 gap-x-6 lg:items-stretch lg:gap-x-14">
          <div className="col-span-12 lg:col-span-5">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {number}
            </p>
            <h2 className="font-serif text-3xl tracking-tight lg:text-4xl">
              {title}
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-foreground/76 text-pretty">
              I moved through the MVP with fresh eyes: testing flows, capturing
              screenshots, and turning workflow friction into implementation
              notes the team could act on.
            </p>
            <ul className="mt-10 max-w-lg space-y-6">
              {items.slice(0, 3).map((item, index) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-t hairline pt-5"
                >
                  <span className="font-serif text-2xl leading-none text-muted-foreground/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[15px] font-medium">{item.title}</p>
                    <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:flex lg:h-full lg:flex-col lg:pt-2">
            <CaseImagePlaceholder
              source={image}
              ariaLabel="Sample operational MVP screen used during UX audit"
              className="aspect-[4/3] lg:min-h-0 lg:flex-1 lg:aspect-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsistencyStory({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: CasePoint[];
}) {
  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-6 pt-28 lg:px-10 lg:pt-36">
        <div className="grid grid-cols-12 gap-y-8 gap-x-6 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {number}
            </p>
            <h2 className="font-serif text-3xl tracking-tight lg:text-4xl">
              {title}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:pt-2">
            <p className="max-w-2xl text-[15px] leading-relaxed text-foreground/78 text-pretty">
              The design-system work stayed practical: organize repeated assets,
              make interaction patterns easier to reuse, and support new weld
              workflow screens as the MVP expanded.
            </p>
            <InlineNotes items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

function BulkWorkflowStory({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: CasePoint[];
}) {
  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-6 pt-28 lg:px-10 lg:pt-36">
        <div className="grid grid-cols-12 gap-y-8 gap-x-6 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {number}
            </p>
            <h2 className="font-serif text-3xl tracking-tight lg:text-4xl">
              {title}
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:pt-2">
            <p className="max-w-2xl text-[15px] leading-relaxed text-foreground/78 text-pretty">
              As the MVP expanded, edit, delete, and allocation actions exposed
              a workflow limitation: key operational actions were buried inside
              individual records. The refinement moved frequent actions closer
              to the list workflow without changing how users understood the
              system.
            </p>
            <InlineNotes items={items.slice(0, 3)} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductThinkingMoment() {
  return (
    <section className="pt-28 lg:pt-40">
      <div className="mx-auto max-w-[1560px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border hairline bg-secondary/25 px-5 py-12 shadow-[0_34px_120px_-92px_var(--color-primary)] sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Product thinking
            </p>
            <blockquote className="mt-6 font-serif text-[clamp(2.25rem,5vw,5rem)] leading-[1.05] tracking-tight text-balance">
              The challenge wasn’t adding bulk actions. It was introducing them
              without disrupting existing operational habits.
            </blockquote>
            <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-foreground/72 text-pretty">
              The interaction had to feel like a natural extension of the
              current workflow: visible when needed, quiet when irrelevant, and
              precise enough for weld records, allocation logic, and
              approval-sensitive operational data.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Preserve familiarity",
                "Reduce repetition",
                "Respect implementation limits",
              ].map((note) => (
                <span
                  key={note}
                  className="rounded-full border hairline bg-background/60 px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConstraintsStory({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: CasePoint[];
}) {
  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-6 pt-28 lg:px-10 lg:pt-40">
        <div className="grid grid-cols-12 gap-y-10 gap-x-6 lg:gap-x-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {number}
            </p>
            <h2 className="font-serif text-3xl tracking-tight lg:text-4xl">
              {title}
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground/78 text-pretty">
              Bulk editing raised harder questions around mixed field values,
              multi-select constraints, accidental changes, and what the
              interface should protect during implementation.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <TradeoffBoard items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TradeoffBoard({ items }: { items: CasePoint[] }) {
  const tradeoffs = [
    {
      constraint: items[0],
      decision: items[1],
      impact:
        "Protected users from assuming every selected weld record shared the same editable values.",
    },
    {
      constraint: items[2],
      decision: items[3],
      impact:
        "Made edge cases concrete enough for PM and developer review before implementation.",
    },
    {
      constraint: items[4],
      decision: items[5],
      impact:
        "Kept the workflow aligned with familiar enterprise bulk-action behavior and real MVP limits.",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border hairline">
      <div className="hidden grid-cols-[1fr_1fr_1fr] border-b hairline bg-secondary/35 px-5 py-3 text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:grid">
        <span>Constraint</span>
        <span>UX decision</span>
        <span>Product impact</span>
      </div>
      <div className="divide-y hairline">
        {tradeoffs.map((tradeoff) => (
          <article
            key={tradeoff.constraint.title}
            className="grid gap-5 bg-background p-5 md:grid-cols-[1fr_1fr_1fr] lg:p-6"
          >
            <TradeoffCell
              label="Constraint"
              title={tradeoff.constraint.title}
              description={tradeoff.constraint.description}
            />
            <TradeoffCell
              label="UX decision"
              title={tradeoff.decision.title}
              description={tradeoff.decision.description}
            />
            <TradeoffCell
              label="Product impact"
              title="Operational clarity"
              description={tradeoff.impact}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

function TradeoffCell({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:hidden">
        {label}
      </p>
      <p className="text-sm font-medium">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
