import { GraphQLClient } from 'graphql-request'
import { getSdk, Sdk } from 'src/generated/graphql'

class ApiClientClass {
  private ApiClient: Sdk | null = null
  private endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
    this.getApiService()
  }

  getApiService(headers?: Record<string, string>) {
    if (this.ApiClient) return this.ApiClient

    const client = new GraphQLClient(this.endpoint, headers)

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
const ApiClient = new ApiClientClass(process?.env?.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? '')

export default ApiClient

export type ApiClientType = Sdk
