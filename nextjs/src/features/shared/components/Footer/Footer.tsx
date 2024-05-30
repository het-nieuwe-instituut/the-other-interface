'use client'
import { MenuPagesQuery } from 'src/generated/graphql'
import { usePresenter } from './usePresenter'
import LogoSvg from '@/features/modules/components/LogoSvg/LogoSvg'
import Link from 'next/link'
import { useTypeSafeTranslation } from '../../hooks/translations'

type Props = {
  menupages?: MenuPagesQuery
}

export const Footer = ({ menupages }: Props) => {
  const { lang, logoSize } = usePresenter(menupages)
  const { t } = useTypeSafeTranslation('common')

  return (
    <div className="relative z-[9996] w-full bg-ivory-90 opacity-100">
      <div className="container mx-auto  px-4 py-8 ">
        <div className="grid max-w-[1440px] grid-cols-3 gap-4 ">
          <div className="mb-9 flex flex-[1] flex-col items-start lg:flex-[1] xl:flex-[0.5]">
            <div className="mb-9 flex cursor-pointer flex-col">
              <Link href={`https://nieuweinstituut.nl/${lang ?? 'nl'}`}>
                <LogoSvg width={logoSize?.width} height={logoSize?.height} />
              </Link>
            </div>

            <div className="flex flex-col items-start">
              <div className="mb-9 flex w-[339px] flex-col">
                <Link href="https://goo.gl/maps/m5EvkSa3z321G68z6">
                  <p>Nieuwe Instituut</p>
                  <p>Museumpark 25</p>
                  <p> 3015CB Rotterdam</p>
                </Link>
              </div>

              <div className="flex w-[339px] flex-col">
                <Link href="tel:+31(0)10-4401200">
                  <p>+31(0)10-4401200</p>
                </Link>
                <Link href={`mailto:info@nieuweinstituut.nl`}>
                  <p>theotherinterface</p>
                  <p>info@nieuweinstituut.nl</p>
                </Link>
              </div>
            </div>
          </div>
          <div>two</div>
          <div>
            <p>{t('languageDisclaimer')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
