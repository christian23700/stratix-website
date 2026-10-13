import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import CircuitField from "@/components/CircuitField";
import PillarCard from "@/components/PillarCard";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const { hero, pillars, about, common } = dict;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <CircuitField className="absolute inset-0 h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/10 via-navy-deep/60 to-navy-deep" />

        <div className="container-x relative py-24 sm:py-28 md:py-36">
          <div className="max-w-3xl animate-fadeup">
            <span className="eyebrow inline-flex items-center gap-2 text-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              {hero.eyebrow}
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl text-mist-100 leading-[1.08] text-balance">
              {hero.title}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-mist-100/70 max-w-xl leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-3.5">
              <Link
                href={`/${locale}/contact`}
                className="focus-ring inline-flex items-center rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-navy-deep hover:bg-cyan-soft transition-colors"
              >
                {hero.ctaPrimary}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="focus-ring inline-flex items-center rounded-full border border-mist-100/25 px-7 py-3.5 text-sm font-semibold text-mist-100 hover:bg-white/5 transition-colors"
              >
                {hero.ctaSecondary}
              </Link>
            </div>
          </div>

          <dl className="mt-16 sm:mt-20 grid grid-cols-3 gap-6 max-w-xl border-t border-white/10 pt-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl sm:text-3xl text-cyan">{s.value}</dd>
                <dd className="mt-1 text-xs text-mist-100/55 leading-snug">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-x py-20 sm:py-24">
        <div className="max-w-2xl">
          <span className="eyebrow text-cyan-dim">{dict.services.eyebrow}</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-navy text-balance">{pillars.heading}</h2>
          <p className="mt-4 text-slate leading-relaxed">{pillars.intro}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.items.map((item, i) => (
            <PillarCard
              key={item.title}
              index={i + 1}
              tag={item.tag}
              title={item.title}
              description={item.description}
              href={`/${locale}${item.href}`}
              readMore={common.readMore}
            />
          ))}
        </div>
      </section>

      {/* Credibility strip */}
      <section className="bg-mist-200 border-y border-navy/5">
        <div className="container-x py-16 sm:py-20 grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-center">
          <div>
            <span className="eyebrow text-cyan-dim">{about.eyebrow}</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl text-navy leading-snug text-balance">
              {about.credibility.title}
            </h2>
            <Link
              href={`/${locale}/about`}
              className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-cyan-dim transition-colors"
            >
              {common.readMore}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="rtl-flip" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <ul className="grid sm:grid-cols-2 gap-4">
            {about.credibility.points.map((point) => (
              <li key={point} className="flex gap-3 rounded-2xl bg-white p-5 ring-1 ring-navy/5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" stroke="#0B93A3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-slate-dark leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
