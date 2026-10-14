// Perfume catalogue. Language-independent facts here; descriptions live in the dictionaries under
// catalogue.items[slug]. Videos are produced in D:\releasereel (composition stratix-parfum-<slug>) and exported
// to public/catalogue/<slug>.mp4 at 720×1280 (H.264, faststart) with a poster frame.
const perfume = (slug, name, size, uploadDate, duration) => ({
  slug,
  name,
  brand: "Lattafa",
  size,
  video: `/catalogue/${slug}.mp4`,
  poster: `/catalogue/${slug}-poster.jpg`,
  // for the VideoObject structured data
  uploadDate,
  duration
});

export const perfumes = [
  perfume("angham", "Angham", "100 ml", "2026-10-14", "PT25S"),
  perfume("mayar", "Mayar Cherry Intense", "100 ml", "2026-10-14", "PT24S"),
  perfume("eclaire", "Eclaire", "100 ml", "2026-10-14", "PT23S"),
  perfume("afeef", "Afeef", "100 ml", "2026-10-14", "PT25S"),
  perfume("ajwad", "Ajwad Pink to Pink", "60 ml", "2026-10-14", "PT25S")
];
