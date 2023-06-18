/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
  {pattern: /grid-col-*/},
{pattern: /bg-*/}
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
