import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { company } from "@/lib/company";

export default function Footer({ locale, dict }) {
  const year = new Date().getFullYear();
  const f = dict.footer;
  const l = (path) => `/${locale}${path}`;

  const columns = [
    {
      title: f.columns.services,
      links: [
        { href: l("/services#software"), label: f.links.software },
        { href: l("/services#ecommerce"), label: f.links.ecommerce },
        { href: l("/services#marketing"), label: f.links.marketing },
        { href: l("/services#training"), label: f.links.training }
      ]
    },
    {
      title: f.columns.mobility,
      links: [
        { href: l("/mobility#tourists"), label: f.links.tourists },
        { href: l("/mobility#businesses"), label: f.links.businesses },
        { href: l("/mobility#students"), label: f.links.students }
      ]
    },
    {
      title: f.columns.company,
      links: [
        { href: l("/products"), label: dict.nav.products },
        { href: l("/about"), label: dict.nav.about },
        { href: l("/contact"), label: dict.nav.contact },
        { href: l("/contact?topic=support"), label: dict.nav.support }
      ]
    }
  ];

  return (
    <footer className="bg-night text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href={l("")} className="focus-ring inline-block">
              <Image src="/images/logo-white.png" alt="Stratix" width={1355} height={359} className="h-8 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{f.tagline}</p>
            <p className="mt-4 text-sm text-white/60">
              {f.partner}{" "}
              <a href={company.partner.url} target="_blank" rel="noopener noreferrer" className="focus-ring font-semibold text-white hover:underline">
                {company.partner.name}
              </a>
              <br />
              {company.partner.city} ·{" "}
              <a href={company.partner.phoneUrl} className="focus-ring hover:text-white" dir="ltr">
                {company.partner.phone}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${company.partner.email}`} className="focus-ring hover:text-white">
                {company.partner.email}
              </a>
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>
                <a href={`mailto:${company.email}`} className="focus-ring hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={company.whatsappUrl} className="focus-ring hover:text-white" dir="ltr">
                  {company.phone}
                </a>
              </li>
              <li>{dict.contact.direct.location}</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="focus-ring text-sm text-white/75 hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. {f.rights}
          </p>
          <LanguageSwitcher locale={locale} tone="dark" />
        </div>
      </div>
    </footer>
  );
}
