import { Circle } from '@/features/GalaxyInterface/components/Circle'
import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { randomNumberBetweenPoints } from '@/features/shared/utils/numbers'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useId, useMemo } from 'react'
import { SupportedLandingPages } from '../FilterClouds/FilterClouds'
import { usePresenter } from './usePresenter'
import PaginationLeft from '@/icons/arrows/pagination-left.svg'
import PaginationRight from '@/icons/arrows/pagination-right.svg'
import { PaginatedFilterType } from './types'

type Props = {
    data: PaginatedFilterType[]
    dimensions: {
        height: number
        width: number
    }
    type: SupportedLandingPages
}

const PaginatedFilterClouds: React.FunctionComponent<Props> = ({ dimensions, data }) => {
    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height
    const objectsPerTypeWithIds = useMemo(
        () =>
            data.map(item => {
                const randomSValue = randomNumberBetweenPoints(10, 100)
                const randomLValue = randomNumberBetweenPoints(10, 90)
                const background = `radial-gradient(50% 50% at 50% 50%, hsla(120, ${randomSValue}%,${randomLValue}%,1) 0%, hsla(120, ${randomSValue}%,${randomLValue}%,0) 100%);`
                return { ...item, name: item.name, background }
            }),
        [data]
    )
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
                                <PaginationLeft />
                                <Text textStyle={'cloudText'}>{'10/10'}</Text>
                                <PaginationRight />
                            </Flex>
                        </Flex>
                    </Flex>
                </Circle>
                {objectsPerTypeWithIds.map((item, index, array) => {
                    return (
                        <Circle
                            key={`${index}-${array.length}`}
                            className={id}
                            defaultBackground={item.background}
                            hoverBackground={item.background}
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
