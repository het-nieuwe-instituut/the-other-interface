import { cva } from 'class-variance-authority'

export const IconButtonVariants = cva('px-0', {
  variants: {
    intent: {
      ghost: ['border-transparent'],
    },
    size: {
      large: ['size-[60px]'],
      small: ['size-12'],
    },
  },
  defaultVariants: {
    size: 'large',
  },
})
