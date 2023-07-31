import { GetServerSidePropsContext } from 'next'
import { getCookie } from 'cookies-next'
import ApiClient from '@/features/graphql/api'

export const initApiClient = ({ req, res }: GetServerSidePropsContext) => {
  const isMockedServer = getCookie('isMockedServer', { req, res })

  if (isMockedServer) {
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const host = req.headers['x-forwarded-host'] || req.headers.host
    ApiClient.setBaseUrl(`${protocol}://${host}/api/graphql`)
  } else {
    ApiClient.setBaseUrl(process?.env?.parsed?.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? '')
  }

  return ApiClient.getApiService()
}
