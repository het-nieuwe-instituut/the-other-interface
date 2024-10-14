import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
import { Metadata } from 'next'
import { MetaDataProps } from '../readmore/page'
import { createTypeSafeTranslation } from '@/features/shared/utils/translations'
import {
  StaticPageContainer,
  StaticPageLink,
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
  const title = createTypeSafeTranslation('footer').t('disclaimer') || ''
  const { t } = createTypeSafeTranslation('disclaimer')

  const lbaUrl = 'https://www.linkedbyair.net/about'
  const lifelyUrl = 'https://lifely.nl/en/'
  const triplyUrl = 'https://triply.cc/'

  return (
    <StaticPageContainer title={title}>
      <StaticPageSectionTitle>{t('colophonTitle')}</StaticPageSectionTitle>
      <StaticPageParagraph>
        {t('designPartner')}
        <StaticPageLink external href={lbaUrl} label="Linked by Air" />
      </StaticPageParagraph>
      <StaticPageParagraph>
        {t('devPartner')}
        <StaticPageLink external href={lifelyUrl} label="Lifely" />
      </StaticPageParagraph>
      <StaticPageParagraph>
        {t('dataPartner')}
        <StaticPageLink external href={triplyUrl} label="Triply" />
      </StaticPageParagraph>
      <StaticPageParagraph>{t('visualIdentity')}</StaticPageParagraph>
      <StaticPageParagraph>
        {t('editorial')}
        <StaticPageLink
          href="mailto:webredactie@nieuweinstituut.nl"
          label="webredactie@nieuweinstituut.nl"
        />
      </StaticPageParagraph>

      <StaticPageSectionTitle>{t('disclaimerTitle')}</StaticPageSectionTitle>
      <StaticPageParagraph>{t('disclaimerP1')}</StaticPageParagraph>
      <StaticPageParagraph>
        {t('disclaimerP2')}
        <StaticPageLink
          href="mailto:webredactie@nieuweinstituut.nl"
          label="webredactie@nieuweinstituut.nl"
        />
      </StaticPageParagraph>
      <StaticPageParagraph>
        {t('disclaimerP3')}
        <StaticPageLink
          href="mailto:webredactie@nieuweinstituut.nl"
          label="webredactie@nieuweinstituut.nl"
        />
      </StaticPageParagraph>

      <StaticPageSectionTitle>{t('aiTitle')}</StaticPageSectionTitle>
      <StaticPageParagraph>{t('paragraphAI')}</StaticPageParagraph>

      <StaticPageSectionTitle>{t('mediaTitle')}</StaticPageSectionTitle>
      <StaticPageParagraph>
        {t('mediaParagraph1')}
        <StaticPageLink
          href="https://creativecommons.org/publicdomain/zero/1.0/deed.nl"
          label="CC-0 (1.0)"
          external
        />
        .{t('mediaParagraph2')}
      </StaticPageParagraph>

      <StaticPageSectionTitle>{t('organizationTitle')}</StaticPageSectionTitle>
      <StaticPageParagraph>Nieuwe Instituut</StaticPageParagraph>
      <StaticPageParagraph>Museumpark 25 3015CB Rotterdam</StaticPageParagraph>
      <StaticPageParagraph>
        {t('telephone')} +31(0)10-4401200 email:&nbsp;
        <StaticPageLink href="mailto:info@nieuweinstituut.nl" label="info@nieuweinstituut.nl" />
      </StaticPageParagraph>
      <StaticPageParagraph>Kamer van Koophandel Rotterdam: 54584353</StaticPageParagraph>
      <StaticPageParagraph>{t('btw')} NL851360683B01</StaticPageParagraph>

      <StaticPageSectionTitle>{t('privacyTitle')}</StaticPageSectionTitle>
      <StaticPageParagraph>{t('privacyP1')}</StaticPageParagraph>
      <StaticPageParagraph>{t('privacyP2')}</StaticPageParagraph>
      <StaticPageParagraph>{t('privacyP3')}</StaticPageParagraph>
    </StaticPageContainer>
  )
}
