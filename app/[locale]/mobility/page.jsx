import Image from "next/image";
import { getDictionary } from "@/lib/get-dictionary";
import { audienceVisuals, visualSize } from "@/lib/visuals";
import { locales } from "@/lib/i18n-config";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, mobilityJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/ui/PageHero";
import ButtonLink from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Steps from "@/components/ui/Steps";

// Photos taken by Stratix in Dubai and Abu Dhabi.
const tripImage = {
  dubai: { src: "/shop/dubai/burj-khalifa.jpg", w: 720, h: 960 },
  abudhabi: { src: "/shop/dubai/abu-dhabi-aquarium.jpg", w: 801, h: 1068 },
  shopping: { src: "/shop/dubai/global-village.jpg", w: 900, h: 1200 }
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  return pageMetadata(params.locale, "mobility", "/mobility");
}

export default function MobilityPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const m = dict.mobility;
  const contact = `/${locale}/contact?topic=mobility`;

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(locale, dict.nav.mobility, "/mobility"), mobilityJsonLd(locale)]} />
      <PageHero badge={m.hero.badge} title={m.hero.title} lead={m.hero.lead}>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {m.audiences.map((a) => (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 font-medium text-ink rounded-2xl shadow-hard ring-1 ring-line"
            >
              <Icon name={a.icon} size={18} className="text-accent" />
              {a.title}
            </a>
          ))}
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-3 gap-3 sm:gap-5">
          {dict.home.travel.trips.map((t, i) => (
            <figure key={t.id} className={i === 1 ? "sm:translate-y-6" : ""}>
              <Image
                src={tripImage[t.id].src}
                alt={t.alt}
                width={tripImage[t.id].w}
                height={tripImage[t.id].h}
                priority={i === 0}
                sizes="(min-width: 1024px) 320px, 33vw"
                className="h-56 w-full rounded-3xl object-cover sm:h-96"
              />
              <figcaption className="mt-3 text-sm font-semibold text-ink">{t.title}</figcaption>
            </figure>
          ))}
        </div>
      </PageHero>

      <section className="container-x grid gap-6 py-16 sm:py-20 lg:grid-cols-3">
        {m.audiences.map((a) => (
          <article key={a.id} id={a.id} className="flex scroll-mt-28 flex-col overflow-hidden bg-surface p-7 rounded-2xl shadow-hard ring-1 ring-line sm:p-8">
            <Image
              src={audienceVisuals[a.id]}
              alt={a.title}
              width={visualSize[0]}
              height={visualSize[1]}
              sizes="(min-width: 1024px) 360px, 100vw"
              className="-mx-7 -mt-7 mb-6 w-[calc(100%+3.5rem)] max-w-none sm:-mx-8 sm:-mt-8 sm:w-[calc(100%+4rem)]"
            />
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white">
              <Icon name={a.icon} size={24} />
            </span>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink">{a.title}</h2>
            <p className="mt-1 text-ink-soft">{a.lead}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {a.bullets.map((b) => (
                <li key={b} className="flex gap-2.5 text-[15px] leading-relaxed text-ink">
                  <Icon name="check" size={18} strokeWidth={2.2} className="mt-0.5 shrink-0 text-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <ButtonLink href={contact} className="mt-8 w-full">
              {a.cta}
            </ButtonLink>
          </article>
        ))}
      </section>

      <section className="bg-gradient-to-b from-accent-tint/60 to-canvas py-20 sm:py-24">
        <div className="container-x">
          <Steps title={m.how.title} steps={m.how.steps} />
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-ink-muted">{m.disclaimer}</p>
        </div>
      </section>

      <section className="container-x pb-20 sm:pb-24">
        <div className="flex flex-col gap-6 rounded-[28px] bg-brand p-8 text-white shadow-hard-lg sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">{m.partners.title}</h2>
            <p className="mt-3 leading-relaxed text-white/75">{m.partners.text}</p>
          </div>
          <ButtonLink href={`/${locale}/contact?topic=other`} variant="gold" className="shrink-0">
            {m.partners.cta}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
