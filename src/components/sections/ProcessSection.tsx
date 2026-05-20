import workflowDiagram from "@/assets/workflow-diagram.jpg";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProgressiveImage } from "@/components/site/ProgressiveImage";
import { Reveal } from "@/components/site/Reveal";
import { processSteps } from "@/features/portfolio/content";

export function ProcessSection() {
  return (
    <section id="process">
      <Container className="pt-32 lg:pt-44">
        <Reveal>
          <SectionHeader
            eyebrow="How I work — 04"
            title="A practical, five-step rhythm."
          />
        </Reveal>

        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border hairline">
              <ProgressiveImage
                src={workflowDiagram}
                alt="Workflow diagram"
                loading="lazy"
                width={1400}
                height={1000}
                imgClassName="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="col-span-12 lg:col-span-7 space-y-px border-t border-b hairline">
            {processSteps.map((step, index) => (
              <Reveal key={step.n} delay={index * 0.05}>
                <div className="group grid grid-cols-12 gap-4 py-6 border-b hairline last:border-b-0 hover:bg-secondary/40 transition-colors px-4 -mx-4 rounded-lg">
                  <div className="col-span-2 lg:col-span-1 text-xs text-muted-foreground tabular-nums pt-1">
                    {step.n}
                  </div>
                  <div className="col-span-10 lg:col-span-4">
                    <h3 className="text-base font-medium">{step.title}</h3>
                  </div>
                  <div className="col-span-12 lg:col-span-7 text-sm text-muted-foreground text-pretty">
                    {step.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
