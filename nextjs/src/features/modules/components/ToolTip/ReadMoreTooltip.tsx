'use client'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { LinkProps } from 'next/link'
import React, { PropsWithChildren, useRef } from 'react'
import ReactDOMServer from 'react-dom/server'
import 'react-tooltip/dist/react-tooltip.css'
import { BaseTooltip, BaseTooltipProps } from './BaseTooltip'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import { NavButton } from '@/features/ui/components/nav-button/component'
import NextLink from 'next/link'
import { TooltipRefProps } from 'react-tooltip'

interface ReadMoreTooltipProps extends PropsWithChildren {
  title: string
  description: string
  readMoreHref: LinkProps['href']
  readMoreText: string
  color: BaseTooltipProps['color']
}

export const ReadMoreTooltip = ({
  children,
  title,
  description,
  readMoreHref,
  readMoreText,
  color,
}: ReadMoreTooltipProps) => {
  const ref = useRef<TooltipRefProps>(null)
  const content = useRef(
    ReactDOMServer.renderToStaticMarkup(
      <div
        className="w-[243.76px] justify-start p-4 text-start"
        onMouseOver={() => {
          ref.current?.open()
        }}
        onMouseEnter={() => {
          ref.current?.open()
        }}
        onFocus={() => {
          ref.current?.open()
        }}
        onMouseLeave={() => {
          ref.current?.close()
        }}
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
      <BaseTooltip ref={ref} color={color} html={content.current}>
        {children}
      </BaseTooltip>
    </>
  )
}
