import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

interface Props {
  className?: string
  children: string
}

export const Pullquote: React.FC<Props> = ({ children, className }) => {
  return (
    <aside className={cn('w-full bg-inherit', className)}>
      <blockquote>
        <p className={TypographyVariants({ impact: 'md' })}>“{children}”</p>
      </blockquote>
    </aside>
  )
}
