import { useMemo, useRef } from 'react'
import { ObjectRelationsQuery } from 'src/generated/graphql'

const configuration = {
    peope: {},
    publications: {},
    archives: {},
    objects: {},
    stories: {},
}
export function usePresenter(relations: ObjectRelationsQuery['relations']) {
    const svgRef = useRef()

    const relationsPositionData = useMemo(() => {
        const test = relations?.map()
    }, [relations])
    return { svgRef }
}
