import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useRouter } from 'next/navigation'

import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useState } from 'react'
import { CategoryCloud } from '../types'
import { useZoom2Params } from '@/features/shared/hooks/useZoom2Params'
import { useSearchByCategoryQuery } from '@/features/shared/hooks/queries/useSearchByCategoryQuery'
import { CollectionHighlightsFilter } from '@/features/galaxyInterface/components/GalaxyWrapper/Suggestions/Suggestions'
import { encodeFilters } from '@/features/shared/helpers/searchHelpers'

export const usePresenter = (cloud: CategoryCloud) => {
  const { t } = useTypeSafeTranslation('homepage')
  const router = useRouter()
  const { lang } = useZoom2Params()
  const [enabled, setEnabled] = useState(false)
  const { title: category, size, cloudPosition, titlePosition } = cloud

  const { data } = useSearchByCategoryQuery({
    category,
    enabled,
  })

  const handleCloudClick = () => {
    let url = `/landingpage?category=${category}&filters=${encodeFilters([
      CollectionHighlightsFilter,
    ])}&searchResult=true&fallback=true`
    url = addLocaleToUrl(url, lang)
    router.push(url)
  }

  return {
    handleCloudClick,
    setEnabled,
    t,
    category,
    size,
    cloudPosition,
    titlePosition,
    data: data?.items || [],
  }
}
