/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:    '#7C3AED',
          'purple-dark': '#1E0A3C',
          'purple-light': '#F5F3FF',
          'purple-muted': '#C4B5FD',
          sky:       '#0EA5E9',
          'sky-dark': '#0C1A2E',
          'sky-light': '#F0F9FF',
          'sky-muted': '#94A3B8',
        },
      },
    },
  },
  plugins: [],
}