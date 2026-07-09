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
        ink: "#09090B",
        surface: "#111827",
        card: "#0F172A",
        accent: "#2563eb",
        cyan: "#3b82f6",     // mapped to elegant blue
        violet: "#64748b",   // mapped to neutral gray
        acid: "#60a5fa"      // mapped to light blue
      },
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.08)",
        violet: "0 0 24px rgba(100, 116, 139, 0.08)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at center, rgba(59, 130, 246, 0.04) 0 1px, transparent 1px)"
      },
      keyframes: {},
      animation: {}
    }
  },
  plugins: []
};

export default config;
