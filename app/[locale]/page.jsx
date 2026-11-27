import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import { pageMetadata } from "@/lib/seo";
import { faqJsonLd } from "@/lib/structured-data";
import { oilPriceList, productById, products } from "@/lib/shop";
import { fill, whatsappLink } from "@/lib/whatsapp";
import JsonLd from "@/components/JsonLd";
import ButtonLink from "@/components/ui/Button";
import Highlight from "@/components/ui/Highlight";
import SectionHeader from "@/components/ui/SectionHeader";
import Faq from "@/components/ui/Faq";
import Icon from "@/components/ui/Icon";
import ProductTile from "@/components/shop/ProductTile";

// Photos of the home page (all taken by Stratix in Dubai, or from the abaya catalogue).
const universeImage = {
  perfumes: { src: "/shop/perfumes/now-rouge.jpg", w: 675, h: 900, href: "/catalogue?category=perfume" },
  abayas: { src: "/shop/abayas/a-01.jpg", w: 792, h: 1400, href: "/catalogue?category=abaya" },
  wholesale: { src: "/shop/dubai/wholesale-cartons.jpg", w: 669, h: 1200, href: "/resellers" },
  travel: { src: "/shop/dubai/abu-dhabi-aquarium.jpg", w: 801, h: 1068, href: "/mobility" }
};
const tripImage = {
  dubai: { src: "/shop/dubai/burj-khalifa.jpg", w: 720, h: 960 },
  abudhabi: { src: "/shop/dubai/abu-dhabi-aquarium.jpg", w: 801, h: 1068 },
  shopping: { src: "/shop/dubai/global-village.jpg", w: 900, h: 1200 }
};
const featuredPerfumes = ["veneno", "golden-palace", "angham", "pure-love", "vulcan-sable", "now-rouge"];
const featuredAbayas = ["a-02", "a-04", "v-01", "a-08"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  return pageMetadata(params.locale, "home");
}

