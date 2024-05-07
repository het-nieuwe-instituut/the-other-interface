import { TypographyVariants } from '@/features/ui/system/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { PropsWithChildren } from 'react'
import Asterisk from './asterisk.svg'

interface Props extends PropsWithChildren {
  asterisk?: boolean
}

export const Title: React.FC<Props> = ({ children, asterisk }) => {
  return (
    <h1 className={cn(TypographyVariants({ impact: 'xl' }), 'flex flex-row gap-2')}>
      {children}
      {asterisk && <Asterisk />}
    </h1>
  )
}
