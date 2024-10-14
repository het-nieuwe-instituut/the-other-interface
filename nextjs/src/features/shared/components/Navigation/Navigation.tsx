import { getUrlLandingPageUrl } from '@/features/galaxyInterface/utils/galaxyRoutes'
import { MenuNavLinkButton } from '@/features/ui/components/menu-nav-link-button/component'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import useTranslation from 'next-translate/useTranslation'
import { cookies } from 'next/headers'
import { CSSProperties } from 'react'
import { Locale } from 'src/generated/graphql'
import { MAX_Z_INDEX, NAVIGATION_OVERLAY_Z_INDEX } from '../../constants/mainConstants'

import { CategoryLink } from './CategoryLink'
import { NavigationStaticHeader } from './NaviagtionStaticHeader'
import { categories } from './Navigation.constants'
import { NavigationContainer } from './NavigationContainer'

export const Navigation = () => {
  const { t: tNavigation } = useTranslation('navigation')
  const cookieList = cookies()
  const acceptLanguage = cookieList.get('NEXT_LOCALE')
  const locale = acceptLanguage?.value === 'en' ? 'en' : 'nl'

  return (
    <NavigationContainer>
      <div
        style={
          {
            '--z-index': `${NAVIGATION_OVERLAY_Z_INDEX}`,
          } as CSSProperties
        }
        className={cn('md:overflow-hidden relative')}
      >
        <div className="left-0 top-0 h-screen ">
          <NavigationStaticHeader />
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
                  key={category.name}
                  url={getUrlLandingPageUrl(locale as Locale, category.category)}
                >
                  {tNavigation(category.translationKey)}
                </CategoryLink>
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
                  {tNavigation('explore_collection')}
                </p>
                <p
                  className={TypographyVariants({
                    socialLarge: 'md',
                    className: 'text-pink-100 mb-3 tracking-normal',
                  })}
                >
                  {tNavigation('aboutDescription')}
                </p>
                <MenuNavLinkButton
                  href={'/readmore'}
                  variant={'menuPrimary'}
                  color={'invertedPaleHover'}
                >
                  {tNavigation('readMore')}
                </MenuNavLinkButton>
              </div>
              <div className="flex flex-col">
                <MenuNavLinkButton
                  href={'/collection'}
                  variant={'menuSecondary'}
                  color={'invertedPaleHover'}
                  className="mb-4"
                >
                  {tNavigation('theCollection')}
                </MenuNavLinkButton>
                <MenuNavLinkButton
                  href={'/asterisk'}
                  variant={'menuSecondary'}
                  color={'invertedPaleHover'}
                  className="mb-4"
                >
                  {tNavigation('asterisk')}
                </MenuNavLinkButton>
                <MenuNavLinkButton
                  href={'/externalSources'}
                  variant={'menuSecondary'}
                  color={'invertedPaleHover'}
                  className="mb-4"
                >
                  {tNavigation('externalSources')}
                </MenuNavLinkButton>
                <MenuNavLinkButton
                  href={'/contribute'}
                  variant={'menuSecondary'}
                  color={'invertedPaleHover'}
                >
                  {tNavigation('contribute')}
                </MenuNavLinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavigationContainer>
  )
}
