import { motion, useScroll } from "motion/react";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { experienceEntries } from "@/features/portfolio/content";

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 58%"],
  });

  return (
    <section id="experience">
      <Container className="pt-32 lg:pt-44">
        <Reveal>
          <SectionHeader
            eyebrow="Experience — 05"
            title="A short, focused track record."
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
                  <div className="group grid grid-cols-12 gap-4 py-7 border-b hairline transition-colors duration-500 ease-[var(--ease-editorial)] hover:bg-secondary/25 md:pl-6">
                    <div className="col-span-12 md:col-span-3 text-xs text-muted-foreground tabular-nums pt-1 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-1">
                      {entry.year}
                    </div>
                    <div className="col-span-12 md:col-span-9 space-y-2">
                      <h3 className="text-base font-medium">{entry.role}</h3>
                      <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {entry.org}
                      </p>
                      <p className="text-sm text-muted-foreground text-pretty max-w-xl">
                        {entry.detail}
                      </p>
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
