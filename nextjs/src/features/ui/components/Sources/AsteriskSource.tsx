import Asterisk from '../../icons/asterisk-thin.svg'
import { cn } from '../../utils/cn'
import { SourceBlock, SourceBlockGroup, SourceBlockProps } from './SourceBlock'
import NextLink from 'next/link'

interface AsteriskSourceBlockProps extends Pick<SourceBlockProps, 'children' | 'className'> {
  href?: string
  target?: string
  isExternalLink?: boolean
}

export const AsteriskSourceBlock = ({
  children,
  className,
  href,
  target,
  isExternalLink,
}: AsteriskSourceBlockProps) => {
  const classNames = cn(
    'bg-surface-asterisk text-surface-asterisk-dark font-times-niw-rimmin leading-[100%] text-[17px] font-semibold  transition-colors ',
    className
  )
  if (href) {
    return (
      <NextLink href={href} title={children} target={target}>
        <SourceBlock
          Icon={<Asterisk />}
          isExternalLink={isExternalLink || target === '_blank'}
          className={cn(classNames, 'hover:bg-black-100 hover:text-white')}
        >
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
