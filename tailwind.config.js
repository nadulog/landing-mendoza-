/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        abyss: { DEFAULT: '#0B2A3C', 950: '#051520', 900: '#071C29', 800: '#0B2A3C', 700: '#123B52', 600: '#1A4D69' },
        lake: { DEFAULT: '#22B5AC', 300: '#7FDCD4', 400: '#45C7BE', 500: '#22B5AC', 600: '#178F88' },
        sand: { DEFAULT: '#E8D9BF', 50: '#FBF8F2', 100: '#F5EEE1', 200: '#EDE2CE', 300: '#E8D9BF', 400: '#D4BE96', 500: '#B99B68' },
        olive: { DEFAULT: '#6B7A3A', 400: '#8A9A55', 500: '#6B7A3A', 600: '#55612D' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { widest2: '0.3em' },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(7, 28, 41, 0.35)',
        glow: '0 10px 40px -10px rgba(34, 181, 172, 0.6)',
      },
    },
  },
  plugins: [],
}
