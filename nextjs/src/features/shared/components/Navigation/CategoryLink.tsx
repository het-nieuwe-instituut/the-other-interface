'use client'

import { MenuTypogrpahyVariants } from '@/features/ui/components/typography/menuVariants'
import { cn } from '@/features/ui/utils/cn'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { USER_LOOKS_ON } from '../../constants/mainConstants'
import { sharedActions } from '../../stores/shared.store'
import { categories, Fonts } from './Navigation.constants'

export const CategoryLink = ({
  category,
  children,
  url,
}: {
  category: (typeof categories)[number]
  children: string
  url: string
}) => {
  const dispatch = useDispatch()
  const userLooksOn = useSelector((state: State) => state.shared.userLooksOn)
  const params = useParams()
  const pathname = usePathname()
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

  return (
    <div key={category.name}>
      <Link
        onClick={() => dispatch(sharedActions.menuOpen({ isMenuOpen: false }))}
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
        {children}
      </Link>
    </div>
  )
}
