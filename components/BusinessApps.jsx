"use client";

import { useState } from "react";
import Image from "next/image";
import { appScreenSize, businessApps } from "@/lib/business-apps";
import Highlight from "./ui/Highlight";
import Icon from "./ui/Icon";

/** Tabbed showcase of the business apps: description + features, and a 5-screen gallery in a browser frame. */
export default function BusinessApps({ copy, ctaHref }) {
  const [active, setActive] = useState(0);
  const [screen, setScreen] = useState(0);
  const app = businessApps[active];
  const text = copy.items[app.slug];

  function pick(i) {
    setActive(i);
    setScreen(0);
  }

  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">[ {copy.badge} ]</span>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl text-balance">
          <Highlight text={copy.title} />
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{copy.lead}</p>
      </div>

      <div className="no-scrollbar -mx-4 mt-10 flex justify-start gap-2 overflow-x-auto px-4 sm:justify-center" role="tablist" aria-label={copy.badge}>
        {businessApps.map((a, i) => (
          <button
            key={a.slug}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`app-panel-${a.slug}`}
            onClick={() => pick(i)}
            className={`focus-ring flex shrink-0 items-center gap-2 px-5 py-2.5 text-sm font-semibold ring-1 transition ${
              i === active ? "bg-ink text-canvas ring-ink shadow-hard" : "bg-surface text-ink ring-line hover:ring-accent"
            }`}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: a.color }} aria-hidden="true" />
            {a.name}
          </button>
        ))}
      </div>

      <div id={`app-panel-${app.slug}`} role="tabpanel" className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_1.6fr]">
        {/* min-w-0: the scrollable thumbnail row must not widen the grid column */}
        <div className="min-w-0">
          <p className="text-sm font-semibold" style={{ color: app.color }}>
            {text.tagline}
          </p>
          <h3 className="mt-2 font-display text-3xl font-bold text-ink">{app.name}</h3>
          <p className="mt-4 leading-relaxed text-ink-soft">{text.text}</p>
          <ul className="mt-6 space-y-3">
            {text.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-[15px] leading-relaxed text-ink">
                <Icon name="check" size={18} strokeWidth={2.2} className="mt-1 shrink-0 text-accent" />
                {f}
              </li>
            ))}
          </ul>
          <a href={ctaHref} className="focus-ring mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3 font-semibold text-white shadow-hard transition hover:bg-accent-strong">
            {copy.cta}
            <Icon name="arrow" size={18} className="rtl-flip" />
          </a>
        </div>

        <div className="min-w-0">
          {/* browser frame */}
          <div className="overflow-hidden bg-surface shadow-hard-lg ring-1 ring-line" dir="ltr">
            <div className="flex items-center gap-2 border-b border-line bg-canvas px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ms-3 truncate text-xs text-ink-muted">{text.screens[screen]}</span>
            </div>
            <Image
              key={app.screens[screen]}
              src={app.screens[screen]}
              alt={`${app.name} — ${text.screens[screen]}`}
              width={appScreenSize[0]}
              height={appScreenSize[1]}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="block w-full animate-fadeup"
            />
          </div>

          {/* screen picker */}
          <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1" dir="ltr">
            {app.screens.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setScreen(i)}
                aria-label={text.screens[i]}
                aria-pressed={i === screen}
                className={`focus-ring group w-28 shrink-0 text-start sm:w-32`}
              >
                <span className={`block overflow-hidden ring-2 transition ${i === screen ? "ring-accent" : "ring-line group-hover:ring-ink-muted"}`}>
                  <Image src={src} alt="" width={appScreenSize[0]} height={appScreenSize[1]} sizes="128px" className="block w-full" />
                </span>
                <span className={`mt-1.5 block truncate text-xs ${i === screen ? "font-semibold text-ink" : "text-ink-muted"}`}>{text.screens[i]}</span>
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-ink-muted">{copy.demoNote}</p>
        </div>
      </div>
    </div>
  );
}
