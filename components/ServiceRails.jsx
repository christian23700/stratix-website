import Image from "next/image";
import Link from "next/link";
import { suiteVisual, visualSize } from "@/lib/visuals";
import Icon from "./ui/Icon";

// Groups of the home suite, by the section the link points to.
const GROUPS = [
  { key: "services", match: (href) => href.startsWith("/services") },
  { key: "mobility", match: (href) => href.startsWith("/mobility") },
  { key: "partners", match: (href) => href.startsWith("/products") }
];

/**
 * Phone layout of "Get to know Stratix": one swipeable row of illustrated cards per group
 * (the orbit in ServiceOrbit is the tablet/desktop layout).
 */
export default function ServiceRails({ suite, locale, learnMore }) {
  return (
    <div className="mt-10 space-y-10 md:hidden">
      {GROUPS.map((group, g) => {
        const items = suite.items.filter((item) => group.match(item.href));
        return (
          <section key={group.key} aria-labelledby={`suite-${group.key}`}>
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center bg-brand font-display text-sm font-bold text-white">{g + 1}</span>
              <h3 id={`suite-${group.key}`} className="font-display text-xl font-bold text-ink">
                {suite.groups[group.key]}
              </h3>
              <span className="ms-auto text-sm font-semibold text-ink-muted">{items.length}</span>
            </div>

            <ul className="no-scrollbar -mx-4 mt-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4">
              {items.map((item) => (
                <li key={item.href} className="w-[78%] max-w-[300px] shrink-0 snap-start">
                  <Link href={`/${locale}${item.href}`} className="focus-ring group flex h-full flex-col bg-surface shadow-hard ring-1 ring-line">
                    <Image
                      src={suiteVisual(item.href)}
                      alt=""
                      width={visualSize[0]}
                      height={visualSize[1]}
                      sizes="300px"
                      className="aspect-[16/10] w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-accent-tint text-accent">
                          <Icon name={item.icon} size={18} />
                        </span>
                        <span className="font-display text-lg font-bold leading-tight text-ink">{item.label}</span>
                      </div>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                        {learnMore}
                        <Icon name="arrow" size={16} className="rtl-flip" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
