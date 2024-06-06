import { DetailpageContainer } from '@/features/pages/containers/DetailpageContainer/DetailpageContainer'
import { CATEGORIES, Category } from '@/features/shared/utils/categories'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
interface Props {
  params: { category: string; id: string }
}

function assertIsCategory(category: string): asserts category is Category {
  if (!Object.values(CATEGORIES).includes(category as Category)) {
    notFound()
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any): Promise<Metadata> {
  const { searchParams } = props
  const lang = searchParams.lang as string
  const metaData = getMetaDataTranslations(lang)

  return {
    title: metaData.metaTitle,
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
