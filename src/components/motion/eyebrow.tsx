"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "primary" | "mist" | "accent";
};

const toneMap = {
  primary: "text-primary",
  mist: "text-mist",
  accent: "text-accent",
} as const;

/**
 * Section eyebrow with a 40px accent line that draws in when the eyebrow
 * enters the viewport. Subtle, but marks each section's "entry" clearly.
 */
export function Eyebrow({ children, className, tone = "primary" }: EyebrowProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.p
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.6 }}
      className={cn(
        "inline-flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em]",
        toneMap[tone],
        className,
      )}
    >
      <motion.span
        aria-hidden
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className="inline-block h-px w-10 origin-left bg-current"
      />
      <span>{children}</span>
    </motion.p>
  );
}
