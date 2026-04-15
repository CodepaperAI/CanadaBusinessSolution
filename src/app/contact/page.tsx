import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SplitText } from "@/components/motion/split-text";
import {
  BadgeCheck,
  CalendarDays,
  Clock3,
  Mail,
  MapPinned,
  PhoneCall,
} from "lucide-react";
import { ContactFormPanel } from "@/components/contact/contact-form-panel";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { buildMetadata, localBusinessJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Book a business consultation with Canada Business Solutions in Toronto.",
  path: "/contact",
});

const businessHours = [
  { day: "Monday to Friday", hours: "9:00 AM to 6:00 PM" },
  { day: "Saturday", hours: "By appointment" },
  { day: "Sunday", hours: "Closed" },
];

const calendlyPlaceholderDoc = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        font-family: "DM Sans", system-ui, sans-serif;
        background:
          radial-gradient(circle at top right, rgba(86,149,255,0.16), transparent 28%),
          linear-gradient(180deg, rgba(0,45,87,0.04), rgba(0,45,87,0.02));
        color: #002d57;
        display: grid;
        place-items: center;
        padding: 24px;
      }
      .frame {
        width: min(720px, 100%);
        border: 1px solid rgba(0,45,87,0.12);
        border-radius: 28px;
        background: rgba(255,255,255,0.88);
        padding: 28px;
        box-shadow: 0 24px 60px -40px rgba(0,45,87,0.35);
      }
      .label {
        font-size: 11px;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        font-weight: 700;
        color: #1800ac;
      }
      h1 {
        margin: 16px 0 0;
        font-family: "Georgia", serif;
        font-size: clamp(28px, 5vw, 46px);
        line-height: 0.98;
        letter-spacing: -0.04em;
      }
      p {
        margin: 16px 0 0;
        font-size: 16px;
        line-height: 1.8;
        color: rgba(0,45,87,0.72);
      }
      .slots {
        margin-top: 24px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 12px;
      }
      .slot {
        border: 1px solid rgba(0,45,87,0.12);
        border-radius: 18px;
        background: #ffffff;
        padding: 14px 14px 16px;
      }
      .slot strong {
        display: block;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.18em;
        color: rgba(0,45,87,0.54);
      }
      .slot span {
        display: block;
        margin-top: 10px;
        font-size: 18px;
        font-weight: 700;
        color: #002d57;
      }
    </style>
  </head>
  <body>
    <div class="frame">
      <div class="label">Calendly placeholder</div>
      <h1>Booking integration will live here.</h1>
      <p>
        This placeholder reserves the final layout for a branded scheduling embed while the
        real Calendly account connection is added.
      </p>
      <div class="slots">
        <div class="slot"><strong>Monday</strong><span>10:00 AM</span></div>
        <div class="slot"><strong>Tuesday</strong><span>1:30 PM</span></div>
        <div class="slot"><strong>Thursday</strong><span>3:00 PM</span></div>
      </div>
    </div>
  </body>
