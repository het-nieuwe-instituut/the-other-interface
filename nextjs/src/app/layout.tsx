import { ReduxStoreProvider } from '@/features/shared/components/providers/ReduxStoreProdivder'
import { ThemeProvider } from '@/features/shared/components/providers/ThemeProvider'
import Fonts from '@/features/modules/components/Fonts/Fonts'
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
import { draftMode } from 'next/headers'
import { PreviewBlock } from '@/features/preview/PreviewBlock'

function MyApp({ children }: { children: React.ReactNode }) {
  const { isEnabled } = draftMode()
  return (
    <html lang="en">
      <body>
        {isEnabled && <PreviewBlock />}
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
              <DisableScroll>
                <MobileOverlayProvider>
                  <>
                    <Fonts />
                    <AppHead />
                    <TestMenu />
                    {children}
                    <BaseElementWrapper />
                  </>
                </MobileOverlayProvider>
              </DisableScroll>
            </ThemeProvider>
          </ReactQueryProvider>
        </ReduxStoreProvider>
      </body>
    </html>
  )
}

export default MyApp