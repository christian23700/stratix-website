import Link from "next/link";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-strong",
  secondary: "bg-surface text-ink ring-1 ring-ink/25 hover:ring-ink/60",
  dark: "bg-brand text-white hover:bg-brand-deep",
  gold: "bg-gold text-[#16233B] hover:brightness-95",
  whatsapp: "bg-[#1F8A4C] text-white hover:bg-[#18703D]"
};

const sizes = {
  sm: "min-h-[44px] px-4 text-sm",
  md: "min-h-[48px] px-6 text-[15px]",
  lg: "min-h-[52px] px-7 text-base"
};

export function buttonClass(variant = "primary", size = "md") {
  return [
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold transition",
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
