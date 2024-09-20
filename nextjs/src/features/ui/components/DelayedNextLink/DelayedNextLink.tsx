'use client'
import { PulseContext } from '@/features/galaxyInterface/components/Pulse/Pulse'
import uniqueId from 'lodash/uniqueId'
import NextLink, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useRef } from 'react'

export type DelayedNextLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { delay: number; disabled?: boolean }

export const DelayedNextLink = React.forwardRef<HTMLAnchorElement, DelayedNextLinkProps>(
  (props: DelayedNextLinkProps, ref) => {
    const { delay, onClick, disabled = false, ...restProps } = props
    const router = useRouter()
    const { stop, start } = useContext(PulseContext)
    const uniqueIdRef = React.useRef<string>(uniqueId())
    const timeout = useRef<NodeJS.Timeout>()
    useEffect(() => {
      const ref = uniqueIdRef.current
      return () => {
        stop(ref)
        timeout.current && clearTimeout(timeout.current)
      }
    }, [stop])
    return (
      <NextLink
        {...restProps}
        ref={ref}
        onClick={async e => {
          e.preventDefault()
          if (!disabled) {
            onClick?.(e)
            const url = e.currentTarget.getAttribute('href')
            if (url) {
              router.prefetch(url)
              setTimeout(() => {
                router.push(url)
                timeout.current = setTimeout(() => {
                  start(uniqueIdRef.current)
                }, delay + 200)
              }, delay)
            }
          }
        }}
      />
    )
  }
)

export const useDelayedNextRoutePush = (delay: number) => {
  const router = useRouter()
  const { stop, start } = useContext(PulseContext)
  const uniqueIdRef = React.useRef<string>(uniqueId())
  const timeout = useRef<NodeJS.Timeout>()
  useEffect(() => {
    const ref = uniqueIdRef.current
    return () => {
      stop(ref)
      timeout.current && clearTimeout(timeout.current)
    }
  }, [stop])

  return (url: string) => {
    setTimeout(() => {
      router.push(url)
      timeout.current = setTimeout(() => {
        start(uniqueIdRef.current)
      }, delay + 200)
    }, delay)
  }
}
DelayedNextLink.displayName = 'DelayedNextLink'
