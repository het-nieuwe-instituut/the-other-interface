import { cn } from '@/features/ui/utils/cn'

export const BelowTheFoldWrapper = ({
  className,
  children,
  style,
}: {
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}) => {
  return (
    <div style={style} className={cn('relative block z-10', className)}>
      <div className="relative z-20 w-full">{children}</div>
      <div
        className={cn(
          'z-10 bg-ivory-90 absolute content-[""] h-full w-full size-full block left-0 top-0 backdrop-blur-[8px] '
        )}
      ></div>
    </div>
  )
}
