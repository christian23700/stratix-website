import { Space_Grotesk, Inter, Noto_Kufi_Arabic, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, localeMeta } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import LocaleAttributes from "@/components/LocaleAttributes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
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
    title: dict.meta.title,
    description: dict.meta.description
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
        spaceGrotesk.variable,
        inter.variable,
        notoKufiArabic.variable,
        plexArabic.variable,
        isAr ? "font-body-ar" : "font-body",
        "min-h-screen flex flex-col bg-mist"
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
