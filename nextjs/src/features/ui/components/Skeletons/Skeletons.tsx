import times from 'lodash/times'
import { cn } from '../../utils/cn'

export const SkeletonGroup = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div role="status" className={cn('flex w-full flex-col gap-4', className)}>
      {children}
    </div>
  )
}

export const SkeletonParagraph = ({ className, lines }: { className?: string; lines: number }) => {
  return (
    <div className={cn('w-full max-w-[75%]', className)}>
      {times(lines, i => (
        <SkeletonLine key={i} className={cn(i + 1 === lines && 'w-2/3')} />
      ))}
    </div>
  )
}

export const SkeletonTitle = ({ className }: { className?: string }) => {
  return <div className={cn('h-[54px] lg:h-[80px] w-full bg-black-20 mb-4', className)} />
}

export const SkeletonSubtitle = ({ className }: { className?: string }) => {
  return <div className={cn('h-[54px] w-full bg-black-20 mb-4', className)} />
}

export const SkeletonLine = ({ className }: { className?: string }) => {
  return <div className={cn('h-[42px] lg:h-[27px] w-full bg-black-20 mb-1', className)} />
}

export const SkeletonMetaLabel = ({ className }: { className?: string }) => {
  return <div className={cn('h-[18px] w-full bg-black-20', className)} />
}

export const SkeletonMetaValue = ({ className }: { className?: string }) => {
  return <div className={cn('h-[14px] w-full bg-black-20', className)} />
}
