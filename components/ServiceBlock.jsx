import Link from "next/link";

export default function ServiceBlock({ service, locale, reverse = false, ctaHref }) {
  return (
    <div
      id={service.id}
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-start scroll-mt-24 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <span className="eyebrow text-cyan-dim">{service.tag}</span>
        <h2 className="mt-3 font-display text-2xl sm:text-3xl text-navy leading-snug text-balance">
          {service.title}
        </h2>
        <p className="mt-4 text-slate leading-relaxed">{service.description}</p>
        <Link
          href={ctaHref}
          className="focus-ring mt-7 inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-mist-100 hover:bg-navy-light transition-colors"
        >
          {service.cta}
        </Link>
      </div>

      <ul className="space-y-3">
        {service.bullets.map((b) => (
          <li key={b} className="flex gap-3 rounded-xl bg-white p-4 ring-1 ring-navy/5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="#00D4E5" strokeWidth="1.6" />
              <path d="M8.5 12.5l2.3 2.3L15.5 9" stroke="#0B93A3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm text-slate-dark leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
