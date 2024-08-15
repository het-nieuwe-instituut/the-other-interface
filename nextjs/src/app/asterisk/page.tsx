import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
import { Metadata } from 'next'
import { MetaDataProps } from '../readmore/page'
import {
  StaticPageContainer,
  StaticPageLink,
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
  const [c1, c2] = [t('contributeP1'), t('contributeP2')]

  return (
    <StaticPageContainer title={title || ''}>
      {introParagraphs.map((p, i) => (
        <StaticPageParagraph key={i}>{p}</StaticPageParagraph>
      ))}

      <StaticPageSectionTitle>{t('missionTitle')}</StaticPageSectionTitle>
      {missionParagraphs.map((p, i) => (
        <StaticPageParagraph key={i}>{p}</StaticPageParagraph>
      ))}
      <StaticPageSectionTitle>{t('contributeTitle')}</StaticPageSectionTitle>
      <StaticPageParagraph>
        {c1}
        <StaticPageLink
          external
          label={'link'}
          href="https://forms.office.com/pages/responsepage.aspx?id=-nOvvAYyuU2cuMU4_1TahnU7jGT5k41AuJISCxkAcUdUNDdZRFQ5UjA4VDlUOVpISk1USzhHU0hMSi4u"
        ></StaticPageLink>{' '}
        {c2}
      </StaticPageParagraph>
    </StaticPageContainer>
  )
}
