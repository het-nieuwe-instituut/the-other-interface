import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, Text } from '@chakra-ui/react'
import { Circle } from '../components/Circle'

import { EntityNames, ObjectRelationsQuery } from 'src/generated/graphql'
import { RecordCloudHighlight } from './components/RecordHighlight'
import { usePresenter } from './usePresenter'
import { ZoomLevel5DetailResponses } from './useZoom5DetailQuery'
import { ParentRelation } from './hooks/usePositionClouds'

type Props = {
    dimensions: {
        height: number
        width: number
    }
    zoomLevel5: ZoomLevel5DetailResponses
    relations: ObjectRelationsQuery['relations']
}

export const SVG_DIMENSIONS = { width: 1280, height: 800 }

const RecordClouds: React.FunctionComponent<Props> = ({ dimensions, zoomLevel5, relations }) => {
    const { width, height } = dimensions
    const svgWidth = width
    const svgHeight = height
    const { svgRef, relationsPositionData } = usePresenter(relations)
    const { t } = useLooseTypeSafeTranslation('record')

    return (
        <Box overflow="visible" height={svgHeight} width={svgWidth}>
            <svg
                ref={svgRef}
                width={width}
                height={height}
                viewBox={`0 0 ${SVG_DIMENSIONS.width} ${SVG_DIMENSIONS.height}`}
                style={{ overflow: 'visible' }}
            >
                {renderHighLight()}
                {relationsPositionData.map((relation, index, array) => {
                    return (
                        <>
                            <Circle
                                className="parent"
                                key={`${index}-${array.length}-parent`}
                                hoverBackground={relation.background}
                                defaultBackground={relation.background}
                                x={relation.x}
                                y={relation.y}
                                height={relation.diameter}
                                width={relation.diameter}
                            >
                                <Box width={'75%'} zIndex={1} position={'absolute'}>
                                    <Text textStyle={'cloudText'} textAlign={'center'} flexWrap={'wrap'}>
                                        {getRelatedItemsTranslation(relation)}
                                    </Text>
                                </Box>
                            </Circle>

                            {relation.children.map((child, index, array) => {
                                return (
                                    <Circle
                                        className="child"
                                        key={`${index}-${array.length}-child`}
                                        hoverBackground={`typeColors.${relation.type.toLowerCase()}.related`}
                                        defaultBackground={`typeColors.${relation.type.toLowerCase()}.related`}
                                        x={child.x}
                                        y={child.y}
                                        height={192}
                                        width={192}
                                    >
                                        <Box width={'75%'} zIndex={1}>
                                            <Text textStyle={'cloudText'} textAlign={'center'} flexWrap={'wrap'}>
                                                {child.label}
                                            </Text>
                                        </Box>
                                    </Circle>
                                )
                            })}
                        </>
                    )
                })}
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
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }
        if (zoomLevel5?.__typename === 'PoepleZoomLevel5DetailType') {
            return (
                <RecordCloudHighlight
                    title={zoomLevel5.name ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }
    }

    function getRelatedItemsTranslation(relation: ParentRelation) {
        if (relation.type === EntityNames.People)
            return t('relatedPeople', { count: relation.showing, total: relation.total })
        if (relation.type === EntityNames.Objects)
            return t('relatedObjects', { count: relation.showing, total: relation.total })
        if (relation.type === EntityNames.Publications)
            return t('relatedPublications', { count: relation.showing, total: relation.total })
        if (relation.type === EntityNames.Archives) return t('relatedArchive', { count: relation.showing })
        if (relation.type === EntityNames.Stories) return t('relatedStories', { count: relation.showing })

        return ''
    }
}

export default RecordClouds
