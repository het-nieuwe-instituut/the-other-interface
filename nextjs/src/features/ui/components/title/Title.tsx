import { cn } from '@/features/ui/utils/cn'
import Asterisk from './asterisk.svg'
import { TypographyVariants } from '../typography/variants'

interface Props {
  asterisk?: boolean
  children: string
  className?: string
}

export const Title: React.FC<Props> = ({ children, asterisk, className }) => {
  return (
    <h1 className={cn(TypographyVariants({ impact: 'xl' }), 'flex flex-row gap-2', className)}>
      {children}
      {asterisk && <Asterisk />}
    </h1>
  )
}
