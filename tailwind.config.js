/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        muted: 'rgba(255, 255, 255, 0.6)',
      },
      animation: {
        'glow-blip': 'glow-blip 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-blip': {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)',
            filter: 'brightness(1)'
          },
          '50%': { 
            opacity: '0.6',
            transform: 'scale(1.02)',
            filter: 'brightness(1.3)'
          },
        }
      }
    },
  },
  plugins: [],
}
