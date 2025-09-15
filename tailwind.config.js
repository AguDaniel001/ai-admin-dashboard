const colors = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  title: "var(--title)",
  text: "var(--text)",
  muted: "var(--text-muted)",
  success: "var(--success)",
  error: "var(--error)",
  warning: "var(--warning)",
  bg: {
    primary: "var(--bg-primary)",
    secondary: "var(--bg-secondary)",
    dark: "var(--bg-primary-dark)",
  },
};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        // scalable + responsive using arrays
        xs: ["0.75rem", { lineHeight: "1rem" }], // text-xs
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // text-sm
        base: ["1rem", { lineHeight: "1.5rem" }], // text-base
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // text-lg
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // text-xl
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // text-2xl
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // text-3xl
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // text-4xl
        "5xl": ["3rem", { lineHeight: "1" }], // text-5xl
      },
      colors,
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
