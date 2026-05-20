import { createFileRoute } from "@tanstack/react-router";
import { CaseLayout, Section, ImageBand } from "@/components/site/CaseLayout";
import projectMatcha from "@/assets/project-matcha.jpg";
import workspace from "@/assets/workspace.jpg";
import heroStack from "@/assets/hero-stack.jpg";

export const Route = createFileRoute("/projects/mobile-ordering")({
  head: () => ({
    meta: [
      { title: "Matcha — Mobile Ordering & Loyalty · Case study" },
      {
        name: "description",
        content:
          "Designing the delivery, pickup, and loyalty experience for a premium matcha brand.",
      },
      { property: "og:title", content: "Matcha — Mobile Ordering & Loyalty" },
      {
        property: "og:description",
        content:
          "From ordering flow to loyalty mechanics — a calm, premium mobile product.",
      },
      { property: "og:url", content: "/projects/mobile-ordering" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: projectMatcha },
    ],
    links: [{ rel: "canonical", href: "/projects/mobile-ordering" }],
  }),
  component: MatchaCase,
});

function MatchaCase() {
  return (
    <CaseLayout
      eyebrow="Case study · 02 · Consumer"
      title="A calm, premium ordering experience for a matcha brand."
      summary="Designed the MVP for a premium matcha brand's mobile product — delivery, pickup, loyalty, and a roadmap for an e-wallet — built to feel as considered as the product itself."
      client="Matcha · Consumer brand"
      role="Lead Product Designer"
      year="2024"
      heroImage={projectMatcha}
      heroAlt="Matcha mobile ordering app"
      nextSlug="/projects/erp"
      nextTitle="Enterprise ERP System"
    >
      <Section number="01 — Overview" title="A brand-first mobile product.">
        <p>
          The brief was deceptively simple: build a mobile app that lets
          customers order matcha for delivery or pickup, earn loyalty, and
          eventually pay with a stored balance. The harder problem was tone —
          the brand was built on slowness and ritual, and most ordering apps are
          built on speed and noise.
        </p>
      </Section>

      <Section
        number="02 — Problem"
        title="A consumer app that doesn't feel like one."
      >
        <p>
          Existing mobile ordering products optimize for transactions. This
          brand needed an interface that felt like part of the ritual — quiet,
          confident, and considered — without compromising on conversion.
        </p>
      </Section>

      <Section number="03 — Goals" title="Three commitments for the MVP.">
        <ul className="space-y-3">
          {[
            ["Calm", "A premium, restrained interface — no upsell theater."],
            ["Clarity", "Ordering, pickup, and loyalty in 3 taps or fewer."],
            ["Scale", "Foundation for an e-wallet and partner stores in v2."],
          ].map(([k, v]) => (
            <li
              key={k}
              className="grid grid-cols-12 gap-4 border-t hairline pt-3 last:border-b last:pb-3"
            >
              <span className="col-span-12 md:col-span-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {k}
              </span>
              <span className="col-span-12 md:col-span-10">{v}</span>
            </li>
          ))}
        </ul>
      </Section>

      <ImageBand src={projectMatcha} alt="Matcha app product shot" />

      <Section
        number="04 — Workflow & IA"
        title="A flat, ritual-friendly architecture."
      >
        <p>
          We resisted the urge to model the app around menus. Instead, the home
          is a single ordering surface with three modes — delivery, pickup, and
          reorder — each two taps from checkout. Loyalty lives in the same
          surface, surfaced contextually instead of as a separate tab.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border hairline mt-4">
          {[
            ["3", "Taps to checkout"],
            ["1", "Home for all modes"],
            ["v2", "E-wallet roadmap"],
            ["12", "MVP screens"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background p-5">
              <p className="font-serif text-2xl tracking-tight">{n}</p>
              <p className="mt-1 text-xs text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section number="05 — UX thinking" title="Loyalty as a quiet companion.">
        <p>
          Most loyalty programs scream. Ours whispers: points appear after
          confirmation, redemption is an inline toggle at checkout, and tier
          progress lives in a single muted indicator. The reward is the ritual,
          not the gamification.
        </p>
      </Section>

      <ImageBand src={heroStack} alt="Flows and screens" />

      <Section
        number="06 — MVP prioritization"
        title="Saying no to keep the launch honest."
      >
        <p>
          We mapped 38 candidate features to a 2×2 of effort × brand-fit and
          shipped only the 12 that earned both axes. Stored payment, social
          sharing, and partner discovery were deferred to v2 — the MVP needed to
          ship calm, not crowded.
        </p>
      </Section>

      <Section
        number="07 — Solution & final UI"
        title="A product that respects its own pace."
      >
        <p>
          The final interface uses generous spacing, restrained type, and the
          brand's matcha palette as a structural element rather than decoration.
          Photography is editorial — closer to a cookbook than an ad — and
          motion is reserved for confirmations.
        </p>
      </Section>

      <ImageBand src={workspace} alt="Design process" />

      <Section number="08 — Outcome" title="A launch that matched the brand.">
        <p>
          The MVP shipped on time with a 41% week-one retention and an average
          order frequency 2.1× the brand's web baseline. More importantly,
          customer reviews used the words "calm," "clean," and "considered" —
          the exact language the brand had asked for.
        </p>
      </Section>

      <Section number="09 — Reflection" title="Brand is a system constraint.">
        <p>
          The strongest design choices on this project came from treating the
          brand as a hard constraint, not a coat of paint. The interface
          succeeds because every prioritization decision was filtered through
          the same question the brand asks itself:{" "}
          <em>does this respect the ritual?</em>
        </p>
      </Section>
    </CaseLayout>
  );
}
