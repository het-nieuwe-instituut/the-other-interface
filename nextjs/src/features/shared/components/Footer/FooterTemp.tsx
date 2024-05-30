'use client'
import { Link } from '../../configs/chakra'
import { capitalizeFirstLetter } from '../../utils/text'

import LogoSvg from '@/features/modules/components/LogoSvg/LogoSvg'

export const Footer = () => {
  return (
    <div className="bg-ivory-alpha-90 relative z-[FOOTER_Z_INDEX] w-full">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between overflow-hidden px-6 pb-20 pt-9 lg:flex-row lg:pb-24 xl:pb-20">
        {/* Logo and Static Links Column */}
        <div className="mb-9 flex flex-[1] flex-col items-start lg:flex-[1] xl:flex-[0.3333]">
          <div className="mb-9 flex cursor-pointer flex-col">
            <Link href={`https://nieuweinstituut.nl/${lang ?? 'nl'}`}>
              <a className="border-none hover:border-none">
                <LogoSvg width={logoSize?.width} height={logoSize?.height} />
              </a>
            </Link>
          </div>

          <div className="flex flex-col items-start">
            {/* Static Links */}
            <div className="mb-9 flex w-[339px] flex-col">
              <Link href="https://goo.gl/maps/m5EvkSa3z321G68z6">
                <a className="w-fit">
                  <p>Nieuwe Instituut,</p>
                  <p>Museumpark 25 3015CB Rotterdam</p>
                </a>
              </Link>
            </div>

            <div className="flex w-[339px] flex-col">
              <Link href="tel:+31(0)10-4401200">
                <a className="w-fit">+31(0)10-4401200</a>
              </Link>
              <Link href="mailto:info@nieuweinstituut.nl">
                <a className="w-fit">info@nieuweinstituut.nl</a>
              </Link>
            </div>
          </div>
        </div>

        {dynamicSectionPresent && (
          <div className="mb-5 flex w-auto flex-[1] flex-col justify-between md:mb-0 xl:w-2/3 xl:flex-[0.5] xl:flex-row">
            {/* Dynamic Links Column 1 */}
            {hasSectionOne && (
              <div className="mb-9 flex w-[339px] flex-[0.3333] flex-col items-start">
                {sectionOne.map(link => (
                  <Link key={link.id} href={`/menupage/${link.attributes.slug}?lang=${lang}`}>
                    <a className="mb-1 w-fit cursor-pointer">
                      {capitalizeFirstLetter(link.attributes.Title ?? '')}
                    </a>
                  </Link>
                ))}
              </div>
            )}

            {/* Dynamic Links Column 2 */}
            {hasSectionTwo && (
              <div className="flex w-[339px] flex-[0.3333] flex-col items-start">
                {sectionTwo.map(link => (
                  <Link key={link.id} href={`/menupage/${link.attributes.slug}?lang={lang}`}>
                    <a className="w-fit cursor-pointer">
                      {capitalizeFirstLetter(link.attributes.Title ?? '')}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
