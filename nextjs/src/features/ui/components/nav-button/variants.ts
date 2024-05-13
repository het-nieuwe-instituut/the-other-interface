import { cva } from 'class-variance-authority'

export const NavButtonVariants = cva(
  [
    '-ml-1', // so it lines out perfectly with other components (typography)
    'relative gap-1 border-0 px-1 align-text-bottom',
    'after:absolute after:bottom-0 after:w-[calc(100%-8px)] after:border-b after:border-solid after:content-[""]',
    'hover:bg-black-100 active:bg-black-100',
    'text-center font-social-large text-[21px] font-normal leading-7 tracking-tight',
  ],
  {
    variants: {
      variant: {
        menuPrimary: ['h-[43px]'],
        menuSecondary: [
          'h-[34px]',
          'text-center font-social-large text-sm font-normal leading-[18.20px]',
        ],
        footerPrimary: [
          'h-[27px]',
          'text-center font-social-large text-[21px] font-normal leading-7 tracking-tight',
        ],
        footerSecondary: [
          'h-[35px]',
          'text-center font-social-large text-[32px] font-normal leading-9',
        ],
      },
      color: {
        black: 'text-black-100 after:border-black after:text-black-100',
        white: 'text-white after:border-white after:text-white ',
        inverted: 'text-pink-100 after:border-pink-100 after:text-pink-100',
      },
      state: {
        error: [
          'text-white after:border-b-0 hover:bg-red-100',
          'hover:border-error-100 hover:bg-error-100 hover:text-white',
          'active:border-error-100 active:bg-error-100 active:text-white',
        ],
        loading: 'text-blue-100',
      },
    },
    defaultVariants: {
      color: 'black',
      variant: 'menuPrimary',
    },
  }
)
