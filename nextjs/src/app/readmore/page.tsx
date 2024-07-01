import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
import { Metadata } from 'next'
import {
  StaticPageContainer,
  StaticPageLink,
  StaticPageParagraph,
} from '@/features/shared/components/StaticPage/staticPageComponents'
import { createTypeSafeTranslation } from '@/features/shared/utils/translations'

export type MetaDataProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(props: MetaDataProps): Promise<Metadata> {
  const { searchParams } = props
  const lang = searchParams.lang as string
  const metaData = getMetaDataTranslations(lang)

  return {
    title: metaData.metaTitle,
  }
}

export default async function Page() {
  const title = createTypeSafeTranslation('navigation').t('readMore')
  const { t } = createTypeSafeTranslation('readmore')
  const [p1, p2, p3] = [t('paragraph1'), t('paragraph2'), t('paragraph3')]

  return (
    <StaticPageContainer title={title || ''}>
      <StaticPageParagraph>{p1}</StaticPageParagraph>
      <StaticPageParagraph>{p2}</StaticPageParagraph>
      <StaticPageParagraph>
        {p3}
        <StaticPageLink href="mailto:info@nieuweinstituut.nl" label="info@nieuweinstituut.nl" />.
      </StaticPageParagraph>
    </StaticPageContainer>
  )
}
