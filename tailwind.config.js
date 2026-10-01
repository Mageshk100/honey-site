/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        honey: {
          50: '#fffdf5',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          normal: '#f7941d',
          dark: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          deep: '#451a03'
        },
        warm: {
          cream: '#FFFDF9',
          bg: '#FBF8F1',
          surface: '#F6F1E6',
          border: '#E8DEC8',
          text: '#2C1E11',
          muted: '#766754'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'honey': '0 10px 25px -5px rgba(247, 148, 29, 0.15), 0 8px 10px -6px rgba(247, 148, 29, 0.1)',
        'honey-lg': '0 20px 35px -5px rgba(247, 148, 29, 0.25), 0 10px 15px -5px rgba(247, 148, 29, 0.15)',
        'soft': '0 4px 20px -2px rgba(44, 30, 17, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
