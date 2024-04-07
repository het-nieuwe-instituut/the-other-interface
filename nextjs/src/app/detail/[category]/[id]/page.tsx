import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { draftMode } from 'next/headers'
import { DetailpageContainer } from '@/features/pages/containers/DetailpageContainer/DetailpageContainer'
import { notFound } from 'next/navigation'
// import initApiServerService from '@/features/shared/utils/initApiServerService'

interface Props {
  params: { category: string; id: string }
}

function assertIsCategory(category: string): asserts category is Category {
  if (!Object.values(CATEGORIES).includes(category as Category)) {
    notFound()
  }
}

export default async function Page({ params }: Props) {
  const { category } = params

  assertIsCategory(category)

  const { isEnabled } = draftMode()

  return <DetailpageContainer category={category} isDraftMode={isEnabled} />
}
