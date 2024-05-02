import { useQuery } from '@tanstack/react-query'
import { CloudCategory } from '../../utils/categories'
import initApiClientService from '../../utils/initApiClientService'
import { getZoom2HoverTask } from '@/features/pages/tasks/getZoom2HoverTask'

export function useZoom2HoverRecordResult({
  id,
  category,
}: {
  id?: string | null
  category?: CloudCategory | null
}) {
  const api = initApiClientService()

  const queryFn = () => getZoom2HoverTask({ id, category, api })

  return useQuery({
    queryKey: [id, category],
    queryFn,
    refetchOnWindowFocus: false,
  })
}
