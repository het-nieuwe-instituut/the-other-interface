import { Circle } from '@/features/GalaxyInterface/components/Circle'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import PaginationLeft from '@/icons/arrows/pagination-left.svg'
import PaginationRight from '@/icons/arrows/pagination-right.svg'
import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import { useId } from 'react'
import { Zoom3Query } from 'src/generated/graphql'
import { SupportedLandingPages } from '../FilterClouds/FilterClouds'
import { usePresenter } from './usePresenter'

type Props = {
    zoom3: Zoom3Query['zoomLevel3']
    dimensions: {
        height: number
        width: number
    }
    type: SupportedLandingPages
}

const PaginatedFilterClouds: React.FunctionComponent<Props> = ({ dimensions, zoom3 }) => {
    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height

    const id = useId().replaceAll(':', '')
    const { svgRef, zoomed, backgrounds, paginateBack, paginateNext } = usePresenter(dimensions, zoom3, id)
    const { t } = useTypeSafeTranslation('landingpage')

    return (
        <Box overflow="hidden" height={svgHeight} width={svgWidth}>
            <svg
                width={svgWidth}
                height={svgHeight}
                ref={svgRef}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                style={{ overflow: 'visible' }}
            >
                <Circle className={'collision'}>
                    <Flex
                        width="100%"
                        height="100%"
                        borderRadius="100%"
                        zIndex="100"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Text textStyle={'cloudText'} mb={1}>
                                2000 {t('people')}
                            </Text>
                            <Flex alignItems={'center'} gap={1}>
                                <IconButton
                                    aria-label="left"
                                    variant={'unstyled'}
                                    padding={0}
                                    border="none"
                                    onClick={paginateBack}
                                >
                                    <PaginationLeft />
                                </IconButton>
                                <Text textStyle={'cloudText'}>{'10/10'}</Text>
                                <IconButton
                                    aria-label="right variant={'unstyled'}"
                                    padding={0}
                                    border="none"
                                    onClick={paginateNext}
                                >
                                    <PaginationRight />
                                </IconButton>
                            </Flex>
                        </Flex>
                    </Flex>
                </Circle>
                {zoom3.map((item, index, array) => {
                    const backgroundItem = backgrounds.find(background => background.id === item.uri)
                    return (
                        <Circle
                            key={`${index}-${array.length}`}
                            className={id}
                            defaultBackground={backgroundItem?.background}
                            hoverBackground={backgroundItem?.background}
                        >
                            <Box
                                as="button"
                                width="100%"
                                height="100%"
                                borderRadius="100%"
                                zIndex="100"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                {!zoomed && (
                                    <Box>
                                        <Text width="12.5rem" textStyle={'cloudText'}>
                                            {t('people')}
                                        </Text>
                                        <Text width="12.5rem" textStyle={'cloudText'}>
                                            {t('genericBy', { name: item.name })}
                                        </Text>
                                    </Box>
                                )}
                            </Box>
                        </Circle>
                    )
                })}
            </svg>
        </Box>
    )
}

export default PaginatedFilterClouds
