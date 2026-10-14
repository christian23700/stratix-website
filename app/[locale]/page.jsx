import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import { pageMetadata } from "@/lib/seo";
import { faqJsonLd, heroVideoJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import { company } from "@/lib/company";
import ButtonLink from "@/components/ui/Button";
import Highlight, { plain } from "@/components/ui/Highlight";
import { serviceVisuals, visualSize } from "@/lib/visuals";
import SectionHeader from "@/components/ui/SectionHeader";
import Steps from "@/components/ui/Steps";
import Faq from "@/components/ui/Faq";
import CtaBanner from "@/components/ui/CtaBanner";
import Icon from "@/components/ui/Icon";
import ProductCard from "@/components/ProductCard";
import ServiceOrbit from "@/components/ServiceOrbit";
import ServiceRails from "@/components/ServiceRails";
import HeroVideo from "@/components/HeroVideo";

// Visual shown for each showcase item, in order.
const showcaseVisual = ["ecommerce", "software", "mobility"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  return pageMetadata(params.locale, "home");
}

export default function HomePage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const { hero, suite, showcase, products, mobility, steps, faq, cta } = dict.home;
  const l = (path) => `/${locale}${path}`;

  return (
    <>
      <JsonLd data={[faqJsonLd(locale), heroVideoJsonLd(locale)]} />
      {/* Hero */}
      <section className="hero-wash">
        <div className="container-x pb-8 pt-36 text-center sm:pb-20 sm:pt-44">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm font-medium text-ink-soft ring-1 ring-line">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {hero.badge}
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl animate-fadeup font-display text-[2.6rem] font-bold leading-[1.05] text-ink sm:text-6xl md:text-7xl text-balance">
            <Highlight text={hero.title} />
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{hero.lead}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <ButtonLink href={l("/contact")} size="lg">
              {hero.primary}
            </ButtonLink>
            <ButtonLink href={l("/services")} variant="secondary" size="lg">
              {hero.secondary}
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-ink-muted">{hero.note}</p>

          {/* Explainer video of every service, where Genuka shows its product */}
          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="absolute -inset-3 -z-0 rounded-[28px] bg-gradient-to-br from-accent-tint via-surface to-gold-tint sm:-inset-5" aria-hidden="true" />
            <div className="relative overflow-hidden bg-surface shadow-hard-lg ring-1 ring-line">
              <HeroVideo locale={locale} labels={{ video: hero.video, play: hero.play, pause: hero.pause }} />
            </div>
          </div>
        </div>
      </section>

      {/* Service suite orbit */}
      <section className="bg-gradient-to-b from-canvas to-accent-tint/60 py-14 sm:py-28">
        <div className="container-x">
          <SectionHeader badge={suite.badge} title={suite.title} lead={suite.lead} />
          <ServiceOrbit items={suite.items} locale={locale} />
          <ServiceRails suite={suite} locale={locale} learnMore={dict.common.learnMore} />
        </div>
      </section>

      {/* Showcase */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl text-balance">
              <Highlight text={showcase.title} />
            </h2>
            <ul className="mt-10 space-y-4">
              {showcase.items.map((item) => (
                <li key={item.title}>
                  <Link
                    href={l(item.href)}
                    className="focus-ring group flex gap-4 border-s-2 border-line p-4 transition-colors hover:border-accent hover:bg-accent-tint/50"
                  >
                    <span className="mt-0.5 text-accent">
                      <Icon name={item.icon} size={22} />
                    </span>
                    <span>
                      <span className="block font-display text-lg font-semibold text-ink">
                        <Highlight text={item.title} />
                      </span>
                      <span className="mt-1 block text-[15px] leading-relaxed text-ink-soft">{item.text}</span>
                    </span>
                    <Icon name="arrow" size={18} className="rtl-flip ms-auto mt-1 shrink-0 text-ink-muted transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-0 rounded-3xl bg-gold-tint" aria-hidden="true" />
            <div className="relative grid grid-cols-2 gap-4">
              {showcase.items.map((item, i) => (
                <Image
                  key={item.href}
                  src={serviceVisuals[showcaseVisual[i]]}
                  alt={plain(item.title)}
                  width={visualSize[0]}
                  height={visualSize[1]}
                  sizes={i ? "(min-width: 1024px) 270px, 45vw" : "(min-width: 1024px) 560px, 100vw"}
                  className={`w-full ring-1 ring-line ${i ? "shadow-hard" : "col-span-2 shadow-hard-lg"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeader badge={products.badge} title={products.title} lead={products.lead} />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <ProductCard id="mboameet" dict={dict} locale={locale} compact />
            <ProductCard id="efarmer" dict={dict} locale={locale} compact />
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href={l("/products")} variant="secondary">
              {products.cta}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* UAE mobility */}
      <section className="bg-brand py-20 text-white sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">[ {mobility.badge} ]</span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-balance">
              <Highlight text={mobility.title} className="text-gold" />
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">{mobility.lead}</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {dict.mobility.audiences.map((a) => (
              <Link
                key={a.id}
                href={l(`/mobility#${a.id}`)}
                className="focus-ring group bg-white/5 p-7 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <span className="flex h-11 w-11 items-center justify-center bg-gold text-night">
                  <Icon name={a.icon} size={22} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{a.title}</h3>
                <p className="mt-2 text-white/70">{a.lead}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                  {dict.common.learnMore}
                  <Icon name="arrow" size={16} className="rtl-flip transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href={l("/mobility")} variant="gold">
              {mobility.cta}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-gradient-to-b from-gold-tint/70 to-canvas py-20 sm:py-28">
        <div className="container-x">
          <Steps title={steps.title} steps={steps.steps} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeader badge={faq.badge} title={faq.title} lead={faq.lead} />
          <Faq groups={dict.faq} />
        </div>
      </section>

      <CtaBanner
        title={cta.title}
        text={cta.text}
        primary={{ href: l("/contact"), label: cta.primary }}
        secondary={{ href: company.whatsappUrl, label: cta.secondary }}
      />
    </>
  );
}
