'use client'

import { useRouter } from 'next/navigation'

export function GoBack() {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return <button onClick={goBack}>⬅️ Go Back</button>
}
