import { cn } from '@/features/ui/utils/cn'
import Asterisk from './asterisk.svg'
import { TypographyVariants } from '../../system/typography/variants'

interface Props {
  asterisk?: boolean
  children: string
}

export const Title: React.FC<Props> = ({ children, asterisk }) => {
  return (
    <h1 className={cn(TypographyVariants({ impact: 'xl' }), 'flex flex-row gap-2')}>
      {children}
      {asterisk && <Asterisk />}
    </h1>
  )
}
