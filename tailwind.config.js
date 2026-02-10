/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0A0A0A',
        'cyber-gray': '#1E1E1E',
        'neon-cyan': '#00FFE0',
        'neon-pink': '#FF00FF',
        'neon-green': '#39FF14',
      },
      fontFamily: {
        gaming: ['"Orbitron"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
