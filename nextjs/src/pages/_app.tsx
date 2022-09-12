import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import store from '../features/shared/configs/store'
import { theme } from '@/features/shared/styles/theme/theme'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/features/graphql/config/apollo'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <ChakraProvider theme={theme}>
                        <Component {...pageProps} />
                    </ChakraProvider>
                </ThemeProvider>
            </Provider>
        </ApolloProvider>
    )
}

export default MyApp
