"use client";

import { startTransition, useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ChevronDown, MessagesSquare, ShieldCheck } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { cn } from "@/lib/utils";

type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    id: "how-long-does-business-incorporation-take",
    category: "Getting Started",
    question: "How long does business incorporation take?",
    answer:
      "Timelines depend on the structure, jurisdiction, and how complete the documentation is when filing begins. The goal is usually to remove avoidable delay before anything is submitted.",
  },
  {
    id: "what-is-the-difference-between-a-sole-proprietorship-and-a-corporation",
    category: "Incorporation",
    question: "What is the difference between a sole proprietorship and a corporation?",
    answer:
      "They differ in administration, liability, and how the business is structured. The right fit depends on the business model, growth plans, and how much separation the owner needs between personal and business obligations.",
  },
  {
    id: "do-i-need-a-business-license-to-operate-in-ontario",
    category: "Licensing",
    question: "Do I need a business license to operate in Ontario?",
    answer:
      "That depends on what the business does and where it operates. Many businesses need approvals that come from municipal, provincial, or federal bodies, so the requirement has to be mapped case by case.",
  },
  {
    id: "how-much-does-it-cost-to-incorporate-a-business-in-canada",
    category: "Incorporation",
    question: "How much does it cost to incorporate a business in Canada?",
    answer:
      "Costs vary based on jurisdiction, filing choices, and whether additional services or documentation are needed. Most founders are better served by understanding the full setup scope rather than focusing only on one filing fee.",
  },
  {
    id: "can-newcomers-to-canada-start-a-business-here",
    category: "Getting Started",
    question: "Can newcomers to Canada start a business here?",
    answer:
      "Yes, but the right path depends on the business type, location, and personal circumstances. A structured first conversation often helps newcomers decide what needs to happen first and what can wait.",
  },
  {
    id: "what-government-grants-are-available-for-new-businesses",
    category: "Funding",
    question: "What government grants are available for new businesses?",
    answer:
      "Programs vary by industry, location, and business stage. The first step is usually eligibility screening so time is not spent preparing an application for a program that is not actually a fit.",
  },
  {
    id: "do-you-help-with-ongoing-compliance-after-incorporation",
    category: "Process",
    question: "Do you help with ongoing compliance after incorporation?",
    answer:
      "Yes. Many businesses still need support after registration, especially when licenses, permits, operating obligations, or follow-through tasks continue beyond the initial filing.",
  },
  {
    id: "how-do-i-register-a-business-name-in-ontario",
    category: "Licensing",
    question: "How do I register a business name in Ontario?",
    answer:
      "The process depends on the structure you choose and whether name-related checks or additional registrations are involved. It helps to decide the structure first so the name process is aligned with the actual setup path.",
  },
  {
    id: "what-documents-do-i-need-to-incorporate",
    category: "Incorporation",
    question: "What documents do I need to incorporate?",
    answer:
      "The required information can vary, but founders usually need details about the business structure, ownership, intended name, and other setup information. Preparing those materials early makes the filing smoother.",
  },
  {
    id: "can-i-incorporate-my-business-online",
    category: "Process",
    question: "Can I incorporate my business online?",
    answer:
      "Often yes, but the more important question is whether the business is being incorporated in the right way and in the right order. Filing online does not replace planning the overall setup correctly.",
  },
];

const categories = [
  "Getting Started",
  "Incorporation",
  "Licensing",
  "Funding",
  "Process",
];

