import Fonts from '@/features/shared/components/Fonts/Fonts'
import { theme } from '@/features/shared/styles/theme/theme'
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
    return (
        <>
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
        </>
    )
}

export default MyApp
