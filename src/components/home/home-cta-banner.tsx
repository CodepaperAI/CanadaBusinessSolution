"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPinned,
  PhoneCall,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { Eyebrow } from "@/components/motion/eyebrow";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { SplitText } from "@/components/motion/split-text";
import { siteConfig } from "@/config/site";

const photo =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=80";

const infoRail = [
  {
    icon: CalendarDays,
    label: "Response time",
    value: "Within 24 hours",
  },
  {
    icon: PhoneCall,
    label: "Consultation line",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phoneLink}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPinned,
    label: "Toronto office",
    value: "2900 Markham Rd, Unit 17",
  },
];

export function HomeCtaBanner() {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || !rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to("[data-cta-bg] img", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-navy text-white"
    >
      {/* full-bleed parallax photo — kept visible */}
      <div data-cta-bg aria-hidden className="pointer-events-none absolute inset-0">
        <Image src={photo} alt="" fill sizes="100vw" className="object-cover" />
      </div>

      {/* Targeted darkening rather than a flat navy wash: keeps the photo visible
          while still giving text the contrast it needs on the left 60%. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/20 via-transparent to-navy/40"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 pattern-diagonal opacity-30" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Left — headline + CTAs */}
          <div>
            <Eyebrow tone="accent">Ready to start</Eyebrow>
            <SplitText
              as="h2"
              text="Build with clearer guidance from day one."
              delay={0.1}
              className="h-display mt-5 max-w-[22ch] text-white"
            />
            <p className="mt-8 max-w-xl body-lg text-mist/90">
              Incorporate, secure permits, pursue funding, or bid on public work —
              let&apos;s talk. The first call is free and structured around your stage.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton
                href="/contact"
                className="group inline-flex items-center gap-3 bg-primary px-7 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-royal"
              >
                <span>Book a consultation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
              <a
                href={`tel:${siteConfig.phoneLink}`}
                className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-navy"
              >
                <PhoneCall className="h-4 w-4" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right — structured info rail */}
          <motion.ul
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-px border border-white/15 bg-white/[0.03] backdrop-blur-md sm:grid-cols-2 lg:mt-16"
          >
            {infoRail.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-accent" />
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-mist/70">
                      {label}
                    </p>
                  </div>
                  <p className="mt-4 font-display text-lg font-semibold leading-snug text-white">
                    {value}
                  </p>
                </>
              );
              return (
                <li key={label} className="relative bg-navy/60 p-6 transition-colors duration-300 hover:bg-navy/80">
                  {href ? (
                    <a href={href} className="block break-words hover:text-accent">
                      {content}
                    </a>
                  ) : (
                    <div className="break-words">{content}</div>
                  )}
                </li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
