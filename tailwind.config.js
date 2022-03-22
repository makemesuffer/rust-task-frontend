module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Benzin-Regular', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['wireframe', 'dark'],
  },
};
