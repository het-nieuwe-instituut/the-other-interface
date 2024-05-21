import { useQuery } from '@tanstack/react-query'
import { Category } from '../../utils/categories'
import initApiClientService from '../../utils/initApiClientService'
import { getZoomRecordHoverTask } from '@/features/pages/tasks/getZoomRecordHoverTask'
import { useLocale } from '../useLocale'

export function useZoomHoverRecordResult({
  id,
  category,
}: {
  id?: string | null
  category?: Category | null
}) {
  const api = initApiClientService()
  const locale = useLocale()

  const queryFn = () => getZoomRecordHoverTask({ id, category, api, locale })

  return useQuery({
    queryKey: [id, category],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
