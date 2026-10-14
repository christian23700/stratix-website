import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import { company } from "@/lib/company";
import { perfumes } from "@/lib/catalogue";
import PageHero from "@/components/ui/PageHero";
import ButtonLink, { buttonClass } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import BookingForm from "@/components/BookingForm";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  const dict = getDictionary(params.locale);
  return { title: dict.nav.catalogue, description: dict.catalogue.hero.lead };
}

export default function CataloguePage({ params, searchParams }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const c = dict.catalogue;

  return (
    <>
      <PageHero badge={c.hero.badge} title={c.hero.title} lead={c.hero.lead} />

      <section className="container-x pb-16 sm:pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {perfumes.map((p) => {
            const copy = c.items[p.slug];
            return (
              <article key={p.slug} className="flex flex-col bg-surface shadow-hard ring-1 ring-line">
                <video
                  className="aspect-[9/16] w-full bg-night object-cover"
                  src={p.video}
                  poster={p.poster}
                  controls
                  playsInline
                  preload="none"
                  aria-label={`${p.name} · ${p.brand}`}
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-2xl font-bold text-ink">{p.name}</h2>
                      <p className="text-sm text-ink-muted" dir="ltr">
                        {p.brand} · {p.size}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-gold px-3 py-1 text-xs font-semibold text-gold">{c.priceOnRequest}</span>
                  </div>
                  <p className="mt-3 font-medium text-ink">{copy.tagline}</p>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{copy.description}</p>
                  <Link href={`/${locale}/catalogue?perfume=${p.slug}#booking`} className={`${buttonClass("primary", "md")} mt-6`}>
                    <Icon name="cart" size={18} />
                    {c.book}
                  </Link>
                </div>
              </article>
            );
          })}

          <article className="flex flex-col justify-center bg-gold-tint p-8 ring-1 ring-line">
            <Icon name="sparkles" size={32} className="text-gold" />
            <h2 className="mt-4 font-display text-2xl font-bold text-ink">{c.more.title}</h2>
            <p className="mt-2 leading-relaxed text-ink-soft">{c.more.text}</p>
            <ButtonLink href={company.whatsappChannel} variant="secondary" className="mt-6 self-start">
              {c.more.cta}
            </ButtonLink>
          </article>
        </div>
      </section>

      <section id="booking" className="scroll-mt-28 bg-surface py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <BookingForm dict={dict} locale={locale} defaultPerfume={searchParams?.perfume} />
        </div>
      </section>
    </>
  );
}
