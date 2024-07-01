import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
import { Metadata } from 'next'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { MetaDataProps } from '../readmore/page'
import {
  StaticPageContainer,
  StaticPageLink,
  StaticPageList,
  StaticPageParagraph,
  StaticPageSectionTitle,
  getStaticPageMarkdownLink,
} from '@/features/shared/components/StaticPage/staticPageComponents'
import { addLocaleToUrl } from '@/features/shared/helpers/addLocaleToUrl'
import { getLocaleFromParams } from '@/features/shared/helpers/getLocaleFromParams'

export async function generateMetadata(props: MetaDataProps): Promise<Metadata> {
  const { searchParams } = props
  const lang = searchParams.lang as string
  const metaData = getMetaDataTranslations(lang)

  return {
    title: metaData.metaTitle,
  }
}

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  const title = useTypeSafeTranslation('navigation').t('externalSources')
  const { t } = useTypeSafeTranslation('externalSources')
  const locale = getLocaleFromParams(searchParams)

  const wikiUrl = 'https://www.wikidata.org/wiki/Wikidata:Main_Page'
  const rkdUrl = 'https://www.rkd.nl/en'
  const gettyUrl = 'https://www.getty.edu/research/tools/vocabularies/aat/'
  const suggestionUrl =
    'https://forms.office.com/pages/responsepage.aspx?id=-nOvvAYyuU2cuMU4_1TahnU7jGT5k41AuJISCxkAcUdUNDdZRFQ5UjA4VDlUOVpISk1USzhHU0hMSi4u'
  const triplyUrl = 'https://triply.cc/triplydb/'
  const developersUrl = addLocaleToUrl('/developers', locale)

  return (
    <StaticPageContainer title={title || ''}>
      <StaticPageParagraph>{t('intro')}</StaticPageParagraph>

      <StaticPageSectionTitle>{t('whichSourceTitle')}</StaticPageSectionTitle>
      <StaticPageParagraph>{t('whichSourceIntro')}</StaticPageParagraph>
      <StaticPageList
        items={[
          getStaticPageMarkdownLink({ href: wikiUrl, label: t('sourceWiki') || '' }),
          getStaticPageMarkdownLink({ href: rkdUrl, label: t('sourceRkd') || '' }),
          getStaticPageMarkdownLink({ href: gettyUrl, label: t('sourceGetty') || '' }),
        ]}
      />
      <StaticPageParagraph>{t('whichSourceP1')}</StaticPageParagraph>
      <StaticPageParagraph>
        {t('whichSourceP2')}
        <StaticPageLink href="mailto:info@nieuweinstituut.nl" label="info@nieuweinstituut.nl" />.
      </StaticPageParagraph>

      <StaticPageSectionTitle>{t('benefitsTile')}</StaticPageSectionTitle>
      <StaticPageParagraph>{t('benefitsP1')}</StaticPageParagraph>
      <StaticPageParagraph>{t('benefitsP2')}</StaticPageParagraph>
      <StaticPageParagraph>
        {t('benefitsP3Section1')}
        <StaticPageLink href={suggestionUrl} external label={t('suggestionFormLink') || ''} />
        {t('benefitsP3Section2')}
      </StaticPageParagraph>

      <StaticPageSectionTitle>{t('howTitle')}</StaticPageSectionTitle>
      <StaticPageParagraph>
        {t('howP1Section1')}
        <StaticPageLink href={triplyUrl} external label={'TriplyDB'} />
        {t('howP1Section2')}
      </StaticPageParagraph>
      <StaticPageParagraph>
        {t('howP2')}
        <StaticPageLink href={developersUrl} label={t('notesForDevs') || ''} />.
      </StaticPageParagraph>
    </StaticPageContainer>
  )
}
