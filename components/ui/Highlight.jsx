/**
 * Renders dictionary strings where words wrapped in [[double brackets]] get
 * the accent colour — the Genuka "Run [[your whole business]] in one place" look.
 */
export default function Highlight({ text, className = "text-accent" }) {
  const parts = text.split(/\[\[(.+?)\]\]/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className={className}>
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function plain(text) {
  return text.replace(/\[\[(.+?)\]\]/g, "$1");
}
