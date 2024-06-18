import { type VariantProps } from 'class-variance-authority'
import React from 'react'
import Loader from '@/features/ui/icons/loading.svg'
import { cn } from '../../utils/cn'
import { ButtonVariants } from './variants'

interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  as?: React.ElementType
  disabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, as = 'button', state, intent, children, size, ...props }, ref) => {
    const Component = as
    return (
      <Component
        className={cn(
          ButtonVariants({ className, intent, state, size }),
          state === 'loading' && 'text-blue-100'
        )}
        ref={ref}
        {...props}
      >
        {state === 'loading' ? (
          <Loader
            className={cn(
              'size-6',
              size === 'small' && 'size-5',
              size === 'xsmall' && 'size-5',
              'animate-spin'
            )}
          />
        ) : (
          children
        )}
      </Component>
    )
  }
)
Button.displayName = 'Button'

export { Button, type ButtonProps }
