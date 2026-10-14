import Highlight from "./Highlight";

/** Three-step process row with labelled tabs and a connecting line (Genuka "Step 1/2/3"). */
export default function Steps({ title, steps }) {
  return (
    <div>
      <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl text-balance">
        <Highlight text={title} />
      </h2>
      <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
        <span className="absolute left-[16%] right-[16%] top-[54px] hidden h-px bg-line md:block" aria-hidden="true" />
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex flex-col items-center text-center">
            <span className="bg-accent px-4 py-1.5 text-sm font-semibold text-white shadow-hard">{step.label}</span>
            <span
              className={`relative mt-5 h-3.5 w-3.5 rounded-full border-2 ${
                i === steps.length - 1 ? "border-accent bg-accent" : "border-ink-muted bg-surface"
              }`}
              aria-hidden="true"
            />
            <div className="mt-5 w-full flex-1 rounded-xl bg-surface p-6 text-start ring-1 ring-line">
              <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
