"use client";

import { useRef, useState } from "react";
import { useList } from "./ListProvider";
import Icon from "@/components/ui/Icon";

const blank = { name: "", brand: "", size: "", qty: 1, note: "" };
const input =
  "min-h-[44px] w-full rounded-xl border border-line bg-surface px-3 text-[15px] text-ink placeholder:text-ink-muted focus:border-accent focus:outline-none";

/** Card + dialog to add an item that is not on the site ("on request"). */
export default function CustomItemDialog({ copy }) {
  const list = useList();
  const dialog = useRef(null);
  const [form, setForm] = useState(blank);
  const [done, setDone] = useState(false);
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    list.addCustom({
      name: form.name.trim(),
      brand: form.brand.trim(),
      size: form.size.trim(),
      note: form.note.trim(),
      qty: Math.max(1, Number(form.qty) || 1)
    });
    setForm(blank);
    setDone(true);
    dialog.current?.close();
  };

  return (
    <>
      <article className="flex flex-col sm:min-h-[360px] items-start justify-center gap-3 rounded-2xl border-2 border-dashed border-gold/60 bg-gold-tint/60 p-6">
        <Icon name="search" size={34} className="text-gold-deep" />
        <h3 className="font-display text-2xl font-semibold text-ink">{copy.title}</h3>
        <p className="text-sm leading-relaxed text-ink-soft">{copy.text}</p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            dialog.current?.showModal();
          }}
          className="focus-ring mt-1 inline-flex min-h-[44px] items-center rounded-full bg-accent px-5 text-sm font-semibold text-white hover:bg-accent-strong"
        >
          {copy.cta}
        </button>
        {done && (
          <p className="text-sm font-semibold text-[#1F8A4C]" role="status">
            {copy.added}
          </p>
        )}
      </article>

      <dialog
        ref={dialog}
        aria-labelledby="custom-item-title"
        className="w-[min(480px,calc(100vw-2rem))] rounded-3xl bg-surface p-0 text-ink shadow-hard-lg backdrop:bg-[#0F192D]/55"
      >
        <form onSubmit={submit} className="flex flex-col gap-4 p-6 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <h2 id="custom-item-title" className="font-display text-2xl font-semibold">
              {copy.dialogTitle}
            </h2>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label={copy.close}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-canvas text-ink"
            >
              <Icon name="close" size={16} />
            </button>
          </div>
          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            {copy.name} *
            <input required value={form.name} onChange={set("name")} placeholder={copy.namePlaceholder} className={`${input} font-normal`} />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              {copy.brand}
              <input value={form.brand} onChange={set("brand")} placeholder={copy.brandPlaceholder} className={`${input} font-normal`} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              {copy.size}
              <input value={form.size} onChange={set("size")} placeholder={copy.sizePlaceholder} className={`${input} font-normal`} />
            </label>
          </div>
          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            {copy.qty}
            <input type="number" min={1} max={1000} inputMode="numeric" value={form.qty} onChange={set("qty")} className={`${input} max-w-[8rem] font-normal`} />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-semibold">
            {copy.note}
            <textarea rows={3} value={form.note} onChange={set("note")} placeholder={copy.notePlaceholder} className={`${input} py-2.5 font-normal`} />
          </label>
          <button type="submit" className="focus-ring min-h-[50px] rounded-full bg-accent text-[15px] font-semibold text-white hover:bg-accent-strong">
            {copy.add}
          </button>
        </form>
      </dialog>
    </>
  );
}
