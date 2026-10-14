import Highlight from "./Highlight";

/** Centered Genuka-style section header: bracket badge, highlighted title, lead. */
export default function SectionHeader({ badge, title, lead, align = "center", as: Tag = "h2" }) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          <span aria-hidden="true">[</span>
          {badge}
          <span aria-hidden="true">]</span>
        </span>
      )}
      <Tag className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl text-balance">
        <Highlight text={title} />
      </Tag>
      {lead && <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{lead}</p>}
    </div>
  );
}
