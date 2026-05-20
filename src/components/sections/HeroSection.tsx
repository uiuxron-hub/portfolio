import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import heroBanner from "@/assets/hero-banner.png";
import { Container } from "@/components/layout/Container";
import { ProgressiveImage } from "@/components/site/ProgressiveImage";
import { motionEase } from "@/lib/motion";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const headline = [
    "Designing products that turn",
    "complexity",
    "into",
    "clarity.",
  ];

  return (
    <section ref={ref} className="relative">
      <Container className="flex min-h-[calc(100svh-4rem)] items-center pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid w-full grid-cols-12 items-center gap-8 lg:gap-10">
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : y, opacity }}
            className="col-span-12 lg:col-span-7"
          >
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 10, filter: "blur(6px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.48, ease: motionEase }}
              className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-8"
            >
              <span className="h-px w-8 bg-foreground/40" />
              Product Designer | UI/UX Engineer
            </motion.div>

            <motion.h1
              className="font-serif text-[clamp(2.6rem,6.4vw,5.6rem)] leading-[1.02] tracking-[-0.02em] text-balance"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.055,
                    delayChildren: shouldReduceMotion ? 0 : 0.08,
                  },
                },
              }}
            >
              {headline.map((part, index) => (
                <motion.span
                  key={part}
                  className={
                    index === 1 || index === 3
                      ? "inline-block italic text-primary"
                      : "inline"
                  }
                  variants={{
                    hidden: shouldReduceMotion
                      ? {}
                      : { opacity: 0, y: 16, filter: "blur(8px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.62, ease: motionEase },
                    },
                  }}
                >
                  {part}
                  {index < headline.length - 1 ? " " : null}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 14, filter: "blur(5px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.58, delay: 0.28, ease: motionEase }}
              className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground text-pretty"
            >
              I design products that simplify complexity — balancing usability,
              business goals, and real-world implementation. Currently open to
              remote opportunities in healthcare, enterprise, and operational
              SaaS.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38, ease: motionEase }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/"
                hash="work"
                className="motion-button group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>View Projects</span>
                <ArrowRight className="motion-arrow size-4" />
              </Link>
              <span
                aria-disabled="true"
                title="Resume PDF pending"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border hairline px-5 py-2.5 text-sm text-muted-foreground opacity-70"
              >
                Resume
              </span>
              <Link
                to="/"
                hash="contact"
                className="motion-button group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Contact</span>
                <ArrowRight className="motion-arrow size-4" />
              </Link>
            </motion.div>
          </motion.div>

          <div className="col-span-12 lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.72,
                delay: 0.2,
                ease: motionEase,
              }}
              className="relative mx-auto aspect-[4/5] w-full max-w-[520px] lg:aspect-[5/6] lg:max-w-none"
            >
              <motion.div
                animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-full overflow-hidden"
              >
                <ProgressiveImage
                  src={heroBanner}
                  alt="Roland L. Guerra"
                  width={2568}
                  height={2364}
                  imgClassName="h-full w-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
