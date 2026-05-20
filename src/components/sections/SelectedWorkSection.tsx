import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { PointerEvent } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProgressiveImage } from "@/components/site/ProgressiveImage";
import { Reveal } from "@/components/site/Reveal";
import { selectedProjects } from "@/features/portfolio/content";
import type { ProjectSummary } from "@/types/portfolio";

export function SelectedWorkSection() {
  return (
    <section id="work">
      <Container className="pt-28 lg:pt-40">
        <Reveal>
          <SectionHeader
            eyebrow="Selected Work — 02"
            title="Projects shipped with care."
            description="A short selection from enterprise systems to consumer products — chosen for the thinking behind them, not the pixels."
          />
        </Reveal>

        <div className="grid grid-cols-12 gap-6">
          {selectedProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.1}
              className={`col-span-12 ${project.span}`}
            >
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
  summary,
  tags,
  role,
  year,
  image,
  aspect,
}: ProjectSummary) {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--cursor-x",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--cursor-y",
      `${event.clientY - rect.top}px`,
    );
  };

  return (
    <Link to={slug} className="group/card block rounded-2xl">
      <div
        onPointerMove={handlePointerMove}
        className={`project-card relative ${aspect} overflow-hidden rounded-2xl border hairline bg-secondary`}
      >
        <ProgressiveImage
          src={image}
          alt={title}
          loading="lazy"
          width={1600}
          height={1100}
          imgClassName="h-full w-full object-cover transition-transform duration-[900ms] ease-[var(--ease-editorial)] group-hover/card:scale-[1.018]"
        />
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
          <span className="rounded-full bg-background/85 backdrop-blur px-3 py-1 text-foreground transition-transform duration-500 ease-[var(--ease-editorial)] group-hover/card:-translate-y-0.5">
            {year}
          </span>
          <span className="rounded-full bg-background/85 backdrop-blur px-3 py-1 text-muted-foreground inline-flex items-center gap-1.5 transition-all duration-500 ease-[var(--ease-editorial)] group-hover/card:-translate-y-0.5 group-hover/card:text-primary">
            Case study
            <ArrowUpRight className="size-3 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5" />
          </span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-12 gap-4 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover/card:-translate-y-1">
        <div className="col-span-12 md:col-span-8">
          <h3 className="font-serif text-2xl lg:text-[28px] leading-tight tracking-tight">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground text-pretty max-w-xl">
            {summary}
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 space-y-2 md:text-right">
          <p className="text-xs text-muted-foreground">{role}</p>
          <div className="flex md:justify-end flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-[0.12em] border border-primary/20 rounded-full bg-primary-soft px-2.5 py-0.5 text-primary-deep transition-colors duration-300 ease-[var(--ease-editorial)] group-hover/card:border-primary/35 group-hover/card:text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
