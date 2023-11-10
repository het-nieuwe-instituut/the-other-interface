'use client'
import { Flex, Text, Link, theme } from '../../configs/chakra'

import { FOOTER_Z_INDEX } from '../../constants/mainConstants'
import { capitalizeFirstLetter } from '../../utils/text'
import { MenuPagesQuery } from 'src/generated/graphql'
import { usePresenter } from './usePresenter'

type Props = {
  menupages?: MenuPagesQuery
}

export const Footer = ({ menupages }: Props) => {
  const { sectionOne, sectionTwo, lang } = usePresenter(menupages)

  return (
    <Flex
      justifyContent={'space-between'}
      minHeight={{ sm: '428px', md: '428px', lg: '233px', xl: '233px', '2xl': '233px' }}
      px={'8'}
      marginX={'auto'}
      paddingTop={'9'}
      paddingBottom={'9'}
      backgroundColor={'ivoryAlpha.95'}
      position={'relative'}
      zIndex={FOOTER_Z_INDEX}
    >
      <Flex
        flex={0.16}
        position={'relative'}
        justifyContent={{ sm: 'flex-start', md: 'flex-start', lg: 'center', xl: 'center' }}
      >
        <Text
          textStyle="h3"
          position={'absolute'}
          top={0}
          transform={'rotate(180deg)'}
          css={{ writingMode: 'vertical-rl' }}
          textAlign={'center'}
        >
          Het Nieuwe Instituut
        </Text>
      </Flex>

      <Flex
        justifyContent={'space-between'}
        flex={0.76}
        flexWrap={'wrap'}
        flexDirection={{ sm: 'column', md: 'column', lg: 'unset', xl: 'row' }}
      >
        <Flex flex={0.3} flexDirection={'column'} justifyContent={'space-between'}>
          <Link
            mr={2}
            href={`https://goo.gl/maps/m5EvkSa3z321G68z6`}
            variant={'decorative'}
            cursor="pointer"
            textStyle="body"
          >
            Het Nieuwe Instituut Museumpark 25 3015CB Rotterdam
          </Link>
          <Flex flexDirection={'column'}>
            <Link
              mr={2}
              href={`tel:+31(0)10-4401200`}
              variant={'decorative'}
              cursor="pointer"
              textStyle="body"
            >
              +31(0)10-4401200
            </Link>
            <Link
              href={`mailto:info@hetnieuweinstituut.net`}
              variant={'decorative'}
              cursor="pointer"
              textStyle="body"
            >
              Info@hetnieuweinstituut.net
            </Link>
          </Flex>
        </Flex>

        {sectionOne && sectionOne?.length > 0 && (
          <Flex
            flex={0.3}
            flexDirection={'column'}
            minW={{ sm: '400px', md: '400px', lg: 'unset', xl: 'unset' }}
          >
            <>
              {sectionOne.map(link => (
                <Link
                  key={Math.random()}
                  href={`${link?.attributes?.slug}`}
                  variant={'decorative'}
                  cursor="pointer"
                  textStyle="small"
                >
                  {capitalizeFirstLetter(link?.attributes?.Title ?? '')}
                </Link>
              ))}
            </>
          </Flex>
        )}

        {sectionTwo && sectionTwo?.length > 0 && (
          <Flex
            flex={0.3}
            flexDirection={'column'}
            minW={{ sm: '400px', md: '400px', lg: 'unset', xl: 'unset' }}
          >
            <>
              {sectionTwo.map(link => (
                <Link
                  key={Math.random()}
                  href={`/menupage/${link?.attributes?.slug}?lang=${lang}`}
                  variant={'decorative'}
                  cursor="pointer"
                  textStyle="small"
                >
                  {capitalizeFirstLetter(link?.attributes?.Title ?? '')}
                </Link>
              ))}
            </>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}
