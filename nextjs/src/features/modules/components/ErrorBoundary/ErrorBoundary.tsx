'use client'
import ErrorBox from '@/features/shared/components/Error/ErrorBox'
import React, { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

interface Props {
  children: React.ReactNode
}

const ErrorBoundaryProvider = (props: Props) => {
  const [isError, setIsError] = useState<boolean>(false)

  const onError = (
    error: Error,
    info: {
      componentStack: string
    }
  ) => {
    console.error(error)
    console.log(info?.componentStack)
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorBox}
      onError={onError}
      onReset={() => setIsError(false)}
      resetKeys={[isError]}
    >
      {props.children}
    </ErrorBoundary>
  )
}

export default ErrorBoundaryProvider
