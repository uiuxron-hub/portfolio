import { ChevronDown } from "lucide-react";
import { motion, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { experienceEntries } from "@/features/portfolio/content";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [expandedEntry, setExpandedEntry] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 58%"],
  });

  return (
    <section id="experience">
      <Container className="pt-32 lg:pt-44">
        <Reveal>
          <SectionHeader
            eyebrow="WORK EXPERIENCE"
            title="Years spent designing through complexity."
          />
        </Reveal>

        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12">
            <div ref={timelineRef} className="relative border-t hairline">
              <motion.div
                aria-hidden="true"
                className="absolute left-0 top-0 hidden h-full w-px origin-top bg-primary/55 md:block"
                style={{ scaleY: scrollYProgress }}
              />
              {experienceEntries.map((entry, index) => (
                <Reveal key={entry.role} delay={index * 0.05}>
                  <div className="group grid grid-cols-12 gap-4 border-b hairline py-7 transition-colors duration-500 ease-[var(--ease-editorial)] hover:bg-secondary/25 md:pl-6">
                    <div className="col-span-12 pt-1 text-xs tabular-nums text-muted-foreground md:col-span-3">
                      <Reveal delay={0.08} y={8} duration={0.3}>
                        <span className="inline-block transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-1">
                          {entry.year}
                        </span>
                      </Reveal>
                    </div>
                    <div className="col-span-12 space-y-4 md:col-span-9">
                      <h3 className="text-base font-medium">{entry.role}</h3>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {entry.org}
                      </p>
                      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground text-pretty">
                        {entry.detail}
                      </p>

                      {entry.tags ? (
                        <div className="flex max-w-3xl flex-wrap gap-2 pt-1">
                          {entry.tags.map((tag, tagIndex) => (
                            <Reveal
                              key={tag}
                              delay={0.12 + tagIndex * 0.045}
                              y={8}
                              duration={0.3}
                            >
                              <span className="inline-flex rounded-full border hairline bg-background px-3 py-1 text-xs text-muted-foreground transition-[background-color,border-color,color,transform] duration-300 ease-[var(--ease-editorial)] hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary-soft group-hover:border-primary/20 group-hover:text-foreground">
                                {tag}
                              </span>
                            </Reveal>
                          ))}
                        </div>
                      ) : null}

                      {entry.progression ? (
                        <div className="max-w-3xl pt-2">
                          <button
                            type="button"
                            aria-expanded={expandedEntry === entry.role}
                            onClick={() =>
                              setExpandedEntry((current) =>
                                current === entry.role ? null : entry.role,
                              )
                            }
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            Growth progression
                            <ChevronDown
                              className={cn(
                                "size-3.5 transition-transform duration-300",
                                expandedEntry === entry.role &&
                                  "rotate-180 text-primary",
                              )}
                            />
                          </button>

                          {expandedEntry === entry.role ? (
                            <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                              {entry.progression.map((step, stepIndex) => (
                                <li
                                  key={step}
                                  className="relative rounded-xl border hairline bg-background p-3 text-sm text-muted-foreground"
                                >
                                  <span className="mb-3 block text-xs tabular-nums text-primary">
                                    {String(stepIndex + 1).padStart(2, "0")}
                                  </span>
                                  <span className="text-pretty">{step}</span>
                                </li>
                              ))}
                            </ol>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
