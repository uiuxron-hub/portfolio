import portrait from "@/assets/portrait-roland.png";
import workspace from "@/assets/workspace.jpg";
import { Container } from "@/components/layout/Container";
import { ProgressiveImage } from "@/components/site/ProgressiveImage";
import { Reveal } from "@/components/site/Reveal";
import { aboutFacts } from "@/features/portfolio/content";

export function AboutSection() {
  return (
    <section id="about">
      <Container className="pt-32 lg:pt-44">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="group">
                <ProgressiveImage
                  src={portrait}
                  alt="Portrait of Roland L. Guerra"
                  loading="lazy"
                  width={1023}
                  height={1537}
                  imgClassName="h-full w-full"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 lg:col-span-7 lg:pt-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
              About — 03
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight leading-[1.05] text-balance">
              I focus on transforming complex workflows into intuitive, scalable
              digital experiences.
            </h2>

            <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-foreground/80 max-w-xl">
              <p>
                I'm a product designer and UI/UX engineer with a background in
                enterprise systems, operational tooling, and consumer products.
                I think in systems and ship close to engineering — the work
                isn't done when the file is pretty, it's done when it's running
                in production.
              </p>
              <p>
                My practice sits at the intersection of{" "}
                <em>
                  workflow design, operational UX, and implementation awareness
                </em>
                . I work well with PMs, engineers, and stakeholders who care
                about clarity over ceremony, and I've spent the last two years
                integrating AI-assisted workflows into research, exploration,
                and handoff.
              </p>
              <p>
                I care about calm interfaces, honest hierarchy, and products
                that respect the people doing the work behind them.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-y-8 gap-x-6 max-w-xl">
              {aboutFacts.map(([label, value]) => (
                <div key={label}>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
