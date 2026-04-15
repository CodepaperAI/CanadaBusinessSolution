"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { Eyebrow } from "@/components/motion/eyebrow";
import { TiltCard } from "@/components/motion/tilt-card";

const testimonials = [
  {
    name: "Farah Nadeem",
    role: "Bakery Founder",
    city: "Scarborough, ON",
    quote:
      "CBS handled incorporation and food licensing without making any of it feel intimidating. I always knew what was next.",
  },
  {
    name: "Luca Bianchi",
    role: "Owner-Operator",
    city: "Logistics Services",
    quote:
      "What stood out was the clarity. Instead of a pile of instructions, I got a sequence that matched how the business was actually launching.",
  },
  {
    name: "Rina Mathew",
    role: "Early-stage Founder",
    city: "Childcare, Brampton",
    quote:
      "The consultation saved me from approaching permits in the wrong order. That alone probably saved weeks.",
  },
  {
    name: "Abdou Kamara",
    role: "Service Business",
    city: "Procurement-ready, Ottawa",
    quote:
      "They translated government registration into something practical. The business felt real, faster — and we won our first contract.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function HomeTestimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="h-section mt-3 text-navy">
            What our clients say.
          </h2>
          <p className="mt-5 body-base text-navy/70">
            Four founders who came to CBS for different reasons — in their own words.
          </p>
        </motion.div>

        <motion.ul
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
        >
          {testimonials.map((t) => (
            <li key={t.name} className="[perspective:1000px]">
              <TiltCard className="group flex h-full flex-col justify-between border border-navy/10 bg-white p-7 transition-colors duration-300 hover:border-navy/25 hover:shadow-card sm:p-8">
                <div>
                  <div className="flex items-center gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-6 body-lg text-navy">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="mt-8 flex items-center gap-4 border-t border-navy/10 pt-6">
                  <div
                    aria-hidden
                    className="grid h-12 w-12 shrink-0 place-items-center border border-primary/40 bg-primary/10 font-sans text-sm font-semibold tracking-wide text-primary"
                  >
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <p className="font-sans text-base font-semibold text-navy">{t.name}</p>
                    <p className="mt-0.5 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-navy/60">
                      {t.role} · {t.city}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
