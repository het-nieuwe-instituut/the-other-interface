import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'

export const PAGE_CONFIGURATION = gql`
    query pageConfiguration {
        host @client
    }
`

export interface PageConfiguration {
    host: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function preparePageConfiguration(client: ApolloClient<NormalizedCacheObject>, config: PageConfiguration) {
    client.writeQuery({
        query: PAGE_CONFIGURATION,
        data: config,
    })
}
