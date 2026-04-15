import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PhasePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
  phaseLabel: string;
};

export function PhasePlaceholder({
  eyebrow,
  title,
  description,
  phaseLabel,
}: PhasePlaceholderProps) {
  return (
    <Section className="min-h-[60dvh]">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[2.2rem] border border-brand-navy/10 bg-editorial-sheen px-6 py-8 shadow-soft sm:px-8 sm:py-10">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </div>

        <div className="rounded-[2.2rem] border border-brand-navy/10 bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">
            Build queue
          </p>
          <p className="mt-4 font-display text-4xl leading-tight tracking-tight text-brand-navy">
            Scheduled for {phaseLabel}.
          </p>
          <p className="mt-4 max-w-[34rem] text-base leading-8 text-brand-navy/70">
            This route is intentionally live so navigation and call-to-action paths stay
            intact while we build the full experience section by section.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className={cn(buttonVariants({ variant: "primary" }))}>
              Return home
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "secondary" }), "group")}
            >
              Go to contact
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

