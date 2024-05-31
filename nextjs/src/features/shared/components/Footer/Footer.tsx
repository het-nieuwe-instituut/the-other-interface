'use client'
import { MenuPagesQuery } from 'src/generated/graphql'
import { usePresenter } from './usePresenter'
import LogoSvg from '@/features/modules/components/LogoSvg/LogoSvg'
import Link from 'next/link'
import { useTypeSafeTranslation } from '../../hooks/translations'
import { StandaloneLink } from 'src/app/ks/link/StandaloneLink'
import { TypographyVariants } from '@/features/ui/components/typography/variants'

type Props = {
  menupages?: MenuPagesQuery
}

export const Footer = ({ menupages }: Props) => {
  const { lang, logoSize } = usePresenter(menupages)
  const { t } = useTypeSafeTranslation('common')

  return (
    <div className="relative z-[9996] w-full bg-ivory-90 opacity-100">
      <div className="container max-w-full p-6 pb-12">
        <div className="grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 ">
          <div className="flex flex-[1] flex-col items-start md:row-span-2 xl:flex-[0.5]">
            <div className="flex cursor-pointer flex-col">
              <Link href={`https://nieuweinstituut.nl/${lang ?? 'nl'}`}>
                <LogoSvg width={logoSize?.width} height={logoSize?.height} />
              </Link>
            </div>

            <div className="flex flex-col items-start pt-6">
              <div className="flex flex-col">
                <Link href="https://goo.gl/maps/m5EvkSa3z321G68z6">
                  <p className={TypographyVariants({ social: 'lg' })}>Nieuwe Instituut</p>
                  <p className={TypographyVariants({ social: 'lg' })}>Museumpark 25</p>
                  <p className={TypographyVariants({ social: 'lg' })}> 3015CB Rotterdam</p>
                </Link>
              </div>

              <div className="flex flex-col pt-6">
                <Link href="tel:+31(0)10-4401200">
                  <p className={TypographyVariants({ social: 'lg' })}>+31(0)10-4401200</p>
                </Link>
                <Link href={`mailto:info@nieuweinstituut.nl`}>
                  <p className={TypographyVariants({ social: 'lg' })}>theotherinterface</p>
                  <p className={TypographyVariants({ social: 'lg' })}>info@nieuweinstituut.nl</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-[1] flex-col items-start md:row-span-2 lg:flex-[1] xl:flex-[0.5]">
            <StandaloneLink href={'#'}>Exhibitions and activities</StandaloneLink>
            <StandaloneLink href={'#'}>Browse our web magazine</StandaloneLink>
            <StandaloneLink href={'#'}>Subscribe to our newsletter</StandaloneLink>

            <StandaloneLink href={'#'}>Colophon</StandaloneLink>
            <StandaloneLink href={'#'}>Disclaimer</StandaloneLink>
          </div>
          <div>
            <p className={TypographyVariants({ social: 'md' })}>{t('languageDisclaimer')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
