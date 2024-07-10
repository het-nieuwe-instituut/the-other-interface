import { cn } from '../../utils/cn'
import Lod from '../../icons/lod.svg'
import { SourceBlock, SourceBlockGroup, SourceBlockProps } from './SourceBlock'
import NextLink from 'next/link'

interface ExternalSourceBlockProps extends Pick<SourceBlockProps, 'children' | 'className'> {
  href?: string
}
export const ExternalSourceBlock = ({ children, className, href }: ExternalSourceBlockProps) => {
  const classNames = cn(
    'bg-surface-lod text-surface-lod-dark font-arial-reboot-lines leading-[110%] text-[16px] font-[500] ',
    className
  )

  if (href) {
    return (
      <NextLink href={href}>
        <SourceBlock Icon={<Lod />} isLink className={classNames}>
          {children}
        </SourceBlock>
      </NextLink>
    )
  }

  return (
    <SourceBlock Icon={<Lod />} className={classNames}>
      {children}
    </SourceBlock>
  )
}

export const ExternalSourceBlockGroup = SourceBlockGroup
