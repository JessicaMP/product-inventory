/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#6B99C3'
        },
        primary: {
          500: '#16354D'
        },
        neutral: {
          200: '#E4E5EA',
          500: '#D2D2D4'
        }
      }
    }
  },
  plugins: []
}
