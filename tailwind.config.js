/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./**/*.{html,css}"],
    theme: {
      extend: {
        scale: {
          101: "1.01", // This creates a scale effect of 1.02 (2% larger)
        },
      },
    },
    variants: {
      scale: ["responsive", "hover", "focus", "active", "group-hover"],
    },
    plugins: [],
  };