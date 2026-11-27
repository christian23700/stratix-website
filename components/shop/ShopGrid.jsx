"use client";

import { useEffect, useMemo, useState } from "react";
import { categories, products } from "@/lib/shop";
import { fill } from "@/lib/whatsapp";
import ProductTile from "./ProductTile";
import CustomItemDialog from "./CustomItemDialog";
import Icon from "@/components/ui/Icon";

const PAGE = 24;

/** Shop: category chips, search by name or reference, product grid with "show more". */
export default function ShopGrid({ copy, perfumeCopy, locale }) {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(PAGE);

  // The page is static: read ?category=… (links from the home page and the footer) in the browser.
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("category");
    if (categories.includes(wanted)) setCategory(wanted);
  }, []);

  // Abaya descriptions are written in French (as in the printed catalogue): shown in French only.
  const describe = (p) => (p.copyKey ? perfumeCopy[p.copyKey]?.tagline : locale === "fr" ? p.description : "");

  const counts = useMemo(() => {
    const c = { all: products.length };
    for (const p of products) c[p.category] = (c[p.category] || 0) + 1;
    return c;
  }, []);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        (!q || [p.name, p.ref, p.brand, p.description].filter(Boolean).join(" ").toLowerCase().includes(q))
    );
  }, [category, query]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div role="group" aria-label={copy.filterLabel} className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          {["all", ...categories].map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={category === id}
              onClick={() => {
                setCategory(id);
                setLimit(PAGE);
              }}
              className={`focus-ring inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-full px-4 text-sm font-semibold ring-1 transition ${
                category === id ? "bg-ink text-canvas ring-ink" : "bg-surface text-ink ring-line hover:ring-ink/40"
              }`}
            >
              {copy.categories[id]}
              <span className="font-medium opacity-70">{counts[id] || 0}</span>
            </button>
          ))}
        </div>
        <label className="relative block max-w-md">
          <span className="sr-only">{copy.search}</span>
          <Icon name="search" size={18} className="pointer-events-none absolute start-3.5 top-1/2 -translate-y-1/2 text-ink-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setLimit(PAGE);
            }}
            placeholder={copy.search}
            className="min-h-[48px] w-full rounded-full border border-line bg-surface pe-4 ps-10 text-[15px] text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none"
          />
        </label>
        <p className="text-sm text-ink-muted" aria-live="polite">
          {fill(shown.length === 1 ? copy.countOne : copy.count, { n: shown.length })}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 xl:grid-cols-3">
        <div className="col-span-2 sm:col-span-1">
          <CustomItemDialog copy={copy.custom} />
        </div>
        {shown.slice(0, limit).map((p, i) => (
          <ProductTile key={p.id} product={p} copy={copy} categoryLabel={copy.categories[p.category]} description={describe(p)} priority={i < 3} />
        ))}
      </div>

      {shown.length === 0 && <p className="text-ink-soft">{copy.noResults}</p>}
      {shown.length > limit && (
        <button
          type="button"
          onClick={() => setLimit((n) => n + PAGE)}
          className="focus-ring mx-auto inline-flex min-h-[48px] items-center rounded-full px-6 text-[15px] font-semibold text-ink ring-1 ring-ink/25 hover:ring-ink/60"
        >
          {copy.showMore}
        </button>
      )}
    </div>
  );
}
