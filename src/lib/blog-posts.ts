export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  date: string;
  keyPoints: string[];
  coverImage: string;
  coverAlt: string;
};

export const fallbackPosts: BlogPost[] = [
  {
    slug: "how-to-incorporate-a-business-in-ontario-step-by-step-guide",
    title: "How to Incorporate a Business in Ontario: Step-by-Step Guide",
    category: "Incorporation",
    readTime: "7 min read",
    date: "Published March 2026",
    summary:
      "A practical breakdown of the decisions, filings, and preparation steps founders should organize before they submit anything.",
    keyPoints: [
      "Choosing the right business structure before filing",
      "What information and documents are usually needed up front",
      "How to reduce avoidable delay in the registration sequence",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Incorporation paperwork laid out on a desk",
  },
  {
    slug: "the-complete-guide-to-business-licenses-and-permits-in-canada",
    title: "The Complete Guide to Business Licenses and Permits in Canada",
    category: "Licensing",
    readTime: "6 min read",
    date: "Published February 2026",
    summary:
      "A founder-friendly overview of where license and permit requirements usually come from and how to map them before launch.",
    keyPoints: [
      "Municipal, provincial, and federal approvals serve different roles",
      "Business activity and location change the requirements",
      "Early mapping helps avoid opening with missing approvals",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Organised folders and permit forms on a workspace",
  },
  {
    slug: "top-government-grants-for-small-businesses-in-canada-2024",
    title: "Top Government Grants for Small Businesses in Canada 2024",
    category: "Funding",
    readTime: "5 min read",
    date: "Published January 2026",
    summary:
      "A clearer way to think about grant discovery, eligibility screening, and why better preparation matters before an application is started.",
    keyPoints: [
      "Not every funding program matches every business stage",
      "Eligibility screening saves time before writing begins",
      "A stronger application starts with sharper documentation",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Calculator and funding application on a desk",
  },
  {
    slug: "5-common-mistakes-when-starting-a-business-in-canada",
    title: "5 Common Mistakes When Starting a Business in Canada",
    category: "Planning",
    readTime: "4 min read",
    date: "Published April 2026",
    summary:
      "Five patterns that slow down first-time founders, from sequence mistakes to missing approvals and underprepared filings.",
    keyPoints: [
      "Trying to solve everything at once instead of sequencing decisions",
      "Assuming registration alone covers operating requirements",
      "Underestimating how long documents and approvals may take",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Small team in a planning conversation around a laptop",
  },
  {
    slug: "business-registration-for-newcomers-what-you-need-to-know",
    title: "Business Registration for Newcomers: What You Need to Know",
    category: "Newcomers",
    readTime: "5 min read",
    date: "Published March 2026",
    summary:
      "A concise orientation for newcomers who want to understand how registration, licensing, and first-step compliance fit together.",
    keyPoints: [
      "Where to start when the Canadian business system is unfamiliar",
      "Which early questions shape the next filings and approvals",
      "Why a consultation can save time before paperwork begins",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Two people reviewing documents together at a table",
  },
  {
    slug: "sole-proprietorship-vs-corporation-which-is-right-for-you",
    title: "Sole Proprietorship vs Corporation: Which Is Right for You?",
    category: "Structure",
    readTime: "6 min read",
    date: "Published February 2026",
    summary:
      "A plain-language comparison of two common business structures and the practical tradeoffs founders should think through early.",
    keyPoints: [
      "Liability, administration, and growth plans all affect the choice",
      "The lowest-friction option is not always the best long-term fit",
      "Structure decisions should support the operating model, not just filing speed",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1400&q=80",
    coverAlt: "Hands reviewing a signed business document",
  },
];
