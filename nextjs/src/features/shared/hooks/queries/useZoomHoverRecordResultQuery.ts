import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { getZoomRecordHoverTask } from '@/features/pages/tasks/getZoomRecordHoverTask'
import { EntityNames } from 'src/generated/graphql'
import { useLocale } from '../useLocale'
import { Category } from '../../utils/categories'

export function useZoomHoverRecordResultQuery({
  id,
  category,
}: {
  id?: string | null
  category?: Category | EntityNames | null
}) {
  const api = initApiClientService()
  const locale = useLocale()

  const queryFn = () => getZoomRecordHoverTask({ id, category, api, locale })

  return useQuery({
    queryKey: ['zoom-hover-result', id, category],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
