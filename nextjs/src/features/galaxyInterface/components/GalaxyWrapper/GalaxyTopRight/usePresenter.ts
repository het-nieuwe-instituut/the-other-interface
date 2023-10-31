import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import useTranslation from 'next-translate/useTranslation'

export const usePresenter = () => {
  const { lang } = useTranslation()
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

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
