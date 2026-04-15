import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.75rem",
        lg: "2.5rem",
        xl: "3.5rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        /* Client-spec palette */
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        navy: "rgb(var(--color-navy) / <alpha-value>)",
        royal: "rgb(var(--color-royal) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        "off-white": "rgb(var(--color-off-white) / <alpha-value>)",

        /* Semantic aliases — map the old token names onto the client palette
           so existing components keep working without churn */
        bone: "rgb(var(--color-off-white) / <alpha-value>)",
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        cream: "rgb(var(--color-white) / <alpha-value>)",
        ember: "rgb(var(--color-primary) / <alpha-value>)",
        rust: "rgb(var(--color-royal) / <alpha-value>)",
        fog: "rgb(var(--color-mist) / <alpha-value>)",
        charcoal: "rgb(var(--color-charcoal) / <alpha-value>)",

        /* Legacy brand.* aliases so /about, /services, /blog, /faq still compile */
        brand: {
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          navy: "rgb(var(--color-navy) / <alpha-value>)",
          royal: "rgb(var(--color-royal) / <alpha-value>)",
          accent: "rgb(var(--color-accent) / <alpha-value>)",
          ink: "rgb(var(--color-ink) / <alpha-value>)",
          surface: "rgb(var(--color-white) / <alpha-value>)",
          paper: "rgb(var(--color-off-white) / <alpha-value>)",
          mist: "rgb(var(--color-mist) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
        mono: ["var(--font-body)"],
        serif: ["var(--font-serif)"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        shell: "var(--radius-shell)",
      },
      boxShadow: {
        soft: "0 30px 60px -40px rgba(0, 45, 87, 0.35)",
        lift: "0 40px 80px -40px rgba(0, 45, 87, 0.45)",
        halo: "0 0 0 1px rgba(0, 45, 87, 0.08), 0 30px 60px -36px rgba(24, 0, 172, 0.45)",
        card: "0 1px 0 rgba(0, 45, 87, 0.04), 0 12px 28px -20px rgba(0, 45, 87, 0.22)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -8px, 0)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
