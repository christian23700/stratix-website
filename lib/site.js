import { company } from "./company";

// Absolute base URL used in canonical links, hreflang, Open Graph, JSON-LD, sitemap and robots.
// Set NEXT_PUBLIC_SITE_URL to the final domain; on Vercel it otherwise falls back to the production URL.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : company.siteUrl)
).replace(/\/$/, "");

export const absolute = (path) => `${siteUrl}${path}`;
