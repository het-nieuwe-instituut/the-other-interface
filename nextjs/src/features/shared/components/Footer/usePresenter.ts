import { useSearchParams } from "next/navigation"
import { MenuPagesQuery } from "src/generated/graphql"

export const usePresenter = ( menupages: MenuPagesQuery) => {
  const menupagesCpy = menupages?.menupages?.data
  const sectionOne = menupagesCpy?.slice(0, 5)
  const sectionTwo = menupagesCpy?.slice(5, 10)
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  return {
    sectionOne,
    sectionTwo,
    lang,
    searchParams
  }
}
