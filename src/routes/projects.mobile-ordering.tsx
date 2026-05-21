import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  CaseImagePlaceholder,
  CaseLayout,
  ImageBand,
  Section,
} from "@/components/site/CaseLayout";
import designSystem from "@/assets/design-system.jpg";
import heroStack from "@/assets/hero-stack.jpg";
import projectMatcha from "@/assets/project-matcha.jpg";
import workspace from "@/assets/workspace.jpg";

const productPillars = [
  ["Delivery & Pickup", "Flexible ordering flow"],
  ["Loyalty Program", "Reward-based retention"],
  ["E-Wallet", "Future-ready payment ecosystem"],
  ["Store Locator", "Multi-branch accessibility"],
];

const challenges = [
  [
    "Multiple Ordering Flows",
    "Supporting both delivery and pickup without creating navigation friction.",
  ],
  [
    "Retention & Loyalty",
    "Encouraging repeat engagement through tiered rewards and customer progression.",
  ],
  [
    "Future Wallet Ecosystem",
    "Preparing the experience for wallet integration and transaction visibility.",
  ],
];

const mvpPriorities = [
  [
    "Delivery & Pickup",
    "Core ordering experience focused on flexibility and convenience.",
  ],
  [
    "Loyalty System",
    "Retention-focused reward experience encouraging repeat purchases.",
  ],
  [
    "User Account & Wallet",
    "Foundation for payment tracking and future wallet integration.",
  ],
];

export const Route = createFileRoute("/projects/mobile-ordering")({
  head: () => ({
    meta: [
      {
        title: "Premium Beverage Ordering & Loyalty Platform · Case study",
      },
      {
        name: "description",
        content:
          "A calm mobile ordering experience focused on delivery, pickup, loyalty rewards, and wallet integration.",
      },
      {
        property: "og:title",
        content: "Premium Beverage Ordering & Loyalty Platform",
      },
      {
        property: "og:description",
        content:
          "A product-focused case study for a calm ordering, loyalty, and wallet experience.",
      },
      { property: "og:url", content: "/projects/mobile-ordering" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: projectMatcha },
    ],
    links: [{ rel: "canonical", href: "/projects/mobile-ordering" }],
  }),
  component: BeverageCase,
});

