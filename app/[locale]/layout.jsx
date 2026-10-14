import "../globals.css";
import { Bricolage_Grotesque, Noto_Kufi_Arabic, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, localeMeta } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
import { themeScript } from "@/lib/theme";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollTopButton from "@/components/ScrollTopButton";

// Genuka uses Bricolage Grotesque for both headings and text.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["500", "600", "700"],
  variable: "--font-display-ar",
  display: "swap"
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-ar",
  display: "swap"
});

// Only /en, /fr and /ar exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport = {
  themeColor: "#0B2D6B",
  width: "device-width",
  initialScale: 1
};

export function generateMetadata({ params }) {
  return {
    metadataBase: new URL(siteUrl),
    title: { default: getDictionary(params.locale).seo.home.title, template: "%s | Stratix" },
    applicationName: "Stratix",
    authors: [{ name: "Stratix Digital Solutions FZ-LLC" }],
    creator: "Stratix Digital Solutions FZ-LLC",
    publisher: "Stratix Digital Solutions FZ-LLC",
    category: "business",
    formatDetection: { telephone: false, email: false, address: false },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1 } },
    // Pages override these; the home page values are the fallback.
    ...pageMetadata(params.locale, "home")
  };
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  if (!locales.includes(locale)) notFound();

  const dict = getDictionary(locale);
  const { dir } = localeMeta[locale];

  return (
    // suppressHydrationWarning: the theme script sets data-theme on <html> before React hydrates
    <html lang={locale} dir={dir} className={[bricolage.variable, notoKufiArabic.variable, plexArabic.variable].join(" ")} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={[
          // --font-body follows the display face, like Genuka
          "[--font-body:var(--font-display)]",
          locale === "ar" ? "font-body-ar" : "font-body",
          "flex min-h-screen flex-col bg-canvas text-ink antialiased"
        ].join(" ")}
      >
        <JsonLd data={[organizationJsonLd(locale), websiteJsonLd(locale)]} />
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        <WhatsAppButton dict={dict} locale={locale} />
        <ScrollTopButton label={dict.common.backToTop} />
      </body>
    </html>
  );
}
