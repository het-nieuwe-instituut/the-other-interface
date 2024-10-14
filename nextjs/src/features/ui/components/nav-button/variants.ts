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
        textPrimary: [
          'h-[27px]',
          'text-center font-social-large text-[21px] font-normal leading-7 tracking-tight',
        ],
        textSecondary: [
          'h-[22px]',
          'text-center font-social-large text-[14px] font-normal leading-[18.20px]',
        ],
        menuPrimary: [
          'h-[27px]',
          'text-center font-social-large text-[14px] font-normal leading-7 tracking-normal',
        ],
        menuSecondary: [
          'h-[27px]',
          'text-center font-social-large text-[21px] font-normal leading-7 tracking-normal',
        ],
        footerPrimary: [
          'h-[27px]',
          'text-center font-social-large text-[21px] font-normal leading-7 tracking-tight',
        ],
        footerSecondary: [
          'h-[35px]',
          'text-center font-social-large text-[32px] font-normal leading-9',
        ],
        metaData: [
          'line-clamp-1 h-[26px] flex-nowrap rounded bg-[rgba(0,0,0,0.20)] px-2 py-1 after:border-none',
          'break-all text-left font-social-large text-sm font-normal',
        ],
        metaDataText: [
          'h-[22px]',
          'text-center font-social-large text-[14px] font-normal leading-4',
        ],
        primary: ['h-[48px]', 'px-[20px] text-[16px]'],
        highlight: [
          'border border-black text-black-100 before:border-black after:border-b-0 after:border-black hover:border-black hover:bg-black-100 hover:text-ivory-100',
          'h-[48px] w-fit p-[20px] text-[16px]',
        ],
      },
      color: {
        black: 'text-black-100 after:border-black after:text-black-100',
        white: 'text-ivory-100 after:border-ivory-100 after:text-ivory-100 ',
        inverted: 'text-pink-100 after:border-pink-100 after:text-pink-100',
        invertedIvoryHover:
          'hover: text-ivory-100 after:border-ivory-100 after:text-pink-100 hover:bg-ivory-100 hover:text-blue-100',
        invertedPaleHover:
          'hover: text-pink-100 after:border-pink-100 after:text-pink-100 hover:bg-transparent hover:text-pink-60 hover:after:border-transparent focus:w-fit focus:bg-pink-100 focus:text-blue-100 focus:outline-none',
        blue: 'border border-blue text-blue-100 before:border-blue after:border-b-0 after:border-blue hover:border-blue hover:bg-blue-100 hover:text-ivory-100',
      },
      state: {
        error: [
          'text-ivory-100 after:border-b-0 hover:bg-red-100',
          'hover:border-error-100 hover:bg-error-100 hover:text-ivory-100',
          'active:border-error-100 active:bg-error-100 active:text-ivory-100',
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