export default function HomePage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const h = dict.home;
  const l = (path) => `/${locale}${path}`;
  const abayaCount = products.filter((p) => p.category === "abaya").length;
  const describe = (p) => (p.copyKey ? dict.catalogue.items[p.copyKey]?.tagline : locale === "fr" ? p.description : "");

  return (
    <>
      <JsonLd data={[faqJsonLd(locale)]} />

      {/* Hero */}
      <section className="hero-wash">
        <div className="container-x grid items-center gap-12 pb-16 pt-32 sm:pt-40 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">{h.hero.eyebrow}</span>
            <h1 className="mt-4 animate-fadeup font-display text-[2.6rem] font-semibold leading-[1.05] text-ink sm:text-6xl md:text-[4rem] text-balance">
              <Highlight text={h.hero.title} />
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{h.hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={l("/catalogue")} size="lg">
                {h.hero.primary}
              </ButtonLink>
              <ButtonLink href={l("/resellers")} variant="secondary" size="lg">
                {h.hero.secondary}
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-sm text-ink-soft">
              {h.hero.trust.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check" size={18} strokeWidth={2.2} className="text-gold-deep" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/shop/abayas/a-03.jpg"
              alt={h.hero.imageAlt}
              width={1049}
              height={1400}
              priority
              sizes="(min-width: 1024px) 270px, 50vw"
              className="row-span-2 h-[420px] w-full rounded-3xl object-cover object-top sm:h-[560px]"
            />
            <Image
              src="/shop/perfumes/golden-palace.jpg"
              alt="Golden Palace"
              width={675}
              height={900}
              priority
              sizes="(min-width: 1024px) 270px, 50vw"
              className="h-[202px] w-full rounded-3xl object-cover sm:h-[272px]"
            />
            <Image
              src="/shop/dubai/burj-khalifa.jpg"
              alt={h.travel.trips[0].alt}
              width={720}
              height={960}
              sizes="(min-width: 1024px) 270px, 50vw"
              className="h-[202px] w-full rounded-3xl object-cover sm:h-[272px]"
            />
          </div>
        </div>
      </section>

      {/* Universes */}
      <section className="container-x pb-16 sm:pb-24">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {h.universes.map((u) => {
            const img = universeImage[u.id];
            return (
              <Link key={u.id} href={l(img.href)} className="focus-ring group relative block h-64 overflow-hidden rounded-3xl sm:h-80">
                <Image src={img.src} alt="" width={img.w} height={img.h} sizes="(min-width: 1024px) 280px, 50vw" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1428]/85 to-transparent p-4 pt-16 text-white sm:p-5">
                  <h2 className="font-display text-xl font-semibold sm:text-2xl">{u.title}</h2>
                  <p className="mt-1 text-xs text-white/85 sm:text-sm">{u.text}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Perfumes */}
      <section className="border-y border-line bg-surface py-16 sm:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader align="start" badge={h.perfumes.badge} title={h.perfumes.title} />
            <Link href={l("/catalogue?category=perfume")} className="focus-ring inline-flex items-center gap-1.5 font-semibold text-accent">
              {h.perfumes.cta}
              <Icon name="arrow" size={18} className="rtl-flip" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
            {featuredPerfumes.map((id) => {
              const p = productById[id];
              return <ProductTile key={id} product={p} copy={dict.shop} categoryLabel={dict.shop.categories[p.category]} description={describe(p)} />;
            })}
          </div>
        </div>
      </section>

      {/* Abayas */}
      <section className="bg-brand py-16 text-white sm:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{h.abayas.badge}</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl text-balance">{h.abayas.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">{h.abayas.text}</p>
            <ButtonLink href={l("/catalogue?category=abaya")} variant="gold" size="lg" className="mt-8">
              {fill(h.abayas.cta, { n: abayaCount })}
            </ButtonLink>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {featuredAbayas.map((id) => {
              const p = productById[id];
              return (
                <Link key={id} href={l(`/catalogue?category=${p.category}`)} className="focus-ring group">
                  <Image src={p.image} alt={[p.ref, locale === "fr" ? p.description : ""].filter(Boolean).join(" · ")} width={p.width} height={p.height} sizes="(min-width: 1024px) 180px, 50vw" className="h-64 w-full rounded-2xl object-cover object-top sm:h-80" />
                  <p className="mt-2 text-sm text-white/80">
                    <span className="font-semibold text-white">{p.ref}</span>
                    {locale === "fr" && ` · ${p.description}`}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resellers */}
      <section className="container-x grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
        <div className="relative">
          <Image src="/shop/dubai/wholesale-cartons.jpg" alt={dict.resellers.hero.imageAlt} width={669} height={1200} sizes="(min-width: 1024px) 560px, 100vw" className="h-[420px] w-full rounded-3xl object-cover sm:h-[520px]" />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-surface p-5 shadow-hard-lg sm:inset-x-6 sm:bottom-6">
            <p className="font-display text-3xl font-semibold text-accent">{fill(h.resellers.stat, { n: oilPriceList.references })}</p>
            <p className="mt-1 text-sm text-ink-soft">{h.resellers.statText}</p>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">{h.resellers.badge}</span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl text-balance">{h.resellers.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{h.resellers.text}</p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {h.resellers.steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl bg-surface p-5 ring-1 ring-line">
                <span className="font-display text-2xl font-semibold text-gold-deep" aria-hidden="true">
                  {i + 1}
                </span>
                <p className="mt-1 font-semibold text-ink">{step.title}</p>
                <p className="mt-1 text-sm text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={whatsappLink(dict.whatsapp.pages.resellers)} variant="whatsapp" size="lg">
              <Icon name="whatsapp" size={20} />
              {h.resellers.cta}
            </ButtonLink>
            <Link href={l("/resellers")} className="focus-ring font-semibold text-accent underline underline-offset-4">
              {h.resellers.more}
            </Link>
          </div>
        </div>
      </section>

      {/* Travel */}
      <section className="border-t border-line bg-surface py-16 sm:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader align="start" badge={h.travel.badge} title={h.travel.title} lead={h.travel.text} />
            <Link href={l("/mobility")} className="focus-ring inline-flex items-center gap-1.5 font-semibold text-accent">
              {h.travel.cta}
              <Icon name="arrow" size={18} className="rtl-flip" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {h.travel.trips.map((t) => {
              const img = tripImage[t.id];
              return (
                <article key={t.id}>
                  <Image src={img.src} alt={t.alt} width={img.w} height={img.h} sizes="(min-width: 768px) 380px, 100vw" className="h-72 w-full rounded-3xl object-cover" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">{t.title}</h3>
                  <p className="mt-1 text-ink-soft">{t.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital services (secondary) */}
      <section className="container-x py-14">
        <div className="flex flex-col gap-6 rounded-3xl bg-surface/70 p-7 ring-1 ring-line sm:p-9 lg:flex-row lg:items-center lg:gap-12">
          <div className="lg:w-1/3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">{h.digital.badge}</span>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">{h.digital.title}</h2>
          </div>
          <div className="grid flex-1 gap-5 sm:grid-cols-3">
            {h.digital.items.map((item) => (
              <Link key={item.href} href={l(item.href)} className="focus-ring group rounded-2xl p-2">
                <p className="font-semibold text-ink group-hover:underline">{item.title}</p>
                <p className="text-sm text-ink-muted">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="container-x">
          <SectionHeader badge={h.faq.badge} title={h.faq.title} lead={h.faq.lead} />
          <Faq groups={dict.faq} />
        </div>
      </section>

      {/* Closing call to action */}
      <section className="container-x pb-20 sm:pb-24">
        <div className="flex flex-col gap-6 rounded-[28px] bg-ink p-8 text-canvas sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{h.cta.title}</h2>
            <p className="mt-3 text-lg text-canvas/75">{h.cta.text}</p>
          </div>
          <ButtonLink href={whatsappLink(dict.whatsapp.message)} variant="gold" size="lg" className="shrink-0">
            <Icon name="whatsapp" size={20} />
            {h.cta.button}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
