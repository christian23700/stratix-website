import Link from "next/link";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-strong shadow-hard",
  secondary: "bg-surface text-ink ring-1 ring-line hover:bg-canvas shadow-hard",
  dark: "bg-brand text-white hover:bg-brand-deep shadow-hard",
  gold: "bg-gold text-night hover:brightness-95 shadow-hard"
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-7 py-3.5 text-base"
};

export function buttonClass(variant = "primary", size = "md") {
  return [
    "focus-ring inline-flex items-center justify-center gap-2 font-semibold transition",
    "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
    variants[variant],
    sizes[size]
  ].join(" ");
}

export default function ButtonLink({ href, variant, size, className = "", children, ...rest }) {
  const external = /^https?:/.test(href);
  const cls = `${buttonClass(variant, size)} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
