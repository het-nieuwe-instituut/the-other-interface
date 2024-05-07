import { cva } from 'class-variance-authority'

export const ButtonVariants = cva(
  [
    'flex flex-row items-center justify-center gap-2 border border-solid border-primary text-blue-100 transition-colors',
    'hover:border-[rgba(0,0,0,0.2)] hover:bg-blue-100 hover:text-pink-100 ',
    'active:border-[rgba(0,0,0,0.2)] active:bg-blue-100 active:text-pink-100 ',
    'disabled:border-[rgba(0,0,0,0.2)] disabled:bg-transparent disabled:text-[rgba(0,0,0,0.2)]',
    ' text-blue-600',
  ],
  {
    variants: {
      intent: {
        primary: [''],
        secondary: ['h-12'],
        tertiary: [
          'h-12 rounded-lg border border-black-100 bg-white px-5',
          'text-center font-social-large text-base font-normal leading-tight tracking-tight text-black-100',
          'hover:border-black-100 hover:bg-black-100 hover:text-white',
        ],
        inverted: [
          'border-pink-100 text-pink-100',
          'hover:border-pink-100 hover:bg-pink-100 hover:text-blue-100',
        ],
      },
      size: {
        large: ['h-[60px] px-5 font-social-large text-[21px] font-normal leading-7 tracking-tight'],
        small: ['h-12 px-5 font-social-large text-base font-normal leading-tight tracking-tight'],
      },
      state: {
        error: [
          'border-error-100 bg-error-100 text-white',
          'hover:border-error-100 hover:bg-error-100 hover:text-white',
          'active:border-error-100 active:bg-error-100 active:text-white',
        ],
        loading: ['pointer-events-none'],
      },
    },
    defaultVariants: {
      size: 'large',
    },
  }
)
