import React from 'react'

import { Button, type ButtonProps } from '../button/component'
import { IconButtonVariants } from './variants'

import { VariantProps } from 'class-variance-authority'
import { LinkButton, LinkButtonProps } from '../link-button/component'

export interface IconButtonProps
  extends Omit<ButtonProps, keyof VariantProps<typeof IconButtonVariants>>,
    VariantProps<typeof IconButtonVariants> {
  icon: React.ReactNode
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, intent, size, icon, ...props }, ref) => {
    return (
      <Button className={IconButtonVariants({ className, intent, size })} ref={ref} {...props}>
        <span>{icon}</span>
      </Button>
    )
  }
)
IconButton.displayName = 'IconButton'

export interface IconLinkButtonProps
  extends Omit<LinkButtonProps, keyof VariantProps<typeof IconButtonVariants>>,
    VariantProps<typeof IconButtonVariants> {
  icon: React.ReactNode
}

export const IconLinkButton = React.forwardRef<HTMLAnchorElement, IconLinkButtonProps>(
  ({ className, intent, size, ...props }, ref) => {
    return (
      <LinkButton className={IconButtonVariants({ className, intent, size })} ref={ref} {...props}>
        <span>{props.icon}</span>
      </LinkButton>
    )
  }
)
IconLinkButton.displayName = 'IconLinkButton'
