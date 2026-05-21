import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "Inter", "sans-serif"]
      },
      colors: {
        ink: "#050507",
        panel: "rgba(12, 16, 28, 0.68)",
        cyan: "#48e2ff",
        violet: "#8f5cff",
        acid: "#a7ff5c"
      },
      boxShadow: {
        glow: "0 0 32px rgba(72, 226, 255, 0.22)",
        violet: "0 0 42px rgba(143, 92, 255, 0.24)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at center, rgba(72,226,255,.16) 0 1px, transparent 1px)",
        "glass-line": "linear-gradient(135deg, rgba(255,255,255,.22), rgba(255,255,255,.04))"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-12px,0)" }
        },
        gridmove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "64px 64px" }
        }
      },
      animation: {
        scan: "scan 4s linear infinite",
        drift: "drift 5s ease-in-out infinite",
        gridmove: "gridmove 16s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
