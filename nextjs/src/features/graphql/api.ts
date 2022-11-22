import { getSdk, Sdk } from "src/generated/graphql";
import { GraphQLClient } from 'graphql-request'
import { IncomingHttpHeaders } from "http";


let ApiClient: Sdk | null = null


const getApiService = (headers?: IncomingHttpHeaders) => {
    if (ApiClient) return

    const options =  headers ? {
        headers: headers as Record<string, string>
    } : undefined

    const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? '',  options)

    ApiClient = getSdk(client)

}

getApiService()

export default ApiClient