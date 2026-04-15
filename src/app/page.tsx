import type { Metadata } from "next";
import { HomeCredibilityStrip } from "@/components/home/home-credibility-strip";
import { HomeCtaBanner } from "@/components/home/home-cta-banner";
import { HomeDifferentiators } from "@/components/home/home-differentiators";
import { HomeHero } from "@/components/home/home-hero";
import { HomeIndustries } from "@/components/home/home-industries";
import { HomeServices } from "@/components/home/home-services";
import { HomeStats } from "@/components/home/home-stats";
import { HomeTestimonials } from "@/components/home/home-testimonials";
import { buildMetadata, localBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Start your business in Canada",
  description:
    "Business incorporation, licensing, permits, funding support, and procurement guidance for entrepreneurs and newcomers in Canada.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <HomeHero />
      <HomeCredibilityStrip />
      <HomeServices />
      <HomeIndustries />
      <HomeStats />
      <HomeDifferentiators />
      <HomeTestimonials />
      <HomeCtaBanner />
    </>
  );
}
