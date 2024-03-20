import { useTableRecordRelations } from '@/features/shared/hooks/queries/useTableRecordRelations'
import { useParams } from 'next/navigation'

export const usePresenter = () => {
  const params = useParams()
  const id = params?.id as string

  console.log('id', id)
  const { data } = useTableRecordRelations('people', id)

  return {
    data,
  }
}
