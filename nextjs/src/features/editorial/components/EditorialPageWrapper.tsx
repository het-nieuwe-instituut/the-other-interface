import { cn } from '@/features/ui/utils/cn'
import { PropsWithChildren } from 'react'

export const EditorialPageWrapper = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return <div className={cn('p-10', className)}>{children}</div>
}
