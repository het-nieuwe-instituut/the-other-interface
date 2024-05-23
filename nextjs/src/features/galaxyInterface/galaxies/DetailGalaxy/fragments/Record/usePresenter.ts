import { useRouter } from 'next/navigation'

import { useRecordDetail } from '@/features/record/hooks/useRecordDetail'
import { Category } from '@/features/shared/utils/categories'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useLocale } from '@/features/shared/hooks/useLocale'

export const usePresenter = (id: string, category: Category) => {
  const { data, isLoading } = useRecordDetail(category, id)
  const router = useRouter()
  const lang = useLocale()

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
