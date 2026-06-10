/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#06070D",
          900: "#0B0D17",
          850: "#101325",
          800: "#161A30",
          700: "#1F2440",
          600: "#2B3158",
        },
        brand: {
          300: "#B4BCFF",
          400: "#8B93FF",
          500: "#6E76FF",
          600: "#5158E8",
          700: "#3F45C4",
        },
        iris: {
          300: "#CDB1FF",
          400: "#B78AFF",
          500: "#A06AFF",
          600: "#8748F0",
        },
        gold: {
          300: "#FCD389",
          400: "#F8B84E",
          500: "#F0A82E",
        },
        jade: {
          400: "#34D399",
          500: "#10B981",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        "glow-brand": "0 0 0 1px rgba(110,118,255,0.35), 0 0 30px -6px rgba(110,118,255,0.5)",
        "glow-iris": "0 0 28px -4px rgba(160,106,255,0.45)",
        "glow-gold": "0 0 24px -4px rgba(248,184,78,0.5)",
        "glow-jade": "0 0 24px -6px rgba(52,211,153,0.5)",
        "card-lift": "0 18px 50px -18px rgba(0,0,0,0.65)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
