'use client'
import { Flex, Text, Link, Box } from '../../configs/chakra'

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

  const dynamicSectionPresent = hasSectionOne || hasSectionTwo

  return (
    <Box
      backgroundColor={'ivoryAlpha.90'}
      w={'100vw'}
      position={'relative'}
      zIndex={FOOTER_Z_INDEX}
    >
      <Flex
        justifyContent={'space-between'}
        direction={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'center', md: 'start' }}
        px={6}
        marginX={'auto'}
        paddingTop={'9'}
        paddingBottom={{ base: 20, lg: 24, xl: 20 }}
        maxW={'1440px'}
        overflow={'hidden'}
      >
        {/* Logo and Static Links Column */}
        <Flex
          direction="column"
          flex={{ md: 1, lg: 1, xl: dynamicSectionPresent ? '0.3333' : '0.5' }}
          alignItems={'flex-start'}
          mb={9}
        >
          <Flex direction={'column'} mb={9}>
            <Logo />
          </Flex>

          <Flex direction="column" alignItems="flex-start">
            {/* Insert static links here */}
            <Flex flexDirection={'column'} mb={9} w={{ base: '339px' }}>
              <Link href={`https://goo.gl/maps/m5EvkSa3z321G68z6`} variant={'footer'}>
                Nieuwe Instituut
              </Link>
              <Link href={`https://goo.gl/maps/m5EvkSa3z321G68z6`} variant={'footer'}>
                Museumpark 25 3015CB Rotterdam
              </Link>
            </Flex>

            <Flex flexDirection={'column'} w={{ base: '339px' }}>
              <Link href={`tel:+31(0)10-4401200`} variant={'footer'}>
                +31(0)10-4401200
              </Link>
              <Link href={`mailto:info@hetnieuweinstituut.net`} variant={'footer'}>
                info@nieuweinstituut.nl
              </Link>
            </Flex>
          </Flex>
        </Flex>

        {dynamicSectionPresent && (
          <Flex
            direction={{ base: 'column', xl: 'row' }}
            flex={{ md: 1, lg: 1, xl: '0.5' }}
            justifyContent="space-between"
            mb={{ base: 5, md: 0 }}
            w={{ base: 'auto', xl: '66.66%' }}
          >
            {/* Dynamic Links Column 1 */}
            {hasSectionOne && (
              <Flex
                direction="column"
                flex={{ xl: '0.3333' }}
                alignItems={{ lg: 'flex-start', xl: 'flex-start' }}
                mb={9}
                w={{ base: '339px' }}
              >
                {sectionOne.map(link => (
                  <Link
                    key={link.id} // Use unique ID from your data
                    href={`${link?.attributes?.slug}`}
                    variant={'footerDecorative'}
                    cursor="pointer"
                    w={'fit-content'}
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
                w={{ base: '339px' }}
              >
                {sectionTwo.map(link => (
                  <Link
                    key={link.id} // Use unique ID from your data
                    href={`/menupage/${link?.attributes?.slug}?lang=${lang}`}
                    variant={'footerDecorative'}
                    cursor="pointer"
                    w={'fit-content'}
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
    </Box>
  )
}
