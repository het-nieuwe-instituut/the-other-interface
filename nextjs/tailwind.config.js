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
        0: '0', // 0 px
        '1px': '1px', // 1 px
        1: '0.25rem', // 4 px
        2: '0.5rem', // 8 px
        3: '0.75rem', // 12 px
        4: '1rem', // 16 px
        5: '1.25rem', // 20 px
        6: '1.5rem', // 24 px
        7: '1.75rem', // 28 px
        8: '2rem', // 32 px
        9: '2.25rem', // 36 px
        10: '2.5rem', // 40 px
        12: '3rem', // 48 px
        14: '3.5rem', // 56 px
        16: '4rem', // 64 px
        20: '5rem', // 80 px
        24: '6rem', // 96 px
        28: '7rem', // 112 px
        32: '8rem', // 128 px
        36: '9rem', // 144 px
        40: '10rem', // 160 px
        44: '11rem', // 176 px
        48: '12rem', // 192 px
        52: '13rem', // 208 px
        56: '14rem', // 224 px
        60: '15rem', // 240 px
        64: '16rem', // 256 px
        72: '18rem', // 288 px
        80: '20rem', // 320 px
        96: '24rem', // 384 px
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