function BeverageCase() {
  return (
    <CaseLayout
      eyebrow="CASE STUDY — 02"
      title="Mobile Ordering & Loyalty App"
      summary="Designed a mobile ordering experience focused on delivery, pickup, loyalty rewards, and wallet integration balancing operational usability with a calm and premium customer experience for modern lifestyle consumers."
      client="Premium beverage ordering and loyalty platform"
      role="Lead Designer"
      year="2025"
      metadata={[
        ["Industry", "Food & Beverage"],
        ["Role", "Lead Designer"],
        ["Timeline", "2025"],
      ]}
      heroImage={projectMatcha}
      heroAlt="Premium beverage ordering mobile product mockup"
      nextSlug="/projects/design-system"
      nextTitle="Design System for Operational Products"
      nextMeta="Design Systems • Components • Documentation"
    >
      <Section
        number="01 — Project context"
        title="A brand-first mobile product."
      >
        <p>
          The product was designed to make ordering more accessible and seamless
          while supporting delivery, pickup, loyalty engagement, and future
          wallet integration within a calm and minimal interface system.
        </p>
        <FeatureGrid items={productPillars} />
      </Section>

      <Section
        number="02 — The challenge"
        title="A consumer app that doesn’t feel transactional."
      >
        <p>
          The experience needed to support multiple customer journeys from
          delivery and pickup to loyalty rewards and transaction history while
          keeping the interface lightweight, calm, and easy to navigate.
        </p>
        <p>
          The challenge was balancing operational functionality with a premium
          and approachable customer experience.
        </p>
        <FeatureGrid items={challenges} />
      </Section>

      <ImageBand
        src={projectMatcha}
        alt="Delivery, pickup, category browsing, and ordering screens"
      />

      <Section
        number="03 — MVP structure"
        title="Three priorities shaped the MVP."
      >
        <PriorityTable items={mvpPriorities} />
      </Section>

      <SplitStory
        number="04 — Ordering experience"
        title="Designing around real customer flows."
        image={workspace}
        alt="Ordering, category, cart, and checkout interface compositions"
      >
        <FeatureList
          items={[
            "Quick navigation",
            "Reduced decision friction",
            "Clearer product discovery",
            "Flexible delivery & pickup modes",
            "Seamless browsing to checkout flow",
            "Integrated store selection experience",
          ]}
        />
      </SplitStory>

      <SplitStory
        number="05 — Loyalty & retention"
        title="Loyalty as a quiet retention layer."
        image={heroStack}
        alt="Loyalty tiers, rewards, member progression, and retention screens"
        reverse
      >
        <FeatureList
          items={[
            "Visible progression",
            "Unlockable loyalty tiers",
            "Exclusive member rewards",
            "Subtle retention experience",
            "Calm customer progression",
            "Long-term customer familiarity",
          ]}
        />
      </SplitStory>

      <SplitStory
        number="06 — Wallet & transactions"
        title="A payment experience built around clarity."
        image={projectMatcha}
        alt="Wallet, transaction history, payment flow, and rewards integration"
      >
        <FeatureList
          items={[
            "Clear payment visibility",
            "Integrated transaction history",
            "Future-ready wallet ecosystem",
            "Support for top-ups & rewards",
            "Transparent payment flows",
            "Loyalty-connected purchases",
          ]}
        />
      </SplitStory>

      <Section
        number="07 — Visual system"
        title="A visual system designed for calm interaction."
      >
        <p>
          The interface used soft visual hierarchy, lightweight navigation, and
          minimal UI patterns to support a calmer ordering experience aligned
          with the brand’s lifestyle identity.
        </p>
        <p>
          The design system focused on consistency, readability, and scalable
          component behavior across multiple product flows.
        </p>
      </Section>

      <ImageBand
        src={designSystem}
        alt="Typography, spacing, reusable components, color palette, and modular UI structure"
      />

      <Section
        number="08 — Reflection"
        title="Designing for evolving workflows."
      >
        <p>
          This project strengthened my understanding of balancing operational
          workflows, customer usability, and scalable product systems within a
          single ecosystem.
        </p>
        <p>
          It also reinforced how product requirements evolve continuously,
          especially when designing around ordering logic, loyalty systems, and
          future payment experiences.
        </p>
      </Section>
    </CaseLayout>
  );
}

function FeatureGrid({ items }: { items: string[][] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map(([title, description]) => (
        <div key={title} className="rounded-2xl border hairline p-4">
          <p className="text-sm font-medium">{title}</p>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
      ))}
    </div>
  );
}

function PriorityTable({ items }: { items: string[][] }) {
  return (
    <div className="overflow-hidden rounded-2xl border hairline">
      {items.map(([title, description]) => (
        <div
          key={title}
          className="grid gap-3 border-b hairline p-4 last:border-b-0 md:grid-cols-[13rem_1fr] md:p-5"
        >
          <p className="text-sm font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      ))}
    </div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SplitStory({
  number,
  title,
  children,
  image,
  alt,
  reverse = false,
}: {
  number: string;
  title: string;
  children: ReactNode;
  image: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section>
      <div className="mx-auto max-w-[1400px] px-6 pt-24 lg:px-10 lg:pt-32">
        <div className="grid grid-cols-12 items-center gap-6 lg:gap-10">
          <div
            className={
              reverse
                ? "col-span-12 lg:order-2 lg:col-span-5"
                : "col-span-12 lg:col-span-5"
            }
          >
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {number}
            </p>
            <h2 className="font-serif text-3xl tracking-tight lg:text-4xl">
              {title}
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80 text-pretty">
              {children}
            </div>
          </div>
          <div
            className={
              reverse
                ? "col-span-12 lg:order-1 lg:col-span-7"
                : "col-span-12 lg:col-span-7"
            }
          >
            <CaseImagePlaceholder
              ariaLabel={alt}
              source={image}
              className="aspect-[16/10]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
