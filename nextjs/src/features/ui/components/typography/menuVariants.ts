import { cva } from 'class-variance-authority'
import { TypographyVariants } from './variants'

export const MenuTypogrpahyVariants = cva('', {
  variants: {
    default: {
      primary: [
        TypographyVariants({ times: 'lg' }),
        'text-blue-100 ',
        'hover:text-blue-50',
        'focus:bg-blue-100 focus:text-pink-100 focus:outline-blue-100 active:bg-blue-100 active:text-pink-100',
        'disabled:text-[rgba(0,0,0.2)]',
      ],
      secondary: [
        TypographyVariants({ impact: 'sm' }),
        'text-blue-100',
        'hover:text-blue-50',
        'focus:bg-blue-100 focus:text-pink-100 focus:outline-blue-100 active:bg-blue-100 active:text-pink-100',
        'disabled:text-[rgba(0,0,0.2)]',
      ],
      small: [
        TypographyVariants({ socialLarge: 'lg' }),
        'text-blue-100',
        'hover:text-blue-50',
        'focus:outline-blue-100',
        'focus:bg-blue-100 focus:text-pink-100 focus:outline-blue-100 active:bg-blue-100 active:text-pink-100',
        'disabled:text-[rgba(0,0,0.2)]',
        'active:border-b active:border-blue',
      ],
    },
    inverted: {
      primary: [
        TypographyVariants({ times: 'lg' }),
        'text-pink-100 ',
        'hover:text-pink-50',
        'focus:bg-pink-100 focus:text-blue-100 focus:outline-pink-100 active:bg-pink-100 active:text-blue-100',
        'disabled:text-[rgba(0,0,0.2)]',
      ],
      secondary: [
        TypographyVariants({ impact: 'sm' }),
        'text-pink-100',
        'hover:text-pink-50',
        'focus:bg-pink-100 focus:text-blue-100 focus:outline-pink-100 active:bg-pink-100 active:text-blue-100',
        'disabled:text-[rgba(0,0,0.2)]',
      ],
      small: [
        TypographyVariants({ socialLarge: 'lg' }),
        'text-pink-100',
        'hover:text-blue-50',
        'focus:bg-pink-100 focus:text-blue-100 focus:outline-pink-100 active:bg-pink-100 active:text-blue-100',
        'disabled:text-[rgba(0,0,0.2)]',
        'active:border-b active:border-pink-100',
      ],
    },
    menuItem: {
      primary: [
        TypographyVariants({ times: '2xl' }),
        'text-pink-100 ',
        'hover:text-pink-50',
        'focus:bg-pink-100 focus:text-blue-100 focus:outline-blue-100',
        'disabled:text-[rgba(0,0,0.2)]',
      ],
      secondary: [
        TypographyVariants({ impact: 'xl' }),
        'text-pink-100',
        'hover:text-pink-50',
        'focus:bg-blue-100 focus:text-pink-100 focus:outline-pink-100',
        'disabled:text-[rgba(0,0,0.2)]',
      ],
    },
  },
})
