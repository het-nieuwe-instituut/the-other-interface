import { ThemedSpinner } from '@/features/shared/components/Loading/ThemedSpinner/ThemedSpinner'
import React from 'react'

type SuspenseLoaderProps = {
  children: React.ReactNode
}

const SuspenseLoader: React.FC<SuspenseLoaderProps> = ({ children }) => {
  return (
    <React.Suspense
      fallback={
        <div className="h-auto w-full relative flex justify-center items-center">
          <ThemedSpinner />
        </div>
      }
    >
      {children}
    </React.Suspense>
  )
}

export default SuspenseLoader
