import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from './utils/cn'

const TitleVariants = cva('', {
  variants: {
    intent: {
      default: 'text-7xl',
    },
    variant: {
      impact: 'font-impact-large',
    },
  },
  defaultVariants: {
    intent: 'default',
    variant: 'impact',
  },
})

export interface TextProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof TitleVariants> {
  as?: React.ElementType
}

const Title = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, intent, as = 'p', children, ...props }, ref) => {
    const Component = as
    return (
      <Component className={cn(TitleVariants({ variant, intent, className }))} ref={ref} {...props}>
        {children}
      </Component>
    )
  }
)
Title.displayName = 'Title'

export { Title, TitleVariants }
