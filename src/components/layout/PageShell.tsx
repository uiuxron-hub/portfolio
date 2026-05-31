import type { ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { pageTransition } from "@/lib/motion";

export function PageShell({
  children,
  mainClassName = "pt-16",
}: {
  children: ReactNode;
  mainClassName?: string;
}) {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen">
      <Nav />
      <motion.main
        key={location.pathname}
        className={mainClassName}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={pageTransition}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