</html>
`;

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <section className="relative overflow-hidden rounded-shell bg-brand-navy text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-brand-navy/78" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-maple opacity-32" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-diagonal opacity-50" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(86,149,255,0.22),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_42%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-brand-navy/20 to-brand-navy/72"
        />

        <div className="container relative grid min-h-[calc(100dvh-76px)] gap-12 py-14 sm:py-18 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-16 lg:py-20">
          <div className="max-w-[42rem]">
            <p className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-mist">
              Contact
            </p>
            <SplitText
              as="h1"
              text="Let's start your business journey."
              delay={0.15}
              className="mt-8 max-w-[14ch] text-balance font-display text-[clamp(3rem,5.5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.02em]"
            />
            <p className="mt-6 max-w-xl text-pretty text-lg leading-[1.65] text-brand-mist">
              Incorporation, licensing, funding, or the next operating step — tell us where you are.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur-sm">
              <BadgeCheck className="h-5 w-5 text-brand-mist" />
              <div>
                <p className="text-sm font-semibold text-white">
                  We respond within 24 hours
                </p>
                <p className="mt-1 text-sm text-white/74">
                  Consultation requests are reviewed quickly and routed to the right next step.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:pb-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist">
                Toronto - Ontario
              </p>
              <p className="mt-4 font-display text-3xl leading-tight tracking-tight text-white">
                Use the form, call directly, or send a quick email and we will route you
                cleanly.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                This page is built to support a real inquiry: fast response times, direct
                contact options, and a clear place for scheduling once the booking account is
                connected.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-brand-navy/34 px-4 py-4">
                <PhoneCall className="h-5 w-5 text-brand-mist" />
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/66">
                  Direct line
                </p>
                <a
                  href={`tel:${siteConfig.phoneLink}`}
                  className="mt-2 block text-sm font-semibold text-white transition-colors duration-200 hover:text-brand-mist"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-brand-navy/34 px-4 py-4">
                <Mail className="h-5 w-5 text-brand-mist" />
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/66">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block break-all text-sm font-semibold text-white transition-colors duration-200 hover:text-brand-mist"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-brand-navy/34 px-4 py-4">
                <MapPinned className="h-5 w-5 text-brand-mist" />
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/66">
                  Office
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white">
                  Scarborough, Toronto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="pt-16 sm:pt-20">
        <div className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr] xl:items-start">
          <ContactFormPanel />

          <aside className="rounded-[2.2rem] border border-brand-navy/10 bg-white px-6 py-7 shadow-soft sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">
              Contact details
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-[-0.04em] text-brand-navy">
              Reach CBS directly.
            </h2>
            <p className="mt-4 text-base leading-8 text-brand-navy/72">
              If you already know what you need, use the direct channels below and we&apos;ll help
              you move to the right next step.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[1.5rem] border border-brand-navy/10 bg-brand-paper/78 px-5 py-5">
                <div className="flex items-start gap-3">
                  <PhoneCall className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
                      Phone
                    </p>
                    <a
                      href={`tel:${siteConfig.phoneLink}`}
                      className="mt-2 inline-flex min-h-11 items-center text-base font-semibold text-brand-navy hover:text-brand-primary"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-brand-navy/10 bg-brand-paper/78 px-5 py-5">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-2 inline-flex min-h-11 items-center break-all text-base font-semibold text-brand-navy hover:text-brand-primary"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-brand-navy/10 bg-brand-paper/78 px-5 py-5">
                <div className="flex items-start gap-3">
                  <MapPinned className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
                      Address
                    </p>
                    <p className="mt-2 text-base leading-8 text-brand-navy/72">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-brand-navy/10 bg-brand-paper/78 px-5 py-5">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
                      Business hours
                    </p>
                    <ul className="mt-3 space-y-2">
                      {businessHours.map((entry) => (
                        <li
                          key={entry.day}
                          className="flex flex-wrap items-center justify-between gap-3 text-sm text-brand-navy/70"
                        >
                          <span className="font-semibold text-brand-navy">{entry.day}</span>
                          <span>{entry.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-brand-navy/10 pt-6">
              <Link href="/" className={cn(buttonVariants({ variant: "secondary" }), "w-full")}>
                Return to Home
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section containerClassName="!p-0">
        <div className="relative h-[42vh] min-h-[340px] w-full overflow-hidden rounded-shell">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=80"
            alt="Modern office workspace"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/55 to-brand-navy/10"
          />
          <div className="absolute inset-0 flex items-end p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-mist">
                Visit us in Scarborough
              </p>
              <p className="mt-4 font-display text-[clamp(1.8rem,3.4vw,3.25rem)] leading-[1.05] tracking-[-0.02em]">
                {siteConfig.address}
              </p>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/80">
                Mon–Fri, 9:00 AM – 6:00 PM. Walk-ins welcome — though we recommend
                a quick call ahead so we can give you a structured first conversation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${siteConfig.phoneLink}`}
                  className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-brand-navy"
                >
                  <PhoneCall className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 border border-white/40 bg-transparent px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-white hover:text-brand-navy"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="paper" className="rounded-shell" containerClassName="py-2">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-primary">
              Calendly booking
            </p>
            <h2 className="mt-5 max-w-[12ch] font-display text-[clamp(2.6rem,4.8vw,4.4rem)] leading-[0.98] tracking-[-0.04em] text-brand-navy">
              Scheduling will sit here once the booking account is connected.
            </h2>
            <p className="mt-6 max-w-[34rem] text-base leading-8 text-brand-navy/70">
              The iframe below is a styled placeholder that reserves the final placement for
              the Calendly embed while keeping the page layout production-ready.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-[1.2rem] border border-brand-navy/10 bg-white px-4 py-3 shadow-soft">
              <CalendarDays className="h-5 w-5 text-brand-primary" />
              <span className="text-sm font-medium text-brand-navy/72">
                Once connected, visitors will be able to book directly from this section.
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.2rem] border border-brand-navy/10 bg-white shadow-soft">
            <iframe
              title="Calendly booking placeholder"
              srcDoc={calendlyPlaceholderDoc}
              className="h-[30rem] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
