/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0E1111',
        surface: '#161A1A',
        borderSubtle: '#232B2B',
        accent: '#34D399',
        textPrimary: '#F3F4F6',
        textMuted: '#9CA3AF',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
