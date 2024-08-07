import { getExternalSourceTranslation } from '@/features/record/utils/enrichedSources'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import NextLink from 'next/link'
import { ExternalSource } from 'src/generated/graphql'
import Lod from '../../icons/lod.svg'
import { cn } from '../../utils/cn'
import { SourceBlock, SourceBlockGroup, SourceBlockProps } from './SourceBlock'

interface ExternalSourceBlockProps extends Pick<SourceBlockProps, 'children' | 'className'> {
  href?: string
  isExternalLink?: boolean
}
export const ExternalSourceBlock = ({
  children,
  className,
  href,
  isExternalLink = true,
}: ExternalSourceBlockProps) => {
  const classNames = cn(
    'bg-surface-lod text-surface-lod-dark font-arial-reboot-lines leading-[110%] text-[16px] font-[500] hover:bg-black-100 hover:text-white',
    className
  )

  if (href) {
    return (
      <NextLink href={href} target={isExternalLink ? '_blank' : ''}>
        <SourceBlock Icon={<Lod />} isExternalLink={isExternalLink} className={classNames}>
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

export const ExternalSourceLink = ({
  externalSourceType,
  externalSourceUrl,
  className,
}: {
  externalSourceUrl: string
  externalSourceType: ExternalSource
  className?: string
}) => {
  return (
    <div className="inline-block ">
      <NextLink
        href={externalSourceUrl}
        className={cn(
          className,
          'flex items-center relative',
          'after:absolute after:bottom-[1px] after:w-full after:border-b after:border-solid after:content-[""] after:border-surface-lod-dark gap-2 ',
          'hover:bg-black-100 hover:text-white hover:after:border-white'
        )}
      >
        {getExternalSourceTranslation(externalSourceType)}

        <ExternalLink className={'relative mt-[-2px] size-[14px]'} />
      </NextLink>
    </div>
  )
}

export const ExternalSourceBlockGroup = SourceBlockGroup
