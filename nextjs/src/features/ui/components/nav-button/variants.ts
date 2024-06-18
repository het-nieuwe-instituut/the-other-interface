import { cva } from 'class-variance-authority'

export const NavButtonVariants = cva(
  [
    '-ml-1', // so it lines out perfectly with other components (typography)
    'relative gap-1 border-0 px-1 align-text-bottom',
    'after:absolute after:bottom-0 after:w-[calc(100%-8px)] after:border-b after:border-solid after:content-[""]',
    'hover:bg-black-100 active:bg-black-100',
    'font-social-large text-center text-[21px] font-normal leading-7 tracking-tight',
  ],
  {
    variants: {
      variant: {
        textPrimary: [
          'h-[27px]',
          'font-social-large text-center text-[21px] font-normal leading-7 tracking-tight',
        ],
        textSecondary: [
          'h-[22px]',
          'font-social-large text-center text-[14px] font-normal leading-[18.20px]',
        ],
        menuPrimary: [
          'h-[27px]',
          'font-social-large text-center text-[14px] font-normal leading-7 tracking-tight',
        ],
        menuSecondary: [
          'h-[27px]',
          'font-social-large text-center text-[21px] font-normal leading-7 tracking-tight',
        ],
        footerPrimary: [
          'h-[27px]',
          'font-social-large text-center text-[21px] font-normal leading-7 tracking-tight',
        ],
        footerSecondary: [
          'h-[35px]',
          'font-social-large text-center text-[32px] font-normal leading-9',
        ],
        metaData: [
          'line-clamp-1 h-[26px] flex-nowrap rounded bg-[rgba(0,0,0,0.20)] px-2 py-1 after:border-none',
          'font-social-large text-center text-sm font-normal leading-[18.20px]',
        ],
        metaDataText: [
          'h-[22px]',
          'font-social-large text-center text-[14px] font-normal leading-4',
        ],
      },
      color: {
        black: 'text-black-100 after:text-black-100 after:border-black',
        white: 'text-white after:border-white after:text-white ',
        inverted: 'text-pink-100 after:border-pink-100 after:text-pink-100',
        invertedPinkHover:
          'hover: hover:text-black-100 text-pink-100 after:border-pink-100 after:text-pink-100 hover:bg-pink-100',
      },
      state: {
        error: [
          'text-white after:border-b-0 hover:bg-red-100',
          'hover:border-error-100 hover:bg-error-100 hover:text-white',
          'active:border-error-100 active:bg-error-100 active:text-white',
        ],
        loading: 'text-blue-100 after:border-b-transparent',
      },
    },
    defaultVariants: {
      color: 'black',
      variant: 'menuPrimary',
    },
  }
)
