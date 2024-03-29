/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    color: {
      blue: '#f0f080',
    },
    spacing: {
      '0p': '0px',
      '1p': '10px',
      '2p': '20px',
      '3p': '30px',
      '4p': '40px',
      '5p': '50px',
      '6p': '60px',
    },
  },
  plugins: [],
}
