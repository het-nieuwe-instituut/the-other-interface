import { getMetaDataTranslations } from 'src/getMetaDataTranslations'
import { Metadata } from 'next'
import { LayerWrapper } from '@/features/shared/components/Layers/LayerWrapper'
import { PageHeader } from '@/features/editorial/components/PageHeader/PageHeader'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { StaticHeader } from '@/features/shared/components/StaticHeader/StaticHeader'
import { TypographyVariants } from '@/features/ui/components/typography/variants'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any): Promise<Metadata> {
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
    <div className="bg-ivory-100 h-full">
      <div className="bg-ivory-100 pb-[42px]">
        <StaticHeader />
      </div>
      <LayerWrapper
        LeftContent={<PageHeader title={t('disclaimer')} />}
        BottomContent={
          <div className={'mx-auto flex max-w-[90em] flex-col gap-[10px] px-6 pt-6'}>
            <p className={TypographyVariants({ socialLarge: 'lg', className: 'font-bold' })}>
              {'Placeholder: '}
            </p>
            <p className={TypographyVariants({ socialLarge: 'lg', className: 'font-bold' })}>
              {'Disclaimer: '}
            </p>
            <p className={TypographyVariants({ socialLarge: 'lg' })}>
              {
                'Nieuwe Instituut heeft ernaar gestreefd auteursrechten volgens de wettelijke bepalingen te regelen. Zij die menen nog zekere rechten te kunnen doen gelden, kunnen zich wenden tot het Nieuwe Instituut. De auteursrechten en andere intellectuele eigendomsrechten op de teksten, illustraties en ander beschermd materiaal op deze website berusten bij het Nieuwe Instituut respectievelijk de rechthebbenden van dat materiaal.'
              }
            </p>
          </div>
        }
      />
    </div>
  )
}
