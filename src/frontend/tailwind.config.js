import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#262B38",
        input: "#262B38",
        ring: "#00E5FF",
        background: "#0A0C12",
        foreground: "#EDEFF6",
        primary: {
          DEFAULT: "#00E5FF",
          foreground: "#0A0C12",
        },
        secondary: {
          DEFAULT: "#161A24",
          foreground: "#D3D7E0",
        },
        destructive: {
          DEFAULT: "#E5484D",
          foreground: "#F5F5F5",
        },
        muted: {
          DEFAULT: "#161A24",
          foreground: "#7E8494",
        },
        accent: {
          DEFAULT: "#00E5FF",
          foreground: "#0A0C12",
        },
        popover: {
          DEFAULT: "#11141C",
          foreground: "#EDEFF6",
        },
        card: {
          DEFAULT: "#11141C",
          foreground: "#EDEFF6",
        },
        chart: {
          1: "#00E5FF",
          2: "#2DD4A7",
          3: "#A78BFA",
          4: "#F5C542",
          5: "#F08A5D",
        },
        sidebar: {
          DEFAULT: "#0E1118",
          foreground: "#EDEFF6",
          primary: "#00E5FF",
          "primary-foreground": "#0A0C12",
          accent: "#161A24",
          "accent-foreground": "#D3D7E0",
          border: "#262B38",
          ring: "#00E5FF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        subtle: "0 1px 2px 0 rgba(0,0,0,0.4), 0 1px 3px 0 rgba(0,0,0,0.3)",
        elevated:
          "0 10px 30px -12px rgba(0,0,0,0.6), 0 4px 12px -6px rgba(0,0,0,0.4)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) both",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
