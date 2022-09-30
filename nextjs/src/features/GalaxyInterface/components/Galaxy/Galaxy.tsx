import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Flex, Text } from '@chakra-ui/react'
import { times } from 'lodash'
import React, { useEffect, useId, useMemo, useState } from 'react'
import { ObjectPerType, usePresenter, ZoomLevel } from './usePresenter'
import { StoriesSystem } from '../../zoom0/StoriesSystem/StoriesSystem'
import { Circle } from '../Circle'
import { storiesStubs } from '../stubs'

interface Dimensions {
    height: number
    width: number
}
interface Props {
    data: ObjectPerType[]
    dimensions: {
        height: number
        width: number
    }
}

export interface InstancesPerClass {
    instance: string
    title: string
    parent: string
}

// TODO: should implement real data, remove useQuery and fetchInstancesPerClass
async function fetchInstancesPerClass() {
    const stub = () => new Promise<typeof storiesStubs>(resolve => resolve(storiesStubs))
    const instancesPerClass = await stub()
    const parents = times(instancesPerClass.length / 1000, i => `test${i}`)

    return instancesPerClass
        .map(item => ({
            ...item,
            parent: parents[Math.floor((Math.random() * instancesPerClass.length) / 10) + 1] ?? parents[0],
        }))
        .slice(0, 500)
}

function useQuery<T, Q extends () => ReturnType<Q>>(keys: T, query: Q) {
    const [isLoading, setIsloading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState<Awaited<ReturnType<Q>> | undefined>(undefined)

    useEffect(() => {
        async function handle() {
            try {
                setIsError(false)
                setIsloading(true)
                const result = await query()
                setIsloading(false)
                setData(result as Awaited<ReturnType<Q>> | undefined)
            } catch {
                setIsError(true)
            }
        }

        handle()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        isLoading,
        isError,
        data,
    }
}

const Galaxy: React.FC<Props> = ({ data = [], dimensions }) => {
    const { isLoading, data: stories } = useQuery(['instances-per-class'], () => fetchInstancesPerClass())

    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height
    const objectsPerTypeWithIds = useMemo(
        () => data.map(item => ({ ...item, name: item.class.substring(item.class.lastIndexOf('/') + 1) })),
        [data]
    )
    const { t } = useTypeSafeTranslation('homepage')

    const id = useId().replaceAll(':', '')
    const { svgRef, setZoomLevel, zoomLevel } = usePresenter(dimensions, objectsPerTypeWithIds, id)

    return (
        <Box height={dimensions.height} boxSizing="border-box" position={'relative'} overflow="hidden">
            {zoomLevel === ZoomLevel.Zoom0 && (
                <Flex
                    height="100%"
                    width="100%"
                    position="absolute"
                    alignItems={'center'}
                    justifyContent={'center'}
                    zIndex={1}
                >
                    <button onClick={() => setZoomLevel(ZoomLevel.Zoom1)}>
                        <Text width="12.5rem">{t('nationalCollectionForDutchArchitectureAndUrbanPlanning')}</Text>
                    </button>
                </Flex>
            )}

            <svg
                overflow="visible"
                width={svgWidth}
                height={svgHeight}
                ref={svgRef}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
            >
                <>
                    {!isLoading && stories?.length && (
                        <StoriesSystemObject
                            dimensions={dimensions}
                            stories={stories ?? []}
                            setZoomLevel={setZoomLevel}
                            zoomLevel={zoomLevel}
                        />
                    )}

                    <ShadowCircles dimensions={dimensions} />

                    {objectsPerTypeWithIds.map((item, index, array) => {
                        return (
                            <Circle key={`${index}-${array.length}`} className={id} id={item.name} name={item.name}>
                                {zoomLevel === ZoomLevel.Zoom1 && (
                                    <Flex flex="1" alignItems="center" justifyContent="center">
                                        <button onClick={() => undefined}>Go to {item.name}</button>
                                    </Flex>
                                )}
                            </Circle>
                        )
                    })}
                </>
            </svg>
        </Box>
    )
}
export default Galaxy

const STORIES_SYSTEM_MAX_WIDTH = 537.85
const StoriesSystemObject: React.FC<{
    dimensions: Dimensions
    stories: InstancesPerClass[]
    setZoomLevel: (zoom: ZoomLevel) => void
    zoomLevel: ZoomLevel
}> = ({ dimensions, stories, setZoomLevel, zoomLevel }) => {
    const { t } = useTypeSafeTranslation('homepage')

    return (
        <foreignObject
            xmlns="http://www.w3.org/1999/xhtml"
            x={dimensions.width / 2 - STORIES_SYSTEM_MAX_WIDTH / 12}
            y={dimensions.height / 2 - STORIES_SYSTEM_MAX_WIDTH / 2}
            width={STORIES_SYSTEM_MAX_WIDTH}
            height={STORIES_SYSTEM_MAX_WIDTH}
        >
            {zoomLevel === ZoomLevel.Zoom1 && (
                <Box
                    marginLeft={-50}
                    marginTop={-7}
                    height="100%"
                    width="100%"
                    display="flex"
                    position="absolute"
                    alignItems="center"
                    justifyContent="center"
                >
                    <button onClick={() => setZoomLevel(ZoomLevel.Zoom1)}>
                        <Text width="12.5rem">{stories.length}</Text>
                        <Text width="12.5rem">{t('stories')}</Text>
                    </button>
                </Box>
            )}
            <StoriesSystem data={stories ?? []} />
        </foreignObject>
    )
}

const SHADOW_CIRCLE_SIZE_MULTIPLIER = 3.3
const SHADOW_CIRCLE_SIZE = 1169.17
const ShadowCircles: React.FC<{ dimensions: Dimensions }> = ({ dimensions }) => {
    return (
        <>
            <ShadowCircle
                x={-(SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER) + dimensions.width / 2}
                y={-(SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER) + dimensions.height / 2}
                width={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
                height={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
            />
            <ShadowCircle
                x={-(SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER) + dimensions.width / 2}
                y={dimensions.height / 2}
                width={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
                height={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
            />
            <ShadowCircle
                x={0 + dimensions.width / 2}
                y={-(SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER) + dimensions.height / 2}
                width={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
                height={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
            />
            <ShadowCircle
                x={0 + dimensions.width / 2}
                y={dimensions.height / 2}
                width={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
                height={SHADOW_CIRCLE_SIZE * SHADOW_CIRCLE_SIZE_MULTIPLIER}
            />
            <ShadowCircle
                x={dimensions.width - 1500}
                y={-((SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)) / 2 - dimensions.height / 2)}
                width={SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)}
                height={SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)}
            />
            <ShadowCircle
                x={-(SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)) + 1500}
                y={-((SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)) / 2 - dimensions.height / 2)}
                width={SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)}
                height={SHADOW_CIRCLE_SIZE * (SHADOW_CIRCLE_SIZE_MULTIPLIER * 2)}
            />
        </>
    )
}

interface ShadowCircleProps {
    x: number
    y: number
    height: number
    width: number
}
const ShadowCircle: React.FC<ShadowCircleProps> = props => {
    return (
        <foreignObject
            xmlns="http://www.w3.org/1999/xhtml"
            x={props.x}
            y={props.y}
            width={props.width}
            height={props.height}
        >
            <Flex
                width={'100%'}
                height="100%"
                background="radial-gradient(50% 50% at 50% 50%, rgba(124, 124, 124, 0.8) 0%, rgba(80, 80, 80, 0.5125) 35.94%, rgba(62, 62, 62, 0) 100%)"
            ></Flex>
        </foreignObject>
    )
}
