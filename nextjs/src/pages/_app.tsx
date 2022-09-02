import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'

import store from '../features/shared/configs/store'
import { theme } from 'src/features/shared/styles/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <ChakraProvider theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
