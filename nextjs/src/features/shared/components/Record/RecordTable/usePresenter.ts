import { usePaginationedRecordRelations } from '@/features/record/hooks/usePaginationedRecordRelations'
import { Category } from '@/features/shared/utils/categories'
import { useParams } from 'next/navigation'

export interface PaginationPagesTypes {
  people?: number
  objects?: number
  archives?: number
  publications?: number
}

export const usePresenter = (category: Category) => {
  const params = useParams()
  const id = params?.id as string
  const type = params?.category as Category

  const { data, hasNextPage, fetchNextPage } = usePaginationedRecordRelations(type, id, category)

  return {
    data,
    hasNextPage,
    fetchNextPage,
  }
}
