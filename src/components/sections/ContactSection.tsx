import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/site/Reveal";
import { contactDetails } from "@/features/portfolio/content";

export function ContactSection() {
  return (
    <section id="contact">
      <Container className="pt-32 lg:pt-44">
        <Reveal>
          <div className="rounded-3xl border hairline bg-card p-8 lg:p-16">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
              Contact — 06
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance max-w-3xl">
              Open to remote opportunities, product collaborations, and
              meaningful digital experiences.
            </h2>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="mailto:uiuxron@gmail.com"
                className="motion-button group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>uiuxron@gmail.com</span>
                <ArrowUpRight className="motion-arrow size-4 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rlguerra/"
                target="_blank"
                rel="noreferrer"
                className="motion-button group inline-flex items-center gap-2 rounded-full border hairline px-5 py-3 text-sm text-muted-foreground hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="motion-arrow size-4 group-hover:-translate-y-0.5" />
              </a>
              <Link
                to="/resume"
                className="motion-button inline-flex items-center gap-2 rounded-full border hairline px-5 py-3 text-sm text-muted-foreground hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Resume (PDF)
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t hairline grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              {contactDetails.map(([label, value]) => (
                <div key={label}>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
