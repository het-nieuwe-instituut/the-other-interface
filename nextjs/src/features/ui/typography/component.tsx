import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { TypographyVariants } from './variants'
import { cn } from '../utils/cn'

export interface TypographyProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof TypographyVariants> {
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, impact, social, times, as = 'p', children, ...props }, ref) => {
    const Component = as
    return (
      <Component
        className={cn(TypographyVariants({ className, impact, social, times }))}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Typography.displayName = 'Typography'

export { Typography }
