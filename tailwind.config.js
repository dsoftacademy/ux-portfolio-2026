/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#18181B", // Deep Charcoal
          accent: "#6366F1", // Blue-Violet
        },
        surface: "#F9FAFB",
      },
      fontFamily: {
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-heading)", "ui-sans-serif", "system-ui"],
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        // Optional, consistent scale extensions (Tailwind's default scale still applies)
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
}

