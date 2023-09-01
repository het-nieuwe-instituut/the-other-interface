import { getCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

const usePresenter = () => {
  const router = useRouter()

  const handleClick = () => {
    const isMockedServer = getCookie('isMockedServer')
    if (isMockedServer) {
      setCookie('isMockedServer', false)
    } else {
      setCookie('isMockedServer', true)
    }
    router.refresh()
  }

  return {
    handleClick,
  }
}

export default usePresenter
