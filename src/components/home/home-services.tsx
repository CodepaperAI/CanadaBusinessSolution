"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Landmark,
  ScrollText,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { Eyebrow } from "@/components/motion/eyebrow";

type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  photo: string;
};

const services: ServiceItem[] = [
  {
    title: "Business Incorporation",
    description: "Federal or provincial setup, filed in the correct sequence.",
    icon: Building2,
    photo:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Licensing & Permits",
    description: "Municipal, provincial, and federal approvals cleared end-to-end.",
    icon: ScrollText,
    photo:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Grants & Funding",
    description: "Program matching and stronger applications for qualified businesses.",
    icon: Landmark,
    photo:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Procurement Support",
    description: "Vendor registration and bid-readiness for public-sector work.",
    icon: BriefcaseBusiness,
    photo:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
];

export function HomeServices() {
  const prefersReducedMotion = useReducedMotion();
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || !rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-service-card]").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.08,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              once: true,
            },
          },
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={rootRef}
      id="services"
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
            <Eyebrow>What we do</Eyebrow>
            <h2 className="h-section mt-3 max-w-2xl text-navy">
              Four practice areas, one operating partner.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex w-fit items-center gap-2 border-b border-navy pb-1 font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-navy"
          >
            View all services
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                data-service-card
                className="group flex flex-col overflow-hidden border border-navy/10 bg-white transition-all duration-300 hover:border-navy/25 hover:shadow-card"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy/5">
                  <motion.div
                    className="absolute inset-0"
                    initial={prefersReducedMotion ? false : { scale: 1.1 }}
                    whileInView={prefersReducedMotion ? undefined : { scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={service.photo}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                    />
                  </motion.div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="grid h-10 w-10 place-items-center border border-navy/15 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="h-card text-navy">{service.title}</h3>
                  <p className="body-base text-navy/70">{service.description}</p>
                  <Link
                    href="/services"
                    className="group/link mt-auto inline-flex items-center gap-2 pt-2 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-primary"
                  >
                    <span className="relative">
                      Learn more
                      <span className="absolute inset-x-0 -bottom-0.5 h-px bg-primary transition-transform duration-300 origin-left scale-x-100 group-hover/link:scale-x-0" />
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
