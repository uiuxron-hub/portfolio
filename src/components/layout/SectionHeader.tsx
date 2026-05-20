import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-end justify-between mb-12", className)}>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
          {eyebrow}
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl tracking-tight">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="hidden md:block max-w-xs text-sm text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
