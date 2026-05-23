import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import heroBanner from "@/assets/hero-banner.png";
import { Container } from "@/components/layout/Container";
import { ProgressiveImage } from "@/components/site/ProgressiveImage";
import { CursorTooltip } from "@/components/ui/tooltip";
import { motionEase, motionSpring } from "@/lib/motion";

const heroImageTooltip =
  "The floating imagery reflects how I think while designing.";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const smoothY = useSpring(y, motionSpring);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const smoothOpacity = useSpring(opacity, motionSpring);
  const headline = [
    "Designing products that turn",
    "complexity",
    "into",
    "clarity.",
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous === undefined || Math.abs(latest - previous) < 4) {
      return;
    }

    setIsScrollingDown(latest > previous);
  });

  return (
    <section ref={ref} className="relative">
      <Container className="flex min-h-[calc(100svh-4rem)] items-center pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid w-full grid-cols-12 items-center gap-8 lg:gap-10">
          <motion.div
            style={{
              y: shouldReduceMotion ? 0 : smoothY,
              opacity: shouldReduceMotion ? 1 : smoothOpacity,
            }}
            className="order-2 col-span-12 lg:order-1 lg:col-span-7"
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
                      ? "inline-block italic text-primary max-lg:mr-2"
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
              <a
                href="/#work"
                className="motion-button group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>View Projects</span>
              </a>
              <Link
                to="/resume"
                className="motion-button inline-flex items-center gap-2 rounded-full border hairline px-5 py-2.5 text-sm text-muted-foreground hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Resume
              </Link>
              <a
                href="/#contact"
                className="motion-button group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Contact</span>
                <ArrowRight className="motion-arrow size-4" />
              </a>
            </motion.div>
          </motion.div>

          <div className="relative order-1 col-span-12 lg:order-2 lg:col-span-5">
            <CursorTooltip
              content={heroImageTooltip}
              shouldReduceMotion={Boolean(shouldReduceMotion)}
            >
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
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -6, 0],
                          rotate: isScrollingDown ? 2.5 : 0,
                        }
                  }
                  transition={{
                    y: {
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotate: {
                      duration: 0.45,
                      ease: motionEase,
                    },
                  }}
                  className="h-full w-full origin-center overflow-hidden transform-gpu"
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
            </CursorTooltip>
          </div>
        </div>
      </Container>
    </section>
  );
}
