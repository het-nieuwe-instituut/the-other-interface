import ApiClient from '@/features/graphql/api'
import { setCookie } from 'cookies-next'

export const initApiClient = ({
  host,
  isMockedServer,
}: {
  host: string | null
  isMockedServer?: boolean
}) => {
  function setUpMockedServer() {
    const isLocal = process.env.parsed.NEXT_PUBLIC_ENV === 'local'
    const protocol = isLocal ? 'http' : 'https'
    ApiClient.setBaseUrl(`${protocol}://${host}/api/graphql`)
  }

  const isThisTestEnv =
    process.env.parsed.NEXT_PUBLIC_ENV === 'test' || process.env.parsed.NEXT_PUBLIC_ENV === 'local'

  if (isMockedServer === undefined && process.env.parsed.NEXT_PUBLIC_ENV === 'local') {
    setCookie('isMockedServer', true)
    setUpMockedServer()
    return ApiClient.getApiService()
  }

  if (isMockedServer && isThisTestEnv) {
    setUpMockedServer()
  } else {
    ApiClient.setBaseUrl(process?.env?.parsed?.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? '')
  }

  return ApiClient.getApiService()
}
