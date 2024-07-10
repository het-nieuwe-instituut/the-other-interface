import { cn } from '../../utils/cn'
import Lod from '../../icons/lod.svg'
import { SourceBlock, SourceBlockGroup, SourceBlockProps } from './SourceBlock'
import NextLink from 'next/link'

interface ExternalSourceBlockProps extends Pick<SourceBlockProps, 'children' | 'className'> {
  href?: string
}
export const ExternalSourceBlock = ({ children, className, href }: ExternalSourceBlockProps) => {
  if (href) {
    return (
      <NextLink href={href}>
        <SourceBlock
          Icon={<Lod />}
          isLink
          className={cn(className, 'bg-surface-lod text-surface-lod-dark font-times-niw-rimmin')}
        >
          {children}
        </SourceBlock>
      </NextLink>
    )
  }

  return (
    <SourceBlock
      Icon={<Lod />}
      className={cn(className, 'bg-surface-lod text-surface-lod-dark font-times-niw-rimmin')}
    >
      {children}
    </SourceBlock>
  )
}

export const ExternalSourceBlockGroup = SourceBlockGroup
