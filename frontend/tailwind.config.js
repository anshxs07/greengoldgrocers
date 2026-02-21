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
          DEFAULT: '#F5EFE6',
          foreground: '#14532D',
        },
        accent: {
          DEFAULT: '#7A5C47',
          foreground: '#FFFFFF',
        },
        background: {
          DEFAULT: '#FDFBF7',
          paper: '#F9F6F1',
        },
        muted: {
          DEFAULT: '#F5EFE6',
          foreground: '#6B5D52',
        },
        border: '#E8DED1',
        input: '#E8DED1',
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