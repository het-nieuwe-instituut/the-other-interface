import ApiClient from '@/features/graphql/api'
import { CookieValueTypes, getCookie, setCookie } from 'cookies-next'
import { GetServerSidePropsContext } from 'next'

export const initApiClient = (context: GetServerSidePropsContext | null = null) => {
  const isMockedServer: CookieValueTypes = context
    ? getCookie('isMockedServer', context)
    : getCookie('isMockedServer')

  function setUpMockedServer() {
    const isLocal = process.env.parsed.NEXT_PUBLIC_ENV === 'local'
    const protocol = isLocal ? 'http' : 'https'
    const host =
      context?.req?.headers['x-forwarded-host'] ||
      context?.req?.headers.host ||
      window.location.host
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
