import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import PaginationLeft from '@/icons/arrows/pagination-left.svg'
import PaginationRight from '@/icons/arrows/pagination-right.svg'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useId } from 'react'
import { Zoom3Query } from 'src/generated/graphql'
import { Circle } from '../components/Circle'
import { SupportedLandingPages } from './PaginatedFilterCloudsContainer'
import { getId, usePresenter } from './usePresenter'

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
    const router = useRouter()
    const id = useId().replaceAll(':', '')
    const { svgRef, zoomed, backgrounds, paginateBack, paginateNext, total, totalPages, currentPage } = usePresenter(
        dimensions,
        zoom3,
        id
    )
    const { t } = useTypeSafeTranslation('landingpage')
    console.log(zoom3)

    return (
        <Box overflow="hidden" height={svgHeight} width={svgWidth}>
            <svg
                width={svgWidth}
                height={svgHeight}
                ref={svgRef}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                style={{ overflow: 'visible' }}
            >
                {zoom3.map((item, index, array) => {
                    const backgroundItem = backgrounds.find(background => background.id === getId(item))

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
                                            {t(router.query.slug as SupportedLandingPages)}
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
                            <Text textStyle={'cloudText'} mb={4}>
                                {total} {t(router.query.slug as SupportedLandingPages)}
                            </Text>
                            <Flex alignItems={'center'} gap={1}>
                                <Box as={'button'} pr="2" aria-label="left" onClick={paginateBack}>
                                    <PaginationLeft />
                                </Box>
                                <Text textStyle={'cloudText'}>{`${currentPage}/${totalPages}`}</Text>
                                <Box as="button" pl="2" aria-label="right" onClick={paginateNext}>
                                    <PaginationRight />
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Circle>
            </svg>
        </Box>
    )
}

export default PaginatedFilterClouds
