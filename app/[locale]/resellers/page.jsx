import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { oilPriceList, products } from "@/lib/shop";
import { fill, whatsappLink } from "@/lib/whatsapp";
import JsonLd from "@/components/JsonLd";
import ButtonLink from "@/components/ui/Button";
import Highlight from "@/components/ui/Highlight";
import SectionHeader from "@/components/ui/SectionHeader";
import Steps from "@/components/ui/Steps";
import Icon from "@/components/ui/Icon";

const supplyIcon = { perfumes: "sparkles", abayas: "heart", oils: "truck" };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  return pageMetadata(params.locale, "resellers", "/resellers");
}

export default function ResellersPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const r = dict.resellers;
  const priceList = whatsappLink(dict.whatsapp.pages.resellers);
  const pieces = products.filter((p) => p.ref).length;
  const l = (path) => (path.startsWith("#") ? path : `/${locale}${path}`);

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(locale, dict.nav.resellers, "/resellers")]} />

      <section className="hero-wash">
        <div className="container-x grid items-center gap-10 pb-16 pt-32 sm:pt-36 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">{r.hero.badge}</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl md:text-6xl text-balance">
              <Highlight text={r.hero.title} />
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{r.hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={priceList} variant="whatsapp" size="lg">
                <Icon name="whatsapp" size={20} />
                {r.hero.primary}
              </ButtonLink>
              <ButtonLink href={`/${locale}/catalogue`} variant="secondary" size="lg">
                {r.hero.secondary}
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/shop/dubai/wholesale-cartons.jpg"
              alt={r.hero.imageAlt}
              width={669}
              height={1200}
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="h-[420px] w-full rounded-3xl object-cover sm:h-[520px]"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-surface p-5 shadow-hard-lg sm:inset-x-6 sm:bottom-6">
              <p className="font-display text-3xl font-semibold text-accent">{fill(dict.home.resellers.stat, { n: oilPriceList.references })}</p>
              <p className="mt-1 text-sm text-ink-soft">{dict.home.resellers.statText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-24">
        <SectionHeader badge={r.supply.badge} title={r.supply.title} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {r.supply.items.map((item) => (
            <Link
              key={item.id}
              href={l(item.href)}
              className="focus-ring group flex flex-col gap-3 rounded-2xl bg-surface p-7 shadow-hard ring-1 ring-line transition hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-tint text-gold-deep">
                <Icon name={supplyIcon[item.id]} size={22} />
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink">{item.title}</h3>
              <p className="flex-1 leading-relaxed text-ink-soft">{fill(item.text, { n: pieces })}</p>
              <Icon name="arrow" size={18} className="rtl-flip text-ink-muted transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      <section id="huiles" className="scroll-mt-28 bg-brand py-16 text-white sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{r.oils.badge}</span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl text-balance">
              {fill(r.oils.title, { n: oilPriceList.references })}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{r.oils.text}</p>
            <p className="mt-3 text-sm text-white/60">{r.oils.edition}</p>
            <ButtonLink href={priceList} variant="gold" size="lg" className="mt-8">
              {r.hero.primary}
            </ButtonLink>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {oilPriceList.groups.map((g) => (
              <li key={g.id} className="flex items-baseline justify-between gap-3 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10">
                <span className="font-semibold" dir="ltr">
                  {g.name}
                </span>
                <span className="text-sm text-white/70">
                  {g.count} {r.oils.references}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gold-tint/70 to-canvas py-16 sm:py-24">
        <div className="container-x">
          <Steps title={r.how.title} steps={r.how.steps} />
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-surface p-6 text-center ring-1 ring-line">
            <h3 className="font-display text-xl font-semibold text-ink">{r.conditions.title}</h3>
            <p className="mt-2 text-ink-soft">{r.conditions.text}</p>
          </div>
        </div>
      </section>

      <section className="container-x pb-20 sm:pb-24">
        <div className="flex flex-col gap-6 rounded-[28px] bg-ink p-8 text-canvas sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{r.cta.title}</h2>
            <p className="mt-3 text-lg text-canvas/75">{r.cta.text}</p>
          </div>
          <ButtonLink href={priceList} variant="gold" size="lg" className="shrink-0">
            {r.cta.button}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
