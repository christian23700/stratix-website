import ButtonLink from "./Button";
import Highlight from "./Highlight";

/** Big closing call-to-action block with a hard offset shadow. */
export default function CtaBanner({ title, text, primary, secondary }) {
  return (
    <section className="container-x py-20 sm:py-24">
      <div className="relative overflow-hidden bg-gradient-to-br from-brand via-brand to-accent-strong p-8 text-white shadow-hard-lg sm:p-12 md:p-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-balance">
            <Highlight text={title} className="text-gold" />
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {primary && (
              <ButtonLink href={primary.href} variant="gold" size="lg">
                {primary.label}
              </ButtonLink>
            )}
            {secondary && (
              <ButtonLink href={secondary.href} variant="secondary" size="lg">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
