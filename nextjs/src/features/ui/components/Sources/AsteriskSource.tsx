import Asterisk from '../../icons/asterisk-thin.svg'
import { cn } from '../../utils/cn'
import { SourceBlock, SourceBlockGroup, SourceBlockProps } from './SourceBlock'
import NextLink from 'next/link'

interface AsteriskSourceBlockProps extends Pick<SourceBlockProps, 'children' | 'className'> {
  href?: string
}
export const AsteriskSourceBlock = ({ children, className, href }: AsteriskSourceBlockProps) => {
  const classNames = cn(
    'bg-surface-asterisk text-surface-asterisk-dark font-times-niw-rimmin leading-[100%] text-[17px] font-semibold ',
    className
  )
  if (href) {
    return (
      <NextLink href={href}>
        <SourceBlock Icon={<Asterisk />} isLink className={classNames}>
          {children}
        </SourceBlock>
      </NextLink>
    )
  }

  return (
    <SourceBlock Icon={<Asterisk />} className={classNames}>
      {children}
    </SourceBlock>
  )
}

export const AsteriskSourceBlockGroup = SourceBlockGroup
