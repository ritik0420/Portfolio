/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          DEFAULT: '#0f0f0f',
          50: '#141414',
          100: '#1a1a1a',
          200: '#242424',
        },
        brand: {
          deep: '#7f1d1d',
          bright: '#ef4444',
          glow: 'rgba(239, 68, 68, 0.45)',
        },
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(239, 68, 68, 0.35)',
        'glow-sm': '0 0 40px -8px rgba(239, 68, 68, 0.25)',
        card: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial-red': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(127, 29, 29, 0.45), transparent 55%)',
        'gradient-mesh': 'linear-gradient(135deg, #0f0f0f 0%, #1a0a0a 40%, #0f0f0f 100%)',
      },
    },
  },
  plugins: [],
}
