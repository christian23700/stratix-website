import { getDictionary } from "./get-dictionary";
import { defaultLocale, localeMeta, locales } from "./i18n-config";

// Link-preview image of each page (1200×630, rendered from design/visuals/og-*.html).
const ogImage = {
  home: "og-home",
  services: "og-services",
  catalogue: "og-catalogue",
  mobility: "og-mobility",
  products: "og-products",
  about: "og-home",
  contact: "og-home"
};

/** hreflang map of a path: one URL per language, plus x-default for everyone else. */
export function languageAlternates(path) {
  return {
    ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
    "x-default": `/${defaultLocale}${path}`
  };
}

/**
 * Metadata of a page: title, description, canonical URL, hreflang alternates, Open Graph and Twitter card.
 * `page` is a key of dict.seo; `path` is the route without the locale ("" for home, "/services"…).
 */
export function pageMetadata(locale, page, path = "") {
  const { title, description } = getDictionary(locale).seo[page];
  const url = `/${locale}${path}`;
  const image = { url: `/images/visuals/${ogImage[page]}.png`, width: 1200, height: 630, alt: title };

  return {
    // The home title already carries the brand; other pages get " | Stratix" from the layout template.
    title: page === "home" ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName: "Stratix",
      url,
      title,
      description,
      locale: localeMeta[locale].og,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeMeta[l].og),
      images: [image]
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] }
  };
}
