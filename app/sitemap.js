import { locales } from "@/lib/i18n-config";

const routes = ["", "/about", "/services", "/solutions", "/contact"];
const base = "https://www.stratixdigitalsolutions.com";

export default function sitemap() {
  const entries = [];
  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${base}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.7
      });
    }
  }
  return entries;
}
