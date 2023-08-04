import Cookies from 'js-cookie'
import { GetServerSidePropsContext } from 'next'
import { CookieValueTypes, getCookie } from 'cookies-next'
import ApiClient from '@/features/graphql/api'
export const initApiClient = (context: GetServerSidePropsContext | null) => {
  let isMockedServer: CookieValueTypes
  if (context) {
    // We're on the server
    isMockedServer = getCookie('isMockedServer', context)
  } else {
    // We're on the client
    isMockedServer = Cookies.get('isMockedServer')
  }

  if (isMockedServer) {
    const protocol = context?.req?.headers['x-forwarded-proto'] || 'http'
    const host =
      context?.req?.headers['x-forwarded-host'] ||
      context?.req?.headers.host ||
      window.location.host
    ApiClient.setBaseUrl(`${protocol}://${host}/api/graphql`)
  } else {
    ApiClient.setBaseUrl(process?.env?.parsed?.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? '')
  }

  return ApiClient.getApiService()
}
