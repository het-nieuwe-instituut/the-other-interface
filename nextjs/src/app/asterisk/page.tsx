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
  const { t } = useTypeSafeTranslation('navigation')
  return (
    <div className="h-full bg-ivory-100">
      <div className="bg-ivory-100 pb-[42px]">
        <StaticHeader />
      </div>
      <LayerWrapper
        LeftContent={<PageHeader title={t('asterisk')} />}
        BottomContent={
          <div className={'mx-auto flex max-w-[90em] flex-col gap-[10px] px-6 pt-6'}>
            <p className={TypographyVariants({ socialLarge: 'lg', className: 'font-bold' })}>
              {'Placeholder: '}
            </p>
            <p className={TypographyVariants({ socialLarge: 'lg' })}>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              }
            </p>
          </div>
        }
      />
    </div>
  )
}
