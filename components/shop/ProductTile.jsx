"use client";

import { useState } from "react";
import Image from "next/image";
import { sizedCategories, sizes } from "@/lib/shop";
import { fill } from "@/lib/whatsapp";
import { useList } from "./ListProvider";
import { QtyStepper } from "./ListPanel";
import Icon from "@/components/ui/Icon";

/** One product of the shop: photo (or video), name, size choice for abayas, add / quantity. */
export default function ProductTile({ product: p, copy, categoryLabel, description, priority = false }) {
  const list = useList();
  const sized = sizedCategories.includes(p.category);
  const [size, setSize] = useState(sized ? "M" : "");
  const [playing, setPlaying] = useState(false);
  const qty = list.ready ? list.qtyOf(p.id, size) : 0;
  const title = p.ref || p.name;
  const key = size ? `${p.id}:${size}` : p.id;

  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-surface p-3 shadow-hard ring-1 ring-line">
      <div className="relative overflow-hidden rounded-xl bg-gold-tint">
        {playing && p.video ? (
          <video src={p.video} poster={p.image} controls autoPlay playsInline className="aspect-[3/4] w-full bg-night object-cover" aria-label={title} />
        ) : (
          <Image
            src={p.image}
            alt={[title, description].filter(Boolean).join(" · ")}
            width={p.width}
            height={p.height}
            priority={priority}
            sizes="(min-width: 1280px) 260px, (min-width: 640px) 33vw, 50vw"
            className="aspect-[3/4] w-full object-cover object-top"
          />
        )}
        <span className="absolute start-2.5 top-2.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#16233B]">{categoryLabel}</span>
        {p.video && (
          <button
            type="button"
            onClick={() => setPlaying((v) => !v)}
            className="focus-ring absolute bottom-2.5 end-2.5 inline-flex min-h-[36px] items-center gap-1.5 rounded-full bg-[#16233B]/85 px-3 text-xs font-semibold text-white"
          >
            <Icon name={playing ? "close" : "play"} size={14} />
            {playing ? copy.closeVideo : copy.video}
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 px-1">
        <h3 className="text-[15px] font-semibold leading-snug text-ink">{title}</h3>
        {(description || p.brand) && <p className="text-[13px] leading-snug text-ink-muted">{description || [p.brand, p.size].filter(Boolean).join(" · ")}</p>}
        <p className="mt-auto pt-1 text-sm font-semibold text-gold-deep">{copy.price}</p>
      </div>

      {sized && (
        <fieldset className="px-1">
          <legend className="sr-only">{copy.size}</legend>
          <div className="flex gap-1">
            {sizes.map((s) => (
              <label
                key={s}
                className={`focus-within:ring-2 focus-within:ring-accent flex min-h-[36px] flex-1 cursor-pointer items-center justify-center rounded-lg text-xs font-semibold ring-1 transition ${
                  size === s ? "bg-accent-tint text-ink ring-accent" : "text-ink-soft ring-line hover:ring-ink/40"
                }`}
              >
                <input type="radio" name={`size-${p.id}`} value={s} checked={size === s} onChange={() => setSize(s)} className="sr-only" />
                {s}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {qty > 0 ? (
        <QtyStepper
          qty={qty}
          onChange={(n) => list.setQty(key, n)}
          plusLabel={fill(copy.plus, { name: title })}
          minusLabel={fill(copy.minus, { name: title })}
        />
      ) : (
        <button
          type="button"
          onClick={() => list.add(p.id, size)}
          className="focus-ring min-h-[44px] rounded-full text-sm font-semibold text-accent ring-[1.5px] ring-accent transition hover:bg-accent hover:text-white"
        >
          {copy.add}
        </button>
      )}
    </article>
  );
}
