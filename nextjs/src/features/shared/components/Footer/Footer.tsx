'use client'
import { Flex, Text, Link } from '../../configs/chakra'

import { FOOTER_Z_INDEX } from '../../constants/mainConstants'
import { capitalizeFirstLetter } from '../../utils/text'
import { MenuPagesQuery } from 'src/generated/graphql'
import { usePresenter } from './usePresenter'
import Logo from '@/icons/logo.svg'

type Props = {
  menupages?: MenuPagesQuery
}

export const Footer = ({ menupages }: Props) => {
  const { sectionOne, sectionTwo, lang } = usePresenter(menupages)
  const hasSectionOne = sectionOne && sectionOne.length > 0
  const hasSectionTwo = sectionTwo && sectionTwo.length > 0

  // const hasSectionOne = sectionOne && sectionOne.length > 0
  // const hasSectionTwo = sectionTwo && sectionTwo.length > 0

  const dynamicSectionPresent = hasSectionOne || hasSectionTwo

  return (
    <Flex
      justifyContent={'space-between'}
      direction={{ base: 'column', md: 'row', lg: 'row', xl: 'row' }}
      alignItems={{ base: 'center', md: 'start', lg: 'start', xl: 'start' }}
      minHeight={{ base: 'auto', md: '846px', lg: '493px', xl: '189px', '2xl': '189px' }}
      px={'8'}
      marginX={'auto'}
      paddingTop={'9'}
      paddingBottom={'9'}
      backgroundColor={'ivoryAlpha.95'}
      position={'relative'}
      zIndex={FOOTER_Z_INDEX}
    >
      {/* Logo and Static Links Column */}
      <Flex
        direction="column"
        flex={{ md: 1, lg: 1, xl: dynamicSectionPresent ? '0.3333' : '0.5' }}
        alignItems={{ md: 'flex-start', lg: 'flex-start', xl: 'flex-start' }}
        mb={{ base: 5, md: 0 }}
      >
        <Logo />
        <Flex direction="column" mt={{ base: 5, lg: 5, xl: 0 }} alignItems="flex-start">
          {/* Insert static links here */}
          <Link href={`https://goo.gl/maps/m5EvkSa3z321G68z6`} variant={'decorative'}>
            Het Nieuwe Instituut Museumpark 25 3015CB Rotterdam
          </Link>
          <Link href={`tel:+31(0)10-4401200`} variant={'decorative'}>
            +31(0)10-4401200
          </Link>
          <Link href={`mailto:info@hetnieuweinstituut.net`} variant={'decorative'}>
            Info@hetnieuweinstituut.net
          </Link>
        </Flex>
        {/* <Link
          href={`https://goo.gl/maps/m5EvkSa3z321G68z6`}
          variant={'decorative'}
          cursor="pointer"
          textStyle="body"
          mt={{ base: 5, lg: 5, xl: 0 }}
          mr={{ xl: 2 }}
        >
          Het Nieuwe Instituut Museumpark 25 3015CB Rotterdam
        </Link>
        <Link
          href={`tel:+31(0)10-4401200`}
          variant={'decorative'}
          cursor="pointer"
          textStyle="body"
          mt={{ base: 5, lg: 5, xl: 0 }}
          mr={{ xl: 2 }}
        >
          +31(0)10-4401200
        </Link>
        <Link
          href={`mailto:info@hetnieuweinstituut.net`}
          variant={'decorative'}
          cursor="pointer"
          textStyle="body"
          mt={{ base: 5, lg: 5, xl: 0 }}
        >
          Info@hetnieuweinstituut.net
        </Link> */}
      </Flex>

      {dynamicSectionPresent && (
        <Flex
          direction={{ base: 'column', md: 'row' }}
          flex={{ md: 1, lg: 1, xl: '0.6666' }}
          justifyContent="space-between"
          mb={{ base: 5, md: 0 }}
          w={{ lg: 'auto', xl: '66.66%' }} // Ensure the dynamic columns don't shrink below content width on 'lg'
        >
          {/* Dynamic Links Column 1 */}
          {hasSectionOne && (
            <Flex
              direction="column"
              flex={{ xl: '0.3333' }}
              alignItems={{ lg: 'flex-start', xl: 'flex-start' }}
            >
              {sectionOne.map(link => (
                <Link
                  key={link.id} // Use unique ID from your data
                  href={`${link?.attributes?.slug}`}
                  variant={'decorative'}
                  cursor="pointer"
                  textStyle="small"
                >
                  {capitalizeFirstLetter(link?.attributes?.Title ?? '')}
                </Link>
              ))}
            </Flex>
          )}

          {/* Dynamic Links Column 2 */}
          {hasSectionTwo && (
            <Flex
              direction="column"
              flex={{ xl: '0.3333' }}
              alignItems={{ lg: 'flex-start', xl: 'flex-start' }}
            >
              {sectionTwo.map(link => (
                <Link
                  key={link.id} // Use unique ID from your data
                  href={`/menupage/${link?.attributes?.slug}?lang=${lang}`}
                  variant={'decorative'}
                  cursor="pointer"
                  textStyle="small"
                >
                  {capitalizeFirstLetter(link?.attributes?.Title ?? '')}
                </Link>
              ))}
            </Flex>
          )}
        </Flex>
      )}
      {/* Dynamic Links Columns */}
    </Flex>
  )
}
