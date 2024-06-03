import { cn } from '@/features/ui/utils/cn'
import { TypographyVariants } from '../typography/variants'

interface Props {
  children: string
  className?: string
}

export const Subtitle: React.FC<Props> = ({ className, children }) => {
  return (
    <h2 className={cn('w-full bg-inherit', TypographyVariants({ impact: 'lg', className }))}>
      {children}
    </h2>
  )
}
