// Web app manifest: name, colours and icons when the site is added to a phone's home screen.
export default function manifest() {
  return {
    name: "Stratix — UAE ⇄ Africa",
    short_name: "Stratix",
    description: "Software, Dubai–Africa e-commerce, online marketing and UAE mobility.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F4",
    theme_color: "#0B2D6B",
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
  };
}
