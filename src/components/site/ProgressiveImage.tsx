import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motionEase } from "@/lib/motion";

interface ProgressiveImageProps extends Omit<
  HTMLMotionProps<"img">,
  "className"
> {
  className?: string;
  imgClassName?: string;
}

export function ProgressiveImage({
  alt,
  className,
  imgClassName,
  onLoad,
  src,
  ...props
}: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setLoaded(false);

    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {!loaded ? (
        <motion.div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 bg-[linear-gradient(110deg,var(--color-secondary),var(--color-background),var(--color-secondary))] bg-[length:220%_100%]",
            !shouldReduceMotion &&
              "animate-[image-sheen_1.8s_var(--ease-editorial)_infinite]",
          )}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: motionEase }}
        />
      ) : null}
      <motion.img
        ref={imageRef}
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", imgClassName)}
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.015 }}
        animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.015 }}
        transition={{
          duration: shouldReduceMotion ? 0.01 : 0.55,
          ease: motionEase,
        }}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        onError={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
}
