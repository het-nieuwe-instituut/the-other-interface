import ExternalSource from '../../icons/external-link.svg'
import { cn } from '../../utils/cn'

export interface SourceBlockProps {
  className?: string
  children: string
  isLink?: boolean
  Icon?: React.ReactNode
  href?: string
}
export const SourceBlock = ({ isLink, children, Icon, className }: SourceBlockProps) => {
  return (
    <div className={cn('relative flex-row gap-1 px-2 py-1 items-center flex', className)}>
      <span>{Icon}</span>
      <div className="line-clamp-1 h-[22px] overflow-hidden text-ellipsis">{children}</div>
      {isLink && <ExternalSource />}
    </div>
  )
}

export const SourceBlockGroup = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('flex flex-wrap gap-1 w-full', className)}>{children}</div>
}
