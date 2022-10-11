import { Circle } from '@/features/GalaxyInterface/components/Circle'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Text } from '@chakra-ui/react'
import { useId, useMemo } from 'react'
import { FilterType } from './types'
import { usePresenter } from './usePresenter'

type Props = {
    data: FilterType[]
    dimensions: {
        height: number
        width: number
    }
    type: SupportedLandingPages
}

export enum SupportedLandingPages {
    Publications = 'publications',
    People = 'people',
    Archives = 'archives',
    Objects = 'objects',
}

const FilterClouds: React.FunctionComponent<Props> = ({ dimensions, data, type }) => {
    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height
    const objectsPerTypeWithIds = useMemo(() => data.map(item => ({ ...item, name: item.name })), [data])
    const id = useId().replaceAll(':', '')
    const { svgRef, zoomed } = usePresenter(dimensions, objectsPerTypeWithIds, id)
    const { t } = useTypeSafeTranslation('landingpage')

    return (
        <Box overflow="hidden" height={svgHeight} width={svgWidth}>
            <svg
                width={svgWidth}
                height={svgHeight}
                ref={svgRef}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            >
                {objectsPerTypeWithIds.map((item, index, array) => {
                    return (
                        <Circle
                            key={`${index}-${array.length}`}
                            className={id}
                            defaultBackground={`levels.z2.${type}Filters.${item.name}`}
                            hoverBackground={`levels.z2.${type}Filters.${item.name}`}
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
                                            {t(item.name)}
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
