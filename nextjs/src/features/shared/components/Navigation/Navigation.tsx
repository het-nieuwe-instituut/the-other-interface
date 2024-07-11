'use client'
import { StaticHeader } from '../StaticHeader/StaticHeader'
import { Fonts, useNavSettings } from './useNavSettings'
import useTranslation from 'next-translate/useTranslation'
import { cn } from '@/features/ui/utils/cn'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { NavLinkButton } from '@/features/ui/components/nav-link-button/component'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { sharedActions } from '../../stores/shared.store'
import useDisableScroll from '../../hooks/ui/useDisableScroll'
import { MAX_Z_INDEX, NAVIGATION_OVERLAY_Z_INDEX } from '../../constants/mainConstants'
import { CSSProperties } from 'react'
import { MenuTypogrpahyVariants } from '@/features/ui/components/typography/menuVariants'

const categories = [
  { name: 'archives', translationKey: 'archives' },
  { name: 'objects', translationKey: 'objects' },
  { name: 'people', translationKey: 'people' },
  { name: 'publications', translationKey: 'publications' },
]

export const Navigation = () => {
  const { isMenuOpen, ref, navTextStyle, lang } = useNavSettings()
  const { t: tNavigation } = useTranslation('navigation')
  const dispatch = useDispatch()

  useDisableScroll(isMenuOpen)

  return (
    <div
      style={
        {
          '--z-index': `${NAVIGATION_OVERLAY_Z_INDEX}`,
          backdropFilter: 'blur(100px)',
        } as CSSProperties
      }
      className={cn(
        isMenuOpen
          ? 'visible transition-opacity ease-out duration-300 opacity-95'
          : 'invisible transition-opacity ease-in duration-300 opacity-0',
        'fixed right-0 top-0 h-screen w-full z-[var(--z-index)] md:overflow-hidden overflow-y-scroll bg-blue-95'
      )}
      ref={ref}
    >
      <div className="absolute left-0 top-0 h-screen w-full">
        <StaticHeader />
        <div
          style={{ '--z-index': `${MAX_Z_INDEX}` } as CSSProperties}
          className="relative z-[var(--z-index)] mx-auto flex max-w-[90em] flex-col justify-between px-6 pt-24 md:flex-row"
        >
          <div className="flex min-w-[388px] max-w-[711px] flex-col pb-20 pr-[32px]">
            <p
              className={TypographyVariants({
                socialLarge: 'lg',
                className: 'text-pink-100 mb-5',
              })}
            >
              {tNavigation('explore_collection')}
            </p>
            {categories.map(category => (
              <Link
                onClick={() => closeMenu()}
                className={cn(
                  navTextStyle === Fonts.Times
                    ? MenuTypogrpahyVariants({
                        menuItem: 'primary',
                      })
                    : MenuTypogrpahyVariants({
                        menuItem: 'secondary',
                      })
                )}
                key={category.name}
                href={`/landingpage?category=${category.name}&lang=${lang}`}
              >
                {tNavigation(category.translationKey)}
              </Link>
            ))}
          </div>
          <div className="flex min-w-[200px] max-w-[398px] flex-col sm:pb-[50px] md:min-w-[388px]">
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
                  className: 'text-pink-100 mb-3 ',
                })}
              >
                {tNavigation('aboutDescription')}
              </p>
              <NavLinkButton
                href={'/readmore'}
                variant={'menuPrimary'}
                color={'invertedPaleHover'}
                onClick={() => closeMenu()}
              >
                {tNavigation('readMore')}
              </NavLinkButton>
            </div>
            <div className="flex flex-col">
              <NavLinkButton
                href={'/collection'}
                variant={'menuSecondary'}
                color={'invertedPaleHover'}
                className="mb-4"
                onClick={() => closeMenu()}
              >
                {tNavigation('theCollection')}
              </NavLinkButton>
              <NavLinkButton
                href={'/asterisk'}
                variant={'menuSecondary'}
                color={'invertedPaleHover'}
                className="mb-4"
                onClick={() => closeMenu()}
              >
                {tNavigation('asterisk')}
              </NavLinkButton>
              <NavLinkButton
                href={'/externalSources'}
                variant={'menuSecondary'}
                color={'invertedPaleHover'}
                className="mb-4"
                onClick={() => closeMenu()}
              >
                {tNavigation('externalSources')}
              </NavLinkButton>
              <NavLinkButton
                href={'/contribute'}
                variant={'menuSecondary'}
                color={'invertedPaleHover'}
                onClick={() => closeMenu()}
              >
                {tNavigation('contribute')}
              </NavLinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  function closeMenu() {
    dispatch(sharedActions.menuOpen({ isMenuOpen: false }))
  }
}
