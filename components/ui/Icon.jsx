// Minimal stroke icon set (24px grid) so the theme has no icon-library dependency.
const paths = {
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14",
  cart: "M3 4h2l2.4 11h11l2-8H6.2M9 20a1 1 0 100-2 1 1 0 000 2zm9 0a1 1 0 100-2 1 1 0 000 2z",
  plane: "M10.5 13.5L3 11l1.5-1.5 7 1L16 6a2 2 0 013 3l-4.5 4.5 1 7L14 22l-2.5-7.5L8 18v3l-1.5 1L5 18l-4-1.5L2 15h3l3.5-3.5",
  briefcase: "M4 7h16v12H4zM9 7V5h6v2M4 12h16",
  graduation: "M2 9l10-5 10 5-10 5L2 9zm4 2v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 9v6",
  megaphone: "M4 10v4h3l7 4V6L7 10H4zM18 9a3 3 0 010 6",
  users: "M16 19v-1a4 4 0 00-4-4H6a4 4 0 00-4 4v1M9 10a3 3 0 100-6 3 3 0 000 6zm13 9v-1a4 4 0 00-3-3.8M16 4.2a3 3 0 010 5.6",
  leaf: "M5 19c0-8 6-14 15-14 0 9-6 15-14 15M5 19l7-7",
  heart: "M12 20s-7-4.5-9-9a4.5 4.5 0 018-3 4.5 4.5 0 018 3c-2 4.5-7 9-7 9z",
  sparkles: "M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z",
  handshake: "M2 11l4-4 4 2 3-2 4 1 5 3M6 7v7l5 5 2-1 2 1 4-4-3-4M9 13l2 2m1-3l2 2",
  globe: "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z",
  check: "M5 13l4 4L19 7",
  arrow: "M5 12h14M13 6l6 6-6 6",
  truck: "M3 6h11v9H3zM14 9h4l3 3v3h-7M7 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  book: "M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5zm0 14a2 2 0 012-2h13",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zm9 3l-4.3-4.3",
  shield: "M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3zm-3 9l2 2 4-4",
  support: "M4 14v-2a8 8 0 0116 0v2M4 14a2 2 0 002 2h1v-5H6a2 2 0 00-2 2zm16 0a2 2 0 01-2 2h-1v-5h1a2 2 0 012 2zm-3 2v1a3 3 0 01-3 3h-2",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  pin: "M12 22s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12zm0-9.6a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"
};

export default function Icon({ name, size = 20, className = "", strokeWidth = 1.7 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name] || paths.sparkles} />
    </svg>
  );
}
