import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import { pageMetadata } from "@/lib/seo";
import ListPanel from "@/components/shop/ListPanel";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  // The list lives in the visitor's browser: nothing for search engines here.
  return { ...pageMetadata(params.locale, "list", "/list"), robots: { index: false, follow: true } };
}

export default function ListPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);

  return (
    <section className="hero-wash">
      <div className="container-x max-w-2xl pb-20 pt-32 sm:pt-36">
        <ListPanel copy={dict.list} shopCopy={dict.shop} locale={locale} />
      </div>
    </section>
  );
}
