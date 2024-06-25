import { cn } from '@/features/ui/utils/cn'
import { TypographyVariants } from '../typography/variants'

export interface SubtitleProps {
  children: string
  className?: string
}

export const Subtitle: React.FC<SubtitleProps> = ({ className, children }) => {
  return (
    <h2 className={cn('w-full bg-inherit', TypographyVariants({ impact: 'lg', className }))}>
      {children}
    </h2>
  )
}
