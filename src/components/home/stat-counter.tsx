"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";

type StatCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
};

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
    mass: 1,
  });
  const rounded = useTransform(springValue, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toLocaleString(),
  );
  const [display, setDisplay] = useState<string>("0");

  useEffect(() => {
    const unsub = rounded.on("change", (latest) => setDisplay(latest));
    return () => unsub();
  }, [rounded]);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setDisplay(
        decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString(),
      );
      return;
    }
    motionValue.set(value);
  }, [inView, prefersReducedMotion, value, decimals, motionValue]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
