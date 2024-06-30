import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
import { Metadata } from 'next'
import { LayerWrapper } from '@/features/shared/components/Layers/LayerWrapper'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { StaticHeader } from '@/features/shared/components/StaticHeader/StaticHeader'
import { MetaDataProps } from '../readmore/page'
import {
  StaticPageParagraph,
  StaticPageSectionTitle,
} from '@/features/shared/components/StaticPage/staticPageComponents'
import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'

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
    <div className="h-full bg-ivory-100">
      <div className="bg-ivory-100 pb-[42px]">
        <StaticHeader />
      </div>
      <LayerWrapper
        LeftContent={<PageHeader title={title} />}
        BottomContent={
          <div className={'mx-auto flex max-w-[90em] flex-col gap-[10px] px-6 pt-6'}>
            {introParagraphs.map((p, i) => (
              <StaticPageParagraph key={i}>{p}</StaticPageParagraph>
            ))}

            <StaticPageSectionTitle>{t('missionTitle')}</StaticPageSectionTitle>
            {missionParagraphs.map((p, i) => (
              <StaticPageParagraph key={i}>{p}</StaticPageParagraph>
            ))}
          </div>
        }
      />
    </div>
  )
}
