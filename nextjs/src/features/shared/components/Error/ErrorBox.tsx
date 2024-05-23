import { Button } from '@/features/ui/components/button/component'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { FallbackProps } from 'react-error-boundary'

const ErrorBox = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="flex flex-col border border-red-400 bg-red-100 px-4 py-2">
      <h2 className={cn('', TypographyVariants({ social: 'xl' }))}>{error.message}</h2>
      <Button intent="secondary" state={'error'} onClick={resetErrorBoundary} className="h-12 w-32">
        Try Again
      </Button>
    </div>
  )
}

export default ErrorBox
