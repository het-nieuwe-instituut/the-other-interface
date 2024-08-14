import NextImage from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import { cn } from '../../utils/cn'
import { Card } from '../card/card'
import { LightboxProvider } from '../lightbox/LightboxProvider'
import { NavLinkButton, NavLinkButtonProps } from '../nav-link-button/component'
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
  return <div className={cn(className, 'grid gap-12 grid-cols-1 lg:grid-cols-3')}>{children}</div>
}

export const CardGridCard = Card

export interface CardGridFooterProps {
  children: SpecificChildren<CardGridLinkProps>[] | SpecificChildren<CardGridLinkProps>
}
export const CardGridFooter = ({ children }: CardGridFooterProps) => {
  return <div className="flex items-end justify-between">{children}</div>
}

export interface CardGridLinkProps extends NavLinkButtonProps {
  children: string
}
export const CardGridLink = (props: CardGridLinkProps) => {
  return <NavLinkButton variant={'textPrimary'} {...props} />
}

export interface CardGridTitleProps extends SubtitleProps {}
export const CardGridTitle = (props: CardGridTitleProps) => {
  return <Subtitle {...props} className="leading-[100%]" />
}

export interface CardGridDescriptionProps extends SubtitleProps {}
export const CardGridDescription = ({ className, ...restProps }: CardGridDescriptionProps) => {
  return <p {...restProps} className={TypographyVariants({ responsive: 'paragraph', className })} />
}

export interface CardGridPlaceholderProps {
  fallback: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  title: string
  subTitle: string
  href?: string
  className?: string
}
export const CardGridPlaceholder = ({
  title,
  subTitle,
  fallback,
  href,
  className,
}: CardGridPlaceholderProps) => {
  const containerClassName = cn(
    'flex flex-col items-center justify-center  group relative',
    className
  )
  if (href) {
    return (
      <NextLink href={href} className={containerClassName}>
        {renderContent()}
      </NextLink>
    )
  }
  return <div className={containerClassName}>{renderContent()}</div>

  function renderContent() {
    return (
      <>
        <div>
          <p className={TypographyVariants({ socialLarge: 'xl' })}>{title}</p>
        </div>
        <div>
          <p className={TypographyVariants({ socialLarge: 'lg' })}>{subTitle}</p>
        </div>
        <NextImage
          width={305}
          height={305}
          src={`/images/fallbacks/${fallback}.svg`}
          alt="fallback"
          className="absolute scale-[85%] opacity-20 grayscale transition-all group-hover:scale-100 group-hover:grayscale-0"
        />
      </>
    )
  }
}
