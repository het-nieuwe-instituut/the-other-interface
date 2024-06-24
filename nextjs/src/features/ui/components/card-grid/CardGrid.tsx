import { LinkProps } from 'next/link'
import React from 'react'
import { cn } from '../../utils/cn'
import { Card } from '../card/card'
import { LightboxProvider } from '../lightbox/LightboxProvider'
import { NavLinkButton } from '../nav-link-button/component'
import { Subtitle, SubtitleProps } from '../subtitle/Subtitle'
import { TypographyVariants } from '../typography/variants'
import NavArrowLeft from './nav-arrow-left.svg'
import NavArrowRight from './nav-arrow-right.svg'

type SpecificChildren<T> =
  | React.ReactElement<T | null | undefined | string | Element>
  | React.ReactNode
  | (React.ReactElement<T | null | undefined | string | Element> | React.ReactNode)[]
export interface CardGridProps {
  className?: string
  children: SpecificChildren<CardGridWrapperProps | CardGridPaginationProps | null | undefined>
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
  children:
    | SpecificChildren<CardGridPaginationProps | CardGridLinkProps>[]
    | SpecificChildren<CardGridPaginationProps | CardGridLinkProps>
}
export const CardGridFooter = ({ children }: CardGridFooterProps) => {
  return <div className="flex items-end justify-between">{children}</div>
}

export interface CardGridPaginationProps {
  className?: string
  onNext?: () => void
  onPrevious?: () => void
  hideNext?: boolean
  hidePrevious?: boolean
}
export const CardGridPagination = ({
  className,
  onNext,
  onPrevious,
  hideNext,
  hidePrevious,
}: CardGridPaginationProps) => {
  return (
    <div className={cn('flex h-full items-center justify-center gap-2 -mr-3', className)}>
      <button onClick={onPrevious} disabled={hidePrevious}>
        <NavArrowLeft className={cn(hidePrevious && 'invisible')} />
      </button>
      <button onClick={onNext} disabled={hideNext}>
        <NavArrowRight className={cn(hideNext && 'invisible')} />
      </button>
    </div>
  )
}

export interface CardGridLinkProps extends LinkProps {
  children: string
}
export const CardGridLink = (props: CardGridLinkProps) => {
  return <NavLinkButton variant={'textPrimary'} {...props} />
}

export interface CardGridTitleProps extends SubtitleProps {}
export const CardGridTitle = (props: CardGridTitleProps) => {
  return <Subtitle {...props} />
}

export interface CardGridDescriptionProps extends SubtitleProps {}
export const CardGridDescription = ({ className, ...restProps }: CardGridDescriptionProps) => {
  return <p {...restProps} className={TypographyVariants({ responsive: 'paragraph', className })} />
}
