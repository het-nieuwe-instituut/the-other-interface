import { usePaginationedRecordRelations } from '@/features/shared/hooks/queries/usePaginationedRecordRelations'
import { Category } from '@/features/shared/utils/categories'
import { useParams } from 'next/navigation'

export const usePresenter = () => {
  const params = useParams()
  const id = params?.id as string
  const type = params?.category as Category

  const { data } = usePaginationedRecordRelations(type, id)

  return {
    data,
  }
}
