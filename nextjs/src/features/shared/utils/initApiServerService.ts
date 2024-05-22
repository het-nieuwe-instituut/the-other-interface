import { cookies, headers } from 'next/headers'
import { initApiClient } from './api'

const initApiServerService = () => {
  const headersList = headers()
  const nextCookies = cookies()
  const hostHeader = headersList.get('host')
  const isMockedServerCookie = nextCookies.get('isMockedServer')

  return initApiClient({
    host: hostHeader,
    isMockedServer: isMockedServerCookie?.value !== 'false',
  })
}

export default initApiServerService
