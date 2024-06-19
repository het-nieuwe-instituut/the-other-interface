import { convertToCurlyQuotes } from '@/features/shared/utils/text'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'

interface Props {
  className?: string
  children: string
}

export const Pullquote: React.FC<Props> = ({ children, className }) => {
  const text = convertToCurlyQuotes(children)
  return (
    <aside className={cn('w-full bg-inherit', className)}>
      <blockquote>
        <p className={TypographyVariants({ impact: 'md' })}>{text}</p>
      </blockquote>
    </aside>
  )
}
