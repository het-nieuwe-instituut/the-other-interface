'use client'
import { MenuPagesQuery } from 'src/generated/graphql'
import { usePresenter } from './usePresenter'
import LogoSvg from '@/features/modules/components/LogoSvg/LogoSvg'
import Link from 'next/link'
import { useTypeSafeTranslation } from '../../hooks/translations'
import { StandaloneLink } from 'src/app/ks/link/StandaloneLink'

type Props = {
  menupages?: MenuPagesQuery
}

export const Footer = ({ menupages }: Props) => {
  const { lang, logoSize } = usePresenter(menupages)
  const { t } = useTypeSafeTranslation('common')

  return (
    <div className="relative z-[9996] w-full bg-ivory-90 opacity-100">
      <div className="container max-w-full p-6 pb-12">
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div>
              <Link href={`https://nieuweinstituut.nl/${lang ?? 'nl'}`}>
                <LogoSvg width={logoSize?.width} height={logoSize?.height} />
              </Link>
            </div>

            <div className="pt-6">
              <div className="">
                <Link href="https://goo.gl/maps/m5EvkSa3z321G68z6">
                  <p className="font-social-large text-[21px] tracking-[0.21px]">
                    Nieuwe Instituut
                  </p>
                  <p className="font-social-large text-[21px] tracking-[0.21px]">Museumpark 25</p>
                  <p className="font-social-large text-[21px] tracking-[0.21px]">
                    {' '}
                    3015CB Rotterdam
                  </p>
                </Link>
              </div>

              <div className="pt-6">
                <Link href="tel:+31(0)10-4401200">
                  <p className="font-social-large text-[21px] tracking-[0.21px]">
                    +31(0)10-4401200
                  </p>
                </Link>
                <Link href={`mailto:info@nieuweinstituut.nl`}>
                  <p className="font-social-large text-[21px] tracking-[0.21px]">
                    theotherinterface
                  </p>
                  <p className="font-social-large text-[21px] tracking-[0.21px]">
                    info@nieuweinstituut.nl
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 lg:col-span-2">
            <div className="grid md:grid-cols-1 lg:grid-cols-2">
              <div className="pb-8">
                <div>
                  <StandaloneLink href={'#'}>Exhibitions and activities</StandaloneLink>
                  <StandaloneLink href={'#'}>Browse our web magazine</StandaloneLink>
                  <StandaloneLink href={'#'}>Subscribe to our newsletter</StandaloneLink>
                </div>
                <div className="pt-8">
                  <StandaloneLink href={'#'}>Colophon</StandaloneLink>
                  <StandaloneLink href={'#'}>Disclaimer</StandaloneLink>
                </div>
              </div>
              <div>
                <p className="font-social-large text-[14px]">{t('languageDisclaimer')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
