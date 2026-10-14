import { locales } from "@/lib/i18n-config";
import { company } from "@/lib/company";

const routes = ["", "/services", "/mobility", "/products", "/about", "/contact"];

export default function sitemap() {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${company.siteUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.7
    }))
  );
}
