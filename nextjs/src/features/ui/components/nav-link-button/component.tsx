import React from 'react'
import { cn } from '../../utils/cn'
import { VariantProps } from 'class-variance-authority'
import { LinkButton, LinkButtonProps } from '../link-button/component'
import { NavButtonVariants } from '../nav-button/variants'

export interface NavLinkButtonProps
  extends Omit<LinkButtonProps, keyof VariantProps<typeof NavButtonVariants>>,
    VariantProps<typeof NavButtonVariants> {}

const NavLinkButton = React.forwardRef<HTMLAnchorElement, NavLinkButtonProps>(
  ({ className, state, color, variant, ...props }, ref) => {
    return (
      <LinkButton
        className={cn(NavButtonVariants({ variant, color, state, className }))}
        state={state}
        ref={ref}
        {...props}
      />
    )
  }
)
NavLinkButton.displayName = 'NavLinkButton'

export { NavLinkButton }
