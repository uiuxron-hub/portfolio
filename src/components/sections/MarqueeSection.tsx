import { expertiseAreas } from "@/features/portfolio/content";

const simpleIconUrl = (icon: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon}.svg`;

export function MarqueeSection() {
  return (
    <section className="border-y hairline py-5 overflow-hidden">
      <div className="flex gap-12 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
        {[...expertiseAreas, ...expertiseAreas, ...expertiseAreas].map(
          (tool, index) => (
            <span
              key={`${tool.label}-${index}`}
              className="flex items-center gap-12 text-xs uppercase tracking-[0.22em] text-muted-foreground"
            >
              <span className="flex items-center gap-2.5">
                <img
                  src={simpleIconUrl(tool.icon)}
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 opacity-60"
                />
                {tool.label}
              </span>
              <span className="h-1 w-1 rounded-full bg-primary/55 shrink-0" />
            </span>
          ),
        )}
      </div>
    </section>
  );
}
