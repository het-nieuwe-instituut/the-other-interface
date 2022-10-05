import { ApolloClient, gql, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import merge from 'deepmerge'
import { IncomingHttpHeaders } from 'http'
import isEqual from 'lodash/isEqual'
// import type { AppProps } from 'next/app'
import { useMemo } from 'react'

const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

const typeDefs = gql`
    extend type Query {
        pageConfiguration: PageConfiguration!
    }

    extend type PageConfiguration {
        host: String!
    }
`

const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
        cache: new InMemoryCache(),
        typeDefs,
    })
}

type InitialState = NormalizedCacheObject | undefined

interface IInitializeApollo {
    headers?: IncomingHttpHeaders | null
    initialState?: InitialState | null
}

export const initializeApollo = ({ initialState }: IInitializeApollo = { headers: null, initialState: null }) => {
    const _apolloClient = apolloClient ?? createApolloClient()

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // get hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract()

        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        const data = merge(initialState, existingCache, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (destinationArray, sourceArray) => [
                ...sourceArray,
                ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
            ],
        })

        // Restore the cache with the merged data
        _apolloClient.cache.restore(data)
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const addApolloState = <T, A extends { props: Record<string, unknown> }>(state: T, pageProps: A) => {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = state
    }

    return pageProps
}

// alias
export const getApolloClient = initializeApollo

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApollo(pageProps: any) {
    const state = pageProps[APOLLO_STATE_PROP_NAME]
    const store = useMemo(() => initializeApollo({ initialState: state }), [state])
    return store
}
