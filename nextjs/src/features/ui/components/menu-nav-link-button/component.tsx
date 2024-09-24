'use client'
import React from 'react'
import { cn } from '../../utils/cn'
import { VariantProps } from 'class-variance-authority'
import { LinkButton, LinkButtonProps } from '../link-button/component'
import { NavButtonVariants } from '../nav-button/variants'
import { useDispatch } from 'react-redux'
import { sharedActions } from '@/features/shared/stores/shared.store'

export interface MenuNavLinkButtonProps
  extends Omit<LinkButtonProps, keyof VariantProps<typeof NavButtonVariants>>,
    VariantProps<typeof NavButtonVariants> {}

const MenuNavLinkButton = React.forwardRef<HTMLAnchorElement, MenuNavLinkButtonProps>(
  ({ className, state, color, variant, ...props }, ref) => {
    const dispatch = useDispatch()

    return (
      <LinkButton
        className={cn(NavButtonVariants({ variant, color, state, className }))}
        state={state}
        ref={ref}
        onClick={() => dispatch(sharedActions.menuOpen({ isMenuOpen: false }))}
        {...props}
      />
    )
  }
)
MenuNavLinkButton.displayName = 'MenuNavLinkButton'

export { MenuNavLinkButton }
