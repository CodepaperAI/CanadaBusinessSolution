import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Handshake,
  MapPinned,
  MessagesSquare,
} from "lucide-react";
import { ConsultationCta } from "@/components/layout/consultation-cta";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { SplitText } from "@/components/motion/split-text";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "About us",
  description:
    "Learn how Canada Business Solutions helps entrepreneurs and newcomers launch businesses in Canada with clearer guidance and stronger first steps.",
  path: "/about",
});

const storyStats = [
  { value: "500+", label: "Businesses launched" },
  { value: "10+", label: "Years of operating experience" },
  { value: "24h", label: "Typical response window" },
];

const differentiators = [
  {
    title: "Advice that starts with sequence",
    description:
      "Clients usually do not need more information. They need the right order. We help prioritize what to handle first so effort goes where it matters.",
    icon: MessagesSquare,
  },
  {
    title: "Practical support for newcomers and first-time founders",
    description:
      "The process is designed to feel understandable, not intimidating, even for people navigating the Canadian business system for the first time.",
    icon: Handshake,
  },
  {
    title: "Grounded in Toronto, useful beyond one city",
    description:
      "CBS works from a strong local base while helping business owners think through requirements that extend across Canada.",
    icon: MapPinned,
  },
];

type TeamMember = {
  name: string;
  role: string;
  focus: string;
  photo?: string;
};

