import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import ServiceBlock from "@/components/ServiceBlock";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ServicesPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const { services } = dict;
  const contactHref = `/${locale}/contact`;

  return (
    <>
      <section className="bg-navy-deep">
        <div className="container-x py-20 sm:py-24">
          <span className="eyebrow text-cyan">{services.eyebrow}</span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl text-mist-100 max-w-2xl leading-tight text-balance">
            {services.title}
          </h1>
          <p className="mt-5 text-mist-100/70 max-w-xl leading-relaxed">{services.intro}</p>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20 space-y-20 sm:space-y-24">
        <ServiceBlock service={services.software} locale={locale} ctaHref={contactHref} />
        <div className="h-px bg-navy/8" />
        <ServiceBlock service={services.ecommerce} locale={locale} reverse ctaHref={contactHref} />
        <div className="h-px bg-navy/8" />
        <ServiceBlock service={services.mobility} locale={locale} ctaHref={contactHref} />
      </section>
    </>
  );
}
