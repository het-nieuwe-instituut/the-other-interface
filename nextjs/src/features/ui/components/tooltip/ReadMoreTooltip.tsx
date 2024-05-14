'use client'
import { NavButton } from '@/features/ui/components/nav-button/component'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import NextLink, { LinkProps } from 'next/link'
import { PropsWithChildren, useRef } from 'react'
import ReactDOMServer from 'react-dom/server'
import { TooltipRefProps } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { cn } from '../../utils/cn'
import { BaseTooltip } from './BaseTooltip'

interface ReadMoreTooltipProps extends PropsWithChildren {
  title: string
  description: string
  readMoreHref: LinkProps['href']
  readMoreText: string
  color: 'black' | 'blue'
  offset: number
}

export const ReadMoreTooltip = ({
  children,
  title,
  description,
  readMoreHref,
  readMoreText,
  color,
  offset,
}: ReadMoreTooltipProps) => {
  const ref = useRef<TooltipRefProps>(null)
  const content = useRef(
    ReactDOMServer.renderToStaticMarkup(
      <div
        className={cn(
          'w-[243.76px] justify-start p-4 text-start',
          color === 'black' && 'bg-black-100',
          color === 'blue' && 'bg-blue-100'
        )}
      >
        <h2
          className={TypographyVariants({
            social: 'sm',
            className: 'text-pink-100 font-bold pb-2',
          })}
        >
          {title}
        </h2>
        <p className={TypographyVariants({ social: 'sm', className: 'text-pink-100  pb-2' })}>
          {description}
        </p>
        <NextLink href={readMoreHref}>
          <NavButton color="inverted" variant={'menuSecondary'}>
            {readMoreText}
            <ExternalLink height="14" width="14" className={'size-[14px]'} />
          </NavButton>
        </NextLink>
      </div>
    )
  )

  return (
    <>
      <BaseTooltip ref={ref} offset={offset} html={content.current}>
        {children}
      </BaseTooltip>
    </>
  )
}
