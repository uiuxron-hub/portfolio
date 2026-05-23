import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import heroBanner from "@/assets/hero-banner.png";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roland L. Guerra — Product Designer & UI/UX Engineer" },
      {
        name: "description",
        content:
          "Roland L. Guerra is a product designer focused on building intuitive systems, scalable workflows, and human-centered digital experiences.",
      },
      { property: "og:title", content: "Roland L. Guerra — Product Designer" },
      {
        property: "og:description",
        content:
          "Designing intuitive systems, scalable workflows, and human-centered digital experiences.",
      },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:image", content: absoluteUrl(heroBanner) },
      {
        name: "twitter:title",
        content: "Roland L. Guerra — Product Designer",
      },
      {
        name: "twitter:description",
        content:
          "Designing intuitive systems, scalable workflows, and human-centered digital experiences.",
      },
      { name: "twitter:image", content: absoluteUrl(heroBanner) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <HeroSection />
      <MarqueeSection />
      <SelectedWorkSection />
      <AboutSection />
      <ProcessSection />
      <ExperienceSection />
      <ContactSection />
    </PageShell>
  );
}
