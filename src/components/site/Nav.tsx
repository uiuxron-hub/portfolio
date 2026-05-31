import { Link, useLocation } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Container } from "@/components/layout/Container";
import { motionEase, scrollProgressSpring } from "@/lib/motion";
import { cn } from "@/lib/utils";

const navItems = [
  { hash: "work", label: "Work" },
  { hash: "about", label: "About" },
  { hash: "process", label: "Process" },
] as const;

type NavHash = (typeof navItems)[number]["hash"];

export function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, scrollProgressSpring);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(
    isHome ? "work" : "",
  );

  useEffect(() => {
    const onScroll = () => {
      const heroThreshold = isHome ? window.innerHeight * 0.72 : 8;
      setScrolled(window.scrollY > heroThreshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const getSectionPositions = () =>
      navItems
        .map((item) => {
          const section = document.getElementById(item.hash);
          return section
            ? {
                hash: item.hash,
                top: section.getBoundingClientRect().top + window.scrollY,
              }
            : null;
        })
        .filter(
          (section): section is { hash: NavHash; top: number } =>
            section !== null,
        );

    let animationFrame = 0;

    const updateActiveSection = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const sectionPositions = getSectionPositions();

        if (!sectionPositions.length) {
          return;
        }

        const activationPoint = window.scrollY + 120;
        const currentSection = sectionPositions.reduce(
          (current, section) =>
            activationPoint >= section.top ? section.hash : current,
          sectionPositions[0].hash,
        );

        setActiveSection((current) =>
          current === currentSection ? current : currentSection,
        );
      });
    };

    if (location.hash) {
      setActiveSection(location.hash.replace(/^#/, ""));
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome, location.hash]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-200 ease-[var(--ease-editorial)] ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b hairline"
          : "bg-transparent"
      }`}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[height] duration-200 ease-[var(--ease-editorial)]",
          scrolled ? "h-14" : "h-16",
        )}
      >
        <Link
          to="/"
          aria-label="Roland L. Guerra home"
          className="group flex items-center"
        >
          <img
            src={logo}
            alt=""
            width={1465}
            height={308}
            className="h-7 w-auto max-w-[150px] transition-opacity duration-300 ease-[var(--ease-editorial)] group-hover:opacity-75 sm:max-w-[180px]"
          />
        </Link>

        <nav className="flex items-center gap-7 text-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.hash;

            return (
              <a
                key={item.hash}
                href={`/#${item.hash}`}
                aria-current={isActive ? "location" : undefined}
                className={`nav-link relative hidden md:inline pb-1 transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground lg:hover:text-primary"
                }`}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-primary"
                    transition={{ duration: 0.32, ease: motionEase }}
                  />
                ) : null}
              </a>
            );
          })}
          <a
            href="/#contact"
            className="motion-button inline-flex items-center gap-2 rounded-full border hairline px-3.5 py-1.5 lg:hover:bg-available/5 lg:hover:border-available/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-available" />
            Available
          </a>
        </nav>
      </Container>
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-primary/30"
        style={{
          scaleX: shouldReduceMotion ? scrollYProgress : progressScaleX,
        }}
      />
    </header>
  );
}
