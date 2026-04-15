"use client";

import type { ReactNode } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import { revealUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

const backgroundClasses = {
  surface: "bg-transparent",
  paper: "rounded-shell bg-brand-paper/70",
  navy: "rounded-shell bg-brand-navy text-white",
} as const;

type SectionProps = Omit<HTMLMotionProps<"section">, "children"> & {
  background?: keyof typeof backgroundClasses;
  children?: ReactNode;
  containerClassName?: string;
  reveal?: boolean;
};

export function Section({
  background = "surface",
  children,
  className,
  containerClassName,
  reveal = true,
  ...props
}: SectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className={cn("relative py-20 sm:py-24", backgroundClasses[background], className)}
      initial={reveal && !prefersReducedMotion ? "hidden" : false}
      whileInView={reveal && !prefersReducedMotion ? "visible" : undefined}
      viewport={{ once: true, amount: 0.2 }}
      variants={revealUp}
      {...props}
    >
      <div className={cn("container relative", containerClassName)}>{children}</div>
    </motion.section>
  );
}
