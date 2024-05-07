import { type VariantProps } from 'class-variance-authority'
import React from 'react'

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
        className={cn(ButtonVariants({ className, intent, state, size }))}
        ref={ref}
        {...props}
      >
        {state === 'loading' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            className="animate-spin"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeOpacity=".25"
              d="M18.5 10a8.501 8.501 0 0 1-14.51 6.01A8.5 8.5 0 1 1 18.5 10h0Z"
            />
            <path stroke="currentColor" strokeLinecap="round" d="M10 18.5a8.5 8.5 0 1 1 8.5-8.5" />
          </svg>
        ) : (
          children
        )}
      </Component>
    )
  }
)
Button.displayName = 'Button'

export { Button, type ButtonProps }
