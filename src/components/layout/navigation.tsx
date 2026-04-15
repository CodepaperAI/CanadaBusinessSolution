"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/ui/brand-mark";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === href;
  return pathname.startsWith(href);
}

export function Navigation() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50">
        <div
          className={cn(
            "relative flex min-h-[76px] w-full items-center justify-between border-b px-5 transition-all duration-500 ease-editorial sm:px-8 lg:px-12",
            isScrolled
              ? "border-navy/10 bg-white/90 shadow-[0_10px_30px_-20px_rgba(0,45,87,0.25)] backdrop-blur-xl"
              : "border-transparent bg-white/70 backdrop-blur-md",
          )}
        >
          <BrandMark className="relative z-10" />

          <nav className="relative z-10 hidden items-center gap-0.5 lg:flex">
            {siteConfig.navigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative px-4 py-2 font-sans text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ease-editorial",
                    active ? "text-primary" : "text-navy/75 hover:text-navy",
                  )}
                >
                  <span>{item.label}</span>
                  <span
                    className={cn(
                      "pointer-events-none absolute bottom-1 left-4 right-4 h-px origin-left bg-current transition-transform duration-500 ease-editorial",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneLink}`}
              className="hidden font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/75 transition-colors duration-200 hover:text-primary md:inline-flex"
            >
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href={siteConfig.primaryCta.href}
              className="group relative hidden items-center gap-2 overflow-hidden bg-primary px-5 py-2.5 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-400 ease-editorial hover:-translate-y-0.5 hover:bg-royal md:inline-flex"
            >
              <span className="relative z-10">Book Consultation</span>
              <ArrowUpRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-11 w-11 items-center justify-center border border-navy/15 bg-white text-navy transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-white lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-navy/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-y-0 right-0 z-50 flex w-[min(28rem,100vw)] flex-col bg-navy p-8 text-white lg:hidden"
              initial={prefersReducedMotion ? { opacity: 0 } : { x: "100%" }}
              animate={prefersReducedMotion ? { opacity: 1 } : { x: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <BrandMark compact inverted />
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-transparent text-white hover:bg-white hover:text-navy"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="mt-16 flex flex-col">
                {siteConfig.navigation.map((item, index) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.12 + index * 0.06,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex items-baseline justify-between border-b border-white/10 py-4 font-display text-3xl font-semibold leading-tight transition-colors duration-300",
                          active ? "text-accent" : "text-white hover:text-accent",
                        )}
                      >
                        <span>{item.label}</span>
                        <span className="font-sans text-[11px] font-semibold tracking-[0.18em] text-white/40">
                          0{index + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto">
                <Link
                  href={siteConfig.primaryCta.href}
                  className="group flex items-center justify-between bg-primary px-5 py-4 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-royal"
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <p className="mt-6 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  {siteConfig.phoneDisplay} · Toronto
                </p>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
