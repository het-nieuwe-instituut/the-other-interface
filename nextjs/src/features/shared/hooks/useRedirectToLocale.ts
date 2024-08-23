import { useParams, usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useRedirectToLocale = (locale?: string, localeId?: string) => {
  const router = useRouter()
  const pathname = usePathname()
  const id = useParams()?.id as string

  useEffect(() => {
    if (!localeId || !pathname) return

    if (id !== localeId) {
      router.push(`${pathname.replace(id, localeId)}?lang=${locale}`)
    }
  }, [id, localeId, router, pathname, locale])
}
