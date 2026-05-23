import type { ReactNode } from "react";
import { CaseImagePlaceholder } from "@/components/site/CaseLayout";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export type EnterpriseCasePoint = {
  title: string;
  description: string;
};

export function OperationalHighlightGrid({
  items,
  className,
}: {
  items: EnterpriseCasePoint[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-8 grid gap-px overflow-hidden rounded-2xl border hairline bg-hairline sm:grid-cols-2",
        className,
      )}
    >
      {items.map((item) => (
        <article key={item.title} className="bg-background p-5 lg:p-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {item.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/78">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}

export function OperationalSplitStory({
  number,
  title,
  children,
  image,
  alt,
  reverse = false,
  className,
  imageClassName,
}: {
  number: string;
  title: string;
  children: ReactNode;
  image: string;
  alt: string;
  reverse?: boolean;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <section>
      <div
        className={cn(
          "mx-auto max-w-[1400px] px-6 pt-28 lg:px-10 lg:pt-40",
          className,
        )}
      >
        <Reveal y={22} duration={0.72}>
          <div className="grid grid-cols-12 items-center gap-y-10 gap-x-6 lg:gap-x-12">
            <div
              className={cn(
                "col-span-12 lg:col-span-5",
                reverse && "lg:order-2",
              )}
            >
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {number}
              </p>
              <h2 className="font-serif text-3xl tracking-tight lg:text-4xl">
                {title}
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-foreground/80 text-pretty">
                {children}
              </div>
            </div>
            <div
              className={cn(
                "col-span-12 lg:col-span-7",
                reverse && "lg:order-1",
              )}
            >
              <CaseImagePlaceholder
                ariaLabel={alt}
                source={image}
                className={cn("aspect-[16/10]", imageClassName)}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function EditorialReflection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-36 lg:pt-52">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="border-t hairline">
          <div className="mx-auto max-w-3xl pt-12 lg:pt-16">
            <Reveal y={18} duration={0.78}>
              <p className="mb-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {number}
              </p>
              <h2 className="font-serif text-[clamp(2.25rem,4vw,4.15rem)] leading-[1.08] tracking-tight text-balance">
                {title}
              </h2>
              <div className="mt-8 space-y-6 text-[17px] leading-[1.85] text-foreground/78 text-pretty">
                {children}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
