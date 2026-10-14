import { getDictionary } from "@/lib/get-dictionary";
import { locales } from "@/lib/i18n-config";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import JsonLd from "@/components/JsonLd";
import { company, products } from "@/lib/company";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/ui/Icon";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  return pageMetadata(params.locale, "contact", "/contact");
}

export default function ContactPage({ params, searchParams }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  const c = dict.contact;

  const direct = [
    { icon: "phone", label: c.direct.whatsapp, value: company.phone, href: company.whatsappUrl, ltr: true },
    { icon: "mail", label: c.direct.email, value: company.email, href: `mailto:${company.email}` },
    { icon: "cart", label: c.direct.channel, value: "WhatsApp Channel", href: company.whatsappChannel },
    { icon: "pin", label: c.direct.location, value: c.direct.hours }
  ];

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(locale, dict.nav.contact, "/contact")]} />
      <PageHero badge={c.hero.badge} title={c.hero.title} lead={c.hero.lead} />

      <section className="container-x grid items-start gap-10 pb-20 sm:pb-24 lg:grid-cols-[1.5fr_1fr]">
        <ContactForm dict={dict} locale={locale} defaultTopic={searchParams?.topic} />

        <aside className="space-y-6">
          <div className="bg-surface p-7 ring-1 ring-line">
            <h2 className="font-display text-lg font-bold text-ink">{c.direct.title}</h2>
            <ul className="mt-5 space-y-4">
              {direct.map((d) => (
                <li key={d.label} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-accent-tint text-accent">
                    <Icon name={d.icon} size={18} />
                  </span>
                  <div className="min-w-0 text-sm">
                    <p className="text-ink-muted">{d.label}</p>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="focus-ring break-words font-semibold text-ink hover:text-accent"
                        dir={d.ltr ? "ltr" : undefined}
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-ink">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface p-7 ring-1 ring-line">
            <p className="text-sm text-ink-muted">{dict.footer.partner}</p>
            <h2 className="font-display text-lg font-bold text-ink">{company.partner.name}</h2>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li className="flex items-center gap-2 text-ink-soft">
                <Icon name="pin" size={16} className="text-ink-muted" />
                {company.partner.city}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="phone" size={16} className="text-ink-muted" />
                <a href={company.partner.phoneUrl} className="focus-ring font-semibold text-ink hover:text-accent" dir="ltr">
                  {company.partner.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mail" size={16} className="text-ink-muted" />
                <a href={`mailto:${company.partner.email}`} className="focus-ring font-semibold text-ink hover:text-accent">
                  {company.partner.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-surface p-7 ring-1 ring-line">
            <h2 className="font-display text-lg font-bold text-ink">{c.productSupport.title}</h2>
            <p className="mt-2 text-sm text-ink-soft">{c.productSupport.text}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {Object.values(products).map((p) => (
                <li key={p.name} className="flex justify-between gap-3">
                  <span className="text-ink-muted">{p.name}</span>
                  <a href={`mailto:${p.support}`} className="focus-ring font-semibold text-ink hover:text-accent">
                    {p.support}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
