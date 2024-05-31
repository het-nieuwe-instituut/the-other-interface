import React from 'react'

import { cn } from '../../utils/cn'
import { Button, type ButtonProps } from '../button/component'
import { NavButtonVariants } from './variants'

import { VariantProps } from 'class-variance-authority'
import { LinkButton, LinkButtonProps } from '../link-button/component'

export interface NavButtonProps
  extends Omit<ButtonProps, keyof VariantProps<typeof NavButtonVariants>>,
    VariantProps<typeof NavButtonVariants> {}

const NavButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ className, state, color, variant, ...props }, ref) => {
    return (
      <Button
        className={cn(NavButtonVariants({ className, variant, color, state }))}
        state={state}
        ref={ref}
        {...props}
      />
    )
  }
)
NavButton.displayName = 'NavButton'

export interface NavLinkButtonProps
  extends Omit<LinkButtonProps, keyof VariantProps<typeof NavButtonVariants>>,
    VariantProps<typeof NavButtonVariants> {}

const NavLinkButton = React.forwardRef<HTMLAnchorElement, NavLinkButtonProps>(
  ({ className, state, color, variant, href, ...props }, ref) => {
    return (
      <LinkButton
        className={cn(NavButtonVariants({ className, variant, color, state }))}
        state={state}
        ref={ref}
        href={href}
        {...props}
      />
    )
  }
)
NavLinkButton.displayName = 'NavLinkButton'

export { NavButton, NavLinkButton }
