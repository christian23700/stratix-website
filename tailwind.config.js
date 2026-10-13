/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1930",
          deep: "#060F1F",
          light: "#122645"
        },
        cyan: {
          DEFAULT: "#00D4E5",
          soft: "#5FE8F2",
          dim: "#0B93A3"
        },
        mist: {
          DEFAULT: "#F4F7FA",
          100: "#FFFFFF",
          200: "#EEF2F6",
          300: "#DDE4EC"
        },
        slate: {
          DEFAULT: "#5B6B82",
          dark: "#33415A"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        "display-ar": ["var(--font-display-ar)", "sans-serif"],
        "body-ar": ["var(--font-body-ar)", "sans-serif"]
      },
      backgroundImage: {
        "circuit": "radial-gradient(circle at 1px 1px, rgba(0,212,229,0.18) 1px, transparent 0)"
      },
      keyframes: {
        traceflow: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" }
        },
        floatslow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        fadeup: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        traceflow: "traceflow 3.5s ease-in-out infinite alternate",
        floatslow: "floatslow 6s ease-in-out infinite",
        fadeup: "fadeup 0.7s ease-out both"
      }
    }
  },
  plugins: []
};
