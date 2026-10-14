"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeMeta } from "@/lib/i18n-config";

function swapLocale(pathname, next) {
  const parts = pathname.split("/").filter(Boolean);
  parts[0] = next;
  return "/" + parts.join("/");
}

export default function LanguageSwitcher({ locale, tone = "light" }) {
  const pathname = usePathname();
  const idle = tone === "dark" ? "text-white/60 hover:text-white" : "text-ink-muted hover:text-ink";

  return (
    <div className="flex items-center text-xs font-semibold" role="group" aria-label="Language">
      {locales.map((code) => (
        <Link
          key={code}
          href={swapLocale(pathname, code)}
          className={`focus-ring rounded px-1.5 py-1 transition-colors ${code === locale ? "text-accent" : idle}`}
          aria-current={code === locale ? "true" : undefined}
          onClick={() => (document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000; samesite=lax`)}
          lang={code}
        >
          {localeMeta[code].short}
        </Link>
      ))}
    </div>
  );
}
