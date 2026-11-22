/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FBFBF9',
          card: '#FFFFFF',
          text: '#17151B',
          muted: '#68636D',
          accent: '#BDF208',
          accentHover: '#AEE200',
          accentLight: '#F7FDE6',
          border: '#E8E7E3',
          surface: '#F4F4F0'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(23, 21, 27, 0.04), 0 1px 2px -1px rgba(23, 21, 27, 0.04)',
        'premium': '0 10px 30px -5px rgba(23, 21, 27, 0.06), 0 4px 12px -2px rgba(23, 21, 27, 0.03)',
        'elevated': '0 20px 40px -15px rgba(23, 21, 27, 0.08), 0 8px 16px -4px rgba(23, 21, 27, 0.04)',
        'lime-glow': '0 0 25px rgba(189, 242, 8, 0.45)',
        'lime-badge': '0 0 15px rgba(189, 242, 8, 0.3)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseLime: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.98)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        }
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-lime': 'pulseLime 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
