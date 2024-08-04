/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
  basePath: isProd ? "/portfolio" : "", // Setzt basePath nur im Produktionsmodus
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
};

export default nextConfig;
