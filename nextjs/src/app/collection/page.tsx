import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
import { Metadata } from 'next'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { MetaDataProps } from '../readmore/page'
import {
  StaticPageContainer,
  StaticPageParagraph,
  StaticPageSectionTitle,
} from '@/features/shared/components/StaticPage/staticPageComponents'

export async function generateMetadata(props: MetaDataProps): Promise<Metadata> {
  const { searchParams } = props
  const lang = searchParams.lang as string
  const metaData = getMetaDataTranslations(lang)

  return {
    title: metaData.metaTitle,
  }
}

export default async function Page() {
  const title = useTypeSafeTranslation('navigation').t('theCollection')
  const { t } = useTypeSafeTranslation('collection')

  const archiveParagraphs = [
    t('archiveDescription1'),
    t('archiveDescription2'),
    t('archiveDescription3'),
    t('archiveDescription4'),
  ]

  const libraryParagraphs = [t('libraryDescription1'), t('libraryDescription2')]

  return (
    <StaticPageContainer title={title || ''}>
      <StaticPageParagraph>{t('intro')}</StaticPageParagraph>

      <StaticPageSectionTitle>{t('archiveTitle')}</StaticPageSectionTitle>
      {archiveParagraphs.map((p, i) => (
        <StaticPageParagraph key={i}>{p}</StaticPageParagraph>
      ))}

      <StaticPageSectionTitle>{t('libraryTitle')}</StaticPageSectionTitle>
      {libraryParagraphs.map((p, i) => (
        <StaticPageParagraph key={i}>{p}</StaticPageParagraph>
      ))}
    </StaticPageContainer>
  )
}
