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
          DEFAULT: '#D6EFD8',
          foreground: '#14532D',
        },
        accent: {
          DEFAULT: '#D97706',
          foreground: '#FFFFFF',
        },
        background: {
          DEFAULT: '#FDFBF7',
          paper: '#F5F5F0',
        },
        muted: {
          DEFAULT: '#D6EFD8',
          foreground: '#3f6212',
        },
        border: '#D6EFD8',
        input: '#D6EFD8',
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