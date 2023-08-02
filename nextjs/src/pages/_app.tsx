import ErrorBoundaryProvider from '@/features/modules/components/ErrorBoundary/ErrorBoundary'
import { PreviewBlock } from '@/features/preview/PreviewBlock'
import DisableScroll from '@/features/shared/components/DisableScroll/DisableScroll'
import Fonts from '@/features/shared/components/Fonts/Fonts'
import { Footer } from '@/features/shared/components/Footer/Footer'
import MobileOverlayProvider from '@/features/shared/components/MobileOverlayProvider/MobileOverlayProvider'
import { NavigationOverlayProvider } from '@/features/shared/components/Navigation/Navigation'
import { createStore } from '@/features/shared/configs/store'
import { theme } from '@/features/shared/styles/theme/theme'
import { PublicationState } from '@/features/shared/types/enums'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import 'keen-slider/keen-slider.min.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { useMemo } from 'react'
import { Provider } from 'react-redux'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const DynamicSwitchServerButton = dynamic(
  () => import('../features/shared/components/SwitchServerButton/SwitchServerButton'),
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {
  const store = useMemo(() => createStore(pageProps.reduxState), [pageProps.reduxState])

  return (
    <>
      {'publicationState' in pageProps &&
        pageProps.publicationState === PublicationState.Preview && <PreviewBlock />}
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
              <DisableScroll>
                <NavigationOverlayProvider>
                  <MobileOverlayProvider>
                    <>
                      <DynamicSwitchServerButton />
                      <div id={'galaxy-root'}></div>
                      <Component {...pageProps} />
                      <Footer />
                    </>
                  </MobileOverlayProvider>
                </NavigationOverlayProvider>
              </DisableScroll>
            </ErrorBoundaryProvider>
          </ChakraProvider>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
