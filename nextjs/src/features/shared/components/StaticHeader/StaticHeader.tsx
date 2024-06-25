'use client'
import NextLink from 'next/link'
import { STATIC_HEADER_Z_INDEX, USER_LOOKS_ON } from '../../constants/mainConstants'
import { GalaxyTopRight } from '@/features/galaxyInterface/components/GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'
import { usePresenter } from './usePresenter'
import { CSSProperties } from 'react'
import { cn } from '@/features/ui/utils/cn'
import { TypographyVariants } from '@/features/ui/components/typography/variants'

export const StaticHeader = () => {
  const { tNavigation, userLooksOn, isMenuOpen, lang } = usePresenter()

  return (
    <>
      <div
        style={{ '--z-index': `${STATIC_HEADER_Z_INDEX}` } as CSSProperties}
        className={cn(
          isMenuOpen || userLooksOn === USER_LOOKS_ON.GALAXY ? 'transparent' : 'bg-pink-100',

          'ease-in duration-200 fixed top-0 right-0 z-[var(--z-index)] h-auto overflow-hidden py-4 w-full pointer-events-auto'
        )}
      >
        <div className="container mx-auto flex size-full max-w-[90em] items-center justify-between px-6">
          <div className="h-full items-center">
            {/* <Link
              href={lang ? `/?lang=${lang}` : '/?lang=nl'}
              variant={isMenuOpen ? 'navigation' : 'navigationOnTopOfTheGalaxy'}
              cursor="pointer"
              whiteSpace={'nowrap'}
              textOverflow={'ellipsis'}
              overflow={'hidden'}
              textStyle={
                userLooksOn === USER_LOOKS_ON.GALAXY ? 'headingTimesLarge.lg' : 'impactNew.md'
              }
              margin={0}
              height={'100%'}
              display={'flex'}
            >
              <p className="mr-2">{tNavigation('theNewInstitute')}</p>
              <p className="ml-2">{tNavigation('collectionPlatform')}</p>
            </Link> */}

            <NextLink
              href={lang ? `/?lang=${lang}` : '/?lang=nl'}
              className={cn(
                userLooksOn === USER_LOOKS_ON.GALAXY
                  ? 'font-times-dot text-[20px] leading-[105%_] lg:text-[32px]'
                  : 'font-impact-large text-[20px] leading-[120%_] tracking-[-0.25px] lg:text-[25px]',
                'cursor-pointer overflow-hidden h-full flex m-0 text-blue-100'
              )}
            >
              <p className="mr-2 sm:overflow-visible sm:whitespace-normal">
                {tNavigation('headerTitle')}
              </p>
            </NextLink>
          </div>
          <div>
            <GalaxyTopRight />
          </div>
        </div>
      </div>
    </>
  )
}
