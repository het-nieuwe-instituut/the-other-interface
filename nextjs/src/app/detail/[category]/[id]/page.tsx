import { DetailpageContainer } from '@/features/pages/containers/DetailpageContainer/DetailpageContainer'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { notFound } from 'next/navigation'
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

  return (
    <>
      <DetailpageContainer category={category} />
    </>
  )
}
