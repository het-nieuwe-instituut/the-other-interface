import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
import { Metadata } from 'next'
import { MetaDataProps } from '../readmore/page'
import {
  StaticPageContainer,
  StaticPageLink,
  StaticPageList,
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
  const title = createTypeSafeTranslation('navigation').t('contribute')
  const { t } = createTypeSafeTranslation('contribute')

  const contactFormUrl = 'https://forms.nieuweinstituut.nl/asterisk-suggestions-form/'

  return (
    <StaticPageContainer title={title || ''}>
      <StaticPageParagraph>{t('introP1')}</StaticPageParagraph>
      <StaticPageParagraph>{t('introP2')}</StaticPageParagraph>

      <StaticPageSectionTitle>{t('whyTitle')}</StaticPageSectionTitle>
      <StaticPageList items={[t('why1') || '', t('why2') || '', t('why3') || '']} />

      <StaticPageSectionTitle>{t('howToTitle')}</StaticPageSectionTitle>
      <StaticPageList items={[t('howTo1') || '', t('howTo2') || '', t('howTo3') || '']} />

      <StaticPageSectionTitle>{t('guidelinesTitle')}</StaticPageSectionTitle>
      <StaticPageList
        items={[
          t('guidelines1') || '',
          t('guidelines2') || '',
          t('guidelines3') || '',
          t('guidelines4') || '',
        ]}
      />

      <StaticPageParagraph>
        {t('whySection1')}
        <StaticPageLink
          href="mailto:collectieplatform@nieuweinstituut.nl"
          label="collectieplatform@nieuweinstituut.nl"
        />
        {t('whySection2')}
      </StaticPageParagraph>

      <StaticPageSectionTitle>{t('asteriskTitle')}</StaticPageSectionTitle>
      <StaticPageParagraph>
        {t('asteriskParagraphSection1')}
        <StaticPageLink href={contactFormUrl} external label={t('asteriskFormLink') || ''} />
        {t('asteriskParagraphSection2')}
      </StaticPageParagraph>
    </StaticPageContainer>
  )
}
