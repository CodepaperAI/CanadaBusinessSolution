import Link from "next/link";
import { ArrowRight, CalendarDays, PhoneCall } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ConsultationCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function ConsultationCta({
  eyebrow,
  title,
  description,
  primaryLabel = "Book a consultation",
  secondaryLabel = "Call now",
}: ConsultationCtaProps) {
  return (
    <section className="pb-2 pt-10 sm:pt-12">
      <div className="container">
        <div className="relative overflow-hidden rounded-shell border border-brand-navy/10 bg-brand-navy px-6 py-10 text-white shadow-[0_30px_80px_-36px_rgba(0,0,0,0.42)] sm:px-8 sm:py-12 lg:px-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(86,149,255,0.2),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_44%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:44px_44px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-mist">
                {eyebrow}
              </p>
              <h2 className="mt-4 max-w-[13ch] font-display text-5xl leading-[0.96] tracking-[-0.04em] sm:text-6xl">
                {title}
              </h2>
              <p className="mt-5 max-w-[40rem] text-pretty text-base leading-8 text-white/74 sm:text-lg">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "primary", size: "lg" }),
                    "group border-white/10 bg-white text-brand-primary hover:bg-brand-mist",
                  )}
                >
                  {primaryLabel}
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/8 transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
                <a
                  href="tel:+16476936982"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "border-white/18 bg-transparent text-white hover:border-white hover:bg-white hover:text-brand-navy",
                  )}
                >
                  {secondaryLabel}
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:min-w-[21rem]">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-brand-mist" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/72">
                      Response time
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Most inquiries answered within 24 hours
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-5 w-5 text-brand-mist" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/72">
                      Direct line
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      +1 (647) 693-6982
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
