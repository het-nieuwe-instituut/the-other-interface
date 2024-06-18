'use client'
import { Text } from '../../configs/chakra'
import { StaticHeader } from '../StaticHeader/StaticHeader'
import { Fonts, useNavSettings } from './useNavSettings'
import useTranslation from 'next-translate/useTranslation'
import { cn } from '@/features/ui/utils/cn'
import { CSSProperties } from 'react'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { NavLinkButton } from '@/features/ui/components/nav-link-button/component'
import Link from 'next/link'

const categories = [
  { name: 'archives', translationKey: 'archives' },
  { name: 'objects', translationKey: 'objects' },
  { name: 'people', translationKey: 'people' },
  { name: 'publications', translationKey: 'publications' },
]

export const Navigation = () => {
  const { isMenuOpen, ref, navTextStyle, overflowValue, lang } = useNavSettings()
  const { t: tNavigation } = useTranslation('navigation')

  return (
    <div
      style={
        {
          '--overflow': overflowValue,
        } as CSSProperties
      }
      className={cn(
        isMenuOpen ? 'visible' : 'invisible',
        'fixed right-0 top-0 h-screen w-full z-[NAVIGATION_OVERLAY_Z_INDEX]',
        isMenuOpen
          ? 'transition-opacity ease-out duration-300 opacity-95'
          : 'transition-opacity ease-in duration-300 opacity-0',
        'overflow-[var(----overflow)] backdrop-filter backdrop-blur-lg'
      )}
      ref={ref}
    >
      <div className="absolute left-0 top-0 h-screen w-full bg-blue-100">
        <StaticHeader />
        <div className="relative z-[MAX_Z_INDEX] mx-auto flex max-w-[90em] justify-between px-6 pt-24">
          <div className="flex min-w-[388px] max-w-[711px] flex-col pb-20 pr-[32px]">
            <Text textStyle={'socialMedium.md'} color={'pinkAlpha.100'} mb={'5'}>
              {tNavigation('explore_collection')}
            </Text>

            {categories.map(category => (
              // need this textStyle={navTextStyle} to change depend on where you are
              <Link
                className={cn(
                  navTextStyle === Fonts.Times
                    ? TypographyVariants({
                        times: '2xl',
                        className: 'mb-4 cursor-pointer text-pink-100',
                      })
                    : TypographyVariants({
                        impact: 'xl',
                        className: 'mb-4 cursor-pointer text-pink-100',
                      })
                )}
                key={category.name}
                href={`/landingpage?category=${category.name}&lang=${lang}`}
              >
                {tNavigation(category.translationKey)}
              </Link>
            ))}
          </div>
          <div className="flex min-w-[388px] max-w-[398px] flex-col">
            <div className="mb-[63px] flex flex-col">
              <p
                className={TypographyVariants({
                  socialLarge: 'lg',
                  className: 'text-pink-100 mb-5',
                })}
              >
                {tNavigation('about')}
              </p>
              <p
                className={TypographyVariants({
                  socialLarge: 'md',
                  className: 'text-pink-100 mb-3',
                })}
              >
                {tNavigation('aboutDescription')}
              </p>
              <NavLinkButton href={'/'} variant={'menuPrimary'} className="text-pink-100">
                {tNavigation('readMore')}
              </NavLinkButton>
            </div>
            <div className="flex flex-col">
              <NavLinkButton href={'/'} variant={'menuSecondary'} className="mb-4 text-pink-100">
                {tNavigation('readMore')}
              </NavLinkButton>
              <NavLinkButton href={'/'} variant={'menuSecondary'} className="mb-4 text-pink-100">
                {tNavigation('readMore')}
              </NavLinkButton>
              <NavLinkButton href={'/'} variant={'menuSecondary'} className="text-pink-100">
                {tNavigation('readMore')}
              </NavLinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