const team: TeamMember[] = [
  {
    name: "Dayal Tony",
    role: "Founder and lead advisor",
    focus:
      "Initial strategy sessions, business setup guidance, and client roadmap planning.",
    photo: "/team/dayal-tony.jpg",
  },
  {
    name: "Cindy Torrejon Castro",
    role: "Digital marketing and content strategy",
    focus:
      "Over four years of experience across paid and organic channels — Google Ads, social media, and content marketing — using data-driven insights to design campaigns that connect brands with their audiences and strengthen digital presence.",
    photo: "/team/cindy.jpg",
  },
  {
    name: "Sangeetha Shingam, CPA",
    role: "Senior accountant · Tax and financial consultant",
    focus:
      "7+ years in tax, bookkeeping, and financial analysis — helping individuals and businesses stay compliant, manage cash flow, and make informed financial decisions.",
    photo: "/team/sangeetha-shingam.jpg",
  },
  {
    name: "Sonal Varghese",
    role: "Incorporation and registration lead",
    focus:
      "Business structure decisions, registration workflows, and documentation readiness.",
  },
  {
    name: "Ammar Siddiqui",
    role: "Licensing and compliance advisor",
    focus:
      "Municipal and provincial requirement mapping, application coordination, and compliance checkpoints.",
  },
  {
    name: "Elaine Mensah",
    role: "Client success and communications",
    focus:
      "Scheduling, client follow-up, and keeping every engagement responsive and easy to navigate.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-shell bg-brand-navy text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
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

        <div className="container relative grid min-h-[calc(100dvh-76px)] gap-12 py-14 sm:py-18 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16 lg:py-20">
          <div className="max-w-[42rem]">
            <p className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-mist">
              About Canada Business Solutions
            </p>
            <SplitText
              as="h1"
              text="We help founders start with clarity."
              delay={0.15}
              className="mt-8 max-w-[14ch] text-balance font-display text-[clamp(3rem,5.5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.02em]"
            />
            <p className="mt-6 max-w-xl text-pretty text-lg leading-[1.65] text-brand-mist">
              A practical path through incorporation, licensing, and early operating decisions.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton
                href="/contact"
                className={cn(buttonVariants({ variant: "primary", size: "lg" }), "group")}
              >
                Book a consultation
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </MagneticButton>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "border-white/18 bg-transparent text-white hover:border-white hover:bg-white hover:text-brand-navy",
                )}
              >
                View services
              </Link>
            </div>
          </div>

          <div className="grid gap-4 lg:pb-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-mist">
                What clients face
              </p>
              <p className="mt-4 font-display text-2xl font-semibold leading-snug">
                Too many unknowns. Not enough sequence.
              </p>
              <p className="mt-3 text-sm leading-6 text-white/72">
                We turn that into a cleaner plan, so you move from questions to action.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {storyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.08] px-5 py-5 text-center backdrop-blur-md"
                >
                  <p className="font-display text-4xl tracking-[-0.04em] text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/72">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section className="pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="h-section mt-3 max-w-[14ch] text-brand-navy">
              Built for a practical first conversation.
            </h2>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-brand-navy/10 bg-white px-6 py-7 shadow-soft sm:px-8">
              <p className="max-w-[32ch] font-display text-2xl font-semibold leading-snug text-brand-navy sm:text-3xl">
                Early-stage business support should feel calm, clear, and usable.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <Card className="border-brand-navy/8 bg-white/90">
                <p className="text-base leading-8 text-brand-navy/72">
                  Many clients arrive with the same tension: they are ready to move, but
                  they are not fully sure what has to happen first, which approvals apply,
                  or how much risk sits inside the next step.
                </p>
              </Card>
              <Card className="border-brand-navy/8 bg-brand-paper/90">
                <p className="text-base leading-8 text-brand-navy/72">
                  Our job is to reduce that friction, translate the process, and keep
                  momentum intact while the business takes shape.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section containerClassName="!p-0">
        <div className="relative h-[38vh] min-h-[320px] w-full overflow-hidden rounded-shell">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=80"
            alt="Toronto architectural facade"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/40 to-brand-navy/20"
          />
          <div className="absolute inset-0 flex items-end p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-mist">
                Mission statement
              </p>
              <p className="mt-4 font-display text-[clamp(1.8rem,3.2vw,3rem)] leading-[1.1] tracking-[-0.02em] text-white">
                Building on solid ground — every filing, every approval, every
                conversation pointed at the same destination.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[2.4rem] border border-brand-navy/10 bg-white px-6 py-12 shadow-soft sm:px-10 sm:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
              Our commitment
            </p>
            <p className="mt-6 text-balance font-display text-[clamp(2.4rem,4.8vw,4.5rem)] leading-[1.02] tracking-[-0.04em] text-brand-navy">
              We help business owners start in Canada with stronger structure, clearer
              direction, and fewer avoidable delays.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">What makes us different</p>
              <h2 className="h-section mt-3 max-w-2xl text-brand-navy">
                Professional, not distant.
              </h2>
            </div>
            <p className="max-w-md body-base text-brand-navy/70">
              Authority that still feels human and usable for people making early-stage decisions.
            </p>
          </div>

          <div className="grid gap-6 border-t border-brand-navy/15 pt-10 sm:gap-8 lg:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex flex-col gap-4">
                  <span className="grid h-12 w-12 place-items-center border border-brand-navy/20 bg-white text-brand-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="h-card text-brand-navy">{item.title}</h3>
                  <p className="body-base text-brand-navy/70">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-shell bg-brand-navy text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(86,149,255,0.25),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_45%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:48px_48px]"
          />

          <div className="relative grid gap-12 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-14 lg:py-20">
            <div className="relative mx-auto w-full max-w-[340px] lg:max-w-[420px]">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(86,149,255,0.55),transparent_65%)] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-full border border-white/20"
              />
              <div className="relative aspect-square overflow-hidden rounded-full ring-1 ring-inset ring-white/15 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.7)]">
                <Image
                  src="/team/dayal-tony.jpg"
                  alt="Dayal Tony, founder of Canada Business Solutions"
                  fill
                  sizes="(min-width: 1024px) 26vw, 70vw"
                  className="translate-x-[10%] scale-[1.25] object-cover object-[50%_26%]"
                  priority={false}
                />
              </div>
              <p className="relative mt-6 text-center text-xs font-semibold uppercase tracking-[0.24em] text-brand-mist">
                Dayal Tony · Founder
              </p>
            </div>

            <div>
              <p className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-mist">
                Meet the founder
              </p>
              <h2 className="mt-6 font-display text-[clamp(2.5rem,4.2vw,4rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
                Dayal Tony
              </h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-mist">
                Founder · Business &amp; Management Consultant
              </p>

              <p className="mt-8 max-w-[42ch] font-display text-2xl leading-[1.25] text-white sm:text-[1.75rem]">
                &ldquo;Empower your business growth — expert guidance for entrepreneurs across Canada.&rdquo;
              </p>

              <p className="mt-8 max-w-[48ch] text-lg leading-[1.7] text-white/82">
                Business and management consultant focused on funding strategy,
                regulatory guidance, and strategic project planning. Dayal supports
                startups, nonprofits, and global firms navigating the Canadian
                business landscape — turning complex setup, compliance, and
                procurement paths into clear next steps.
              </p>

              <p className="mt-4 max-w-[48ch] text-base leading-[1.7] text-white/70">
                Based in Scarborough, Ontario, with academic training from
                International Business University, he leads every engagement at
                Canada Business Solutions from the first conversation through
                launch follow-through.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {[
                  "Funding strategy",
                  "Regulatory guidance",
                  "Strategic planning",
                  "Startups & nonprofits",
                  "Global firms",
                ].map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/14 bg-white/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-mist"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div>
            <p className="eyebrow">Team</p>
            <h2 className="h-section mt-3 max-w-[14ch] text-brand-navy">
              People behind the paperwork.
            </h2>
            <p className="mt-5 max-w-[34rem] body-base text-brand-navy/70">
              Each engagement is led by someone who has filed this paperwork hundreds of times.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {team.map((person, index) => (
              <Card key={person.name} className="border-brand-navy/8 bg-white/92">
                <div className="flex items-start justify-between gap-4">
                  {person.photo ? (
                    <span className="relative inline-flex h-14 w-14 overflow-hidden rounded-full ring-2 ring-brand-paper">
                      <Image
                        src={person.photo}
                        alt={person.name}
                        fill
                        sizes="56px"
                        className="object-cover object-[center_20%]"
                      />
                    </span>
                  ) : (
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-brand-paper font-display text-2xl tracking-[-0.04em] text-brand-primary">
                      {person.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  )}
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-navy/66">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight tracking-tight text-brand-navy">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  {person.role}
                </p>
                <p className="mt-4 text-base leading-8 text-brand-navy/68">{person.focus}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <ConsultationCta
        eyebrow="Next step"
        title="If you need a clearer first path, start with a conversation."
        description="Whether you are still deciding how to register the business or already moving through permits and approvals, CBS can help you sort the next step with more confidence."
      />
    </>
  );
}
