"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useMemo, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Clock3 } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { fallbackPosts, type BlogPost } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

type BlogResourceHubProps = {
  posts?: BlogPost[];
};

export function BlogResourceHub({ posts: postsProp }: BlogResourceHubProps = {}) {
  const posts = postsProp && postsProp.length > 0 ? postsProp : fallbackPosts;
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts],
  );

  const visiblePosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  function handleCategoryChange(category: string) {
    startTransition(() => {
      setActiveCategory(category);
    });
  }

  return (
    <Section className="pt-16 sm:pt-20">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Browse the library"
          title="Articles, guides, and founder notes."
          description="Filter by topic, then open the article you want to read."
        />
        <p className="max-w-[28rem] text-sm leading-7 text-brand-navy/66 sm:text-base">
          New articles are published regularly — refresh anytime for the latest.
        </p>
      </div>

      <LayoutGroup>
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                className={cn(
                  "relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60 focus-visible:ring-offset-2",
                  isActive
                    ? "border-brand-primary text-white"
                    : "border-brand-navy/10 bg-white text-brand-navy/72 hover:-translate-y-0.5 hover:border-brand-primary/30 hover:text-brand-primary",
                )}
                onClick={() => handleCategoryChange(category)}
                aria-pressed={isActive}
              >
                {isActive ? (
                  prefersReducedMotion ? (
                    <span className="absolute inset-0 bg-brand-primary" />
                  ) : (
                    <motion.span
                      layoutId="blog-active-tab"
                      className="absolute inset-0 bg-brand-primary"
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    />
                  )
                ) : null}
                <span className="relative">{category}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          layout={!prefersReducedMotion}
          className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence initial={false}>
            {visiblePosts.map((post, index) => (
              <motion.div
                key={post.slug}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                transition={{
                  duration: 0.26,
                  delay: prefersReducedMotion ? 0 : index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-white text-left transition-all duration-200 ease-editorial hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60 focus-visible:ring-offset-2"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-paper">
                    <Image
                      src={post.coverImage}
                      alt={post.coverAlt}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                    />
                  </div>
                  <div className="flex h-[calc(100%-56.25%)] flex-col px-5 py-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-brand-paper px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary">
                        {post.category}
                      </span>
                      {post.date ? (
                        <span className="text-xs text-brand-navy/66">{post.date}</span>
                      ) : null}
                    </div>

                    <h3 className="mt-6 text-balance font-display text-3xl leading-[1.04] tracking-[-0.04em] text-brand-navy">
                      {post.title}
                    </h3>
                    {post.summary ? (
                      <p className="mt-4 text-sm leading-7 text-brand-navy/66 sm:text-base">
                        {post.summary}
                      </p>
                    ) : null}

                    <div className="mt-auto pt-6 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
                        Read article
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-brand-navy/66">
                        <Clock3 className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </Section>
  );
}
