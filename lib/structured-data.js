// schema.org JSON-LD builders (rendered with components/JsonLd).
import { company, products } from "./company";
import { perfumes } from "./catalogue";
import { getDictionary } from "./get-dictionary";
import { absolute, siteUrl } from "./site";

const ORG_ID = `${siteUrl}/#organization`;
const plain = (text) => text.replace(/\[\[(.+?)\]\]/g, "$1");
const ctx = (obj) => ({ "@context": "https://schema.org", ...obj });

export function organizationJsonLd(locale) {
  return ctx({
    "@type": "Organization",
    "@id": ORG_ID,
    name: company.name,
    legalName: company.legalName,
    url: siteUrl,
    logo: absolute("/images/logo.png"),
    description: getDictionary(locale).seo.home.description,
    email: company.email,
    telephone: company.phone,
    address: { "@type": "PostalAddress", addressLocality: "Ras Al Khaimah", addressCountry: "AE" },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Cameroon" },
      { "@type": "Continent", name: "Africa" }
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: company.phone,
        email: company.email,
        availableLanguage: ["English", "French", "Arabic"]
      }
    ],
    sameAs: [company.whatsappChannel],
    knowsAbout: ["Software development", "E-commerce", "Digital marketing", "Perfume import from Dubai", "UAE mobility"]
  });
}

export function websiteJsonLd(locale) {
  return ctx({
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: absolute(`/${locale}`),
    name: "Stratix",
    inLanguage: locale,
    publisher: { "@id": ORG_ID }
  });
}

export function breadcrumbJsonLd(locale, name, path) {
  return ctx({
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Stratix", item: absolute(`/${locale}`) },
      { "@type": "ListItem", position: 2, name, item: absolute(`/${locale}${path}`) }
    ]
  });
}

export function faqJsonLd(locale) {
  return ctx({
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: getDictionary(locale).faq.flatMap((group) =>
      group.items.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } }))
    )
  });
}

const service = (name, description, path, locale) => ({
  "@type": "Service",
  name: plain(name),
  description,
  url: absolute(`/${locale}${path}`),
  provider: { "@id": ORG_ID },
  areaServed: ["AE", "CM"]
});

export function servicesJsonLd(locale) {
  const { items } = getDictionary(locale).services;
  return ctx({
    "@type": "ItemList",
    inLanguage: locale,
    itemListElement: items.map((s, i) => ({ "@type": "ListItem", position: i + 1, item: service(s.title, s.text, `/services#${s.id}`, locale) }))
  });
}

export function mobilityJsonLd(locale) {
  const { audiences } = getDictionary(locale).mobility;
  return ctx({
    "@type": "ItemList",
    inLanguage: locale,
    itemListElement: audiences.map((a, i) => ({ "@type": "ListItem", position: i + 1, item: service(`${a.title} · UAE`, a.lead, `/mobility#${a.id}`, locale) }))
  });
}

export function catalogueJsonLd(locale) {
  const c = getDictionary(locale).catalogue;
  return ctx({
    "@type": "ItemList",
    inLanguage: locale,
    itemListElement: perfumes.map((p, i) => {
      const copy = c.items[p.slug];
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: `${p.name} – ${p.brand} Eau de Parfum ${p.size}`,
          brand: { "@type": "Brand", name: p.brand },
          category: "Perfume",
          image: absolute(p.poster),
          description: copy.description,
          url: absolute(`/${locale}/catalogue?perfume=${p.slug}`),
          subjectOf: {
            "@type": "VideoObject",
            name: `${p.name} · ${p.brand} — Stratix`,
            description: copy.tagline,
            thumbnailUrl: absolute(p.poster),
            contentUrl: absolute(p.video),
            uploadDate: p.uploadDate,
            duration: p.duration,
            inLanguage: "fr"
          }
        }
      };
    })
  });
}

export function partnerProductsJsonLd(locale) {
  const dict = getDictionary(locale).products;
  const partner = { "@type": "Organization", name: company.partner.name, url: company.partner.url };
  const app = (id, category, os, offers) => ({
    "@type": "SoftwareApplication",
    name: products[id].name,
    url: products[id].site,
    description: dict[id].text,
    applicationCategory: category,
    operatingSystem: os,
    image: absolute(products[id].logo),
    author: partner,
    publisher: partner,
    offers
  });
  return [
    ctx(app("mboameet", "SocialNetworkingApplication", "iOS, Android, Web", { "@type": "Offer", price: "0", priceCurrency: "USD" })),
    ctx(app("efarmer", "BusinessApplication", "iOS, Android, Windows, Web", { "@type": "AggregateOffer", lowPrice: "0", highPrice: "90", priceCurrency: "USD" }))
  ];
}

export function heroVideoJsonLd(locale) {
  const dict = getDictionary(locale);
  return ctx({
    "@type": "VideoObject",
    name: dict.home.hero.video,
    description: dict.seo.home.description,
    thumbnailUrl: absolute(`/hero/stratix-${locale}.jpg`),
    contentUrl: absolute(`/hero/stratix-${locale}.mp4`),
    uploadDate: "2026-10-14",
    duration: "PT30S",
    inLanguage: locale,
    publisher: { "@id": ORG_ID }
  });
}
