/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./error.vue",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /text-(.*)-300/,
    },
    {
      pattern: /bg-(.*)-500\/20/,
    },
    {
      pattern: /ring-(.*)-500\/20/,
    },
  ],
  plugins: [require("@tailwindcss/forms")],
};
