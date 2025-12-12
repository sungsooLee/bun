/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Pretendard Variable', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#10b981',
          dark: '#0f766e',
          light: '#6ee7b7',
        },
      },
    },
  },
  plugins: [],
}
