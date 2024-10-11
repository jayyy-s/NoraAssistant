/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['PlayfairDisplay', 'serif'],
        nunito: ['Nunito', 'sans-serif']
      },
      colors: {
        'nora-skyblue': '#B0E0E6',
        'nora-cta-skyblue': '#5DADE2',
        'nora-hover-skyblue': '#75C6E9',
        'nora-charcoal': '#333333',
        'nora-offwhite': '#FAFAFA'
      },
      keyframes: {
        'spin-sin': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(1440deg)' }
        }
      },
      animation: {
        'spin-sin': 'spin-sin 2s infinite'
      }
    }
  },
  plugins: []
}
