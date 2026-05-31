import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ProgressiveImage } from "@/components/site/ProgressiveImage";
import { Reveal } from "@/components/site/Reveal";
import { selectedProjects } from "@/features/portfolio/content";
import type { ProjectSummary } from "@/types/portfolio";

export function SelectedWorkSection() {
  return (
    <section id="work">
      <Container className="pt-28 lg:pt-40">
        <Reveal className="mb-10 lg:mb-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              The Work
            </p>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance lg:text-5xl">
              Some of my selected projects.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
          {selectedProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({
  slug,
  title,
  industry,
  role,
  year,
  image,
}: ProjectSummary) {
  return (
    <Link
      to={slug}
      aria-label={`Open ${title} case study`}
      className="group/card block rounded-2xl transition-transform duration-200 ease-[var(--ease-editorial)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <article className="project-card relative aspect-[4/3] overflow-hidden rounded-2xl border hairline bg-secondary transition-[border-color,box-shadow,transform] duration-300 ease-[var(--ease-editorial)] group-hover/card:border-primary/25 group-hover/card:shadow-[0_24px_80px_-64px_var(--color-primary)] group-focus-visible/card:border-primary/25 group-focus-visible/card:shadow-[0_24px_80px_-64px_var(--color-primary)] md:aspect-[16/11]">
        <ProgressiveImage
          src={image}
          alt={title}
          loading="lazy"
          width={1600}
          height={1100}
          imgClassName="h-full w-full object-cover transition-transform duration-[900ms] ease-[var(--ease-editorial)] group-hover/card:scale-[1.035] group-focus-visible/card:scale-[1.035]"
        />

        <div className="absolute inset-x-4 top-4 z-10 flex items-start justify-between gap-3">
          <span className="rounded-full bg-background/85 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-foreground shadow-sm backdrop-blur">
            {industry}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/72 to-transparent opacity-95 transition-opacity duration-500 ease-[var(--ease-editorial)] md:opacity-0 md:group-hover/card:opacity-100 md:group-focus-visible/card:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-0 p-5 text-foreground transition-transform duration-500 ease-[var(--ease-editorial)] md:translate-y-4 md:p-6 md:opacity-0 md:group-hover/card:translate-y-0 md:group-hover/card:opacity-100 md:group-focus-visible/card:translate-y-0 md:group-focus-visible/card:opacity-100">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs text-muted-foreground">
                {role} · {year}
              </p>
              <h3 className="font-serif text-2xl leading-tight tracking-tight lg:text-[28px]">
                {title}
              </h3>
            </div>
            <ArrowUpRight className="mb-1 size-5 shrink-0 text-primary transition-transform duration-500 ease-[var(--ease-editorial)] group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5" />
          </div>
        </div>
      </article>
    </Link>
  );
}
