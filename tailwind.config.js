/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#AE0000',
        'secondary': '#EFEFEF'
      },
      fontSize: {
        '3xl': ['2rem', {
          lineHeight: '1.5',
        }],
        '2xl': ['1.5rem', {
          lineHeight: '1.5',
        }],
        'xl': ['1.25rem', {
          lineHeight: '1.5',
        }],
      },
      lineHeight: {
        'tight': '1.2'
      },
      container: {
        center: true,
        padding: '0.75rem'
      },
    },
  },
  plugins: [],
}

