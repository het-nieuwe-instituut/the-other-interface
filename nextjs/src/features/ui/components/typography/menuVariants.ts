import { cva } from 'class-variance-authority'
import { TypographyVariants } from './variants'

export const MenuTypogrpahyVariants = cva('', {
  variants: {
    default: {
      primary: [
        TypographyVariants({ timesDot: 'lg' }),
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
        'self-stretch not-italic leading-[130%_]',
        'font-social-large sm:text-[21px] tracking-[0.21px] text-[16px]',
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
        'self-stretch not-italic leading-[130%_]',
        'font-social-large sm:text-[21px] tracking-[0.21px] text-[16px]',
        'text-pink-100',
        'hover:text-blue-50',
        'focus:bg-pink-100 focus:text-blue-100 focus:outline-pink-100 active:bg-pink-100 active:text-blue-100',
        'disabled:text-[rgba(0,0,0.2)]',
        'active:border-b active:border-pink-100',
      ],
    },
    menuItem: {
      primary: [
        'font-times-dot text-[70px] leading-[120%] tracking-[-1.92px] md:text-[84px] lg:text-[96px] md:leading-[100%_]',
        'text-pink-100 ',
        'hover:text-pink-50',
        'focus:bg-pink-100 focus:text-blue-100 focus:outline-blue-100',
        'disabled:text-[rgba(0,0,0.2)]',
      ],
      secondary: [
        'font-impact-large text-[55px] leading-[120%] tracking-[-0.8px] md:text-[62px] lg:text-[80px] md:leading-[100%_]',
        'text-pink-100',
        'hover:text-pink-50',
        'focus:bg-blue-100 focus:text-pink-100 focus:outline-pink-100',
        'disabled:text-[rgba(0,0,0.2)]',
      ],
    },
  },
})
