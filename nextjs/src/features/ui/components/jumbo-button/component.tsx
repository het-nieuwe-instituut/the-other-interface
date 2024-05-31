import { type VariantProps } from 'class-variance-authority'
import React from 'react'
import Loader from '@/features/ui/icons/loading.svg'
import { cn } from '../../utils/cn'
import { ButtonVariants } from './variants'

interface JumboButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  as?: React.ElementType
  disabled?: boolean
}

const JumboButton = React.forwardRef<HTMLButtonElement, JumboButtonProps>(
  ({ className, as = 'button', state, intent, children, ...props }, ref) => {
    const Component = as
    return (
      <Component
        className={cn(
          ButtonVariants({ className, intent, state }),
          state === 'loading' && 'text-blue-100'
        )}
        ref={ref}
        {...props}
      >
        {state === 'loading' ? <Loader className={'animate-spin'} /> : children}
      </Component>
    )
  }
)
JumboButton.displayName = 'JumboButton'

export { JumboButton, type JumboButtonProps }
