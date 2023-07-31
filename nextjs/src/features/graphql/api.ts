import { GraphQLClient } from 'graphql-request'
import { IncomingHttpHeaders } from 'http'
import { getSdk, Sdk } from 'src/generated/graphql'

class ApiClientClass {
  private ApiClient: Sdk | null = null
  private endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
    this.getApiService()
  }

  getApiService(headers?: IncomingHttpHeaders) {
    if (this.ApiClient) return this.ApiClient

    const options = headers
      ? {
          headers: headers as Record<string, string>,
        }
      : undefined

    const client = new GraphQLClient(this.endpoint, options)

    this.ApiClient = getSdk(client)

    return this.ApiClient
  }

  setBaseUrl(url: string) {
    this.endpoint = url
    // After changing the URL, we probably want to re-initialize the client
    this.ApiClient = null
    this.getApiService()
  }
}

// Provide initial base URL in the constructor
const ApiClient = new ApiClientClass(process?.env?.parsed?.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? '')

export default ApiClient
