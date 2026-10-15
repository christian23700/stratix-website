import { company } from "./company";

// Absolute base URL used in canonical links, hreflang, Open Graph, JSON-LD, sitemap and robots.
// Always the public domain (company.siteUrl), so preview and *.vercel.app deployments never compete with it
// in search results; NEXT_PUBLIC_SITE_URL overrides it if the domain ever changes.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || company.siteUrl).replace(/\/$/, "");

export const absolute = (path) => `${siteUrl}${path}`;
