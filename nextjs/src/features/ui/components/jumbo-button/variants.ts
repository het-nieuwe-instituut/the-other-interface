import { cva } from 'class-variance-authority'
import { cn } from '../../utils/cn'

export const ButtonVariants = cva(
  [
    cn(
      '-ml-1', // so it lines out perfectly with other components (typography)
      'relative gap-1 border-0 px-1 align-text-bottom',
      'after:absolute after:bottom-0 after:w-[calc(100%-8px)] after:border-b after:border-solid after:content-[""]',
      'hover:bg-black-100 active:bg-black-100',
      'text-center font-social-large text-[21px] font-normal leading-7 tracking-tight',
      'rounded-sm border border-black bg-black-100 flex-wrap hyphen-auto py-[32px] text-white',
      'font-social-large font-bold tracking-[-0.32px]',
      'hover:border hover:border-black hover:bg-ivory-100',
      ' after:border-transparent  [&:not(:last-child)]:mb-4'
    ),
  ],
  {
    variants: {
      state: {
        error: [
          'border-error-100 bg-error-100 text-white',
          'hover:border-error-100 hover:bg-error-100 hover:text-white',
          'active:border-error-100 active:bg-error-100 active:text-white',
        ],
        loading: ['pointer-events-none'],
      },
    },
  }
)
