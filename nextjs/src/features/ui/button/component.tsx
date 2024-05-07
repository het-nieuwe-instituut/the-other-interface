import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { ButtonVariants } from './variants'
import { cn } from '../utils/cn'
import { TypographyVariants } from '../typography/variants'

export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  as?: React.ElementType
  disabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, as = 'button', state, intent, children, ...props }, ref) => {
    const Component = as
    return (
      <Component className={cn(ButtonVariants({ className, intent, state }))} ref={ref} {...props}>
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
              stroke-linecap="round"
              stroke-opacity=".25"
              d="M18.5 10a8.501 8.501 0 0 1-14.51 6.01A8.5 8.5 0 1 1 18.5 10h0Z"
            />
            <path stroke="currentColor" stroke-linecap="round" d="M10 18.5a8.5 8.5 0 1 1 8.5-8.5" />
          </svg>
        ) : (
          <span
            className={TypographyVariants({
              social: 'lg',
              className: 'flex items-center justify-center',
            })}
          >
            {children}
          </span>
        )}
      </Component>
    )
  }
)
Button.displayName = 'Button'

export { Button, ButtonVariants }
