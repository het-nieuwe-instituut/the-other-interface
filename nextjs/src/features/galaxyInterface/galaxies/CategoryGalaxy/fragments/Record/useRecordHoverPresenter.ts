import { useZoom2HoverRecordResult } from '@/features/shared/hooks/queries/useZoom2HoverRecordResult'
import { CloudCategory } from '../../../../../shared/utils/categories'

export const useRecordHoverPresenter = (id?: string | null, category?: CloudCategory) => {
  const { data } = useZoom2HoverRecordResult({ id, category })
  console.log(data)
  return {
    data,
  }
}
