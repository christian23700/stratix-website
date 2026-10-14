"use client";

import { useEffect, useState } from "react";
import { THEME_KEY } from "@/lib/theme";

/** Sun / moon button switching between light and dark; remembers the choice. */
export default function ThemeToggle({ labels }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => setTheme(document.documentElement.dataset.theme || "light"), []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
    setTheme(next);
  }

  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      className="focus-ring flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-canvas hover:text-ink"
      aria-label={dark ? labels.light : labels.dark}
      title={dark ? labels.light : labels.dark}
    >
      {/* icon of the theme you switch TO; hidden until the current theme is known */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={theme ? "" : "invisible"}>
        {dark ? (
          <path d="M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        ) : (
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
        )}
      </svg>
    </button>
  );
}
