import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/site/Reveal";

const simpleIconUrl = (icon: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon}.svg`;

export function ContactSection() {
  return (
    <section id="contact">
      <Container className="pt-32 lg:pt-44">
        <Reveal>
          <div className="rounded-3xl border hairline bg-card p-8 lg:p-16">
            <SectionHeader
              eyebrow="Contact "
              title={
                <>
                  Looking for meaningful work, thoughtful teams, and products{" "}
                  <span className="text-primary">built with purpose</span>.
                </>
              }
              variant="featured"
              className="mb-10 block"
            />

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=uiuxron@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="motion-button group inline-flex items-center gap-2 rounded-full bg-[#EA4335] px-5 py-3 text-sm font-medium text-white hover:bg-[#D93025] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img
                  src={simpleIconUrl("gmail")}
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 brightness-0 invert"
                />
                <span className="animated-link">uiuxron@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rlguerra/"
                target="_blank"
                rel="noreferrer"
                className="motion-button group inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-3 text-sm font-medium text-white hover:bg-[#004182] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img
                  src={simpleIconUrl("linkedin")}
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 brightness-0 invert"
                />
                <span className="animated-link">LinkedIn</span>
              </a>
              <a
                href="https://www.behance.net/rlguerra"
                target="_blank"
                rel="noreferrer"
                className="motion-button group inline-flex items-center gap-2 rounded-full bg-[#1769FF] px-5 py-3 text-sm font-medium text-white hover:bg-[#0057FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img
                  src={simpleIconUrl("behance")}
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 brightness-0 invert"
                />
                <span className="animated-link">Behance</span>
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
