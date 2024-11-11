'use client'

import { State } from '@/features/shared/configs/store'
import { LOCALES } from '@/features/shared/constants/locales'
import { useLocale } from '@/features/shared/hooks/useLocale'
import { MenuTypogrpahyVariants } from '@/features/ui/components/typography/menuVariants'
import { cn } from '@/features/ui/utils/cn'
import { usePathname, useSearchParams } from 'next/navigation'
import { Fragment, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { MenuButton } from '../../../../shared/components/MenuButton/MenuButton'

interface Props {
  hideMenu?: boolean
}

export const GalaxyTopRight: React.FC<Props> = ({ hideMenu = false }) => {
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

  const handleLanguageChange = (newLocale: string, href: string) => {
    // Set the new locale in a cookie or local storage
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`

    // Force a full page reload to trigger server-side rendering
    window.location.href = href
  }

  return (
    <div className="flex items-center">
      <div className="flex-row items-center justify-center">
        {LOCALES.map((locale, i) => {
          const href = hrefs[i]
          if (!href) return null
          return (
            <Fragment key={locale}>
              <button
                className={cn(
                  'truncate mr-[10px] transition-colors',
                  isMenuOpen &&
                    cn(
                      MenuTypogrpahyVariants({ inverted: 'small' }),
                      lang !== locale && 'opacity-50',
                      lang === locale && 'border-b border-solid border-current'
                    ),
                  !isMenuOpen &&
                    cn(
                      MenuTypogrpahyVariants({ default: 'small' }),
                      lang !== locale && 'opacity-50',
                      lang === locale && 'border-b border-solid border-current'
                    )
                )}
                onClick={() => handleLanguageChange(locale, href)}
              >
                {locale.toUpperCase()}
              </button>
            </Fragment>
          )
        })}
      </div>
      <div className={cn(hideMenu ? 'invisible' : 'visible')}>
        <MenuButton />
      </div>
    </div>
  )
}
