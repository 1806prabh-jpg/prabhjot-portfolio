/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      colors: {
        ink: {
          950: '#070b14',
          900: '#0b1220',
          800: '#0f1828',
          700: '#131f33',
          600: '#1f2d44',
        },
        brand: {
          primary: '#38bdf8',
          accent: '#5eead4',
          accent2: '#818cf8',
          border: '#1f2d44',
          text: '#eaf2ff',
          muted: '#9fb2cc',
          surface: '#0f1828',
          surface2: '#131f33',
        },
      },
    },
  },
  plugins: [],
};
