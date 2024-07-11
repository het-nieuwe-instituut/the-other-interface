import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
import { Metadata } from 'next'
import { MetaDataProps } from '../readmore/page'
import {
  StaticPageContainer,
  StaticPageParagraph,
  StaticPageSectionTitle,
} from '@/features/shared/components/StaticPage/staticPageComponents'
import { createTypeSafeTranslation } from '@/features/shared/utils/translations'

export async function generateMetadata(props: MetaDataProps): Promise<Metadata> {
  const { searchParams } = props
  const lang = searchParams.lang as string
  const metaData = getMetaDataTranslations(lang)

  return {
    title: metaData.metaTitle,
  }
}

export default async function Page() {
  const title = createTypeSafeTranslation('navigation').t('asterisk')
  const { t } = createTypeSafeTranslation('asterisk')
  const introParagraphs = [t('introP1'), t('introP2')]
  const missionParagraphs = [t('missionP1'), t('missionP2')]

  return (
    <StaticPageContainer title={title || ''}>
      {introParagraphs.map((p, i) => (
        <StaticPageParagraph key={i}>{p}</StaticPageParagraph>
      ))}

      <StaticPageSectionTitle>{t('missionTitle')}</StaticPageSectionTitle>
      {missionParagraphs.map((p, i) => (
        <StaticPageParagraph key={i}>{p}</StaticPageParagraph>
      ))}
    </StaticPageContainer>
  )
}
