"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/motion/eyebrow";

const industries = [
  {
    label: "Retail",
    photo:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Food service",
    photo:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Childcare",
    photo:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Professional services",
    photo:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Trades",
    photo:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Transportation & logistics",
    photo:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Import & export",
    photo:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Technology & IT services",
    photo:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
  },
  {
    label: "Defence & cyber security",
    photo:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80",
  },
];

export function HomeIndustries() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <Eyebrow>Industries served</Eyebrow>
            <h2 className="h-section mt-3 max-w-2xl text-navy">
              Sectors we&apos;ve helped launch.
            </h2>
          </div>
          <p className="max-w-md body-base text-navy/70">
            From storefronts to supply chains — businesses across these sectors
            choose CBS to clear the paperwork in the correct order.
          </p>
        </motion.div>

        <motion.ul
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6"
        >
          {industries.map((industry) => (
            <li
              key={industry.label}
              className="group relative aspect-[4/5] overflow-hidden bg-navy"
            >
              <motion.div
                className="absolute inset-0"
                initial={prefersReducedMotion ? false : { scale: 1.12 }}
                whileInView={prefersReducedMotion ? undefined : { scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={industry.photo}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover opacity-80 transition-transform duration-700 ease-editorial group-hover:scale-105 group-hover:opacity-95"
                />
              </motion.div>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-white">
                  {industry.label}
                </p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
