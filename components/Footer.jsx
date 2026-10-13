import Image from "next/image";
import Link from "next/link";

export default function Footer({ locale, dict }) {
  const year = new Date().getFullYear();

  const serviceLinks = [
    { href: `/${locale}/services#software`, label: dict.services.software.title },
    { href: `/${locale}/services#ecommerce`, label: dict.services.ecommerce.title },
    { href: `/${locale}/services#mobility`, label: dict.services.mobility.title }
  ];

  const companyLinks = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/solutions`, label: dict.nav.solutions },
    { href: `/${locale}/contact`, label: dict.nav.contact }
  ];

  return (
    <footer className="bg-navy-deep text-mist-100 border-t border-white/10">
      <div className="container-x py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 md:gap-8">
          <div>
            <Link href={`/${locale}`} className="focus-ring inline-block">
              <Image
                src="/images/logo-white.png"
                alt="Stratix Digital Solutions"
                width={1355}
                height={359}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-mist-100/60 max-w-xs leading-relaxed">{dict.footer.tagline}</p>
          </div>

          <div>
            <h3 className="eyebrow text-cyan/80 mb-4">{dict.footer.columns.company}</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="focus-ring text-sm text-mist-100/70 hover:text-mist-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-cyan/80 mb-4">{dict.footer.columns.services}</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="focus-ring text-sm text-mist-100/70 hover:text-mist-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-cyan/80 mb-4">{dict.footer.columns.contact}</h3>
            <ul className="space-y-2.5 text-sm text-mist-100/70">
              <li>{dict.contact.direct.location}</li>
              <li>
                <a href={`mailto:${dict.contact.direct.email}`} className="focus-ring hover:text-mist-100 break-all">
                  {dict.contact.direct.email}
                </a>
              </li>
              <li>
                <a href="https://wa.me/971553910708" className="focus-ring hover:text-mist-100" dir="ltr">
                  {dict.contact.direct.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-mist-100/50">
          <p>© {year} Stratix Digital Solutions FZ-LLC. {dict.footer.rights}</p>
          <p>{dict.footer.compliance}</p>
        </div>
      </div>
    </footer>
  );
}
