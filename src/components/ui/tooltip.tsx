"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion } from "motion/react";

import { motionEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const tooltipContentVariants = {
  default:
    "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
  floating:
    "pointer-events-none fixed z-[60] max-w-[min(22rem,calc(100vw-2rem))] rounded-lg border hairline bg-background/95 px-4 py-3 text-sm leading-relaxed text-foreground shadow-[0_18px_60px_-40px_var(--color-primary)] backdrop-blur-md",
};

type TooltipVariant = keyof typeof tooltipContentVariants;

interface TooltipContentProps extends React.ComponentPropsWithoutRef<
  typeof TooltipPrimitive.Content
> {
  variant?: TooltipVariant;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, variant = "default", ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(tooltipContentVariants[variant], className)}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

interface CursorTooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  contentClassName?: string;
  shouldReduceMotion?: boolean;
}

function CursorTooltip({
  children,
  className,
  content,
  contentClassName,
  shouldReduceMotion = false,
}: CursorTooltipProps) {
  const tooltipId = React.useId();
  const [tooltip, setTooltip] = React.useState({
    visible: false,
    left: 0,
    top: 0,
  });

  function updateTooltipPosition(clientX: number, clientY: number) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tooltipWidth = Math.min(352, viewportWidth - 32);
    const tooltipHeight = 96;
    const gap = 16;
    const inset = 16;

    let left =
      clientX + gap + tooltipWidth > viewportWidth - inset
        ? clientX - tooltipWidth - gap
        : clientX + gap;
    let top =
      clientY + gap + tooltipHeight > viewportHeight - inset
        ? clientY - tooltipHeight - gap
        : clientY + gap;

    left = Math.min(
      Math.max(left, inset),
      viewportWidth - tooltipWidth - inset,
    );
    top = Math.min(
      Math.max(top, inset),
      viewportHeight - tooltipHeight - inset,
    );

    setTooltip({
      visible: true,
      left,
      top,
    });
  }

  return (
    <div
      className={cn(
        "relative cursor-help focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className,
      )}
      tabIndex={0}
      aria-describedby={tooltip.visible ? tooltipId : undefined}
      onPointerEnter={(event) =>
        updateTooltipPosition(event.clientX, event.clientY)
      }
      onPointerMove={(event) =>
        updateTooltipPosition(event.clientX, event.clientY)
      }
      onPointerLeave={() =>
        setTooltip((current) => ({ ...current, visible: false }))
      }
      onFocus={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        updateTooltipPosition(rect.left + rect.width * 0.55, rect.top + 24);
      }}
      onBlur={() => setTooltip((current) => ({ ...current, visible: false }))}
    >
      {children}
      {tooltip.visible ? (
        <motion.div
          id={tooltipId}
          role="tooltip"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18, ease: motionEase }}
          className={cn(tooltipContentVariants.floating, contentClassName)}
          style={{
            left: tooltip.left,
            top: tooltip.top,
          }}
        >
          {content}
        </motion.div>
      ) : null}
    </div>
  );
}

export {
  CursorTooltip,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
};
