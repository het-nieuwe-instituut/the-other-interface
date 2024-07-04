'use client'
import { LinkProps } from 'next/link'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'

export const DelayedNextLink = (
  props: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { delay: number }
) => {
  const { delay, onClick, ...restProps } = props
  const router = useRouter()
  return (
    <NextLink
      {...restProps}
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
