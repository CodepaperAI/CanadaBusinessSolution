"use client";

import Image from "next/image";
import Link from "next/link";
import {
  startTransition,
  useEffect,
  useMemo,
  useState,
  type FormEvent,
} from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, BookOpenText, Clock3, MailPlus, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { fallbackPosts, type BlogPost } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

function validateEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

type BlogResourceHubProps = {
  posts?: BlogPost[];
};

export function BlogResourceHub({ posts: postsProp }: BlogResourceHubProps = {}) {
  const posts = postsProp && postsProp.length > 0 ? postsProp : fallbackPosts;

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((post) => post.category)))],
    [posts],
  );

  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");
  const [featuredSlug, setFeaturedSlug] = useState(posts[0]?.slug ?? "");
  const [email, setEmail] = useState("");
  const [newsletterState, setNewsletterState] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const visiblePosts = useMemo(() => {
    if (activeCategory === "All") {
      return posts;
    }

    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  useEffect(() => {
    if (!visiblePosts.some((post) => post.slug === featuredSlug)) {
      setFeaturedSlug(visiblePosts[0]?.slug ?? posts[0]?.slug ?? "");
    }
  }, [featuredSlug, visiblePosts, posts]);

  const featuredPost =
    visiblePosts.find((post) => post.slug === featuredSlug) ?? posts[0];

  if (!featuredPost) {
    return null;
  }

  function handleCategoryChange(category: string) {
    startTransition(() => {
      setActiveCategory(category);
    });
  }

  function handleFeatureSelect(slug: string) {
    startTransition(() => {
      setFeaturedSlug(slug);
    });
  }

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateEmail(email)) {
      setNewsletterState("error");
      setNewsletterMessage("Enter a valid email address to receive updates.");
      return;
    }

    setNewsletterState("success");
    setNewsletterMessage("Thanks. You're on the list for new founder resources.");
    setEmail("");
  }

  return (
    <>
      <Section className="pt-16 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Featured post"
              title="A lead article that can change with the reader's interest."
              description="Selecting any card below updates the featured article here, so the page feels more like a working resource hub than a dead archive."
            />

            <AnimatePresence mode="wait">
              <motion.article
                key={featuredPost.slug}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 overflow-hidden rounded-[2.25rem] border border-brand-navy/10 bg-brand-navy text-white shadow-[0_28px_80px_-42px_rgba(0,0,0,0.42)]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-navy">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.coverAlt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover opacity-80"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent"
                  />
                </div>
                <div className="px-6 py-7 sm:px-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-mist">
                    {featuredPost.category}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-white/62">
                    <Clock3 className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                  <span className="text-sm text-white/68">{featuredPost.date}</span>
                </div>

                <h2 className="mt-8 max-w-[14ch] font-display text-[clamp(2.7rem,4.8vw,4.5rem)] leading-[1.02] tracking-[-0.04em] text-balance">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 max-w-[40rem] text-pretty text-base leading-8 text-white/76 sm:text-lg">
                  {featuredPost.summary}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ variant: "primary" }),
                      "group border-white/10 bg-white text-brand-primary hover:bg-brand-mist",
                    )}
                  >
                    Talk through this topic
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/8 transition-transform duration-200 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="rounded-[2.25rem] border border-brand-navy/10 bg-white px-6 py-7 shadow-soft sm:px-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-[1rem] bg-brand-paper text-brand-primary">
                <BookOpenText className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
                  Inside the featured brief
                </p>
                <p className="mt-1 text-sm text-brand-navy/66">
                  Updated when a new card is selected
                </p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.ul
                key={`${featuredPost.slug}-points`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 space-y-4"
              >
                {featuredPost.keyPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-brand-navy/72 sm:text-base">
                    <span className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-primary/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>

            <div className="mt-8 rounded-[1.6rem] border border-brand-navy/10 bg-brand-paper/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
                A small interaction detail
              </p>
              <p className="mt-3 text-sm leading-7 text-brand-navy/68">
                Instead of dumping visitors into unfinished article routes, the page lets
                them preview the article that matters most to them and then move to contact
                when they want direct help.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Browse the library"
            title="Filter by topic, then feature the article you want to read first."
            description="The category tabs are intentionally prominent and tactile so the resource grid feels interactive, not archival."
          />
          <p className="max-w-[28rem] text-sm leading-7 text-brand-navy/66 sm:text-base">
            Select any article card to refresh the featured panel above.
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

          <motion.div layout={!prefersReducedMotion} className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence initial={false}>
              {visiblePosts.map((post, index) => {
                const isFeatured = post.slug === featuredSlug;

                return (
                  <motion.button
                    key={post.slug}
                    layout={!prefersReducedMotion}
                    type="button"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
                    transition={{
                      duration: 0.26,
                      delay: prefersReducedMotion ? 0 : index * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={() => handleFeatureSelect(post.slug)}
                    className={cn(
                      "group overflow-hidden rounded-[2rem] border text-left transition-all duration-200 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60 focus-visible:ring-offset-2",
                      isFeatured
                        ? "border-brand-primary bg-brand-navy text-white shadow-[0_20px_60px_-36px_rgba(0,45,87,0.46)]"
                        : "border-brand-navy/10 bg-white hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-soft",
                    )}
                    aria-pressed={isFeatured}
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-paper">
                      <Image
                        src={post.coverImage}
                        alt={post.coverAlt}
                        fill
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                      />
                      {isFeatured ? (
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-brand-navy/55 via-transparent to-transparent"
                        />
                      ) : null}
                    </div>
                    <div className="px-5 py-6">
                    <div className="flex items-center justify-between gap-4">
                      <span
                        className={cn(
                          "rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em]",
                          isFeatured
                            ? "bg-white/10 text-brand-mist"
                            : "bg-brand-paper text-brand-primary",
                        )}
                      >
                        {post.category}
                      </span>
                      <span
                        className={cn(
                          "text-xs",
                          isFeatured ? "text-white/74" : "text-brand-navy/66",
                        )}
                      >
                        {post.date}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        "mt-6 text-balance font-display text-3xl leading-[1.04] tracking-[-0.04em]",
                        isFeatured ? "text-white" : "text-brand-navy",
                      )}
                    >
                      {post.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-4 text-sm leading-7 sm:text-base",
                        isFeatured ? "text-white/74" : "text-brand-navy/66",
                      )}
                    >
                      {post.summary}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 text-sm font-semibold",
                          isFeatured ? "text-brand-mist" : "text-brand-primary",
                        )}
                      >
                        <Sparkles className="h-4 w-4" />
                        {isFeatured ? "Featured above" : "Feature this article"}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 text-sm",
                          isFeatured ? "text-white/74" : "text-brand-navy/66",
                        )}
                      >
                        <Clock3 className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </Section>

      <Section background="paper" className="rounded-shell" containerClassName="py-2">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <SectionHeading
            eyebrow="Newsletter"
            title="Get founder notes, checklists, and new resource updates by email."
            description="The signup is intentionally simple: one field, one action, and a small success state so the interaction feels finished."
          />

          <div className="rounded-[2.25rem] border border-brand-navy/10 bg-white px-6 py-7 shadow-soft sm:px-8">
            <form onSubmit={handleNewsletterSubmit} className="space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="newsletter-email"
                  className="text-sm font-semibold text-brand-navy"
                >
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (newsletterState !== "idle") {
                      setNewsletterState("idle");
                      setNewsletterMessage("");
                    }
                  }}
                  placeholder="name@company.com"
                  className="h-12 w-full rounded-[1rem] border border-brand-navy/12 bg-white px-4 text-base text-brand-navy outline-none transition-colors duration-200 ease-editorial placeholder:text-brand-navy/34 focus:border-brand-primary focus:ring-2 focus:ring-brand-accent/30"
                  autoComplete="email"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-7 text-brand-navy/66">
                  Monthly updates focused on business setup, compliance, and launch clarity.
                </p>
                <button
                  type="submit"
                  className={cn(buttonVariants({ variant: "primary" }), "min-w-[13rem]")}
                >
                  <MailPlus className="h-4 w-4" />
                  Join the newsletter
                </button>
              </div>

              <AnimatePresence initial={false}>
                {newsletterMessage ? (
                  <motion.p
                    key={newsletterState}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                    className={cn(
                      "rounded-[1rem] px-4 py-3 text-sm leading-7",
                      newsletterState === "success"
                        ? "bg-brand-paper text-brand-navy"
                        : "bg-brand-primary/8 text-brand-primary",
                    )}
                    role={newsletterState === "error" ? "alert" : "status"}
                  >
                    {newsletterMessage}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
