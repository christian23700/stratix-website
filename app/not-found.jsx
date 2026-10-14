import Link from "next/link";
import { buttonClass } from "@/components/ui/Button";

// Rendered inside the root layout, so no <html>/<body> here.
export default function NotFound() {
  return (
    <div className="hero-wash flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">[ 404 ]</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">Page not found</h1>
        <p className="mt-3 text-ink-soft">Page introuvable · الصفحة غير موجودة</p>
        <Link href="/en" className={`${buttonClass("primary", "md")} mt-8`}>
          Back to home
        </Link>
      </div>
    </div>
  );
}
