import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/blog", "/faq", "/contact"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: route ? `${siteConfig.url}${route}` : siteConfig.url,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
