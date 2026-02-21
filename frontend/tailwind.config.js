/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14532D',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#E8DCC8',
          foreground: '#14532D',
        },
        accent: {
          DEFAULT: '#8B6F47',
          foreground: '#FFFFFF',
        },
        background: {
          DEFAULT: '#FDFBF7',
          paper: '#F5F5F0',
        },
        muted: {
          DEFAULT: '#E8DCC8',
          foreground: '#5C4A3A',
        },
        border: '#E8DCC8',
        input: '#E8DCC8',
        ring: '#14532D',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Manrope', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}