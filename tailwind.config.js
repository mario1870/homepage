/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      filter: {
        'invert': 'invert(100%)',
      },
      boxShadow: {
        'dark': '0 35px 60px -15px rgba(0, 0, 0, 1)',
        'white': '5px 5px 10px 0px rgba(255, 255, 255, 1)',
      }
    },
  },
  plugins: [],
}

