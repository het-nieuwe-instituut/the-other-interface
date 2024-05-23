'use client'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

interface FallbackProps {
  error: Error
  resetErrorBoundary: (...args: Array<unknown>) => void
}

interface Props {
  children: React.ReactNode
}

function ErrorFallback(props: FallbackProps) {
  const { t } = useTypeSafeTranslation('common')
  return (
    <div role="alert">
      <p>{t('somethingWentWrong')}</p>
      <pre>{props?.error.message}</pre>
      <Button onClick={props?.resetErrorBoundary}>Try again</Button>
    </div>
  )
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
      FallbackComponent={ErrorFallback}
      onError={onError}
      onReset={() => setIsError(false)}
      resetKeys={[isError]}
    >
      {props.children}
    </ErrorBoundary>
  )
}

export default ErrorBoundaryProvider
