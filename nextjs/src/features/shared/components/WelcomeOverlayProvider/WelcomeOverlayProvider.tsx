'use client'

import dynamic from 'next/dynamic'
const WelcomeOverlay = dynamic(() => import('./WelcomeOverlay'), {
  ssr: false,
})

interface Props {
  children: React.ReactNode
}

const WelcomeOverlayProvider: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative size-full overflow-hidden">
      {children}
      <WelcomeOverlay />
    </div>
  )
}

export default WelcomeOverlayProvider
