import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef4ff',
          100: '#d9e8ff',
          200: '#bcd4ff',
          300: '#8eb7ff',
          400: '#598eff',
          500: '#3063ff',
          600: '#1a42f5',
          700: '#132ee1',
          800: '#1627b5',
          900: '#18268f',
          950: '#111756',
        },
        accent: {
          400: '#38bdf8',
          500: '#0ea5e9',
        },
        surface: {
          DEFAULT: '#0a0b14',
          1: '#0f1120',
          2: '#141629',
          3: '#1a1d35',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-dark': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h1v40H0zm40 0V0h1v40h-1zM0 1h40v1H0zm0 39h40v1H0z' fill='rgba(255,255,255,.03)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(48, 99, 255, 0.25)',
        'glow-sm': '0 0 20px rgba(48, 99, 255, 0.15)',
        'card': '0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 1px 0 rgba(255,255,255,0.1), 0 8px 48px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}

export default config
