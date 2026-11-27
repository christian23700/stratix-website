import Highlight from "./Highlight";

/** Numbered process steps (3 or 4) on rounded cards. */
export default function Steps({ title, steps }) {
  return (
    <div>
      <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl text-balance">
        <Highlight text={title} />
      </h2>
      <ol className={`mt-12 grid gap-5 sm:grid-cols-2 ${steps.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {steps.map((step, i) => (
          <li key={step.title} className="flex flex-col gap-2 rounded-2xl bg-surface p-6 rounded-2xl shadow-hard ring-1 ring-line">
            <span className="font-display text-3xl font-semibold text-gold-deep" aria-hidden="true">
              {i + 1}
            </span>
            {step.label && <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">{step.label}</span>}
            <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
            <p className="text-sm leading-relaxed text-ink-soft">{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
