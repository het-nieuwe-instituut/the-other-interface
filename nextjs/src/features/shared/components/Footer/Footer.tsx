import LogoSvg from '@/features/modules/components/LogoSvg/LogoSvg'
import Link from 'next/link'
import { useTypeSafeTranslation } from '../../hooks/translations'
import { useLocale } from '../../hooks/useLocale'
import { NavLinkButton } from '@/features/ui/components/nav-link-button/component'
import ExternalLink from '@/features/ui/icons/external-link.svg'
import { Locale } from 'src/generated/graphql'
import { FOOTER_Z_INDEX } from '../../constants/mainConstants'
import { CSSProperties } from 'react'
import { BelowTheFoldWrapper } from '@/features/editorial/components/BelowTheFoldWrapper'
import { TypographyVariants } from '@/features/ui/components/typography/variants'

export const Footer = () => {
  const lang = useLocale()
  const logoSize = { width: 280, height: 129 }
  const { t } = useTypeSafeTranslation('footer')
  const Icon = ExternalLink

  return (
    <BelowTheFoldWrapper
      style={{ '--z-index': `${FOOTER_Z_INDEX}` } as CSSProperties}
      className="relative z-[var(--z-index)] flex w-full opacity-100"
    >
      <div className="container m-auto max-w-[1392px] p-6 min-[1428px]:px-0">
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="inline-block hover:bg-black-100">
              <Link
                href={`https://nieuweinstituut.nl/${lang ?? 'nl'}`}
                aria-label="Nieuwe instituut logo"
                target="_blank"
                className="hover:text-ivory-100"
              >
                <LogoSvg width={logoSize?.width} height={logoSize?.height} />
              </Link>
            </div>
            <div className="pt-6">
              <div className="inline-block whitespace-nowrap hover:bg-black-100">
                <Link href="https://goo.gl/maps/m5EvkSa3z321G68z6" className="hover:text-ivory-100">
                  <p className={TypographyVariants({ socialLarge: 'lg', className: 'mb-[2px]' })}>
                    Nieuwe Instituut
                  </p>
                  <p className={TypographyVariants({ socialLarge: 'lg', className: 'mb-[2px]' })}>
                    Museumpark 25
                  </p>
                  <p className={TypographyVariants({ socialLarge: 'lg', className: 'mb-[2px]' })}>
                    3015CB Rotterdam
                  </p>
                </Link>
              </div>
              <div className="pt-6">
                <Link href="tel:+31(0)10-4401200">
                  <p
                    className={TypographyVariants({
                      socialLarge: 'lg',
                      className:
                        'hover:text-ivory-100 hover:bg-black-100 mb-[2px] inline-block whitespace-nowrap',
                    })}
                  >
                    +31(0)10-4401200
                  </p>
                </Link>
                <br />
                <Link href={`mailto:info@nieuweinstituut.nl`}>
                  <p
                    className={TypographyVariants({
                      socialLarge: 'lg',
                      className: 'hover:text-ivory-100 hover:bg-black-100 inline-block',
                    })}
                  >
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
                  <NavLinkButton
                    href={
                      lang === Locale.En
                        ? 'https://nieuweinstituut.nl/en/pages/nieuwsbrief'
                        : 'https://nieuweinstituut.nl/pages/nieuwsbrief'
                    }
                    className={TypographyVariants({ socialLarge: 'lg', className: 'mb-2 ' })}
                    variant={'footerPrimary'}
                  >
                    {t('newsletter')} <Icon className="size-5" />
                  </NavLinkButton>
                  <NavLinkButton
                    href={
                      lang === Locale.En
                        ? 'https://nieuweinstituut.nl/en/pages/now-on-display'
                        : 'https://nieuweinstituut.nl/pages/now-on-display'
                    }
                    className={TypographyVariants({ socialLarge: 'lg', className: 'mb-2 ' })}
                    variant={'footerPrimary'}
                  >
                    {t('onDisplay')} <Icon className="size-5" />
                  </NavLinkButton>
                  <NavLinkButton
                    href={
                      lang === Locale.En
                        ? 'https://nieuweinstituut.nl/en/projects/huis-sonneveld'
                        : 'https://nieuweinstituut.nl/projects/huis-sonneveld'
                    }
                    className={TypographyVariants({ socialLarge: 'lg', className: 'mb-2 ' })}
                    variant={'footerPrimary'}
                  >
                    {t('exhibitions')} <Icon className="size-5" />
                  </NavLinkButton>
                </div>
                <div className="pt-8">
                  <NavLinkButton
                    href={
                      lang === Locale.En
                        ? 'https://nieuweinstituut.nl/en/pages/privacy'
                        : 'https://nieuweinstituut.nl/pages/privacy'
                    }
                    className={TypographyVariants({ socialLarge: 'lg', className: 'mb-2 ' })}
                    variant={'footerPrimary'}
                  >
                    {t('privacyPolicy')} <Icon className="size-5" />
                  </NavLinkButton>
                  <NavLinkButton
                    href={'/disclaimer'}
                    className={TypographyVariants({ socialLarge: 'lg', className: 'mb-2 ' })}
                    variant={'footerPrimary'}
                  >
                    {t('disclaimer')}
                  </NavLinkButton>
                  <NavLinkButton
                    href={'/developers'}
                    variant={'footerPrimary'}
                    className={TypographyVariants({ socialLarge: 'lg' })}
                  >
                    {t('forDevs')}
                  </NavLinkButton>
                </div>
              </div>
              <div>
                <p
                  className={TypographyVariants({
                    socialLarge: 'md',
                    className: 'tracking-normal',
                  })}
                >
                  {t('languageDisclaimer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BelowTheFoldWrapper>
  )
}
