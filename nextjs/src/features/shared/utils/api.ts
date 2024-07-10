import ApiClient from '@/features/graphql/api'

export const initApiClient = () => {
  ApiClient.setBaseUrl(process?.env?.parsed?.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? '')

  return ApiClient.getApiService()
}
