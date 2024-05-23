import { useQuery } from '@tanstack/react-query'
import initApiClientService from '../../utils/initApiClientService'
import { getZoomRecordHoverTask } from '@/features/pages/tasks/getZoomRecordHoverTask'
import { EntityNames } from 'src/generated/graphql'
import { useLocale } from '../useLocale'

export function useZoomHoverRecordResultQuery({
  id,
  category,
}: {
  id?: string | null
  category?: EntityNames | null
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
