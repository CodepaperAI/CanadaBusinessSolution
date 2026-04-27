import { Linkedin, Mail, Twitter } from "lucide-react";

type BlogShareProps = {
  url: string;
  title: string;
};

export function BlogShare({ url, title }: BlogShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: Twitter,
    },
    {
      label: "Share via email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: Mail,
    },
  ];

  return (
    <div className="rounded-[1.4rem] border border-brand-navy/10 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
        Share
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-navy/12 bg-white text-brand-navy/70 transition-all duration-200 ease-editorial hover:-translate-y-0.5 hover:border-brand-primary/30 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
