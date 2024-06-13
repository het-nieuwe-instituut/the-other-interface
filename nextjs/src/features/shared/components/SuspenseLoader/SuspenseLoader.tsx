import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import React from 'react'

type SuspenseLoaderProps = {
  children: React.ReactNode
}

const SuspenseLoader: React.FC<SuspenseLoaderProps> = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <div className="relative flex h-auto w-full items-center justify-center">
          <ThemedSpinner />
        </div>
      }
    >
      {children}
    </React.Suspense>
  )
}

export default SuspenseLoader
