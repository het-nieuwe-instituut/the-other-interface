import { useSearchParams } from 'next/navigation'
import { MenuPagesQuery } from 'src/generated/graphql'

export const usePresenter = (menupages?: MenuPagesQuery) => {
  const menupagesCpy = menupages?.menupages?.data
  const midpoint = menupagesCpy ? Math.ceil(menupagesCpy.length / 2) : 0
  const sectionOne = menupagesCpy?.slice(0, midpoint)
  const sectionTwo = menupagesCpy?.slice(midpoint)
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  return {
    sectionOne,
    sectionTwo,
    lang,
    searchParams,
  }
}
