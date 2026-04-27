import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { ConsultationCta } from "@/components/layout/consultation-cta";
import { BlogShare } from "@/components/blog/blog-share";
import { RelatedPosts } from "@/components/blog/related-posts";
import { fallbackPosts, type BlogPost } from "@/lib/blog-posts";
import { buildMetadata } from "@/lib/seo";
import { fetchUpliftPost, fetchUpliftPosts, type UpliftBlogDetail } from "@/lib/uplift";
import { siteConfig } from "@/config/site";

export const revalidate = 3600;

type PageProps = {
  params: { slug: string };
};

function fallbackToDetail(slug: string): UpliftBlogDetail | null {
  const local = fallbackPosts.find((p) => p.slug === slug);
  if (!local) return null;
  const keyPointsHtml = local.keyPoints.length
    ? `<h2>Key takeaways</h2><ul>${local.keyPoints.map((point) => `<li>${point}</li>`).join("")}</ul>`
    : "";
  return {
    slug: local.slug,
    title: local.title,
    excerpt: local.summary,
    content: `<p>${local.summary}</p>${keyPointsHtml}<p>For a personalized walkthrough of this topic, book a consultation with our team.</p>`,
    category: local.category,
    date: local.date,
    readTime: local.readTime,
    coverImage: local.coverImage,
    coverAlt: local.coverAlt,
    seoTitle: local.title,
    seoDescription: local.summary,
  };
}

async function loadPost(slug: string): Promise<UpliftBlogDetail | null> {
  return (await fetchUpliftPost(slug)) ?? fallbackToDetail(slug);
}

function pickRelated(all: BlogPost[], current: UpliftBlogDetail): BlogPost[] {
  const sameCategory = all.filter(
    (p) => p.slug !== current.slug && p.category === current.category,
  );
  const others = all.filter(
    (p) => p.slug !== current.slug && p.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, 3);
}

function authorInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await loadPost(params.slug);
  if (!post) {
    return buildMetadata({
      title: "Article",
      description: "Read the full article on Canada Business Solutions.",
      path: `/blog/${params.slug}`,
    });
  }
  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await loadPost(params.slug);
  if (!post) notFound();

  const allPosts = await fetchUpliftPosts();
  const relatedPosts = pickRelated(allPosts, post);

  const postUrl = new URL(`/blog/${post.slug}`, siteConfig.url).toString();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription ?? post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author: post.authorName
      ? { "@type": "Person", name: post.authorName, url: post.authorUrl }
      : { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: postUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article>
        {/* Breadcrumb */}
        <div className="container pt-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-brand-navy/60"
          >
            <Link href="/" className="hover:text-brand-primary">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:text-brand-primary">
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span className="line-clamp-1 text-brand-navy/82">{post.title}</span>
          </nav>
        </div>

        {/* Header */}
        <header className="container pt-10 sm:pt-14">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-brand-paper px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-primary">
              {post.category}
            </span>

            <h1 className="mt-6 text-balance font-display text-[clamp(2.4rem,4.6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-brand-navy">
              {post.title}
            </h1>

            {post.excerpt ? (
              <p className="mt-6 text-pretty text-lg leading-[1.65] text-brand-navy/72 sm:text-xl">
                {post.excerpt}
              </p>
            ) : null}

            {/* Author + meta row */}
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-brand-navy/10 py-5 text-sm text-brand-navy/72">
              {post.authorName ? (
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 place-items-center rounded-full bg-brand-navy text-sm font-semibold text-white"
                  >
                    {authorInitials(post.authorName)}
                  </span>
                  <div className="leading-tight">
                    <p className="font-semibold text-brand-navy">{post.authorName}</p>
                    <p className="text-xs text-brand-navy/60">Contributor</p>
                  </div>
                </div>
              ) : null}
              {post.date ? (
                <span className="inline-flex items-center text-brand-navy/68">
                  {post.date}
                </span>
              ) : null}
              <span className="inline-flex items-center gap-2 text-brand-navy/68">
                <Clock3 className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Cover image — full-bleed */}
        <div className="container mt-10 sm:mt-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-shell bg-brand-paper">
            <Image
              src={post.coverImage}
              alt={post.coverAlt}
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Body — two-column with sticky sidebar */}
        <div className="container mt-12 sm:mt-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
            <div className="mx-auto w-full max-w-2xl lg:mx-0">
              <div
                className="blog-content text-[1.05rem] leading-[1.85] text-brand-navy/82"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Back link below body */}
              <div className="mt-14 border-t border-brand-navy/10 pt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-navy"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to all articles
                </Link>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-4">
                <BlogShare url={postUrl} title={post.title} />

                {post.authorName ? (
                  <div className="rounded-[1.4rem] border border-brand-navy/10 bg-brand-paper/70 p-5">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="grid h-12 w-12 place-items-center rounded-full bg-brand-navy text-base font-semibold text-white"
                      >
                        {authorInitials(post.authorName)}
                      </span>
                      <div className="leading-tight">
                        <p className="font-semibold text-brand-navy">
                          {post.authorName}
                        </p>
                        <p className="text-xs text-brand-navy/60">
                          Canada Business Solutions
                        </p>
                      </div>
                    </div>
                    {post.authorUrl ? (
                      <a
                        href={post.authorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-navy"
                      >
                        View profile
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                ) : null}

                <div className="rounded-[1.4rem] border border-brand-navy/10 bg-brand-navy p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-mist">
                    Need a next step?
                  </p>
                  <p className="mt-3 font-display text-xl leading-tight">
                    Book a consultation with CBS.
                  </p>
                  <p className="mt-3 text-sm text-white/72">
                    Talk through your situation with someone who has done this before.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-mist hover:text-white"
                  >
                    Get in touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <RelatedPosts posts={relatedPosts} />

      <ConsultationCta
        eyebrow="Want help with this?"
        title="Talk through your situation in a free consultation."
        description="Whether the article above raised a question or you are ready to take a next step, CBS can help you sort what to do first."
      />
    </>
  );
}
