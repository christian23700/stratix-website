// Business apps built by Stratix, shown on the products page (screens: public/images/apps/*.webp, 1513×1039,
// demo data). Translatable copy lives in the dictionaries under businessApps.items[slug].
export const appScreenSize = [1513, 1039];

const screens = (prefix, names) => names.map((n, i) => `/images/apps/${prefix}-0${i + 1}-${n}.webp`);

export const businessApps = [
  { slug: "order", name: "Order Suite", color: "#F97316", screens: screens("order", ["control-room", "orders", "progress", "analytics", "products"]) },
  { slug: "pulse", name: "Pulse", color: "#0F8B8D", screens: screens("pulse", ["analytics", "pipeline", "canvas", "ai", "accounts"]) },
  { slug: "hr", name: "People Hub", color: "#6D5DF5", screens: screens("hr", ["dashboard", "employees", "attendance", "leaves", "reports"]) }
];
