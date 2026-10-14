import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import { company } from "@/lib/company";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Icon from "@/components/ui/Icon";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  const dict = getDictionary(params.locale);
  return { title: dict.nav.about, description: dict.about.hero.lead };
}

function ContactLines({ contact }) {
  const phoneHref = contact.phoneUrl || contact.whatsappUrl;
  return (
    <ul className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm">
      <li className="flex items-center gap-2 text-ink-soft">
        <Icon name="phone" size={16} className="text-ink-muted" />
        <a href={phoneHref} className="focus-ring hover:text-accent" dir="ltr">
          {contact.phone}
        </a>
      </li>
      <li className="flex items-center gap-2 text-ink-soft">
        <Icon name="mail" size={16} className="text-ink-muted" />
        <a href={`mailto:${contact.email}`} className="focus-ring hover:text-accent">
          {contact.email}
        </a>
      </li>
    </ul>
  );
}

export default function AboutPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const a = dict.about;

  return (
    <>
      <PageHero badge={a.hero.badge} title={a.hero.title} lead={a.hero.lead} />

      <section className="container-x grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5">
          {a.story.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </div>
        <div className="space-y-5">
          {a.partners.map((p, i) => (
            <div key={p.name} className="bg-surface p-7 shadow-hard ring-1 ring-line">
              <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${i ? "text-gold" : "text-accent"}`}>
                {p.place}
              </span>
              <h2 className="mt-2 font-display text-xl font-bold text-ink">{p.name}</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.role}</p>
              <ContactLines contact={i ? company.partner : company} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-x">
          <SectionHeader title={a.values.title} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.items.map((v) => (
              <div key={v.title} className="bg-canvas p-6 ring-1 ring-line">
                <span className="text-accent">
                  <Icon name={v.icon} size={26} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={dict.home.cta.title}
        text={dict.home.cta.text}
        primary={{ href: `/${locale}/contact`, label: dict.home.cta.primary }}
        secondary={{ href: company.whatsappUrl, label: dict.home.cta.secondary }}
      />
    </>
  );
}
