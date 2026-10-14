import { absolute, siteUrl } from "@/lib/site";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: absolute("/sitemap.xml"),
    host: siteUrl
  };
}
