import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/company";
import ButtonLink from "./ui/Button";
import Icon from "./ui/Icon";

/** Product presentation. `compact` = home teaser; full = products page section. */
export default function ProductCard({ id, dict, locale, compact = false }) {
  const p = products[id];
  const copy = dict.products[id];
  const labels = dict.products.labels;

  if (compact) {
    return (
      <Link
        href={`/${locale}/products#${id}`}
        className="focus-ring group flex flex-col bg-surface p-7 shadow-hard ring-1 ring-line transition hover:-translate-y-1 sm:p-8"
        style={{ "--product": p.color }}
      >
        <Image
          src={p.visual}
          alt=""
          width={p.visualSize[0]}
          height={p.visualSize[1]}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="-mx-7 -mt-7 mb-6 w-[calc(100%+3.5rem)] max-w-none sm:-mx-8 sm:-mt-8 sm:w-[calc(100%+4rem)]"
        />
        <div className="flex items-center gap-4">
          <Image src={p.logo} alt="" width={64} height={64} className="h-14 w-14 rounded-2xl object-contain" />
          <div>
            <h3 className="font-display text-2xl font-bold text-ink">{p.name}</h3>
            <p className="text-sm font-medium text-[color:var(--product)]">{copy.tagline}</p>
          </div>
        </div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">{labels.by}</p>
        <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{copy.text}</p>
        <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm">
          <span className="text-ink-muted" dir="ltr">
            {copy.platforms}
          </span>
          <Icon name="arrow" size={18} className="rtl-flip text-ink-muted transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    );
  }

  const stores = [
    p.links.appStore && { href: p.links.appStore, label: labels.appStore },
    p.links.googlePlay && { href: p.links.googlePlay, label: labels.googlePlay },
    p.links.windows && { href: p.links.windows, label: labels.windows }
  ].filter(Boolean);

  return (
    <article id={id} className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2" style={{ "--product": p.color }}>
      <div>
        <div className="flex items-center gap-4">
          <Image src={p.logo} alt="" width={72} height={72} className="h-16 w-16 rounded-2xl object-contain" />
          <div>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">{p.name}</h2>
            <p className="font-medium text-[color:var(--product)]">{copy.tagline}</p>
          </div>
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">{labels.by}</p>
        <p className="mt-2 text-lg leading-relaxed text-ink-soft">{copy.text}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {copy.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-[15px] text-ink">
              <Icon name="check" size={18} strokeWidth={2.2} className="mt-0.5 shrink-0 text-[color:var(--product)]" />
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-muted">
          <span dir="ltr">{copy.platforms}</span>
          {copy.pricing && <> · {copy.pricing}</>}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href={p.site} variant="dark">
            {labels.visit}
          </ButtonLink>
          {stores.map((s) => (
            <ButtonLink key={s.href} href={s.href} variant="secondary">
              {s.label}
            </ButtonLink>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-muted">
          {labels.support}:{" "}
          <a href={`mailto:${p.support}`} className="focus-ring font-medium text-ink underline underline-offset-2">
            {p.support}
          </a>
        </p>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-[color:var(--product)] opacity-10" aria-hidden="true" />
        <Image
          src={p.visual}
          alt={p.name}
          width={p.visualSize[0]}
          height={p.visualSize[1]}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="relative w-full shadow-hard-lg ring-1 ring-line"
        />
      </div>
    </article>
  );
}
