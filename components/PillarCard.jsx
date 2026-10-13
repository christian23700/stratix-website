import Link from "next/link";

export default function PillarCard({ index, tag, title, description, href, readMore }) {
  return (
    <Link
      href={href}
      className="focus-ring group relative flex flex-col rounded-3xl bg-white p-7 sm:p-8 ring-1 ring-navy/5 shadow-sm hover:shadow-xl hover:shadow-navy/10 transition-all hover:-translate-y-1"
    >
      <span className="font-display text-sm text-cyan-dim">{String(index).padStart(2, "0")}</span>
      <span className="eyebrow mt-4 text-slate">{tag}</span>
      <h3 className="mt-2 font-display text-xl text-navy leading-snug">{title}</h3>
      <p className="mt-3 text-sm text-slate leading-relaxed flex-1">{description}</p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-cyan-dim transition-colors">
        {readMore}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="rtl-flip" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
