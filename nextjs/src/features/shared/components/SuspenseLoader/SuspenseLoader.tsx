import React from 'react'

type SuspenseLoaderProps = {
  children: React.ReactNode
  LoadingComponent: React.ReactNode
}

const SuspenseLoader: React.FC<SuspenseLoaderProps> = ({ children, LoadingComponent }) => {
  return <React.Suspense fallback={LoadingComponent}>{children}</React.Suspense>
}

export default SuspenseLoader
