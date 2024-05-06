const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        pink: {
          100: 'rgba(255, 230, 221, 1)',
          60: 'rgba(255, 230, 221, .6)',
          25: 'rgba(255, 230, 221, .25)',
        },
        blue: {
          100: 'rgba(0, 81, 255, 1)',
          80: 'rgba(0, 81, 255, .8)',
          50: 'rgba(0, 81, 255, .5)',
          25: 'rgba(0, 81, 255, .25)',
        },
        black: {
          100: 'rgba(0, 0, 0, 1)',
          40: 'rgba(0, 0, 0, .4)',
        },
        ivory: {
          100: 'rgba(249, 246, 238, 1)',
          90: 'rgba(249, 246, 238, .9)',
        },
        error: {
          100: 'rgba(252, 54, 90, 1)',
          50: 'rgba(252, 54, 90, .5)',
          25: 'rgba(252, 54, 90, .25)',
        },
      },
      fontFamily: {
        'times-large': ['Times', 'sans-serif'],
        'impact-large': ['"Impact"', 'sans-serif'],
        'social-large': ['"Social"', 'sans-serif'],
        'social-medium': ['"Social"', 'sans-serif'],
      },
      spacing: {
        0: '0',
        '1px': '1px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
