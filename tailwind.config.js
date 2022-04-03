module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    minWidth: {
      '1/2': '50%',
    },
    maxWidth: false,
    extend: {},
    screens: {
      md: '768px',
      // => @media (min-width: 768px) { ... }
    },
  },
  plugins: [],
};
