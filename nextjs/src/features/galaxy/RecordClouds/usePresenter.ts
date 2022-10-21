import { useMemo, useRef } from 'react'
import { EntityNames, ObjectRelationsQuery } from 'src/generated/graphql'

const configuration = {
    [EntityNames.Archives]: {
        x: 0,
        y: 0,
    },
    [EntityNames.External]: {
        x: 0,
        y: 0,
    },
    [EntityNames.Media]: {
        x: 0,
        y: 0,
    },
    [EntityNames.Objects]: {
        x: 0,
        y: 0,
    },
    [EntityNames.People]: {
        x: 0,
        y: 0,
    },
    [EntityNames.Publications]: {
        x: 0,
        y: 0,
    },
    [EntityNames.Stories]: {
        x: 0,
        y: 0,
    },
}

interface ParentRelation {
    label: string
    type: EntityNames
    x: number
    y: number
    children: Relation[]
}
interface Relation {
    label: string
    type: EntityNames
    position: number
}

export function usePresenter(relations: ObjectRelationsQuery['relations']) {
    const svgRef = useRef<SVGSVGElement | null>(null)

    const relationsPositionData: ParentRelation[] = useMemo(() => {
        const test =
            relations?.map(relation => {
                const config = configuration[relation.type]

                return {
                    label: relation.type,
                    type: relation.type,
                    x: config.x,
                    y: config.y,
                    children:
                        relation.randomRelations?.map(randomRelation => {
                            return {
                                label: randomRelation.label,
                                type: randomRelation.type,
                                position: 100,
                            }
                        }) ?? [],
                }
            }) ?? []

        return test
    }, [relations])

    return { svgRef, relationsPositionData }
}
