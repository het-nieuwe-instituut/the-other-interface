import Fonts from '@/features/shared/components/Fonts/Fonts'
import { theme } from '@/features/shared/styles/theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import 'keen-slider/keen-slider.min.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import ErrorBoundaryProvider from '@/features/modules/components/ErrorBoundary/ErrorBoundary'
import { createStore } from '@/features/shared/configs/store'
import { useMemo } from 'react'
import { Provider } from 'react-redux'
import MobileOverlayProvider from '@/features/shared/components/MobileOverlayProvider/MobileOverlayProvider'
import { NavigationOverlayProvider } from '@/features/shared/components/Navigation/Navigation'
import { Footer } from '@/features/shared/components/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
    const store = useMemo(() => createStore(pageProps.reduxState), [pageProps.reduxState])

    return (
        <>
            {process.env.parsed.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                <>
                    <Script
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.parsed.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.parsed.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                            `}
                    </Script>
                </>
            )}

            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <ChakraProvider theme={theme}>
                        <Fonts />
                        <ErrorBoundaryProvider>
                            <NavigationOverlayProvider>
                                <MobileOverlayProvider>
                                    <>
                                        <Component {...pageProps} />
                                        <Footer />
                                    </>
                                </MobileOverlayProvider>
                            </NavigationOverlayProvider>
                        </ErrorBoundaryProvider>
                    </ChakraProvider>
                </ThemeProvider>
            </Provider>
        </>
    )
}

export default MyApp
