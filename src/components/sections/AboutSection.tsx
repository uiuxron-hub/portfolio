import portrait from "@/assets/portrait-roland.png";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProgressiveImage } from "@/components/site/ProgressiveImage";
import { Reveal } from "@/components/site/Reveal";
import { aboutFacts } from "@/features/portfolio/content";

export function AboutSection() {
  return (
    <section id="about">
      <Container className="pt-20 lg:pt-28">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-0">
          <Reveal className="col-span-12 lg:col-span-6">
            <div className="flex justify-center">
              <div className="group">
                <ProgressiveImage
                  src={portrait}
                  alt="Portrait of Roland L. Guerra"
                  loading="lazy"
                  width={1023}
                  height={1537}
                  className="mx-auto h-auto max-w-[20rem] overflow-visible sm:max-w-[24rem] lg:mx-0 lg:max-w-[27rem] xl:max-w-[30rem]"
                  imgClassName="h-auto w-full object-contain"
                />
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="col-span-12 w-full lg:col-span-6 lg:max-w-xl lg:justify-self-center"
          >
            <SectionHeader
              eyebrow="About Me"
              title={
                <>
                  Designing products that make{" "}
                  <span className="text-primary">complex</span> things feel{" "}
                  <span className="text-primary">simple</span>.
                </>
              }
              className="mb-10"
              contentClassName="max-w-xl"
            />

            <div className="max-w-xl space-y-5 text-[15px] leading-relaxed text-foreground/80">
              <p>
                I’m Ron — a Product Designer and UI/UX Engineer with 5 years of
                experience designing operational systems, enterprise tools, and
                digital products across different industries.
              </p>
              <p>
                I enjoy simplifying complex workflows into experiences that feel
                intuitive, calm, and easy to use. My work sits between product
                thinking, systems design, and real-world implementation working
                closely with developers, stakeholders, and evolving product
                needs.
              </p>
              <p>
                Outside of design, I enjoy films, anime, manga, and music quiet
                spaces that allow me to slow down, breathe, and think more
                creatively. A lot of my imagination and design thinking often
                starts in those moments of solitude.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-y-8 gap-x-6 lg:max-w-xl">
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
