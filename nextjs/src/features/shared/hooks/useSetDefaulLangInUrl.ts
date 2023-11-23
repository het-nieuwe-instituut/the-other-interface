'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useSetDefaulLangInUrl = () => {
  const searchParams = useSearchParams()
  const langParam = searchParams?.get('lang')
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!langParam) {
      const current = new URLSearchParams(Array.from(searchParams?.entries() ?? []))
      current.set('lang', 'nl')
      const search = current.toString()
      const query = search ? `?${search}` : ''
      router.replace(`${pathname}${query}`)
    }
  }, [router, langParam, pathname, searchParams])
}
