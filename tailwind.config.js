/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],  theme: {
    extend: {
      keyframes: {
        enterOpacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 'var(--opacity, 0.1)' },
        },
        enterRight: {
          '0%': { 'margin-right': 'var(--mr-start, -50px)' },
          '100%': { 'margin-right': 'var(--mr-end, 0px)' },
        },
      }
    },
  },
  plugins: [],
}

