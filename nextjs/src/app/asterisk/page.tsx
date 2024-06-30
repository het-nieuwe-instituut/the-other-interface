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
  const { t } = useTypeSafeTranslation('asterisk')
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
