import { fallbackPosts, type BlogPost } from "./blog-posts";

type UpliftBlog = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  status?: "PUBLISH" | "DRAFT" | string;
  publishDate?: string;
  publishTime?: string;
  featuredImage?: string;
  categories?: string[];
  tags?: string[];
  seoScore?: number;
  createdAt?: string;
  updatedAt?: string;
  authorName?: string;
  authorUrl?: string;
  freshness?: {
    lastUpdatedAt?: string;
    ageDays?: number;
    needsRefresh?: boolean;
  };
  meta?: {
    seoTitle?: string;
    seoDescription?: string;
    focusKeyword?: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
    articleSection?: string;
    articleTags?: string[];
  };
  customFields?: {
    readingTime?: string;
    rating?: number;
  };
};

type UpliftListResponse = {
  success: boolean;
  data?: {
    blogs?: UpliftBlog[];
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  error?: string;
};

const FALLBACK_COVER =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80";

function formatReadTime(blog: UpliftBlog): string {
  const explicit = blog.customFields?.readingTime;
  if (explicit) {
    return explicit.toLowerCase().includes("read") ? explicit : `${explicit} read`;
  }
  // Estimate from word count if content is present.
  if (typeof blog.content === "string" && blog.content.length > 0) {
    const words = blog.content.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / 220));
    return `${minutes} min read`;
  }
  return "5 min read";
}

function formatDate(blog: UpliftBlog): string {
  const raw =
    blog.freshness?.lastUpdatedAt ??
    blog.updatedAt ??
    blog.publishDate ??
    blog.createdAt;
  if (!raw) return "";
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return "";
  return `Updated ${parsed.toLocaleDateString("en-CA", { month: "long", year: "numeric" })}`;
}

function pickKeyPoints(blog: UpliftBlog): string[] {
  if (Array.isArray(blog.meta?.keywords) && blog.meta!.keywords!.length > 0) {
    return blog.meta!.keywords!.slice(0, 3);
  }
  if (Array.isArray(blog.tags) && blog.tags.length > 0) {
    return blog.tags.slice(0, 3);
  }
  return [];
}

function mapBlog(blog: UpliftBlog): BlogPost | null {
  if (!blog?.slug || !blog?.title) return null;
  return {
    slug: blog.slug,
    title: blog.title,
    category:
      blog.categories?.[0] ?? blog.meta?.articleSection ?? "Resources",
    readTime: formatReadTime(blog),
    summary:
      blog.excerpt ??
      blog.meta?.seoDescription ??
      blog.meta?.ogDescription ??
      "",
    date: formatDate(blog),
    keyPoints: pickKeyPoints(blog),
    coverImage: blog.featuredImage ?? FALLBACK_COVER,
    coverAlt: blog.meta?.ogTitle ?? blog.title,
  };
}

export async function fetchUpliftPosts(): Promise<BlogPost[]> {
  const apiKey = process.env.UPLIFT_API_KEY;
  const apiUrl = process.env.UPLIFT_API_URL;

  if (!apiKey || !apiUrl) {
    return fallbackPosts;
  }

  try {
    const url = new URL(apiUrl);
    url.searchParams.set("status", "PUBLISH");
    url.searchParams.set("limit", "50");

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
      // Revalidate hourly so new auto-generated posts appear within 60 minutes
      // without a redeploy. Daily generation is well under this threshold.
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(
        `UpliftAI list request failed (${response.status}). Using fallback posts.`,
      );
      return fallbackPosts;
    }

    const payload = (await response.json()) as UpliftListResponse;
    const blogs = payload?.data?.blogs;

    if (!payload.success || !Array.isArray(blogs) || blogs.length === 0) {
      return fallbackPosts;
    }

    const mapped = blogs
      .map(mapBlog)
      .filter((post): post is BlogPost => post !== null);

    return mapped.length > 0 ? mapped : fallbackPosts;
  } catch (error) {
    console.warn("UpliftAI fetch error — falling back to local posts.", error);
    return fallbackPosts;
  }
}
