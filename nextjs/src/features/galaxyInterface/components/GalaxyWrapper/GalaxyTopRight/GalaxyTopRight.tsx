'use client'
import { LOCALES } from '@/features/shared/constants/locales'
import NextLink from 'next/link'
import { Fragment, useMemo } from 'react'

import { MenuButton } from '../../../../shared/components/MenuButton/MenuButton'

import { State } from '@/features/shared/configs/store'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { cn } from '@/features/ui/utils/cn'
import { usePathname, useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'

export const GalaxyTopRight: React.FC = () => {
  const isMenuOpen = useSelector((state: State) => state.shared.isMenuOpen)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lang = useLocale()
  const hrefs = useMemo(() => {
    return LOCALES.map(locale => {
      if (!pathname || !process.env.parsed.NEXT_PUBLIC_URL || !searchParams) {
        return null
      }
      const url = new URL(pathname, process.env.parsed.NEXT_PUBLIC_URL)
      searchParams.forEach((value, key) => {
        url.searchParams.set(key, value)
      })

      url.searchParams.set('lang', locale)

      return url.toString()
    })
  }, [pathname, searchParams])

  return (
    <div className="flex items-center">
      <div className="flex-row items-center justify-center">
        {LOCALES.map((locale, i) => {
          const href = hrefs[i]
          if (!href) return null
          return (
            <Fragment key={locale}>
              <NextLink
                className={cn(
                  'truncate mr-[10px] transition-colors hover:border-b-transparent',
                  TypographyVariants({ socialLarge: 'lg' }),
                  isMenuOpen &&
                    cn(
                      'hover:text-pink-60 disabled:text-black-20 active:text-blue-100 active:bg-pink-100',
                      lang !== locale ? 'text-pink-50' : 'text-pink-100',
                      lang === locale && 'border-b border-solid border-current'
                    ),
                  !isMenuOpen &&
                    cn(
                      'hover:text-blue-50 disabled:text-black-20  active:bg-blue-100 active:text-pink-100',
                      lang !== locale ? 'text-blue-50' : ' text-blue-100',
                      lang === locale && 'border-b border-solid border-current'
                    )
                )}
                href={href}
                locale={locale}
              >
                {locale.toUpperCase()}
              </NextLink>
            </Fragment>
          )
        })}
      </div>
      <MenuButton />
    </div>
  )
}
