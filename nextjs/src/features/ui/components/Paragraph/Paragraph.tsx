import { cn } from '@/features/ui/utils/cn'
import { TailwindMarkdown } from './TailwindMarkdown'

export interface ParagraphProps {
  children: string
  className?: string
}

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return (
    <TailwindMarkdown className={cn('max-w-[808px] bg-inherit w-full', className)}>
      {children}
    </TailwindMarkdown>
  )
}
