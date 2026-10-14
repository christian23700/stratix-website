import Image from "next/image";
import Link from "next/link";
import Icon from "./ui/Icon";

/**
 * Genuka-style "product suite": services orbit the Stratix logo on concentric
 * rings (tablet and up; phones get ServiceRails).
 */
export default function ServiceOrbit({ items, locale }) {
  const placed = items.map((item, i) => {
    const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;
    const radius = i % 2 === 0 ? 44 : 30; // alternate between outer and inner ring (% of box)
    return {
      ...item,
      left: `${(50 + radius * Math.cos(angle)).toFixed(2)}%`,
      top: `${(50 + radius * Math.sin(angle)).toFixed(2)}%`
    };
  });

  return (
    <div className="relative mx-auto mt-14 hidden aspect-square max-w-[640px] md:block" dir="ltr">
      {[88, 60, 32].map((size) => (
        <span
          key={size}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/30"
          style={{ width: `${size}%`, height: `${size}%` }}
          aria-hidden="true"
        />
      ))}
      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface shadow-float ring-1 ring-line">
        <Image src="/images/mark.png" alt="" width={256} height={256} className="h-14 w-14" />
      </div>
      {placed.map((item) => (
        <Link
          key={item.label}
          href={`/${locale}${item.href}`}
          className="focus-ring group absolute flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
          style={{ left: item.left, top: item.top }}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-accent shadow-float ring-1 ring-line transition group-hover:-translate-y-1 group-hover:bg-accent group-hover:text-white">
            <Icon name={item.icon} size={22} />
          </span>
          <span className="text-sm font-medium leading-tight text-ink" dir="auto">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
