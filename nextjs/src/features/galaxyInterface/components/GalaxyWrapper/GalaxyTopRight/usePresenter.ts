import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export const usePresenter = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const lang = searchParams?.get('lang')

  const changeLanguage = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    locale: string
  ) => {
    event.preventDefault()
    const current = new URLSearchParams(Array.from(searchParams?.entries() ?? []))
    current.set('lang', locale)
    const search = current.toString()
    const query = search ? `?${search}` : ''
    router.push(`${pathname}${query}`)
    event.currentTarget.blur()
  }

  return {
    lang,
    changeLanguage,
  }
}
