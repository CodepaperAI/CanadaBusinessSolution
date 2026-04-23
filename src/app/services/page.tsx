import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { SplitText } from "@/components/motion/split-text";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  FileSignature,
  FileStack,
  Landmark,
  MessagesSquare,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import { ConsultationCta } from "@/components/layout/consultation-cta";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Explore business incorporation, licensing and permits, grants and funding, procurement support, and contract bidding from Canada Business Solutions.",
  path: "/services",
});

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  span: string;
};

const services: Service[] = [
  {
    title: "Business incorporation",
    description:
      "Choose the right structure and file registrations in the correct order.",
    icon: Building2,
    items: [
      "Sole proprietorship, partnership, or corporation guidance",
      "Federal and provincial registration",
      "NUANS and name search",
      "Post-registration launch readiness",
    ],
    span: "lg:col-span-6",
  },
  {
    title: "Licensing and permits",
    description:
      "Municipal, provincial, and federal approvals cleared end-to-end.",
    icon: ScrollText,
    items: [
      "Requirement mapping by business and location",
      "Application preparation and submission",
      "Follow-up coordination",
      "Compliance checkpoints",
    ],
    span: "lg:col-span-6",
  },
  {
    title: "Grants and funding",
    description:
      "Program matching and stronger applications for qualified businesses.",
    icon: Landmark,
    items: [
      "Eligibility screening",
      "Application planning and supporting documents",
      "Positioning the business case",
      "Submission review",
    ],
    span: "lg:col-span-6",
  },
  {
    title: "Procurement support",
    description:
      "Vendor registration and bid-readiness for public-sector opportunities.",
    icon: BriefcaseBusiness,
    items: [
      "Government vendor registration",
      "Bid-readiness and document review",
      "Contract requirements",
      "Operational credibility guidance",
    ],
    span: "lg:col-span-6",
  },
  {
    title: "Contract bidding & proposal support",
    description:
      "Identify opportunities, prepare proposals, and submit winning bids for long-term contracts.",
    icon: FileSignature,
    items: [
      "MERX and CanadaBuys registration",
      "Capability statement preparation",
      "Bid submission and review",
      "Proposal positioning and follow-through",
    ],
    span: "lg:col-span-12",
  },
];

const processSteps = [
  {
    title: "Initial consultation",
    description:
      "We understand your business stage, what you are trying to accomplish, and where the biggest uncertainty currently sits.",
    icon: MessagesSquare,
  },
  {
    title: "Requirement mapping",
    description:
      "The relevant registrations, approvals, funding paths, or procurement tasks are sorted into a cleaner sequence.",
    icon: ClipboardCheck,
  },
  {
    title: "Documentation readiness",
    description:
      "We organize the information and paperwork needed so applications and filings are not approached piecemeal.",
    icon: FileStack,
  },
  {
    title: "Submission support",
    description:
      "Applications and registrations move forward with more structure, fewer blind spots, and stronger follow-through.",
    icon: ShieldCheck,
  },
  {
    title: "Launch follow-through",
    description:
      "You leave with a better operating base and clearer next steps after the immediate filing work is complete.",
    icon: BadgeCheck,
  },
];

