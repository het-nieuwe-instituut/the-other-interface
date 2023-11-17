import useTranslation from 'next-translate/useTranslation'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { draftMode } from 'next/headers'
import { PublicationState } from '@/features/shared/types/enums'
import { DetailpageContainer } from '@/features/pages/containers/DetailpageContainer/DetailpageContainer'
import { notFound } from 'next/navigation'
import { getRecordEditorialContent } from '@/features/pages/tasks/getRecordEditorialContent'

function assertIsCategory(category: string): asserts category is Category {
  if (!Object.values(CATEGORIES).includes(category as Category)) {
    notFound()
  }
}

export default async function Page({ params }: { params: { category: string; id: string } }) {
  const { category } = params

  assertIsCategory(category)

  const { isEnabled } = draftMode()

  return <DetailpageContainer category={category} isDraftMode={isEnabled} />
}
