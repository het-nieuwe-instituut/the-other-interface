import { ReduxStoreProvider } from '@/features/shared/components/providers/ReduxStoreProdivder'
import { ThemeProvider } from '@/features/shared/components/providers/ThemeProvider'
import ErrorBoundaryProvider from '@/features/modules/components/ErrorBoundary/ErrorBoundary'
import Fonts from '@/features/modules/components/Fonts/Fonts'
// import { PreviewBlock } from '@/features/preview/PreviewBlock'
import DisableScroll from '@/features/shared/components/DisableScroll/DisableScroll'
import { AppHead } from '@/features/shared/components/Head/AppHead'
import MobileOverlayProvider from '@/features/shared/components/MobileOverlayProvider/MobileOverlayProvider'
import { TestMenu } from '@/features/shared/components/TestMenu/TestMenu'
import 'keen-slider/keen-slider.min.css'
import Script from 'next/script'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import '../styles/globals.css'
import ReactQueryProvider from '@/features/shared/components/providers/ReactQueryProvider'
import BaseElementWrapper from '@/features/shared/components/wrappers/BaseElementsWrapper'

function MyApp({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
        <ReduxStoreProvider>
          <ReactQueryProvider>
            <ThemeProvider>
              {/* <ErrorBoundaryProvider> */}
              <DisableScroll>
                {/* Comment till replace fetch of menu pages to new api */}
                <MobileOverlayProvider>
                  <>
                    {/* <ErrorBoundaryProvider>
                  
                    
                         */}
                    <Fonts />

                    <AppHead />
                    <TestMenu />
                    {children}
                    <BaseElementWrapper />
                    {/* //      */}
                  </>
                </MobileOverlayProvider>
              </DisableScroll>
              {/* </ErrorBoundaryProvider> */}
            </ThemeProvider>
          </ReactQueryProvider>
        </ReduxStoreProvider>
      </body>
      {/* {'publicationState' in pageProps &&
        pageProps.publicationState === PublicationState.Preview && <PreviewBlock />} */}
    </html>
  )
}

export default MyApp
