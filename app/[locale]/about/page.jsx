import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function AboutPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const { about, common } = dict;

  return (
    <>
      <section className="bg-navy-deep">
        <div className="container-x py-20 sm:py-24">
          <span className="eyebrow text-cyan">{about.eyebrow}</span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl text-mist-100 max-w-3xl leading-tight text-balance">
            {about.title}
          </h1>
          <p className="mt-6 text-mist-100/70 max-w-2xl leading-relaxed text-base sm:text-lg">{about.lead}</p>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20 grid md:grid-cols-[1.3fr_1fr] gap-12">
        <div className="space-y-5">
          {about.body.map((p, i) => (
            <p key={i} className="text-slate-dark leading-relaxed text-[15px] sm:text-base">
              {p}
            </p>
          ))}
        </div>

        <div className="space-y-4">
          {about.values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-mist-200 p-6 ring-1 ring-navy/5">
              <h3 className="font-display text-lg text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-slate leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-mist-100">
        <div className="container-x py-16 sm:py-20">
          <h2 className="font-display text-2xl sm:text-3xl text-balance max-w-xl">{about.credibility.title}</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4">
            {about.credibility.points.map((point) => (
              <li key={point} className="flex gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" stroke="#5FE8F2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-mist-100/80 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          <Link
            href={`/${locale}/contact`}
            className="focus-ring mt-10 inline-flex items-center rounded-full bg-cyan px-7 py-3.5 text-sm font-semibold text-navy-deep hover:bg-cyan-soft transition-colors"
          >
            {dict.hero.ctaSecondary}
          </Link>
        </div>
      </section>
    </>
  );
}
