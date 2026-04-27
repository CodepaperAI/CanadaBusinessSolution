import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-posts";

type RelatedPostsProps = {
  posts: BlogPost[];
};

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <section className="border-t border-brand-navy/10 py-20 sm:py-24">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Keep reading</p>
            <h2 className="h-section mt-3 max-w-2xl text-brand-navy">
              More articles to explore.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-navy"
          >
            View the full library
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-[1.6rem] border border-brand-navy/10 bg-white transition-all duration-200 ease-editorial hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-soft"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-paper">
                <Image
                  src={post.coverImage}
                  alt={post.coverAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-5">
                <span className="rounded-full bg-brand-paper px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-primary">
                  {post.category}
                </span>
                <h3 className="mt-4 font-display text-2xl leading-[1.1] tracking-[-0.02em] text-brand-navy">
                  {post.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
