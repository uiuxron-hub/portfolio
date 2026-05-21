import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function CaseLayout({
  eyebrow,
  title,
  summary,
  role,
  year,
  client,
  metadata,
  heroImage,
  heroAlt,
  children,
  nextSlug,
  nextTitle,
  nextMeta,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  role: string;
  year: string;
  client: string;
  metadata?: Array<[string, string]>;
  heroImage: string;
  heroAlt: string;
  children: ReactNode;
  nextSlug: string;
  nextTitle: string;
  nextMeta?: string;
}) {
  const caseMetadata = metadata ?? [
    ["Client", client],
    ["Role", role],
    ["Year", year],
  ];

  return (
    <PageShell mainClassName="pt-24">
      <section>
        <Container>
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="size-3.5" />
            Back to work
          </Link>

          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end mb-12">
            <div className="col-span-12 lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {eyebrow}
              </p>
              <h1 className="font-serif text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[1.04] tracking-[-0.02em] text-balance">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-[15px] text-muted-foreground text-pretty">
                {summary}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-3 text-sm">
              {caseMetadata.map(([k, v]) => (
                <div key={k}>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {k}
                  </p>
                  <p className="mt-1">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <Reveal>
            <CaseImagePlaceholder
              ariaLabel={heroAlt}
              source={heroImage}
              className="aspect-[16/10]"
            />
          </Reveal>
        </Container>
      </section>

      {children}

      <section>
        <Container className="pt-32">
          <Reveal>
            <Link
              to={nextSlug}
              className="group block rounded-3xl border hairline p-8 lg:p-14 hover:border-primary/25 hover:bg-primary-soft transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Next case study
              </p>
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <h3 className="font-serif text-3xl lg:text-5xl tracking-tight max-w-2xl">
                  {nextTitle}
                </h3>
                {nextMeta ? (
                  <p className="w-full text-sm text-muted-foreground">
                    {nextMeta}
                  </p>
                ) : null}
                <span className="inline-flex items-center gap-2 text-sm transition-colors group-hover:text-primary">
                  Read
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>
    </PageShell>
  );
}

/* ----------------- shared section primitives ----------------- */

export function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <Container className="pt-24 lg:pt-32">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 lg:gap-10 mb-10">
            <div className="col-span-12 lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                {number}
              </p>
              <h2 className="font-serif text-3xl lg:text-4xl tracking-tight">
                {title}
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:pt-2 text-[15px] text-foreground/80 leading-relaxed space-y-4 text-pretty">
              {children}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function ImageBand({ src, alt }: { src: string; alt: string }) {
  return (
    <section>
      <Container className="pt-16">
        <Reveal>
          <CaseImagePlaceholder
            ariaLabel={alt}
            source={src}
            className="aspect-[16/9]"
          />
        </Reveal>
      </Container>
    </section>
  );
}

export function CaseImagePlaceholder({
  ariaLabel,
  source,
  className,
}: {
  ariaLabel: string;
  source: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      data-source={source}
      className={cn(
        "grid place-items-center overflow-hidden rounded-2xl border hairline bg-secondary/50 shadow-[0_24px_80px_-64px_var(--color-primary)]",
        className,
      )}
    >
      <span className="rounded-full border hairline bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        IN PROGRESS
      </span>
    </div>
  );
}
