'use client'
import {
  getUrlLandingPageUrl,
  useGetUrlLandingPageUrl,
} from '@/features/galaxyInterface/utils/galaxyRoutes'
import { NavLinkButton } from '@/features/ui/components/nav-link-button/component'
import { MenuTypogrpahyVariants } from '@/features/ui/components/typography/menuVariants'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { CSSProperties, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../configs/store'
import {
  MAX_Z_INDEX,
  NAVIGATION_OVERLAY_Z_INDEX,
  USER_LOOKS_ON,
} from '../../constants/mainConstants'
import useDisableScroll from '../../hooks/ui/useDisableScroll'
import { useLocale } from '../../hooks/useLocale'
import { sharedActions } from '../../stores/shared.store'
import { CLOUD_CATEGORIES } from '../../utils/categories'
import { StaticHeader } from '../StaticHeader/StaticHeader'

const categories = [
  { name: 'archives', translationKey: 'archives', category: CLOUD_CATEGORIES.archives },
  { name: 'objects', translationKey: 'objects', category: CLOUD_CATEGORIES.objects },
  { name: 'people', translationKey: 'people', category: CLOUD_CATEGORIES.people },
  { name: 'publications', translationKey: 'publications', category: CLOUD_CATEGORIES.publications },
]

export enum Fonts {
  Times = 'times',
  Impact = 'impact',
}

export const Navigation = () => {
  const isMenuOpen = useSelector((state: State) => state?.shared?.isMenuOpen)
  const userLooksOn = useSelector((state: State) => state.shared.userLooksOn)
  const { t: tNavigation } = useTranslation('navigation')
  const pathname = usePathname()
  const params = useParams()
  const locale = useLocale()
  const galaxyPathNames =
    params && params.category && params.id
      ? [
          '/',
          '/landingpage',
          `/detail/${params.category}/${params.id}`,
          `/detail/${params.category}`,
        ]
      : ['/', '/landingpage']
  const userIsNotOnGalaxyPage = pathname ? !galaxyPathNames.includes(pathname) : false

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isMenuOpen])

  const navTextStyle = useMemo(() => {
    if (userIsNotOnGalaxyPage) {
      return Fonts.Impact
    }
    if (userLooksOn === USER_LOOKS_ON.EDITORIAL) {
      return Fonts.Impact
    }
    if (userLooksOn === USER_LOOKS_ON.GALAXY) {
      return Fonts.Times
    }
  }, [userIsNotOnGalaxyPage, userLooksOn])

  const dispatch = useDispatch()

  useDisableScroll(isMenuOpen)

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[var(--z-index)] h-screen w-screen',
          'backdrop-blur-[10px]',
          'transition-opacity duration-300',
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        style={{ '--z-index': `${NAVIGATION_OVERLAY_Z_INDEX}` } as CSSProperties}
      />

      <div
        className={cn(
          'fixed inset-0 z-[var(--z-index)] h-screen w-screen',
          'bg-blue-95',
          'transition-opacity duration-300',
          isMenuOpen ? 'opacity-95' : 'opacity-0 pointer-events-none'
        )}
        style={{ '--z-index': `${NAVIGATION_OVERLAY_Z_INDEX}` } as CSSProperties}
      />

      <div
        style={
          {
            '--z-index': `${NAVIGATION_OVERLAY_Z_INDEX}`,
          } as CSSProperties
        }
        className={cn(
          ' fixed left-0 top-0  z-[calc(var(--z-index)+1)] h-screen w-screen duration-300',
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        id="navigation-scrollbar"
      >
        <div className="relative mx-auto h-screen w-screen max-w-[1440px] overflow-hidden">
          <div className="screen absolute w-full">
            {pathname && galaxyPathNames.includes(pathname) && isMenuOpen && (
              <StaticHeader className="absolute" />
            )}

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
                  <CategoryLink
                    category={category}
                    navTextStyle={navTextStyle}
                    onClick={closeMenu}
                  />
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
                      className: 'text-pink-100 mb-3 tracking-normal',
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
      </div>
    </>
  )

  function closeMenu() {
    dispatch(sharedActions.menuOpen({ isMenuOpen: false }))
  }
}

const CategoryLink = ({
  category,
  navTextStyle,
  onClick,
}: {
  category: (typeof categories)[number]
  onClick: () => void
  navTextStyle?: Fonts
}) => {
  const url = useGetUrlLandingPageUrl(category.category)
  const { t: tNavigation } = useTranslation('navigation')

  return (
    <div key={category.name}>
      <Link
        onClick={onClick}
        className={cn(
          navTextStyle === Fonts.Times
            ? MenuTypogrpahyVariants({
                menuItem: 'primary',
              })
            : MenuTypogrpahyVariants({
                menuItem: 'secondary',
              })
        )}
        href={url}
      >
        {tNavigation(category.translationKey)}
      </Link>
    </div>
  )
}
