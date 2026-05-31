import {
  ArrowRight,
  Boxes,
  Braces,
  ChevronDown,
  FileSearch,
  MessageCircle,
  PenTool,
  RefreshCw,
  Rocket,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import type { ComponentType } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

type ProcessDetail = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type ProcessPhase = {
  id: string;
  number: string;
  title: string;
  summary: string;
  icon: ComponentType<{ className?: string }>;
  loop?: string;
  details: ProcessDetail[];
};

const processPhases: ProcessPhase[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover & Define",
    summary: "Understand the work, the constraints, and the real problem.",
    icon: MessageCircle,
    loop: "Revisit assumptions",
    details: [
      {
        title: "Understand",
        description:
          "Start with conversations, documentation, and existing workflows to understand how the business actually operates before designing solutions.",
        icon: MessageCircle,
      },
      {
        title: "Research & Insights",
        description:
          "Identify workflow gaps, edge cases, assumptions, and operational pain points through research, use-case thinking, and AI-assisted exploration.",
        icon: FileSearch,
      },
      {
        title: "Simplify & Structure",
        description:
          "Turn complexity into clearer flows, priorities, and structures the team can reason about and improve collaboratively.",
        icon: Boxes,
      },
    ],
  },
  {
    id: "design",
    number: "02",
    title: "Design & Validate",
    summary: "Explore the product shape, test assumptions, and refine flows.",
    icon: PenTool,
    loop: "Refine flows",
    details: [
      {
        title: "Prototype & Explore",
        description:
          "Rapidly prototype workflows and interactions in Figma, code, and AI-assisted tools to test how the experience actually behaves.",
        icon: PenTool,
      },
      {
        title: "Validate & Iterate",
        description:
          "Review flows with stakeholders, developers, and users then refine the product based on feedback, constraints, and evolving requirements.",
        icon: RefreshCw,
      },
    ],
  },
  {
    id: "build",
    number: "03",
    title: "Build & Develop",
    summary: "Translate the design into durable systems and production UI.",
    icon: Braces,
    loop: "Edge cases & new scenarios",
    details: [
      {
        title: "Design System",
        description:
          "Create scalable design systems, reusable components, and consistent interaction patterns that support long-term product growth.",
        icon: Boxes,
      },
      {
        title: "Figma to Code",
        description:
          "Work closely with developers to ensure implementation, responsiveness, accessibility, and UX quality survive beyond handoff.",
        icon: Braces,
      },
      {
        title: "Integrate & Test",
        description:
          "Test real workflows, edge cases, and product states across devices while refining the experience throughout development.",
        icon: RefreshCw,
      },
    ],
  },
  {
    id: "deliver",
    number: "04",
    title: "Deliver & Grow",
    summary: "Launch, learn, and refine the product as new workflows emerge.",
    icon: Rocket,
    loop: "New insights",
    details: [
      {
        title: "Deploy",
        description:
          "Prepare the product for release while validating workflows, implementation quality, and real-world usability.",
        icon: Rocket,
      },
      {
        title: "Measure & Improve",
        description:
          "Gather feedback, identify new scenarios, and continuously improve the experience as the product evolves over time.",
        icon: TrendingUp,
      },
    ],
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [isLoopPaused, setIsLoopPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { once: false, amount: 0.35 });
  const selectedPhase = processPhases.find(
    (phase) => phase.id === expandedPhase,
  );

  useEffect(() => {
    if (shouldReduceMotion || !isInView || isLoopPaused || expandedPhase) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActivePhaseIndex((current) => (current + 1) % processPhases.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [expandedPhase, isInView, isLoopPaused, shouldReduceMotion]);

  return (
    <section id="process" ref={sectionRef}>
      <Container className="pt-32 lg:pt-44">
        <Reveal>
          <SectionHeader
            eyebrow="PROCESS WORKFLOW"
            title="How I approach product design."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden py-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[8%] right-[8%] top-1/2 hidden -translate-y-1/2 border-t border-dashed border-primary/25 lg:block"
            />

            <div className="relative grid gap-4 lg:grid-cols-4">
              {processPhases.map((phase, index) => (
                <div key={phase.id} className="contents">
                  <ProcessPhaseButton
                    phase={phase}
                    isActive={
                      expandedPhase === phase.id || activePhaseIndex === index
                    }
                    isExpanded={expandedPhase === phase.id}
                    isLast={index === processPhases.length - 1}
                    onClick={() =>
                      setExpandedPhase((current) =>
                        current === phase.id ? null : phase.id,
                      )
                    }
                    onFocus={() => {
                      setIsLoopPaused(true);
                      setActivePhaseIndex(index);
                    }}
                    onBlur={() => setIsLoopPaused(false)}
                    onMouseEnter={() => {
                      setIsLoopPaused(true);
                      setActivePhaseIndex(index);
                    }}
                    onMouseLeave={() => setIsLoopPaused(false)}
                  />

                  {expandedPhase === phase.id ? (
                    <ProcessDetailPanel
                      phase={phase}
                      className="mt-0 lg:hidden"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {!selectedPhase ? (
          <Reveal delay={0.14}>
            <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-primary/15 bg-primary-soft/70 p-4 text-sm leading-relaxed text-primary-deep sm:flex-row sm:items-start sm:justify-between">
              <p className="max-w-3xl text-pretty">
                The process is rarely linear. Product requirements evolve,
                assumptions change, and new edge cases appear throughout
                development. I treat design as an ongoing collaboration rather
                than a fixed sequence of steps.
              </p>
              <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-primary/20 bg-background/70 px-3 py-1.5 text-xs uppercase tracking-[0.14em]">
                <RefreshCw className="size-3.5" />
                Iterative loop
              </div>
            </div>
          </Reveal>
        ) : null}

        {selectedPhase ? (
          <Reveal delay={0.18}>
            <ProcessDetailPanel
              phase={selectedPhase}
              className="mt-6 hidden lg:block"
            />
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}

function ProcessDetailPanel({
  phase,
  className,
}: {
  phase: ProcessPhase;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border hairline bg-secondary/35 p-4 sm:p-5 lg:p-6",
        className,
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-primary">
            {phase.title}
          </p>
          <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight lg:text-4xl">
            {phase.summary}
          </h3>
        </div>
        {phase.loop ? (
          <div className="inline-flex w-fit shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-primary/20 bg-primary-soft px-3 py-1.5 text-xs text-primary-deep">
            <RefreshCw className="size-3.5" />
            {phase.loop}
          </div>
        ) : null}
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {phase.details.map((detail, index) => (
          <ProcessDetailCard
            key={detail.title}
            detail={detail}
            number={String(index + 1).padStart(2, "0")}
          />
        ))}
      </div>
    </div>
  );
}

function ProcessPhaseButton({
  phase,
  isActive,
  isExpanded,
  isLast,
  onClick,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
}: {
  phase: ProcessPhase;
  isActive: boolean;
  isExpanded: boolean;
  isLast: boolean;
  onClick: () => void;
  onBlur: () => void;
  onFocus: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const Icon = phase.icon;

  return (
    <button
      type="button"
      aria-expanded={isExpanded}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "group relative min-h-[11.5rem] rounded-2xl border hairline bg-background p-5 text-left transition-all duration-500 ease-[var(--ease-editorial)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive
          ? "border-primary/35 bg-primary-soft/70 shadow-[0_24px_70px_-56px_var(--color-primary)]"
          : "hover:border-primary/25 hover:bg-primary-soft",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "grid size-12 shrink-0 place-items-center rounded-2xl transition-colors",
            isActive
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-muted-foreground group-hover:bg-primary-soft group-hover:text-primary",
          )}
        >
          <Icon className="size-5" />
        </span>
        <span className="rounded-full border hairline bg-background px-2.5 py-1 text-xs tabular-nums text-muted-foreground">
          {phase.number}
        </span>
      </div>

      <h3 className="mt-5 text-base font-medium">{phase.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
        {phase.summary}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="animated-link">
          {isExpanded ? "Viewing details" : "View details"}
        </span>
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-300",
            isExpanded && "rotate-180 text-primary",
          )}
        />
      </div>

      {!isLast ? (
        <ArrowRight
          aria-hidden="true"
          className="absolute -right-4 top-1/2 z-10 hidden size-5 -translate-y-1/2 rounded-full bg-background p-1 text-primary transition-transform duration-500 group-hover:translate-x-0.5 lg:block"
        />
      ) : null}
    </button>
  );
}

function ProcessDetailCard({
  detail,
  number,
}: {
  detail: ProcessDetail;
  number: string;
}) {
  const Icon = detail.icon;

  return (
    <div className="rounded-xl border hairline bg-background p-4">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
          <Icon className="size-4" />
        </span>
        <span className="text-xs tabular-nums text-muted-foreground">
          {number}
        </span>
      </div>
      <h4 className="mt-4 text-sm font-medium">{detail.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
        {detail.description}
      </p>
    </div>
  );
}
