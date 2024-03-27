import { usePaginationedRecordRelations } from '@/features/shared/hooks/queries/usePaginationedRecordRelations'
import { Category } from '@/features/shared/utils/categories'
import { useParams } from 'next/navigation'

export interface PaginationPagesTypes {
  people: number
  objects: number
  archives: number
  publications: number
}

export const usePresenter = (pages: PaginationPagesTypes) => {
  const params = useParams()
  const id = params?.id as string
  const type = params?.category as Category
  console.log('usePresenter', pages)
  const { data } = usePaginationedRecordRelations(type, id, pages)

  return {
    data,
  }
}
