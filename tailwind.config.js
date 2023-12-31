// /** @type {import('tailwindcss').Config} */
// export const purge = ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'];
// export const content = [];
// export const theme = {
//   extend: {},
// };
// export const plugins = [];


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
}

