import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useRedirectToErrorOnError = (error: unknown) => {
  const router = useRouter()
  useEffect(() => {
    if (error && typeof error === 'object') {
      if ('status' in error) {
        if (error['status'] === 404) {
          router.push('/404')
        } else {
          router.push('/500')
        }
      }
    }
  }, [error, router])
}
