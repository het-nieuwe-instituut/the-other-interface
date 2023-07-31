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
import { Button, ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import 'keen-slider/keen-slider.min.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useMemo } from 'react'
import { Provider } from 'react-redux'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { getCookie, setCookie } from 'cookies-next'

function MyApp({ Component, pageProps }: AppProps) {
  const store = useMemo(() => createStore(pageProps.reduxState), [pageProps.reduxState])
  const router = useRouter()

  const handleClick = () => {
    const isMockedServer = getCookie('isMockedServer')
    if (isMockedServer) {
      setCookie('isMockedServer', false)
    } else {
      setCookie('isMockedServer', true)
    }
    router.reload()
  }

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
                      {/* {process.env.NEXT_ENV === 'local' ||
                        (process.env.NEXT_ENV === 'test' && ( */}
                      <Button
                        zIndex={312312}
                        position={'absolute'}
                        top={10}
                        left={8}
                        w={200}
                        h={10}
                        onClick={handleClick}
                      >
                        {'Switch server'}
                      </Button>
                      {/* ))} */}

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
