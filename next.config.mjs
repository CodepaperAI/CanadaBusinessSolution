/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // UpliftAI returns featured images from arbitrary CDNs. Allow any HTTPS host
      // so auto-generated blog covers always render. Source URLs come from a
      // trusted API (the bearer token gates them), so the broad allowlist is
      // acceptable here.
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
