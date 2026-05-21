import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const titleVariants = {
  default:
    "font-serif text-4xl lg:text-5xl tracking-tight leading-[1.05] text-balance",
  featured:
    "font-serif text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance",
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  variant = "default",
  className,
  contentClassName,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  variant?: keyof typeof titleVariants;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <div className={cn("flex items-end justify-between mb-12", className)}>
      <div className={cn("max-w-3xl", contentClassName)}>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
          {eyebrow}
        </p>
        <h2 className={titleVariants[variant]}>{title}</h2>
      </div>
      {description ? (
        <p className="hidden md:block max-w-xs text-sm text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
