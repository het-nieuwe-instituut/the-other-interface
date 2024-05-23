import { useSearchParams } from 'next/navigation'
import { MenuPagesQuery } from 'src/generated/graphql'
import { useBreakpointValue } from '@chakra-ui/react'

export const usePresenter = (menupages?: MenuPagesQuery) => {
  const menupagesCpy = menupages?.menupages?.data
  const midpoint = menupagesCpy ? Math.ceil(menupagesCpy.length / 2) : 0
  const sectionOne = menupagesCpy?.slice(0, midpoint)
  const sectionTwo = menupagesCpy?.slice(midpoint)
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const logoSize = useBreakpointValue({
    sm: {
      width: 280,
      height: 129,
    },
    md: {
      width: 393,
      height: 182,
    },
    lg: {
      width: 364,
      height: 169,
    },
    xl: {
      width: 280,
      height: 129,
    },
    base: {
      width: 280,
      height: 129,
    },
  })

  return {
    sectionOne,
    sectionTwo,
    lang,
    searchParams,
    logoSize,
  }
}
