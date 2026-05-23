import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { ProgressiveImage } from "@/components/site/ProgressiveImage";
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
  heroImageClassName,
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
  heroImageClassName?: string;
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

          <div className="grid grid-cols-12 gap-y-10 gap-x-6 lg:gap-x-10 items-end mb-16 lg:mb-24">
            <div className="col-span-12 lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {eyebrow}
              </p>
              <h1 className="font-serif text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[1.04] tracking-[-0.02em] text-balance">
                {title}
              </h1>
              <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-muted-foreground text-pretty">
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
              className={cn("aspect-[16/10]", heroImageClassName)}
            />
          </Reveal>
        </Container>
      </section>

      {children}

      <section>
        <Container className="pt-32 lg:pt-44">
          <Reveal>
            <Link
              to={nextSlug}
              className="group block rounded-3xl border hairline p-8 transition-[background-color,border-color,box-shadow,transform] duration-500 ease-[var(--ease-editorial)] hover:-translate-y-1 hover:border-primary/25 hover:bg-primary-soft hover:shadow-[0_32px_100px_-72px_var(--color-primary)] lg:p-14"
            >
              <p className="mb-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Next case study
              </p>
              <div className="flex flex-wrap items-end justify-between gap-8">
                <h3 className="max-w-3xl font-serif text-4xl tracking-tight lg:text-6xl">
                  {nextTitle}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm transition-colors group-hover:text-primary">
                  Read
                  <ArrowUpRight className="size-4 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
  className,
  contentClassName,
}: {
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <section>
      <Container className={cn("pt-24 lg:pt-32", className)}>
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
            <div
              className={cn(
                "col-span-12 lg:col-span-8 lg:pt-2 text-[15px] text-foreground/80 leading-relaxed space-y-4 text-pretty",
                contentClassName,
              )}
            >
              {children}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function ImageBand({
  src,
  alt,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <section>
      <Container className={cn("pt-16", className)}>
        <Reveal>
          <CaseImagePlaceholder
            ariaLabel={alt}
            source={src}
            className={cn("aspect-[16/9]", imageClassName)}
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
      data-source={source}
      className={cn(
        "group overflow-hidden rounded-2xl border hairline bg-secondary/50 transition-[border-color,transform] duration-700 ease-[var(--ease-editorial)] hover:-translate-y-0.5 hover:border-primary/20",
        className,
      )}
    >
      <ProgressiveImage
        src={source}
        alt={ariaLabel}
        loading="lazy"
        width={1600}
        height={1000}
        imgClassName="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-[1.012]"
      />
    </div>
  );
}
