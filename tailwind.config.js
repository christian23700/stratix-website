/** @type {import('tailwindcss').Config} */

// Colours come from CSS variables defined in app/theme.css, so the whole
// palette can be re-skinned from one file without touching components.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  // dark: variants follow <html data-theme="dark"> (theme toggle / system setting)
  darkMode: ["selector", "[data-theme=\"dark\"]"],
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: token("canvas"),
        surface: token("surface"),
        ink: {
          DEFAULT: token("ink"),
          soft: token("ink-soft"),
          muted: token("ink-muted")
        },
        brand: {
          DEFAULT: token("brand"),
          deep: token("brand-deep"),
          tint: token("brand-tint")
        },
        accent: {
          DEFAULT: token("accent"),
          strong: token("accent-strong"),
          tint: token("accent-tint")
        },
        gold: {
          DEFAULT: token("gold"),
          deep: token("gold-deep"),
          tint: token("gold-tint")
        },
        line: token("line"),
        night: token("night")
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        "display-ar": ["var(--font-display-ar)", "sans-serif"],
        "body-ar": ["var(--font-body-ar)", "sans-serif"]
      },
      boxShadow: {
        // "hard" names kept from the first theme; they are soft card shadows now
        hard: "0 8px 24px -14px rgb(var(--shadow) / 0.35)",
        "hard-lg": "0 24px 60px -28px rgb(var(--shadow) / 0.45)",
        float: "0 10px 40px -12px rgb(var(--shadow) / 0.25)"
      },
      keyframes: {
        fadeup: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        fadeup: "fadeup 0.7s ease-out both",
        orbit: "orbit 60s linear infinite"
      }
    }
  },
  plugins: []
};