const faqTeasers = [
  {
    question: "How long does incorporation usually take?",
    answer:
      "Timelines depend on the structure, jurisdiction, and how quickly supporting information is ready, but the goal is always to reduce avoidable delay.",
  },
  {
    question: "Do I need a business license right away?",
    answer:
      "That depends on what the business does and where it will operate. We help determine which approvals matter before time is wasted on the wrong tasks.",
  },
  {
    question: "Can you help after registration is done?",
    answer:
      "Yes. Many businesses need support beyond registration, including permits, compliance planning, funding applications, and procurement readiness.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-shell bg-brand-navy text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-brand-navy/78" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-brand-navy/20 to-brand-navy/70"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(86,149,255,0.2),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_42%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:48px_48px]"
        />

        <div className="container relative grid min-h-[calc(100dvh-76px)] gap-12 py-14 sm:py-18 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-16 lg:py-20">
          <div className="max-w-[42rem]">
            <p className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-mist">
              Services
            </p>
            <SplitText
              as="h1"
              text="Setup, approvals, funding, procurement."
              delay={0.15}
              className="mt-8 max-w-[16ch] text-balance font-display text-[clamp(3rem,5.5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.02em]"
            />
            <p className="mt-6 max-w-xl text-pretty text-lg leading-[1.65] text-brand-mist">
              Built for business owners who need more than a filing transaction.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton
                href="/contact"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }), "group")}
              >
                Get started
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </MagneticButton>
              <Link
                href="/faq"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "border-white/18 bg-transparent text-white hover:border-white hover:bg-white hover:text-brand-navy",
                )}
              >
                Browse common questions
              </Link>
            </div>
          </div>

          <div className="grid gap-4 lg:pb-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist">
                Five core advisory lanes
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="rounded-[1.4rem] border border-white/10 bg-brand-navy/34 px-4 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-[0.95rem] border border-white/10 bg-white/8 text-brand-mist">
                          <Icon className="h-4 w-4" />
                        </span>
                        <p className="text-sm font-semibold text-white">{service.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section containerClassName="!p-0">
        <div className="relative h-[38vh] min-h-[320px] w-full overflow-hidden rounded-shell">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80"
            alt="Advisor and client reviewing business documents"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-brand-navy/85 via-brand-navy/45 to-brand-navy/10"
          />
          <div className="absolute inset-0 flex items-end p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-mist">
                In consultation
              </p>
              <p className="mt-4 font-display text-[clamp(1.8rem,3.2vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
                Paperwork is the outcome. The conversation is the work.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-16 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <SectionHeading
            eyebrow="Service detail"
            title="Five services, structured around what early-stage businesses need."
            description="Each card shows exactly what CBS handles in that lane — so you can see the work, not just a headline."
          />

          <div className="grid gap-4 lg:grid-cols-12">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className={cn(
                    "rounded-[2rem] border border-brand-navy/10 bg-white px-6 py-6 shadow-soft transition-transform duration-300 ease-editorial hover:-translate-y-1",
                    service.span,
                  )}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] bg-brand-paper text-brand-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-navy/66">
                        Get started
                      </span>
                    </div>

                    <h2 className="mt-6 max-w-[14ch] font-display text-4xl leading-[1.02] tracking-[-0.04em] text-brand-navy">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-[40rem] text-base leading-8 text-brand-navy/68">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {service.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-7 text-brand-navy/72 sm:text-base">
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-primary/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-8">
                      <Link
                        href="/contact"
                        className={cn(buttonVariants({ variant: "secondary" }), "group")}
                      >
                        Get started
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-paper transition-transform duration-200 group-hover:translate-x-1">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section background="paper" className="rounded-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Our process"
              title="A five-step sequence that keeps the work moving."
              description="The service page shifts from what CBS offers into how the work is actually handled, so visitors understand the pace and structure of the engagement."
            />

            <div className="relative mt-8 aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-brand-navy/10 shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                alt="Planning desk with notes and folders"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-mist">
                  Engagement rhythm
                </p>
                <p className="mt-2 font-display text-xl leading-snug">
                  Prep, sequence, submit, follow through — every week has a
                  clear shape.
                </p>
              </div>
            </div>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.title}
                  className="rounded-[1.7rem] border border-brand-navy/10 bg-white px-5 py-6 shadow-soft transition-transform duration-300 ease-editorial hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-4xl tracking-[-0.04em] text-brand-primary/24">
                      0{index + 1}
                    </span>
                    <Icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl leading-tight tracking-tight text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brand-navy/68">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:gap-14">
          <SectionHeading
            eyebrow="FAQ teaser"
            title="A few common questions before visitors move deeper."
            description="Instead of forcing an accordion into the service page, the FAQ teaser section gives quick answers and then routes people to the dedicated FAQ experience."
          />

          <div className="grid gap-4 lg:grid-cols-12">
            <Card className="border-brand-navy/8 bg-white/92 lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">
                Common question
              </p>
              <h3 className="mt-5 font-display text-4xl leading-tight tracking-tight text-brand-navy">
                {faqTeasers[0].question}
              </h3>
              <p className="mt-4 text-base leading-8 text-brand-navy/68">
                {faqTeasers[0].answer}
              </p>
              <Link
                href="/faq"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-transform duration-200 ease-editorial hover:translate-x-1"
              >
                View FAQ
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>

            <div className="grid gap-4 lg:col-span-5">
              {faqTeasers.slice(1).map((item) => (
                <Card key={item.question} className="border-brand-navy/8 bg-brand-paper/88">
                  <h3 className="font-display text-3xl leading-tight tracking-tight text-brand-navy">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-brand-navy/68">
                    {item.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ConsultationCta
        eyebrow="Start here"
        title="Choose the service lane, then let us sort the sequence."
        description="If you already know what you need or you are still deciding between incorporation, licensing, funding, and procurement support, the best next step is still a focused consultation."
        primaryLabel="Book your consultation"
      />
    </>
  );
}
