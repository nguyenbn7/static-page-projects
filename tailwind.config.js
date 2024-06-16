/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}', '!./src/delivery-driver', '!./src/public'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-color) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
        danger: 'rgb(var(--danger) / <alpha-value>)',
      },
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
};
