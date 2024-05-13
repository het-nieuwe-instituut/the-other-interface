import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { getZoomRecordHoverTask } from '@/features/pages/tasks/getZoomRecordHoverTask'
import { EntityNames } from 'src/generated/graphql'

export function useZoomHoverRecordResult({
  id,
  category,
}: {
  id?: string | null
  category?: EntityNames | null
}) {
  const api = initApiClientService()

  const queryFn = () => getZoomRecordHoverTask({ id, category, api })

  return useQuery({
    queryKey: [id, category],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
