import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorBox from '../ErrorBox'

const ErrorBoundaryWrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary onReset={reset} FallbackComponent={ErrorBox}>
        {children}
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
)

export default ErrorBoundaryWrapper
