/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      colors: {
        background: "#f7f7f7",
        foreground: "#1a1a1a",
        muted: "#6b6b6b",
        accent: "#282834",
        "accent-foreground": "#ffffff",
        border: "rgba(0, 0, 0, 0.08)",
        "border-strong": "rgba(0, 0, 0, 0.15)",
        "card-dark": "#282834",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        pill: "999px",
      },
    },
  },
  plugins: [],
};
