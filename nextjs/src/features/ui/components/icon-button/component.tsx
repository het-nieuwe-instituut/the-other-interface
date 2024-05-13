import React from 'react'

import { Button, type ButtonProps } from '../button/component'
import { IconButtonVariants } from './variants'

import { VariantProps } from 'class-variance-authority'

export interface IconButtonProps
  extends Omit<ButtonProps, keyof VariantProps<typeof IconButtonVariants>>,
    VariantProps<typeof IconButtonVariants> {
  icon: React.ReactNode
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <Button className={IconButtonVariants({ className, intent, size })} ref={ref} {...props}>
        <span>{props.icon}</span>
      </Button>
    )
  }
)
IconButton.displayName = 'IconButton'

export { IconButton }
