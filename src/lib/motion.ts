export const motionEase = [0.16, 1, 0.3, 1] as const;

export const motionTiming = {
  fast: 0.28,
  base: 0.48,
  slow: 0.68,
} as const;

export const revealViewport = {
  once: true,
  margin: "-12% 0px -8% 0px",
} as const;

export const revealTransition = {
  duration: motionTiming.slow,
  ease: motionEase,
} as const;
