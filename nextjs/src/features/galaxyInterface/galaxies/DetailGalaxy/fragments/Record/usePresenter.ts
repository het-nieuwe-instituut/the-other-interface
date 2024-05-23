import { useRouter, useSearchParams } from 'next/navigation'

import { useRecordDetail } from '@/features/shared/hooks/queries/useRecordDetail'
import { Category } from '@/features/shared/utils/categories'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'

export const usePresenter = (id: string, category: Category) => {
  const { data, isLoading } = useRecordDetail(category, id)
  const router = useRouter()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')

  const handleClick = () => {
    let url = `/detail/${category}/${id}`
    url = addLocaleToUrl(url, lang)
    router.push(url)
  }

  return {
    recordDetails: data,
    isLoading,
    handleClick,
  }
}
