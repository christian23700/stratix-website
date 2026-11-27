"use client";

import { fill } from "@/lib/whatsapp";
import { useList } from "./ListProvider";
import Icon from "@/components/ui/Icon";

/** Phones: the list panel sits under the products, so a bar at the bottom jumps to it. */
export default function MobileListBar({ copy }) {
  const list = useList();
  if (!list.ready || list.count === 0) return null;

  return (
    <a
      href="#ma-liste"
      className="focus-ring fixed bottom-5 start-4 end-24 z-40 flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ink px-5 text-[15px] font-semibold text-canvas shadow-hard-lg lg:hidden"
    >
      <Icon name="list" size={18} />
      {fill(copy.open, { n: list.count })}
    </a>
  );
}
