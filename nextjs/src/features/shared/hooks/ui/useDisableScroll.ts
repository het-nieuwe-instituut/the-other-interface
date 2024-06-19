import { useEffect } from 'react'

const useDisableScroll = (shouldDisableScroll: boolean) => {
  useEffect(() => {
    document.body.style.overflow = shouldDisableScroll ? 'hidden' : 'visible'

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [shouldDisableScroll])
}

export default useDisableScroll
