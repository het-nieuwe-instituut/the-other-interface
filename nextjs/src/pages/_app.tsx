import { useApollo } from '@/features/graphql/config/apollo'
import Fonts from '@/features/shared/components/Fonts/Fonts'
import { theme } from '@/features/shared/styles/theme/theme'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../features/shared/configs/store'
import '../styles/globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'keen-slider/keen-slider.min.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps)

    return (
        <ApolloProvider client={apolloClient}>
            {
                process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                    <>
                        <Script
                            strategy="afterInteractive"
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_I}');
                            `}
                        </Script>
                    </>
                )
            }
            
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <ChakraProvider theme={theme}>
                        <Fonts />
                        <Component {...pageProps} />
                    </ChakraProvider>
                </ThemeProvider>
            </Provider>
        </ApolloProvider>
    )
}

export default MyApp
