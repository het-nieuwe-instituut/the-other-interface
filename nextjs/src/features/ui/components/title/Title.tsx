import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import Asterisk from './asterisk.svg'

interface Props {
  asterisk?: boolean
  text?: string
}

export const Title: React.FC<Props> = ({ text, asterisk }) => {
  return (
    <h1 className={cn(TypographyVariants({ impact: 'xl' }), 'flex flex-row gap-2')}>
      {text}
      {asterisk && <Asterisk />}
    </h1>
  )
}
