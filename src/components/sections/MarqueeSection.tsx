import { expertiseAreas } from "@/features/portfolio/content";

export function MarqueeSection() {
  return (
    <section className="border-y hairline py-5 overflow-hidden">
      <div className="flex gap-12 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
        {[...expertiseAreas, ...expertiseAreas, ...expertiseAreas].map(
          (area, index) => (
            <span
              key={`${area}-${index}`}
              className="text-xs uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-12"
            >
              {area}
              <span className="h-1 w-1 rounded-full bg-primary/55 shrink-0" />
            </span>
          ),
        )}
      </div>
    </section>
  );
}
