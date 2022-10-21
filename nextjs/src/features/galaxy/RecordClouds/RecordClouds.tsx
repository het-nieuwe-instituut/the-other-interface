import { useTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { typeColors } from '@/features/shared/styles/theme/foundations/colors'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { RecordQueryParams } from 'src/pages/landingpage/[slug]/[filter]/[collection]/[record]'
import { Circle } from '../components/Circle'

import { Dimensions } from '../types/galaxy'
import { SupportedQuerys, ZoomLevel5DetailResponses } from './useZoom5DetailQuery'
import { ObjectRelationsQuery } from 'src/generated/graphql'
import { usePresenter } from './usePresenter'

type Props = {
    dimensions: {
        height: number
        width: number
    }
    zoomLevel5: ZoomLevel5DetailResponses
    relations: ObjectRelationsQuery['relations']
}

const RecordClouds: React.FunctionComponent<Props> = ({ dimensions, zoomLevel5, relations }) => {
    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height
    const { svgRef } = usePresenter(relations)
    // const angle = Math.PI * 2 * Math.random()
    // const radius = 50

    // const x = Math.cos(angle) * radius
    // const y = Math.sin(angle) * radius

    return (
        <Box overflow="visible" height={svgHeight} width={svgWidth}>
            <svg
                ref={svgRef}
                width={svgWidth}
                height={svgHeight}
                viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
                style={{ overflow: 'visible' }}
            >
                {/* <circle r={radius} />
                <circle fill={'blue'} cx={x} cy={y} r="10" /> */}
                {renderHighLight()}
                <Box
                    as={'foreignObject'}
                    xmlns="http://www.w3.org/1999/xhtml"
                    width={dimensions.width}
                    height={dimensions.height}
                    style={{ overflow: 'visible' }}
                >
                    {relations?.map(relation => {
                        return (
                            <Box key={relation.type}>
                                <Text>{relation.type}</Text>
                                {relation.randomRelations?.map(randomRelation => (
                                    <Box key={relation.type}>
                                        <Text pl={4}>{randomRelation.label}</Text>
                                        {randomRelation.relations?.map(relation => (
                                            <Text pl={8} key={relation.type}>
                                                {relation.type}
                                            </Text>
                                        ))}
                                    </Box>
                                ))}
                            </Box>
                        )
                    })}
                </Box>
            </svg>
        </Box>
    )

    function renderHighLight() {
        if (zoomLevel5?.__typename === 'ObjectsZoomLevel5DetailType') {
            return (
                <RecordCloudHighlight
                    title={zoomLevel5.title ?? undefined}
                    image={{
                        url: zoomLevel5.image ?? undefined,
                        width: 100,
                        height: 100,
                        alt: zoomLevel5.imageLabel ?? undefined,
                    }}
                    dimensions={dimensions}
                    queryType={zoomLevel5?.__typename}
                />
            )
        }
        if (zoomLevel5?.__typename === 'PoepleZoomLevel5DetailType') {
            return (
                <RecordCloudHighlight
                    title={zoomLevel5.name ?? undefined}
                    dimensions={dimensions}
                    queryType={zoomLevel5?.__typename}
                />
            )
        }
    }
}

export default RecordClouds

interface RecordCloudHighlightProps {
    image?: {
        url?: string
        width: number
        height: number
        alt?: string
    }
    title?: string
    dimensions: Dimensions
    queryType: NonNullable<ZoomLevel5DetailResponses>['__typename']
}
export const RecordCloudHighlight: React.FunctionComponent<RecordCloudHighlightProps> = ({
    image,
    title,
    dimensions,
    queryType,
}) => {
    const router = useRouter()
    const { t } = useTypeSafeTranslation('record')
    const queryParams = router.query as unknown as RecordQueryParams
    const record = queryParams.record
    const type = record.split('-')[1] as SupportedQuerys

    const width = dimensions.width ?? 0
    const height = dimensions.height ?? 0
    const radius = 500

    return (
        <Circle
            height={`${radius}px`}
            width={`${radius}px`}
            x={width / 2 - radius / 2}
            y={height / 2 - radius / 2}
            defaultBackground={typeColors[type].hover1}
            hoverBackground={typeColors[type].hover1}
        >
            <Flex
                height={'100%'}
                width={'100%'}
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                zIndex={1}
            >
                <Text textStyle={'cloudTextMicro'} mb={2.5}>
                    {t(type)}
                </Text>
                <Text textStyle={'cloudTextLarge'} maxWidth="412px" flexWrap={'wrap'} textAlign={'center'}>
                    {title}
                </Text>

                {renderImage()}
            </Flex>
        </Circle>
    )

    function renderImage() {
        if (!image || !image.url) {
            return
        }

        const options = {
            url: 'https://cdn.pixabay.com/photo/2013/07/12/17/47/test-pattern-152459_960_720.png',
            height: 100,
            width: 100,
            alt: '',
        }

        if (queryType === 'PoepleZoomLevel5DetailType') {
            return <PersonImage image={options} />
        }

        return <GenericImage image={options} />
    }
}

const PersonImage: React.FC<{
    image?: {
        url?: string
        width: number
        height: number
        alt?: string
    }
}> = ({ image }) => {
    return (
        <Box borderRadius={'100%'} mt={7} height={200} width={200} overflow={'hidden'} background={'black'}>
            <Image height={200} objectFit={'cover'} src={image?.url} alt={image?.alt ?? ''} />
        </Box>
    )
}

const GenericImage: React.FC<{
    image?: {
        url?: string
        width: number
        height: number
        alt?: string
    }
}> = ({ image }) => {
    return (
        <Box width={200} mt={7} overflow={'hidden'} background={'black'}>
            <Image objectFit={'cover'} src={image?.url} alt={image?.alt ?? ''} />
        </Box>
    )
}
