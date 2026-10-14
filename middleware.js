import { NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n-config";

// Paths without a locale ("/", "/services") are redirected to the visitor's language:
// the language they picked before (cookie set by the language switcher), else the browser's
// Accept-Language, else English.
function preferredLocale(request) {
  const saved = request.cookies.get("NEXT_LOCALE")?.value;
  if (locales.includes(saved)) return saved;
  const accepted = (request.headers.get("accept-language") || "")
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.slice(0, 2).toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return accepted.find((a) => locales.includes(a.lang))?.lang || defaultLocale;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return;
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and files with an extension (images, video, robots.txt, sitemap.xml…).
  matcher: ["/((?!_next|api|.*\\..*).*)"]
};
