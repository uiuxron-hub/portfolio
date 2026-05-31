export const motionEase = [0.16, 1, 0.3, 1] as const;

export const motionTiming = {
  quick: 0.18,
  page: 0.28,
  fast: 0.28,
  base: 0.48,
  slow: 0.68,
} as const;

export const motionSpring = {
  stiffness: 90,
  damping: 26,
  mass: 0.35,
} as const;

export const scrollProgressSpring = {
  stiffness: 120,
  damping: 30,
  restDelta: 0.001,
} as const;

export const revealViewport = {
  once: true,
  amount: 0.18,
  margin: "-10% 0px -8% 0px",
} as const;

export const revealTransition = {
  duration: motionTiming.slow,
  ease: motionEase,
} as const;

export const pageTransition = {
  duration: motionTiming.page,
  ease: motionEase,
} as const;

export const microInteraction = {
  hoverY: -3,
  hoverScale: 1.02,
  duration: motionTiming.quick,
} as const;
