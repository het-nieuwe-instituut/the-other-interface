import { cva } from 'class-variance-authority'

export const ButtonVariants = cva(
  ['border-primary text-blue-100 border border-solid flex flex-row items-center justify-center'],
  {
    variants: {
      intent: {
        primary: [
          'px-5 transition-colors h-[60px]',
          'hover:border-[rgba(0,0,0,0.2)] hover:text-pink-100 hover:bg-blue-100 ',
          'active:border-[rgba(0,0,0,0.2)] active:text-pink-100 active:bg-blue-100 ',
          'disabled:border-[rgba(0,0,0,0.2)] disabled:text-[rgba(0,0,0,0.2)] disabled:bg-transparent',
        ],
        secondary: 'px-5 py-[13.5px]',
        tertiary: 'px-5 py-[13.5px] rounded-lg',
      },
      state: {
        error: [
          'border-error-100 bg-error-100 text-white',
          'hover:border-error-100 hover:text-white hover:bg-error-100',
          'active:border-error-100 active:text-white active:bg-error-100',
        ],
        loading: ['pointer-events-none'],
      },
    },
    defaultVariants: {},
  }
)
