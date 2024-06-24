import { AppHead } from '@/features/shared/components/Head/AppHead'
// import MobileOverlayProvider from '@/features/shared/components/MobileOverlayProvider/MobileOverlayProvider'
import { TestMenu } from '@/features/shared/components/TestMenu/TestMenu'
import { ReduxStoreProvider } from '@/features/shared/components/providers/ReduxStoreProdivder'
import { ThemeProvider } from '@/features/shared/components/providers/ThemeProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Script from 'next/script'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { PreviewBlock } from '@/features/preview/PreviewBlock'
import { ReduxDraftModeSync } from '@/features/shared/components/Redux/ReduxDraftModeSync'
import ReactQueryProvider from '@/features/shared/components/providers/ReactQueryProvider'
import BaseElementWrapper from '@/features/shared/components/wrappers/BaseElementsWrapper'
import { ReactTooltipInitializer } from '@/features/ui/components/tooltip/ReactTooltipInitializer'
import { draftMode } from 'next/headers'
import '../styles/globals.css'
import bootstrap from './_bootstrap'
import { Bootstrap } from './_bootstrap/Bootstrap'
import { LightboxProvider } from '@/features/ui/components/lightbox/LightboxProvider'
import WelcomeOverlayProvider from '@/features/shared/components/WelcomeOverlayProvider/WelcomeOverlayProvider'

function MyApp({ children }: { children: React.ReactNode }) {
  const { isEnabled } = draftMode()
  bootstrap()

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
        {process.env.parsed.NEXT_PUBLIC_ENV === 'production' && (
          <Script strategy="afterInteractive" id="matomo-tracker">
            {`
                var _paq = window._paq = window._paq || [];
                /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);
                (function() {
                    var u="https://stats.hetnieuweinstituut.nl/";
                    _paq.push(['setTrackerUrl', u+'matomo.php']);
                    _paq.push(['setSiteId', '7']);
                    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                })();
            `}
          </Script>
        )}
        <Bootstrap />
        <LightboxProvider>
          <ReduxStoreProvider>
            <ReactQueryProvider>
              <ThemeProvider>
                <WelcomeOverlayProvider>
                  <div>
                    <AppHead />
                    <TestMenu />
                    <ReduxDraftModeSync isDraftMode={isEnabled} />
                    {children}
                    <ReactTooltipInitializer />
                    <BaseElementWrapper />
                  </div>
                </WelcomeOverlayProvider>
              </ThemeProvider>
              <ReactQueryDevtools initialIsOpen={false} />
            </ReactQueryProvider>
          </ReduxStoreProvider>
        </LightboxProvider>
      </body>
    </html>
  )
}

export default MyApp
