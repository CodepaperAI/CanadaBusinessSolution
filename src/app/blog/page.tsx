import type { Metadata } from "next";
import Image from "next/image";
import { BlogResourceHub } from "@/components/blog/blog-resource-hub";
import { SplitText } from "@/components/motion/split-text";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Founder resources, setup guides, and practical articles from Canada Business Solutions.",
  path: "/blog",
});

const editorialTopics = [
  "Incorporation",
  "Licensing",
  "Funding",
  "Procurement",
];

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-shell bg-brand-navy text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1800&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-brand-navy/78" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-maple opacity-35" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-diagonal opacity-55" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(86,149,255,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_44%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-navy/42 via-brand-navy/20 to-brand-navy/72"
        />

        <div className="container relative grid min-h-[calc(100dvh-76px)] gap-12 py-14 sm:py-18 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-16 lg:py-20">
          <div className="max-w-[42rem]">
            <p className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-mist">
              Blog
            </p>
            <SplitText
              as="h1"
              text="Resource notes for founders."
              delay={0.15}
              className="mt-8 max-w-[14ch] text-balance font-display text-[clamp(3rem,5.5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.02em] text-white"
            />
            <p className="mt-6 max-w-xl text-pretty text-lg leading-[1.65] text-brand-mist">
              Setup, permits, structure, funding, and common mistakes — explained simply.
            </p>
          </div>

          <div className="grid gap-4 lg:pb-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist">
                Editorial focus
              </p>
              <p className="mt-4 font-display text-3xl leading-tight tracking-tight text-white">
                A library for first reads, not filler content.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {editorialTopics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center rounded-full border border-white/14 bg-brand-navy/38 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-mist"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-white/72">
                Each article is meant to answer one practical question clearly, so visitors
                can scan the page, choose the right topic, and keep moving.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist">
                Reading posture
              </p>
              <p className="mt-4 font-display text-3xl leading-tight tracking-tight text-white">
                Less content marketing noise, more practical first-read guidance.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                The page highlights one article at a time, then lets readers filter the
                library below by topic so the experience feels intentional instead of crowded.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BlogResourceHub />
    </>
  );
}
