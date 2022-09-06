import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import fetch from 'cross-fetch'

export const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: 'http://localhost:5000/graphql', fetch }),
})
