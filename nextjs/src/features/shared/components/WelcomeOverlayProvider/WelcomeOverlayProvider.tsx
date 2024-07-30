'use client'

import dynamic from 'next/dynamic'
import { useIsClient } from 'usehooks-ts'
const WelcomeOverlay = dynamic(() => import('./WelcomeOverlay'), {
  ssr: false,
})

interface Props {
  children: React.ReactNode
}

const WelcomeOverlayProvider: React.FC<Props> = ({ children }) => {
  const isClient = useIsClient()
  return (
    <div className="relative size-full overflow-hidden">
      {isClient && <WelcomeOverlay />}

      {children}
    </div>
  )
}

export default WelcomeOverlayProvider
