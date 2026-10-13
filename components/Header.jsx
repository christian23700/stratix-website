"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale, dict }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const nav = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/solutions`, label: dict.nav.solutions },
    { href: `/${locale}/contact`, label: dict.nav.contact }
  ];

  const isActive = (href) => (href === `/${locale}` ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-navy-deep/95 backdrop-blur border-b border-white/10">
      <div className="container-x flex items-center justify-between h-16 md:h-[72px]">
        <Link href={`/${locale}`} className="focus-ring flex items-center shrink-0">
          <Image
            src="/images/logo-white.png"
            alt="Stratix Digital Solutions"
            width={1355}
            height={359}
            priority
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring text-sm font-medium transition-colors ${
                isActive(item.href) ? "text-cyan" : "text-mist-100/75 hover:text-mist-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <LanguageSwitcher locale={locale} variant="light" />
          <Link
            href={`/${locale}/contact`}
            className="focus-ring inline-flex items-center rounded-full bg-cyan px-4 py-2 text-xs font-semibold text-navy-deep hover:bg-cyan-soft transition-colors"
          >
            {dict.nav.bookCall}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring lg:hidden text-mist-100 p-2 -mr-2"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-white/10 bg-navy-deep">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`focus-ring rounded-md px-2 py-2.5 text-sm font-medium ${
                  isActive(item.href) ? "text-cyan bg-white/5" : "text-mist-100/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-3 mt-2 border-t border-white/10">
              <LanguageSwitcher locale={locale} variant="light" />
              <Link
                href={`/${locale}/contact`}
                onClick={() => setOpen(false)}
                className="focus-ring inline-flex items-center rounded-full bg-cyan px-4 py-2 text-xs font-semibold text-navy-deep"
              >
                {dict.nav.bookCall}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
