"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, MapPin, PhoneCall } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { Eyebrow } from "@/components/motion/eyebrow";

const differentiators = [
  {
    title: "Clearer next steps",
    description:
      "Leave the first call with a real sense of priority, timing, and which filings matter first.",
    icon: BadgeCheck,
  },
  {
    title: "Local with broader reach",
    description:
      "Grounded in Toronto, supporting businesses that cross provincial lines.",
    icon: MapPin,
  },
  {
    title: "Human guidance, always",
    description:
      "Questions get answered directly by people who've filed this paperwork hundreds of times.",
    icon: PhoneCall,
  },
];

// Overhead meeting scene — faces not identifiable, reads as "real collaboration"
const photo =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80";

export function HomeDifferentiators() {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || !rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-diff-row]",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={rootRef}
      id="why-cbs"
      className="relative bg-off-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <Eyebrow>Why choose CBS</Eyebrow>
            <h2 className="h-section mt-3 max-w-2xl text-navy">
              Trusted operating partner, not a form-filing service.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 bg-primary px-6 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal"
          >
            Book a consultation
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-navy/15 pt-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left — 3 differentiator cards stacked vertically */}
          <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  data-diff-row
                  className="flex flex-col gap-3 border-l border-primary/25 pl-5"
                >
                  <span className="grid h-11 w-11 place-items-center border border-navy/20 bg-white text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="h-card text-navy">{item.title}</h3>
                  <p className="body-base text-navy/70">{item.description}</p>
                </article>
              );
            })}
          </div>

          {/* Right — contextual people photo with parallax-style Ken Burns */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-first h-[480px] w-full overflow-hidden border border-navy/10 lg:order-last lg:h-auto lg:min-h-[520px]"
          >
            <motion.div
              className="absolute inset-0"
              initial={prefersReducedMotion ? false : { scale: 1.12 }}
              whileInView={prefersReducedMotion ? undefined : { scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={photo}
                alt="Advisors and a client working through paperwork around a table"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white">
              <div className="max-w-md">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-mist">
                  In consultation
                </p>
                <p className="mt-2 font-display text-xl font-semibold leading-snug">
                  Every engagement starts with a real conversation — not a form.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
