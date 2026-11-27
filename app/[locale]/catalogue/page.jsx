import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, catalogueJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import SectionHeader from "@/components/ui/SectionHeader";
import ShopGrid from "@/components/shop/ShopGrid";
import ListPanel from "@/components/shop/ListPanel";
import MobileListBar from "@/components/shop/MobileListBar";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  return pageMetadata(params.locale, "catalogue", "/catalogue");
}

export default function ShopPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const s = dict.shop;

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(locale, dict.nav.shop, "/catalogue"), catalogueJsonLd(locale)]} />
      <section className="hero-wash">
        <div className="container-x pb-8 pt-32 sm:pt-36">
          <SectionHeader as="h1" align="start" badge={s.hero.badge} title={s.hero.title} lead={s.hero.lead} />
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="min-w-0 flex-1">
            <ShopGrid copy={s} perfumeCopy={dict.catalogue.items} locale={locale} />
          </div>
          <div className="w-full lg:w-[380px] lg:shrink-0">
            <ListPanel copy={dict.list} shopCopy={s} locale={locale} sticky />
          </div>
        </div>
      </section>
      <MobileListBar copy={dict.list} />
    </>
  );
}
