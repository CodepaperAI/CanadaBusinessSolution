import type { Metadata } from "next";
import Image from "next/image";
import { FaqDirectory } from "@/components/faq/faq-directory";
import { SplitText } from "@/components/motion/split-text";
import { ConsultationCta } from "@/components/layout/consultation-cta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about incorporation, licensing, funding, and startup process support from Canada Business Solutions.",
  path: "/faq",
});

const faqTopics = [
  "Business setup",
  "Licenses",
  "Funding",
  "Procurement",
  "Next steps",
];

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-shell bg-brand-navy text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-brand-navy/80" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-maple opacity-32" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-diagonal opacity-50" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(86,149,255,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_44%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-navy/42 via-brand-navy/24 to-brand-navy/72"
        />

        <div className="container relative grid min-h-[calc(100dvh-76px)] gap-12 py-14 sm:py-18 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-16 lg:py-20">
          <div className="max-w-[42rem]">
            <p className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-mist">
              FAQ
            </p>
            <SplitText
              as="h1"
              text="Common questions, answered."
              delay={0.15}
              className="mt-8 max-w-[14ch] text-balance font-display text-[clamp(3rem,5.5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-white"
            />
            <p className="mt-6 max-w-xl text-pretty text-lg leading-[1.65] text-brand-mist">
              Incorporation, licensing, funding, and the first operational steps after filing.
            </p>
          </div>

          <div className="grid gap-4 lg:pb-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist">
                What this page covers
              </p>
              <p className="mt-4 font-display text-3xl leading-tight tracking-tight text-white">
                The repeat questions that usually come up before the paperwork feels clear.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {faqTopics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center rounded-full border border-white/14 bg-brand-navy/38 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-mist"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-white/72">
                The directory below is organized to help visitors scan quickly, find their
                category, and get one cleaner answer instead of opening every accordion at once.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist">
                Quick scan
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.4rem] border border-white/10 bg-brand-navy/34 px-4 py-4 text-center">
                  <p className="font-display text-4xl tracking-[-0.04em] text-white">10</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/66">
                    Questions
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-brand-navy/34 px-4 py-4 text-center">
                  <p className="font-display text-4xl tracking-[-0.04em] text-white">5</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/66">
                    Categories
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-brand-navy/34 px-4 py-4 text-center">
                  <p className="font-display text-4xl tracking-[-0.04em] text-white">1</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/66">
                    Clearer path
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative my-16 overflow-hidden rounded-shell bg-brand-navy text-white sm:my-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=80"
            alt="Small team in a planning conversation around a laptop"
            fill
            sizes="100vw"
            className="object-cover opacity-55"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/60 to-brand-navy/20" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-14 sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist">
              Before the accordion
            </p>
            <p className="mt-4 font-display text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
              Most questions below started as a 10-minute conversation.
            </p>
          </div>
          <a
            href="tel:+16476936982"
            className="inline-flex w-fit items-center gap-2 border border-white/40 bg-white/10 px-6 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand-navy"
          >
            Call +1 (647) 693-6982
          </a>
        </div>
      </section>

      <FaqDirectory />

      <ConsultationCta
        eyebrow="Still have questions?"
        title={"If the answer depends on your situation, let's talk it through."}
        description="FAQ pages are useful for common patterns. When the decision depends on your exact structure, approvals, or timing, a consultation is still the faster path."
        primaryLabel="Book a consultation"
      />
    </>
  );
}
