/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_color: '#181F24',
        second_bg: '#11161A',
        primary_color: '#65FF7E',
        icons_color: '#589B63',
        white_color: '#FFFFFF',
        black_color: '#000000',
        border_color: '#243038'
      },
      animation: {
        orbit_one_spin: 'spin 25s linear infinite',
        orbit_two_spin: 'spin_reverse 30s linear infinite',
        orbit_three_spin: 'spin 35s linear infinite',
        float: 'float 3s  linear infinite'
      },
      keyframes: {
        spin_reverse: {
          from: {
            transform: 'rotate(360deg)'
          },
        },
        float: {
          '0%, 100%': {transform: 'traslateY(0)'},
          '50%': {transform: 'translateY(10px)'}
        }
      }
    },
  },
  plugins: [],
}
