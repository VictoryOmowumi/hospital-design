import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 theme: {
    extend: {
      colors: {
        primary: '#16c64f',
        primaryDark: '#15803d',
        primaryLight: '#4cdf7a',
        offwhite: '#F6F5F1',
        onyx: '#2b2f2e',
        forest: '#15803d',
        sacramento: '#004d40',
      },
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
        display: ['Poppins', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;