export function FaqDirectory() {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openId, setOpenId] = useState(faqItems[0].id);

  const visibleItems = useMemo(
    () => faqItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    if (!visibleItems.some((item) => item.id === openId)) {
      setOpenId(visibleItems[0]?.id ?? "");
    }
  }, [openId, visibleItems]);

  return (
    <Section className="pt-16 sm:pt-20">
      <div className="grid gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Browse by topic"
            title="Five categories, ten common questions, and one clearer way to scan them."
            description="The category tabs narrow the list quickly, while the accordion keeps answers compact until the user asks for more detail."
          />

          <div className="mt-8 rounded-[2rem] border border-brand-navy/10 bg-editorial-sheen px-6 py-7 shadow-soft sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">
              Design note
            </p>
            <p className="mt-4 text-base leading-8 text-brand-navy/72">
              The interaction is intentionally simple: pick a topic, open a question, and
              keep moving. The motion clarifies state changes without making the page feel
              theatrical.
            </p>
          </div>
        </div>

        <div>
          <LayoutGroup>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const isActive = category === activeCategory;
                const count = faqItems.filter((item) => item.category === category).length;

                return (
                  <button
                    key={category}
                    type="button"
                    className={cn(
                      "relative inline-flex min-h-11 items-center gap-2 overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60 focus-visible:ring-offset-2",
                      isActive
                        ? "border-brand-primary text-white"
                        : "border-brand-navy/10 bg-white text-brand-navy/72 hover:-translate-y-0.5 hover:border-brand-primary/28 hover:text-brand-primary",
                    )}
                    onClick={() =>
                      startTransition(() => {
                        setActiveCategory(category);
                      })
                    }
                    aria-pressed={isActive}
                  >
                    {isActive ? (
                      prefersReducedMotion ? (
                        <span className="absolute inset-0 bg-brand-primary" />
                      ) : (
                        <motion.span
                          layoutId="faq-active-tab"
                          className="absolute inset-0 bg-brand-primary"
                          transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        />
                      )
                    ) : null}
                    <span className="relative">{category}</span>
                    <span
                      className={cn(
                        "relative inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1 text-[11px]",
                        isActive ? "bg-white/12 text-white/82" : "bg-brand-paper text-brand-navy/66",
                      )}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>

          <div className="mt-8 space-y-4">
            {visibleItems.map((item, index) => {
              const isOpen = item.id === openId;
              const contentId = `${item.id}-panel`;

              return (
                <motion.article
                  key={item.id}
                  layout={!prefersReducedMotion}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.26,
                    delay: prefersReducedMotion ? 0 : index * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={cn(
                    "overflow-hidden rounded-[1.8rem] border transition-colors duration-200 ease-editorial",
                    isOpen
                      ? "border-brand-primary/24 bg-white shadow-soft"
                      : "border-brand-navy/10 bg-white",
                  )}
                >
                  <button
                    type="button"
                    className="flex min-h-[4rem] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    onClick={() => setOpenId((current) => (current === item.id ? "" : item.id))}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-[0.95rem] bg-brand-paper text-sm font-semibold text-brand-primary">
                        0{index + 1}
                      </span>
                      <span className="max-w-[34rem] text-balance font-display text-2xl leading-tight tracking-tight text-brand-navy sm:text-3xl">
                        {item.question}
                      </span>
                    </div>
                    <motion.span
                      animate={prefersReducedMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-navy/10 bg-brand-paper text-brand-primary"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={contentId}
                        initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                        animate={prefersReducedMotion ? undefined : { height: "auto", opacity: 1 }}
                        exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-brand-navy/10 px-5 pb-5 pt-4 sm:px-6">
                          <p className="max-w-[44rem] text-sm leading-8 text-brand-navy/70 sm:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.8rem] border border-brand-navy/10 bg-white px-5 py-5 shadow-soft">
              <MessagesSquare className="h-5 w-5 text-brand-primary" />
              <p className="mt-4 font-display text-3xl leading-tight tracking-tight text-brand-navy">
                Questions are grouped so founders can scan by topic instead of reading one long list.
              </p>
            </div>
            <div className="rounded-[1.8rem] border border-brand-navy/10 bg-brand-paper/82 px-5 py-5 shadow-soft">
              <ShieldCheck className="h-5 w-5 text-brand-primary" />
              <p className="mt-4 text-base leading-8 text-brand-navy/70">
                If the answer depends on your exact business model or timing, the better
                next step is usually a consultation rather than a generic FAQ answer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
