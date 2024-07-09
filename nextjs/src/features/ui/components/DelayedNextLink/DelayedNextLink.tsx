'use client'
import { LinkProps } from 'next/link'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export type DelayedNextLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { delay: number }
export const DelayedNextLink = React.forwardRef<HTMLAnchorElement, DelayedNextLinkProps>(
  (props: DelayedNextLinkProps, ref) => {
    const { delay, onClick, ...restProps } = props
    const router = useRouter()
    return (
      <NextLink
        {...restProps}
        ref={ref}
        onClick={e => {
          e.preventDefault()
          onClick?.(e)
          const url = e.currentTarget.getAttribute('href')

          if (url) {
            setTimeout(() => {
              router.push(url)
            }, delay)
          }
        }}
      />
    )
  }
)
DelayedNextLink.displayName = 'DelayedNextLink'
