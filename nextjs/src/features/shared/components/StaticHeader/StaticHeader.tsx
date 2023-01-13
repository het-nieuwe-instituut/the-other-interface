import { Flex, Link, Box } from '@chakra-ui/react'
import { STATIC_HEADER_Z_INDEX } from '../../constants/mainConstants'
import { useLooseTypeSafeTranslation } from '../../hooks/translations'
import { GalaxyTopRight } from '../GalaxyWrapper/GalaxyTopRight/GalaxyTopRight'

export const StaticHeader = () => {
    const { t: tNavigation } = useLooseTypeSafeTranslation('navigation')
    return (
        <>
            <Flex
                paddingLeft={8}
                paddingTop={4}
                justifyContent={'space-between'}
                flexDirection={'row'}
                height={'40px'}
                overflow={'hidden'}
                alignItems={'center'}
                width={'100%'}
                marginRight={4}
                marginX={'auto'}
                position={{ sm: 'initial', md: 'fixed', lg: 'fixed', xl: 'fixed' }}
                maxWidth={{ sm: 'initial', md: '90em', lg: '90em', xl: '90em' }}
                left={0}
                right={0}
                zIndex={STATIC_HEADER_Z_INDEX}
                pointerEvents={'all'}
            >
                <Link
                    href={'/'}
                    variant={'decorative'}
                    cursor="pointer"
                    textStyle="small"
                    whiteSpace={'nowrap'}
                    textOverflow={'ellipsis'}
                    overflow={'hidden'}
                >
                    {tNavigation('theNewInstitute')}
                </Link>
                <Box marginRight={'8'} marginTop={'-3px'}>
                    <GalaxyTopRight />
                </Box>
            </Flex>
        </>
    )
}
