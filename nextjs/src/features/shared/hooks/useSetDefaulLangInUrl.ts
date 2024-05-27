'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Locale } from 'src/generated/graphql'
import { useLocaleWithoutDefaultFallback } from './useLocale'

export const useSetDefaulLangInUrl = () => {
  const searchParams = useSearchParams()
  const langParam = useLocaleWithoutDefaultFallback()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!langParam) {
      const current = new URLSearchParams(Array.from(searchParams?.entries() ?? []))
      current.set('lang', Locale.Nl)
      const search = current.toString()
      const query = search ? `?${search}` : ''
      router.replace(`${pathname}${query}`)
    }
  }, [router, langParam, pathname, searchParams])
}
