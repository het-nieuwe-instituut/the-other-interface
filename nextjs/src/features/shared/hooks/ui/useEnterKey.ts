import { useEffect } from 'react'

export const useEnterKey = (handler: () => void) => {
  useEffect(() => {
    const handleEnterPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handler()
      }
    }

    document.addEventListener('keydown', handleEnterPress)

    return () => {
      document.removeEventListener('keydown', handleEnterPress)
    }
  }, [handler])
}
