import { cva } from 'class-variance-authority'

export const ButtonVariants = cva(
  [
    'flex w-max flex-row items-center justify-center gap-2 border border-solid border-blue text-blue-100 transition-colors',
    'hover:border-[rgba(0,0,0,0.2)] hover:bg-blue-100 hover:text-pink-100 ',
    'active:border-[rgba(0,0,0,0.2)] active:bg-blue-100 active:text-pink-100 ',
    'disabled:border-[rgba(0,0,0,0.2)] disabled:bg-transparent disabled:text-[rgba(0,0,0,0.2)]',
    ' text-blue-600',
  ],
  {
    variants: {
      intent: {
        default: [''],
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
      intent: 'default',
    },
  }
)
