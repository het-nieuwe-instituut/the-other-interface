import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
import { Metadata } from 'next'
import { MetaDataProps } from '../readmore/page'
import { createTypeSafeTranslation } from '@/features/shared/utils/translations'
import {
  StaticPageContainer,
  StaticPageList,
  StaticPageParagraph,
  getStaticPageMarkdownLink,
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
  const title = createTypeSafeTranslation('footer').t('forDevs')
  const { t } = createTypeSafeTranslation('developers')

  const url1 = 'https://collectiedata.hetnieuweinstituut.nl/'
  const url2 = 'https://github.com/het-nieuwe-instituut'

  const link1 = getStaticPageMarkdownLink({ href: url1, label: 'Nieuwe Instituut' })
  const link2 = getStaticPageMarkdownLink({ href: url2, label: 'Het Nieuwe Instituut' })

  return (
    <StaticPageContainer title={title || ''}>
      <StaticPageParagraph>{t('intro')}</StaticPageParagraph>
      <StaticPageList
        items={[`${t('listItem1') || ''}${link1}`, `${t('listItem2') || ''}${link2}`]}
      />
    </StaticPageContainer>
  )
}
