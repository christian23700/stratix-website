import Link from "next/link";
import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import SolutionCard from "@/components/SolutionCard";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function SolutionsPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const { solutions, hero } = dict;

  return (
    <>
      <section className="bg-navy-deep">
        <div className="container-x py-20 sm:py-24">
          <span className="eyebrow text-cyan">{solutions.eyebrow}</span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl text-mist-100 max-w-2xl leading-tight text-balance">
            {solutions.title}
          </h1>
          <p className="mt-5 text-mist-100/70 max-w-xl leading-relaxed">{solutions.intro}</p>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {solutions.items.map((item) => (
            <SolutionCard key={item.code} item={item} />
          ))}
        </div>
      </section>

      <section className="bg-mist-200 border-t border-navy/5">
        <div className="container-x py-14 sm:py-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <p className="font-display text-xl sm:text-2xl text-navy max-w-md text-balance">
            {dict.hero.title}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="focus-ring shrink-0 inline-flex items-center rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-mist-100 hover:bg-navy-light transition-colors"
          >
            {hero.ctaPrimary}
          </Link>
        </div>
      </section>
    </>
  );
}
