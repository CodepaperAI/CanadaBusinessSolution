"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Landmark,
  Phone,
  ScrollText,
  Workflow,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import { SplitText } from "@/components/motion/split-text";
import { MagneticButton } from "@/components/motion/magnetic-button";

// Contextual business-advisory scene — two professionals reviewing a plan
// together. People present but no single face dominates, so it reads as
// "real consultation" rather than a CBS team portrait.
const heroImage =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=80";

const heroServices = [
  { title: "Business Incorporation", icon: Building2, note: "Federal · Provincial" },
  { title: "Licensing & Permits", icon: ScrollText, note: "Municipal → Federal" },
  { title: "Grants & Funding", icon: Landmark, note: "Programs · Applications" },
  { title: "Procurement Support", icon: Workflow, note: "MERX · Bid-ready" },
];

export function HomeHero() {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || !rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(rootRef.current!.querySelector("[data-hero-copy]"), {
        y: -40,
        opacity: 0.75,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom 40%",
          scrub: true,
        },
      });

      gsap.to(rootRef.current!.querySelector("[data-hero-panel]"), {
        y: -24,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom 40%",
          scrub: true,
        },
      });

      const heroBg = rootRef.current!.querySelector("[data-hero-bg] img");
      if (heroBg) {
        gsap.to(heroBg, {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const sequence = prefersReducedMotion
    ? undefined
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
      };

  const riseItem = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-navy text-white"
    >
      {/* 0. full-bleed background photo */}
      <div data-hero-bg aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* 1. navy wash so the photo never overpowers the type */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-navy/82"
      />

      {/* 2. faint maple-leaf tile for brand continuity */}
      <div aria-hidden className="pointer-events-none absolute inset-0 pattern-maple opacity-40" />

      {/* 3. diagonal geometric line overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 pattern-diagonal opacity-60"
      />

      {/* 4. soft radial accents for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(86,149,255,0.22),transparent_45%),radial-gradient(circle_at_10%_90%,rgba(24,0,172,0.32),transparent_40%)]"
      />

      {/* 5. subtle top-to-bottom darken so text always stays readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/20 to-navy/70"
      />

      <div className="relative mx-auto grid min-h-[calc(100dvh-76px)] max-w-[1440px] grid-cols-1 items-center gap-16 px-6 pb-24 pt-20 sm:px-10 lg:grid-cols-12 lg:gap-20 lg:px-14 lg:pb-28 lg:pt-28">
        {/* Left — copy */}
        <motion.div
          data-hero-copy
          variants={sequence}
          initial={prefersReducedMotion ? false : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
          className="relative z-20 lg:col-span-7 lg:pr-6"
        >
          <motion.div
            variants={riseItem}
            className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.06] px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-mist backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Toronto · Business Launch Advisors
          </motion.div>

          <SplitText
            as="h1"
            text="Start your business in Canada, the right way."
            delay={0.15}
            className="h-display mt-8 max-w-[18ch] text-white"
          />

          <motion.p
            variants={riseItem}
            className="mt-6 max-w-xl body-lg text-mist/90"
          >
            Incorporation, licensing, permits, and funding — handled.
          </motion.p>

          <motion.div
            variants={riseItem}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton
              href="/contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-primary px-7 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 ease-editorial hover:bg-royal"
            >
              <span>Book Free Consultation</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 border border-white/30 bg-transparent px-7 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 ease-editorial hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-navy"
            >
              Explore Our Services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

        </motion.div>

        {/* Right — photo plate + Practice Index glass overlay */}
        <motion.aside
          data-hero-panel
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 lg:col-span-5"
        >
          <div className="relative overflow-hidden border border-white/25 bg-navy/75 p-7 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy/40 via-transparent to-navy/20"
            />
            <div className="relative">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                What we handle
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-3">
                {heroServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <li
                      key={service.title}
                      className="flex items-center gap-3 border border-white/15 bg-navy/55 px-4 py-3.5 backdrop-blur-sm transition-colors duration-300 hover:border-accent/70 hover:bg-navy/75"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center border border-white/25 bg-white/5 text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold leading-snug text-white">
                        {service.title}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5">
                <a
                  href="tel:+16476936982"
                  className="inline-flex items-center gap-2 text-base font-semibold text-white transition-colors duration-300 hover:text-accent"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  +1 (647) 693-6982
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Accepting new clients
                </span>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>

    </section>
  );
}
