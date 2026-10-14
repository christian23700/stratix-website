// Replaces <i data-icon="name" data-size="24"></i> with stroke SVG icons (same style as components/ui/Icon.jsx).
const PATHS = {
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14",
  cart: "M3 4h2l2.4 11h11l2-8H6.2M9 20a1 1 0 100-2 1 1 0 000 2zm9 0a1 1 0 100-2 1 1 0 000 2z",
  plane: "M10.5 13.5L3 11l1.5-1.5 7 1L16 6a2 2 0 013 3l-4.5 4.5 1 7L14 22l-2.5-7.5L8 18v3l-1.5 1L5 18l-4-1.5L2 15h3l3.5-3.5",
  briefcase: "M4 7h16v12H4zM9 7V5h6v2M4 12h16",
  graduation: "M2 9l10-5 10 5-10 5L2 9zm4 2v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 9v6",
  megaphone: "M4 10v4h3l7 4V6L7 10H4zM18 9a3 3 0 010 6",
  users: "M16 19v-1a4 4 0 00-4-4H6a4 4 0 00-4 4v1M9 10a3 3 0 100-6 3 3 0 000 6zm13 9v-1a4 4 0 00-3-3.8M16 4.2a3 3 0 010 5.6",
  heart: "M12 20s-7-4.5-9-9a4.5 4.5 0 018-3 4.5 4.5 0 018 3c-2 4.5-7 9-7 9z",
  sparkles: "M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z",
  check: "M5 13l4 4L19 7",
  truck: "M3 6h11v9H3zM14 9h4l3 3v3h-7M7 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
  book: "M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5zm0 14a2 2 0 012-2h13",
  shield: "M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3zm-3 9l2 2 4-4",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  pin: "M12 22s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12zm0-9.6a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z",
  chat: "M4 5h16v11H8l-4 4V5z",
  play: "M8 5v14l11-7z",
  star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  building: "M4 21V5l8-3v19M12 21V9l8 3v9M2 21h20M7 8h2M7 12h2M7 16h2M15 14h2M15 17h2",
  doc: "M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7",
  bag: "M5 8h14l-1 13H6L5 8zm4 0V6a3 3 0 016 0v2",
  globe: "M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z",
  wallet: "M3 7h18v12H3zM3 7l3-4h12l3 4M16 13h2",
  bolt: "M13 2L4 14h7l-1 8 9-12h-7l1-8z",
  sun: "M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
  bed: "M3 18V7M3 13h18v5M21 18v-3a3 3 0 00-3-3h-7v6M7 12a2 2 0 100-4 2 2 0 000 4z",
  car: "M5 16l1.5-5h11l1.5 5M5 16h14v3H5zM7 19v1M17 19v1",
  home: "M3 11l9-7 9 7v10H3zM9 21v-6h6v6",
  live: "M12 14a2 2 0 100-4 2 2 0 000 4zM8 8a6 6 0 000 8M16 8a6 6 0 010 8M5 5a10 10 0 000 14M19 5a10 10 0 010 14",
  gift: "M4 10h16v11H4zM2 6h20v4H2zM12 6v15M12 6s-1-4-4-4-3 4 0 4h4zm0 0s1-4 4-4 3 4 0 4h-4z",
  lock: "M6 11h12v10H6zM8 11V7a4 4 0 018 0v4",
  leaf: "M5 19c0-8 6-14 15-14 0 9-6 15-14 15M5 19l7-7",
  bot: "M5 9h14v10H5zM12 5v4M9 13h.01M15 13h.01M9 16h6M3 12v4M21 12v4",
  wifiOff: "M2 2l20 20M8.5 16.5a5 5 0 017 0M5 12.9a10 10 0 015.2-2.7M19 12.9a10 10 0 00-2.3-1.6M12 20h.01",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zm9 3l-4.3-4.3",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"
};
document.querySelectorAll("i[data-icon]").forEach((el) => {
  const s = el.dataset.size || 24;
  const w = el.dataset.stroke || 1.8;
  el.outerHTML = `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" style="${el.getAttribute("style") || ""}"><path d="${PATHS[el.dataset.icon]}"/></svg>`;
});
