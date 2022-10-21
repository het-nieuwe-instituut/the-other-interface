import { useMemo, useRef } from 'react'
import { EntityNames, ObjectRelationsQuery } from 'src/generated/graphql'

const configuration = {
    [EntityNames.Archives]: {},
    [EntityNames.External]: {},
    [EntityNames.Media]: {},
    [EntityNames.Objects]: {},
    [EntityNames.People]: {},
    [EntityNames.Publications]: {},
    [EntityNames.Stories]: {},
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
    const svgRef = useRef()

    const relationsPositionData: ParentRelation[] = useMemo(() => {
        const test =
            relations?.map(relation => {
                const config = configuration[relation.type]

                return {
                    label: relation.type,
                    type: relation.type,
                    x: 0,
                    y: 0,
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
