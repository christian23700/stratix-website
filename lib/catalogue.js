// Perfume catalogue. Language-independent facts here; descriptions live in the dictionaries under
// catalogue.items[slug]. Videos are produced in D:\releasereel (composition stratix-parfum-<slug>) and exported
// to public/catalogue/<slug>.mp4 at 720×1280 (H.264, faststart) with a poster frame.
export const perfumes = [
  {
    slug: "angham",
    name: "Angham",
    brand: "Lattafa",
    size: "100 ml",
    video: "/catalogue/angham.mp4",
    poster: "/catalogue/angham-poster.jpg"
  }
];

export const perfumeSlugs = perfumes.map((p) => p.slug);
