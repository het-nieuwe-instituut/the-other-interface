import { LinkProps } from 'next/link'
import React from 'react'
import { cn } from '../../utils/cn'
import { Card } from '../card/card'
import { LightboxProvider } from '../lightbox/LightboxProvider'
import { NavButton, NavButtonProps } from '../nav-button/component'
import { Subtitle, SubtitleProps } from '../subtitle/Subtitle'
import { TypographyVariants } from '../typography/variants'

type SpecificChildren<T> =
  | React.ReactElement<T | null | undefined | string | Element>
  | React.ReactNode
  | (React.ReactElement<T | null | undefined | string | Element> | React.ReactNode)[]
export interface CardGridProps {
  className?: string
  children: SpecificChildren<CardGridWrapperProps | null | undefined>
}

export const CardGrid = ({ className, children }: CardGridProps) => {
  return (
    <LightboxProvider>
      <div className={cn('flex flex-col gap-4', className)}>{children}</div>
    </LightboxProvider>
  )
}

export interface CardGridWrapperProps {
  className?: string
  children: SpecificChildren<CardGridProps[] | null>
}

export const CardGridCardWrapper = ({ className, children }: CardGridWrapperProps) => {
  return <div className={cn(className, 'grid gap-4 grid-cols-1 lg:grid-cols-3')}>{children}</div>
}

export const CardGridCard = Card

export interface CardGridFooterProps {
  children: SpecificChildren<CardGridLinkProps>[] | SpecificChildren<CardGridLinkProps>
}
export const CardGridFooter = ({ children }: CardGridFooterProps) => {
  return <div className="flex items-end justify-between">{children}</div>
}

export interface CardGridLinkProps extends NavButtonProps {
  children: string
}
export const CardGridShowMore = (props: CardGridLinkProps) => {
  return <NavButton variant={'textPrimary'} {...props} />
}

export interface CardGridTitleProps extends SubtitleProps {}
export const CardGridTitle = (props: CardGridTitleProps) => {
  return <Subtitle {...props} />
}

export interface CardGridDescriptionProps extends SubtitleProps {}
export const CardGridDescription = ({ className, ...restProps }: CardGridDescriptionProps) => {
  return <p {...restProps} className={TypographyVariants({ responsive: 'paragraph', className })} />
}
