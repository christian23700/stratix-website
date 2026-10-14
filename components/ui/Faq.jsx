/** FAQ accordion grouped by category, using native <details> (no JS needed). */
export default function Faq({ groups }) {
  return (
    <div className="mx-auto mt-12 max-w-3xl space-y-10">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{group.title}</h3>
          <div className="mt-3 divide-y divide-line border-y border-line">
            {group.items.map((item) => (
              <details key={item.q} className="group">
                <summary className="focus-ring flex cursor-pointer items-center justify-between gap-4 py-4 text-start font-semibold text-ink">
                  {item.q}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-ink-muted transition-transform group-open:rotate-180" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="pb-5 leading-relaxed text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
