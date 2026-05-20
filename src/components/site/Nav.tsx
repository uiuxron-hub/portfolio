import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Container } from "@/components/layout/Container";

const navItems = [
  { hash: "work", label: "Work" },
  { hash: "about", label: "About" },
  { hash: "process", label: "Process" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.hash))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.08, 0.18, 0.32],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-background/75 border-b hairline"
          : "bg-transparent"
      }`}
    >
      <Container className="h-16 flex items-center justify-between">
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
              <Link
                key={item.hash}
                to="/"
                hash={item.hash}
                aria-current={isActive ? "true" : undefined}
                className={`nav-link relative hidden md:inline pb-1 transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-primary"
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  />
                ) : null}
              </Link>
            );
          })}
          <Link
            to="/"
            hash="contact"
            className="motion-button inline-flex items-center gap-2 rounded-full border hairline px-3.5 py-1.5 hover:border-primary hover:text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-matcha" />
            Available
          </Link>
        </nav>
      </Container>
    </header>
  );
}
