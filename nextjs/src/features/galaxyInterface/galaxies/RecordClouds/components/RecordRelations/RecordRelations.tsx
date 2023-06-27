import { Box, keyframes, Text } from '@chakra-ui/react'
import React from 'react'
import { EntityNames, ZoomLevel5RelationsType } from 'src/generated/graphql'

import { Cloud } from '@/features/galaxyInterface/components/Cloud'
import { useLooseTypeSafeTranslation } from '@/features/shared/hooks/translations'
import { ParentRelation } from '../../utils/calculus'
import { usePresenter } from './usePresenter'

const opacityIn = keyframes`
    from {opacity: 0.3 }
    to {opacity: 1}
`

const opacityOut = keyframes`
    to {opacity: 0.3}
`

interface RecoredRelationsProps {
    relations: Array<ZoomLevel5RelationsType>
    parentRef: React.RefObject<SVGSVGElement>
}

const RecoredRelations = (props: RecoredRelationsProps) => {
    const { t } = useLooseTypeSafeTranslation('record')
    const { relationsPositionData, zoomed } = usePresenter(props.relations, props.parentRef)
    return (
        <>
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
                                        zoomed ? `${opacityIn} 1500ms linear` : `${opacityOut} 0ms linear`
                                    }
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

export default RecoredRelations