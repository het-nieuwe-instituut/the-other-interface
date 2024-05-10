import React from 'react'

import { cn } from '../../utils/cn'
import { Button, type ButtonProps } from '../button/component'
import { NavButtonVariants } from './variants'

import { VariantProps } from 'class-variance-authority'

export interface NavButtonProps
  extends Omit<ButtonProps, keyof VariantProps<typeof NavButtonVariants>>,
    VariantProps<typeof NavButtonVariants> {}

const NavButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ className, state, variant, ...props }, ref) => {
    return (
      <Button
        className={cn(NavButtonVariants({ className, variant, state }))}
        state={state}
        ref={ref}
        {...props}
      />
    )
  }
)
NavButton.displayName = 'NavButton'

export { NavButton }
