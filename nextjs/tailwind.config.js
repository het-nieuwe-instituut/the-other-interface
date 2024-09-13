const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      screens: {
        carouselDesktop: '1500px',
      },
      keyframes: {
        // PAGINATION
        // current
        paginationForward: {
          '0%': { filter: 'blur(0px)', transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(var(--scale-max))', opacity: 0 },
        },
        paginationBackward: {
          '0%': { filter: 'blur(1)', transform: 'scale(1)' },
          '100%': { filter: 'blur(var(--blur))', transform: 'scale(var(--scale-min))' },
        },
        paginationHideToShow: {
          initial: { opacity: 0 },
          from: { opacity: 0, transform: 'scale(var(--scale-max))' },
          to: { opacity: 1, filter: 'blur(0px)', transform: 'scale(1)' },
        },

        // next
        nextPaginationHideToShow: {
          from: { opacity: 0, filter: 'blur(var(--blur))', transform: 'scale(var(--scale-hide))' },
          to: { opacity: 1, filter: 'blur(0px)', transform: 'scale(var(--scale-min))' },
        },
        nextPaginationHideToBlur: {
          from: { opacity: 0, filter: 'blur(var(--blur))', transform: 'scale(var(--scale-hide))' },
          to: { opacity: 1, filter: 'blur(var(--blur))', transform: 'scale(var(--scale-min))' },
        },
        nextPaginationToUnblur: {
          '0%': { filter: 'blur(var(--blur))', transform: 'scale(var(--scale-min))' },
          '100%': { filter: 'blur(0px)', transform: 'scale(1)' },
        },
        nextPaginationFromBlurredToHide: {
          from: { opacity: 1, filter: 'blur(var(--blur))', transform: 'scale(var(--scale-min))' },
          to: {
            opacity: 0,
            filter: 'blur(calc(var(--blur)*2))',
            transform: 'scale(var(--scale-hide))',
          },
        },

        // others
        toBlurAndHide: {
          from: { opacity: 1, filter: 'blur(0px)' },
          to: { opacity: 0, filter: 'blur(10px)' },
        },
        fromHideToShow: {
          initial: { opacity: 0 },
          from: { opacity: 0, filter: 'blur(10px)' },
          to: { opacity: 1, filter: 'blur(0px)' },
        },
        fromHideToShowExtraBlur50px: {
          initial: { opacity: 0 },
          from: { opacity: 0, filter: 'blur(50px)' },
          to: { opacity: 1, filter: 'blur(0px)' },
        },
        fromHideToBlur: {
          initial: { opacity: 0 },
          from: { opacity: 0, filter: 'blur(10px)' },
          to: { opacity: 1, filter: 'blur(10px)' },
        },
        fromHideToBlur50px: {
          initial: { opacity: 0 },
          from: { opacity: 0, filter: 'blur(50px)' },
          to: { opacity: 1, filter: 'blur(50px)' },
        },
        fromBlurredToHide: {
          from: { opacity: 1, filter: 'blur(10px)' },
          to: { opacity: 0, filter: 'blur(10px)' },
        },
        fromBlurredToHide50px: {
          from: { opacity: 1, filter: 'blur(50px)' },
          to: { opacity: 0, filter: 'blur(50px)' },
        },
        toBlur: {
          '0%': { filter: 'blur(0px)' },
          '100%': { filter: 'blur(10px)' },
        },
        toUnblur: {
          '0%': { filter: 'blur(10px)' },
          '100%': { filter: 'blur(0px)' },
        },
        toUnblur50px: {
          '0%': { filter: 'blur(50px)' },
          '100%': { filter: 'blur(0px)' },
        },
        toFadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        toFadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        toScaleFullPage: {
          '0%': { transform: 'scale(1.1)', opacity: 1 },
          '75%': { transform: 'scale(3)', opacity: 0.5 },
          '100%': { transform: 'scale(4)', opacity: 0 },
        },
        toCenterOfGalaxy: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform:
              'translate(var(--animation-translate-x), var(--animation-translate-y)) scale(var(--animation-scale))',
          },
        },
      },
      transitionTimingFunction: {
        'toi-cubic-bezier': 'cubic-bezier(0.25, 0.1, 0.25, 0.1)',
      },
      gridTemplateAreas: {
        'editorial-large': ['left right', 'bottom right'],
        'editorial-small': ['right', 'left', 'bottom'],
      },
      lineClamp: {
        7: '7',
        8: '8',
      },
      textShadow: {
        DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        surface: {
          lod: 'rgba(242, 233, 200, 1)',
          'lod-dark': 'rgba(118, 87, 43, 1)',

          asterisk: 'rgba(222, 229, 236, 1)',
          'asterisk-dark': 'rgba(111, 122, 156, 1)',
        },
        pink: {
          100: 'rgba(255, 230, 221, 1)',
          60: 'rgba(255, 230, 221, .6)',
          50: 'rgba(255, 230, 221, .5)',
          25: 'rgba(255, 230, 221, .25)',
        },
        blue: {
          100: 'rgba(0, 81, 255, 1)',
          95: 'rgba(0, 81, 255, .95)',
          80: 'rgba(0, 81, 255, .8)',
          50: 'rgba(0, 81, 255, .5)',
          25: 'rgba(0, 81, 255, .25)',
        },
        black: {
          100: 'rgba(0, 0, 0, 1)',
          40: 'rgba(0, 0, 0, .4)',
          20: 'rgba(0, 0, 0, .2)',
        },
        ivory: {
          100: 'rgba(249, 246, 238, 1)',
          90: 'rgba(249, 246, 238, .9)',
          60: 'rgba(242, 237, 223, 0.6)',
        },
        error: {
          100: 'rgba(252, 54, 90, 1)',
          50: 'rgba(252, 54, 90, .5)',
          25: 'rgba(252, 54, 90, .25)',
        },
      },
      borderColor: {
        blue: '#0051FF',
        blue50: 'rgba(0, 81, 255, .5)',
        black: '#000000',
        brown: '#49280B',
      },
      fontFamily: {
        'arial-reboot-lines': ['"Arial Reboot Lines"', 'sans-serif'],
        'times-niw-rimmin': ['"Tim Niw Rimmin"', 'sans-serif'],
        'times-niw-rimmin-crisp': ['"Tim Niw Rimmin-crisp"', 'sans-serif'],
        'times-dot': ['"Times Dot"', 'sans-serif'],
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
    require('tailwind-scrollbar-hide'),
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
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}
