/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
        xl: "3rem",
      },
      screens: {
        lg: "1200px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        // 现代极简白底配色
        bg: "#FFFFFF",
        "bg-soft": "#F6F8FA",
        "bg-elevated": "#F0F3F6",
        border: "#E1E4E8",
        "border-soft": "#EBEDF0",
        ink: "#1F2328",
        "ink-soft": "#57606A",
        "ink-faint": "#8C959F",
        accent: "#0969DA", // 现代蓝
        "accent-deep": "#0550AE",
        "accent-soft": "#DDF0FF",
        cyan: "#1B7C83",
        warn: "#BF8700",
        danger: "#CF222E",
        purple: "#8250DF",
        pink: "#DB61A2",
        orange: "#BC4C00",
        green: "#1A7F37",
        // 语法高亮（浅色）
        "syntax-keyword": "#CF222E",
        "syntax-string": "#0A3069",
        "syntax-comment": "#6E7781",
        "syntax-fn": "#8250DF",
        "syntax-num": "#0550AE",
        "syntax-type": "#953800",
      },
      fontFamily: {
        sans: ['"Inter Variable"', "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono Variable"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "section-xl": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.2, 0.65, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "bar-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.2, 0.65, 0.3, 1) both",
        "fade-in": "fade-in 0.9s ease-out both",
        "bar-grow": "bar-grow 1s cubic-bezier(0.2, 0.65, 0.3, 1) both",
      },
      boxShadow: {
        card: "0 1px 2px rgba(31, 35, 40, 0.04), 0 4px 12px -4px rgba(31, 35, 40, 0.08)",
        "card-hover": "0 4px 12px rgba(31, 35, 40, 0.08), 0 12px 28px -8px rgba(9, 105, 218, 0.15)",
      },
    },
  },
  plugins: [],
};
