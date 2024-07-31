import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { useParams, useSearchParams, usePathname } from 'next/navigation'

export function useGetRawPath() {
  const params = useParams()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const splittedRoute = pathname?.split('/') ?? []
  const lang = useLocale()

  function constructParams() {
    if (typeof params === 'object' && params !== null) {
      let reconstructedPath = ''

      for (let i = 1; i < splittedRoute.length; i++) {
        const segment = splittedRoute[i]

        // Check if the segment matches any value in the params object
        const matchingKey = Object.keys(params).find(key => params[key] === segment)

        if (matchingKey) {
          // Replace the segment with the dynamic segment
          reconstructedPath += `/[${matchingKey}]`
        } else {
          // Keep the original segment
          reconstructedPath += `/${segment}`
        }
      }

      return reconstructedPath
    } else {
      // Params object is not present
      return pathname
    }
  }

  function constructUrl() {
    const path = constructParams()
    const search = searchParams?.toString()

    return addLocaleToUrl(`${path}${search ? `?${search}` : ''}`, lang)
  }

  return constructUrl()
}
