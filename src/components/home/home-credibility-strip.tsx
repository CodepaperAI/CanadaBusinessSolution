"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Globe2,
  ShieldCheck,
  Users,
} from "lucide-react";

const markers = [
  { icon: Globe2, label: "Canada-wide service" },
  { icon: BadgeCheck, label: "10+ years in practice" },
  { icon: Users, label: "500+ businesses launched" },
  { icon: ShieldCheck, label: "Compliance-first approach" },
  { icon: Building2, label: "Toronto head office" },
];

export function HomeCredibilityStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative border-b border-navy/10 bg-white py-6">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        <motion.ul
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {markers.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 text-[13px] font-medium text-navy/80"
            >
              <Icon className="h-4 w-4 shrink-0 text-primary" />
              <span>{label}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
