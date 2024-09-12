'use client'
import { GalaxyTopRight } from '@/features/galaxyInterface/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { DelayedNextLinkWithZoomAnimationsContext } from '@/features/ui/components/DelayedNextLink/DelayedNextLinkWithZoomAnimationsContext'
import { MenuTypogrpahyVariants } from '@/features/ui/components/typography/menuVariants'
import { cn } from '@/features/ui/utils/cn'
import { CSSProperties } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { STATIC_HEADER_Z_INDEX, USER_LOOKS_ON } from '../../constants/mainConstants'
import { useLooseTypeSafeTranslation } from '../../hooks/translations'
import { useLocale } from '../../hooks/useLocale'

export const StaticHeader = ({
  isNotGalaxyPage,
  className,
}: {
  isNotGalaxyPage?: boolean
  className?: string
}) => {
  const { t: tNavigation } = useLooseTypeSafeTranslation('navigation')
  const lang = useLocale()

  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)
  const userLooksOnGalaxy =
    useSelector((state: State) => state.shared.userLooksOn) === USER_LOOKS_ON.GALAXY

  if (isNotGalaxyPage) {
    return <StaticPageHeader />
  }

  return (
    <>
      <div
        style={{ '--z-index': `${STATIC_HEADER_Z_INDEX}` } as CSSProperties}
        className={cn(
          isMenuOpen || userLooksOnGalaxy ? 'transparent' : 'bg-pink-100',
          'ease-in duration-200 fixed top-0 right-0 z-[var(--z-index)] h-auto overflow-hidden py-4 w-full pointer-events-auto',
          className
        )}
      >
        <div className="container mx-auto flex size-full max-w-[90em] items-center justify-between px-6">
          <div className="h-full items-center">
            <DelayedNextLinkWithZoomAnimationsContext
              animation={'backwards'}
              delay={300}
              href={lang ? `/?lang=${lang}` : '/?lang=nl'}
              className={cn(
                userLooksOnGalaxy && !isMenuOpen && MenuTypogrpahyVariants({ default: 'primary' }),
                userLooksOnGalaxy && isMenuOpen && MenuTypogrpahyVariants({ inverted: 'primary' }),
                !userLooksOnGalaxy &&
                  !isMenuOpen &&
                  MenuTypogrpahyVariants({ default: 'secondary' }),
                !userLooksOnGalaxy &&
                  isMenuOpen &&
                  MenuTypogrpahyVariants({ inverted: 'secondary' }),
                'cursor-pointer overflow-hidden h-full flex m-0 '
              )}
            >
              <p className="mr-2 max-sm:overflow-visible max-sm:whitespace-normal max-sm:text-[20px] max-sm:font-normal max-sm:leading-[21px]">
                {tNavigation('headerTitle')}
              </p>
            </DelayedNextLinkWithZoomAnimationsContext>
          </div>
          <div>
            <GalaxyTopRight />
          </div>
        </div>
      </div>
    </>
  )
}

export const StaticPageHeader = () => {
  const { t: tNavigation } = useLooseTypeSafeTranslation('navigation')
  const lang = useLocale()

  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)

  return (
    <>
      <div
        style={{ '--z-index': `${STATIC_HEADER_Z_INDEX}` } as CSSProperties}
        className={cn(
          isMenuOpen ? 'bg-blue-90' : 'bg-pink-100',
          'ease-in duration-200 fixed top-0 right-0 z-[var(--z-index)] h-auto overflow-hidden py-4 w-full pointer-events-auto'
        )}
      >
        <div className="container mx-auto flex size-full max-w-[90em] items-center justify-between px-6">
          <div className="h-full items-center">
            <DelayedNextLinkWithZoomAnimationsContext
              animation={'backwards'}
              delay={300}
              href={lang ? `/?lang=${lang}` : '/?lang=nl'}
              className={cn(
                !isMenuOpen && MenuTypogrpahyVariants({ default: 'secondary' }),
                isMenuOpen && MenuTypogrpahyVariants({ inverted: 'secondary' }),
                'cursor-pointer overflow-hidden h-full flex m-0 '
              )}
            >
              <p className="mr-2 max-sm:overflow-visible max-sm:whitespace-normal max-sm:text-[20px] max-sm:font-normal max-sm:leading-[21px]">
                {tNavigation('headerTitle')}
              </p>
            </DelayedNextLinkWithZoomAnimationsContext>
          </div>
          <div>
            <GalaxyTopRight />
          </div>
        </div>
      </div>
    </>
  )
}
