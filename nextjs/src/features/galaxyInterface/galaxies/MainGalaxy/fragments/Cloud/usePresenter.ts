import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { useRouter, useSearchParams } from 'next/navigation'

import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { useZoom2SearchResult } from '@/features/shared/hooks/queries/useZoom2SearchResult'
import { useState } from 'react'
import { CategoryCloud } from '../types'

export const usePresenter = (cloud: CategoryCloud) => {
  const { t } = useTypeSafeTranslation('homepage')
  const router = useRouter()
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang')
  const [enabled, setEnabled] = useState(false)
  const { title: category, size, cloudPosition, titlePosition } = cloud

  const { data } = useZoom2SearchResult({
    category,
    enabled,
  })

  const handleCloudClick = () => {
    let url = `/landingpage?category=${category}`
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
    data,
  }
}
