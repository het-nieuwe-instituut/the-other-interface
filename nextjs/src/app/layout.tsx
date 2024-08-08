import { AppHead } from '@/features/shared/components/Head/AppHead'
import { ReduxStoreProvider } from '@/features/shared/components/providers/ReduxStoreProdivder'
import { ThemeProvider } from '@/features/shared/components/providers/ThemeProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
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
import { GoogleTagManager } from '@next/third-parties/google'

function MyApp({ children }: { children: React.ReactNode }) {
  const { isEnabled } = draftMode()
  bootstrap()

  return (
    <html lang="en">
      <body>
        {isEnabled && <PreviewBlock />}
        {process.env.parsed.NEXT_PUBLIC_ENV === 'production' && (
          <GoogleTagManager gtmId={process.env.parsed.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <Bootstrap />
        <LightboxProvider>
          <ReduxStoreProvider>
            <ReactQueryProvider>
              <ThemeProvider>
                <WelcomeOverlayProvider>
                  <div>
                    <AppHead />
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
