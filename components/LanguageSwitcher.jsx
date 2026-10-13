"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeMeta } from "@/lib/i18n-config";

function swapLocale(pathname, next) {
  const parts = pathname.split("/").filter(Boolean);
  parts[0] = next;
  return "/" + parts.join("/");
}

export default function LanguageSwitcher({ locale, variant = "light" }) {
  const pathname = usePathname();

  const base =
    variant === "light"
      ? "text-mist-100/80 hover:text-cyan"
      : "text-navy/70 hover:text-navy";

  return (
    <div className="flex items-center gap-1 text-xs font-semibold" role="group" aria-label="Language selector">
      {locales.map((code, i) => (
        <span key={code} className="flex items-center">
          <Link
            href={swapLocale(pathname, code)}
            className={`focus-ring px-1.5 py-1 rounded transition-colors ${
              code === locale ? "text-cyan" : base
            }`}
            aria-current={code === locale ? "true" : undefined}
          >
            {localeMeta[code].short}
          </Link>
          {i < locales.length - 1 && (
            <span className={variant === "light" ? "text-mist-100/30" : "text-navy/20"}>/</span>
          )}
        </span>
      ))}
    </div>
  );
}
