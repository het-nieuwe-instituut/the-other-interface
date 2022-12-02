import { SupportedQuerys, ZoomLevel5DetailResponses } from '@/features/pages/tasks/getZoom5RecordTask'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { Box, keyframes, Text } from '@chakra-ui/react'
import React, { memo } from 'react'
import { EntityNames, StoryBySlugQuery } from 'src/generated/graphql'
import { Cloud } from '../../components/Cloud'
import { Dimensions, ZoomStates } from '../../types/galaxy'
import { RecordCloudHighlight } from './components/RecordHighlight'
import { ParentRelation } from './hooks/usePositionClouds'
import { usePresenter } from './usePresenter'

export interface RecordCloudProps {
    dimensions: Dimensions
    zoomLevel5: ZoomLevel5Entities
    relations: ZoomLevel5DetailResponses['zoom5relations']
    type: SupportedQuerys
}

export type ZoomLevel5Entities =
    | ZoomLevel5DetailResponses['zoom5detail']
    | NonNullable<NonNullable<StoryBySlugQuery['stories']>['data']>[0]

export const SVG_DIMENSIONS = { width: 1280, height: 800 }
const opacityIn = keyframes`
    from {opacity: 0.3 }
    to {opacity: 1}
`

const opacityOut = keyframes`
    to {opacity: 0.3}
`

const RecordClouds: React.FunctionComponent<RecordCloudProps> = props => {
    const { t } = useLooseTypeSafeTranslation('record')
    const {
        svgRef,
        relationsPositionData,
        dimensions: { height, width },
        type,
        zoomLevel5,
        zoomLevel,
    } = usePresenter(props)

    return (
        <Box overflow="visible" height={height} width={width}>
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
                        <React.Fragment key={`${index}-${array.length}-${relation.label}`}>
                            <Cloud
                                className="foreign-parent"
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
                            </Cloud>

                            {relation.children.map((child, index, array) => {
                                return (
                                    <Cloud
                                        key={`${index}-${array.length}-${child.label}`}
                                        className="foreign-child"
                                        hoverBackground={`typeColors.${relation.type.toLowerCase()}.hover1`}
                                        defaultBackground={`typeColors.${relation.type.toLowerCase()}.hover1`}
                                        x={child.x}
                                        y={child.y}
                                        height={192}
                                        width={192}
                                        backgroundAnimation={
                                            zoomLevel === ZoomStates.Zoom5
                                                ? `${opacityIn} 1500ms linear`
                                                : `${opacityOut} 0ms linear`
                                        }
                                        disableHover={true}
                                    >
                                        <Box width={'75%'} zIndex={1} data-child>
                                            <Text textStyle={'cloudText'} textAlign={'center'} flexWrap={'wrap'}>
                                                {child.label}
                                            </Text>
                                        </Box>
                                    </Cloud>
                                )
                            })}
                        </React.Fragment>
                    )
                })}
            </svg>
        </Box>
    )

    function renderHighLight() {
        if (zoomLevel5?.__typename === 'ObjectsZoomLevel5DetailType') {
            return (
                <RecordCloudHighlight
                    className="foreign-highlight"
                    type={type}
                    title={zoomLevel5.title ?? undefined}
                    // image={{
                    //     url: zoomLevel5.image ?? undefined,
                    //     width: 100,
                    //     height: 100,
                    //     alt: zoomLevel5.imageLabel ?? undefined,
                    // }}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }
        if (zoomLevel5?.__typename === 'PoepleZoomLevel5DetailType') {
            return (
                <RecordCloudHighlight
                    className="foreign-highlight"
                    type={type}
                    title={zoomLevel5.name ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }
        if (zoomLevel5?.__typename === 'PublicationsBookZoomLevel5DetailType') {
            return (
                <RecordCloudHighlight
                    className="foreign-highlight"
                    type={type}
                    title={zoomLevel5.title ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }
        if (zoomLevel5?.__typename === 'PublicationsArticleZoomLevel5DetailType') {
            return (
                <RecordCloudHighlight
                    className="foreign-highlight"
                    type={type}
                    title={zoomLevel5.title ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }

        if (zoomLevel5?.__typename === 'PublicationsAudioVisualZoomLevel5DetailType') {
            return (
                <RecordCloudHighlight
                    className="foreign-highlight"
                    type={type}
                    title={zoomLevel5.title ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }

        if (zoomLevel5?.__typename === 'PublicationsSerialZoomLevel5DetailType') {
            return (
                <RecordCloudHighlight
                    className="foreign-highlight"
                    type={type}
                    title={zoomLevel5.title ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }

        if (zoomLevel5?.__typename === 'ArchivesFondsZoomLevel5DetailType') {
            return (
                <RecordCloudHighlight
                    className="foreign-highlight"
                    type={type}
                    title={zoomLevel5.recordTitle ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }

        if (zoomLevel5?.__typename === 'ArchivesOtherZoomLevel5DetailType') {
            return (
                <RecordCloudHighlight
                    className="foreign-highlight"
                    type={type}
                    title={zoomLevel5.title ?? undefined}
                    queryType={zoomLevel5?.__typename}
                    dimensions={SVG_DIMENSIONS}
                />
            )
        }

        if (zoomLevel5?.__typename === 'StoryEntity') {
            return (
                <RecordCloudHighlight
                    className="foreign-highlight"
                    type={SupportedQuerys.stories}
                    title={zoomLevel5.attributes?.title ?? undefined}
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

export const MemoizedRecordClouds = memo(RecordClouds)
export default MemoizedRecordClouds
