'use client'
import { LOCALES } from '@/features/shared/constants/locales'
import NextLink from 'next/link'
import { Fragment } from 'react'

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

  return (
    <div className="flex items-center">
      <div className="flex-row items-center justify-center">
        {LOCALES.map(locale => {
          if (!pathname || !process.env.NEXT_PUBLIC_URL || !searchParams) {
            return null
          }
          const url = new URL(pathname, process.env.NEXT_PUBLIC_URL)
          searchParams.forEach((value, key) => {
            url.searchParams.set(key, value)
          })

          url.searchParams.set('lang', locale)

          return (
            <Fragment key={locale}>
              <NextLink
                className={cn(
                  'truncate mr-[10px]',
                  TypographyVariants({ social: 'lg' }),
                  isMenuOpen &&
                    cn(
                      'hover:text-pink-60 disabled:text-pink-50',
                      lang !== locale ? 'text-pink-60' : 'text-pink-100'
                    ),
                  !isMenuOpen &&
                    cn(
                      'hover:text-blue-60 disabled:text-blue-50',
                      lang !== locale ? 'text-blue-50' : ' text-blue-100'
                    )
                )}
                href={url.href}
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
