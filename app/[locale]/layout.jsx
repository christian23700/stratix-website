import { Bricolage_Grotesque, Noto_Kufi_Arabic, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, localeMeta } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { company } from "@/lib/company";
import LocaleAttributes from "@/components/LocaleAttributes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const dict = getDictionary(params.locale);
  return {
    metadataBase: new URL(company.siteUrl),
    title: { default: dict.meta.title, template: `%s | Stratix` },
    description: dict.meta.description,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`]))
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: "Stratix",
      locale: params.locale,
      type: "website"
    }
  };
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  if (!locales.includes(locale)) notFound();

  const dict = getDictionary(locale);
  const dir = localeMeta[locale].dir;
  const isAr = locale === "ar";

  return (
    <div
      dir={dir}
      className={[
        bricolage.variable,
        notoKufiArabic.variable,
        plexArabic.variable,
        // --font-body follows the display face, like Genuka
        "[--font-body:var(--font-display)]",
        isAr ? "font-body-ar" : "font-body",
        "flex min-h-screen flex-col bg-canvas text-ink"
      ].join(" ")}
    >
      <LocaleAttributes locale={locale} dir={dir} />
      <Header locale={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dict={dict} />
      <WhatsAppButton dict={dict} locale={locale} />
    </div>
  );
}
