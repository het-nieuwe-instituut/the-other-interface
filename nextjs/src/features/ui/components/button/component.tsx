import { type VariantProps } from 'class-variance-authority'
import React from 'react'
import Loader from './loader.svg'
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
        {state === 'loading' ? <Loader className="animate-spin" /> : children}
      </Component>
    )
  }
)
Button.displayName = 'Button'

export { Button, type ButtonProps }
