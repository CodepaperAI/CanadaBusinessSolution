export const siteConfig = {
  name: "Canada Business Solutions",
  description:
    "Toronto business consultants helping entrepreneurs and newcomers start and grow businesses in Canada.",
  url: "https://canadabusinesssolutions.ca",
  ogImage: "/opengraph-card.svg",
  email: "info@canadabusinesssolutions.ca",
  phoneDisplay: "+1 (647) 693-6982",
  phoneLink: "+16476936982",
  address: "2900 Markham Road, Unit 17, Toronto, ON",
  streetAddress: "2900 Markham Road, Unit 17",
  addressLocality: "Toronto",
  addressRegion: "ON",
  addressCountry: "CA",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  primaryCta: {
    label: "Book a Consultation",
    href: "/contact",
  },
  socialLinks: [
    { label: "LinkedIn", icon: "linkedin" as const, href: "" },
    { label: "Facebook", icon: "facebook" as const, href: "" },
    { label: "Instagram", icon: "instagram" as const, href: "" },
  ],
};
