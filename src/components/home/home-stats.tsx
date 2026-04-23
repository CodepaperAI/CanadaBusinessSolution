"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { StatCounter } from "@/components/home/stat-counter";
import { gsap } from "@/lib/gsap";
import { Eyebrow } from "@/components/motion/eyebrow";

type Stat = {
  value: number | string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Businesses launched" },
  { value: 10, suffix: "+", label: "Years in practice" },
  { value: "Canada-wide", label: "Service coverage" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
];

export function HomeStats() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-stat-card]");
      gsap.fromTo(
        items,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <Eyebrow>By the numbers</Eyebrow>
          <h2 className="h-section mt-3 text-navy">
            Ten years of practical results.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-navy/15 pt-10 sm:gap-10 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat) => (
            <article
              key={stat.label}
              data-stat-card
              className="flex flex-col"
            >
              {typeof stat.value === "number" ? (
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-display text-[clamp(2.75rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.03em] text-navy"
                />
              ) : (
                <span className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-navy">
                  {stat.value}
                </span>
              )}
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-navy">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
