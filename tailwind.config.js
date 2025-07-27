/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        secondary: 'var(--secondary)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--button-gradient)',
        'gradient-dark': 'linear-gradient(to bottom, var(--primary), rgb(17, 18, 23))',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
