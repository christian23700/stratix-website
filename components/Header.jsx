"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ButtonLink from "./ui/Button";

export default function Header({ locale, dict }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  const nav = [
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/mobility`, label: dict.nav.mobility },
    { href: `/${locale}/products`, label: dict.nav.products },
    { href: `/${locale}/about`, label: dict.nav.about }
  ];

  const isActive = (href) => pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <div className="mx-auto max-w-6xl rounded-2xl bg-surface/95 shadow-float ring-1 ring-line backdrop-blur">
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
          <Link href={`/${locale}`} className="focus-ring flex shrink-0 items-center">
            <Image src="/images/logo.png" alt="Stratix" width={1355} height={359} priority className="h-7 w-auto sm:h-8" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring text-[15px] transition-colors ${
                  isActive(item.href) ? "font-semibold text-accent" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher locale={locale} />
            <ButtonLink href={`/${locale}/contact?topic=support`} variant="secondary" size="sm">
              {dict.nav.support}
            </ButtonLink>
            <ButtonLink href={`/${locale}/contact`} size="sm">
              {dict.nav.cta}
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="focus-ring -me-2 p-2 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={dict.nav.menu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="border-t border-line px-4 pb-4 pt-2 lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring rounded-lg px-2 py-3 text-[15px] ${
                    isActive(item.href) ? "font-semibold text-accent" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
              <LanguageSwitcher locale={locale} />
              <div className="flex gap-2">
                <ButtonLink href={`/${locale}/contact?topic=support`} variant="secondary" size="sm">
                  {dict.nav.support}
                </ButtonLink>
                <ButtonLink href={`/${locale}/contact`} size="sm">
                  {dict.nav.cta}
                </ButtonLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
