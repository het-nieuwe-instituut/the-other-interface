import ApiClient from '@/features/graphql/api'
import { setCookie } from 'cookies-next'

export const initApiClient = ({
  hostHeader,
  isMockedServer,
}: {
  hostHeader?: string | null
  isMockedServer?: boolean
}) => {
  function setUpMockedServer() {
    const isLocal = process.env.parsed.NEXT_PUBLIC_ENV === 'local'
    const protocol = isLocal ? 'http' : 'https'
    const host = hostHeader || window.location.host
    ApiClient.setBaseUrl(`${protocol}://${host}/api/graphql`)
  }

  if (isMockedServer === undefined && process.env.parsed.NEXT_PUBLIC_ENV === 'local') {
    setCookie('isMockedServer', true)
    setUpMockedServer()
    return ApiClient.getApiService()
  }

  if (isMockedServer) {
    setUpMockedServer()
  } else {
    ApiClient.setBaseUrl(process?.env?.parsed?.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? '')
  }

  return ApiClient.getApiService()
}
