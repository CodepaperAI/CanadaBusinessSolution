"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type KenBurnsImageProps = Omit<ImageProps, "ref"> & {
  wrapperClassName?: string;
  /** Scale the image starts from on enter (defaults to 1.08) */
  from?: number;
};

/**
 * Wrapper around next/image that applies a gentle Ken Burns-style
 * scale-in on viewport entry. Pairs well with scene photos; keeps
 * the site feeling alive without a looping animation.
 */
export function KenBurnsImage({
  wrapperClassName,
  from = 1.08,
  className,
  alt,
  ...imageProps
}: KenBurnsImageProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("relative h-full w-full overflow-hidden", wrapperClassName)}
      initial={prefersReducedMotion ? false : { scale: from }}
      whileInView={prefersReducedMotion ? undefined : { scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image alt={alt} className={className} {...imageProps} />
    </motion.div>
  );
}
