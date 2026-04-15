"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Files, Flag, PhoneCall } from "lucide-react";
import { gsap } from "@/lib/gsap";

const steps = [
  {
    number: "01",
    title: "Book a Consultation",
    description:
      "We start with your business stage, timeline, and the approvals that actually shape a launch. No scripts, no upsells.",
    icon: PhoneCall,
    detail: "60-minute structured first call",
  },
  {
    number: "02",
    title: "We Handle the Paperwork",
    description:
      "Registrations, licenses, tax accounts, and filings become one sequenced workstream you can see end-to-end.",
    icon: Files,
    detail: "Priority map delivered within 7 days",
  },
  {
    number: "03",
    title: "Launch Your Business",
    description:
      "You move forward with stronger documentation, fewer blind spots, and a credible base for funding and bids.",
    icon: Flag,
    detail: "Ongoing support available on retainer",
  },
];

/* non-people close-up: documents and pen on desk */
const photo =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80";

export function HomeProcess() {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || !rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-process-step]",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-process-line]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={rootRef}
      id="process"
      className="relative overflow-hidden bg-navy py-24 text-white sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(86,149,255,0.18),transparent_40%)]"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="eyebrow text-accent">How It Works</p>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
              A straightforward path, designed to keep momentum high.
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.7] text-mist/90">
              Every engagement follows the same three movements. The goal is
              simple: keep momentum high, keep paperwork quiet, keep you focused
              on operating decisions.
            </p>

            <div className="relative mt-12 aspect-[5/4] w-full overflow-hidden border border-white/10">
              <Image
                src={photo}
                alt="Incorporation paperwork on desk"
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-mist">
                  Typical turnaround
                </p>
                <p className="mt-2 font-display text-xl font-medium">
                  Most incorporations are ready to file in 7–14 days.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="relative lg:col-span-7">
            <div
              data-process-line
              aria-hidden
              className="absolute left-6 top-6 bottom-6 hidden w-px origin-top scale-y-0 bg-accent lg:block"
            />
            <ol className="space-y-6 lg:space-y-8 lg:pl-16">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.number}
                    data-process-step
                    className="group relative border border-white/12 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/60 hover:bg-white/[0.06] sm:p-8 lg:p-10"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                      <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                          Step {step.number}
                        </span>
                        <span className="grid h-14 w-14 place-items-center border border-white/25 text-white transition-colors duration-500 group-hover:border-accent group-hover:bg-accent/10">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
                          {step.title}
                        </h3>
                        <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-mist/85">
                          {step.description}
                        </p>
                        <p className="mt-5 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-mist/60">
                          → {step.detail}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
