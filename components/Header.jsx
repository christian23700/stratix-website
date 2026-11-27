"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import ButtonLink from "./ui/Button";
import Icon from "./ui/Icon";
import { useList } from "./shop/ListProvider";
import { whatsappLink } from "@/lib/whatsapp";

export default function Header({ locale, dict }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const list = useList();

  useEffect(() => setOpen(false), [pathname]);

  const nav = [
    { href: `/${locale}/catalogue`, label: dict.nav.shop },
    { href: `/${locale}/resellers`, label: dict.nav.resellers },
    { href: `/${locale}/mobility`, label: dict.nav.mobility },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/about`, label: dict.nav.about }
  ];

  const isActive = (href) => pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4">
      <div className="mx-auto max-w-6xl rounded-2xl bg-surface/95 shadow-float ring-1 ring-line backdrop-blur">
        <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
          <Link href={`/${locale}`} className="focus-ring flex shrink-0 items-center">
            <Image src="/images/logo.png" alt="Stratix" width={1355} height={359} priority className="h-7 w-auto sm:h-8 dark:hidden" />
            <Image src="/images/logo-white.png" alt="Stratix" width={1355} height={359} priority className="hidden h-7 w-auto sm:h-8 dark:block" />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring whitespace-nowrap text-[15px] transition-colors ${
                  isActive(item.href) ? "font-semibold text-ink underline decoration-gold decoration-2 underline-offset-8" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher locale={locale} />
            <ThemeToggle labels={dict.nav.theme} />
            <Link
              href={`/${locale}/list`}
              className="focus-ring relative inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-full px-3 text-sm font-semibold text-ink ring-1 ring-ink/20 hover:ring-ink/50"
            >
              <Icon name="list" size={18} />
              <span className="hidden xl:inline">{dict.nav.list}</span>
              <span className="min-w-[1.25rem] rounded-full bg-gold px-1.5 text-center text-xs text-[#16233B]" aria-label={`${dict.nav.list}: ${list.count}`}>
                {list.count}
              </span>
            </Link>
            <ButtonLink href={whatsappLink(dict.whatsapp.message)} size="sm">
              {dict.nav.cta}
            </ButtonLink>
          </div>

          <div className="-me-2 flex items-center gap-1 lg:hidden">
            <Link
              href={`/${locale}/list`}
              className="focus-ring relative inline-flex h-11 items-center gap-1.5 rounded-full px-2.5 text-ink"
              aria-label={`${dict.nav.list}: ${list.count}`}
            >
              <Icon name="list" size={20} />
              <span className="min-w-[1.25rem] rounded-full bg-gold px-1.5 text-center text-xs font-semibold text-[#16233B]">{list.count}</span>
            </Link>
            <ThemeToggle labels={dict.nav.theme} />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="focus-ring p-2 text-ink"
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
        </div>

        {open && (
          <div id="mobile-nav" className="border-t border-line px-4 pb-4 pt-2 lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-ring rounded-lg px-2 py-3 text-[15px] ${
                    isActive(item.href) ? "font-semibold text-gold-deep" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
              <LanguageSwitcher locale={locale} />
              <div className="flex gap-2">
                <ButtonLink href={`/${locale}/contact`} variant="secondary" size="sm">
                  {dict.nav.contact}
                </ButtonLink>
                <ButtonLink href={whatsappLink(dict.whatsapp.message)} size="sm">
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
