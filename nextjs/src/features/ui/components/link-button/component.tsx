import { type VariantProps } from 'class-variance-authority'
import NextLink from 'next/link'
import React from 'react'
import { cn } from '../../utils/cn'
import { ButtonVariants } from '../button/variants'
import Loader from '@/features/ui/icons/loading.svg'
import { isExternalURL } from '@/features/shared/utils/links'

interface LinkButtonProps
  extends React.ComponentProps<typeof NextLink>,
    VariantProps<typeof ButtonVariants> {}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, state, intent, children, size, ...props }, ref) => {
    const { href } = props
    const isExternal = isExternalURL(href.toString(), process.env.parsed.NEXT_PUBLIC_URL ?? '')

    return (
      <NextLink
        className={cn(ButtonVariants({ className, intent, state, size }))}
        ref={ref}
        {...props}
        target={isExternal ? '_blank' : ''}
      >
        {state === 'loading' ? <Loader className="animate-spin" /> : children}
      </NextLink>
    )
  }
)
LinkButton.displayName = 'LinkButton'

export { LinkButton, type LinkButtonProps }
