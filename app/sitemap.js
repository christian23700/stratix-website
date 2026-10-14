import { locales } from "@/lib/i18n-config";
import { languageAlternates } from "@/lib/seo";
import { absolute } from "@/lib/site";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/catalogue", priority: 0.9, changeFrequency: "weekly" },
  { path: "/mobility", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" }
];

// One entry per page and language, each listing its other-language versions (hreflang).
export default function sitemap() {
  const lastModified = new Date();
  return routes.flatMap(({ path, priority, changeFrequency }) => {
    const languages = Object.fromEntries(Object.entries(languageAlternates(path)).map(([l, p]) => [l, absolute(p)]));
    return locales.map((locale) => ({
      url: absolute(`/${locale}${path}`),
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages }
    }));
  });
}
