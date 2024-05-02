import { useQuery } from '@tanstack/react-query'
import { CloudCategory } from '../../utils/categories'
import initApiClientService from '../../utils/initApiClientService'
import { getZoomRecordHoverTask } from '@/features/pages/tasks/getZoomRecordHoverTask'

export function useZoomHoverRecordResult({
  id,
  category,
}: {
  id?: string | null
  category?: CloudCategory | null
}) {
  const api = initApiClientService()

  const queryFn = () => getZoomRecordHoverTask({ id, category, api })

  return useQuery({
    queryKey: [id, category],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
