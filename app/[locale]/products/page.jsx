import Image from "next/image";
import { getDictionary } from "@/lib/get-dictionary";
import { solutionVisuals, visualSize } from "@/lib/visuals";
import { locales } from "@/lib/i18n-config";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, partnerProductsJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ButtonLink from "@/components/ui/Button";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  return pageMetadata(params.locale, "products", "/products");
}

export default function ProductsPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const { hero, platforms } = dict.products;

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(locale, dict.nav.products, "/products"), partnerProductsJsonLd(locale)]} />
      <PageHero badge={hero.badge} title={hero.title} lead={hero.lead} />

      <section className="container-x space-y-24 py-16 sm:py-24">
        <ProductCard id="mboameet" dict={dict} locale={locale} />
        <ProductCard id="efarmer" dict={dict} locale={locale} />
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-x">
          <SectionHeader title={platforms.title} lead={platforms.lead} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.items.map((item) => (
              <div key={item.code} className="bg-canvas p-6 ring-1 ring-line">
                <Image
                  src={solutionVisuals[item.code]}
                  alt={item.title}
                  width={visualSize[0]}
                  height={visualSize[1]}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                  className="-mx-6 -mt-6 mb-5 w-[calc(100%+3rem)] max-w-none"
                />
                <span className="inline-block bg-brand px-2.5 py-1 font-display text-xs font-bold tracking-wider text-white">
                  {item.code}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href={`/${locale}/contact?topic=software`}>{platforms.cta}</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
