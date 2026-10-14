/** @type {import('tailwindcss').Config} */

// Colours come from CSS variables defined in app/theme.css, so the whole
// palette can be re-skinned from one file without touching components.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
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
          tint: token("gold-tint")
        },
        line: token("line"),
        night: token("night")
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        "display-ar": ["var(--font-display-ar)", "sans-serif"],
        "body-ar": ["var(--font-body-ar)", "sans-serif"]
      },
      boxShadow: {
        hard: "4px 4px 0 0 rgb(var(--shadow) / 0.22)",
        "hard-lg": "8px 8px 0 0 rgb(var(--shadow) / 0.22)",
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
