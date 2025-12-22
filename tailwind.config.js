/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        input: 'var(--input)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        'muted-foreground': 'var(--muted-foreground)',
      },
    },
  },
  plugins: [],
}
