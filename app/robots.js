import { company } from "@/lib/company";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${company.siteUrl}/sitemap.xml`
  };
}
