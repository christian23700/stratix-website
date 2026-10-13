export default function SolutionCard({ item }) {
  return (
    <div className="rounded-3xl bg-white p-7 sm:p-8 ring-1 ring-navy/5 shadow-sm flex flex-col">
      <span className="inline-flex w-fit items-center rounded-full bg-navy px-3 py-1 font-display text-xs tracking-wide text-cyan">
        {item.code}
      </span>
      <h3 className="mt-5 font-display text-xl text-navy leading-snug">{item.title}</h3>
      <p className="mt-3 text-sm text-slate leading-relaxed">{item.description}</p>

      <ul className="mt-6 space-y-2.5 flex-1">
        {item.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm text-slate-dark">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
            <span className="leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
