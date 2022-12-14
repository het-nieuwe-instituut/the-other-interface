import { Box, keyframes, Text } from '@chakra-ui/react'
import { Circle } from '../../../components/Circle'
import React from "react"
import { EntityNames, ZoomLevel5RelationsType } from 'src/generated/graphql'
import { ParentRelation } from '../../hooks/usePositionClouds'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { usePresenter } from './usePresenter'

const opacityIn = keyframes`
    from {opacity: 0.3 }
    to {opacity: 1}
`

const opacityOut = keyframes`
    to {opacity: 0.3}
`

interface RecordCloudsProps {
    relations: Array<ZoomLevel5RelationsType>
    parentRef:  React.RefObject<SVGSVGElement>
}

const RecordClouds = (props: RecordCloudsProps) => {
    const { t } = useLooseTypeSafeTranslation('record')
    const { relationsPositionData, zoomed } = usePresenter(props.relations, props.parentRef)
    return (
        <>
         {relationsPositionData.map((relation, index, array) => {
                    return (
                        <React.Fragment key={`${index}-${array.length}-${relation.label}`}>
                            <Circle
                                className="parent"
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
                                        key={`${index}-${array.length}-${child.label}`}
                                        className="child"
                                        hoverBackground={`typeColors.${relation.type.toLowerCase()}.hover1`}
                                        defaultBackground={`typeColors.${relation.type.toLowerCase()}.hover1`}
                                        x={child.x}
                                        y={child.y}
                                        height={192}
                                        width={192}
                                        backgroundAnimation={
                                            zoomed ? `${opacityIn} 1500ms linear` : `${opacityOut} 0ms linear`
                                        }
                                    >
                                        <Box width={'75%'} zIndex={1} data-child>
                                            <Text textStyle={'cloudText'} textAlign={'center'} flexWrap={'wrap'}>
                                                {child.label}
                                            </Text>
                                        </Box>
                                    </Circle>
                                )
                            })}
                        </React.Fragment>
                    )
                })}
                </>
    )

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