'use client'

import { useParams, usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { State } from '../../configs/store'
import { StaticHeader } from '../StaticHeader/StaticHeader'

export const NavigationStaticHeader = () => {
  const isMenuOpen = useSelector((state: State) => state?.shared?.isMenuOpen)
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

  return pathname && galaxyPathNames.includes(pathname) && isMenuOpen ? (
    <StaticHeader className="absolute" />
  ) : null
}
