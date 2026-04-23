import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Facebook,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  MapPinned,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { BrandMark } from "@/components/ui/brand-mark";
import { siteConfig } from "@/config/site";

const socialIcons = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
} as const;

const trustMarkers = [
  { icon: Globe2, label: "Canada-wide service" },
  { icon: ShieldCheck, label: "Compliance-first" },
  { icon: Clock3, label: "24-hour response" },
];

const businessHours = [
  { day: "Mon – Fri", hours: "9:00 – 18:00" },
  { day: "Saturday", hours: "By appointment" },
  { day: "Sunday", hours: "Closed" },
];

const secondaryLinks = [
  { label: "Privacy", href: "/" },
  { label: "Terms", href: "/" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export function Footer() {
  const visibleSocialLinks = siteConfig.socialLinks.filter((item) => item.href);
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-navy text-white">
      {/* brand texture overlays */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-maple opacity-20" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-diagonal opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(86,149,255,0.18),transparent_40%)]"
      />

      {/* giant wordmark watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-8 flex justify-center overflow-hidden"
      >
        <span className="select-none whitespace-nowrap font-display text-[clamp(8rem,22vw,22rem)] font-semibold leading-none text-white/[0.035]">
          Canada Business
        </span>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-14">
        {/* Top trust marker rail */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 py-6">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {trustMarkers.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 font-sans text-[12px] font-medium text-mist/80"
              >
                <Icon className="h-4 w-4 text-accent" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          {visibleSocialLinks.length ? (
            <div className="flex items-center gap-2">
              {visibleSocialLinks.map((item) => {
                const Icon = socialIcons[item.icon];
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white/75 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
                    aria-label={item.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>

        {/* Main grid */}
        <div className="grid gap-14 py-16 lg:grid-cols-[1.4fr_0.75fr_0.95fr_0.9fr] lg:gap-12">
          {/* Brand column */}
          <div className="max-w-md">
            <BrandMark inverted />
            <p className="mt-8 max-w-md font-display text-[clamp(1.5rem,2vw,1.875rem)] font-semibold leading-snug text-white">
              Start strong. File right. Build a business that lasts.
            </p>
            <p className="mt-5 max-w-md text-[14px] leading-[1.7] text-mist/75">
              A Toronto-based advisory helping entrepreneurs, newcomers, and
              owner-operators incorporate, license, and fund businesses across
              Canada.
            </p>
            <Link
              href={siteConfig.primaryCta.href}
              className="group mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3.5 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-royal"
            >
              {siteConfig.primaryCta.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-mist/65">
              Navigate
            </p>
            <ul className="mt-6 space-y-0">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between border-b border-white/10 py-3 font-display text-lg font-medium text-white/85 transition-colors duration-300 hover:text-accent"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-mist/65">
              Contact
            </p>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-mist/55">
                    Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneLink}`}
                    className="mt-1 block font-display text-base font-semibold text-white transition-colors duration-300 hover:text-accent"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-mist/55">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block break-all font-sans text-[14px] text-mist/85 transition-colors duration-300 hover:text-white"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPinned className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-mist/55">
                    Office
                  </p>
                  <p className="mt-1 font-sans text-[14px] leading-6 text-mist/85">
                    {siteConfig.address}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-mist/65">
              Hours
            </p>
            <ul className="mt-6 space-y-3">
              {businessHours.map((entry) => (
                <li
                  key={entry.day}
                  className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-3 font-sans text-[14px]"
                >
                  <span className="font-semibold text-white">{entry.day}</span>
                  <span className="text-mist/75">{entry.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-sans text-[12px] leading-5 text-mist/65">
              Walk-ins welcome — a quick call ahead lets us give you a structured
              first conversation.
            </p>
          </div>
        </div>

        {/* Bottom copyright rail */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-mist/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p className="hidden text-mist/45 md:block">
            Incorporation · Licensing · Funding · Procurement · Contract bidding
          </p>
          <ul className="flex items-center gap-5">
            {secondaryLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
