import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";
import en from "@/lib/dictionaries/en";
import fr from "@/lib/dictionaries/fr";
import ar from "@/lib/dictionaries/ar";

// not-found pages don't receive the route params, so the message is shown in all three languages;
// "/" sends the visitor to their own language (middleware.js).
export default function NotFound() {
  return (
    <section className="hero-wash flex min-h-[70vh] items-center justify-center px-4 pt-28 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">[ 404 ]</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink">{en.seo.notFound.title}</h1>
        <p className="mt-3 text-ink-soft">{en.seo.notFound.text}</p>
        <p className="mt-1 text-ink-soft" lang="fr">
          {fr.seo.notFound.title} · {fr.seo.notFound.text}
        </p>
        <p className="mt-1 text-ink-soft" lang="ar" dir="rtl">
          {ar.seo.notFound.title} · {ar.seo.notFound.text}
        </p>
        <Link href="/" className={`${buttonClass("primary", "md")} mt-8`}>
          {en.seo.notFound.cta}
        </Link>
      </div>
    </section>
  );
}
