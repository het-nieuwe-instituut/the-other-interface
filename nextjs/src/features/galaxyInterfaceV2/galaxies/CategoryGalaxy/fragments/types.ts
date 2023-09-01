import { CloudCategory } from '@/features/shared/types/categories'

//  WIll be replaced with business logic integrated
export type Record = {
  id: number
  categoryType: CloudCategory
  title: string
  image: string | null
}
