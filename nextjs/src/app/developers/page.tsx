import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
import { Metadata } from 'next'
import { LayerWrapper } from '@/features/shared/components/Layers/LayerWrapper'
import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { StaticHeader } from '@/features/shared/components/StaticHeader/StaticHeader'
import { TypographyVariants } from '@/features/ui/components/typography/variants'
import { MetaDataProps } from '../readmore/page'

export async function generateMetadata(props: MetaDataProps): Promise<Metadata> {
  const { searchParams } = props
  const lang = searchParams.lang as string
  const metaData = getMetaDataTranslations(lang)

  return {
    title: metaData.metaTitle,
  }
}

export default async function Page() {
  const { t } = useTypeSafeTranslation('footer')
  return (
    <div className="h-full bg-ivory-100">
      <div className="bg-ivory-100 pb-[42px]">
        <StaticHeader />
      </div>
      <LayerWrapper
        LeftContent={<PageHeader title={t('forDevs')} />}
        BottomContent={
          <div className={'mx-auto flex max-w-[90em] flex-col gap-[10px] px-6 pt-6'}>
            <p className={TypographyVariants({ socialLarge: 'lg', className: 'font-bold' })}>
              {'Placeholder: '}
            </p>
            <p className={TypographyVariants({ socialLarge: 'lg' })}>
              {
                'Uitleg over waar de code te vinden is (Github) en hoe de Collectie data gevonden kan worden voor andere applicaties via onze SPARQL Endpoint'
              }
            </p>
          </div>
        }
      />
    </div>
  )
}
