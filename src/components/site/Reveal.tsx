import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import { motionEase, revealViewport } from "@/lib/motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  blur?: number;
  y?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.64,
  blur = 0,
  y = 16,
  ...rest
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y, filter: blur ? `blur(${blur}px)` : "blur(0px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={revealViewport}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: motionEase,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
