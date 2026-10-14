import Image from "next/image";
import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import { plain } from "@/components/ui/Highlight";
import PageHero from "@/components/ui/PageHero";
import ButtonLink from "@/components/ui/Button";
import Highlight from "@/components/ui/Highlight";
import Icon from "@/components/ui/Icon";
import CtaBanner from "@/components/ui/CtaBanner";
import { company } from "@/lib/company";
import { serviceVisuals, visualSize } from "@/lib/visuals";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  const dict = getDictionary(params.locale);
  return { title: dict.nav.services, description: dict.services.hero.lead };
}

export default function ServicesPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const { hero, items } = dict.services;
  const l = (path) => `/${locale}${path}`;

  return (
    <>
      <PageHero badge={hero.badge} title={hero.title} lead={hero.lead}>
        <nav className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2" aria-label={hero.badge}>
          {items.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="focus-ring inline-flex items-center gap-2 bg-surface px-4 py-2 text-sm font-medium text-ink ring-1 ring-line hover:ring-accent"
            >
              <Icon name={s.icon} size={16} className="text-accent" />
              {plain(s.title)}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="py-8 sm:py-12">
        {items.map((s, i) => (
          <section key={s.id} id={s.id} className={`scroll-mt-28 py-14 sm:py-20 ${i % 2 ? "bg-surface" : ""}`}>
            <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  <Icon name={s.icon} size={18} />
                  {s.tag}
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl text-balance">
                  <Highlight text={s.title} />
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-soft">{s.text}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <Icon name="check" size={18} strokeWidth={2.2} className="mt-1 shrink-0 text-accent" />
                      <span className="text-[15px] leading-relaxed text-ink">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink href={s.href ? l(s.href) : l(`/contact?topic=${s.topic}`)}>
                    {s.cta}
                    <Icon name="arrow" size={18} className="rtl-flip" />
                  </ButtonLink>
                </div>
              </div>

              <Image
                src={serviceVisuals[s.id]}
                alt={plain(s.title)}
                width={visualSize[0]}
                height={visualSize[1]}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="w-full shadow-hard-lg ring-1 ring-line"
              />
            </div>
          </section>
        ))}
      </div>

      <CtaBanner
        title={dict.home.cta.title}
        text={dict.home.cta.text}
        primary={{ href: l("/contact"), label: dict.home.cta.primary }}
        secondary={{ href: company.whatsappUrl, label: dict.home.cta.secondary }}
      />
    </>
  );
}
