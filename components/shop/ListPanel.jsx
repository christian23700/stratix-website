"use client";

import Image from "next/image";
import Link from "next/link";
import { productById } from "@/lib/shop";
import { fill, listMessage, whatsappLink } from "@/lib/whatsapp";
import { useList } from "./ListProvider";
import Icon from "@/components/ui/Icon";

/** "My list": lines, retail/wholesale, delivery place, message preview and the WhatsApp button. */
export default function ListPanel({ copy, shopCopy, locale, sticky = false }) {
  const list = useList();
  const message = listMessage(list, copy);
  const countText = fill(list.count > 1 ? copy.countPlural : copy.count, { n: list.count });

  return (
    <aside
      id="ma-liste"
      aria-label={copy.title}
      className={`flex scroll-mt-28 flex-col gap-5 rounded-3xl bg-surface p-5 shadow-hard ring-1 ring-line sm:p-6 ${sticky ? "lg:sticky lg:top-28" : ""}`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="font-display text-2xl font-semibold text-ink">{copy.title}</h2>
        <span className="text-sm text-ink-muted" aria-live="polite">
          {countText}
        </span>
      </div>

      <fieldset className="flex rounded-full bg-canvas p-1 ring-1 ring-line">
        <legend className="sr-only">{copy.mode}</legend>
        {["retail", "wholesale"].map((mode) => (
          <label
            key={mode}
            className={`focus-within:ring-2 focus-within:ring-accent flex min-h-[40px] flex-1 cursor-pointer items-center justify-center rounded-full px-3 text-center text-sm font-semibold transition ${
              list.mode === mode ? "bg-accent text-white" : "text-ink-soft"
            }`}
          >
            <input type="radio" name="list-mode" value={mode} checked={list.mode === mode} onChange={() => list.setMode(mode)} className="sr-only" />
            {copy[mode]}
          </label>
        ))}
      </fieldset>

      {list.lines.length === 0 ? (
        <div className="space-y-3 text-sm text-ink-soft">
          <p>{copy.empty}</p>
          <Link href={`/${locale}/catalogue`} className="focus-ring font-semibold text-accent underline underline-offset-2">
            {copy.browse}
          </Link>
        </div>
      ) : (
        <ul className="divide-y divide-line">
          {list.lines.map((line) => {
            const p = line.custom ? null : productById[line.productId];
            const name = line.custom ? line.name : p.ref || p.name;
            const sub = line.custom
              ? [line.brand, line.size, line.note].filter(Boolean).join(" · ")
              : [p.ref ? p.description : p.brand, line.size && `${shopCopy.size} ${line.size}`].filter(Boolean).join(" · ");
            return (
              <li key={line.key} className="flex items-center gap-3 py-3">
                {p ? (
                  <Image src={p.image} alt="" width={48} height={60} className="h-14 w-12 shrink-0 rounded-lg object-cover object-top" />
                ) : (
                  <span aria-hidden="true" className="flex h-14 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-dashed border-gold/60 bg-gold-tint font-bold text-gold-deep">
                    ?
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{name}</p>
                  {sub && <p className="truncate text-xs text-ink-muted">{sub}</p>}
                  {line.custom && (
                    <span className="mt-1 inline-block rounded-full bg-gold-tint px-2 py-0.5 text-[11px] font-bold text-gold-deep">{copy.onRequest}</span>
                  )}
                </div>
                <QtyStepper
                  qty={line.qty}
                  onChange={(n) => list.setQty(line.key, n)}
                  plusLabel={fill(shopCopy.plus, { name })}
                  minusLabel={fill(shopCopy.minus, { name })}
                  small
                />
                <button
                  type="button"
                  onClick={() => list.remove(line.key)}
                  aria-label={fill(copy.remove, { name })}
                  className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-muted hover:bg-canvas hover:text-ink"
                >
                  <Icon name="close" size={16} />
                </button>
              </li>
            );
          })}
        </ul>
      )}

      <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink">
        {copy.city}
        <input
          type="text"
          value={list.city}
          onChange={(e) => list.setCity(e.target.value)}
          placeholder={copy.cityPlaceholder}
          autoComplete="address-level2"
          className="min-h-[44px] rounded-xl border border-line bg-surface px-3 text-[15px] font-normal text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
        />
      </label>

      <div className="space-y-1.5">
        <p className="text-sm font-semibold text-ink">{copy.preview}</p>
        <p className="whitespace-pre-line rounded-2xl rounded-es-md bg-[#E7F7DD] px-4 py-3 text-[13px] leading-relaxed text-[#1F2A1A]" dir="auto">
          {message}
        </p>
      </div>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#1F8A4C] px-5 text-base font-bold text-white transition hover:bg-[#18703D]"
      >
        <Icon name="whatsapp" size={20} />
        {copy.send}
      </a>
      <p className="text-xs leading-relaxed text-ink-muted">{copy.note}</p>
      {list.lines.length > 0 && (
        <button type="button" onClick={list.clear} className="focus-ring self-start text-xs font-semibold text-ink-muted underline underline-offset-2 hover:text-ink">
          {copy.clear}
        </button>
      )}
    </aside>
  );
}

export function QtyStepper({ qty, onChange, plusLabel, minusLabel, small = false }) {
  const btn = `focus-ring flex shrink-0 items-center justify-center rounded-full transition ${small ? "h-8 w-8 bg-canvas text-ink hover:bg-line" : "h-10 w-10 bg-white/15 text-white hover:bg-white/25"}`;
  return (
    <div className={`flex items-center ${small ? "gap-1" : "w-full justify-between gap-2 rounded-full bg-accent px-1 py-1 text-white"}`}>
      <button type="button" onClick={() => onChange(qty - 1)} aria-label={minusLabel} className={btn}>
        <Icon name="minus" size={16} />
      </button>
      <span className={`min-w-[1.5rem] text-center font-semibold ${small ? "text-sm text-ink" : "text-sm"}`} aria-live="polite">
        {qty}
      </span>
      <button type="button" onClick={() => onChange(qty + 1)} aria-label={plusLabel} className={btn}>
        <Icon name="plus" size={16} />
      </button>
    </div>
  );
}
