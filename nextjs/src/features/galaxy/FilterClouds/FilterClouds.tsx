import { Circle } from '@/features/galaxy/components/Circle'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useId } from 'react'
import { ZoomLevel2Query } from 'src/generated/graphql'
import { SupportedLandingPages } from './FilterCloudsContainer'
import { PossibleFilters } from './types'
import { usePresenter } from './usePresenter'

type Props = {
    dimensions: {
        height: number
        width: number
    }
    zoomLevel2: ZoomLevel2Query['zoomLevel2']
    type: SupportedLandingPages
}

const FilterClouds: React.FunctionComponent<Props> = ({ dimensions, type, zoomLevel2 }) => {
    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height
    const router = useRouter()
    const id = useId().replaceAll(':', '')
    const { svgRef, zoomed, objectsPerTypeWithIds } = usePresenter(dimensions, id, zoomLevel2)
    const { t } = useTypeSafeTranslation('landingpage')

    return (
        <Box overflow="hidden" height={svgHeight} width={svgWidth}>
            <svg
                width={svgWidth}
                height={svgHeight}
                ref={svgRef}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            >
                {objectsPerTypeWithIds?.map((item, index, array) => {
                    return (
                        <Circle
                            key={`${index}-${array.length}`}
                            className={id}
                            defaultBackground={`levels.z2.backgrounds.${type}Filters.${item.id}`}
                            hoverBackground={`levels.z2.backgrounds.${type}Filters.${item.id}`}
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
                                            {t(router.query.slug as PossibleFilters)}
                                        </Text>
                                        <Text width="12.5rem" textStyle={'cloudText'}>
                                            {item.name}
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

export default FilterClouds
