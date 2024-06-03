import LogoSvg from '@/features/modules/components/LogoSvg/LogoSvg'
import Link from 'next/link'
import { useTypeSafeTranslation } from '../../hooks/translations'
import { useLocale } from '../../hooks/useLocale'
import { NavLinkButton } from '@/features/ui/components/nav-link-button/component'
import ExternalLink from '@/features/ui/icons/external-link.svg'

export const Footer = () => {
  const lang = useLocale()
  const logoSize = { width: 280, height: 129 }
  const { t } = useTypeSafeTranslation('common')
  const Icon = ExternalLink

  return (
    <div className="relative z-[FOOTER_Z_INDEX] w-full bg-ivory-90 pt-8 opacity-100 flex">
      <div className="container max-w-[1392px] p-6 pb-12 m-auto">
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href={`https://nieuweinstituut.nl/${lang ?? 'nl'}`}>
              <LogoSvg width={logoSize?.width} height={logoSize?.height} />
            </Link>
            <div className="pt-6">
              <Link href="https://goo.gl/maps/m5EvkSa3z321G68z6">
                <p className="font-social-large text-[21px] tracking-[0.21px]">Nieuwe Instituut</p>
                <p className="font-social-large text-[21px] tracking-[0.21px]">Museumpark 25</p>
                <p className="font-social-large text-[21px] tracking-[0.21px]">3015CB Rotterdam</p>
              </Link>
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
                  <NavLinkButton href={'#'} className="mb-1">
                    Exhibitions and activities <Icon className="size-5" />
                  </NavLinkButton>
                  <NavLinkButton href={'#'} className="mb-1">
                    Browse our web magazine <Icon className="size-5" />
                  </NavLinkButton>
                  <NavLinkButton href={'#'}>
                    Subscribe to our newsletter <Icon className="size-5" />
                  </NavLinkButton>
                </div>
                <div className="pt-8">
                  <NavLinkButton href={'#'} className="mb-1">
                    Colophon
                  </NavLinkButton>
                  <NavLinkButton href={'#'}>Disclaimer</NavLinkButton>
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
