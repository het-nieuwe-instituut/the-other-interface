import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'

export const mockedClient = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: 'http://localhost:1337/graphql', fetch }),
})
