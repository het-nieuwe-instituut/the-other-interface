import { type VariantProps } from 'class-variance-authority'
import NextLink from 'next/link'
import React from 'react'
import { cn } from '../../utils/cn'
import { ButtonVariants } from '../button/variants'
import Loader from '@/features/ui/icons/loading.svg'

interface LinkButtonProps
  extends React.ComponentProps<typeof NextLink>,
    VariantProps<typeof ButtonVariants> {}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, state, intent, children, size, ...props }, ref) => {
    return (
      <NextLink
        className={cn(ButtonVariants({ className, intent, state, size }), 'px-0')}
        ref={ref}
        {...props}
      >
        {state === 'loading' ? <Loader className="animate-spin" /> : children}
      </NextLink>
    )
  }
)
LinkButton.displayName = 'LinkButton'

export { LinkButton, type LinkButtonProps }
