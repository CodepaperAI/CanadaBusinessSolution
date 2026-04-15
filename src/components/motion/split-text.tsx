"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

const container: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: {
      delayChildren: delay,
      staggerChildren: 0.08,
    },
  }),
};

const word: Variants = {
  hidden: { y: "1.05em", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Splits text into words and animates each in on mount.
 * Each word is wrapped in an overflow-hidden span so the motion reads as
 * "type rising into place" rather than a crossfade.
 */
export function SplitText({
  text,
  className,
  delay = 0.1,
  as: Tag = "h1",
}: SplitTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (prefersReducedMotion) {
    const Plain = Tag as "h1";
    return <Plain className={className}>{text}</Plain>;
  }

  const content: ReactNode = words.map((w, i) => (
    <span
      key={`${w}-${i}`}
      className="relative inline-block overflow-hidden align-baseline pb-[0.1em] mr-[0.25em]"
    >
      <motion.span variants={word} className="inline-block will-change-transform">
        {w}
      </motion.span>
    </span>
  ));

  const MotionTag =
    Tag === "h1"
      ? motion.h1
      : Tag === "h2"
        ? motion.h2
        : Tag === "h3"
          ? motion.h3
          : Tag === "p"
            ? motion.p
            : motion.span;

  return (
    <MotionTag
      variants={container}
      initial="hidden"
      animate="visible"
      custom={delay}
      className={className}
    >
      {content}
    </MotionTag>
  );
}
